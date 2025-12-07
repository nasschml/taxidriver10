'use client'
import React, { useState } from 'react'
import { Container, Nav, Button } from 'react-bootstrap'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'

const PremiumNavbar = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
        setScrolled(latest > 50)
    })

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed-top w-100 z-index-fixed p-3"
            >
                <Container>
                    <div className={`
              d-flex align-items-center justify-content-between 
              px-4 py-2 rounded-pill 
              ${scrolled || mobileMenuOpen ? 'glass-header shadow-lg' : 'bg-transparent'}
              transition-all duration-300
            `}
                        style={{
                            backdropFilter: scrolled || mobileMenuOpen ? 'blur(12px)' : 'none',
                            background: scrolled || mobileMenuOpen ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
                            border: scrolled || mobileMenuOpen ? '1px solid rgba(255, 215, 0, 0.1)' : '1px solid transparent'
                        }}
                    >
                        {/* Logo */}
                        <Link href="/" className="navbar-brand fw-bold text-white d-flex align-items-center">
                            <span className="h4 mb-0 font-outfit fw-bold">TAXI<span className="text-warning">DRIVER</span>10</span>
                        </Link>

                        {/* Desktop Menu */}
                        <Nav className="d-none d-lg-flex align-items-center gap-4">
                            <Link href="/" className="text-white text-decoration-none small text-uppercase letter-spacing-1 opacity-75 hover-opacity-100 transition-all">
                                Accueil
                            </Link>
                            <Link href="/#services" className="text-white text-decoration-none small text-uppercase letter-spacing-1 opacity-75 hover-opacity-100 transition-all">
                                Services
                            </Link>
                            <Link href="/vehicule" className="text-white text-decoration-none small text-uppercase letter-spacing-1 opacity-75 hover-opacity-100 transition-all">
                                Le Véhicule
                            </Link>
                            <Link href="/contact" className="text-white text-decoration-none small text-uppercase letter-spacing-1 opacity-75 hover-opacity-100 transition-all">
                                Contact
                            </Link>
                        </Nav>

                        {/* CTA Button & Mobile Toggle */}
                        <div className="d-flex align-items-center gap-3">
                            <Button
                                as="a"
                                href="tel:+33666476090"
                                variant="warning"
                                className="text-decoration-none d-none d-sm-block rounded-pill px-4 py-2 fw-bold glow-gold text-dark border-0"
                                aria-label="Appeler le 06 66 47 60 90"
                                style={{ minHeight: '44px' }}
                            >
                                <i className="fas fa-phone-alt me-2"></i>
                                06 66 47 60 90
                            </Button>

                            {/* Mobile Toggle */}
                            <button
                                className="btn btn-link text-white d-lg-none p-0 border-0"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Menu"
                            >
                                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} fa-2x mb-0`}></i>
                            </button>
                        </div>
                    </div>
                </Container>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className={`position-fixed top-0 start-0 w-100 h-100 bg-dark-premium z-index-fixed ${mobileMenuOpen ? 'd-block' : 'd-none'}`}
                style={{ paddingTop: '100px', zIndex: 1020 }}
            >
                <Container className="h-100 d-flex flex-column align-items-center justify-content-center text-center">
                    <Nav className="flex-column gap-4 mb-5">
                        <Link href="/" className="text-white text-decoration-none h3 fw-bold" onClick={() => setMobileMenuOpen(false)}>
                            Accueil
                        </Link>
                        <Link href="/#services" className="text-white text-decoration-none h3 fw-bold" onClick={() => setMobileMenuOpen(false)}>
                            Services
                        </Link>
                        <Link href="/vehicule" className="text-white text-decoration-none h3 fw-bold" onClick={() => setMobileMenuOpen(false)}>
                            Le Véhicule
                        </Link>
                        <Link href="/contact" className="text-white text-decoration-none h3 fw-bold" onClick={() => setMobileMenuOpen(false)}>
                            Contact
                        </Link>
                    </Nav>
                    <Button
                        as="a"
                        href="tel:+33666476090"
                        variant="warning"
                        size="lg"
                        className="text-decoration-none w-100 px-4 rounded-pill py-3 fw-bold glow-gold text-dark border-0"
                    >
                        <i className="fas fa-phone-alt me-2"></i>
                        APPELER
                    </Button>
                </Container>
            </motion.div>
        </>
    )
}

export default PremiumNavbar
