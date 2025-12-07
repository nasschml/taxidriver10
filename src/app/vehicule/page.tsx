'use client'
import React from 'react'
import { Container, Row, Col, Button, Badge } from 'react-bootstrap'
import PremiumNavbar from '@/components/PremiumNavbar'
import PremiumFooter from '@/components/PremiumFooter'
import PremiumPageHeader from '@/components/PremiumPageHeader'
import Image from 'next/image'


const VehiclePage = () => {
    return (
        <main className="bg-dark-premium text-white">
            <PremiumNavbar />
            <PremiumPageHeader
                title="Le Véhicule"
                subtitle="Confort, sécurité et élégance pour tous vos trajets."
                bgImage="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop"
            />

            <section className="py-9">
                <Container>
                    <Row className="align-items-center mb-9">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <div className="position-relative rounded-4 overflow-hidden shadow-lg border border-secondary border-opacity-25">

                                <Image
                                    src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop"
                                    alt="SUV 7 Places"
                                    className="img-fluid w-100"
                                    width={600}
                                    height={400}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="position-absolute top-0 end-0 m-4">
                                    <Badge bg="warning" text="dark" className="px-3 py-2 fw-bold letter-spacing-1 rounded-pill">
                                        PREMIUM
                                    </Badge>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="ps-lg-5">
                                <h6 className="text-warning text-uppercase letter-spacing-2 mb-3 fw-bold">SUV 7 Places</h6>
                                <h2 className="display-4 fw-bold text-white mb-4">Espace & Confort</h2>
                                <p className="lead text-white-50 mb-5">
                                    Profitez d&apos;un voyage serein à bord de notre SUV haut de gamme.
                                    Idéal pour les groupes (jusqu&apos;à 6 passagers) et les familles, avec un grand volume de coffre.
                                </p>

                                <Row className="g-4 mb-5">
                                    <Col xs={6}>
                                        <div className="d-flex align-items-center">
                                            <div className="icon-sm text-warning me-3 mb-0">
                                                <i className="fas fa-users fa-lg"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-white">6 Passagers</h5>
                                                <small className="text-white-50">Capacité max</small>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="d-flex align-items-center">
                                            <div className="icon-sm text-warning me-3 mb-0">
                                                <i className="fas fa-suitcase fa-lg"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-white">Grand Coffre</h5>
                                                <small className="text-white-50">Volumineux</small>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="d-flex align-items-center">
                                            <div className="icon-sm text-warning me-3 mb-0">
                                                <i className="fas fa-wifi fa-lg"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-white">Wifi 4G</h5>
                                                <small className="text-white-50">Connexion haut débit</small>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="d-flex align-items-center">
                                            <div className="icon-sm text-warning me-3 mb-0">
                                                <i className="fas fa-pump-medical fa-lg"></i>
                                            </div>
                                            <div>
                                                <h5 className="mb-0 text-white">Hygiène</h5>
                                                <small className="text-white-50">Désinfection systématique</small>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="d-flex gap-3">
                                    <Button
                                        as="a"
                                        href="tel:+33666476090"
                                        variant="warning"
                                        size="lg"
                                        className="text-decoration-none rounded-pill px-5 py-3 fw-bold glow-gold text-dark"
                                    >
                                        RÉSERVER CE VÉHICULE
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center text-center bg-white-5 rounded-4 p-5 mx-0">
                        <Col lg={8}>
                            <h3 className="text-white mb-4 fw-bold">Équipements & Services</h3>
                            <p className="text-white-50 mb-5">
                                Pour votre confort et vos besoins spécifiques :
                            </p>
                            <Row className="g-4 justify-content-center">
                                {['Porte-Skis', 'Attache Remorque', 'Siège Enfant (sur demande)', 'Wifi à bord', 'Chargeurs USB', 'Paiement CB / Espèce / Chèque'].map((item, i) => (
                                    <Col md={4} key={i}>
                                        <div className="d-flex align-items-center justify-content-center p-3 border border-secondary border-opacity-25 rounded-3 bg-dark h-100">
                                            <i className="fas fa-check text-warning me-2"></i>
                                            <span className="text-white small fw-bold">{item}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <PremiumFooter />
        </main>
    )
}

export default VehiclePage
