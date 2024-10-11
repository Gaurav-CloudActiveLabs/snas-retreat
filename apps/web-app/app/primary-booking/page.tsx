"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/pageComponents/header";
import Footer from "@/components/pageComponents/footer";

export default function PrimaryBooking() {
  const router = useRouter();
  const searchParams = useSearchParams()

  // const { roomType, checkIn, checkOut, adults, children, mealOption } =
  //   router.query;

    const checkIn = searchParams.get('checkIn') || ''
    const checkOut = searchParams.get('checkOut') || ''
    const adults = parseInt(searchParams.get('adults') || '1', 10)
    const children = parseInt(searchParams.get('children') || '0', 10)
    const roomType = searchParams.get('roomType') || 'Deluxe'
    const mealOption=searchParams.get('mealOption') || 'room-only'

  const [primaryUser, setPrimaryUser] = useState({
    name: "",
    age: "",
    gender: "male",
    idVerification: "",
    bookingType: "personal",
    address: "",
    companyName: "",
    companyAddress: "",
    gstNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrimaryUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking details submitted:", primaryUser);
    // Proceed with next steps, e.g., redirect or send data to backend
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="lg:px-28 px-10 mx-auto py-4 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="name">Primary User’s Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={primaryUser.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                required
                value={primaryUser.age}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                className="border p-2 rounded"
                value={primaryUser.gender}
                onChange={handleInputChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <Label htmlFor="idVerification">ID Verification</Label>
              <Input
                id="idVerification"
                name="idVerification"
                type="text"
                required
                value={primaryUser.idVerification}
                onChange={handleInputChange}
                placeholder="Enter Government ID"
              />
            </div>

            <div>
              <Label htmlFor="bookingType">Booking Type</Label>
              <select
                id="bookingType"
                name="bookingType"
                className="border p-2 rounded"
                value={primaryUser.bookingType}
                onChange={handleInputChange}
              >
                <option value="personal">Personal Use</option>
                <option value="corporate">Corporate Booking</option>
              </select>
            </div>

            {primaryUser.bookingType === "personal" && (
              <div>
                <Label htmlFor="address">Personal Address</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  value={primaryUser.address}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                />
              </div>
            )}

            {primaryUser.bookingType === "corporate" && (
              <>
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={primaryUser.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="companyAddress">Company Address</Label>
                  <Input
                    id="companyAddress"
                    name="companyAddress"
                    type="text"
                    value={primaryUser.companyAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="gstNumber">GST Number</Label>
                  <Input
                    id="gstNumber"
                    name="gstNumber"
                    type="text"
                    value={primaryUser.gstNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </div>

          <Button type="submit" className="w-full bg-blue-600 text-white py-4">
            Submit Booking
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
