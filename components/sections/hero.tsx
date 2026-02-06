'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { AnimatedGradientBackground } from '@/components/animated-gradient-bg'

interface HeroProps {
  onScheduleClick: () => void
}

export function Hero({ onScheduleClick }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedGradientBackground />

      {/* Static gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-primary-text leading-tight mb-4 text-balance">
                Your Journey to Parenthood Starts Here
              </h1>
              <p className="text-lg text-muted-text leading-relaxed mb-8">
                At Lumina Fertility Collective, we believe every family has a unique story. Our compassionate team of experts provides personalized fertility care designed with you in mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onScheduleClick}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Schedule Call
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection('why-lumina')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Learn More
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10 mt-8">
              <div className="space-y-1">
                <p className="text-2xl font-playfair text-cyan-400">2,500+</p>
                <p className="text-sm text-muted-text">Families Helped</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-playfair text-cyan-400">98%</p>
                <p className="text-sm text-muted-text">Satisfaction Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-playfair text-cyan-400">15+</p>
                <p className="text-sm text-muted-text">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full md:min-h-[500px] animate-fade-in animation-delay-100">
            <div className="glass-accent rounded-2xl overflow-hidden h-full">
              <Image
                src="/dr-elena-vance.jpg"
                alt="Dr. Elena Vance - Fertility Specialist"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
