'use client'

import React from "react"

import { Heart, Stethoscope, Users } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <div
      className="glass glass-hover p-6 space-y-4 h-full transition-all duration-500"
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 150}ms both`,
      }}
    >
      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/30 transition-colors">
        {icon}
      </div>
      <h3 className="font-playfair text-xl text-primary-text">{title}</h3>
      <p className="text-muted-text text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function Services() {
  const services = [
    {
      icon: <Stethoscope size={24} />,
      title: 'Comprehensive Assessment',
      description:
        'Detailed evaluation of your fertility health with state-of-the-art diagnostic tools and personalized recommendations.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Treatment Planning',
      description:
        'Customized treatment plans tailored to your unique needs and goals, with compassionate guidance every step of the way.',
    },
    {
      icon: <Users size={24} />,
      title: 'Ongoing Support',
      description:
        'Continuous care from our dedicated team, including counseling, lifestyle guidance, and emotional support throughout your journey.',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-text text-balance">
              Our Services
            </h2>
            <p className="text-muted-text text-lg max-w-2xl">
              Comprehensive fertility care designed to support you at every stage of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
