'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Header } from '@/components/header/header'
import { Footer } from '@/components/footer/footer'
import { ScheduleCallModal } from '@/components/modals/schedule-call-modal'
import { BackToTopButton } from '@/components/back-to-top'
import { JoinProgramModal } from '@/components/modals/join-program-modal'
import { LearnMoreModal } from '@/components/modals/learn-more-modal'
import { ContactCTA } from '@/components/sections/contact-cta'
import { CTAFinal } from '@/components/sections/cta-final' // Import CTAFinal component

export default function ContactPage() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)
  const [isJoinProgramModalOpen, setIsJoinProgramModalOpen] = useState(false)
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Contact form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Header onScheduleClick={() => setIsScheduleModalOpen(true)} />
      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
      <JoinProgramModal
        isOpen={isJoinProgramModalOpen}
        onClose={() => setIsJoinProgramModalOpen(false)}
      />
      <LearnMoreModal
        isOpen={isLearnMoreModalOpen}
        onClose={() => setIsLearnMoreModalOpen(false)}
      />
      <BackToTopButton />

      <main className="pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="font-playfair text-5xl md:text-6xl text-primary-text text-balance">
                  Get in Touch
                </h1>
                <p className="text-muted-text text-lg">
                  Have questions? We'd love to hear from you. Reach out to our team anytime.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'marcus@lumina-fertility.com',
                    href: 'mailto:marcus@lumina-fertility.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '(555) 123-4567',
                    href: 'tel:+15551234567',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: '123 Healing Way, New York, NY',
                    href: '#',
                  },
                ].map((item) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="glass glass-hover p-4 flex items-start gap-4 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 flex-shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-primary-text font-semibold">
                          {item.label}
                        </h3>
                        <p className="text-muted-text text-sm">{item.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Hours */}
              <div className="glass glass-hover p-6 space-y-4">
                <h3 className="font-playfair text-lg text-primary-text">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((hours) => (
                    <div
                      key={hours.day}
                      className="flex justify-between text-muted-text"
                    >
                      <span>{hours.day}</span>
                      <span className="text-cyan-400">{hours.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="animate-fade-in animation-delay-100">
              <form
                onSubmit={handleSubmit}
                className="glass glass-hover p-8 space-y-6"
              >
                {isSubmitted ? (
                  <div className="text-center space-y-4 py-12 animate-fade-in">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                      <svg
                        className="w-8 h-8 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-playfair text-2xl text-primary-text">
                      Message Sent!
                    </h3>
                    <p className="text-muted-text">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-playfair text-3xl text-primary-text">
                      Send us a Message
                    </h2>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary-text mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-primary-text placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary-text mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-primary-text placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-primary-text mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-primary-text placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primary-text mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your fertility journey..."
                        rows={6}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-primary-text placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <ContactCTA
        onJoinClick={() => setIsJoinProgramModalOpen(true)}
        onLearnMoreClick={() => setIsLearnMoreModalOpen(true)}
      />

      <Footer />
    </>
  )
}
