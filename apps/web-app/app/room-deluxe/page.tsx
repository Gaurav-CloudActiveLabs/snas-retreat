"use client";
import { useState } from "react";
import RoomBg1 from "../../assets/Room-bg1.png";
import Image from "next/image";
import Header from "@/components/pageComponents/header";
import AmenitiesHover from "@/components/roomPageComponent/AmenitiesHover";
import EntertainmentCards from "@/components/roomPageComponent/EntertenmateCard";
import BathroomComponent from "@/components/roomPageComponent/BathroomComponent";
import Footer from "@/components/pageComponents/footer";
import RoomSizeDeluxe from "@/components/roomPageComponent/RoomSizeDeluxe";
import { WaterBottel, Towel, Tea, Sweater, Slipper, Razor, Laundry, Hanger, HairDryer, DentalCare } from '@/assets/room-aminitiesIcon';
import Television from "../../assets/Television.png";
import Telephone from "../../assets/Telephone.png";

interface CardData {
  id: number;
  title: string;
  details: string;
  Icon: React.FC;
}

const cardData: CardData[] = [
  { id: 1, title: 'Laundry Bag', details: 'Provided for your laundry needs.', Icon: Laundry },
  { id: 2, title: 'Shaving Kit', details: 'Complimentary shaving essentials are available.', Icon: Razor },
  { id: 3, title: 'Complimentary Bottled Water', details: 'Two bottles of fresh drinking water replenished daily.', Icon: WaterBottel },
  { id: 4, title: 'Tea/Coffee Kit', details: 'Includes a selection of tea bags, coffee, sugar, and milk.', Icon: Tea },
  { id: 5, title: 'Towels', details: 'Soft bath and hand towels provided for each guest.', Icon: Towel },
  { id: 6, title: 'Hair Dryer', details: 'Available in the bathroom for your convenience.', Icon: HairDryer },
  { id: 7, title: 'Hangers', details: 'Wooden hangers provided for your wardrobe needs.', Icon: Hanger },
  { id: 8, title: 'Slippers', details: 'Soft, comfortable slippers for in-room use.', Icon: Slipper },
  { id: 9, title: 'Dental Kit', details: 'Includes a toothbrush and toothpaste for personal care.', Icon: DentalCare },
  { id: 10, title: 'Extra Pillow & Blanket', details: 'Available on request, with additional storage in the cupboard.', Icon: Sweater },
];

const entertainmentCards = [
  {
    title: "Television",
    description: "Flat-screen TV with a wide selection of local and international channels.",
    image: Television,
  },
  {
    title: "Landline",
    description: "Direct-dial phone for local and international calls.",
    image: Telephone,
  },
];
const bathroomDescription = "Equipped with a modern shower and complimentary basic toiletries. Ideal for guests seeking a cozy, well-equipped space with all essential amenities.";

export default function DeluxeRoom() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Static Image Section */}
      <section className="h-72 md:h-screen relative">
        <Image
          src={RoomBg1}
          alt="Room Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>
      <RoomSizeDeluxe />
      <AmenitiesHover cardData={cardData} /> 
      <EntertainmentCards cards={entertainmentCards} />
      <BathroomComponent description={bathroomDescription} />
      <Footer />
    </div>
  );
}
