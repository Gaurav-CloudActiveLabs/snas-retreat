import { Wifi, Coffee, Users, Zap, Waves, Dumbbell, MoreHorizontal } from 'lucide-react'

const amenities = [
  { icon: Wifi, name: 'Free Wifi' },
  { icon: Coffee, name: 'Breakfast' },
  { icon: Users, name: 'Banquet Hall' },
  { icon: Zap, name: 'Electricity' },
  { icon: Waves, name: 'Swimming Pool' },
  { icon: Dumbbell, name: 'Exercise Space' },
//   { icon: Spa, name: 'Spa Center' },
  { icon: MoreHorizontal, name: 'Other Service' },
]

export default function AmenitiesSection() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="lg:px-28 px-10 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Exceptional Amenities Await Your Stay
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Indulge in Luxury and Comfort with Our Range of Offered Amenities
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-3">
                <amenity.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}