'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

interface PremiumAirportTransferProps {
    keyword?: string
}

const features = [
    {
        icon: 'fas fa-wallet',
        title: 'Paiement Flexible',
        text: 'Carte bancaire, Espèces, Chèque'
    },
    {
        icon: 'fas fa-calendar-check',
        title: 'Réservation Simple',
        text: 'Téléphone, WhatsApp, SMS'
    },
    {
        icon: 'fas fa-taxi',
        title: 'Véhicule Premium',
        text: 'SUV 6 places, Porte-skis, Siège enfant'
    },
    {
        icon: 'fas fa-map-marked-alt',
        title: 'Toutes Destinations',
        text: 'Troyes, Orly, Roissy, Vatry & France'
    }
]

const PremiumAirportTransfer = ({ keyword = "Troyes" }: PremiumAirportTransferProps) => {
    return (
        <section className="py-8 bg-dark-premium bg-pattern position-relative">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h6 className="text-warning text-uppercase letter-spacing-2 mb-3">Connexions & Transferts</h6>
                        <h2 className="display-4 fw-bold text-white mb-4">Trajets vers les aéroports</h2>
                        <p className="lead text-white-50">
                            Liaison directe depuis <span className="text-white">{keyword}</span> vers tous les aéroports parisiens.
                            Service ponctuel et confortable pour ne jamais rater votre vol.
                        </p>
                    </Col>
                </Row>

                <Row>
                    {features.map((feature, index) => (
                        <Col md={6} lg={3} key={index} className="mb-4 mb-lg-0">
                            <motion.div
                                className="glass-panel p-4 rounded-3 h-100 text-center hover-lift"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="icon-lg text-gradient-gold mb-4 display-4">
                                    <i className={feature.icon}></i>
                                </div>
                                <h4 className="text-white mb-3">{feature.title}</h4>
                                <p className="text-white-50 mb-0">{feature.text}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default PremiumAirportTransfer
