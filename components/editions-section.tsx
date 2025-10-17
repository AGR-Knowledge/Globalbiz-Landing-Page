"use client"

const editions = [
  { title: "Healthcare", desc: "Track biotech breakthroughs, regulatory shifts, and pharma innovation" },
  { title: "Financial", desc: "Monitor M&A activity, market movers, and banking trends" },
  { title: "Technology", desc: "Stay ahead in AI, cloud, and enterprise software developments" },
  { title: "Energy Transition", desc: "Follow the shift to renewables, policy, and carbon markets" },
  { title: "E-Mobility", desc: "Track EV adoption, battery tech, and charging infrastructure" },
  { title: "Startups", desc: "Discover funding rounds, unicorns, and emerging ventures" },
  { title: "Supply Chain", desc: "Navigate logistics disruptions, trade flows, and sourcing shifts" },
  { title: "Cybersecurity", desc: "Monitor threats, regulations, and enterprise security trends" },
  { title: "Real Estate", desc: "Track commercial property, housing markets, and development" },
]

export default function EditionsSection() {
  return (
    <section className="py-20 bg-white" id="editions">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The <span className="text-teal-600">GlobalBiz</span> EDITIONS SUITE
          </h2>
          <p className="text-lg text-gray-600 mb-3">Choose your lens. We handle the rest.</p>
          <p className="text-sm text-gray-600">
            From geopolitics to tech, startups to M&A, each report's curated AI intelligence. Healthcare to
            sustainability—if you track it, we deliver it with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          {editions.map((edition, idx) => (
            <div key={idx} className="bg-teal-600 text-white p-6 rounded-lg min-h-32 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{edition.title}</h3>
                <p className="text-sm opacity-95">{edition.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Healthcare Tuesday Morning Briefing</h3>
          <p className="text-sm text-gray-600 mb-4">August 23, 2024</p>
          <div className="bg-white p-5 rounded border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Real-Time Brief</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Top Story:</strong> Major healthcare provider announces AI diagnostics partnership...
              <br />
              <br />
              <strong>Key Insights:</strong>
              <br />• FDA approves breakthrough therapy
              <br />• Medicare policy shifts impact coverage
              <br />• Digital health funding reaches new high
              <br />
              <br />
              <em>Full briefing contains detailed analysis, competitor moves, and strategic implications...</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
