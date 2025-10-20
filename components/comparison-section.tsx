"use client"

import { useState } from 'react'
import ContactModal from './contact-modal'

export default function ComparisonSection() {
  const [showContactModal, setShowContactModal] = useState(false)

  const openContactModal = () => {
    setShowContactModal(true)
  }

  const closeContactModal = () => {
    setShowContactModal(false)
  }
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-4">Why GlobalBiz.AI over manual research?</h2>
        <p className="text-sm text-center text-gray-700 mb-12">Hours of hunting replaced with minutes of clarity</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Traditional */}
          <div className="bg-green-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Traditional</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• One source at a time: stay glued onto each RSS feed, newsletter, blog. Copy paste into docs.</li>
              <li>• High duplication, low trust signal</li>
              <li>• No Audit trail, version chaos</li>
              <li>• Designing and formatting report is manual & slow</li>
              <li>• Hard to scale, across teams and verticals</li>
            </ul>
          </div>

          {/* AI */}
          <div className="bg-emerald-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">GlobalBiz.AI</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• 100+ sources simultaneously with confidence signal</li>
              <li>• Intelligent dedup & clustering by storylines</li>
              <li>• Full source trails, exclusion rules, approvals</li>
              <li>• Brand styled PDF's & emails in a click</li>
              <li>• Scales from 1 to 1000+ recipients simultaneously</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-secondary-accent text-white p-8 rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">With GlobalBiz: Never wake up uninformed again</h3>
            <p className="mb-6 text-sm">AI-synthesized intelligence, on your schedule, on your terms.</p>
            <p className="mb-6 text-sm">Get a guided walkthrough. See your sources, your sectors,
              your branding - live.</p>
            <button
              onClick={openContactModal}
              className="bg-white text-secondary-accent px-6 py-2 rounded font-semibold hover:bg-gray-100 transition text-sm"
            >
              Book a demo today!
            </button>
            <p className="text-xs text-center mt-3 opacity-90">Or Email: ankur@agrknowledge.com</p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </section>
  )
}
