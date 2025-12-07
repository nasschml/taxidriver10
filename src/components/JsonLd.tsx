import React from 'react'

interface JsonLdProps {
    withFaq?: boolean
}

const JsonLd = ({ withFaq = false }: JsonLdProps) => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "TaxiService"],
        "name": "Taxi Driver 10",
        "image": "https://www.taxidriver10.fr/images/hero-bg.jpg",
        "telephone": "+33600000000", // TODO: Replace with real phone number
        "email": "contact@taxidriver10.fr",
        "url": "https://www.taxidriver10.fr",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pont Sainte Marie",
            "addressLocality": "Pont Sainte Marie",
            "postalCode": "10150",
            "addressCountry": "FR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.3247,
            "longitude": 4.1036
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 48.2973,
                "longitude": 4.0744
            },
            "geoRadius": "50000"
        },
        "priceRange": "€€",
        "paymentAccepted": ["Cash", "Credit Card", "Check"],
        "currenciesAccepted": "EUR",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "description": "Taxi à Pont Sainte Marie et Troyes + 50 km. Navettes aéroports Roissy, Orly, Vatry, France entière. Services : taxi scolaire, taxi conventionné, transport entreprise, transport colis. Véhicule SUV 6 places. Réservation par téléphone, WhatsApp, SMS.",
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Taxi Scolaire"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Taxi Conventionné"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Transport Entreprise"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Transport Colis"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Navette Aéroport Roissy CDG"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Navette Aéroport Orly"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Navette Aéroport Vatry"
                }
            }
        ]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Comment réserver un taxi ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vous pouvez réserver votre taxi par téléphone, WhatsApp ou SMS au 06 66 47 60 90."
                }
            },
            {
                "@type": "Question",
                "name": "Quels sont les moyens de paiement acceptés ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous acceptons les paiements par carte bleue, espèces et chèque."
                }
            },
            {
                "@type": "Question",
                "name": "Quel type de véhicule proposez-vous ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous disposons d'un SUV spacieux pouvant accueillir jusqu'à 6 passagers avec leurs bagages."
                }
            },
            {
                "@type": "Question",
                "name": "Quelles sont vos zones d'intervention ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nous intervenons sur Pont Sainte Marie, Troyes et dans un rayon de 50 km. Nous assurons également les navettes vers les aéroports de Roissy, Orly, Vatry et toute la France."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            {withFaq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
        </>
    )
}

export default JsonLd
