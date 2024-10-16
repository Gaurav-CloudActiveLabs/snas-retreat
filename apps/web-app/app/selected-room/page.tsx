"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Header from "@/components/pageComponents/header";
import Footer from "@/components/pageComponents/footer";
import ReservationForm from "@/components/pageComponents/ReservationForm";
import Room1 from "../../assets/ROOM1.png";
import Room2 from "../../assets/ROOM2.png";
import { div } from "framer-motion/client";
import { useRouter } from "next/navigation";

interface Room {
  roomType: string;
  price: number;
  originalPrice: number;
  discount: string;
  reviews: number;
  description: string;
  reviewCount: number;
  breakfastPrice: number;
  dinnerPrice: number;
  images: any[];
}

interface FormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
}

const rooms: Room[] = [
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
    images: [Room2, Room1],
  },
];

export default function HotelBooking() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roomTypeFromQuery = searchParams.get("roomType");
  const extraRooms = parseInt(searchParams.get("extraRooms") || "0", 10);
  const extraBeds = parseInt(searchParams.get("extraBeds") || "0", 10);

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [mealOption, setMealOption] = useState("room-only");
  const [formData, setFormData] = useState<FormData>({
    checkIn: searchParams.get("checkIn") || "",
    checkOut: searchParams.get("checkOut") || "",
    adults: parseInt(searchParams.get("adults") || "1", 10),
    children: parseInt(searchParams.get("children") || "0", 10),
    roomType: searchParams.get("roomType") || "Deluxe",
  });

  useEffect(() => {
    const room =
      rooms.find((r) => r.roomType === roomTypeFromQuery) || rooms[0];
    setSelectedRoom(room);
  }, [roomTypeFromQuery]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const basePrice = calculateTotalPrice(); // Calculate final price
    router.push(
      `/hotel-booking?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&adults=${formData.adults}&children=${formData.children}&roomType=${formData.roomType}&mealOption=${mealOption}&extraRooms=${extraRooms}&extraBeds=${extraBeds}&basePrice=${basePrice}`,
      { scroll: false }
    );
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;
    let total = selectedRoom.price * (extraRooms + 1);
    if (mealOption === "with-breakfast") total += selectedRoom.breakfastPrice;
    if (mealOption === "with-breakfast-dinner")
      total += selectedRoom.breakfastPrice + selectedRoom.dinnerPrice;
    return total;
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="lg:px-28 px-10 mx-auto py-4 relative z-10">
        {/* Hero Section with Carousel */}
        <div className="py-4">
          <ReservationForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            isLoading={false}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {selectedRoom && (
              <Card className="shadow-lg p-4 mb-6 rounded-lg">
                <CardHeader>
                  <CardTitle>{selectedRoom.roomType}</CardTitle>
                  <CardDescription>{selectedRoom.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-4">
                    <Image
                      src={selectedRoom.images[0].src}
                      alt={selectedRoom.roomType}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{calculateTotalPrice().toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="line-through">
                          ₹{selectedRoom.originalPrice.toLocaleString()}
                        </span>
                        <span className="ml-2 text-green-600">
                          {selectedRoom.discount}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold">
                        {selectedRoom.reviews}{" "}
                        <span className="text-yellow-400">★</span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ({selectedRoom.reviewCount} reviews)
                      </p>
                    </div>
                  </div>
                  {/* Meal Options */}
                  <RadioGroup
                    defaultValue="room-only"
                    onValueChange={setMealOption}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="room-only" id="room-only" />
                      <Label htmlFor="room-only">Room Only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="with-breakfast"
                        id="with-breakfast"
                      />
                      <Label htmlFor="with-breakfast">
                        With Breakfast (+₹{selectedRoom.breakfastPrice})
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="with-breakfast-dinner"
                        id="with-breakfast-dinner"
                      />
                      <Label htmlFor="with-breakfast-dinner">
                        With Breakfast & Dinner (+₹
                        {selectedRoom.breakfastPrice + selectedRoom.dinnerPrice}
                        )
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-[#C19A6B] text-white py-4 px-6 hover:bg-[#a8835b] text-sm font-normal transition duration-300 self-end"
                    onClick={handleSubmit}
                  >
                    Select Room
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
          <div>
            {/* Occupancy Guidelines */}
            <Card className="p-4 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle>Occupancy Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Each room accommodates up to 2 adults and 1 child (age under
                    12 years).
                  </li>
                  <li>
                    If an additional child is added (up to 1), a rollaway bed
                    can be provided in the same room.
                  </li>
                  <li>
                    For 2 children or 1 additional adult, a new room must be
                    booked.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
