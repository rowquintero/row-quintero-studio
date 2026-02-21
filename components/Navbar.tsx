'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-hor-web.png"
            alt="Row Quintero Studio"
            width={180}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Proyectos', href: '#proyectos' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Acerca de Row', href: '#nosotros' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mulish text-sm text-white/80 hover:text-accent-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-mulish text-sm font-semibold bg-accent-primary text-text-dark px-5 py-2.5 rounded-full transition-opacity duration-200 hover:opacity-90"
          >
            Agenda una llamada
          </motion.a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-bg-primary border-t border-border-subtle px-6 py-6 flex flex-col gap-4"
        >
          {[
            { label: 'Proyectos', href: '#proyectos' },
            { label: 'Servicios', href: '#servicios' },
            { label: 'Acerca de Row', href: '#nosotros' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mulish text-sm text-white/80 hover:text-accent-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="font-mulish text-sm font-semibold bg-accent-primary text-text-dark px-5 py-2.5 rounded-full text-center mt-2"
          >
            Agenda una llamada
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
