import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Pont Sainte Marie 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Pont Sainte Marie et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-pont-sainte-marie',
    },
    openGraph: {
        title: 'Taxi Pont Sainte Marie 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Pont Sainte Marie et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-pont-sainte-marie',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Pont Sainte Marie</span> 24/7</>}
            subtitle="Votre taxi de référence à Pont Sainte Marie. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Pont Sainte Marie"
        />
    )
}
