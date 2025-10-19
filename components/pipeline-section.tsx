"use client"

import Image from 'next/image'

export default function PipelineSection() {
  return (
    <section className="py-20 bg-white" id="pipeline">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-secondary-accent">GlobalBiz</span> - From data deluge to delivery
        </h2>
        <p className="text-2xl text-gray-700 mb-4">A clean, auditable AI pipeline that scales with your team</p>
        <p className="text-sm text-gray-700 mb-12">An end-to-end AI business intelligence engine. Turning scattered information into actionable clarity</p>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-center mb-2">GlobalBiz AI Workflow</h3>
          <p className="text-center text-gray-600 text-sm mb-8">
            AI-Powered Processing Pipeline—From 100,000+ sources to your inbox
          </p>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/sections/pipline-section-architecture.png"
                alt="GlobalBiz AI Pipeline Architecture"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary-accent">100,000+</div>
              <div className="text-sm text-gray-600">Sources Monitored</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-accent">99.7%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary-accent">&lt;5 min</div>
              <div className="text-sm text-gray-600">Processing Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
