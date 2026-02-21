'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    title: 'Branding',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    items: [
      'Logotipos & Sistemas Visuales',
      'Identidad de Marca',
      'Materiales de Marca (print y digital)',
      'Templates para Redes Sociales',
      'Iconografía & Guías de Estilo',
    ],
  },
  {
    title: 'Sitios Web',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      'Estrategia de Sitemap & UX',
      'Diseño High-Fidelity',
      'Desarrollo Webflow (CMS/CRM)',
      'Landing Pages de Alta Conversión',
      'SEO Técnico',
    ],
  },
  {
    title: 'Producto',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      'Auditoría UX & Soporte Apps',
      'Rediseño de Producto & UX Strategy',
      'Prototipado Rápido & Vibe Coding',
      'Automatizaciones No-Code',
      'Dashboards & Flowcharts Complejos',
    ],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="bg-bg-secondary py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 font-mulish text-sm font-medium text-accent-green border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 rounded-full mb-6 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
            Tu aliado estratégico
          </span>
          <h2 className="font-anton text-3xl lg:text-4xl text-text-dark uppercase leading-tight mb-6">
            Soporte personalizado en diseño
          </h2>
          <p className="font-mulish text-text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            Impulsamos emprendedores, startups y empresas a manifestar su marca y lanzar su web
            con un proceso de diseño ágil, estratégico y libre de bloqueos.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 border border-black/5 group cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent-green/10 text-accent-green flex items-center justify-center mb-6 group-hover:bg-accent-green group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-anton text-2xl text-text-dark uppercase mb-6">
                {service.title}
              </h3>

              {/* List */}
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-mulish text-sm text-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
