'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" className="bg-bg-secondary py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <Image
                src="/row.jpg"
                alt="Row Quintero"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-accent-primary text-text-dark rounded-2xl p-5 shadow-2xl"
            >
              <p className="font-anton text-4xl leading-none">10+</p>
              <p className="font-mulish text-xs font-semibold mt-1">Años de experiencia</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 font-mulish text-sm font-medium text-accent-green border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
              Acerca de mí
            </span>

            <h2 className="font-anton text-5xl lg:text-6xl text-text-dark uppercase leading-tight mb-8">
              Hola, Soy Row
            </h2>

            <p className="font-mulish text-text-muted text-lg leading-relaxed mb-6">
              He pasado la última década desarrollando cómo conectar la creatividad con los
              resultados de negocio. En Row Quintero Studio, no solo diseño páginas: construimos
              sistemas digitales que permiten a emprendedores y startups lanzar rápido, validar
              y escalar sin fricciones.
            </p>
            <p className="font-mulish text-text-muted text-lg leading-relaxed mb-10">
              Llevo 10 años acompañando emprendedores, agencias y empresas a impulsar su
              crecimiento antes, como diseñador y creativo activo en constante evolución.
            </p>

            <motion.a
              href="#contacto"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 font-mulish font-semibold text-accent-green hover:text-text-dark transition-colors duration-200"
            >
              Conóceme más
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
