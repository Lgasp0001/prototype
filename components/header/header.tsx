'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header({
  onScheduleClick,
}: {
  onScheduleClick: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: 'Why Lumina', id: 'why-lumina' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg shadow-cyan-500/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-playfair font-bold text-lg">L</span>
            </div>
            <span className="font-playfair font-semibold text-lg text-primary-text hidden sm:block">
              Lumina
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-text hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onScheduleClick}
              className="btn-primary text-sm"
            >
              Schedule Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onScheduleClick}
              className="btn-primary text-sm px-4 py-2"
            >
              Call
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-3 py-2 text-primary-text hover:bg-white/5 hover:text-cyan-400 transition-all duration-300 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onScheduleClick()
                  setIsOpen(false)
                }}
                className="btn-primary text-sm w-full"
              >
                Schedule Call
              </button>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-primary-text hover:bg-white/5 hover:text-cyan-400 transition-all duration-300 rounded-lg text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
