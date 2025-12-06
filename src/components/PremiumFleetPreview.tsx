'use client'
import React from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'


const FLEET = [
    {
        name: 'Berline Luxe',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop',
        category: 'BUSINESS',
        price: 'dès 45€',
        specs: [
            { icon: 'ti-user', label: '3 Passagers' },
            { icon: 'ti-bag', label: '3 Valises' },
            { icon: 'ti-signal', label: 'Wifi 4G' },
            { icon: 'ti-shine', label: 'Cuir' }
        ]
    },
    {
        name: 'Van Prestige',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
        category: 'GROUPE',
        price: 'dès 60€',
        specs: [
            { icon: 'ti-user', label: '7 Passagers' },
            { icon: 'ti-bag', label: '7 Valises' },
            { icon: 'ti-layout-grid2', label: 'Salon' },
            { icon: 'ti-plug', label: 'Prises' }
        ]
    },
    {
        name: 'Berline Confort',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
        category: 'STANDARD',
        price: 'dès 25€',
        specs: [
            { icon: 'ti-user', label: '3 Passagers' },
            { icon: 'ti-bag', label: '2 Valises' },
            { icon: 'ti-music', label: 'Musique' },
            { icon: 'ti-mobile', label: 'Chargeur' }
        ]
    }
]

const PremiumFleetPreview = () => {
    return (
        <section className="py-9 bg-dark-premium position-relative">
            <Container>
                <Row className="justify-content-center mb-7">
                    <Col lg={8} className="text-center">
                        <h6 className="text-warning text-uppercase letter-spacing-2 mb-3 fw-bold">Notre Flotte</h6>
                        <h2 className="display-4 fw-bold text-white mb-4">Voyagez en Première Classe</h2>
                        <p className="lead text-white-50">Une sélection de véhicules récents et entretenus pour un confort optimal.</p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {FLEET.map((car, index) => (
                        <Col lg={4} md={6} key={index}>
                            <motion.div
                                className="glass-panel rounded-4 overflow-hidden h-100 hover-lift border-0"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                {/* Image Section */}
                                <div className="position-relative">
                                    <div className="ratio ratio-4x3">
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            className="object-fit-cover"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 hover-opacity-0 transition-all"></div>
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <Badge bg="warning" text="dark" className="px-3 py-2 fw-bold letter-spacing-1 rounded-pill">
                                            {car.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-white mb-0 fw-bold">{car.name}</h4>
                                        <span className="text-warning fw-bold h5 mb-0">{car.price}</span>
                                    </div>

                                    <hr className="border-secondary opacity-25 my-4" />

                                    {/* Specs Grid */}
                                    <Row className="g-3 mb-4">
                                        {car.specs.map((spec, i) => (
                                            <Col xs={6} key={i}>
                                                <div className="d-flex align-items-center text-white-50 small">
                                                    <i className={`${spec.icon} text-warning me-2`}></i>
                                                    <span>{spec.label}</span>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>

                                    <div className="d-grid gap-2">
                                        <Link href="/contact" passHref>
                                            <Button variant="outline-light" className="w-100 rounded-pill fw-bold border-secondary text-white-50 hover-text-white hover-border-white">
                                                RÉSERVER
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                <Row className="mt-7 text-center">
                    <Col>
                        <Link href="/vehicule" passHref>
                            <Button variant="link" className="text-warning text-decoration-none text-uppercase letter-spacing-2 fw-bold hover-text-white transition-all">
                                Voir tous les véhicules <i className="fas fa-arrow-right ms-2"></i>
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumFleetPreview
