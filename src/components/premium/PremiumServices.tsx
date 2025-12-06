'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const servicesData = [
    {
        icon: 'fas fa-taxi',
        title: 'Taxi Troyes & Agglo',
        description: 'Déplacements rapides sur Troyes et toute l\'agglomération. Disponible 24h/24 et 7j/7.',
        link: '/taxi-troyes'
    },
    {
        icon: 'fas fa-plane-departure',
        title: 'Navettes Aéroports',
        description: 'Liaisons vers Roissy CDG, Orly, Vatry. Accueil pancarte et gestion des bagages.',
        link: '/taxi-aeroport-roissy-cdg-troyes'
    },
    {
        icon: 'fas fa-file-medical',
        title: 'Taxi Conventionné',
        description: 'Transport médical assis (CPAM). Accompagnement vers hôpitaux et cliniques.',
        link: '/taxi-conventionne-troyes-cpam'
    },
    {
        icon: 'fas fa-briefcase',
        title: 'Transport Business',
        description: 'Service VIP pour professionnels. Facturation mensuelle et priorité de réservation.',
        link: '/transport-entreprise-troyes'
    },
    {
        icon: 'fas fa-box-open',
        title: 'Colis Urgent',
        description: 'Livraison express de plis et colis. Fiabilité et remise en main propre garantie.',
        link: '/taxi-transport-colis-troyes'
    },
    {
        icon: 'fas fa-road',
        title: 'Longue Distance',
        description: 'Voyagez partout en France et en Europe. Confort premium pour les longs trajets.',
        link: '/taxi-longue-distance-troyes-france-europe'
    }
]

const PremiumServices = () => {
    return (
        <section id="services" className="py-8 bg-dark-premium">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="fw-bold display-5 mb-3 text-white">Nos Services <span className="text-warning">Premium</span></h2>
                        <p className="lead text-white-50">Une gamme complète de solutions de transport adaptées à tous vos besoins.</p>
                    </Col>
                </Row>
                <Row>
                    {servicesData.map((item, idx) => (
                        <Col md={4} className="mb-4" key={idx}>
                            <div className="feature-box f-style-2 h-100 icon-grad bg-dark-lighter shadow-lg rounded p-4 transition-hover border border-white-10 d-flex flex-column">
                                <div className="feature-box-icon mb-4">
                                    <i className={`${item.icon} fa-3x text-warning`} />
                                </div>
                                <h3 className="feature-box-title h4 fw-bold mb-3 text-white">{item.title}</h3>
                                <p className="feature-box-desc text-white-50 mb-4 flex-grow-1">{item.description}</p>
                                <div className="mt-auto">
                                    <Link className="btn btn-outline-warning btn-sm rounded-pill fw-bold px-4" href={item.link}>
                                        En savoir plus <i className="fas fa-arrow-right ms-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default PremiumServices
