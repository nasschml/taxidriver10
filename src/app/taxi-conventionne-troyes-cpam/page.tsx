import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Conventionné Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Conventionné Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Conventionné Troyes disponible maintenant</>}
            subtitle="Transport médical assis professionnalisé. Nous vous accompagnons vers tous les hôpitaux et cliniques avec bienveillance."
            badge="Taxi Conventionné"
            keyword="Troyes Conventionné"
        />
    )
}
