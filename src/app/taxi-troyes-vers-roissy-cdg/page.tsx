import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes vers Roissy CDG - Navette Aéroport 24/7',
    description: 'Réservez votre taxi de Troyes vers l\'aéroport Roissy CDG. Trajet confortable, prix fixe et chauffeur ponctuel.',
    alternates: {
        canonical: '/taxi-troyes-vers-roissy-cdg',
    },
    openGraph: {
        title: 'Taxi Troyes vers Roissy CDG - Navette Aéroport 24/7',
        description: 'Réservez votre taxi de Troyes vers l\'aéroport Roissy CDG. Trajet confortable, prix fixe et chauffeur ponctuel.',
        url: 'https://taxidriver10.fr/taxi-troyes-vers-roissy-cdg',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes <span className="text-warning">vers Roissy CDG</span></>}
            subtitle="Votre navette privée vers l'aéroport Charles de Gaulle. Voyagez sans stress et arrivez à l'heure pour votre vol."
            badge="Navette Aéroport 24/7"
            keyword="Troyes - Roissy CDG"
        />
    )
}
