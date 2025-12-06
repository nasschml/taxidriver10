import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Sainte Savine 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Sainte Savine et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-sainte-savine',
    },
    openGraph: {
        title: 'Taxi Sainte Savine 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Sainte Savine et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-sainte-savine',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Sainte Savine</span> 24/7</>}
            subtitle="Votre taxi de référence à Sainte Savine. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Sainte Savine"
        />
    )
}
