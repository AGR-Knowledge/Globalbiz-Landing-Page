"use client"

export default function PipelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-teal-600">GlobalBiz</span> - From data deluge to delivery
        </h2>
        <p className="text-2xl text-gray-700 mb-12">A clean, auditable AI pipeline that scales with your team</p>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <h3 className="text-xl font-bold text-center mb-2">GlobalBiz AI Workflow</h3>
          <p className="text-center text-gray-600 text-sm mb-8">
            AI-Powered Processing Pipeline—From 100,000+ sources to your inbox
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <div className="text-sm font-medium">
                Data Sources
                <br />
                <span className="text-xs text-gray-600">News, Reports, Social</span>
              </div>
            </div>
            <div className="text-2xl text-teal-600">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-medium">
                Real-Time
                <br />
                Ingestion
              </div>
            </div>
            <div className="text-2xl text-teal-600">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔄</div>
              <div className="text-sm font-medium">
                AI Processing
                <br />
                <span className="text-xs text-gray-600">NLP & Analysis</span>
              </div>
            </div>
            <div className="text-2xl text-teal-600">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-sm font-medium">
                Smart Filtering
                <br />
                <span className="text-xs text-gray-600">Relevance Scoring</span>
              </div>
            </div>
            <div className="text-2xl text-teal-600">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">✉️</div>
              <div className="text-sm font-medium">
                Delivery
                <br />
                <span className="text-xs text-gray-600">Your Briefing</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">100,000+</div>
              <div className="text-sm text-gray-600">Sources Monitored</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">99.7%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">&lt;5 min</div>
              <div className="text-sm text-gray-600">Processing Time</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
            Learn More About Our AI
          </button>
        </div>
      </div>
    </section>
  )
}
