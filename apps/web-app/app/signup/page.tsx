"use client";

import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/pageComponents/header";
import Footer from "@/components/pageComponents/footer";
import { CreditCard } from "lucide-react";
import { GlobalInfo } from "@/context/provider";
import SignUpSignIn from "@/components/pageComponents/SignUpSignIn";

export default function SignUp() {
  const { userDetails } = useContext(GlobalInfo);
  const userId = userDetails?.user?.id;
  const [modalVisible, setModalVisible] = useState(false);

  function handleSubmit() {
    if (!userId) {
      setModalVisible(true); // Open the modal if there's no userId
    } else {
      console.log("Proceed to Payment");
      // Add logic to proceed with the payment
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="lg:px-28 px-10 mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
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
      <SignUpSignIn
        title={{ title: "Sign Up" }}
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)} // Close function
      />
    </div>
  );
}
