"use client"

import { useState, useEffect, useRef } from 'react'
import { ChevronUp, MessageCircle } from 'lucide-react'
import ContactModal from './contact-modal'

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)

    const scrollTopRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTopRef.current) {
                if (window.scrollY > 50) {
                    scrollTopRef.current.style.display = "block"
                    setShowScrollTop(true)
                } else {
                    scrollTopRef.current.style.display = "none"
                    setShowScrollTop(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const openContactModal = () => {
        setShowContactModal(true)
    }

    const closeContactModal = () => {
        setShowContactModal(false)
    }

    return (
        <>
            {/* Contact Us Button */}
            <button
                onClick={openContactModal}
                className="fixed w-[50px] h-[50px] right-[20px] bottom-[115px] z-[9991] rounded-full text-white hover:text-gray-200 bg-white transition-all duration-300 mix-blend-exclusion shadow-lg hover:shadow-xl"
                aria-label="Contact Us"
            >
                <MessageCircle className="w-[16px] h-[16px] text-black m-auto" />
            </button>

            {/* Scroll to Top Button */}
            <button
                ref={scrollTopRef}
                style={{ display: "none" }}
                className="fixed w-[50px] h-[50px] right-[20px] bottom-[55px] z-[9991] rounded-full text-white hover:text-gray-200 bg-white transition-all duration-300 mix-blend-exclusion shadow-lg hover:shadow-xl"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-[14px] h-[16px] text-black m-auto" />
            </button>

            {/* Contact Modal */}
            <ContactModal isOpen={showContactModal} onClose={closeContactModal} />
        </>
    )
}
