'use client'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'

interface PremiumPageHeaderProps {
    title: string
    subtitle?: string
    bgImage?: string
}

const PremiumPageHeader = ({ title, subtitle, bgImage }: PremiumPageHeaderProps) => {
    const background = bgImage || 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop'

    return (
        <section className="position-relative py-9 overflow-hidden d-flex align-items-center" style={{ minHeight: '400px' }}>
            {/* Background Image with Overlay */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}
            />
            <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
                style={{ opacity: 0.8, zIndex: -1 }}
            />

            <Container className="position-relative z-index-1 mt-5">
                <Row className="justify-content-center text-center">
                    <Col lg={10}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="display-3 fw-bold text-white mb-3">{title}</h1>
                            {subtitle && (
                                <p className="lead text-white-50 mb-0 mx-auto" style={{ maxWidth: '600px' }}>
                                    {subtitle}
                                </p>
                            )}
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PremiumPageHeader
