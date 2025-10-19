"use client"

import { useState, useEffect, useRef } from "react"

export default function Hero() {
  const [pulse, setPulse] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.5 // Set volume to 50%
      }
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 font-medium mb-3">EDITORIAL INTELLIGENCE • DAILY BRIEFINGS • REAL TIME</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-secondary-accent">GlobalBiz</span>{" "}
              <span className="text-gray-800">
                - Turning the world's business pulse into your daily competitive edge
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">Your world, intelligently summarized</p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-secondary-accent font-bold mr-3">✓</span>
                <span>GlobalBiz reads thousands of trusted sources</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-secondary-accent font-bold mr-3">✓</span>
                <span>Distills them into crisp, role-aware briefings for your customized sector</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-secondary-accent font-bold mr-3">✓</span>
                <span>
                  So you see the world’s business pulse before others do
                </span>
              </li><li className="text-gray-700 flex items-start">
                <span className="text-secondary-accent font-bold mr-3">✓</span>
                <span>
                  GlobalBiz.AI fetches, filters, and synthesizes premium sources
                </span>
              </li><li className="text-gray-700 flex items-start">
                <span className="text-secondary-accent font-bold mr-3">✓</span>
                <span>
                  Ready to distribute CXO‑ready, brand‑styled reports, in minutes
                </span>
              </li><li className="text-gray-700 flex items-start">
                <span className="text-secondary-accent font-bold mr-3">✓</span>
                <span>
                  You just select and send
                </span>
              </li>
            </ul>

            <button className="bg-secondary-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Book a demo today ! →
            </button>
          </div>

          {/* Video Section */}
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="https://agr-public.s3.ap-south-1.amazonaws.com/Globalbiz-landing-page-assets/hero-intro-show-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.5l2.883-2.793a1 1 0 011.617.793zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.5l2.883-2.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
