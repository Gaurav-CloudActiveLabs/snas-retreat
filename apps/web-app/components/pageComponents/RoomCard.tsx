"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Wifi, Car, Coffee, Timer, Users } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from 'next/navigation'
interface RoomCardProps {
  title: string;
  image: StaticImageData;
  description: string;
  navigateTo: string; // Added prop to pass target URL
}

const RoomCard = ({ title, image, description, navigateTo }: RoomCardProps) => {
  // Handle navigation
  const router = useRouter();

  const handleNavigation = () => {
    router.push(navigateTo);
  };

  return (
    <Card
      onClick={handleNavigation} // Handle card click
      className="w-full h-full mx-auto border border-transparent cursor-pointer"
      style={{ borderRadius: "0px" }}
    >
      <div className="relative h-[400px]">
        <Image src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-semibold mb-4 leading-snug">{title}</h3>
        <p className="text-black font-medium text-base mb-6 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 text-gray-400">
            <Bed className="w-5 h-5" />
            <Wifi className="w-5 h-5" />
            <Car className="w-5 h-5" />
            <Coffee className="w-5 h-5" />
            <Timer className="w-5 h-5" />
            <Users className="w-5 h-5" />
          </div>
          <p
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click from triggering
              handleNavigation();
            }}
            className="cursor-pointer hover:underline"
          >
            Know More
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
