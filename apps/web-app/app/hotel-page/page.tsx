'use client'
import Image from "next/image";
import Header from "@/components/pageComponents/header";
import AmenitiesHover from "@/components/roomPageComponent/AmenitiesHover";
import EntertainmentCards from "@/components/roomPageComponent/EntertenmateCard";
import BathroomComponent from "@/components/roomPageComponent/BathroomComponent";
import Footer from "@/components/pageComponents/footer";
import HeroImage from "../../assets/SLIDER2.png";
import HotelAminities from "@/components/hotelPageComponent/HotelAminities";
import { Music, Garden,Cctv,LuggageAssistance,TransPortTouriest,Touriest,Doctor,PaidAirPortTransfer,ShuttleService,TV,Parking,wheelchair,NewsPaper,Lowndery,PowerBackup,HotelWifi} from "@/assets/hotel-aminitiesIcon/index";
import HotelAbout from "@/components/hotelPageComponent/HoteAbout";


export default function HotelPage() {

  const hotelAmenitiesData  = [
    { id: 1, title: 'Wi-Fi', details: 'Stay connected with high-speed internet throughout the hotel', Icon: HotelWifi },
    { id: 2, title: 'Power Backup', details: '24/7 power backup to guarantee uninterrupted electricity', Icon: PowerBackup },
    { id: 3, title: 'Laundry Service', details: 'Convenient and reliable laundry services for all guests', Icon: Lowndery },
    { id: 4, title: 'Complimentary Newspaper', details: 'Available daily for our guests', Icon: NewsPaper },
    { id: 5, title: 'Wheelchair Accessible', details: 'Fully accessible for guests with mobility needs', Icon: wheelchair },
    { id: 6, title: 'Free Parking', details: 'Safe and secure parking facilities', Icon: Parking },
    { id: 7, title: 'TV', details: 'Flat-screen televisions with local and international channels in every room', Icon: TV },
    { id: 8, title: 'Paid Shuttle Service', details: 'Convenient transportation options to explore the local area', Icon: ShuttleService },
    { id: 9, title: 'Paid Airport Transfers', details: 'Seamless airport pick-up and drop-off services', Icon: PaidAirPortTransfer },
    { id: 10, title: 'Doctor on Call', details: 'Medical assistance available for any emergencies', Icon: Doctor },
    { id: 11, title: 'Local Tourist Guide', details: 'Access to professional local guides to enhance your travel experience', Icon: Touriest },
    { id: 12, title: 'Transport for Tourist Places (Paid Service)', details: 'Convenient transport options for local sightseeing', Icon: TransPortTouriest },
    { id: 13, title: 'Luggage Assistance', details: 'Our team is available to help with luggage on arrival and departure', Icon: LuggageAssistance },
    { id: 14, title: 'CCTV Security', details: '24/7 surveillance to ensure a safe stay', Icon: Cctv },
    { id: 15, title: 'Garden', details: 'A serene garden space to relax and unwind', Icon: Garden },
    { id: 16, title: 'Music Arrangement', details: 'Enjoy live or arranged music for events or peaceful ambiance', Icon: Music },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="h-72 md:h-screen relative">
        <Image
          src={HeroImage}
          alt="Room Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />   
      </section>
      <HotelAbout/>
      <AmenitiesHover cardData={hotelAmenitiesData}/>
      <HotelAminities/>
      <Footer />
    </div>
  );
}
