"use client"

import { useState, useEffect, useRef } from "react"
import Image from 'next/image'
import ContactModal from './contact-modal'

export default function Hero() {
  const [pulse, setPulse] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showContactModal, setShowContactModal] = useState(false)
  const [currentListItem, setCurrentListItem] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const listItems = [
    "GlobalBiz reads thousands of trusted sources",
    "Distills them into crisp, role-aware briefings for your customized sector",
    "So you see the world's business pulse before others do",
    "GlobalBiz.AI fetches, filters, and synthesizes premium sources",
    "Ready to distribute CXO‑ready, brand‑styled reports, in minutes",
    "You just select and send"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentListItem((prev) => (prev + 1) % listItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [listItems.length])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile || !videoContainerRef.current) {
      setShouldLoadVideo(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )

    observer.observe(videoContainerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [isMobile])

  useEffect(() => {
    if (shouldLoadVideo) {
      setIsVideoReady(false)
    }
  }, [shouldLoadVideo])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.5 // Set volume to 50%
      }
      setIsMuted(videoRef.current.muted)
    }
  }

  const openContactModal = () => {
    setShowContactModal(true)
  }

  const closeContactModal = () => {
    setShowContactModal(false)
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 py-16 lg:py-24 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#E46C5D]/10 to-[#6FA8E7]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#B48BCB]/10 to-[#E46C5D]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs md:text-sm text-gray-500 font-semibold tracking-widest uppercase mb-4">EDITORIAL INTELLIGENCE • DAILY BRIEFINGS • REAL TIME</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span
                  className="bg-clip-text text-transparent block mb-2"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
                  }}
                >
                  GlobalBiz
                </span>
                <span className="text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl block">
                  Turning the world's business pulse into your daily competitive edge
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-light mb-8">Your world, intelligently summarized</p>
            </div>

            <div className="relative min-h-[3.5rem] mb-8 overflow-hidden">
              <ul>
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className={`text-base md:text-lg text-gray-700 flex items-start absolute inset-x-0 transition-all duration-1000 ease-in-out ${index === currentListItem
                      ? 'opacity-100 translate-y-0'
                      : index < currentListItem
                        ? 'opacity-0 -translate-y-8'
                        : 'opacity-0 translate-y-8'
                      }`}
                  >
                    <span
                      className="font-bold mr-4 flex-shrink-0 mt-1"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      ✓
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openContactModal}
              className="text-white px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-xl shadow-lg"
              style={{
                backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
              }}
            >
              Book a demo today ! →
            </button>
          </div>

          {/* Video Section */}
          <div className="lg:col-span-7 relative" ref={videoContainerRef}>
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl ring-2 ring-gray-200/50">
              {/* Premium glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E46C5D] via-[#B48BCB] to-[#6FA8E7] rounded-xl blur opacity-20"></div>

              <div className="relative w-full aspect-video">
                {shouldLoadVideo && (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay={!isMobile}
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload={isMobile ? "metadata" : "auto"}
                    poster="/hero-show-reel-thumbnail.png"
                    onLoadedMetadata={() => {
                      setIsVideoReady(true)
                    }}
                    onLoadedData={() => {
                      setIsVideoReady(true)
                      if (isMobile && videoRef.current) {
                        videoRef.current.play().catch(() => {
                        })
                      }
                    }}
                    onCanPlay={() => {
                      setIsVideoReady(true)
                    }}
                    onError={() => {
                      console.error('Video failed to load')
                      setIsVideoReady(true)
                    }}
                  >
                    <source src="https://agr-public.s3.ap-south-1.amazonaws.com/Globalbiz-landing-page-assets/hero-intro-show-reel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {(!shouldLoadVideo || !isVideoReady) && (
                  <div className="w-full h-full absolute inset-0 z-10">
                    <Image
                      src="/hero-show-reel-thumbnail.png"
                      alt="GlobalBiz Video Preview"
                      fill
                      className="object-cover"
                      priority={!isMobile}
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                )}

                {isVideoReady && (
                  <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-all duration-200 backdrop-blur-md shadow-lg hover:scale-110 z-20"
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </section>
  )
}
