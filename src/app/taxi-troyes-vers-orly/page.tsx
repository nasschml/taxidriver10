import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes vers Orly - Navette Aéroport 24/7',
    description: 'Réservez votre taxi de Troyes vers l\'aéroport d\'Orly. Service fiable pour ne jamais rater votre vol.',
    alternates: {
        canonical: '/taxi-troyes-vers-orly',
    },
    openGraph: {
        title: 'Taxi Troyes vers Orly - Navette Aéroport 24/7',
        description: 'Réservez votre taxi de Troyes vers l\'aéroport d\'Orly. Service fiable pour ne jamais rater votre vol.',
        url: 'https://taxidriver10.fr/taxi-troyes-vers-orly',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes <span className="text-warning">vers Orly</span></>}
            subtitle="Réservez votre taxi de Troyes vers l'aéroport d'Orly. Service fiable pour ne jamais rater votre vol."
            badge="Navette Aéroport 24/7"
            keyword="Troyes - Orly"
        />
    )
}
