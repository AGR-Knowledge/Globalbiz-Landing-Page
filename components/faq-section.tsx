"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Which sources do you cover? How current are your sources?",
    a: "We pull real-time data across breaking financial, regulatory, and business news—updated 24/7, so you're never a step behind. Premium subscriptions and open web across business, industry, regulatory, and financial domains; region & language filters included. Our AI does what analysts did manually, only faster and at scale",
  },
  {
    q: "Can I customize which topics I see?",
    a: "Absolutely. You control keywords, industries, competitors, geographies in configuration setting. We will setup the project for you to match your intelligence priorities.",
  },
  {
    q: "Can I brand the reports?",
    a: "Yes - logo, colors, type, footers, signatures, and cover slides are templated. Export to PDF, email, or share with a click.",
  },
  {
    q: "What's unique about GlobalBiz.AI?",
    a: "Our models are fine-tuned on configuration settings, not generic web data. Our contextual deduplication and impact scoring minimize noise so leaders get only what matters - ranked, reasoned, and ready to send. We deliver intelligence, not just data- plus, every insight is traceable to its source.",
  },
]

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-teal-600 text-white p-6 rounded-lg cursor-pointer hover:bg-teal-700 transition"
              onClick={() => setExpanded(expanded === idx ? null : idx)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-semibold mb-2">
                    <strong>Q:</strong> {faq.q}
                  </p>
                  {expanded === idx && (
                    <p className="text-sm opacity-95 mt-3">
                      <strong>A:</strong> {faq.a}
                    </p>
                  )}
                </div>
                <span className="ml-4 text-xl">{expanded === idx ? "−" : "+"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
