import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Siège Enfant Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Siège Enfant Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Siège Enfant Troyes disponible maintenant</>}
            subtitle="La sécurité de vos enfants est notre priorité. Sièges auto et réhausseurs disponibles gratuitement sur demande."
            badge="Équipement Famille"
            keyword="Troyes Siège Enfant"
        />
    )
}
