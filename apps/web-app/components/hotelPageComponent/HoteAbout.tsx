import { ChevronDown } from "lucide-react"

export default function HotelAbout() {
  return (
    <div className="max-w-2xl mx-auto p-4 font-sans">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">About us</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          We are dedicated to providing a comfortable and enjoyable experience for all our guests. Our hotel
          offers a wide range of facilities and services designed to meet your every need, ensuring both
          convenience and relaxation.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-orange-500 flex justify-between items-center">
          Amenities
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </h2>
      </section>
    </div>
  )
}