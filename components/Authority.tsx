'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const brands = [
  { name: 'Maruchan MX', sub: 'Líder en México' },
  { name: 'Grupo Sanfer', sub: 'Corporativo' },
  { name: 'Avilez PR', sub: 'Relaciones Públicas' },
]

export default function Authority() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-bg-secondary py-20 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mulish text-xs font-semibold text-text-muted uppercase tracking-widest text-center mb-12"
        >
          Marcas que han confiado en nosotros
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              className="text-center group cursor-default"
            >
              <p className="font-anton text-2xl lg:text-3xl text-text-dark/40 uppercase tracking-widest group-hover:text-text-dark transition-colors duration-300">
                {brand.name}
              </p>
              <p className="font-mulish text-xs text-text-muted mt-1">{brand.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
