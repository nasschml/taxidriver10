'use client'
import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const TESTIMONIALS = [
    {
        name: 'Sophie Martin',
        role: 'Cliente Régulière',
        text: 'Un service exceptionnel. Le chauffeur était ponctuel, courtois et la voiture d\'une propreté irréprochable. Je recommande vivement pour tous vos déplacements professionnels.',
        rating: 5
    },
    {
        name: 'Jean Dupont',
        role: 'Voyageur d\'Affaires',
        text: 'La réservation en ligne est simple et rapide. Le trajet vers l\'aéroport s\'est déroulé parfaitement. Le Wifi à bord est un vrai plus pour travailler.',
        rating: 5
    },
    {
        name: 'Marie Leroy',
        role: 'Touriste',
        text: 'Nous avons utilisé Taxi Driver 10 pour visiter la région. Le chauffeur connaissait parfaitement les lieux et nous a donné d\'excellents conseils. Merci !',
        rating: 5
    }
]

const PremiumTestimonials = () => {
    return (
        <section className="py-8 bg-dark-premium position-relative overflow-hidden">
            {/* Background Pattern */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-pattern opacity-10"></div>

            <Container className="position-relative z-index-1">
                <Row className="justify-content-center mb-5">
                    <Col lg={8} className="text-center">
                        <div className="h6 text-warning text-uppercase letter-spacing-2 mb-3">Témoignages</div>
                        <h2 className="display-4 fw-bold text-white">Ils Nous Font Confiance</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Carousel indicators={false} controls={true} interval={5000} className="premium-carousel">
                            {TESTIMONIALS.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <div className="glass-panel p-5 rounded-3 text-center mx-3 my-2">
                                        <div className="text-warning mb-3">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <i key={i} className="fas fa-star mx-1"></i>
                                            ))}
                                        </div>
                                        <p className="lead text-white fst-italic mb-4">&quot;{item.text}&quot;</p>
                                        <h3 className="h5 text-white fw-bold mb-1">{item.name}</h3>
                                        <span className="text-white-50 small text-uppercase letter-spacing-1">{item.role}</span>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumTestimonials
