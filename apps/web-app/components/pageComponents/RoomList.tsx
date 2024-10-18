import React, { useState, useEffect, useMemo } from "react";
import ReservationForm from "./ReservationForm";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ROOMS } from "@/gql";

interface FormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
}

interface RoomListProps {
  initialCheckIn: string;
  initialCheckOut: string;
  initialAdults: number;
  initialChildren: number;
  initialRoomType: string;
}

export default function RoomList({
  initialCheckIn,
  initialCheckOut,
  initialAdults,
  initialChildren,
  initialRoomType,
}: RoomListProps) {
  const [formData, setFormData] = useState<FormData>({
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    adults: initialAdults,
    children: initialChildren,
    roomType: initialRoomType,
  });
  const router = useRouter();
  const [availableRooms, setAvailableRooms] = useState<any[]>([]);
  const [extraRooms, setExtraRooms] = useState<number>(0);
  const [extraBeds, setExtraBeds] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const {
    loading: loadingRooms,
    error: roomsError,
    data: roomsData,
  } = useQuery(ROOMS, {
    variables: {
      where: {
        isAvailable: {
          equals: true,
        },
      },
    },
  });

  // Set available rooms once roomsData is fetched
  useEffect(() => {
    if (roomsData && roomsData.rooms) {
      // Group rooms by room type and count available rooms
      const groupedRooms = roomsData.rooms.reduce((acc: any, room: any) => {
        const roomTypeName = room.roomType.name;
        if (!acc[roomTypeName]) {
          acc[roomTypeName] = {
            roomType: room.roomType.name,
            price: room.roomType.offerPrice || room.roomType.actualPrice,
            originalPrice: room.roomType.actualPrice,
            discount: room.roomType.offerPrice
              ? `${Math.round(((room.roomType.actualPrice - room.roomType.offerPrice) / room.roomType.actualPrice) * 100)}% off`
              : null,
            reviews:
              room.roomType.reviews.reduce(
                (sum: number, review: any) => sum + review.rating,
                0
              ) / room.roomType.reviews.length,
            description: room.roomType.description,
            reviewCount: room.roomType.reviews.length,
            breakfastPrice: room.roomType.breakfastPrice.price,
            dinnerPrice: room.roomType.dinnerPrice.price,
            images: room.roomType.images.map((img: any) => ({
              src: img.image.url,
            })),
            isAvailableCount: 0, // Will count available rooms for this type
          };
        }

        acc[roomTypeName].isAvailableCount += room.isAvailable ? 1 : 0; // Increment available count
        return acc;
      }, {});

      // Convert the object back to an array for rendering
      setAvailableRooms(Object.values(groupedRooms));
    }
  }, [roomsData]);

  // Error handling for rooms query
  useEffect(() => {
    if (roomsError) {
      setError("Failed to fetch available rooms.");
    }
  }, [roomsError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Updated filtering logic to show all rooms when roomType is "All"
  const filteredRooms = useMemo(() => {
    return formData.roomType === "All"
      ? availableRooms // Show all available rooms
      : availableRooms.filter((room) => room.roomType === formData.roomType); // Show specific room type
  }, [availableRooms, formData.roomType]);

  // Memoize room capacity calculation to avoid triggering re-renders
  useMemo(() => {
    const maxAdults = 2;
    const maxChildren = 1; // Only 1 child allowed per room initially
    let extraRoomsNeeded = 0;
    let extraBedsNeeded = 0;
    let message = "";

    if (formData.adults > maxAdults) {
      extraRoomsNeeded = Math.ceil((formData.adults - maxAdults) / maxAdults);
    }

    if (formData.children > maxChildren) {
      const extraChildren = formData.children - maxChildren;
      if (extraChildren === 1) {
        extraBedsNeeded = 1;
      } else {
        extraRoomsNeeded += Math.ceil(extraChildren / 3);
      }
    }

    if (extraRoomsNeeded > 0) {
      message = `${extraRoomsNeeded} extra room${extraRoomsNeeded > 1 ? "s" : ""} needed.`;
    }

    if (extraBedsNeeded > 0) {
      message += ` ${extraBedsNeeded} rollaway bed${extraBedsNeeded > 1 ? "s" : ""} needed.`;
    }
    setExtraRooms(extraRoomsNeeded);
    setExtraBeds(extraBedsNeeded);
    return message;
  }, [formData.adults, formData.children]);

  // Check if the button should be disabled
  const isButtonDisabled =
    loadingRooms ||
    filteredRooms.length === 0 ||
    error !== "" ||
    new Date(formData.checkIn) >= new Date(formData.checkOut);

  return (
    <div className="lg:px-28 px-10 mx-auto relative z-10">
      <div
        className="bg-white p-6 pt-10 shadow-lg"
        style={{ boxShadow: "0px 20px 60px 0px rgba(21, 21, 21, 0.2)" }}
      >
        <ReservationForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          isLoading={loadingRooms}
        />

        {!loadingRooms && filteredRooms.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-5">Available Rooms</h2>
            <div className="grid grid-cols-1 gap-6">
              {filteredRooms.map((room, index) => {
                const totalRoomsRequired = extraRooms + 1; // The required rooms including the original room
                const isRoomAvailable =
                  room.isAvailableCount >= totalRoomsRequired;

                return (
                  <div
                    key={index}
                    className="border p-4 shadow-md rounded-lg flex" // Add blur and disable interactions if room is not available
                  >
                    <img
                      src={room.images[0].src}
                      alt={room.description}
                      className="w-1/3 h-48 object-cover mr-4 rounded-md"
                    />
                    <div className="flex flex-col justify-between w-2/3">
                      <div>
                        <h3 className="text-xl font-bold text-[#644222] mb-5">
                          {room.roomType} Room
                        </h3>
                        <p className="text-sm font-bold text-[#644222]">
                          {room.description}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Price:{" "}
                          <span className="font-bold text-[#644222]">
                            {room.price * totalRoomsRequired}
                          </span>
                          <span className="text-gray-500 line-through ml-2">
                            {room.originalPrice * totalRoomsRequired}
                          </span>
                          <span className="text-green-600 ml-2">
                            ({room.discount})
                          </span>
                        </p>
                        <div>
                          {extraRooms > 0 ? (
                            <p className="text-sm text-gray-600 mt-1">
                              {totalRoomsRequired} room
                              {totalRoomsRequired > 1 ? "s" : ""} per night
                            </p>
                          ) : (
                            <p className="text-sm text-gray-600 mt-1">
                              per night
                            </p>
                          )}
                          {extraBeds > 0 && (
                            <p className="text-sm text-gray-600 mt-1">
                              {extraBeds} rollaway bed{extraBeds > 1 ? "s" : ""}{" "}
                              needed
                            </p>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Reviews:{" "}
                          <span className="font-bold text-[#644222]">
                            {room.reviews}
                          </span>
                          <span className="text-gray-500 ml-1">
                            ({room.reviewCount} reviews)
                          </span>
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Available Rooms:{" "}
                          <span className="font-bold text-[#644222]">
                            {room.isAvailableCount}
                          </span>
                        </p>
                      </div>

                      {!isRoomAvailable && (
                        <p className="text-red-600 font-bold mt-4 z">
                          No rooms available for your selection
                        </p>
                      )}

                      <div className="mt-4 flex justify-between items-end">
                        {isRoomAvailable && (
                          <button
                            onClick={() => {
                              router.push(
                                `/selected-room?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&adults=${formData.adults}&children=${formData.children}&roomType=${room.roomType}&extraRooms=${extraRooms}&extraBeds=${extraBeds}`
                              );
                            }}
                            disabled={isButtonDisabled}
                            className={`bg-[#D5C148] hover:bg-[#bba834] text-white py-2 px-4 rounded-md font-semibold text-sm ${
                              isButtonDisabled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                          >
                            Select Room
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
