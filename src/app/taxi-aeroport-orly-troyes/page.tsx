import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes Orly 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Troyes Orly et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes Orly disponible maintenant</>}
            subtitle="Liaison directe Troyes - Orly. Confort absolu pour vos départs et retours de vacances ou voyages d'affaires."
            badge="Navette Orly"
            keyword="Troyes - Orly"
        />
    )
}
