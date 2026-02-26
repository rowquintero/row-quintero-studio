'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Manifesto() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // Parallax: imagen sube más lento que el scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={sectionRef} className="relative py-40 overflow-hidden">

      {/* Background image con parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-[-10%] z-0"
      >
        <Image
          src="/estudio-sala.jpg"
          alt="Estudio Row Quintero"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Overlay oscuro degradado */}
      <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), #062520b3, rgba(0,0,0,0.8))' }} />


      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            animate={isInView ? { opacity: 1, letterSpacing: '0.2em' } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-mulish text-xs font-semibold text-accent-primary uppercase tracking-widest block mb-8"
          >
            Manifiesto
          </motion.span>

          <h2 className="font-anton text-6xl lg:text-8xl xl:text-9xl text-white uppercase leading-tight mb-10">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block"
            >
              Acción sobre
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="block text-accent-primary"
            >
              Perfección
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="font-mulish text-lg lg:text-xl text-text-on-dark leading-relaxed max-w-3xl mx-auto"
          >
            El diseño lento está deteniendo tu negocio. En Row Quintero Studio combinamos
            criterio senior con velocidad de IA para que puedas lanzar, validar y crecer sin
            esperar meses.
          </motion.p>
        </motion.div>
      </div>

    </section>
  )
}
