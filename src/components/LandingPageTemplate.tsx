import React from 'react'
import PremiumNavbar from '@/components/PremiumNavbar'
import PremiumHero from '@/components/PremiumHero'
import PremiumAdvantages from '@/components/PremiumAdvantages'
import PremiumVehicleShowcase from '@/components/PremiumVehicleShowcase'
import PremiumTestimonials from '@/components/PremiumTestimonials'
import PremiumFooter from '@/components/PremiumFooter'
import PremiumAirportTransfer from '@/components/PremiumAirportTransfer'
import PremiumBookingCTA from '@/components/PremiumBookingCTA'
import JsonLd from '@/components/JsonLd'
import PremiumServices from '@/components/premium/PremiumServices'
import PremiumFAQ from '@/components/premium/PremiumFAQ'

interface LandingPageTemplateProps {
    title?: React.ReactNode
    subtitle?: string
    badge?: string
    keyword?: string
    useAnimatedHero?: boolean
    showServices?: boolean
    showFAQ?: boolean
}

const LandingPageTemplate = ({
    title,
    subtitle,
    badge,
    keyword = "Troyes",
    useAnimatedHero = false,
    showServices = false,
    showFAQ = false
}: LandingPageTemplateProps) => {
    return (
        <main className="bg-dark-premium text-white">
            <JsonLd withFaq={showFAQ} />
            <PremiumNavbar />

            {useAnimatedHero ? (
                <PremiumHero />
            ) : (
                <PremiumHero
                    title={title}
                    subtitle={subtitle}
                    badgeText={badge}
                />
            )}



            {/* H2 #1: Services disponibles à [VILLE] */}
            {showServices ? (
                <PremiumServices />
            ) : (
                <PremiumAdvantages title={`Services disponibles à ${keyword}`} />
            )}

            {/* H2 #2: Trajets vers les aéroports */}
            <PremiumAirportTransfer keyword={keyword} />

            {/* H2 #3: Paiement et réservation */}
            <PremiumBookingCTA keyword={keyword} />

            {/* H2 #4: Véhicule 6 places avec équipements */}
            <PremiumVehicleShowcase title="Véhicule 6 places avec équipements" />

            {showFAQ && <PremiumFAQ />}

            <PremiumTestimonials />
            <PremiumFooter />
        </main>
    )
}

export default LandingPageTemplate
