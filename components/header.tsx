"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ContactModal from './contact-modal'

export default function Header() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const pathname = usePathname()

  const openContactModal = () => setShowContactModal(true)
  const closeContactModal = () => setShowContactModal(false)
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu)
  const closeMobileMenu = () => setShowMobileMenu(false)

  return (
    <header className="fixed top-0 left-0 w-full z-[99]">
      <div className="max-w-7xl lg:max-w-[1920px] mx-auto px-0">
        <div className="bg-white/90 backdrop-blur-md rounded-b-2xl shadow border border-gray-100/60">
          <div className="flex items-center justify-between h-[90px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            {/* Left: Logo */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <Image
                src="/agr-logo-light.webp"
                alt="AGR logo"
                width={140}
                height={42}
                priority
                className="h-10 w-auto"
              />

            </div>

            {/* Center: Nav (desktop) */}
            <nav className="hidden xl:flex justify-center flex-1 px-4">
              <ul className="flex items-center gap-2.5 text-[14px] font-bold uppercase leading-none">
                <li>
                  <a
                    href="https://www.agrknowledge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-[15px] py-[12px] rounded-full border border-gray-300 text-gray-700 hover:border-[#E46C5D] hover:text-[#E46C5D] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.agrknowledgeai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-[15px] py-[12px] rounded-full border border-gray-300 text-gray-700 hover:border-[#E46C5D] hover:text-[#E46C5D] transition-colors"
                  >
                    Cortex360
                  </a>
                </li>
                <li>
                  <Link
                    href="/"
                    className={`px-[15px] py-[12px] rounded-full border ${pathname === '/' ? 'border-[#E46C5D] text-[#E46C5D]' : 'border-gray-300 text-gray-700 hover:border-[#E46C5D] hover:text-[#E46C5D]'} transition-colors`}
                  >
                    GlobalBiz
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleMobileMenu}
                className="xl:hidden p-2 text-gray-700 hover:text-[#E46C5D] transition-colors"
                aria-label="Toggle menu"
              >
                {showMobileMenu ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

              <button
                onClick={openContactModal}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[12px] font-extrabold uppercase tracking-wide text-white bg-[#0F172A] hover:bg-black transition-colors shadow-sm"
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div className="xl:hidden fixed inset-0 top-[90px] bg-black/50 backdrop-blur-sm z-[98]" onClick={closeMobileMenu}>
          <div
            className="bg-white rounded-b-2xl shadow-2xl border-t border-gray-100/60"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="px-4 py-6">
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="https://www.agrknowledge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-[#E46C5D] hover:text-[#E46C5D] hover:bg-[#E46C5D]/5 transition-all text-sm font-bold uppercase"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.agrknowledgeai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-[#E46C5D] hover:text-[#E46C5D] hover:bg-[#E46C5D]/5 transition-all text-sm font-bold uppercase"
                  >
                    Cortex360
                  </a>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-lg border text-sm font-bold uppercase transition-all ${pathname === '/' ? 'border-[#E46C5D] text-[#E46C5D] bg-[#E46C5D]/5' : 'border-gray-300 text-gray-700 hover:border-[#E46C5D] hover:text-[#E46C5D] hover:bg-[#E46C5D]/5'}`}
                  >
                    GlobalBiz
                  </Link>
                </li>
                <li className="pt-2">
                  <button
                    onClick={() => {
                      closeMobileMenu()
                      openContactModal()
                    }}
                    className="w-full px-4 py-3 rounded-lg text-sm font-extrabold uppercase tracking-wide text-white bg-[#0F172A] hover:bg-black transition-colors shadow-sm"
                  >
                    Book a Demo
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </header>
  )
}
