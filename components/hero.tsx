"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-br from-slate-50 to-emerald-50 py-20">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 font-medium mb-3">INTELLIGENCE DELIVERED—ALL DAY</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-teal-600">GlobalBiz</span>{" "}
              <span className="text-gray-800">
                - Turning the world's business pulse into your daily competitive edge
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">Your world, intelligently summarized</p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start">
                <span className="text-teal-600 font-bold mr-3">✓</span>
                <span>Reliable news tracking on market trends</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-teal-600 font-bold mr-3">✓</span>
                <span>Stay ahead with timely updates on your industry</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-teal-600 font-bold mr-3">✓</span>
                <span>
                  Executive-level insights customized to track your industry, markets, and rivals for intelligence
                </span>
              </li>
            </ul>

            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
              Get Started Today
            </button>
          </div>

          {/* Right Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-6">
              <div
                className={`w-3 h-3 rounded-full mr-3 transition-opacity ${pulse ? "opacity-100" : "opacity-50"}`}
                style={{ backgroundColor: "#00a99d" }}
              ></div>
              <h3 className="text-lg font-semibold text-gray-800">Live Report Snapshot</h3>
            </div>

            <div className="mb-6 space-y-2">
              <div>
                <strong className="text-gray-800">Global coverage</strong>
              </div>
              <div className="text-gray-600">This report covered 17,342 files.</div>
              <div className="mt-4">
                <strong className="text-gray-800">Intelligence Priority</strong>
              </div>
              <div className="text-gray-600">Top signals: tech, product, market, finance</div>
            </div>

            <div className="mb-6">
              <div>
                <strong className="text-gray-800">Executive Digest</strong>
              </div>
              <div className="text-sm text-gray-600">Key metrics tracked: competitors, markets, and policy shifts</div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">Mentions</div>
                <div className="text-2xl font-bold text-teal-600">1,284</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">Signals</div>
                <div className="text-2xl font-bold text-gray-800">312</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-600 mb-1">Sentiment</div>
                <div className="text-2xl font-bold text-red-600">-88%</div>
              </div>
            </div>

            <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
              Book a demo today ! →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
