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
import { useMutation, useQuery, gql } from "@apollo/client";
import {
  BOOKING_PAYMENT,
  CREATE_BOOKING,
  UPDATE_BOOKING_PAYMENT,
} from "../../gql";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

export default function PrimaryBooking() {
  const { error, isLoading, Razorpay } = useRazorpay();
  const router = useRouter();
  const searchParams = useSearchParams();
  const razorPayKeyId: any = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const [createBooking] = useMutation(CREATE_BOOKING);
  const [bookingPayment] = useMutation(BOOKING_PAYMENT);
  const [updateBookingPayment] = useMutation(UPDATE_BOOKING_PAYMENT);

  const checkIn: any = searchParams.get("checkIn");
  const checkOut: any = searchParams.get("checkOut");
  const adults = parseInt(searchParams.get("adults") || "2");
  const children = parseInt(searchParams.get("children") || "0");
  const roomType = searchParams.get("roomType");
  const mealOption = searchParams.get("mealOption") || "Room with Breakfast";
  const initialBasePrice = parseInt(searchParams.get("basePrice") || "0");

  // States
  const [basePrice, setBasePrice] = useState<number>(initialBasePrice);
  const [gstPrice, setGstPrice] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [primaryUser, setPrimaryUser] = useState({
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
      const discountedPrice = basePrice - discount;
      const gst = discountedPrice * 0.05;
      setBasePrice(discountedPrice);
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
    setPrimaryUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking details submitted:", primaryUser);

    // Convert check-in and check-out dates to ISO strings
    const checkInDate = new Date(checkIn).toISOString();
    const checkOutDate = new Date(checkOut).toISOString();

    // Create booking data object
    const bookingData = {
      checkInDate,
      checkOutDate,
      room: {
        connect: {
          id: "cm2d7jl220001qelxs6geevb0", // Replace with actual room ID
        },
      },
      totalPrice: finalPrice,
      totalPriceWithoutTax: basePrice,
      user: {
        connect: {
          id: "cm2d2vtau0000i5mwifkpqeg6", // Replace with actual user ID
        },
      },
      bookingType: primaryUser.bookingType,
      primaryUser: {
        create: {
          address: primaryUser.address,
          age: parseInt(primaryUser.age, 10), // Safely parse age as an integer
          bookingType: primaryUser.bookingType,
          companyAddress: primaryUser.companyAddress,
          companyName: primaryUser.companyName,
          gstNumber: primaryUser.gstNumber,
          name: primaryUser.name,
          primaryUserGender: primaryUser.gender,
          verificationId: primaryUser.verificationId,
          verificationIdType: primaryUser.verificationIdType,
        },
      },
    };

    try {
      // Create booking
      const bookingResult = await createBooking({
        variables: { data: bookingData },
      });

      // If booking is successful, proceed with payment
      if (bookingResult?.data?.createBooking?.id) {
        const bookingId = bookingResult?.data?.createBooking?.id;

        const payment: any = await bookingPayment({
          variables: {
            bookingId,
            userId: "cm2d2vtau0000i5mwifkpqeg6", // Replace with actual user ID
          },
        });

        const options: RazorpayOrderOptions = {
          key: razorPayKeyId,
          amount: payment?.amount, // Amount in paise
          currency: payment.currency,
          image: "https://i.imgur.com/3g7nmJC.png",
          name: "SNAS Retreat",
          description: "Test Transaction",
          order_id: payment?.requestId, // Generate order_id on server
          handler: async (response) => {
            console.log("response", response);
            if (
              Object.keys(response).includes("razorpay_payment_id") &&
              response.razorpay_payment_id
            ) {
              await updateBookingPayment({
                variables: {
                  requestId: response?.razorpay_order_id,
                  bookingId: bookingId,
                  paymentId: response?.razorpay_payment_id,
                  signature: response?.razorpay_signature,
                },
              });
              alert("Payment Successfull");
            } else {
              alert("Something went wrong");
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#F37254",
          },
        };
        const razorpayInstance = new Razorpay(options);
        razorpayInstance.open();
        razorpayInstance.on("payment.failed", async (res) => {
          await updateBookingPayment({
            variables: {
              bookingId: bookingId,
              paymentError: res.error,
            },
          });
          alert(
            "Error in processing payment, you can retry payment in orders page"
          );
        });
      } else {
        console.error("Booking creation failed, no booking ID returned.");
      }
    } catch (error: any) {
      console.error("Error submitting booking:", error.message || error);
    }
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
                    <p>12 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">CHECK OUT</h3>
                    <p>{checkOut}</p>
                    <p>11 AM</p>
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
                    {/* User Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">User Name</Label>
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

                    {/* Age */}
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

                    {/* Gender */}
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

                    {/* Verification Id Type */}
                    <div className="space-y-2">
                      <Label htmlFor="verificationIdType">
                        Verification ID Type
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

                    {/* Government ID */}
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

                    {/* Booking Type */}
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
                              ? "Personal"
                              : primaryUser.bookingType === "corporate"
                                ? "Corporate"
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

                  {/* Conditional Fields */}
                  {primaryUser.bookingType === "personal" && (
                    <div className="space-y-2">
                      <Label htmlFor="address">Personal Address</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        value={primaryUser.address}
                        required={primaryUser.bookingType === "personal"}
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
                          required={primaryUser.bookingType === "corporate"}
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
                          required={primaryUser.bookingType === "corporate"}
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
                          required={primaryUser.bookingType === "corporate"}
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
