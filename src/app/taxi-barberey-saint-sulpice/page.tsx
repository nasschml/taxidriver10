import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Barberey Saint Sulpice 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Barberey Saint Sulpice et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
    alternates: {
        canonical: '/taxi-barberey-saint-sulpice',
    },
    openGraph: {
        title: 'Taxi Barberey Saint Sulpice 24/7 : réservation WhatsApp, paiement CB',
        description: 'Chauffeur taxi à Barberey Saint Sulpice et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation WhatsApp.',
        url: 'https://taxidriver10.fr/taxi-barberey-saint-sulpice',
    },
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi <span className="text-warning">Barberey Saint Sulpice</span> 24/7</>}
            subtitle="Votre taxi de référence à Barberey Saint Sulpice. Ponctualité, confort et discrétion pour tous vos déplacements."
            badge="Disponible 24/7"
            keyword="Barberey Saint Sulpice"
        />
    )
}
