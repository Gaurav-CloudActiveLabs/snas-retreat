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
      { name: 'Telephone', description: 'In-room telephone service' },
      { name: 'Room Service', description: '24/7 room service available' },
      { name: 'Air Conditioning', description: 'Individual climate control in each room' },
      { name: 'Mini Bar', description: 'Fully stocked mini bar with snacks and beverages' },
    ],
    image: Telephone
  },
  'Accessibility Features': {
    amenities: [
      { name: 'Wheelchair Accessible', description: 'Rooms and facilities are wheelchair accessible' },
      { name: 'Braille Signage', description: 'Braille signage available throughout the hotel' },
      { name: 'Hearing Loop', description: 'Hearing loop system available in common areas' },
      { name: 'Accessible Bathroom', description: 'Bathrooms with grab bars and roll-in showers' },
    ],
    image: Telephone
  },
  'Media and Technology': {
    amenities: [
      { name: 'Free Wi-Fi', description: 'Complimentary high-speed Wi-Fi throughout the hotel' },
      { name: 'Flat-screen TV', description: 'HD flat-screen TV with cable channels' },
      { name: 'Charging Stations', description: 'USB charging ports in rooms and common areas' },
      { name: 'Smart Room Controls', description: 'Tablet-controlled lighting and temperature' },
    ],
    image: Telephone
  },
  'General Services': {
    amenities: [
      { name: 'Concierge', description: '24-hour concierge service' },
      { name: 'Laundry', description: 'Laundry and dry cleaning services available' },
      { name: 'Currency Exchange', description: 'Currency exchange service at the front desk' },
      { name: 'Luggage Storage', description: 'Secure luggage storage available' },
    ],
    image: Telephone
  },
  'Transportation Services': {
    amenities: [
      { name: 'Airport Shuttle', description: 'Complimentary airport shuttle service' },
      { name: 'Car Rental', description: 'On-site car rental service' },
      { name: 'Valet Parking', description: 'Valet parking service available' },
      { name: 'Bike Rental', description: 'Bicycle rental for exploring the city' },
    ],
    image: Telephone
  },
  'Safety and Security': {
    amenities: [
      { name: '24/7 Security', description: 'Round-the-clock security personnel' },
      { name: 'In-room Safe', description: 'Electronic in-room safe for valuables' },
      { name: 'Fire Safety', description: 'Smoke detectors and sprinkler systems in all areas' },
      { name: 'Key Card Access', description: 'Secure key card access to rooms and facilities' },
    ],
    image: Telephone
  },
  'Common Areas': {
    amenities: [
      { name: 'Lobby', description: 'Spacious lobby with seating areas' },
      { name: 'Business Center', description: 'Fully equipped business center' },
      { name: 'Fitness Center', description: '24-hour fitness center with modern equipment' },
      { name: 'Swimming Pool', description: 'Indoor heated swimming pool and jacuzzi' },
    ],
    image: Telephone
  },
}

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