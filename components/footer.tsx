"use client"

import Image from 'next/image'
import { useState } from 'react'
import ContactModal from './contact-modal'

export default function Footer() {
  const [showContactModal, setShowContactModal] = useState(false)

  const openContactModal = () => {
    setShowContactModal(true)
  }

  const closeContactModal = () => {
    setShowContactModal(false)
  }

  return (
    <footer id="footer" className="bg-primary-color text-white py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/agr-logo-light.png"
                alt="AGR logo"
                width={100}
                height={30}
                className="h-8 w-auto"
              />
              <div className="text-xl text-secondary-accent font-bold">GlobalBiz</div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Turning the world's business pulse into your daily competitive edge.
              Intelligence delivered, all day.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#editions" className="block text-sm text-gray-300 hover:text-secondary-accent transition-colors">
                Editions
              </a>
              <a href="#pipeline" className="block text-sm text-gray-300 hover:text-secondary-accent transition-colors">
                How It Works
              </a>
              <a href="#faq" className="block text-sm text-gray-300 hover:text-secondary-accent transition-colors">
                FAQ
              </a>
              <a href="https://agrknowledgeai.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-300 hover:text-secondary-accent transition-colors">
                AGR AI Hub
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">Book a demo today</p>
              <button
                onClick={openContactModal}
                className="bg-secondary-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 GlobalBiz - An AGR Knowledge Services Product
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-secondary-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
    </footer>
  )
}
