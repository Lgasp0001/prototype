'use client'

import Link from 'next/link'
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="glass border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">L</span>
              </div>
              <span className="font-playfair font-semibold text-primary-text">
                Lumina
              </span>
            </div>
            <p className="text-muted-text text-sm leading-relaxed">
              Dedicated to helping families build their dreams through compassionate, expert fertility care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-primary-text">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Pricing', id: 'pricing' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', href: '/contact' },
              ].map((item) =>
                item.href ? (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-muted-text hover:text-cyan-400 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-muted-text hover:text-cyan-400 transition-colors text-sm text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Contact Dr. Marcus */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-primary-text">
              Dr. Marcus
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:marcus@lumina-fertility.com"
                className="flex items-center gap-2 text-muted-text hover:text-cyan-400 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>marcus@lumina-fertility.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-muted-text hover:text-cyan-400 transition-colors text-sm"
              >
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </a>
              <div className="flex items-start gap-2 text-muted-text text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Healing Way, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Column 4: Call to Action */}
          <div className="space-y-4">
            <h4 className="font-playfair font-semibold text-primary-text">
              Get Started
            </h4>
            <p className="text-muted-text text-sm">
              Ready to schedule your consultation?
            </p>
            <Link href="/contact" className="btn-primary inline-block text-sm">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-text text-sm text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Lumina Fertility Collective. All
              rights reserved.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg text-cyan-400 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}
