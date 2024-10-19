"use client";

import { useState, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogoRectangleWithoutBg } from "@/assets/svg";
import { GlobalInfo } from "@/context/provider";
import { UPDATE_USER } from "@/gql/userQuery";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Modal from "../modal";

export default function UserForm({ isOpen, onClose }: any) {
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

  const handleSubmit = (e) => {
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

    updateUser({
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

  const [updateUser] = useMutation(UPDATE_USER, {
    onCompleted: async (data) => {
      console.log("data", data);
      onClose(); // Close the modal after submission
    },
    onError(error) {
      console.log("Error", "Failed to update user details");
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div className="mx-auto bg-[#654222] flex items-center justify-center mb-4 p-4">
          {/* Logo */}
          <LogoRectangleWithoutBg
            width={logoSize?.width}
            height={logoSize?.height}
          />
        </div>
        <h1 className="text-3xl font-bold text-black">User Form</h1>
        <p className="mt-2 text-gray-600">Enter your details below</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-black">
            Name
          </Label>
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
          <Label htmlFor="phone" className="text-black">
            Phone Number
          </Label>
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

        {/* Email Input */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-black">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={fixedEmail}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#654222] bg-white text-black"
            readOnly
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
    </Modal>
  );
}
