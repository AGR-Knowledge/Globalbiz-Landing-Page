"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronUp, MessageCircle, X } from 'lucide-react'

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)
    const [isOverlapping, setIsOverlapping] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const observerRef = useRef<IntersectionObserver | null>(null)
    const buttonsRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            setIsOverlapping(entry.isIntersecting)
        })
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Observe all sections that could be overlapped
        const sections = document.querySelectorAll('section, footer, header')

        if (sections.length > 0) {
            observerRef.current = new IntersectionObserver(handleIntersection, {
                root: null,
                rootMargin: '-50px 0px -50px 0px', // Add margin for smoother transitions
                threshold: [0, 0.1, 0.5, 1], // Multiple thresholds for smoother detection
            })

            sections.forEach(section => {
                observerRef.current?.observe(section)
            })
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [handleIntersection])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const openContactModal = () => {
        setShowContactModal(true)
    }

    const closeContactModal = () => {
        setShowContactModal(false)
        setSubmitStatus('idle')
    }

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        const form = formRef.current
        if (!form) {
            console.error('Form reference not found')
            setIsSubmitting(false)
            setSubmitStatus('error')
            return
        }

        const formData = new FormData(form)

        try {
            const response = await fetch('https://getform.io/f/bkkpkdxb', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setSubmitStatus('success')
                // Reset form
                form.reset()
                // Close modal after 2 seconds
                setTimeout(() => {
                    closeContactModal()
                }, 2000)
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {/* Floating Buttons */}
            <div
                ref={buttonsRef}
                className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-500 ease-in-out"
                style={{
                    mixBlendMode: isOverlapping ? 'difference' : 'normal',
                    transition: 'mix-blend-mode 0.5s ease-in-out'
                }}
            >
                {/* Contact Button */}
                <button
                    onClick={openContactModal}
                    className="bg-secondary-accent text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-500 ease-in-out hover:scale-110"
                    aria-label="Contact Us"
                >
                    <MessageCircle className="w-6 h-6" />
                </button>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="bg-primary-color text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-500 ease-in-out hover:scale-110"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-6 h-6" />
                    </button>
                )}
            </div>

            {/* Contact Modal */}
            {showContactModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                            <button
                                onClick={closeContactModal}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <p className="text-gray-600 mb-6">
                                Get in touch with our team to learn more about GlobalBiz AI solutions for your business intelligence needs.
                            </p>

                            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                                {/* Hidden platform field */}
                                <input type="hidden" name="platform" value="globalbiz" />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-accent focus:border-transparent outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-accent focus:border-transparent outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                        Company *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        required
                                        placeholder="Enter your company name"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-accent focus:border-transparent outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        placeholder="Tell us about your needs..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary-accent focus:border-transparent outline-none transition-colors resize-none"
                                    />
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                                        Sorry, there was an error sending your message. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary-accent text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
