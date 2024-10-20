"use client";
import RoomBg1 from "../../assets/Room-bg1.png";
import Image from "next/image";
import AmenitiesHover from "@/components/roomPageComponent/AmenitiesHover";
import EntertainmentCards from "@/components/roomPageComponent/EntertenmateCard";
import BathroomComponent from "@/components/roomPageComponent/BathroomComponent";
import Footer from "@/components/pageComponents/footer";
import RoomSizePremium from "@/components/roomPageComponent/RoomSizePremium";
import { WaterBottel, Towel, Tea, Sweater, Slipper, Razor, Laundry, Hanger, HairDryer, DentalCare } from '@/assets/room-aminitiesIcon';
import Television from "../../assets/Television.png";
import Telephone from "../../assets/Telephone.png";
import RoomHeader from "@/components/roomPageComponent/roomHeader";
import TestimonialSection from "@/components/pageComponents/testimonial";
import Appointment from "@/components/pageComponents/Appointment";
import Location from "@/components/pageComponents/Location";

interface CardData {
    id: number;
    title: string;
    details: string;
    Icon: React.FC;
  }

export default function PremiumRoom() {

    const premiumCardData: CardData[] = [
        { id: 1, title: 'Laundry Bag', details: 'Provided for laundry services during your stay.', Icon: Laundry },
        { id: 2, title: 'Shaving Kit', details: 'Complimentary shaving essentials are included.', Icon: Razor },
        { id: 3, title: 'Complimentary Bottled Water', details: 'Two bottles of mineral water replenished daily.', Icon: WaterBottel },
        { id: 4, title: 'Tea/Coffee Kit', details: 'Includes a premium selection of teas, coffee, sugar, and creamer.', Icon: Tea },
        { id: 5, title: 'Towels', details: 'Plush bath and hand towels provided.', Icon: Towel },
        { id: 6, title: 'Hair Dryer', details: 'Available in the bathroom for your personal grooming needs.', Icon: HairDryer },
        { id: 7, title: 'Hangers', details: 'Additional wooden hangers for your convenience.', Icon: Hanger },
        { id: 8, title: 'Slippers', details: 'Premium in-room slippers for extra comfort.', Icon: Slipper },
        { id: 9, title: 'Dental Kit', details: 'Includes a toothbrush, toothpaste, and additional dental essentials.', Icon: DentalCare },
        { id: 10, title: 'Extra Pillow & Blanket', details: 'Luxurious extra pillows and blankets stored in a spacious cupboard for added comfort.', Icon: Sweater },
      ]

      const entertainmentCards = [
        {
          title: "Television",
          description: "Large flat-screen TV with a wide range of international andlocal channels.",
          image: Television,
        },
        {
          title: "Landline",
          description: "Direct-dial phone for convenient room service or external calls.",
          image: Telephone,
        },
      ];
      const bathroomDescription = "A spacious bathroom featuring high-end fixtures, a shower, and acomplimentary selection of luxury toiletries.";

  return (
    <div className="min-h-screen">
      <RoomHeader />

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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40 px-2 pt-20 md:pt-10">
          <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6 pt-10">
            Enjoy A Luxury Experience
          </h1>
          <p className="max-w-2xl text-[12px] md:text-lg mb-4">
          The Premium Room offers an elevated level of luxury and comfort, ideal for guests whoseek a more spacious and indulgent stay.          </p>
        </div>
      <RoomSizePremium/>
      <AmenitiesHover title="Amenities" cardData={premiumCardData} />
      <EntertainmentCards cards={entertainmentCards} />
      <BathroomComponent description={bathroomDescription} />
      <Location />
      <TestimonialSection />
      <Appointment />
      <Footer />
    </div>
  );
}
