"use client"

const benefits = [
  { icon: "📄", text: "Save 10+ hours per week on news aggregation and analysis" },
  { icon: "🔍", text: "Discover insights you'd never find manually—AI surfaces hidden patterns" },
  { icon: "📊", text: "Real-time alerts on competitors, markets, and emerging risks" },
  { icon: "☂️", text: "Stop drinking from the firehose. Get signal, not noise." },
  { icon: "📋", text: "Branded, shareable briefings for your team or clients" },
  { icon: "🎯", text: "Weekly Summaries: Never miss what mattered, even when you're offline" },
  { icon: "🌐", text: "One-click deep dives into any story or sector" },
  { icon: "📈", text: "Customizable dashboards: Track what matters to you" },
]

export default function SpeedSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-teal-600">GlobalBiz</span> - Built for speed, clarity, & impact
        </h2>
        <p className="text-2xl text-gray-700 mb-12">Replace hours of research with one AI-curated feed</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <div className="bg-teal-600 text-white p-4 rounded-lg text-sm min-h-24 flex items-center justify-center">
                {benefit.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
