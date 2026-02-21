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
            >
              <Link
                href={`/proyectos/${project.slug}`}
                className="group rounded-2xl overflow-hidden border border-white/10 cursor-pointer flex flex-col h-full block"
              >
                {/* Cover image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />

                  {/* Metric badge */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 text-center">
                    <p className="font-anton text-2xl text-white leading-none">{project.metric}</p>
                    <p className="font-mulish text-[10px] text-white/50 mt-0.5">{project.metricLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white/5 flex flex-col flex-1">
                  <span className={`inline-block font-mulish text-xs font-semibold border px-3 py-1 rounded-full mb-4 w-fit ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <h3 className="font-anton text-2xl text-white uppercase mb-3">
                    {project.client}
                  </h3>
                  <p className="font-mulish text-sm text-text-on-dark leading-relaxed flex-1">
                    {project.result}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-accent-primary font-mulish text-sm font-semibold group-hover:gap-4 transition-all duration-200">
                    <span>Ver caso de estudio</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
