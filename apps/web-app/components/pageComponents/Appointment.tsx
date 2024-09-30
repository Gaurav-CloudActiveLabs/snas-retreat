import { Calendar, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingImg from "../../assets/BOOK_A_ROOM.png";
import Image from "next/image";

export default function Appointment() {
  return (
    <div className="lg:px-28 px-10 mx-auto py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="mx-auto ">
            <h1 className="text-3xl md:text-4xl font-bold text-[#644222]  mb-4 mt-6 text-center">
              Book Your Luxury Retreat
            </h1>
            <p className="text-[black] font-medium mb-2 max-w-3xl mx-auto leading-relaxed text-center">
              Ready to experience the best that Manali has to offer?
            </p>
            {/* <p className="text-[#777777] mb-2 max-w-3xl mx-auto leading-relaxed">
              Book your stay at SNAS RETREAT today, and let us provide you with
              a vacation experience like no other.
            </p> */}
            <form className="space-y-6 py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="check-in"
                    className="block text-sm font-bold text-[black] mb-1"
                  >
                    <Calendar className="inline-block w-4 h-4 mr-2 text-brown-500" />
                    Check In Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="check-in"
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brown-500"
                    />
                    <Calendar
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="check-out"
                    className="block text-sm font-bold text-[black] mb-1"
                  >
                    <Calendar className="inline-block w-4 h-4 mr-2 text-brown-500" />
                    Check Out Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="check-out"
                      placeholder="dd-mm-yyyy"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brown-500"
                    />
                    <Calendar
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="adults"
                    className="block text-sm font-bold text-[black] mb-1"
                  >
                    <Users className="inline-block w-4 h-4 mr-2 text-brown-500" />
                    Adults
                  </label>
                  <div className="relative">
                    <select
                      id="adults"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brown-500 appearance-none bg-white"
                    >
                      <option>Adults</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                    <Users
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="room"
                    className="block text-sm font-bold text-[black] mb-1"
                  >
                    <Home className="inline-block w-4 h-4 mr-2 text-brown-500" />
                    Room
                  </label>
                  <div className="relative">
                    <select
                      id="room"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brown-500 appearance-none bg-white"
                    >
                      <option>Room</option>
                      <option value="single">Single Room</option>
                      <option value="double">Double Room</option>
                      <option value="suite">Suite</option>
                    </select>
                    <Home
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#654222] text-white py-2 hover:bg-brown-800 transition duration-300 text-sm sm:text-base"
                style={{ borderRadius: "0px" }}
              >
                BOOK TABLE NOW
              </Button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={BookingImg}
            alt="Luxurious hotel lobby"
            className="object-cover"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
