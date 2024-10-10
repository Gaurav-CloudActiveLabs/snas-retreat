import React from "react";
import {
  BadgeCheck,
  BadgeX,
  UsersRound,
  Baby,
  ConciergeBell,
  CalendarDays,
} from "lucide-react";

interface FormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomType: string;
}

interface ReservationFormProps {
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  formData,
  onInputChange,
  onSubmit,
  isLoading,
}) => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center"
      onSubmit={onSubmit}
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
          name="checkIn"
          value={formData.checkIn}
          onChange={onInputChange}
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
          name="checkOut"
          value={formData.checkOut}
          onChange={onInputChange}
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
          name="adults"
          value={formData.adults}
          onChange={onInputChange}
          className="w-full p-3 border rounded-md text-gray-600"
        >
          {[...Array(11).keys()].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
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
          name="children"
          value={formData.children}
          onChange={onInputChange}
          className="w-full p-3 border rounded-md text-gray-700"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2 md:col-span-1">
        <div className="flex items-center space-x-2">
          <ConciergeBell size={16} color="#101010" />
          <label htmlFor="roomType" className="text-gray-700 font-semibold">
            Room
          </label>
        </div>
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={onInputChange}
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
          className="w-full bg-[#644222] text-white py-4 px-4 text-sm font-medium rounded-none hover:bg-[#7a5229] transition-colors duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "CHECK AVAILABILITY"}
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
