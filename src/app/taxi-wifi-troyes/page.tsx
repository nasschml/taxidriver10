import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Wifi Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Wifi Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Wifi Troyes disponible maintenant</>}
            subtitle="Profitez d'une connexion Wifi haut débit à bord. Travaillez ou détendez-vous pendant votre trajet."
            badge="Service Wifi"
            keyword="Troyes Wifi"
        />
    )
}
