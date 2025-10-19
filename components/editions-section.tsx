"use client"

import Image from 'next/image'
import { useState } from 'react'

const editions = [
  {
    title: "RetailRadar",
    desc: "Retail, D2C, e-commerce, consumer trends",
    image: "/editions-sections-imgs/RetailRadar.jpg"
  },
  {
    title: "PharmaPulse",
    desc: "Pharma, biotech, & life-science innovation",
    image: "/editions-sections-imgs/Pharma Pulse.jpg"
  },
  {
    title: "Metals360",
    desc: "Aluminium, copper, lithium & energy-transition metals",
    image: "/editions-sections-imgs/Metals360 bulletin.jpg"
  },
  {
    title: "FinTech Frontier",
    desc: "Fintech, blockchain, & digital finance decoded",
    image: "/editions-sections-imgs/Fintech Frontier.jpg"
  },
  {
    title: "AI Intellect",
    desc: "Generative AI, automation, & enterprise AI in action",
    image: "/editions-sections-imgs/AI Intellect.jpg"
  },
  {
    title: "EnergyEdge",
    desc: "Renewables, oil & gas, & sustainability mandates",
    image: "/editions-sections-imgs/Energy Edge.jpg"
  },
  {
    title: "RealtyRadar",
    desc: "Real estate, REITs, prop-tech, smart cities",
    image: "/editions-sections-imgs/RealtyRadar.jpg"
  },
  {
    title: "StartupSphere",
    desc: "Funding rounds, accelerators, unicorn watch",
    image: "/editions-sections-imgs/StartupSphere Bulletin.jpg"
  },
  {
    title: "HealthHorizon",
    desc: "Hospitals, diagnostics, telehealth, digital care",
    image: "/editions-sections-imgs/HealthHorizon.jpg"
  },
  {
    title: "MarketMomentum",
    desc: "Macro, policy, tariffs, market-moving signals",
    image: "/editions-sections-imgs/Market Momentum Bulletin.jpg"
  },
  {
    title: "LuxuryLife",
    desc: "Global fashion, lifestyle, beauty, retail's most premium",
    image: "/editions-sections-imgs/Luxury life.jpg"
  },
  {
    title: "Custom",
    desc: "We will setup custom requirements",
    image: null
  }
]

export default function EditionsSection() {
  const [hoveredEdition, setHoveredEdition] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number }>({ x: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX })
  }

  const getPreviewSide = () => {
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth
      return mousePosition.x < windowWidth / 2 ? 'right' : 'left'
    }
    return 'right'
  }

  return (
    <section className="py-20 bg-white relative" id="editions" onMouseMove={handleMouseMove}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The <span className="text-secondary-accent">GlobalBiz</span> EDITIONS SUITE
          </h2>
          <p className="text-lg text-gray-600 mb-3">Choose your lens. We handle the rest.</p>
          <p className="text-sm text-gray-600">
            Each vertical has its own voice, coverage map, and cadence. Tuned for what actually matters in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {editions.map((edition, idx) => (
            <div
              key={idx}
              className="bg-secondary-accent text-white p-6 rounded-lg min-h-32 flex flex-col justify-between relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onMouseEnter={() => setHoveredEdition(idx)}
              onMouseLeave={() => setHoveredEdition(null)}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{edition.title}</h3>
                <p className="text-sm opacity-95">{edition.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Image Preview */}
      {hoveredEdition !== null && editions[hoveredEdition]?.image && (
        <div
          className={`fixed top-0 h-screen w-1/2 z-50 transition-all duration-500 ease-in-out ${getPreviewSide() === 'right'
            ? 'right-0'
            : 'left-0'
            }`}
        >
          <div className="relative w-full h-full bg-white/10 backdrop-blur-md flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-4xl bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
              <Image
                src={editions[hoveredEdition].image!}
                alt={`${editions[hoveredEdition].title} preview`}
                fill
                className="object-contain rounded-lg"
                sizes="50vw"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-medium border border-white/30">
              {editions[hoveredEdition].title}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
