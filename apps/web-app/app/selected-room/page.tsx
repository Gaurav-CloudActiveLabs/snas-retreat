"use client";

import { useState, useEffect, useContext } from "react";
import { useSearchParams } from "next/navigation";
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
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { ROOMS } from "@/gql";
import { GlobalInfo } from "@/context/provider";
import OptionSignInSignUp from "@/components/pageComponents/OptionSignInSignUp";

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
  images: string[];
}

interface FormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
}

export default function SelectedRoom() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userDetails } = useContext(GlobalInfo);
  const userId = userDetails?.user?.id;
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
    roomType: searchParams.get("roomType") || "All",
  });

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

  useEffect(() => {
    if (roomsData && roomsData.rooms) {
      const roomData = roomsData.rooms.map((room: any) => ({
        roomType: room.roomType.name,
        price: room.roomType.offerPrice,
        originalPrice: room.roomType.actualPrice,
        discount: calculateDiscount(
          room.roomType.actualPrice,
          room.roomType.offerPrice
        ),
        reviews: calculateAvgRating(room.roomType.reviews),
        description: room.roomType.description,
        reviewCount: room.roomType.reviews.length,
        breakfastPrice: room.roomType.breakfastPrice?.price || 0,
        dinnerPrice: room.roomType.dinnerPrice?.price || 0,
        images: room.roomType.images.map((img: any) => img.image.url),
      }));

      const room =
        roomData.find((r: Room) => r.roomType === roomTypeFromQuery) ||
        roomData[0];
      setSelectedRoom(room);
    }
  }, [roomsData, roomTypeFromQuery]);
  // Modal State
  const [isModalOpen, setModalOpen] = useState(false);

  const calculateDiscount = (originalPrice: number, offerPrice: number) => {
    if (originalPrice > offerPrice) {
      const discountPercent =
        ((originalPrice - offerPrice) / originalPrice) * 100;
      return `${Math.round(discountPercent)}% off`;
    }
    return "";
  };

  const calculateAvgRating = (reviews: any[]) => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setModalOpen(true);
    } else {
      router.push(
        `/hotel-booking?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&adults=${formData.adults}&children=${formData.children}&roomType=${formData.roomType}&mealOption=${mealOption}&extraRooms=${extraRooms}&extraBeds=${extraBeds}`,
        { scroll: false }
      );
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedRoom) return 0;
    let total = selectedRoom.price * (extraRooms + 1);
    if (mealOption === "with-breakfast")
      total += selectedRoom.breakfastPrice * (extraRooms + 1);
    if (mealOption === "with-breakfast-dinner")
      total +=
        (selectedRoom.breakfastPrice + selectedRoom.dinnerPrice) *
        (extraRooms + 1);
    return total;
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="lg:px-28 px-10 mx-auto py-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {selectedRoom && (
              <Card className="shadow-lg p-6 mb-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800">
                    {selectedRoom.roomType}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {selectedRoom.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-6">
                    <img
                      src={selectedRoom.images[0]}
                      alt={selectedRoom.description}
                      className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-3xl font-bold text-blue-600">
                        ₹{calculateTotalPrice().toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="line-through">
                          ₹{selectedRoom.originalPrice.toLocaleString()}
                        </span>
                        <span className="ml-2 text-green-600">
                          {selectedRoom.discount}
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-yellow-500">
                        {selectedRoom.reviews} <span>★</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        ({selectedRoom.reviewCount} reviews)
                      </p>
                    </div>
                  </div>
                  <RadioGroup
                    defaultValue="room-only"
                    onValueChange={setMealOption}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="room-only" id="room-only" />
                      <Label htmlFor="room-only">Room Only</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
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
                <CardFooter className="flex justify-end">
                  <Button
                    className="bg-[#C19A6B] hover:bg-[#a8835b] text-white py-2 px-10 rounded-none font-semibold text-sm"
                    onClick={handleSubmit}
                  >
                    Select Room
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
          <div>
            <Card className="p-6 shadow-lg rounded-lg border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Occupancy Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>
                    Each room accommodates up to 2 adults and 1 child (age under
                    12 years).
                  </li>
                  <li>
                    If an additional room is required, extra charges will apply.
                  </li>
                  <li>Extra beds are available upon request.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <OptionSignInSignUp
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <Footer />
    </div>
  );
}
