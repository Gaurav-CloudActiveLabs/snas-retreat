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
      <div id="Home">
        <Navbar />
      </div>
      <div id="About Us">
        <About />
      </div>
      <div id="Features">
        <Explore />
      </div>
      <div id="Rooms & Suites">
        <RoomShowCase />
      </div>
      <div id="Location">
        <Location />
      </div>
      <div id="testimonial">
        <TestimonialSection />
      </div>
      <div id="Booking">
        <Appointment />
      </div>
      {/* <div id="Gallery">
        <VideoTour />
      </div> */}
      <div id="Contact">
        <Footer />
      </div>
    </div>
  );
}
