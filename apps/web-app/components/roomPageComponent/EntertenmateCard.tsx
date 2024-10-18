import { useState } from 'react';
import { Card } from "@/components/ui/card";
import Image ,{StaticImageData} from 'next/image';

interface EntertainmentCard {
  title: string;
  description: string;
  image: StaticImageData; // Adjust the type based on your image imports
}

interface EntertainmentCardsProps {
  cards: EntertainmentCard[];
}

export default function EntertainmentCards({ cards }: EntertainmentCardsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="mx-auto py-8 bg-[#F7F5F1]">
      <p className="text-2xl font-semibold mb-2 text-primary text-center text-[14px] text-[#644222]" style={{ color: "#644222" }}>Entertainment</p>
      <h2 className="text-2xl font-semibold mb-2 text-primary text-center text[46px]">Entertainment:</h2>
      <p className="text-sm text-[#777777] mb-6 text-center text-[11px]">
        Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus
        interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel.
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-3/4 mx-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="overflow-hidden mx-auto rounded-none"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-none"
              />
              <div className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
