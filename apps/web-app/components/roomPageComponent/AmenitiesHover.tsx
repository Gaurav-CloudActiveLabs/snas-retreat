import { useState } from 'react';
import { WaterBottel, Towel, Tea, Sweater, Slipper, Razor, Laundry, Hanger, HairDryer, DentalCare } from '@/assets/room-aminitiesIcon';

interface CardData {
  id: number;
  title: string;
  details: string;
  Icon: React.FC;
}

interface AmenitiesHoverProps {
  cardData: CardData[];
  title:string
}

export default function AmenitiesHover({ cardData ,title}: AmenitiesHoverProps) {
  return (
    <div className="lg:px-28 px-10 mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-[21px] text-[#BF9445] text-center">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 text-center">
        {cardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, details, Icon }: CardData) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg w-full h-48 sm:w-[229px] sm:h-[188px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 h-full flex flex-col items-center justify-center text-center">
        <div className='bg-orange-100 w-[51px] h-[51px] flex justify-center items-center rounded'>
          <Icon width={40} height={40} />
        </div>
        <h3 className="font-semibold mt-3 text-[#2B3F58]">{title}</h3>
        {isHovered && (
          <div className="absolute inset-0 bg-[#A75F37] bg-opacity-90 flex items-center justify-center p-4 transition-opacity duration-300">
            <p className="text-white text-sm">{details}</p>
          </div>
        )}
      </div>
    </div>
  );
}
