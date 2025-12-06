'use client'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import CountUp from 'react-countup'



interface PremiumHeroProps {
    title?: React.ReactNode
    subtitle?: string
    badgeText?: string
}

const PremiumHero = ({
    title = <>Taxi Driver 10 <br /><span className="text-gradient-gold">Troyes & Agglo</span></>,
    subtitle = "Votre chauffeur privé toutes distances. Transport conventionné, scolaire et colis. Disponible sur réservation pour gares et aéroports.",
    badgeText = "Stationnement : Pont Sainte Marie"
}: PremiumHeroProps) => {
    return (
        <section className="position-relative min-vh-100 d-flex align-items-center bg-dark-premium overflow-hidden">
            {/* Background with Gradient Overlay */}
            <Image
                src="/images/hero-bg.jpg"
                alt="Taxi Troyes - Chauffeur privé"
                fill
                priority
                sizes="100vw"
                className="object-fit-cover"
                style={{
                    filter: 'grayscale(100%) contrast(1.1) brightness(0.4)',
                    zIndex: 0
                }}
            />
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 100%)'
                }}
            />

            <Container className="position-relative z-index-1 mt-5">
                <Row className="align-items-center">
                    <Col lg={8} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="d-inline-block px-3 py-1 border border-warning rounded-pill mb-4">
                                <span className="text-warning text-uppercase letter-spacing-2 small fw-bold">
                                    {badgeText}
                                </span>
                            </div>
                            <h1 className="display-1 fw-bold text-white mb-4 lh-1">
                                {title}
                            </h1>
                            <p className="lead text-white-50 mb-5" style={{ maxWidth: '600px', fontSize: '1.25rem' }}>
                                {subtitle}
                            </p>

                            <div className="d-flex gap-3 flex-wrap">
                                <a href="tel:+33000000000" className="text-decoration-none">
                                    <Button
                                        variant="warning"
                                        size="lg"
                                        className="rounded-pill px-5 py-3 fw-bold glow-gold text-dark"
                                    >
                                        <i className="fas fa-phone-alt me-2"></i> APPELER
                                    </Button>
                                </a>
                                <Link href="/contact" passHref>
                                    <Button
                                        variant="outline-light"
                                        size="lg"
                                        className="rounded-pill px-5 py-3 fw-bold hover-lift"
                                    >
                                        ME CONTACTER
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </Col>
                </Row>

                {/* Animated Stats Integration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-5 pt-4 border-top border-white-10"
                >
                    <Row className="text-center text-lg-start">
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                <i className="fas fa-history text-warning display-6 me-3"></i>
                                <div>
                                    <h3 className="fw-bold text-white mb-0 h2">
                                        <CountUp end={15} duration={2.5} />+
                                    </h3>
                                    <p className="text-white-50 mb-0 small text-uppercase ls-1">Années d&apos;Exp.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                <i className="fas fa-users text-warning display-6 me-3"></i>
                                <div>
                                    <h3 className="fw-bold text-white mb-0 h2">
                                        <CountUp end={5000} duration={2.5} separator=" " />+
                                    </h3>
                                    <p className="text-white-50 mb-0 small text-uppercase ls-1">Clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3} className="mb-4 mb-md-0">
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                <i className="fas fa-clock text-warning display-6 me-3"></i>
                                <div>
                                    <h3 className="fw-bold text-white mb-0 h2">
                                        <CountUp end={100} duration={2.5} />%
                                    </h3>
                                    <p className="text-white-50 mb-0 small text-uppercase ls-1">Ponctualité</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={3}>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                <i className="fas fa-headset text-warning display-6 me-3"></i>
                                <div>
                                    <h3 className="fw-bold text-white mb-0 h2">
                                        24/7
                                    </h3>
                                    <p className="text-white-50 mb-0 small text-uppercase ls-1">Disponibilité</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </section>
    )
}

export default PremiumHero
