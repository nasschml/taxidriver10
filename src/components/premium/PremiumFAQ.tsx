'use client'
import React from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

const faqData = [
    {
        question: "Comment réserver un taxi ?",
        answer: "Vous pouvez réserver simplement par téléphone, SMS ou WhatsApp au 06 00 00 00 00. Nous vous confirmons la prise en charge immédiatement."
    },
    {
        question: "Acceptez-vous la carte bancaire ?",
        answer: "Oui, tous nos véhicules sont équipés de terminaux de paiement électronique (TPE) acceptant toutes les cartes bancaires (Visa, Mastercard, Amex...)."
    },
    {
        question: "Faites-vous les liaisons aéroports ?",
        answer: "Absolument. Nous assurons les transferts vers tous les aéroports (Roissy CDG, Orly, Vatry, Beauvais) avec un tarif fixe et un accueil personnalisé."
    },
    {
        question: "Le véhicule est-il adapté aux groupes ?",
        answer: "Nous disposons d'un SUV spacieux pouvant accueillir jusqu'à 6 passagers avec leurs bagages, idéal pour les familles ou les groupes."
    }
]

const PremiumFAQ = () => {
    return (
        <section className="py-8 bg-dark-premium">
            <Container>
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <h2 className="fw-bold display-5 mb-3 text-white">Questions <span className="text-warning">Fréquentes</span></h2>
                        <p className="lead text-white-50">Tout ce que vous devez savoir pour votre trajet.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Accordion defaultActiveKey={'0'} className="accordion-dark" id="accordionFAQ">
                            {faqData.map((item, idx) => (
                                <AccordionItem eventKey={`${idx}`} className="mb-3 border border-white-10 bg-dark-lighter rounded overflow-hidden" key={idx}>
                                    <AccordionHeader className="bg-dark-lighter">
                                        <span className="fw-bold text-white">{item.question}</span>
                                    </AccordionHeader>
                                    <AccordionBody className="text-white-50 bg-dark-lighter">
                                        {item.answer}
                                    </AccordionBody>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumFAQ
