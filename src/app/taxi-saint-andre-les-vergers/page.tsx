import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Saint André les Vergers 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Saint André les Vergers et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-saint-andre-les-vergers',
    },
    openGraph: {
        title: 'Taxi Saint André les Vergers 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Saint André les Vergers et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-saint-andre-les-vergers',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Saint André les Vergers</span> 24/7</>}
            subtitle="Votre taxi de référence à Saint André les Vergers. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Saint André les Vergers"
        />
    )
}
