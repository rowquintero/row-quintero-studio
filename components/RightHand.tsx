'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const options = [
  {
    number: '01',
    label: 'Emprender',
    title: 'Iniciar un nuevo proyecto o validar una idea',
    description:
      'Si quieres arrancar un proyecto y no sabes con qué parte del diseño empezar porque todo es urgente; si lo que necesitas es diseño estratégico que te ayude a validar y a diferenciarte.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '02',
    label: 'Crecer y expandir',
    title: 'Actualizar o mejorar un proyecto actual',
    description:
      'Si quieres mejorar la experiencia de tu sitio web, marca o app actual para conseguir nuevos objetivos para aumentar tu autoridad digital y maximizar tu impacto.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: '03',
    label: 'Delegar con confianza',
    title: 'Liberar carga de trabajo y delegar el diseño',
    description:
      'Si necesitas alguien especializado para aterrizar ideas ágilmente en diseños profesionales coherentes con tu marca o la de tus clientes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function RightHand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#104038] py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-anton text-5xl lg:text-6xl text-white uppercase leading-tight">
            Puedo ser tu mano derecha para:
          </h2>
        </motion.div>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, i) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 cursor-default group hover:bg-white/10 transition-colors duration-300"
            >
              <p className="font-mulish text-sm font-semibold text-text-on-dark mb-4">
                {option.label}
              </p>
              <h3 className="font-anton text-3xl text-white uppercase leading-tight mb-5">
                {option.title}
              </h3>
              <p className="font-mulish text-text-on-dark text-base leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
