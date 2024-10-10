import React, { useState, useEffect } from "react";
import Room1 from "../../assets/ROOM1.png";
import Room2 from "../../assets/ROOM2.png";
import ReservationForm from "./ReservationForm";
import { useRouter } from "next/navigation";

interface FormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string; // Changed from 'room' to 'roomType' for clarity
}

interface RoomListProps {
  initialCheckIn: string;
  initialCheckOut: string;
  initialAdults: number;
  initialChildren: number;
  initialRoomType: string; // Changed from 'initialRoom' to 'initialRoomType'
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

  const calculateRoomCapacity = (adults: number, children: number) => {
    const maxAdults = 2;
    const maxChildren = 1; // under 12 years old
    const rollawayBedAllowed = children <= maxChildren;
    let message = "";

    if (adults > maxAdults || children > maxChildren) {
      message = "A new room needs to be booked for the additional guests.";
    } else if (adults === maxAdults && rollawayBedAllowed) {
      message = "You can add one child with a rollaway bed.";
    } else if (adults === maxAdults && children === 0) {
      message = "Room fits 2 adults comfortably.";
    } else {
      message = `Room fits ${adults} adults and ${children} children.`;
    }

    return message;
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
          {calculateRoomCapacity(formData.adults, formData.children)}
        </div>

        {!isLoading && filteredRooms.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-5">
              Available {formData.roomType} Room
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {/* Show only one room card */}
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
                        // Ensure filteredRooms[0] is available and has a roomType property
                        if (filteredRooms && filteredRooms.length > 0) {
                          router.push(
                            `/hotelBooking?roomType=${filteredRooms[0].roomType}`,
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
