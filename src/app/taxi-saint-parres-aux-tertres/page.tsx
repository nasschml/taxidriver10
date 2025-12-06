import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Saint Parres aux Tertres 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Saint Parres aux Tertres et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-saint-parres-aux-tertres',
    },
    openGraph: {
        title: 'Taxi Saint Parres aux Tertres 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Saint Parres aux Tertres et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-saint-parres-aux-tertres',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Saint Parres aux Tertres</span> 24/7</>}
            subtitle="Votre taxi de référence à Saint Parres aux Tertres. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Saint Parres aux Tertres"
        />
    )
}
