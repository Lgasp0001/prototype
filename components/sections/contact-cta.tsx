'use client'

import { ArrowRight } from 'lucide-react'

interface ContactCTAProps {
  onJoinClick: () => void
  onLearnMoreClick: () => void
}

export function ContactCTA({ onJoinClick, onLearnMoreClick }: ContactCTAProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-accent rounded-2xl p-8 md:p-12 space-y-6 text-center animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground text-balance">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-text text-lg max-w-2xl mx-auto">
            Take the first step toward parenthood. Our compassionate team is ready to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onJoinClick}
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Join Program
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={onLearnMoreClick}
              className="btn-secondary inline-flex items-center justify-center gap-2 group"
            >
              Learn More
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
          <p className="text-sm text-muted-text pt-4">
            First consultation is 100% confidential and obligation-free
          </p>
        </div>
      </div>
    </section>
  )
}
