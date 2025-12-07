'use client'
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PremiumNavbar from '@/components/PremiumNavbar'
import PremiumFooter from '@/components/PremiumFooter'
import PremiumPageHeader from '@/components/PremiumPageHeader'

const ContactPage = () => {
    return (
        <main className="bg-dark-premium text-white">
            <PremiumNavbar />
            <PremiumPageHeader
                title="Contactez-Nous"
                subtitle="Une question ? Un devis ? Notre équipe est à votre écoute 24h/24."
                bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-8">
                <Container>
                    <Row className="justify-content-between">
                        <Col lg={5} className="mb-5 mb-lg-0">
                            <h2 className="display-5 fw-bold text-white mb-4">Restons en Contact</h2>
                            <p className="lead text-white-50 mb-5">
                                Remplissez le formulaire ci-contre ou utilisez nos coordonnées directes.
                                Nous nous engageons à vous répondre sous 1 heure.
                            </p>

                            <div className="d-flex align-items-start mb-4">
                                <div className="icon-md text-warning display-6 me-4">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div>
                                    <h5 className="text-white mb-1">Téléphone</h5>
                                    <p className="text-white-50 mb-0">Disponible 24/7 pour vos urgences.</p>
                                    <a href="tel:+33666476090" className="h4 text-white text-decoration-none hover-text-warning">+33 6 66 47 60 90</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <div className="icon-md text-warning display-6 me-4">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h5 className="text-white mb-1">Email</h5>
                                    <p className="text-white-50 mb-0">Pour les devis et réservations.</p>
                                    <a href="mailto:contact@taxidriver10.fr" className="h4 text-white text-decoration-none hover-text-warning">contact@taxidriver10.fr</a>
                                </div>
                            </div>

                            <div className="d-flex align-items-start">
                                <div className="icon-md text-warning display-6 me-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h5 className="text-white mb-1">Adresse</h5>
                                    <p className="text-white-50 mb-0">
                                        Pont Sainte Marie, France<br />
                                        Zone d&apos;intervention : Troyes et 50km alentour.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="glass-panel p-5 rounded-3">
                                <h3 className="text-white mb-4">Envoyez-nous un message</h3>
                                <Form>
                                    <Row>
                                        <Col md={6} className="mb-3">
                                            <Form.Group>
                                                <Form.Label className="text-white-50">Nom</Form.Label>
                                                <Form.Control type="text" className="bg-transparent text-white border-secondary" placeholder="Votre nom" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Form.Group>
                                                <Form.Label className="text-white-50">Email</Form.Label>
                                                <Form.Control type="email" className="bg-transparent text-white border-secondary" placeholder="Votre email" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="text-white-50">Sujet</Form.Label>
                                        <Form.Control type="text" className="bg-transparent text-white border-secondary" placeholder="Sujet de votre message" />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="text-white-50">Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} className="bg-transparent text-white border-secondary" placeholder="Comment pouvons-nous vous aider ?" />
                                    </Form.Group>
                                    <Button variant="warning" size="lg" className="w-100 rounded-pill fw-bold glow-gold text-dark">
                                        ENVOYER LE MESSAGE
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="h-400 w-100 bg-dark position-relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41958.88776686364!2d4.047164999999999!3d48.2973451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee9857e789138d%3A0x40a5fb99a372c90!2sTroyes!5e0!3m2!1sen!2sfr!4v1635783924896!5m2!1sen!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%) brightness(0.8)' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </section>

            <PremiumFooter />
        </main>
    )
}

export default ContactPage
