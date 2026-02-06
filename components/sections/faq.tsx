'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({
  item,
  index,
}: {
  item: FAQItem
  index: number
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="glass glass-hover p-6 transition-all duration-300"
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 150}ms both`,
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <h3 className="font-playfair text-primary-text text-lg flex-grow">
          {item.question}
        </h3>
        <ChevronDown
          size={20}
          className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <p className="text-muted-text text-sm leading-relaxed mt-4 pt-4 border-t border-white/10 animate-fade-in">
          {item.answer}
        </p>
      )}
    </div>
  )
}

export function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'What is the success rate at Lumina?',
      answer:
        'Our success rate is 68%, which is 15% higher than the national average. Success rates vary based on individual factors, age, and diagnosis. We provide detailed statistics during your consultation.',
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'We work with most major insurance providers and offer financing options to make care affordable. Our billing team can verify your coverage and discuss payment plans that work for your situation.',
    },
    {
      question: 'How long does treatment typically take?',
      answer:
        'Treatment duration varies depending on your diagnosis and chosen approach. Some treatments take 2-3 months, while others may take longer. We provide realistic timelines during your initial assessment.',
    },
    {
      question: 'What happens if the first cycle is unsuccessful?',
      answer:
        'We understand that fertility treatment can be emotionally challenging. Our team provides comprehensive support and will work with you to adjust the plan, explore options, and continue your journey forward.',
    },
    {
      question: 'Is counseling available?',
      answer:
        'Yes, emotional support is a crucial part of our care. We offer individual and couples counseling, support groups, and resources to help you navigate the fertility journey.',
    },
    {
      question: 'How do I schedule my first consultation?',
      answer:
        'Click the "Schedule Call" button on our website to book your initial consultation. You can choose a time that works best for you, and our team will confirm within 24 hours.',
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-in text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-primary-text text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-text text-lg">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQAccordion key={faq.question} item={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
