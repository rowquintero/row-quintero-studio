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
              {/* Icono de calendario animado */}
              <motion.svg
                className="w-3.5 h-3.5 text-accent-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: [0, -8, 8, -8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </motion.svg>
              Agenda abierta Q2 y Q3
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
            10 años de experiencia en diseño impulsados con IA para lanzar tus ideas con agilidad e ingenio.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="flex justify-center">
            <motion.a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1uG87fyap5VrsET7KnOAmyzBv54flCcwsXBCOXKfFKixdsAej8NrKvGeterTzO0t327gBNfKmy?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 font-mulish font-semibold text-text-dark bg-accent-primary px-8 py-4 rounded-full text-base overflow-hidden"
              style={{ boxShadow: '0 0 24px rgba(218,255,152,0.35)' }}
            >
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
              />
              Agendar llamada de claridad
              <motion.svg
                className="w-4 h-4 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
