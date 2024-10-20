import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import {
  Phone,
  Facebook,
  Instagram,
  Twitter,
  CornerRightUp,
  Mail,
  Linkedin,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { LogoRectangleWithoutBg } from "@/assets/svg";
import SignUpSignIn from "./SignUpSignIn";
import { GlobalInfo } from "@/context/provider";

export default function Header() {
  const { userDetails, signOut } = useContext(GlobalInfo); // Assuming logout is a method in context
  const userId = userDetails?.user?.id;
  const userName = userDetails?.user?.name;
  const userEmail = userDetails?.user?.email;
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });
  const [isLoginCardOpen, setIsLoginCardOpen] = useState(false); // for login card toggle
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");

  function openSignUpSignInModal(title: any) {
    setTitle(title);
    setModalVisible(true);
  }

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

  const toggleLoginCard = () => {
    setIsLoginCardOpen(!isLoginCardOpen); // toggle login card visibility
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about-us", label: "About Us" },
    { id: "rooms-suites", label: "Rooms & Suites" },
    { id: "features", label: "Features" },
    { id: "location", label: "Location" },
    // { id: "gallery", label: "Gallery" },  // If needed in the future
    { id: "booking", label: "Booking" },
    { id: "contact", label: "Contact" },
  ];

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
                <Mail size={16} />
                <span>info@snasretreat.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 8957860968</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-2 sm:mt-0 mr-1">
              <Link
                href="https://www.facebook.com/profile.php?id=61566001004942"
                className="hover:text-gray-300"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/snasretreat/"
                className="hover:text-gray-300"
              >
                <Instagram size={16} />
              </Link>
              <Link
                href="https://x.com/SNAS_RETREAT"
                className="hover:text-gray-300"
              >
                <Twitter size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/snas-retreat/"
                className="hover:text-gray-300"
              >
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`z-10 w-full transition-all duration-300 py-2 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-[#654222] shadow-lg"
            : "relative top-0 bg-[#09090975] z-50"
        }`}
      >
        <div className="lg:px-28 px-2 mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center lg:-ml-12">
              <LogoRectangleWithoutBg
                width={logoSize?.width}
                height={logoSize?.height}
              />
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex space-x-6 text-white cursor-pointer">
                {menuItems.map((item,i) => (
                  <li key={i}>
                    <h1
                      className="hover:text-[#D2B48C]"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </h1>
                  </li>
                ))}
              </ul>
            </nav>

            {/* User section */}
            {userId ? (
              <div className="relative">
                <User
                  size={40}
                  className="cursor-pointer text-white"
                  onClick={toggleLoginCard} // Toggle card on click
                />
                {isLoginCardOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-50">
                    <p className="text-gray-800">{userName}</p>
                    <p className="text-gray-500">{userEmail}</p>
                    <Button
                      className="mt-3 bg-red-500 text-white w-full"
                      onClick={signOut} // Call logout function
                    >
                      Sign out
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="hidden lg:flex space-x-2">
                  {" "}
                  {/* Changed to lg:flex and added space-x-2 */}
                  <Button
                    onClick={() => openSignUpSignInModal("Sign Up")}
                    className="bg-[#C19A6B] text-white  hover:bg-[#a8835b] text-primary-foreground shadow py-4 px-6 text-sm font-normal transition duration-300 rounded-none"
                  >
                    Sign Up
                  </Button>
                  <Button
                    onClick={() => openSignUpSignInModal("Sign In")}
                    className="bg-[#C19A6B] text-white  hover:bg-[#a8835b] text-primary-foreground shadow py-4 px-6 text-sm font-normal transition duration-300 rounded-none"
                  >
                    Sign In
                  </Button>
                </div>
              </>
            )}

            <Button
              onClick={toggleSidebar}
              className="mb-6 lg:hidden bg-[#654224] border border-white text-white p-2 rounded-none"
            >
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
          <Button
            onClick={toggleSidebar}
            className={`mb-6 lg:hidden bg-[#654224] border border-white text-white p-2 rounded-none`}
          >
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
            {menuItems.map((item,i) => (
                  <li key={i}>
                    <h1
                      className="hover:text-[#D2B48C]"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </h1>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
      <SignUpSignIn
        title={title}
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)} // Close function
      />
    </div>
  );
}
