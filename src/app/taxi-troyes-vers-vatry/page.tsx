import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes vers Vatry - Navette Aéroport 24/7',
    description: 'Réservez votre taxi de Troyes vers l\'aéroport de Paris-Vatry. Liaison directe et rapide.',
    alternates: {
        canonical: '/taxi-troyes-vers-vatry',
    },
    openGraph: {
        title: 'Taxi Troyes vers Vatry - Navette Aéroport 24/7',
        description: 'Réservez votre taxi de Troyes vers l\'aéroport de Paris-Vatry. Liaison directe et rapide.',
        url: 'https://taxidriver10.fr/taxi-troyes-vers-vatry',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes <span className="text-warning">vers Vatry</span></>}
            subtitle="Réservez votre taxi de Troyes vers l'aéroport de Paris-Vatry. Liaison directe et rapide."
            badge="Navette Aéroport 24/7"
            keyword="Troyes - Vatry"
        />
    )
}
