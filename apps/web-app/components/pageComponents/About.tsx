import { Button } from "../ui/button";
import AboutImg from "../../assets/about.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/hotel-page");
  };
  return (
    <div className="lg:px-28 px-10 mx-auto py-12 fon">

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src={AboutImg}
            alt="Hotel entrance"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2">
        <div className="flex-row h-full justify-center w-full content-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#644222] mb-6 mt-4 leading-snug">
            Luxurious Hotel In Manali
          </h1>
          <p className="text-black font-medium mb-2 max-w-3xl leading-relaxed">
            SNAS RETREAT is a luxury boutique hotel offering an intimate and
            peaceful experience in the heart of Manali.
          </p>
          <p className="text-black font-medium mb-2 max-w-3xl leading-relaxed">
            Our vibrant décor and spacious rooms provide an unparalleled level
            of comfort.
          </p>
          <p className="text-black font-medium mb-2 max-w-3xl leading-relaxed">
            Whether you’re here to relax or explore the picturesque
            surroundings, we promise an experience that you’ll cherish for years
            to come.
          </p>
          {/* Button */}
          <Button onClick={handleNavigation} className="h-12 md:h-14 px-8 bg-[#654222] text-white rounded-none mt-6 ">
            LEARN MORE
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
