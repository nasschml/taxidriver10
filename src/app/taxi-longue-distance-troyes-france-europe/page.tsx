import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Longue Distance Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Longue Distance Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Longue Distance Troyes disponible maintenant</>}
            subtitle="Voyagez loin dans un confort exceptionnel. Nous vous emmenons partout en France et en Europe au départ de Troyes."
            badge="Toutes Distances"
            keyword="Troyes Longue Distance"
        />
    )
}
