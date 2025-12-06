'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const PremiumFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black pt-8 pb-4 border-top border-dark">
            <Container>
                <Row className="justify-content-between">
                    <Col lg={4} className="mb-5 mb-lg-0">
                        <Link href="/" className="text-decoration-none mb-4 d-block">
                            <h3 className="fw-bold text-white">TAXI <span className="text-gradient-gold">DRIVER 10</span></h3>
                        </Link>
                        <p className="text-white-50 mb-4">
                            Votre partenaire de confiance pour des trajets d&apos;exception.
                            Disponibilité 24/7, confort absolu et discrétion garantie.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="text-white hover-lift" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover-lift" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white hover-lift" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>
                    <Col lg={2} md={4} className="mb-4 mb-md-0">
                        <h4 className="text-white mb-4">Navigation</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link href="/" className="text-white-50 text-decoration-none hover-text-warning">Accueil</Link></li>
                            <li className="mb-2"><Link href="/#services" className="text-white-50 text-decoration-none hover-text-warning">Services</Link></li>
                            <li className="mb-2"><Link href="/vehicule" className="text-white-50 text-decoration-none hover-text-warning">Le Véhicule</Link></li>
                            <li className="mb-2"><Link href="/contact" className="text-white-50 text-decoration-none hover-text-warning">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={4} className="mb-4 mb-md-0">
                        <h4 className="text-white mb-4">Services</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link href="/taxi-aeroport-roissy-cdg-troyes" className="text-white-50 text-decoration-none hover-text-warning">Aéroports</Link></li>
                            <li className="mb-2"><Link href="/taxi-troyes" className="text-white-50 text-decoration-none hover-text-warning">Gares</Link></li>
                            <li className="mb-2"><Link href="/transport-entreprise-troyes" className="text-white-50 text-decoration-none hover-text-warning">Business</Link></li>
                            <li className="mb-2"><Link href="/taxi-longue-distance-troyes-france-europe" className="text-white-50 text-decoration-none hover-text-warning">Longue Distance</Link></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={4}>
                        <h4 className="text-white mb-4">Contact</h4>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-3">
                                <i className="fas fa-map-marker-alt text-warning me-2"></i>
                                Pont Sainte Marie, France
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-phone-alt text-warning me-2"></i>
                                <a href="tel:+33000000000" className="text-white-50 text-decoration-none">+33 0 00 00 00 00</a>
                            </li>
                            <li className="mb-3">
                                <i className="fas fa-envelope text-warning me-2"></i>
                                <a href="mailto:contact@taxidriver10.fr" className="text-white-50 text-decoration-none">contact@taxidriver10.fr</a>
                            </li>
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
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default PremiumFooter
