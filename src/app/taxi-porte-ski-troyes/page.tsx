import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Porte-Ski Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Porte-Ski Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Porte-Ski Troyes disponible maintenant</>}
            subtitle="Partez au ski l'esprit tranquille. Notre véhicule est équipé pour transporter tout votre matériel de glisse."
            badge="Équipement Porte-Skis"
            keyword="Troyes Porte-Ski"
        />
    )
}
