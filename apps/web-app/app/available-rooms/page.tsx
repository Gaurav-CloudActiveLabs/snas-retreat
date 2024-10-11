'use client'

import { useSearchParams } from 'next/navigation'
import Footer from "@/components/pageComponents/footer"
import Header from "@/components/pageComponents/header"
import RoomList from "@/components/pageComponents/RoomList"
import React from "react"

const AvailableRooms = () => {
  const searchParams = useSearchParams()
  
  const checkIn = searchParams.get('checkIn') || ''
  const checkOut = searchParams.get('checkOut') || ''
  const adults = parseInt(searchParams.get('adults') || '1', 10)
  const children = parseInt(searchParams.get('children') || '0', 10)
  const roomType = searchParams.get('roomType') || 'Deluxe'

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-[#644222] text-center leading-snug my-8">
          Available Rooms
        </h1>
        <RoomList
          initialCheckIn={checkIn}
          initialCheckOut={checkOut}
          initialAdults={adults}
          initialChildren={children}
          initialRoomType={roomType}
        />
      </main>
      <Footer />
    </div>
  )
}

export default AvailableRooms;