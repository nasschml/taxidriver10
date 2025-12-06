import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Roissy CDG vers Troyes - Retour Aéroport 24/7',
    description: 'Votre taxi depuis l\'aéroport Roissy CDG vers Troyes. Accueil pancarte, gestion des retards de vol et confort premium.',
    alternates: {
        canonical: '/taxi-aeroport-roissy-cdg-vers-troyes',
    },
    openGraph: {
        title: 'Taxi Roissy CDG vers Troyes - Retour Aéroport 24/7',
        description: 'Votre taxi depuis l\'aéroport Roissy CDG vers Troyes. Accueil pancarte, gestion des retards de vol et confort premium.',
        url: 'https://taxidriver10.fr/taxi-aeroport-roissy-cdg-vers-troyes',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Roissy CDG <span className="text-warning">vers Troyes</span></>}
            subtitle="Votre taxi depuis l'aéroport Roissy CDG vers Troyes. Accueil pancarte, gestion des retards de vol et confort premium."
            badge="Retour Aéroport 24/7"
            keyword="Roissy CDG - Troyes"
        />
    )
}
