"use client"

import { useState, useRef } from 'react'

export default function ContactSection() {
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
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100/50" id="contact">
            <div className="max-w-6xl mx-auto px-5">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get in touch with our team to learn more about <span
                            className="bg-clip-text text-transparent font-semibold"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
                            }}
                        >GlobalBiz</span> AI solutions for your business intelligence needs.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
                        {/* Hidden platform field */}
                        <input type="hidden" name="platform" value="globalbiz" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46C5D] focus:border-transparent outline-none transition-colors bg-white"
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Work Email *
                                </label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46C5D] focus:border-transparent outline-none transition-colors bg-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-2">
                                Company *
                            </label>
                            <input
                                type="text"
                                id="contact-company"
                                name="company"
                                required
                                placeholder="Enter your company name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46C5D] focus:border-transparent outline-none transition-colors bg-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message *
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell us about your needs..."
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E46C5D] focus:border-transparent outline-none transition-colors resize-none bg-white"
                            />
                        </div>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                Thank you! Your message has been sent successfully. We'll get back to you soon.
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                                Sorry, there was an error sending your message. Please try again.
                            </div>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #E46C5D, #B48BCB, #6FA8E7)'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

