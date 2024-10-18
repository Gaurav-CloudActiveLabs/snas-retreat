"use client"
import React, { useState, useEffect, useMemo } from "react";
import Room1 from "../../assets/ROOM1.png";
import Room2 from "../../assets/ROOM2.png";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ROOMS } from '@/gql'
import ReservationForm from "@/components/pageComponents/ReservationForm";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [extraRooms, setExtraRooms] = useState<number>(0);
  const [extraBeds, setExtraBeds] = useState<number>(0);

  const { loading: loadingRooms, error: roomsError, data: roomsData } = useQuery(
    ROOMS
  );

  // Fetch rooms data (mocked here)
  const fetchAvailableRooms = async () => {
    setIsLoading(true);
    setError("");

    try {
      setTimeout(() => {
        const mockRooms = [
          {
            roomType: "Deluxe",
            price: 25000,
            originalPrice: 30000,
            discount: "16% off",
            reviews: 8.0,
            description:
              "A luxurious room with all modern amenities and a beautiful view of the garden.",
            reviewCount: 789,
            breakfastPrice: 500,
            dinnerPrice: 600,
            images: [Room1, Room2],
            isAvailableCount: 5, // Number of available rooms
          },
          {
            roomType: "Premium",
            price: 22000,
            originalPrice: 25000,
            discount: "12% off",
            reviews: 8.5,
            description:
              "A premium room with elegant furnishings and an amazing city skyline view.",
            reviewCount: 900,
            breakfastPrice: 500,
            dinnerPrice: 600,
            images: [Room2, Room1],
            isAvailableCount: 0, // Number of available rooms
          },
        ];

        setAvailableRooms(mockRooms);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      setError("Failed to fetch available rooms.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formData.checkIn && formData.checkOut) {
      fetchAvailableRooms();
    }
  }, [formData.checkIn, formData.checkOut]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAvailableRooms();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredRooms = availableRooms.filter(
    (room) => room.roomType === formData.roomType
  );

  // Memoize room capacity calculation to avoid triggering re-renders
  // const roomCapacityMessage = useMemo(() => {
  //   const maxAdults = 2;
  //   const maxChildren = 2;
  //   let extraRoomsNeeded = 0;
  //   let extraBedsNeeded = 0;
  //   let message = "";

  //   if (formData.adults > maxAdults) {
  //     extraRoomsNeeded = Math.ceil((formData.adults - maxAdults) / maxAdults);
  //   }
  //   // Calculate for children
  //   if (formData.children > 1) {
  //     const extraChildren = formData.children*1%maxChildren==0;
  //     // 3 /2  =1
  //     if (extraChildren) {
  //       extraBedsNeeded = 1;
  //     } else {
  //       extraRoomsNeeded += Math.ceil((formData.children));
  //       // 3 - (2 )
  //     }
  //   }

  //   // Construct the message based on extra beds or rooms
  //   if (extraBedsNeeded > 0) {
  //     message = `You can add one rollaway bed for the additional child.`;
  //   } else if (extraRoomsNeeded > 0) {
  //     message = `A new room needs to be booked for the additional guests (${extraRoomsNeeded} extra rooms).`;
  //   } else {
  //     message = `Room fits ${formData.adults} adults and ${formData.children} children.`;
  //   }

  //   setExtraRooms(extraRoomsNeeded);
  //   setExtraBeds(extraBedsNeeded);

  //   return message;
  // }, [formData.adults, formData.children]);

  const roomCapacityMessage = useMemo(() => {
    const maxAdults = 2;
    const maxChildren = 1; // Only 1 child allowed per room initially
    let extraRoomsNeeded = 0;
    let extraBedsNeeded = 0;
    let message = "";

    // Calculate extra rooms needed for adults
    if (formData.adults > maxAdults) {
      // For every 2 additional adults, a new room is needed
      extraRoomsNeeded = Math.ceil((formData.adults - maxAdults) / maxAdults);
    }

    // Calculate for children
    if (formData.children > maxChildren) {
      const extraChildren = formData.children - maxChildren; // After 1st child
      if (extraChildren === 1) {
        // Rollaway bed can accommodate 1 extra child in the same room
        extraBedsNeeded = 1;
      } else {
        // For every 3 children, 1 new room is needed
        extraRoomsNeeded += Math.ceil(extraChildren / 3);
      }
    }

    // Generate a message based on the calculation
    if (extraRoomsNeeded > 0) {
      message = `${extraRoomsNeeded} extra room${
        extraRoomsNeeded > 1 ? "s" : ""
      } needed.`;
    }

    if (extraBedsNeeded > 0) {
      message += ` ${extraBedsNeeded} rollaway bed${
        extraBedsNeeded > 1 ? "s" : ""
      } needed.`;
    }
    setExtraRooms(extraRoomsNeeded);
    setExtraBeds(extraBedsNeeded);
    return message;
  }, [formData.adults, formData.children]);

  const createQueryString = (name: string, value: any) => {
    const params = new URLSearchParams();
    params.set(name, value);
    return params.toString();
  };

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
          isLoading={isLoading}
        />

        {/* Display the capacity information */}
        <div className="mt-6 text-lg font-semibold text-center">
          {roomCapacityMessage}
        </div>

        {!isLoading && filteredRooms.length > 0 && (
  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-5">
      Available {formData.roomType} Room
    </h2>
    <div className="grid grid-cols-1 gap-6">
      <div className="border p-4 shadow-md rounded-lg flex">
        <img
          src={filteredRooms[0].images[0].src}
          alt={filteredRooms[0].description}
          className="w-1/3 h-48 object-cover mr-4 rounded-md"
        />
        <div className="flex flex-col justify-between w-2/3">
          <div>
            <h3 className="text-xl font-bold text-[#644222] mb-5">
              {filteredRooms[0].roomType} Room
            </h3>
            <p className="text-sm font-bold text-[#644222]">
              {filteredRooms[0].description}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Price:{" "}
              <span className="font-bold text-[#644222]">
                {filteredRooms[0].price}
              </span>
              <span className="text-gray-500 line-through ml-2">
                {filteredRooms[0].originalPrice}
              </span>
              <span className="text-green-600 ml-2">
                ({filteredRooms[0].discount})
              </span>
            </p>
            <div>
              {extraRooms > 0 ? (
                <p className="text-sm text-gray-600 mt-1">
                  {extraRooms} extra room{extraRooms > 1 ? "s" : ""} needed.
                </p>
              ) : (
                <p className="text-sm text-gray-600 mt-1">Per Night</p>
              )}
              {extraBeds > 0 && (
                <p className="text-sm text-gray-600 mt-1">
                  {extraBeds} rollaway bed{extraBeds > 1 ? "s" : ""} needed.
                </p>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Reviews:{" "}
              <span className="font-bold text-[#644222]">
                {filteredRooms[0].reviews}
              </span>
              <span className="text-gray-500 ml-1">
                ({filteredRooms[0].reviewCount} reviews)
              </span>
            </p>
          </div>

          <div className="mt-4 flex justify-between items-end">
            <button
              onClick={() => {
                if (filteredRooms && filteredRooms.length > 0) {
                  router.push(
                    `/selected-room?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&adults=${formData.adults}&children=${formData.children}&roomType=${formData.roomType}`,
                    { scroll: false }
                  );
                }
              }}
              className="bg-[#C19A6B] text-white py-4 px-6 hover:bg-[#a8835b] text-sm font-normal transition duration-300 self-end"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


        {filteredRooms.length === 0 && !isLoading && (
          <div className="mt-10 text-center">
            No {formData.roomType} rooms available.
          </div>
        )}

        {isLoading && (
          <div className="mt-10 text-center">
            Searching for available rooms...
          </div>
        )}
        {error && <div className="mt-10 text-center text-red-600">{error}</div>}
      </div>
    </div>
  );
}
