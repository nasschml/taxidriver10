import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes Roissy CDG 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Troyes Roissy CDG et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes Roissy CDG disponible maintenant</>}
            subtitle="Votre navette privée vers l'aéroport Charles de Gaulle. Voyagez sans stress et arrivez à l'heure pour votre vol."
            badge="Navette Roissy CDG"
            keyword="Troyes - Roissy"
        />
    )
}
