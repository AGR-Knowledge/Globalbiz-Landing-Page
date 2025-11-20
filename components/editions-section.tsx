"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

const editions = [
  {
    title: "RetailRadar",
    desc: "Retail, D2C, e-commerce, consumer trends",
    image: "/editions-sections-imgs/RetailRadar.webp"
  },
  {
    title: "PharmaPulse",
    desc: "Pharma, biotech, & life-science innovation",
    image: "/editions-sections-imgs/Pharma Pulse.webp"
  },
  {
    title: "Metals360",
    desc: "Aluminium, copper, lithium & energy-transition metals",
    image: "/editions-sections-imgs/Metals360 bulletin.webp"
  },
  {
    title: "FinTech Frontier",
    desc: "Fintech, blockchain, & digital finance decoded",
    image: "/editions-sections-imgs/Fintech Frontier.webp"
  },
  {
    title: "AI Intellect",
    desc: "Generative AI, automation, & enterprise AI in action",
    image: "/editions-sections-imgs/AI Intellect.webp"
  },
  {
    title: "EnergyEdge",
    desc: "Renewables, oil & gas, & sustainability mandates",
    image: "/editions-sections-imgs/Energy Edge.webp"
  },
  {
    title: "RealtyRadar",
    desc: "Real estate, REITs, prop-tech, smart cities",
    image: "/editions-sections-imgs/RealtyRadar.webp"
  },
  {
    title: "StartupSphere",
    desc: "Funding rounds, accelerators, unicorn watch",
    image: "/editions-sections-imgs/StartupSphere Bulletin.webp"
  },
  {
    title: "HealthHorizon",
    desc: "Hospitals, diagnostics, telehealth, digital care",
    image: "/editions-sections-imgs/HealthHorizon.webp"
  },
  {
    title: "MarketMomentum",
    desc: "Macro, policy, tariffs, market-moving signals",
    image: "/editions-sections-imgs/Market Momentum Bulletin.webp"
  },
  {
    title: "LuxuryLife",
    desc: "Global fashion, lifestyle, beauty, retail's most premium",
    image: "/editions-sections-imgs/Luxury life.webp"
  },
  {
    title: "Custom",
    desc: "We will setup custom requirements",
    image: null
  }
]

export default function EditionsSection() {
  // Initialize with first edition that has an image
  const getFirstEditionWithImage = () => {
    const firstWithImage = editions.findIndex((e) => e.image !== null)
    return firstWithImage !== -1 ? firstWithImage : 0
  }

  const [activeEdition, setActiveEdition] = useState<number>(getFirstEditionWithImage())
  const [isPaused, setIsPaused] = useState(false)

  const currentEdition = editions[activeEdition]

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveEdition((prev) => {
        const nextIndex = prev + 1
        // If we've reached the end, loop back to first edition with image
        if (nextIndex >= editions.length) {
          return getFirstEditionWithImage()
        }
        // If next edition has no image, find next one with image
        if (editions[nextIndex]?.image === null) {
          const nextWithImage = editions.findIndex((e, idx) => idx > nextIndex && e.image !== null)
          return nextWithImage !== -1 ? nextWithImage : getFirstEditionWithImage()
        }
        return nextIndex
      })
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  const handleEditionClick = (index: number) => {
    setActiveEdition(index)
    setIsPaused(true)
    // Resume auto-rotation after 10 seconds of manual selection
    setTimeout(() => setIsPaused(false), 10000)
  }

  return (
    <section className="py-20 bg-white relative" id="editions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
              }}
            >
              GlobalBiz
            </span>{" "}
            EDITIONS SUITE
          </h2>
          <p className="text-lg text-gray-600 mb-3">Choose your lens. We handle the rest.</p>
          <p className="text-sm text-gray-600">
            Each vertical has its own voice, coverage map, and cadence. Tuned for what actually matters in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Image Preview */}
          <div className="lg:col-span-8 relative h-auto rounded-xl overflow-hidden shadow-2xl bg-gray-100">
            {currentEdition?.image ? (
              <Image
                src={currentEdition.image}
                alt={`${currentEdition.title} preview`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 1024px) 100vw, 66vw"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">{currentEdition?.title}</h3>
                  <p className="text-gray-600">{currentEdition?.desc}</p>
                </div>
              </div>
            )}
            {/* Title overlay */}
            {currentEdition?.image && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-1">{currentEdition.title}</h3>
                <p className="text-sm text-white/90">{currentEdition.desc}</p>
              </div>
            )}
          </div>

          {/* Right: Vertical Carousel */}
          <div className="lg:col-span-4 relative flex flex-col justify-center">
            <div className="space-y-2.5">
              {editions.map((edition, idx) => (
                <div
                  key={idx}
                  onClick={() => handleEditionClick(idx)}
                  onMouseEnter={() => {
                    setIsPaused(true)
                    setActiveEdition(idx)
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`cursor-pointer transition-all duration-300 rounded-lg p-3.5 border-2 ${activeEdition === idx
                    ? 'bg-secondary-accent text-white border-secondary-accent shadow-xl scale-105'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-secondary-accent/50 hover:shadow-md'
                    }`}
                >
                  <h3 className={`text-base font-semibold mb-1 ${activeEdition === idx ? 'text-white' : 'text-gray-900'}`}>
                    {edition.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${activeEdition === idx ? 'text-white/95' : 'text-gray-600'}`}>
                    {edition.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
