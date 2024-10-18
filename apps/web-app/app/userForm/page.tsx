"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MountainBackground from "../../assets/OBJECTS.png";
import { LogoRectangleWithoutBg } from "@/assets/svg";
import { GlobalInfo } from "@/context/provider";
import { UPDATE_USER } from "@/gql/userQuery";
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/navigation';


export default function UserForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });
  const { userDetails } = useContext(GlobalInfo);
  const fixedEmail = userDetails?.user?.email; // This email is fixed and cannot be changed by the user
  const router = useRouter();

  useEffect(() => {
    const updateLogoSize = () => {
      if (window.innerWidth >= 1024) {
        setLogoSize({ width: 400, height: 80 });
      } else if (window.innerWidth >= 768) {
        setLogoSize({ width: 300, height: 80 });
      } else {
        setLogoSize({ width: 150, height: 50 });
      }
    };

    window.addEventListener("resize", updateLogoSize);
    updateLogoSize(); // call on initial render

    return () => window.removeEventListener("resize", updateLogoSize);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
        alert("Name cannot be empty");
        return;
      }
  
      const phonePattern = /^\+?\d{1,3}?[- ]?\d{10}$/; // Regex pattern to check for a phone number with country code and 10 digits
      if (!phonePattern.test(phoneNumber)) {
        alert("Phone number must be 10 digits and include the country code");
        return;
      }
  
      updateuser({
        variables: {
          where: {
            id: userDetails?.user?.id, // Update with the actual user ID
          },
          data: {
            name: name.trim(),
            phoneNumber: phoneNumber.trim(),
          },
        },
      });
   
  };

  const [updateuser] = useMutation(UPDATE_USER, {
    onCompleted: async data => {
     console.log("data", data)
     router.push("/")
    },
    onError(error) {
     console.log('Error', 'Failed to authenticate mobile number');
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Add Mountain Background Image with animation to the left side */}
      <motion.div
        className="absolute left-0 top-0 w-1/4 h-full z-0"
        animate={{ y: [0, -10, 0] }} // Animation for shaking effect
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src={MountainBackground}
          alt="Mountain Background"
          layout="fill"
          objectFit="contain"
          className="opacity-20"
          style={{ objectPosition: "top left" }}
        />
      </motion.div>

      {/* Add Mountain Background Image with animation to the right side */}
      <motion.div
        className="absolute right-0 top-0 w-1/4 h-full z-0"
        animate={{ y: [0, 10, 0] }} // Animation for shaking effect
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src={MountainBackground}
          alt="Mountain Background"
          layout="fill"
          objectFit="contain"
          className="opacity-20"
          style={{ objectPosition: "bottom right" }}
        />
      </motion.div>

      {/* Static Sign Up Form */}
      <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden m-6">
      {/* Form Container */}
      <div className="p-8 rounded-xl shadow-lg w-full max-w-md space-y-8 z-10 bg-white border border-[#654222]">
        <div className="text-center">
          <div className="mx-auto bg-[#654222] flex items-center justify-center mb-4 p-4">
            {/* Logo */}
            <LogoRectangleWithoutBg width={logoSize?.width} height={logoSize?.height} />
          </div>
          <h1 className="text-3xl font-bold text-black">User Form</h1>
          <p className="mt-2 text-gray-600">Enter your details below</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-black">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#654222] bg-white text-black"
            />
          </div>

          {/* Phone Number Input with fixed country code */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-black">Phone Number</Label>
            <div className="flex">
              {/* <span className="inline-flex items-center px-3 border border-gray-300 bg-gray-50 text-gray-500 text-sm">
                {countryCode}
              </span> */}
              <Input
                id="phone"
                type="tel"
                placeholder="Eg:+91xxxxxxxxxx"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#654222] bg-white text-black"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={fixedEmail}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#654222] bg-white text-black"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#654222] hover:bg-[#7A5D3A] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
    </div>
  );
}


