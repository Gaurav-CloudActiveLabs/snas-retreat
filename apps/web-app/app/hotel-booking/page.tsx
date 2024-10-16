"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Header from "@/components/pageComponents/header";
import Footer from "@/components/pageComponents/footer";
import {
  CalendarDays,
  Users,
  Utensils,
  Building2,
  CreditCard,
  Tag,
} from "lucide-react";
// Instead of importing from './gql/payment'
import { CREATE_PAYMENT, GET_PAYMENT } from "../../gql";

// Use the queries/mutations in your Apollo client or elsewhere

export default function PrimaryBooking() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const checkIn = searchParams.get("checkIn") || "16 Oct 2024";
  const checkOut = searchParams.get("checkOut") || "17 Oct 2024";
  const adults = parseInt(searchParams.get("adults") || "2", 10);
  const children = parseInt(searchParams.get("children") || "0", 10);
  const roomType =
    searchParams.get("roomType") ||
    "Superior Room Garden View with Balcony Twin Bed";
  const mealOption = searchParams.get("mealOption") || "Room with Breakfast";
  const initialBasePrice = parseInt(searchParams.get("basePrice") || "0");

  // States
  const [basePrice, setBasePrice] = useState<any>(initialBasePrice);
  const [gstPrice, setGstPrice] = useState<any>();
  const [finalPrice, setFinalPrice] = useState<any>();
  const [couponCode, setCouponCode] = useState<any>("");
  const [primaryUser, setPrimaryUser] = useState<any>({
    name: "",
    age: "",
    gender: "male",
    verificationIdType: "aadhaar",
    verificationId: "",
    bookingType: "personal",
    address: "",
    companyName: "",
    companyAddress: "",
    gstNumber: "",
  });

  // Apply Coupon Logic
  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      const discount = basePrice * 0.1;
      const discountedPrice = finalPrice - discount;
      setBasePrice(discountedPrice);
      const gst = basePrice * 0.05; // 5% GST
      setGstPrice(gst);
      setFinalPrice(discountedPrice + gst);
    }
  };

  // Recalculate final price with 5% GST
  useEffect(() => {
    const gst = basePrice * 0.05; // 5% GST
    setGstPrice(gst);
    setFinalPrice(basePrice + gst);
  }, [basePrice]);

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPrimaryUser((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking details submitted:", primaryUser);
    // Handle booking logic (e.g., send data to backend)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="lg:px-28 px-10 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  SNAS Retreat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">CHECK IN</h3>
                    <p>{checkIn}</p>
                    <p>2 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">CHECK OUT</h3>
                    <p>{checkOut}</p>
                    <p>12 PM</p>
                  </div>
                </div>
                <p className="mt-4">
                  {adults} Adults | {children} Children | 1 Room
                </p>
                <h3 className="font-semibold mt-4">{roomType}</h3>
                <ul className="list-disc list-inside mt-2">
                  <li>{mealOption}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Primary Guest Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name"> User Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={primaryUser.name}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        required
                        value={primaryUser.age}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange({
                            target: { name: "gender", value },
                          } as any)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <span>
                            {primaryUser.gender === "male"
                              ? "Male"
                              : primaryUser.gender === "female"
                              ? "Female"
                              : primaryUser.gender === "non_binary"
                              ? "Non-binary"
                              : "Prefer not to say"}
                          </span>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="non_binary">Non-binary</SelectItem>
                          <SelectItem value="prefer_not_to_say">
                            Prefer not to say
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="verificationIdType">
                        Verification Id Type
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange({
                            target: { name: "verificationIdType", value },
                          } as any)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <span>
                            {primaryUser.verificationIdType === "aadhaar"
                              ? "Aadhaar"
                              : primaryUser.verificationIdType === "voterID"
                              ? "Voter ID"
                              : primaryUser.verificationIdType === "passport"
                              ? "Passport"
                              : primaryUser.verificationIdType ===
                                "drivingLicense"
                              ? "Driving License"
                              : "Select Verification ID"}
                          </span>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aadhaar">Aadhaar</SelectItem>
                          <SelectItem value="voterID">Voter ID</SelectItem>
                          <SelectItem value="passport">Passport</SelectItem>
                          <SelectItem value="drivingLicense">
                            Driving License
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="verificationId">Government ID</Label>
                      <Input
                        id="verificationId"
                        name="verificationId"
                        type="text"
                        required
                        value={primaryUser.verificationId}
                        onChange={handleInputChange}
                        placeholder="Enter Government ID"
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bookingType">Booking Type</Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange({
                            target: { name: "bookingType", value },
                          } as any)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <span>
                            {primaryUser.bookingType === "personal"
                              ? "Personal Use"
                              : primaryUser.bookingType === "corporate"
                              ? "Corporate Booking"
                              : "Select Booking Type"}
                          </span>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal">Personal Use</SelectItem>
                          <SelectItem value="corporate">
                            Corporate Booking
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {primaryUser.bookingType === "personal" && (
                    <div className="space-y-2">
                      <Label htmlFor="address">Personal Address</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        value={primaryUser.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                        className="w-full"
                      />
                    </div>
                  )}

                  {primaryUser.bookingType === "corporate" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          type="text"
                          value={primaryUser.companyName}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="companyAddress">Company Address</Label>
                        <Input
                          id="companyAddress"
                          name="companyAddress"
                          type="text"
                          value={primaryUser.companyAddress}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gstNumber">GST Number</Label>
                        <Input
                          id="gstNumber"
                          name="gstNumber"
                          type="text"
                          value={primaryUser.gstNumber}
                          onChange={handleInputChange}
                          className="w-full"
                        />
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Price Breakup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>1 Room x 1 Night</span>
                    <span>₹ {basePrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hotel Taxes (5% GST)</span>
                    <span>₹ {gstPrice}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total Amount to be paid</span>
                    <span>₹ {finalPrice}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Coupon Codes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button onClick={applyCoupon}>
                    <Tag className="w-4 h-4 mr-2" />
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Button
              className="w-full bg-[#C19A6B] text-white py-4 px-6 hover:bg-[#a8835b] text-sm font-normal transition duration-300"
              onClick={handleSubmit}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Proceed to Payment
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
