import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Send,
  Linkedin,
} from "lucide-react";
import footerBg from "../../assets/footer-bg.png";
import LOGO_SQUARE from "../../assets/LOGO_SQUARE_WITHOUT_BG.png";
import {  LogoSquareWithoutBg } from "@/assets/svg";

export default function Footer() {
  return (
    <footer className="text-white">
      <div
        className="bg-cover bg-center"
        style={{
          // backgroundImage: `url(${footerBg.src})`,
          backgroundColor: "#341e09",
        }}
      >
        <div className="lg:px-28 px-10 mx-auto py-10 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold mb-2 sm:align-middle">Our Brand</h2>
              <div className="-ml-12">
                <LogoSquareWithoutBg width={250} height={250}/>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                  <span className="leading-relaxed">
                    SNAS RETREAT
                    <br />
                    Manali Nagar Road
                    <br />
                    Near by Sharbari Bata Temple
                    <br />
                    Shuru, Himachal Pradesh 175143
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 flex-shrink-0" size={18} />
                  <span>+91 70183 19517</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 flex-shrink-0" size={18} />
                  <span>info@snasretreat.com</span>
                </li>
              </ul>
              {/* <h3 className="text-xl font-semibold mt-8 mb-4">Social Media:</h3> */}
              <ul className="flex mt-8 space-x-6">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    <Facebook size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    <Instagram size={24} />
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    <Google size={24} />
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    <Twitter size={24} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    <Linkedin size={24} />
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    <Linkedin size={24} />
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Know SNAS RETREAT */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Know SNAS RETREAT</h2>
              <ul className="space-y-3">
                {[
                  "Home",
                  "About Us",
                  "Rooms & Suites",
                  "Features",
                  "Location",
                  "Booking",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Cancellation Policy",
                  "Booking Policy",
                  "Terms and Conditions",
                  "Refund Policy",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#4a3725] ">
        <div className="lg:px-28 px-10 mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white-400">
              © 2024 SNAS RETREAT. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
