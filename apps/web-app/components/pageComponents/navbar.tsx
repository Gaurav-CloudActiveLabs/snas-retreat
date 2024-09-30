import { useState, useEffect } from "react";
import {  X, ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "../../assets/SLIDER1.png";
import slider2 from "../../assets/SLIDER2.png"
import slider3 from "../../assets/SLIDER3.png";
import Image from "next/image";
import Header from "./header";
import BookingForm from "./BookingForm"; // Import the new component

export default function Navbar() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const slides = [slider1, slider2, slider3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Slideshow Section */}
      <section
        className="h-screen"
        onMouseEnter={() => setShowNavigation(true)}
        onMouseLeave={() => setShowNavigation(false)}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}

        {/* Overlay Text and Buttons */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white px-4 sm:px-0 max-w-2xl">
            <h1
              className="text-3xl md:text-4xl font-semibold mb-4"
            >
              Enjoy A Luxury Experience
            </h1>
            <p className="mb-8 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base ">
              Welcome to SNAS RETREAT, where luxury meets tranquility. Escape
              the bustle of daily life and indulge in the serene beauty of
              Manali’s majestic mountains. Relax in the comfort of our boutique
              hotel, offering a 360-degree view of snow-clad peaks and lush
              apple orchards
            </p>
            <div>
              <button
                className="border-solid-white-600 text-white py-3 px-4 lg:px-28 text-sm font-normal"
                style={{ border: "2px solid #fff" }}
              >
                Book Your Stay Now
              </button>
              {/* <button
                className="text-white py-3 px-6 text-sm font-normal flex items-center justify-center"
                onClick={() => setShowVideo(true)}
              >
                <Play size={50} className="w-12 h-12 text-white" />
                <span style={{ marginLeft: 10 }}>INTRO VIDEO</span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full hover:bg-opacity-75 transition-opacity"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 rounded-full hover:bg-opacity-75 transition-opacity"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </section>

      {/* Booking Form Section */}
      <BookingForm />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg w-4/5 h-4/5 px-28 p-0 m-4">
            <button
              className="absolute -top-10 -right-5 z-50 text-white hover:text-white"
              onClick={() => setShowVideo(false)}
            >
              <X fill="white" size={20} />
            </button>
            <div className="relative w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
