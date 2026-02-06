'use client'

import { X, Heart, Users, Zap, Award, TrendingUp, Shield } from 'lucide-react'

interface LearnMoreModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  if (!isOpen) return null

  const reasons = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description:
        'Our team understands your journey and provides personalized support every step of the way.',
    },
    {
      icon: Award,
      title: '98% Satisfaction Rate',
      description:
        'We consistently deliver exceptional results with our proven treatment protocols and expertise.',
    },
    {
      icon: Users,
      title: '2,500+ Families Served',
      description:
        'Join thousands of families who have successfully achieved their dreams of parenthood.',
    },
    {
      icon: Zap,
      title: 'Advanced Technology',
      description:
        'Access to cutting-edge fertility treatments and diagnostic tools for optimal outcomes.',
    },
    {
      icon: TrendingUp,
      title: 'Higher Success Rates',
      description:
        'Our success rates are 15% higher than the national average in our specialty areas.',
    },
    {
      icon: Shield,
      title: 'Confidential & Safe',
      description:
        'Complete privacy and medical confidentiality throughout your entire treatment journey.',
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-text hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="font-playfair text-4xl text-foreground mb-4">
          Why Join Lumina?
        </h2>
        <p className="text-muted-text mb-8">
          Discover the reasons thousands of families choose Lumina for their fertility journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const IconComponent = reason.icon
            return (
              <div
                key={reason.title}
                className="glass-accent p-6 rounded-xl space-y-3 animate-fade-in"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                  <IconComponent size={24} />
                </div>
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-text">{reason.description}</p>
              </div>
            )
          })}
        </div>

        <button
          onClick={onClose}
          className="btn-primary w-full mt-8"
        >
          Close
        </button>
      </div>
    </div>
  )
}
