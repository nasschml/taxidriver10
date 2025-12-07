'use client'
import React from 'react'
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/33666476090"
            target="_blank"
            rel="noopener noreferrer"
            className="position-fixed bottom-0 end-0 m-4 z-index-fixed text-decoration-none"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ zIndex: 9999 }}
        >
            <div className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
                style={{
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FDB931 100%)',
                    boxShadow: '0 4px 15px rgba(253, 185, 49, 0.4)'
                }}>
                <i className="fab fa-whatsapp fa-2x text-dark"></i>
            </div>
        </motion.a>
    )
}

export default FloatingWhatsApp
