import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Scolaire Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Scolaire Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Scolaire Troyes disponible maintenant</>}
            subtitle="Confiez-nous le trajet de vos enfants. Sécurité, ponctualité et communication permanente avec les parents."
            badge="Transport Scolaire"
            keyword="Troyes Scolaire"
        />
    )
}
