import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Vatry vers Troyes - Retour Aéroport 24/7',
    description: 'Votre taxi depuis l\'aéroport de Vatry vers Troyes. Transport de groupe et bagages volumineux acceptés.',
    alternates: {
        canonical: '/taxi-vatry-vers-troyes',
    },
    openGraph: {
        title: 'Taxi Vatry vers Troyes - Retour Aéroport 24/7',
        description: 'Votre taxi depuis l\'aéroport de Vatry vers Troyes. Transport de groupe et bagages volumineux acceptés.',
        url: 'https://taxidriver10.fr/taxi-vatry-vers-troyes',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Vatry <span className="text-warning">vers Troyes</span></>}
            subtitle="Votre taxi depuis l'aéroport de Vatry vers Troyes. Transport de groupe et bagages volumineux acceptés."
            badge="Retour Aéroport 24/7"
            keyword="Vatry - Troyes"
        />
    )
}
