'use client'

import React from "react"

import { X, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface JoinProgramModalProps {
  isOpen: boolean
  onClose: () => void
}

export function JoinProgramModal({ isOpen, onClose }: JoinProgramModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    condition: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Join program form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', condition: '' })
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="glass rounded-2xl p-8 max-w-md w-full relative z-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-text hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="text-center space-y-4 py-8 animate-fade-in">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="font-playfair text-2xl text-foreground">
              Welcome!
            </h3>
            <p className="text-muted-text">
              Thank you for joining our program. We'll contact you soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-playfair text-3xl text-foreground mb-2">
              Join Our Program
            </h2>
            <p className="text-muted-text mb-6">
              Take the first step toward your fertility goals
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Primary Concern
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                >
                  <option value="">Select...</option>
                  <option value="infertility">Infertility</option>
                  <option value="ivf">IVF</option>
                  <option value="pcos">PCOS</option>
                  <option value="endometriosis">Endometriosis</option>
                  <option value="male-factor">Male Factor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn-primary w-full">
                Join Program
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
