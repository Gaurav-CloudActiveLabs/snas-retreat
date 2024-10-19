"use client";

import About from "@/components/pageComponents/About";
import Appointment from "@/components/pageComponents/Appointment";
import Explore from "@/components/pageComponents/Explore";
import Footer from "@/components/pageComponents/footer";
import Location from "@/components/pageComponents/Location";
import Navbar from "@/components/pageComponents/navbar";
import RoomShowCase from "@/components/pageComponents/RoomShowcase";
import TestimonialSection from "@/components/pageComponents/testimonial";

export default function Home() {
  return (
    <div>
      <div id="home">
        <Navbar />
      </div>
      <div id="about-us">
        <About />
      </div>
      <div id="features">
        <Explore />
      </div>
      <div id="rooms-suites">
        <RoomShowCase />
      </div>
      <div id="location">
        <Location />
      </div>
      <div id="testimonial">
        <TestimonialSection />
      </div>
      <div id="booking">
        <Appointment />
      </div>
      {/* <div id="Gallery">
        <VideoTour />
      </div> */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
