'use client'

import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  frequency: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

function PricingCard({
  tier,
  index,
  onSchedule,
}: {
  tier: PricingTier
  index: number
  onSchedule: () => void
}) {
  return (
    <div
      className={`rounded-xl p-6 transition-all duration-500 h-full flex flex-col ${
        tier.highlighted
          ? 'glass-accent ring-2 ring-cyan-500 scale-105 md:scale-110'
          : 'glass glass-hover'
      }`}
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 150}ms both`,
      }}
    >
      {tier.highlighted && (
        <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold w-fit mb-4">
          Most Popular
        </div>
      )}

      <h3 className="font-playfair text-2xl text-primary-text mb-2">
        {tier.name}
      </h3>
      <p className="text-muted-text text-sm mb-4">{tier.description}</p>

      <div className="mb-6">
        <span className="font-playfair text-4xl text-cyan-400">{tier.price}</span>
        <span className="text-muted-text text-sm ml-2">{tier.frequency}</span>
      </div>

      <button
        onClick={onSchedule}
        className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 mb-6 ${
          tier.highlighted
            ? 'bg-cyan-500 hover:bg-cyan-400 text-white'
            : 'bg-white/10 hover:bg-white/20 text-cyan-400 border border-cyan-500/30'
        }`}
      >
        {tier.cta}
      </button>

      <div className="space-y-3 flex-grow">
        {tier.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check size={18} className="text-cyan-400 flex-shrink-0" />
            <span className="text-primary-text text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Pricing({ onSchedule }: { onSchedule: () => void }) {
  const tiers: PricingTier[] = [
    {
      name: 'Consultation',
      price: '$199',
      frequency: 'per session',
      description: 'Initial fertility consultation',
      features: [
        'One-on-one with specialist',
        'Medical history review',
        'Personalized recommendations',
        'Resource guide',
      ],
      cta: 'Schedule',
    },
    {
      name: 'Assessment',
      price: '$450',
      frequency: 'per cycle',
      description: 'Comprehensive evaluation',
      features: [
        'All consultation benefits',
        'Advanced diagnostics',
        'Treatment recommendations',
        'Ongoing support',
        'Follow-up appointments',
      ],
      highlighted: true,
      cta: 'Get Started',
    },
    {
      name: 'Complete Journey',
      price: '$15,000',
      frequency: 'estimated',
      description: 'Full treatment package',
      features: [
        'All assessment benefits',
        'Complete treatment cycle',
        'Monitoring & lab work',
        'Medications included',
        '24/7 support team',
        'Financing available',
      ],
      cta: 'Learn More',
    },
    {
      name: 'Premium Support',
      price: '$199',
      frequency: 'per month',
      description: 'Ongoing care program',
      features: [
        'Monthly consultations',
        'Lifestyle coaching',
        'Emotional support group',
        'Priority scheduling',
        'Exclusive resources',
      ],
      cta: 'Subscribe',
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-text text-balance">
              Flexible Pricing Options
            </h2>
            <p className="text-muted-text text-lg max-w-2xl">
              Choose the plan that works best for your needs. Financing available for all options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <PricingCard
                key={tier.name}
                tier={tier}
                index={index}
                onSchedule={onSchedule}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
