"use client"

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
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8">FAQs</h2>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 text-gray-800 p-6 rounded-lg cursor-pointer hover:shadow-lg hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-semibold mb-2 text-gray-900">
                    <strong className="text-gray-600">Q:</strong> {faq.q}
                  </p>
                  <div className="max-h-0 group-hover:max-h-96 transition-all duration-300 ease-in-out overflow-hidden">
                    <p className="text-sm text-gray-700 mt-3">
                      <strong className="text-gray-600">A:</strong> {faq.a}
                    </p>
                  </div>
                </div>
                <span
                  className="ml-4 text-2xl font-light text-gray-400 group-hover:rotate-180 group-hover:text-gray-600 transition-all duration-300"
                  style={{
                    lineHeight: '1'
                  }}
                >
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
