"use client"

import {
  FileText,
  Search,
  BarChart3,
  Shield,
  Brain,
  Target,
  Globe,
  TrendingUp
} from 'lucide-react'

const benefits = [
  {
    icon: FileText,
    title: "Comprehensive fetch",
    text: "Premium + open sources, paywalled and public, across regions and languages"
  },
  {
    icon: Search,
    title: "Personalization",
    text: "Follow companies, sectors, or topics. Source trails, inclusion criteria, exclusion rules"
  },
  {
    icon: BarChart3,
    title: "Smart Aggregation",
    text: "Pulls thousands of verified sources and organizes them into your chosen vertical"
  },
  {
    icon: Shield,
    title: "Impact scoring",
    text: "Ranks by business impact, novelty, credibility, and stakeholder relevance"
  },
  {
    icon: Brain,
    title: "AI Summaries & Sentiment",
    text: "Crisp, bias-checked briefs with sentiment scoring and keyword heatmaps"
  },
  {
    icon: Target,
    title: "Flexible Templates",
    text: "Auto-format into newsletters, PDFs"
  },
  {
    icon: Globe,
    title: "One-Click Distribution",
    text: "Publish to email distribution lists, or export with a click"
  },
  {
    icon: TrendingUp,
    title: "Contextual dedup",
    text: "Understands article variants and clusters stories to avoid repetition"
  },
]

export default function SpeedSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-secondary-accent">GlobalBiz</span> - Built for speed, clarity, & impact
        </h2>
        <p className="text-2xl text-gray-700 mb-4">Replace hours of research with one AI-curated feed</p>
        <p className="text-sm text-gray-700 mb-12">Purpose‑built for competitive intelligence and executive briefings . GlobalBiz learns your preferences.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-secondary-accent" />
                </div>
                <div className="bg-secondary-accent text-white p-4 rounded-lg text-sm min-h-32 flex flex-col justify-center">
                  <h3 className="font-semibold mb-2 text-base">{benefit.title}</h3>
                  <p className="text-sm opacity-95">{benefit.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
