import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import Telephone from "../../assets/Telephone.png"
import Image, { StaticImageData } from "next/image"

type AmenityCategory = 'Basic Facilities' | 'Accessibility Features' | 'Media and Technology' | 'General Services' | 'Transportation Services' | 'Safety and Security' | 'Common Areas'

type Amenity = {
  name: string
  description: string
}

type CategoryData = {
  amenities: Amenity[]
  image: StaticImageData
}

const categoryData: Record<AmenityCategory, CategoryData> = {
  'Basic Facilities': {
    amenities: [
      { name: 'Telephone', description: 'Direct dial telephones available in every room' },
      { name: 'Room Service', description: 'Enjoy meals and snacks delivered directly to your room' },
      { name: 'Attached Bathroom', description: 'All rooms feature modern bathrooms with complimentary toiletries' },
      { name: 'Housekeeping', description: 'Daily housekeeping to maintain a clean environment' },
      { name: 'Umbrellas', description: 'Available for guests during rainy weather' },
      { name: 'Torch', description: 'Provided on request for emergency use or nighttime navigation' },
      { name: 'First-Aid Services', description: 'First-aid kit readily available for minor injuries' },
    ],
    image: Telephone,
  },
  'Accessibility Features': {
    amenities: [
      { name: 'Wheelchair', description: 'Available upon request for guests requiring assistance' },
      { name: 'Lift', description: 'Easy elevator access to all floors for your convenience' },
    ],
    image: Telephone,
  },
  'Media and Technology': {
    amenities: [
      { name: 'Electrical Adapters', description: 'Provided to ensure compatibility for your electronic devices' },
      { name: 'Electrical Chargers', description: 'Available on request for various device types' },
      { name: 'Printer and Photocopying', description: 'On-site services for printing and photocopying documents' },
    ],
    image: Telephone,
  },
  'General Services': {
    amenities: [
      { name: 'Wake-up Call', description: 'Wake-up call service to ensure you never miss an important moment' },
      { name: 'Multilingual Staff', description: 'Our team speaks multiple languages to assist international guests' },
      { name: 'Bellboy Service', description: 'Friendly bellboys to assist with your luggage and other needs' },
      { name: 'Caretaker', description: 'On-site caretaking services to assist you' },
      { name: 'Ticket/Tour Assistance', description: 'Help with booking tickets or organizing tours for local attractions' },
    ],
    image: Telephone,
  },
  'Safety and Security': {
    amenities: [
      { name: 'Fire Extinguishers', description: 'Strategically placed fire extinguishers for emergencies' },
      { name: 'Security Alarms', description: 'Security alarms installed throughout the hotel for added safety' },
      { name: 'Smoke Detectors', description: 'Equipped in rooms and common areas for your protection' },
    ],
    image: Telephone,
  },
  'Common Areas': {
    amenities: [
      { name: 'Restaurant', description: 'In-house restaurant offering delicious meals' },
      { name: 'Kids Zone', description: 'A fun and safe play area for children' },
      { name: 'Living Room', description: 'A comfortable communal space to relax or socialize' },
      { name: 'Reception', description: '24/7 reception desk for guest services and inquiries' },
      { name: 'Seating Area', description: 'Cozy seating areas throughout the hotel for casual gatherings' },
      { name: 'Garden', description: 'A tranquil garden for leisure walks or peaceful moments' },
    ],
    image: Telephone,
  },
  'Transportation Services': {
    amenities: [
      { name: 'Paid Airport Transfers', description: 'Hassle-free airport pick-up and drop-off services' },
      { name: 'Paid Shuttle Service', description: 'Available for local travel and sightseeing tours' },
      { name: 'Transport for Tourist Places', description: 'Paid transport services to local tourist spots and attractions' },
    ],
    image: Telephone,
  },
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
    <div className="grid md:grid-cols-2 gap-8 mt-10 ">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[21px] text-[#BF9445]">Amenities</h2>
        <h3 className="text-xl font-semibold mb-2 text-[43px]">{selectedCategory}</h3>
        <ul className="space-y-2">
          {categoryData[selectedCategory].amenities.map((amenity, index) => (
            <li key={index} className="border-b last:border-b-0">
              <button
                onClick={() => toggleAmenity(amenity.name)}
                className="flex items-center w-full p-2 text-left hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-primary "
                aria-expanded={expandedAmenity === amenity.name}
                aria-controls={`amenity-description-${index}`}
              >
                {expandedAmenity === amenity.name ? (
                  <ChevronUp className="h-4 w-4 mr-2 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 mr-2 flex-shrink-0" />
                )}
                <span className="font-medium">{amenity.name}</span>
              </button>
              {expandedAmenity === amenity.name && (
                <div
                  id={`amenity-description-${index}`}
                  className="p-2 pl-8 bg-gray-50 text-sm text-gray-600"
                >
                  {amenity.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src={categoryData[selectedCategory].image}
          alt={`${selectedCategory} image`}
          
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
  )
}