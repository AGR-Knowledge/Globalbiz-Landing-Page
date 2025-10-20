"use client"

import { useState, useRef } from 'react'

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const formRef = useRef<HTMLFormElement>(null)

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
                form.reset()
                setTimeout(() => {
                    onClose()
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

    const handleClose = () => {
        setSubmitStatus('idle')
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
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
    )
}
