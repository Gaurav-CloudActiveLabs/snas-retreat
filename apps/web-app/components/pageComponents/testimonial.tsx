import { SetStateAction, useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import testimonialBg from "../../assets/testimonialBg.png";
import MaleAvatar from "../../assets/MaleAvatar.jpg"; // replace with the actual male avatar image path
import FemaleAvatar from "../../assets/FemaleAvatar.jpg"; // replace with the actual female avatar image path
import Image from "next/image";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Mumbai",
    image: MaleAvatar,
    rating: 5,
    quote:
      "My stay at SNAS RETREAT was nothing short of spectacular! The view from my balcony was breathtaking, and the service was top-notch. The staff went out of their way to ensure we were comfortable and had everything we needed. It's a perfect getaway for anyone looking to relax and unwind in the lap of nature.",
  },
  {
    name: "Priya Sharma",
    role: "Delhi",
    image: FemaleAvatar,
    rating: 5,
    quote:
      "SNAS RETREAT is the epitome of luxury in Manali. The rooms were spacious, elegantly decorated, and offered stunning views of the mountains. The wellness and spa services were the best I’ve experienced, making it a rejuvenating experience for me and my family. Highly recommended!",
  },
  {
    name: "Ankit Gupta",
    role: "Bengaluru",
    image: MaleAvatar,
    rating: 5,
    quote:
      "The tranquility and beauty of SNAS RETREAT blew me away. Away from the hustle of the town, yet close enough to access all the attractions, it was the perfect location for a peaceful vacation. The food was delicious, and the amenities, especially the bonfire nights, made our stay truly memorable.",
  },
  {
    name: "Sneha Verma",
    role: "Chandigarh",
    image: FemaleAvatar,
    rating: 5,
    quote:
      "We had an amazing time at SNAS RETREAT! The hotel’s modern amenities, coupled with the traditional warmth of Manali, made it the ideal vacation spot. The private balconies offered the most beautiful mountain views, and the personalized service was outstanding. We’re already planning our next stay!",
  },
  {
    name: "Rahul Desai",
    role: "Ahmedabad",
    image: MaleAvatar,
    rating: 5,
    quote:
      "I stayed at SNAS RETREAT with my family, and it was one of the best holiday experiences we've ever had. The rooms were luxurious, the staff was incredibly friendly, and the hotel itself was nestled in the perfect spot with panoramic views of the valley. A must-visit for anyone coming to Manali.",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  useEffect(() => {
    // Update the number of testimonials per page based on the screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setTestimonialsPerPage(3); // Large screens (desktop) show 3 testimonials per page
      } else if (window.innerWidth >= 768) {
        setTestimonialsPerPage(2); // Medium screens (tablet) show 2 testimonials per page
      } else {
        setTestimonialsPerPage(1); // Small screens (mobile) show 1 testimonial per page
      }
    };

    // Set initial value
    handleResize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numberOfDots = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleDotClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const startIndex = currentIndex * testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  return (
    <section
      className="py-16 lg:px-28 px-10 mx-auto bg-[#f4f4f4] bg-cover"
      style={{ backgroundImage: `url(${testimonialBg.src})` }}
    >
      <div className="">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-[#644222] mb-6 mt-4">
          What Our Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-black font-medium text-sm">{testimonial.role}</p>
                </div>
                <div className="ml-auto">
                  <Quote className="w-8 h-8 text-gray-300" />
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-black font-medium leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {[...Array(numberOfDots)].map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "bg-[#654222]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
