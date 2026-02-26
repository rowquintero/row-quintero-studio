'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="proyectos" className="bg-bg-dark py-28">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="font-mulish text-xs font-semibold text-text-on-dark uppercase tracking-widest block mb-4">
              Casos de Éxito
            </span>
            <h2 className="font-anton text-5xl lg:text-6xl text-white uppercase leading-tight">
              Últimos Proyectos
            </h2>
          </div>
          <p className="font-mulish text-text-on-dark text-sm max-w-xs leading-relaxed">
            Proyectos que combinan estrategia, diseño y tecnología para generar resultados reales.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              whileHover={{ y: -6 }}
              style={{ transition: 'box-shadow 0.3s ease' }}
              className="rounded-2xl"
            >
              <Link
                href={`/proyectos/${project.slug}`}
                className="group relative rounded-2xl overflow-hidden block h-80 ring-1 ring-white/10 hover:ring-accent-primary/60 transition-all duration-300"
                style={{ boxShadow: '0 0 0 0 transparent' }}
              >
                {/* Imagen de fondo completa */}
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradiente oscuro en la parte inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Glow overlay al hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-accent-primary/10 to-transparent pointer-events-none" />

                {/* Metric badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-1.5 text-center transition-all duration-300 group-hover:border-accent-primary/30">
                  <p className="font-anton text-xl text-white leading-none">{project.metric}</p>
                  <p className="font-mulish text-[9px] text-white/60">{project.metricLabel}</p>
                </div>

                {/* Contenido superpuesto en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className={`inline-block font-mulish text-[10px] font-semibold border px-2.5 py-0.5 rounded-full mb-2 ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <h3 className="font-anton text-2xl text-white uppercase leading-tight mb-1">
                    {project.client}
                  </h3>
                  <div className="flex items-center gap-1.5 text-accent-primary font-mulish text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Ver caso</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
