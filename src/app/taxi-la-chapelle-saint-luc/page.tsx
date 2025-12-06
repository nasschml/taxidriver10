import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi La Chapelle Saint Luc 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à La Chapelle Saint Luc et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-la-chapelle-saint-luc',
    },
    openGraph: {
        title: 'Taxi La Chapelle Saint Luc 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à La Chapelle Saint Luc et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-la-chapelle-saint-luc',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">La Chapelle Saint Luc</span> 24/7</>}
            subtitle="Votre taxi de référence à La Chapelle Saint Luc. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="La Chapelle Saint Luc"
        />
    )
}
