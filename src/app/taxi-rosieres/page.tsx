import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Rosières près Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Rosières près Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-rosieres',
    },
    openGraph: {
        title: 'Taxi Rosières près Troyes 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Rosières près Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-rosieres',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Rosières</span> 24/7</>}
            subtitle="Votre taxi de référence à Rosières près Troyes. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Rosières près Troyes"
        />
    )
}
