'use client'
import React from 'react'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'react-bootstrap'

const PremiumStats = () => {
    return (
        <section className="py-5 bg-dark-premium text-white">
            <Container>
                <Row>
                    <Col md={3} xs={6} className="mb-4 mb-md-0">
                        <div className="text-center">
                            <i className="fs-1 ti-car text-warning mb-3 d-block" />
                            <h2 className="fw-bold mb-0 display-5">
                                <CountUp duration={2} end={15} />
                                <span className="text-warning">+</span>
                            </h2>
                            <p className="mb-0 text-white-50">Années d&apos;expérience</p>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="mb-4 mb-md-0">
                        <div className="text-center">
                            <i className="fs-1 ti-user text-warning mb-3 d-block" />
                            <h2 className="fw-bold mb-0 display-5">
                                <CountUp duration={2} end={5000} />
                                <span className="text-warning">+</span>
                            </h2>
                            <p className="mb-0 text-white-50">Clients Satisfaits</p>
                        </div>
                    </Col>
                    <Col md={3} xs={6} className="mb-4 mb-md-0">
                        <div className="text-center">
                            <i className="fs-1 ti-map-alt text-warning mb-3 d-block" />
                            <h2 className="fw-bold mb-0 display-5">
                                <CountUp duration={2} end={100} />
                                <span className="text-warning">%</span>
                            </h2>
                            <p className="mb-0 text-white-50">Ponctualité</p>
                        </div>
                    </Col>
                    <Col md={3} xs={6}>
                        <div className="text-center">
                            <i className="fs-1 ti-infinite text-warning mb-3 d-block" />
                            <h2 className="fw-bold mb-0 display-5">
                                24<span className="text-warning">/</span>7
                            </h2>
                            <p className="mb-0 text-white-50">Disponibilité</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumStats
