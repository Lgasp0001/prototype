'use client'

import Image from 'next/image'

interface Testimonial {
  name: string
  story: string
  image: string
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  return (
    <div
      className="glass glass-hover p-6 space-y-4 h-full flex flex-col"
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 150}ms both`,
      }}
    >
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
        <Image
          src={testimonial.image || "/placeholder.svg"}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="text-primary-text italic font-playfair leading-relaxed flex-grow">
        &ldquo;{testimonial.story}&rdquo;
      </p>
      <p className="text-cyan-400 font-semibold text-sm">{testimonial.name}</p>
    </div>
  )
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah & Michael J.',
      story:
        'After 3 years of trying, Lumina gave us hope. Dr. Vance\'s expertise and compassion made all the difference. We now have beautiful twins!',
      image: '/family-story-1.jpg',
    },
    {
      name: 'Jessica P.',
      story:
        'The support I received was incredible. Not just medical care, but emotional guidance too. Lumina truly treats you like family.',
      image: '/family-story-2.jpg',
    },
    {
      name: 'David & Emma W.',
      story:
        'We felt heard and understood here. The personalized treatment plan worked perfectly for us. We couldn\'t be more grateful!',
      image: '/family-story-3.jpg',
    },
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-text text-balance">
              Real Stories of Hope
            </h2>
            <p className="text-muted-text text-lg max-w-2xl">
              Hear from families whose dreams of parenthood have become reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
