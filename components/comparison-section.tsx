"use client"

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-12">Why GlobalBiz.AI over manual research?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Traditional */}
          <div className="bg-green-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Traditional</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• One source at a time: stay glued onto each RSS feed, newsletter, blog</li>
              <li>• Manual curation: hours lost sorting the front signal</li>
              <li>• Fragmented intel: reports in 9 email threads</li>
              <li>• Reactive: catch trends after the market does</li>
              <li>• Limited scope: 1 to 1,000 trackable sources</li>
            </ul>
          </div>

          {/* AI */}
          <div className="bg-emerald-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">GlobalBiz.AI</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• 100+ sources simultaneously monitored</li>
              <li>• Intelligent alerts & summaries for everyone on your team</li>
              <li>• Unified dashboard: one brief, zero clutter</li>
              <li>• Predictive: spot emerging trends before they break</li>
              <li>• Infinite scale: track 100,000 sources with zero effort</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-teal-600 text-white p-8 rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">With GlobalBiz: Never wake up uninformed again</h3>
            <p className="mb-6 text-sm">AI-synthesized intelligence, on your schedule, on your terms.</p>
            <button className="bg-white text-teal-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition text-sm">
              Book a demo today!
            </button>
            <p className="text-xs mt-3 opacity-90">Email: ankur@agrknowledge.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
