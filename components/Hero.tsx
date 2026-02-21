'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#104038] flex items-center pt-20">
      <div className="max-w-4xl mx-auto px-6 py-20 w-full text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 font-mulish text-sm font-medium text-accent-primary border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              Tu aliado estratégico
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="font-anton text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-tight tracking-wide mb-8"
          >
            Sitios web como motor digital para crecer.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-mulish text-base lg:text-lg text-text-on-dark leading-relaxed mb-10 max-w-xl mx-auto"
          >
            10 años de experiencia impulsados con IA para lanzar tus ideas con agilidad.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex justify-center">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 font-mulish font-semibold text-text-dark bg-accent-primary px-8 py-4 rounded-full text-base"
            >
              Agendar llamada de claridad
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
