import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi 6 Places Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à 6 Places Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi 6 Places Troyes disponible maintenant</>}
            subtitle="Voyagez en groupe sans compromis sur le confort. Notre véhicule accueille jusqu'à 6 passagers et leurs bagages."
            badge="Véhicule 6 Places"
            keyword="Troyes 6 Places"
        />
    )
}
