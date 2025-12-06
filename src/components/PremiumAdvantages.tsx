'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

const advantages = [
    {
        icon: 'fas fa-stopwatch',
        title: 'Ponctualité Absolue',
        description: 'Nous respectons votre temps. Chauffeurs présents 15min avant l\'heure.'
    },
    {
        icon: 'fas fa-taxi',
        title: 'Confort Premium',
        description: 'Véhicules haut de gamme, climatisés, avec Wifi et rafraîchissements.'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Sécurité Maximale',
        description: 'Chauffeurs expérimentés et véhicules entretenus rigoureusement.'
    },
    {
        icon: 'fas fa-wallet',
        title: 'Prix Transparents',
        description: 'Tarifs fixés à l\'avance. Aucune surprise à l\'arrivée.'
    }
]

interface PremiumAdvantagesProps {
    title?: string
}

const PremiumAdvantages = ({ title = "L'Excellence à Chaque Kilomètre" }: PremiumAdvantagesProps) => {
    return (
        <section className="py-8 bg-dark-premium position-relative">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <div className="h6 text-warning text-uppercase letter-spacing-2 mb-3">Pourquoi Nous Choisir</div>
                        <h2 className="display-4 fw-bold text-white">{title}</h2>
                    </Col>
                </Row>
                <Row>
                    {advantages.map((adv, index) => (
                        <Col md={6} lg={3} key={index} className="mb-4 mb-lg-0">
                            <motion.div
                                className="glass-panel p-4 rounded-3 h-100 text-center hover-lift"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="icon-lg text-gradient-gold mb-4">
                                    <i className={`${adv.icon} fa-3x`}></i>
                                </div>
                                <h3 className="h4 text-white mb-3">{adv.title}</h3>
                                <p className="text-white-50 mb-0">{adv.description}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default PremiumAdvantages
