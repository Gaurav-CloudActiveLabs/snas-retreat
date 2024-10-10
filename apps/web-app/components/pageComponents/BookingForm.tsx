"use client";

import React, { useState } from "react";
import {
  BadgeCheck,
  BadgeX,
  UsersRound,
  Baby,
  ConciergeBell,
  CalendarDays,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  // State for form inputs
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState("Deluxe");

  // State for form errors
  const [errors, setErrors] = useState({
    checkIn: "",
    checkOut: "",
    dateRange: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { checkIn: "", checkOut: "", dateRange: "" };

    if (!checkIn) {
      newErrors.checkIn = "Check-in date is required";
      isValid = false;
    }

    if (!checkOut) {
      newErrors.checkOut = "Check-out date is required";
      isValid = false;
    }

    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate <= checkInDate) {
        newErrors.dateRange = "Check-out date must be after check-in date";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      // Navigate with query parameters
      router.push(
        `/availableRooms?checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&roomType=${room}`,
        { scroll: false }
      );
    }
  };

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
        <form
          className="grid grid-cols-1 md:grid-cols-6 gap-6 items-start"
          onSubmit={handleSubmit}
        >
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
              className={`w-full p-3 border rounded-md text-gray-600 ${
                errors.checkIn && "border-red-500"
              }`}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            {errors.checkIn && (
              <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
            )}
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
              className={`w-full p-3 border rounded-md text-gray-600 ${
                errors.checkOut && "border-red-500"
              }`}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            {errors.checkOut && (
              <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
            )}
          </div>

          {errors.dateRange && (
            <p className="text-red-500 text-sm mt-1 md:col-span-2">
              {errors.dateRange}
            </p>
          )}

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
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
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
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
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
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            >
              <option>Deluxe</option>
              <option>Premium</option>
            </select>
          </div>

          <div className="space-y-2 md:col-span-1 flex flex-col items-center">
            <CalendarDays size={30} color="#be9874" />
            <button
              type="submit"
              className="w-full bg-[#644222] text-white py-4 px-4 text-sm font-medium rounded-none hover:bg-[#7a5229] transition-colors duration-300"
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
