'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PremiumNavbar from '@/components/PremiumNavbar'
import PremiumFooter from '@/components/PremiumFooter'
import PremiumPageHeader from '@/components/PremiumPageHeader'

const PolitiqueConfidentialite = () => {
    return (
        <main className="bg-dark-premium text-white">
            <PremiumNavbar />
            <PremiumPageHeader
                title="Politique de Confidentialité"
                subtitle="Protection de vos données personnelles (RGPD)."
                bgImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-9">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="glass-panel p-5 rounded-4">
                                <h2 className="text-warning mb-4">1. Collecte des Données</h2>
                                <p className="text-white-50 mb-4">
                                    Dans le cadre de l&apos;utilisation du site <strong>taxidriver10.fr</strong>, nous pouvons être amenés à collecter les données suivantes :
                                </p>
                                <ul className="list-unstyled text-white-50 mb-5">
                                    <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Nom et Prénom</li>
                                    <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Adresse email</li>
                                    <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Numéro de téléphone</li>
                                    <li className="mb-2"><i className="fas fa-check text-warning me-2"></i> Données de localisation (pour les trajets)</li>
                                </ul>

                                <h2 className="text-warning mb-4">2. Utilisation des Données</h2>
                                <p className="text-white-50 mb-5">
                                    Ces données sont utilisées uniquement pour :
                                    <br />- La gestion de vos demandes de réservation et devis.
                                    <br />- La communication concernant nos services.
                                    <br />- L&apos;amélioration de votre expérience utilisateur.
                                </p>

                                <h2 className="text-warning mb-4">3. Conservation des Données</h2>
                                <p className="text-white-50 mb-5">
                                    Vos données personnelles sont conservées pendant une durée qui n&apos;excède pas la durée nécessaire aux finalités pour lesquelles elles ont été collectées.
                                </p>

                                <h2 className="text-warning mb-4">4. Vos Droits</h2>
                                <p className="text-white-50 mb-0">
                                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.
                                    Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@taxidriver10.fr" className="text-warning text-decoration-none">contact@taxidriver10.fr</a>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <PremiumFooter />
        </main>
    )
}

export default PolitiqueConfidentialite
