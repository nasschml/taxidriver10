import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import '../assets/scss/style.scss'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-jakarta'
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
})

export const metadata: Metadata = {
  title: 'Taxi Troyes 24/7 : réservation WhatsApp, paiement CB',
  description: 'Chauffeur taxi à Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
  metadataBase: new URL('https://www.taxidriver10.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Taxi Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    url: 'https://www.taxidriver10.fr',
    siteName: 'Taxi Driver 10',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.jpg', // Default OG image
        width: 1200,
        height: 630,
        alt: 'Taxi Driver 10 - Chauffeur privé à Troyes',
      },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>

      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>{children}</body>
    </html>
  )
}
