'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const PremiumFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black pt-8 pb-4 border-top border-dark">
            <Container>
                <Row className="justify-content-between g-4">
                    {/* Colonne 1 : Marque & Contact */}
                    <Col lg={3} md={6} className="mb-4 mb-lg-0">
                        <Link href="/" className="text-decoration-none mb-4 d-block">
                            <h3 className="fw-bold text-white">TAXI <span className="text-gradient-gold">DRIVER 10</span></h3>
                        </Link>
                        <p className="text-white-50 mb-4 small">
                            Votre partenaire de confiance pour des trajets d&apos;exception.
                            Disponibilité 24/7, confort absolu et discrétion garantie.
                        </p>
                        <ul className="list-unstyled text-white-50 mb-4">
                            <li className="mb-3 d-flex align-items-center">
                                <i className="fas fa-phone-alt text-warning me-3"></i>
                                <a href="tel:+33666476090" className="text-white text-decoration-none fw-bold hover-text-warning">+33 6 66 47 60 90</a>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <i className="fas fa-envelope text-warning me-3"></i>
                                <a href="mailto:contact@taxidriver10.fr" className="text-white-50 text-decoration-none hover-text-warning">contact@taxidriver10.fr</a>
                            </li>
                            <li className="d-flex align-items-center">
                                <i className="fas fa-map-marker-alt text-warning me-3"></i>
                                <span>Pont Sainte Marie, France</span>
                            </li>
                        </ul>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white hover-lift" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover-lift" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white hover-lift" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>

                    {/* Colonne 2 : Aéroports & Gares */}
                    <Col lg={3} md={6} className="mb-4 mb-lg-0">
                        <h5 className="text-white mb-4 border-bottom border-warning d-inline-block pb-2">Aéroports & Gares</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link href="/taxi-aeroport-orly-troyes" className="text-white-50 text-decoration-none hover-text-warning">Taxi Aéroport Orly</Link></li>
                            <li className="mb-2"><Link href="/taxi-aeroport-roissy-cdg-troyes" className="text-white-50 text-decoration-none hover-text-warning">Taxi Aéroport Roissy CDG</Link></li>
                            <li className="mb-2"><Link href="/taxi-aeroport-troyes-vatry" className="text-white-50 text-decoration-none hover-text-warning">Taxi Aéroport Vatry</Link></li>
                            <li className="mb-2"><Link href="/taxi-troyes" className="text-white-50 text-decoration-none hover-text-warning">Taxi Gare de Troyes</Link></li>
                            <li className="mb-2"><Link href="/taxi-longue-distance-troyes-france-europe" className="text-white-50 text-decoration-none hover-text-warning">Transferts Longue Distance</Link></li>
                        </ul>
                    </Col>

                    {/* Colonne 3 : Services Premium */}
                    <Col lg={3} md={6} className="mb-4 mb-lg-0">
                        <h5 className="text-white mb-4 border-bottom border-warning d-inline-block pb-2">Nos Services</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link href="/transport-entreprise-troyes" className="text-white-50 text-decoration-none hover-text-warning">Transport Business</Link></li>
                            <li className="mb-2"><Link href="/taxi-conventionne-troyes-cpam" className="text-white-50 text-decoration-none hover-text-warning">Taxi Conventionné CPAM</Link></li>
                            <li className="mb-2"><Link href="/taxi-scolaire-troyes" className="text-white-50 text-decoration-none hover-text-warning">Transport Scolaire</Link></li>
                            <li className="mb-2"><Link href="/taxi-6-places-troyes" className="text-white-50 text-decoration-none hover-text-warning">Véhicule 7 Places (Van)</Link></li>
                            <li className="mb-2"><Link href="/taxi-transport-colis-troyes" className="text-white-50 text-decoration-none hover-text-warning">Colis Express</Link></li>
                            <li className="mb-2"><Link href="/vehicule" className="text-white-50 text-decoration-none hover-text-warning">Découvrir le Véhicule</Link></li>
                        </ul>
                    </Col>

                    {/* Colonne 4 : Zones d'Intervention */}
                    <Col lg={3} md={6}>
                        <h5 className="text-white mb-4 border-bottom border-warning d-inline-block pb-2">Zones d&apos;Intervention</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link href="/taxi-troyes" className="text-white-50 text-decoration-none hover-text-warning">Taxi Troyes</Link></li>
                            <li className="mb-2"><Link href="/taxi-sainte-savine" className="text-white-50 text-decoration-none hover-text-warning">Taxi Sainte-Savine</Link></li>
                            <li className="mb-2"><Link href="/taxi-saint-andre-les-vergers" className="text-white-50 text-decoration-none hover-text-warning">Taxi Saint-André-les-Vergers</Link></li>
                            <li className="mb-2"><Link href="/taxi-pont-sainte-marie" className="text-white-50 text-decoration-none hover-text-warning">Taxi Pont-Sainte-Marie</Link></li>
                            <li className="mb-2"><Link href="/taxi-la-chapelle-saint-luc" className="text-white-50 text-decoration-none hover-text-warning">Taxi La Chapelle-Saint-Luc</Link></li>
                            <li className="mb-2"><Link href="/taxi-rosieres" className="text-white-50 text-decoration-none hover-text-warning">Taxi Rosières-près-Troyes</Link></li>
                        </ul>
                    </Col>
                </Row>

                <hr className="border-secondary my-5" />

                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                        <p className="text-white-50 mb-0 small">
                            &copy; {currentYear} Taxi Driver 10. Tous droits réservés.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <ul className="list-inline mb-0 small">
                            <li className="list-inline-item"><Link href="/mentions-legales" className="text-white-50 text-decoration-none hover-text-warning">Mentions Légales</Link></li>
                            <li className="list-inline-item ms-3"><Link href="/politique-confidentialite" className="text-white-50 text-decoration-none hover-text-warning">Politique de Confidentialité</Link></li>
                            <li className="list-inline-item ms-3"><Link href="/sitemap.xml" className="text-white-50 text-decoration-none hover-text-warning">Plan du site</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default PremiumFooter
