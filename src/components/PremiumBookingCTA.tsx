'use client'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'

interface PremiumBookingCTAProps {
    keyword?: string
}

const PremiumBookingCTA = ({ keyword = "Troyes" }: PremiumBookingCTAProps) => {
    return (
        <section className="py-9 bg-dark-premium bg-pattern position-relative">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} className="text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="d-inline-block p-3 rounded-circle border border-warning border-opacity-25 mb-4">
                                <i className="fas fa-headset text-warning h2 mb-0"></i>
                            </div>
                            <h2 className="display-4 fw-bold text-white mb-4">Paiement et réservation</h2>
                            <p className="lead text-white-50 mb-5">
                                Réservez votre taxi à <span className="text-white">{keyword}</span> en toute simplicité.
                                Une réponse immédiate et une prise en charge rapide.
                            </p>

                            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                                <a href="tel:+33000000000" className="text-decoration-none">
                                    <Button variant="warning" className="rounded-pill px-5 py-3 fw-bold shadow-lg glow-gold text-dark w-100 w-sm-auto">
                                        <i className="fas fa-phone-alt me-2"></i> APPELER MAINTENANT
                                    </Button>
                                </a>
                                <a href="https://wa.me/33000000000" className="text-decoration-none">
                                    <Button variant="outline-light" className="rounded-pill px-5 py-3 fw-bold hover-lift w-100 w-sm-auto">
                                        <i className="fab fa-whatsapp me-2"></i> WHATSAPP
                                    </Button>
                                </a>
                            </div>

                            <div className="mt-5 pt-4 border-top border-white border-opacity-10">
                                <p className="text-white-50 small text-uppercase letter-spacing-2 mb-3">Moyens de paiement acceptés</p>
                                <div className="d-flex justify-content-center gap-4 text-white-50 h3 mb-0">
                                    <i className="fab fa-cc-visa" title="Visa"></i>
                                    <i className="fab fa-cc-mastercard" title="Mastercard"></i>
                                    <i className="fas fa-money-bill-wave" title="Espèces"></i>
                                    <i className="fas fa-file-signature" title="Chèque"></i>
                                </div>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumBookingCTA
