import { Button } from "@/components/ui/button";
import BathroomImage from "../../assets/Bathroom.png";
import Image from "next/image";

interface BathroomComponentProps {
  description: string;
}

export default function BathroomComponent({ description }: BathroomComponentProps) {
  return (
    <div className="lg:px-28 px-10 mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-[#DF6951] text-[18px] font-semibold uppercase tracking-wide">Bathroom</h2>
          <p className="text-[16px]">
            {description}
          </p>
          {/* Uncomment if needed */}
          {/* <Button className="bg-[#FF0000] text-white font-semibold py-2 h-[56px] w-[176px] px-4 rounded">
            View All
          </Button> */}
        </div>
        <div className="space-y-4">
          <Image src={BathroomImage} alt="Bathroom-image" />
        </div>
      </div>
    </div>
  );
}
