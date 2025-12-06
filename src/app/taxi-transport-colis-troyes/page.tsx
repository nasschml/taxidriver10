import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Transport Colis Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-transport-colis-troyes',
    },
    openGraph: {
        title: 'Taxi Transport Colis Troyes 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-transport-colis-troyes',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Transport Colis</span> Troyes</>}
            subtitle="Vos marchandises livrées en main propre dans les plus brefs délais. Fiabilité et rapidité pour vos urgences."
            badge="Transport Colis 24/7"
            keyword="Troyes"
        />
    )
}
