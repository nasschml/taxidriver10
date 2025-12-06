'use client'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'

const PRICING = [
    {
        title: 'Standard',
        price: '25€',
        features: [
            'Berline Confort',
            'Jusqu\'à 3 passagers',
            '2 bagages',
            'Attente gratuite 15min'
        ],
        recommended: false
    },
    {
        title: 'Business',
        price: '45€',
        features: [
            'Berline Luxe (Mercedes E/S)',
            'Jusqu\'à 3 passagers',
            '3 bagages',
            'Wifi & Presse',
            'Attente gratuite 30min'
        ],
        recommended: true
    },
    {
        title: 'Van',
        price: '60€',
        features: [
            'Van Mercedes V-Class',
            'Jusqu\'à 7 passagers',
            '7 bagages',
            'Sièges conférence',
            'Idéal groupes & familles'
        ],
        recommended: false
    }
]

const PremiumPricing = () => {
    return (
        <section className="py-8 bg-dark position-relative">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h6 className="text-warning text-uppercase letter-spacing-2 mb-3">Nos Tarifs</h6>
                        <h2 className="display-4 fw-bold text-white">Transparence Totale</h2>
                        <p className="lead text-white-50">Des prix fixes, connus à l&apos;avance. Aucune surprise.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    {PRICING.map((plan, index) => (
                        <Col md={6} lg={4} key={index} className="mb-4 mb-lg-0">
                            <div className={`glass-panel p-5 rounded-3 text-center h-100 hover-lift ${plan.recommended ? 'border-warning glow-gold' : ''}`}>
                                {plan.recommended && (
                                    <div className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill fw-bold">RECOMMANDÉ</div>
                                )}
                                <h3 className="text-white mb-2">{plan.title}</h3>
                                <div className="display-4 fw-bold text-gradient-gold mb-4">
                                    <span className="h4 text-white-50">dès </span>{plan.price}
                                </div>
                                <ul className="list-unstyled text-white-50 mb-5 text-start mx-auto" style={{ maxWidth: '250px' }}>
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="mb-3">
                                            <i className="fas fa-check text-warning me-2"></i> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/reservation" passHref>
                                    <Button
                                        variant={plan.recommended ? 'warning' : 'outline-light'}
                                        className={`w-100 py-3 fw-bold rounded-pill ${plan.recommended ? 'text-dark' : ''}`}
                                    >
                                        RÉSERVER
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default PremiumPricing
