import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { Lift, wheelchair} from '@/assets/accessibility-aminitiesIcon/Index';
import { Telephone,BathRoom,FirstAid,Housekeeping,RoomService,Torch } from '@/assets/basic-anminitiesIcon'
import { Restaurant,Garden,KidsZone,LivingRoom,Reception,SeatingArea } from '@/assets/common-area-aminitiesIcon'
import { BellService,Caretaker,MultilingualStaff,TicketTour,WakeUpCall } from '@/assets/genral-aminitiesIcon'
import { ElectricalAdapters,ElectricalCharges,Printers } from '@/assets/media-technology-aminitiesIcon'
import { FireExtinguishers,SecurityAlram,SmokeDetector } from '@/assets/safety-security-aminitiesIcon'
import { TransPortTouriestPlace,PaidAirPortTransfer,PaidShuttleService } from '@/assets/transportaion-aminitiesIcon'
import AmenitiesHover from '../roomPageComponent/AmenitiesHover';

type AmenityCategory = 
  | 'Basic Facilities' 
  | 'Accessibility Features' 
  | 'Media and Technology' 
  | 'General Services' 
  | 'Transportation Services' 
  | 'Safety and Security' 
  | 'Common Areas';

type Amenity = {
  id: number;
  title: string;
  details: string;
  Icon: any;
};

const categoryData: Record<AmenityCategory, Amenity[]> = {
  'Basic Facilities': [
    { id: 1, title: 'Telephone', details: 'Direct dial telephones available in every room', Icon: Telephone },
    { id: 2, title: 'Room Service', details: 'Enjoy meals and snacks delivered directly to your room', Icon: RoomService },
    { id: 3, title: 'Attached Bathroom', details: 'Modern bathrooms with complimentary toiletries', Icon: BathRoom },
    { id: 4, title: 'Housekeeping', details: 'Daily housekeeping to maintain a clean environment', Icon: Housekeeping },
    { id: 5, title: 'Umbrellas', details: 'Available for guests during rainy weather', Icon: Torch },
    { id: 6, title: 'Torch', details: 'Provided on request for emergency use or nighttime navigation', Icon: Torch },
    { id: 7, title: 'First-Aid Services', details: 'First-aid kit readily available for minor injuries', Icon: FirstAid },
  ],
  'Accessibility Features': [
    { id: 1, title: 'Wheelchair', details: 'Available upon request for guests requiring assistance', Icon: wheelchair },
    { id: 2, title: 'Lift', details: 'Easy elevator access to all floors for your convenience', Icon: Lift },
  ],
  'Media and Technology': [
    { id: 1, title: 'Electrical Adapters', details: 'Provided to ensure compatibility for your electronic devices', Icon: ElectricalAdapters },
    { id: 2, title: 'Electrical Chargers', details: 'Available on request for various device types', Icon: ElectricalCharges },
    { id: 3, title: 'Printer and Photocopying', details: 'On-site services for printing and photocopying documents', Icon: Printers },
  ],
  'General Services': [
    { id: 1, title: 'Wake-up Call', details: 'Wake-up call service to ensure you never miss an important moment', Icon: WakeUpCall },
    { id: 2, title: 'Multilingual Staff', details: 'Our team speaks multiple languages to assist international guests', Icon: MultilingualStaff },
    { id: 3, title: 'Bellboy Service', details: 'Friendly bellboys to assist with your luggage and other needs', Icon: BellService },
    { id: 4, title: 'Caretaker', details: 'On-site caretaking services to assist you', Icon: Caretaker },
    { id: 5, title: 'Ticket/Tour Assistance', details: 'Help with booking tickets or organizing tours for local attractions', Icon: TicketTour },
  ],
  'Safety and Security': [
    { id: 1, title: 'Fire Extinguishers', details: 'Strategically placed fire extinguishers for emergencies', Icon: FireExtinguishers },
    { id: 2, title: 'Security Alarms', details: 'Security alarms installed throughout the hotel for added safety', Icon: SecurityAlram },
    { id: 3, title: 'Smoke Detectors', details: 'Equipped in rooms and common areas for your protection', Icon: SmokeDetector },
  ],
  'Common Areas': [
    { id: 1, title: 'Restaurant', details: 'In-house restaurant offering delicious meals', Icon: Restaurant },
    { id: 2, title: 'Kids Zone', details: 'A fun and safe play area for children', Icon: KidsZone },
    { id: 3, title: 'Living Room', details: 'A comfortable communal space to relax or socialize', Icon: LivingRoom },
    { id: 4, title: 'Reception', details: '24/7 reception desk for guest services and inquiries', Icon: Reception },
    { id: 5, title: 'Seating Area', details: 'Cozy seating areas throughout the hotel for casual gatherings', Icon: SeatingArea },
    { id: 6, title: 'Garden', details: 'A tranquil garden for leisure walks or peaceful moments', Icon: Garden },
  ],
  'Transportation Services': [
    { id: 1, title: 'Paid Airport Transfers', details: 'Hassle-free airport pick-up and drop-off services', Icon: PaidAirPortTransfer },
    { id: 2, title: 'Paid Shuttle Service', details: 'Available for local travel and sightseeing tours', Icon: PaidShuttleService },
    { id: 3, title: 'Transport for Tourist Places', details: 'Paid transport services to local tourist spots and attractions', Icon: TransPortTouriestPlace },
  ],
};

export default function HotelAminities() {
  const [selectedCategory, setSelectedCategory] = useState<AmenityCategory>('Basic Facilities')
  const [expandedAmenity, setExpandedAmenity] = useState<string | null>(null)

  const toggleAmenity = (amenityName: string) => {
    setExpandedAmenity(expandedAmenity === amenityName ? null : amenityName)
  }

  return (
    <div className="container mx-auto p-4 mt-10">
    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
      {Object.keys(categoryData).map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => setSelectedCategory(category as AmenityCategory)}
          className={`px-4 py-2 border-2 rounded-full transition-colors duration-300 
            ${selectedCategory === category ? 'bg-[#A75F37] text-white' : 'border-[#A75F37] text-[#A75F37]'}
            hover:bg-[#A75F37] hover:text-white`}
        >
          {category}
        </Button>
      ))}
    </div>
    <div>
    <AmenitiesHover title='Featured Amenities' cardData={categoryData[selectedCategory]} />
    </div>
  </div>
  )
}