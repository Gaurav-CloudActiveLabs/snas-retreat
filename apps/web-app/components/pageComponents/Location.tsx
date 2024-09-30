import { Button } from "../ui/button";
import LocationImage from "../../assets/Location.jpg";
import Image from "next/image";

export default function Location() {
  return (
    <div className="mx-auto pt-8">
      <div className="flex flex-col lg:flex-row gap-0">
        <div className="lg:w-1/2">
          <Image
            src={LocationImage}
            alt="Hotel entrance"
            className="col-span-2 w-full h-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 bg-[#f7f5f1] p-8">
        <div className="flex-row h-full justify-center w-full content-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#644222] mb-6 mt-4 leading-snug">
            Spectacular Mountains of Manali
          </h1>

          <p className="text-black font-medium mb-2 max-w-3xl leading-relaxed">
            Situated amidst the breathtaking beauty of the Manali Valley, SNAS
            RETREAT offers an unparalleled view of the surrounding mountains,
            including Rohtang Pass, Hamta Peak, and Friendship Peak.
          </p>

          <p className="text-black font-medium mb-2 max-w-3xl leading-relaxed">
            Despite being away from the hustle and bustle, our hotel remains
            easily accessible, providing you with the perfect balance of
            convenience and serenity.
          </p>

          <Button className="h-12 md:h-14 px-8 bg-[#654222] text-white rounded-none mt-6 ">
            EXPLORE 
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}
