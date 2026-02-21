'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function CTAFinal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="bg-[#104038] py-20 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 0 0 2px #DAFF98, 0 0 40px 4px rgba(218,255,152,0.35)',
          }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/escritorio-estudio.jpg"
              alt="Escritorio estudio"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-10 py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-anton text-6xl lg:text-7xl text-white uppercase leading-tight mb-6"
            >
              Colaboremos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-mulish text-text-on-dark text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Reserva una llamada o contáctanos por correo electrónico y hablemos para ver si
              somos los adecuados para contribuir a tus proyectos
            </motion.p>

            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 font-mulish font-semibold text-text-dark bg-accent-primary px-8 py-4 rounded-full text-base"
            >
              Comenzar un proyecto
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
