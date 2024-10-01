import {
  BadgeCheck,
  BadgeX,
  UsersRound,
  Baby,
  ConciergeBell,
  CalendarDays,
} from "lucide-react";

export default function BookingForm() {
  return (
    <div className="lg:px-28 px-10 mx-auto lg:-mt-20 md:-mt-20 mt-10 relative z-10">
      <div
        className="bg-white p-6 pt-10 shadow-lg"
        style={{
          boxShadow: "0px 20px 60px 0px rgba(21, 21, 21, 0.2)",
        }}
      >
        {/* Heading and Subheading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#644222] leading-snug">
            Book Your Luxury Retreat
          </h1>
          <p className="text-black font-medium text-lg mt-2 leading-relaxed">
            Fill out the form below to secure your stay at SNAS RETREAT.
          </p>
        </div>

        {/* Booking Form */}
        <form className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <BadgeCheck size={16} color="#101010" />
              <label htmlFor="checkIn" className="text-gray-600 font-semibold">
                Check In Date
              </label>
            </div>
            <input
              type="date"
              id="checkIn"
              className="w-full p-3 border rounded-md text-gray-600"
            />
          </div>

          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <BadgeX size={16} color="#101010" />
              <label htmlFor="checkOut" className="text-gray-600 font-semibold">
                Check Out Date
              </label>
            </div>
            <input
              type="date"
              id="checkOut"
              className="w-full p-3 border rounded-md text-gray-600"
            />
          </div>

          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <UsersRound size={16} color="#101010" />
              <label htmlFor="adults" className="text-gray-600 font-semibold">
                Adults
              </label>
            </div>
            <select
              id="adults"
              className="w-full p-3 border rounded-md text-gray-600"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Baby size={16} color="#101010" />
              <label htmlFor="children" className="text-gray-700 font-semibold">
                Children
              </label>
            </div>
            <select
              id="children"
              className="w-full p-3 border rounded-md text-gray-700"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <ConciergeBell size={16} color="#101010" />
              <label htmlFor="room" className="text-gray-700 font-semibold">
                Room
              </label>
            </div>
            <select
              id="room"
              className="w-full p-3 border rounded-md text-gray-700"
            >
              <option>Deluxe</option>
              <option>Premium</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-1 flex flex-col items-center">
            <CalendarDays size={30} color="#be9874" />
            <button
              type="submit"
              className="w-full bg-[#644222] text-white py-4 px-4 text-sm font-medium rounded-none"
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
