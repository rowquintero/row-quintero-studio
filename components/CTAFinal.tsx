'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function CTAFinal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contacto" className="bg-[#104038] py-20 px-4 sm:px-6">
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
          <div className="relative z-10 px-6 sm:px-10 py-16 sm:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-anton text-5xl sm:text-6xl lg:text-7xl text-white uppercase leading-tight mb-6"
            >
              Colaboremos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-mulish text-text-on-dark text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Reserva una llamada o contáctanos por correo electrónico y hablemos para ver si
              somos los adecuados para contribuir a tus proyectos
            </motion.p>

            <motion.a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1uG87fyap5VrsET7KnOAmyzBv54flCcwsXBCOXKfFKixdsAej8NrKvGeterTzO0t327gBNfKmy?gv=true"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative inline-flex items-center gap-3 font-mulish font-semibold text-text-dark bg-accent-primary px-8 py-4 rounded-full text-base overflow-hidden"
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
              Comenzar un proyecto
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
