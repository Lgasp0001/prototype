'use client'

import { useState } from 'react'
import { Header } from '@/components/header/header'
import { Hero } from '@/components/sections/hero'
import { WhyLumina } from '@/components/sections/why-lumina'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { CTAFinal } from '@/components/sections/cta-final'
import { Footer } from '@/components/footer/footer'
import { ScheduleCallModal } from '@/components/modals/schedule-call-modal'
import { BackToTopButton } from '@/components/back-to-top'

export default function Home() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false)

  return (
    <>
      <Header onScheduleClick={() => setIsScheduleModalOpen(true)} />
      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
      <BackToTopButton />

      <main className="overflow-hidden">
        <Hero onScheduleClick={() => setIsScheduleModalOpen(true)} />
        <WhyLumina />
        <Services />
        <Process />
        <Testimonials />
        <Pricing onSchedule={() => setIsScheduleModalOpen(true)} />
        <FAQ />
        <CTAFinal onScheduleClick={() => setIsScheduleModalOpen(true)} />
      </main>

      <Footer />
    </>
  )
}


