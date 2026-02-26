'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const links = [
  { label: 'Proyectos', href: '#proyectos', num: '01' },
  { label: 'Servicios', href: '#servicios', num: '02' },
  { label: 'Acerca de Row', href: '#nosotros', num: '03' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled && !menuOpen
            ? 'backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        }`}
        style={scrolled && !menuOpen ? { backgroundColor: 'rgba(6, 37, 32, 0.9)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50" onClick={() => setMenuOpen(false)}>
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
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mulish text-sm text-white/80 hover:text-accent-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1uG87fyap5VrsET7KnOAmyzBv54flCcwsXBCOXKfFKixdsAej8NrKvGeterTzO0t327gBNfKmy?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-mulish text-sm font-semibold bg-accent-primary text-text-dark px-5 py-2.5 rounded-full transition-opacity duration-200 hover:opacity-90"
            >
              Agenda una llamada
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-white mb-1.5 origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-white mb-1.5"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu — pantalla completa */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col" style={{ backgroundColor: '#062520' }}
          >
            {/* Decoración de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-primary/5 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-primary/5 blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col h-full px-8 pt-28 pb-12 justify-between">
              {/* Links */}
              <nav className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 py-5 border-b border-white/10"
                    >
                      <span className="font-mulish text-xs text-accent-primary/70 tabular-nums">
                        {link.num}
                      </span>
                      <span className="font-anton text-5xl text-white uppercase group-hover:text-accent-primary transition-colors duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA + Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="flex flex-col gap-6"
              >
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1uG87fyap5VrsET7KnOAmyzBv54flCcwsXBCOXKfFKixdsAej8NrKvGeterTzO0t327gBNfKmy?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full font-mulish font-semibold bg-accent-primary text-text-dark px-6 py-4 rounded-full text-center text-base"
                >
                  Agenda una llamada
                </a>

                <div className="flex items-center justify-between text-white/40 font-mulish text-xs">
                  <span>Row Quintero Studio</span>
                  <span>© 2025</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
