"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogoRectangleWithoutBg } from "@/assets/svg";
import Modal from "../modal";
import SignUpSignIn from "./SignUpSignIn";

export default function OptionSignInSignUp({ isOpen, onClose }: any) {
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");

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

  // Function to open the Sign Up / Sign In modal and close the current one
  function openSignUpSignInModal(title: string) {
    onClose(); // Close the current modal
    setTitle(title);
    setModalVisible(true); // Open the Sign Up / Sign In modal
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
          <div className="mx-auto bg-[#654222] flex items-center justify-center mb-4 p-4">
            <LogoRectangleWithoutBg
              width={logoSize?.width}
              height={logoSize?.height}
            />
          </div>
          <div className="space-y-4 py-5">
            <Button
              onClick={() => openSignUpSignInModal("Log in")}
              className="w-full bg-[#C19A6B] text-white py-2 px-4 rounded-none hover:bg-[#a8835b] transition duration-300"
            >
              Log in
            </Button>
            <Button
              onClick={() => openSignUpSignInModal("Sign up")}
              className="w-full bg-white text-black py-2 px-4 rounded-none border border-gray-300 hover:bg-gray-100 transition duration-300"
            >
              Sign up
            </Button>
            <button
              onClick={onClose}
              className="w-full text-gray-600 hover:underline"
            >
              Stay logged out
            </button>
          </div>
      </Modal>

      {/* SignUpSignIn Modal */}
      <SignUpSignIn
        title={title}
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  )
}