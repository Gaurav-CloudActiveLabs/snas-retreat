import { motion } from "framer-motion"; // Import framer-motion
import Image from "next/image";
import QualityRoom from "../../assets/Room.png";
import WellnessSPA from "../../assets/WELLNESS_AND_SPA.png";
import BestAccommodation from "../../assets/BEST_ACCOMMODATION.png";
import RestaurantBars from "../../assets/RESTAURANTS_AND_A_BAR.png";
import SpecialOffers from "../../assets/OFFERS.png";
import MountainView from "../../assets/MOUNTAIN_VIEW.png";
import MountainBackground from "../../assets/OBJECTS.png"; // Import the MountainBackground image
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Explore() {
  const cardData = [
    {
      icon: QualityRoom,
      title: "Quality Room",
      description:
        "Enjoy spacious, elegantly furnished rooms with private balconies that offer a breathtaking view of the mountains.",
    },
    {
      icon: WellnessSPA,
      title: "Wellness & SPA",
      description:
        "Rejuvenate your mind and body with our soothing spa treatments.",
    },
    {
      icon: BestAccommodation,
      title: "Best Accommodation",
      description:
        "Our rooms are designed for both leisure and business travelers, offering comfort and convenience.",
    },
    {
      icon: RestaurantBars,
      title: "Restaurant & Bars",
      description:
        "Indulge in delicious and authentic cuisine tailored to all tastes in our in-house restaurant.",
    },
    {
      icon: SpecialOffers,
      title: "Special Offers",
      description:
        "Take advantage of exclusive deals and discounts to make your stay even more affordable.",
    },
    {
      icon: MountainView,
      title: "Mountain View",
      description:
        "Relish the unobstructed panoramic views of Rohtang Pass, Hamta Peak, and Friendship Peak.",
    },
  ];

  return (
    <div className="relative bg-[#f5f1eb] min-h-screen py-8">
      {/* Add Mountain Background Image with animation to the left side */}
      <motion.div
        className="absolute left-0 top-0 w-1/4 h-full z-0"
        animate={{ y: [0, -10, 0] }} // Animation for shaking effect
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src={MountainBackground}
          alt="Mountain Background"
          layout="fill"
          objectFit="contain"
          className="opacity-20"
          style={{ objectPosition: "top left" }}
        />
      </motion.div>

      {/* Add Mountain Background Image with animation to the right side */}
      <motion.div
        className="absolute right-0 top-0 w-1/4 h-full z-0"
        animate={{ y: [0, 10, 0] }} // Animation for shaking effect
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src={MountainBackground}
          alt="Mountain Background"
          layout="fill"
          objectFit="contain"
          className="opacity-20"
          style={{ objectPosition: "bottom right" }}
        />
      </motion.div>

      <div className="lg:px-28 px-10 mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#644222] mb-6 mt-8 leading-tight">
          Explore SNAS RETREAT
        </h1>
        <p className="text-center text-black font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
          At SNAS RETREAT, we offer a variety of high-end amenities designed to
          make your stay unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-none shadow-md transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out"
              style={{ borderRadius: "0px" }}
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24">
                    <Image
                      src={item.icon}
                      alt={`${item.title} Icon`}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-black leading-snug text-center">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-black font-medium leading-relaxed text-center">
                  {item.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <a
                  href="#"
                  className="text-[#3c2f2f] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
