"use client"

import ContactModal from './contact-modal'
import { useState } from 'react'
import { FileText, Filter, Tag, User, Send, CheckCircle2, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function PipelineSection() {
  const [showContactModal, setShowContactModal] = useState(false)

  const openContactModal = () => {
    setShowContactModal(true)
  }

  const closeContactModal = () => {
    setShowContactModal(false)
  }

  const newsSources = [
    { name: "THE WALL STREET JOURNAL", image: "/News-Source/wsj.webp" },
    { name: "The New York Times", image: "/News-Source/ny-times.webp" },
    { name: "Commercial Property Executive", image: "/News-Source/cpe.webp" },
    { name: "FINANCIAL TIMES", image: "/News-Source/ft.webp" },
    { name: "Nareit", image: "/News-Source/nareit.webp" },
    { name: "Forbes", image: "/News-Source/forbes.webp" },
    { name: "CNBC", image: "/News-Source/cnbc.webp" },
    { name: "WWD", image: "/News-Source/wwd.webp" },
    { name: "VOGUE Business", image: "/News-Source/vouge-business.webp" },
    { name: "ChemicalWeekly", image: "/News-Source/chemical-weekly.webp" },
    { name: "Plastics News", image: "/News-Source/plastics-news.webp" },
    { name: "Bloomberg", image: "/News-Source/bloomberg.webp" },
    { name: "C&EN", image: "/News-Source/c&en.webp" },
    { name: "REUTERS", image: "/News-Source/reuters.webp" },
    { name: "ICIS", image: "/News-Source/icis.webp" }
  ]

  return (
    <section className="py-12 md:py-20 bg-white" id="pipeline">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
            }}
          >
            GlobalBiz
          </span>{" "}
          - From data deluge to delivery
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4">A clean, auditable AI pipeline that scales with your team</p>
        <p className="text-xs sm:text-sm text-gray-700 mb-8 md:mb-12">An end-to-end AI business intelligence engine. Turning scattered information into actionable clarity</p>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-4 sm:p-6 md:p-8 rounded-xl mb-8 border border-slate-200/50 shadow-sm">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-2">GlobalBiz AI Workflow</h3>
          <p className="text-center text-gray-600 text-xs sm:text-sm mb-6 md:mb-8">
            AI-Powered Processing Pipeline—From 100+ sources to your inbox
          </p>

          <div className="relative w-full max-w-7xl mx-auto mb-8 md:mb-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-3">
              <div className="w-full lg:w-48 flex-shrink-0">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-700"> Aggregated News</h3>
                  </div>
                  <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
                    <div className="animate-scroll-vertical space-y-4">
                      {newsSources.map((source, idx) => (
                        <div key={idx} className="flex items-center justify-center py-3 border-b border-gray-100 h-16">
                          <div className="relative w-full h-12 flex items-center justify-center">
                            <Image
                              src={source.image}
                              alt={source.name}
                              width={120}
                              height={48}
                              className="object-contain max-h-12 w-auto"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                      {newsSources.map((source, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center justify-center py-3 border-b border-gray-100 h-16">
                          <div className="relative w-full h-12 flex items-center justify-center">
                            <Image
                              src={source.image}
                              alt={source.name}
                              width={120}
                              height={48}
                              className="object-contain max-h-12 w-auto"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 rotate-90 lg:rotate-0" />
              </div>

              <div className="flex-1 w-full">
                <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <Image
                      src="/agr-logo-light.webp"
                      alt="AGR Logo"
                      width={200}
                      height={60}
                      className="h-8 sm:h-10 w-auto"
                      priority
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 text-center">AGR AI</h3>

                  <div className="flex items-stretch gap-2 sm:gap-3 overflow-x-auto pb-2 lg:pb-0 lg:overflow-x-visible" style={{ scrollBehavior: 'smooth' }}>
                    <div className="flex-1 lg:flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-0 relative">
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-2 shadow-sm">
                            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                          </div>
                          <div className="text-center mb-2">
                            <div className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-0.5">Step 1</div>
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">Fetch</h4>
                          </div>
                          <div className="bg-teal-50 rounded-lg p-1.5 sm:p-2 w-full space-y-0.5 border border-teal-100">
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Prioritize Articles</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• De-duplicate</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-6 -right-4 hidden lg:flex items-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex-1 lg:flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-0 relative">
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center mb-2 shadow-sm">
                            <Filter className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                          </div>
                          <div className="text-center mb-2">
                            <div className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-0.5">Step 2</div>
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">Filter</h4>
                          </div>
                          <div className="bg-teal-50 rounded-lg p-1.5 sm:p-2 w-full space-y-0.5 text-[9px] sm:text-[10px] text-gray-700 border border-teal-100 leading-tight">
                            <div>• Inclusion Criteria</div>
                            <div>• Exclusion Criteria</div>
                            <div>• Customisation:</div>
                            <div className="pl-1.5 space-y-0">
                              <div>- industries, sources</div>
                              <div>- regions, sectors</div>
                              <div>- competitive intelligence</div>
                              <div>- focus areas</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-6 -right-4 hidden lg:flex items-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex-1 lg:flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-0 relative">
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center mb-2 shadow-sm">
                            <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                          </div>
                          <div className="text-center mb-2">
                            <div className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-0.5">Step 3</div>
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">Summarize</h4>
                          </div>
                          <div className="bg-teal-50 rounded-lg p-1.5 sm:p-2 w-full space-y-0.5 border border-teal-100">
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Summarization</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Classification</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Tags</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Sentiment Analyzer</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-6 -right-4 hidden lg:flex items-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex-1 lg:flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-0 relative">
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center mb-2 shadow-sm">
                            <User className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                          </div>
                          <div className="text-center mb-2">
                            <div className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-0.5">Step 4</div>
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">Selects relevant articles</h4>
                          </div>
                          <div className="bg-white border border-gray-200 rounded-lg p-1.5 sm:p-2 space-y-1 w-full">
                            <div className="text-[9px] sm:text-[10px] text-gray-700 text-center mb-1 sm:mb-1.5">Select or Reject</div>
                            <div className="space-y-0.5 sm:space-y-1 max-h-24 sm:max-h-32 overflow-y-auto">
                              {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="flex items-center gap-1 sm:gap-1.5">
                                  <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 border border-gray-300 rounded flex-shrink-0 flex items-center justify-center ${num === 2 ? 'bg-blue-500 border-blue-500' : ''}`}>
                                    {num === 2 && (
                                      <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                                    )}
                                  </div>
                                  <div className="text-[9px] sm:text-[10px] text-gray-700 flex-1">Article {num}</div>
                                </div>
                              ))}
                            </div>
                            <button className="bg-blue-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded text-[9px] sm:text-[10px] font-semibold hover:bg-blue-700 transition-colors w-full mt-1 sm:mt-2">
                              Publish
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-6 -right-4 hidden lg:flex items-center">
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="flex-1 lg:flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-0 relative">
                      <div className="bg-gradient-to-br from-emerald-50/50 via-white to-indigo-50/30 rounded-lg p-2 sm:p-3 border-2 border-emerald-200/60 shadow-md hover:shadow-lg transition-all duration-300 h-full relative overflow-hidden">
                        {/* Subtle accent glow */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-200/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="flex flex-col items-center relative z-10">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-lg flex items-center justify-center mb-2 shadow-sm border border-indigo-200/50">
                            <Send className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                          </div>
                          <div className="text-center mb-2">
                            <div className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-0.5">Step 5</div>
                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">Auto report creation - Deliver</h4>
                          </div>
                          <div className="bg-emerald-50/70 rounded-lg p-1.5 sm:p-2 w-full space-y-0.5 border border-emerald-200/50 mb-2">
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Auto Template Fill</div>
                            <div className="text-[9px] sm:text-[10px] text-gray-700 leading-tight">• Send to distribution list</div>
                          </div>
                          <div className="mt-auto pt-2 flex flex-col items-center">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-md ring-2 ring-green-200/50">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="text-[9px] sm:text-[10px] text-gray-600 font-medium mt-1">Complete</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white p-4 sm:p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center mb-6 shadow-sm">
            <div>
              <div
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
                }}
              >
                100+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Sources Monitored</div>
            </div>
            <div>
              <div
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
                }}
              >
                99.7%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div>
              <div
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
                }}
              >
                &lt;5 min
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Processing Time</div>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={openContactModal}
              className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-xl shadow-lg"
              style={{
                backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
              }}
            >
              Book a demo today ! →
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </section>
  )
}
