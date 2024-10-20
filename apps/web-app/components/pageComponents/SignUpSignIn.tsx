"use client";

import { useState, useRef, useEffect, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, ArrowLeft } from "lucide-react";
import { LogoRectangleWithoutBg } from "@/assets/svg";
import { VERIFY_OTP, WEB_LOGIN } from "@/gql/loginQuery";
import { useMutation } from "@apollo/client";
import { setCookie } from "cookies-next";
import { GlobalInfo } from "@/context/provider";
import { useRouter } from "next/navigation";
import UserForm from "./UserForm"; // Import UserForm component
import Modal from "../modal";

export default function SignUpSignIn({ title, isOpen, onClose }: any) {
  const [email, setEmail] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });
  const [userId, setUserId] = useState();
  const { setUserState } = useContext(GlobalInfo);
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false); // For UserForm modal

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
    updateLogoSize();

    return () => window.removeEventListener("resize", updateLogoSize);
  }, []);

  useEffect(() => {
    if (showOTP) {
      otpInputs.current[0]?.focus();
    }
  }, [showOTP]);

  const handleSendOTP = () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    webAuth({ variables: { email } });
  };

  const handleChangeEmail = () => {
    setShowOTP(false);
    setOTP(["", "", "", "", "", ""]);
  };

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleOTPKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "OTP:", otp.join(""));
  };

  const verify = async () => {
    const enteredOtp = otp.join("");
    console.log("otp", enteredOtp);
    if (enteredOtp?.length === 6) {
      await verifyOtp({
        variables: {
          email,
          otp: enteredOtp,
        },
      });
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const [webAuth] = useMutation(WEB_LOGIN, {
    onCompleted: async (data) => {
      setUserId(data.registerUser.userID);
      setShowOTP(true);
      setOTP(["", "", "", "", "", ""]);
    },
    onError(error) {
      console.log("Error", "Failed to authenticate email");
    },
  });

  const [verifyOtp] = useMutation(VERIFY_OTP, {
    async onCompleted(data) {
      if (data?.verifyOtp?.result === "success") {
        setCookie("userDetails", JSON.stringify(data?.verifyOtp));
        setCookie("token", data?.verifyOtp.token);
        setUserState();
        if (data?.verifyOtp?.user?.name === "New User") {
          setModalVisible(true); // Open the UserForm modal
          onClose(); 
        } else {
          setOTP(["", "", "", "", "", ""]);
          onClose(); // Close the sign-in modal
        }
      } else {
        alert("Request not success, Try again later");
      }
    },
    onError(e) {
      console.log("verify:error", e);
    },
  });

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-center">
          <div className="mx-auto bg-[#654222] flex items-center justify-center mb-4 p-4">
            <LogoRectangleWithoutBg
              width={logoSize?.width}
              height={logoSize?.height}
            />
          </div>
          <h1 className="text-3xl font-bold text-black"> {title}</h1>
          {title === 'Sign Up' && <p className="mt-2 text-gray-600">Join our community today</p>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#654222] bg-white text-black"
              disabled={showOTP}
            />
          </div>
          {!showOTP ? (
            <Button
              type="button"
              onClick={handleSendOTP}
              className="w-full bg-[#654222] hover:bg-[#7A5D3A] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send OTP
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="space-y-4">
              <Label htmlFor="otp-0" className="text-black">
                Enter OTP
              </Label>
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    ref={(el) => (otpInputs.current[index] = el)}
                    className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-md focus:border-[#654222] focus:ring-2 focus:ring-[#654222] bg-white text-black transition-all duration-300"
                    required
                  />
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Button
                  type="button"
                  onClick={handleChangeEmail}
                  variant="outline"
                  className="text-[#654222] hover:text-[#7A5D3A] border-[#654222] hover:border-[#7A5D3A] transition duration-300 ease-in-out"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Change Email
                </Button>
              </div>
            </div>
          )}
          {showOTP && (
            <Button
              type="submit"
              className="w-full bg-[#654222] hover:bg-[#7A5D3A] text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={verify}
            >
              Verify & { title }
            </Button>
          )}
        </form>
      </Modal>
      <UserForm isOpen={modalVisible} onClose={() => setModalVisible(false)} /> {/* UserForm modal */}
    </div>
  );
}
