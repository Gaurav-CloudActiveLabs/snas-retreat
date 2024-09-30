"use client"

import { useState } from 'react'
import { Play, X } from 'lucide-react'

export default function VideoTour() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const openVideo = () => setIsVideoOpen(true)
  const closeVideo = () => setIsVideoOpen(false)

  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://htmldemo.zcubethemes.com/riorelax/img/bg/video-bg.png')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-8">
            Take A Tour Of Luxuri
          </h1>
          <button
            onClick={openVideo}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 rounded-full p-4"
          >
            <Play className="w-12 h-12 text-white" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}