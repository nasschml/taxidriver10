import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Troyes Vatry 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Troyes Vatry et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Troyes Vatry disponible maintenant</>}
            subtitle="La solution la plus simple pour rejoindre l'aéroport de Vatry depuis Troyes. Chauffeur disponible 24/7."
            badge="Navette Vatry"
            keyword="Troyes - Vatry"
        />
    )
}
