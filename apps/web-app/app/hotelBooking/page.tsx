"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Import the hook
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Room1 from "../../assets/ROOM1.png";
import Room2 from "../../assets/ROOM2.png";

export default function HotelBooking() {
  const searchParams = useSearchParams(); // Get the query parameters
  const roomTypeFromQuery = searchParams.get("roomType"); // Extract the 'roomType' from the query string

  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [mealOption, setMealOption] = useState("room-only");

  const rooms = [
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
      isAvailable: true,
      images: [Room2, Room1],
    },
    // Add more room types here if needed
  ];

  useEffect(() => {
    if (roomTypeFromQuery) {
      // Automatically select the room type based on the query
      const room = rooms.find((r) => r.roomType === roomTypeFromQuery);
      setSelectedRoom(room || rooms[0]); // Fallback to the first room if no match
    } else {
      setSelectedRoom(rooms[0]); // Default selection
    }
  }, [roomTypeFromQuery]);

  const handleRoomSelect = (room: any) => {
    setSelectedRoom(room);
    setMealOption("room-only"); // Reset meal option when changing room
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;
    let total = selectedRoom.price;
    if (mealOption === "with-breakfast") total += selectedRoom.breakfastPrice;
    if (mealOption === "with-breakfast-dinner")
      total += selectedRoom.breakfastPrice + selectedRoom.dinnerPrice;
    return total;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SNAS RETREAT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Select Room</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              onValueChange={(value) =>
                handleRoomSelect(
                  rooms.find((room) => room.roomType === value) || rooms[0]
                )
              }
              defaultValue={roomTypeFromQuery || undefined} // Set the default value from the query string
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a room type" />
              </SelectTrigger>
              <SelectContent>
                {rooms.map((room, index) => (
                  <SelectItem key={index} value={room.roomType}>
                    {room.roomType}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {selectedRoom && (
          <Card>
            <CardHeader>
              <CardTitle>{selectedRoom.roomType}</CardTitle>
              <CardDescription>{selectedRoom.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={selectedRoom.images[0].src}
                alt={selectedRoom.roomType}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-2xl font-bold">₹{calculateTotalPrice()}</p>
              <p className="text-sm text-gray-500">
                <span className="line-through">
                  ₹{selectedRoom.originalPrice}
                </span>
                <span className="ml-2 text-green-600">
                  {selectedRoom.discount}
                </span>
              </p>
              <p className="text-sm">
                Reviews: {selectedRoom.reviews} ({selectedRoom.reviewCount}{" "}
                reviews)
              </p>

              <div className="mt-4">
                <h2 className="font-semibold">Select Meal Option:</h2>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="room-only"
                      checked={mealOption === "room-only"}
                      onChange={() => setMealOption("room-only")}
                      className="form-radio"
                    />
                    <span>Room Only</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="with-breakfast"
                      checked={mealOption === "with-breakfast"}
                      onChange={() => setMealOption("with-breakfast")}
                      className="form-radio"
                    />
                    <span>
                      With Breakfast (+₹{selectedRoom.breakfastPrice})
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      value="with-breakfast-dinner"
                      checked={mealOption === "with-breakfast-dinner"}
                      onChange={() => setMealOption("with-breakfast-dinner")}
                      className="form-radio"
                    />
                    <span>
                      With Breakfast & Dinner (+₹
                      {selectedRoom.breakfastPrice + selectedRoom.dinnerPrice})
                    </span>
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        )}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Occupancy Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>
              Each room accommodates up to 2 adults and 1 child (age under 12
              years).
            </li>
            <li>
              If an additional child is added (up to 1), a rollaway bed can be
              provided in the same room.
            </li>
            <li>
              For 2 children or 1 additional adult, a new room must be booked.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
