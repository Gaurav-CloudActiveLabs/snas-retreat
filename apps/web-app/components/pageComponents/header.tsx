import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CornerRightUp,
} from "lucide-react";
import logo from "../../assets/LOGO_RECTANGLE_WITHOUT_BG.png";
import { Button } from "../ui/button";
import { LogoRectangleWithoutBg } from "@/assets/svg";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 140);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Top bar */}
      <div className="relative top-0 bg-[#654222] text-white z-50">
        <div className="lg:px-28 px-10 mx-auto py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Mon - Fri: 9:00 - 19:00 / Closed on Weekends</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 705 210-1786</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0 mr-1">
              <Link href="#" className="hover:text-gray-300">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`z-10 w-full transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-[#654222] shadow-lg"
            : "relative top-0 bg-[#09090975] z-50"
        }`}
      >
        <div className="lg:px-28 px-2 mx-auto ">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center lg:-ml-4">
              <LogoRectangleWithoutBg width={200} height={80} />
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex space-x-6 text-white cursor-pointer">
                {[
                  "Home",
                  "About Us",
                  "Rooms & Suites",
                  "Features",
                  "Location",
                  // "Gallery",
                  "Booking",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <h1
                      className="hover:text-[#D2B48C]"
                      onClick={() => scrollToSection(item)}
                    >
                      {item}
                    </h1>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <Link
                href="/reservation"
                className="bg-[#C19A6B] text-white py-4 px-6 hover:bg-[#a8835b] text-sm font-normal transition duration-300"
              >
                RESERVATION
              </Link>
            </div>

            <Button onClick={toggleSidebar} className="lg:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={toggleSidebar}
      >
        <div
          className={`w-64 bg-[#654222] h-full p-6 text-white transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Button onClick={toggleSidebar} className="mb-6 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>

          <nav>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Rooms & Suites",
                "Features",
                "Location",
                "Gallery",
                "Booking",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <h1
                    className="hover:text-[#D2B48C]"
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </h1>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 ">
        <button
          className=" bg-[#654222] text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
          onClick={() => scrollToSection("Home")}
        >
          <CornerRightUp className="w-6 h-6 z-50 bg-[#654222]" />
        </button>
      </div>
    </div>
  );
}
