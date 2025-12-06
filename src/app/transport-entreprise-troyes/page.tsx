import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Entreprise Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Entreprise Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Entreprise Troyes disponible maintenant</>}
            subtitle="Une solution de mobilité premium pour vos collaborateurs et clients. Wifi à bord, confort et discrétion assurés."
            badge="Service Entreprise"
            keyword="Troyes Entreprise"
        />
    )
}
