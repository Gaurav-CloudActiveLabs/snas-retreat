import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "../../assets/SLIDER1.png";
import slider2 from "../../assets/SLIDER2.png";
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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-40 px-2">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Enjoy A Luxury Experience
          </h1>
          <p className="max-w-2xl text-base md:text-lg mb-8">
            Welcome to SNAS RETREAT, where luxury meets tranquility. Escape the
            bustle of daily life and indulge in the serene beauty of Manali’s
            majestic mountains. Relax in the comfort of our boutique hotel,
            offering a 360-degree view of snow-clad peaks and lush apple
            orchards.
          </p>
          <div className="relative flex items-center">
            <button className="border-2 border-white text-white py-2 px-4 text-sm font-medium transition hover:bg-white hover:text-black md:py-3 md:px-6">
              BOOK YOUR STAY NOW
            </button>
            <button
              className="block md:hidden absolute left-[-50px] md:left-[-60px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity md:p-3"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} className="md:size-22" />
            </button>
            <button
              className="block md:hidden absolute right-[-50px] md:right-[-60px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity md:p-3"
              onClick={nextSlide}
            >
              <ChevronRight size={20} className="md:size-22" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        {showNavigation && (
          <>
            <button
              className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-opacity md:p-4"
              onClick={prevSlide}
            >
              <ChevronLeft size={20} className="md:size-22" />
            </button>
            <button
              className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition-opacity md:p-4"
              onClick={nextSlide}
            >
              <ChevronRight size={20} className="md:size-22" />
            </button>
          </>
        )}
      </section>

      {/* Booking Form Section */}
      <BookingForm />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg w-4/5 h-4/5 p-0 m-4">
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
