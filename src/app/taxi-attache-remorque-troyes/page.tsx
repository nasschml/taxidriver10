import React from 'react'
import LandingPageTemplate from '@/components/LandingPageTemplate'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Taxi Attache Remorque Troyes 24/7 : réservation WhatsApp, paiement CB',
    description: 'Chauffeur taxi à Attache Remorque Troyes et 50 km, aéroports Orly, Roissy, Vatry. Paiement CB, réservation Wha',
}

export default function Page() {
    return (
        <LandingPageTemplate
            title={<>Taxi Attache Remorque Troyes disponible maintenant</>}
            subtitle="Besoin de plus de capacité ? Notre véhicule dispose d'une attache remorque pour vos besoins spécifiques."
            badge="Équipement Attelage"
            keyword="Troyes Attache Remorque"
        />
    )
}
