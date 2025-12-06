import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Bréviandes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Bréviandes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-breviandes',
    },
    openGraph: {
        title: 'Taxi Bréviandes 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Bréviandes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-breviandes',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Bréviandes</span> 24/7</>}
            subtitle="Votre taxi de référence à Bréviandes. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Bréviandes"
        />
    )
}
