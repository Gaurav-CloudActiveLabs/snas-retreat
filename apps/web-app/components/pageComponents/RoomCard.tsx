import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Wifi, Car, Coffee, Timer, Users } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface RoomCardProps {
  title: string;
  image: StaticImageData;
  description: string;
}

const RoomCard = ({ title, image, description }: RoomCardProps) => {
  return (
    <Card
      className="w-full h-full  mx-auto border border-transparent"
      style={{ borderRadius: "0px" }}
    >
      <div className="relative h-[400px]">
        <Image src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-t from-black/60 to-transparent">
          <Button variant="secondary" size="sm">
            Book Now
          </Button>
        </div>
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
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
