import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Orly vers Troyes - Retour Aéroport 24/7',
    description: 'Votre taxi depuis l\'aéroport d\'Orly vers Troyes. Chauffeur privé, véhicule spacieux et tarif transparent.',
    alternates: {
        canonical: '/taxi-orly-vers-troyes',
    },
    openGraph: {
        title: 'Taxi Orly vers Troyes - Retour Aéroport 24/7',
        description: 'Votre taxi depuis l\'aéroport d\'Orly vers Troyes. Chauffeur privé, véhicule spacieux et tarif transparent.',
        url: 'https://taxidriver10.fr/taxi-orly-vers-troyes',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Orly <span className="text-warning">vers Troyes</span></>}
            subtitle="Votre taxi depuis l'aéroport d'Orly vers Troyes. Chauffeur privé, véhicule spacieux et tarif transparent."
            badge="Retour Aéroport 24/7"
            keyword="Orly - Troyes"
        />
    )
}
