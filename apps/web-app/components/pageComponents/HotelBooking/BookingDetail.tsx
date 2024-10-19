import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BookingCard = ({ checkIn, checkOut, adults, children, extraRooms, roomType, mealOption }:any) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">SNAS Retreat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">CHECK IN</h3>
            <p>{checkIn}</p>
            <p>12 PM</p>
          </div>
          <div>
            <h3 className="font-semibold">CHECK OUT</h3>
            <p>{checkOut}</p>
            <p>11 AM</p>
          </div>
        </div>
        <p className="mt-4">
          {adults} Adults | {children} Children | {extraRooms + 1} Room
        </p>
        <h3 className="font-semibold mt-4">{roomType}</h3>
        <ul className="list-disc list-inside mt-2">
          <li>{mealOption}</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
