'use client'
import React from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const VEHICLE = {
    name: 'SUV 7 Places',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop', // Keeping the image for now, can be updated later if user provides one
    description: 'Un véhicule spacieux et confortable pour tous vos déplacements. Idéal pour les groupes et les familles avec ses équipements complets.',
    specs: [
        { icon: 'fas fa-users', label: '6 Passagers Max' },
        { icon: 'fas fa-suitcase', label: 'Grand Coffre' },
        { icon: 'fas fa-wifi', label: 'Wifi à bord' },
        { icon: 'fas fa-baby-carriage', label: 'Siège Enfant' },
        { icon: 'fas fa-trailer', label: 'Attache Remorque' },
        { icon: 'fas fa-snowflake', label: 'Porte-Skis' }
    ]
}

interface PremiumVehicleShowcaseProps {
    title?: string
}

const PremiumVehicleShowcase = ({ title = VEHICLE.name }: PremiumVehicleShowcaseProps) => {
    return (
        <section className="py-9 bg-dark-premium position-relative">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="h6 text-warning text-uppercase letter-spacing-2 mb-3 fw-bold">Votre Véhicule</div>
                            <h2 className="display-4 fw-bold text-white mb-4">{title}</h2>
                            <p className="lead text-white-50 mb-5">{VEHICLE.description}</p>

                            <Row className="g-4 mb-5">
                                {VEHICLE.specs.map((spec, i) => (
                                    <Col xs={6} key={i}>
                                        <div className="d-flex align-items-center text-white">
                                            <div className="icon-sm text-warning me-3 mb-0">
                                                <i className={`${spec.icon} fa-lg`}></i>
                                            </div>
                                            <span className="font-jakarta">{spec.label}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                <Link href="/vehicule" passHref>
                                    <Button variant="outline-light" className="rounded-pill px-5 py-3 fw-bold hover-lift">
                                        EN SAVOIR PLUS
                                    </Button>
                                </Link>
                                <Button
                                    as="a"
                                    href="tel:+33000000000"
                                    variant="warning"
                                    className="text-decoration-none rounded-pill px-5 py-3 fw-bold glow-gold text-dark"
                                >
                                    APPELER
                                </Button>
                            </div>
                            <div className="mt-4 text-white-50 small">
                                <i className="fas fa-credit-card me-2"></i> Paiements acceptés : CB, Espèce, Chèque
                            </div>
                        </motion.div>
                    </Col>

                    <Col lg={6}>
                        <motion.div
                            className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={VEHICLE.image}
                                alt={VEHICLE.name}
                                className="img-fluid w-100"
                                width={600}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 600px"
                                style={{ objectFit: 'cover', height: 'auto' }}
                            />
                            <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black to-transparent">
                                <Badge bg="warning" text="dark" className="px-3 py-2 fw-bold letter-spacing-1 rounded-pill">
                                    TOUTES DISTANCES
                                </Badge>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumVehicleShowcase
