"use client";
import RoomCard from "./RoomCard";
import Room1 from "../../assets/ROOM1.png";
import Room2 from "../../assets/ROOM2.png";

const rooms = [
  {
    title: "Deluxe Room",
    image: Room1,
    description:
      "A cozy and elegant space with all essential amenities and a private balcony overlooking the scenic valley.",
    navigateTo:"/room-deluxe"
  },
  {
    title: "Premium Room",
    image: Room2,
    description:
      "A larger, more luxurious option with upgraded features, ideal for those seeking the ultimate in relaxation.",
    navigateTo:"/room-premium"
  },
];

export default function RoomShowCase() {
  return (
    <div className="bg-[#ffffff] min-h-screen py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#644222] mb-6 leading-tight">
        Our Curated Rooms for Luxury
      </h1>
      <p className="text-center text-black font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
        SNAS RETREAT offers two premium room options, both designed to provide
        comfort and luxury.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-10/12 mx-auto">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            title={room.title}
            image={room.image}
            description={room.description}
            navigateTo={room.navigateTo}
          />
        ))}
      </div>
    </div>
  );
}
