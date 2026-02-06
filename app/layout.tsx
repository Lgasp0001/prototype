import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Lumina Fertility Collective - Expert Fertility Services & Support',
  description:
    'Compassionate fertility clinic with personalized treatment plans, expert doctors, and a 98% satisfaction rate. Schedule your consultation today.',
  keywords: [
    'fertility clinic',
    'fertility services',
    'infertility treatment',
    'fertility care',
    'assisted reproduction',
    'IVF',
  ],
  authors: [{ name: 'Lumina Fertility Collective' }],
  openGraph: {
    type: 'website',
    url: 'https://lumina-fertility.vercel.app',
    title: 'Lumina Fertility Collective - Expert Fertility Services & Support',
    description:
      'Compassionate fertility clinic with personalized treatment plans and expert care.',
    images: [
      {
        url: 'https://lumina-fertility.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Fertility Collective',
    description: 'Expert fertility services with compassionate care',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#06B6D4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

