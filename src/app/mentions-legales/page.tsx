'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PremiumNavbar from '@/components/PremiumNavbar'
import PremiumFooter from '@/components/PremiumFooter'
import PremiumPageHeader from '@/components/PremiumPageHeader'

const MentionsLegales = () => {
    return (
        <main className="bg-dark-premium text-white">
            <PremiumNavbar />
            <PremiumPageHeader
                title="Mentions Légales"
                subtitle="Informations juridiques concernant la société TAXI DRIVER 10."
                bgImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-9">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="glass-panel p-5 rounded-4">
                                <h2 className="text-warning mb-4">1. Éditeur du Site</h2>
                                <p className="text-white-50 mb-4">
                                    Le site internet <strong>taxidriver10.fr</strong> est édité par la société <strong>TAXI DRIVER 10</strong>.
                                </p>
                                <ul className="list-unstyled text-white-50 mb-5">
                                    <li className="mb-2"><strong>Forme Juridique :</strong> Société par actions simplifiée (SASU)</li>
                                    <li className="mb-2"><strong>Capital Social :</strong> 1 000,00 Euros</li>
                                    <li className="mb-2"><strong>Siège Social :</strong> 5 Rue Arthur Rimbaud, 10600 La Chapelle-Saint-Luc</li>
                                    <li className="mb-2"><strong>Immatriculation :</strong> RCS Troyes 930 388 582</li>
                                    <li className="mb-2"><strong>Date d&apos;immatriculation :</strong> 05/07/2024</li>
                                    <li className="mb-2"><strong>Président :</strong> M. BOUNA ANAE Abdelmounim</li>
                                    <li className="mb-2"><strong>Activité :</strong> Transports de voyageurs par taxis (4932Z)</li>
                                </ul>

                                <h2 className="text-warning mb-4">2. Contact</h2>
                                <ul className="list-unstyled text-white-50 mb-5">
                                    <li className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33666476090" className="text-warning text-decoration-none">+33 6 66 47 60 90</a></li>
                                    <li className="mb-2"><strong>Email :</strong> <a href="mailto:contact@taxidriver10.fr" className="text-warning text-decoration-none">contact@taxidriver10.fr</a></li>
                                </ul>

                                <h2 className="text-warning mb-4">3. Hébergement</h2>
                                <p className="text-white-50 mb-5">
                                    Le site est hébergé par [Nom de l&apos;hébergeur], [Adresse de l&apos;hébergeur].
                                </p>

                                <h2 className="text-warning mb-4">4. Propriété Intellectuelle</h2>
                                <p className="text-white-50 mb-0">
                                    L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
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

export default MentionsLegales
