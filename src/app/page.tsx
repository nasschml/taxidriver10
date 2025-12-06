import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/',
    }
}

export default function Home() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes <span className="text-warning">24/7</span></>}
            subtitle="Votre taxi de référence à Troyes. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Taxi Troyes"
            keyword="Troyes"
            useAnimatedHero={false}
            showServices={true}
            showFAQ={true}
        />
    )
}
