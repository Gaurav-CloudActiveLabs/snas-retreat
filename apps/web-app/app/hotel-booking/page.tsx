"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/pageComponents/header";
import Footer from "@/components/pageComponents/footer";
import { useMutation, useQuery } from "@apollo/client";
import {
  BOOKING_PAYMENT,
  CREATE_BOOKING,
  GET_COUNTRIES,
  GET_STATES,
  UPDATE_BOOKING_PAYMENT,
} from "../../gql";
import { useRazorpay } from "react-razorpay";
import { ROOMS } from "@/gql";
import { CreditCard, Tag } from "lucide-react";
import { GlobalInfo } from "@/context/provider";
import SignUpSignIn from "@/components/pageComponents/SignUpSignIn";
import BookingCard from "@/components/pageComponents/HotelBooking/BookingDetail";
import PriceBreakup from "@/components/pageComponents/HotelBooking/PriceBreakup";
import CouponCard from "@/components/pageComponents/HotelBooking/CouponCodes";
import PrimaryGuestDetailsCard from "@/components/pageComponents/HotelBooking/PrimaryGuestDetails";

export default function PrimaryBooking() {
  const { userDetails } = useContext(GlobalInfo);
  const { Razorpay } = useRazorpay();
  const router = useRouter();
  const userId = userDetails?.user?.id;
  const userName = userDetails?.user?.name;
  const userEmail = userDetails?.user?.email;
  const searchParams = useSearchParams();
  const razorPayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

  // Queries and Mutations
  const [createBooking] = useMutation(CREATE_BOOKING);
  const [bookingPayment] = useMutation(BOOKING_PAYMENT);
  const [updateBookingPayment] = useMutation(UPDATE_BOOKING_PAYMENT);
  const {
    loading: loadingRooms,
    error: roomsError,
    data: roomsData,
  } = useQuery(ROOMS, {
    variables: {
      where: {
        isAvailable: {
          equals: true,
        },
      },
    },
  });
  const {
    loading: loadingCountries,
    error: countriesError,
    data: countriesData,
  } = useQuery(GET_COUNTRIES);

  const {
    loading: loadingStates,
    error: statesError,
    data: statesData,
  } = useQuery(GET_STATES);

  // Extracting query params
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const adults = parseInt(searchParams.get("adults") || "2");
  const children = parseInt(searchParams.get("children") || "0");
  const roomType = searchParams.get("roomType") || "Standard";
  const mealOption = searchParams.get("mealOption") || "Room with Breakfast";
  const extraRooms = parseInt(searchParams.get("extraRooms") || "0", 10);
  const extraBeds = parseInt(searchParams.get("extraBeds") || "0", 10);

  // States
  const [basePrice, setBasePrice] = useState<number>(0);
  const [gstPrice, setGstPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [igst, setIgst] = useState(0);
  const [gstRate, setGstRate] = useState(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [primaryUser, setPrimaryUser] = useState({
    name: "",
    age: 18,
    gender: "male",
    verificationIdType: "aadhaar",
    verificationId: "",
    bookingType: "personal",
    countries: "",
    state: "",
    indianState: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    postalCode: "",
    companyName: "",
    gstNumber: "",
  });

  // Assuming primaryUser is defined in your state
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    verificationId: "",
    countries: "",
    state: "",
    streetAddress: "",
    postalCode: "",
    companyName: "",
    gstNumber: "",
  });
  const [roomIds, setRoomIds] = useState<string[]>([]);
  // Set basePrice and Room IDs from roomType.offerPrice when roomsData is available
  useEffect(() => {
    if (roomsData) {
      const availableRooms = roomsData.rooms
        .filter((room: any) => room.roomType.name === roomType)
        .slice(0, extraRooms + 1); // Get the required number of rooms (extraRooms + 1)

      if (availableRooms.length > 0) {
        setRoomIds(availableRooms.map((room: any) => room.id)); // Set room IDs

        const roomType = availableRooms[0].roomType;
        let total = roomType.offerPrice * (extraRooms + 1); // Base price for all rooms

        if (mealOption === "with-breakfast")
          total += roomType.breakfastPrice.price * (extraRooms + 1);
        if (mealOption === "with-breakfast-dinner")
          total +=
            (roomType.breakfastPrice.price + roomType.dinnerPrice.price) *
            (extraRooms + 1);

        setBasePrice(roomType.offerPrice ? total * numberOfDays : 0);
      }
    }
  }, [roomsData, roomType, extraRooms, mealOption]);

  // Calculate number of days
  const calculateDays = (checkIn: string, checkOut: string) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
    return daysDifference >= 0 ? daysDifference : 0; // Return 0 if check-out is before check-in
  };

  // Calculate number of days between check-in and check-out
  const numberOfDays = calculateDays(checkIn, checkOut);

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

  // Handle Input Changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPrimaryUser((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: any = { ...errors };
    // Reset errors
    Object.keys(newErrors).forEach((key) => {
      newErrors[key] = "";
    });

    // Validate Name
    if (!primaryUser.name.trim()) {
      newErrors.name = "User Name is required.";
    }

    // Validate Age
    if (!primaryUser.age) {
      newErrors.age = "Age is required.";
    } else if (primaryUser.age < 18) {
      newErrors.age = "Age must be greater then 18.";
    }
    // Validate Government ID
    if (!primaryUser.verificationId.trim()) {
      newErrors.verificationId = "Government ID is required.";
    }

    if (!primaryUser.countries.trim()) {
      newErrors.countries = "Countries is required.";
    }
    if (!primaryUser.state.trim()) {
      newErrors.state = "State is required.";
    }
    if (!primaryUser.postalCode.trim()) {
      newErrors.postalCode = "Postal Code is required.";
    }
    if (!primaryUser.streetAddress.trim()) {
      newErrors.streetAddress = "Street Address is required.";
    }

    // Validate Company Name if Booking Type is Corporate
    if (primaryUser.bookingType === "corporate") {
      if (!primaryUser.companyName.trim()) {
        newErrors.companyName =
          "Company Name is required for corporate booking.";
      }
      if (!primaryUser.gstNumber.trim()) {
        newErrors.gstNumber = "GST Number is required for corporate booking.";
      }
    }

    // Update the errors state
    setErrors(newErrors);

    // Check if there are any errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Convert check-in and check-out dates to ISO strings
      const checkInDate = new Date(checkIn).toISOString();
      const checkOutDate = new Date(checkOut).toISOString();

      // Create booking data object with multiple room IDs
      const bookingData = {
        checkInDate,
        checkOutDate,
        rooms: {
          connect: roomIds.map((id) => ({ id })), // Multiple room IDs
        },
        totalPrice: finalPrice,
        totalPriceWithoutTax: basePrice,
        user: {
          connect: {
            id: userId,
          },
        },
        bookingType: primaryUser.bookingType,
        primaryUser: {
          create: {
            age: primaryUser.age,
            bookingType: primaryUser.bookingType,
            companyName: primaryUser.companyName,
            gstNumber: primaryUser.gstNumber,
            name: primaryUser.name,
            gender: primaryUser.gender,
            verificationId: primaryUser.verificationId,
            verificationIdType: primaryUser.verificationIdType,
            countries: {
              connect: { id: primaryUser.countries }, // Connect countries
            },
            ...(primaryUser.countries === "India" && {
              indianState: {
                connect: { id: primaryUser.indianState }, // Connect indianState if countries is India
              },
            }),
            state: primaryUser.state,
            streetAddress: primaryUser.streetAddress,
            addressLine2: primaryUser.addressLine2,
            city: primaryUser.city,
            postalCode: primaryUser.postalCode,
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
              userId,
            },
          });

          const options: any = {
            key: razorPayKeyId,
            amount: payment?.amount, // Amount in paise
            currency: payment.currency,
            image: "https://i.imgur.com/3g7nmJC.png",
            name: "SNAS Retreat",
            description: "SNAS Retreat Transaction",
            order_id: payment?.requestId, // Generate order_id on server
            handler: async (response: any) => {
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
              name: userName,
              email: userEmail,
              // contact: "9999999999",
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
    }
  };

  useEffect(() => {
    let gstRateValue = 0;
    let cgstValue = 0;
    let sgstValue = 0;
    let igstValue = 0;

    // Determine GST rates based on base price and state
    if (primaryUser.state  === "Himachal Pradesh") {
      if (basePrice <= 7500) {
        gstRateValue = 0.12; // 12% GST
        cgstValue = sgstValue = (basePrice * gstRateValue) / 2; // Split between CGST and SGST
      } else {
        gstRateValue = 0.18; // 18% GST
        cgstValue = sgstValue = (basePrice * gstRateValue) / 2; // Split between CGST and SGST
      }
    } else {
      gstRateValue = 0.18; // Default to 18% GST for other states
      igstValue = basePrice * gstRateValue; // Full IGST
    }
    // Set states
    setGstRate(gstRateValue);
    setCgst(cgstValue);
    setSgst(sgstValue);
    setIgst(igstValue);
    // Calculate total GST price and final price
    const totalGstPrice = cgstValue + sgstValue + igstValue;
    const calculatedFinalPrice = basePrice + totalGstPrice;
    setGstPrice(totalGstPrice);
    setFinalPrice(calculatedFinalPrice);

  }, [basePrice, primaryUser.state ]); // Include onFinalPriceUpdate as a dependency
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="lg:px-28 px-10 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <BookingCard
              checkIn={checkIn}
              checkOut={checkOut}
              adults={adults}
              children={children}
              extraRooms={extraRooms}
              roomType={roomType}
              mealOption={mealOption}
            />
            <PrimaryGuestDetailsCard
              primaryUser={primaryUser}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              countriesData={countriesData}
              statesData={statesData}
              errors={errors}
            />
          </div>

          {primaryUser.state && ( <div className="space-y-6">
                <PriceBreakup
                  extraRooms={extraRooms}
                  numberOfDays={numberOfDays}
                  basePrice={basePrice}
                  state={primaryUser.state}
                  gstPrice={gstPrice}
                  cgst={cgst}
                  sgst={sgst}
                  igst={igst}
                  gstRate={gstRate}
                  finalPrice={finalPrice}
                />
                <CouponCard
                  couponCode={couponCode}
                  setCouponCode={setCouponCode}
                  applyCoupon={applyCoupon}
                />
            <Button
              className="w-full bg-[#C19A6B] text-white py-4 px-6 hover:bg-[#a8835b] text-sm font-normal transition duration-300 rounded-none"
              onClick={handleSubmit}
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Proceed to Payment
            </Button>
          </div>
               )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
