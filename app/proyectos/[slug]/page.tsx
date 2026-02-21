import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  return (
    <main className="bg-bg-primary min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end">
        <Image
          src={project.image}
          alt={project.client}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />

        <Link
          href="/#proyectos"
          className="absolute top-8 left-6 inline-flex items-center gap-2 font-mulish text-sm text-white/70 hover:text-white transition-colors duration-200 z-10"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver
        </Link>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <span className={`inline-block font-mulish text-xs font-semibold border px-3 py-1 rounded-full mb-5 ${project.tagColor}`}>
            {project.tag}
          </span>
          <h1 className="font-anton text-5xl lg:text-7xl text-white uppercase leading-tight mb-4 max-w-4xl">
            {project.headline ?? project.client}
          </h1>
        </div>
      </section>

      {/* ── Meta strip ── */}
      <section className="border-y border-white/10 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-10">
          <div>
            <p className="font-mulish text-xs text-text-on-dark uppercase tracking-widest mb-1">Año</p>
            <p className="font-anton text-xl text-white">{project.year}</p>
          </div>
          <div>
            <p className="font-mulish text-xs text-text-on-dark uppercase tracking-widest mb-1">Industria</p>
            <p className="font-anton text-xl text-white">{project.industry}</p>
          </div>
          <div>
            <p className="font-mulish text-xs text-text-on-dark uppercase tracking-widest mb-1">Servicios</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.services.map((s) => (
                <span key={s} className="font-mulish text-xs text-text-on-dark border border-white/10 px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="font-mulish text-xs font-semibold text-accent-primary uppercase tracking-widest block mb-5">
            El Desafío
          </span>
          <h2 className="font-anton text-4xl text-white uppercase leading-tight mb-6">
            El problema a resolver
          </h2>
          <p className="font-mulish text-text-on-dark text-lg leading-relaxed">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mulish text-xs font-semibold text-accent-primary uppercase tracking-widest block mb-5">
              El Hack Estratégico
            </span>
            <h2 className="font-anton text-4xl text-white uppercase leading-tight mb-6">
              Cómo lo resolvimos
            </h2>

            {/* Rich solution with bullet items */}
            {project.solutionItems ? (
              <>
                {project.solutionIntro && (
                  <p className="font-mulish text-text-on-dark text-lg leading-relaxed mb-8">
                    {project.solutionIntro}
                  </p>
                )}
                <ul className="space-y-6">
                  {project.solutionItems.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="mt-1 w-2 h-2 rounded-full bg-accent-primary flex-shrink-0" />
                      <div>
                        <p className="font-mulish font-semibold text-white text-base mb-1">{item.title}</p>
                        <p className="font-mulish text-text-on-dark text-base leading-relaxed">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="font-mulish text-text-on-dark text-lg leading-relaxed">
                {project.solution}
              </p>
            )}
          </div>

          {/* Outcomes preview on the right */}
          <div className="flex flex-col justify-center gap-4">
            {project.outcomes.map((o) => (
              <div key={o.label} className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
                <p className="font-anton text-4xl text-accent-primary leading-none min-w-[100px]">{o.value}</p>
                <p className="font-mulish text-sm text-text-on-dark leading-snug">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Continuity (optional) ── */}
      {project.continuity && (
        <section className="bg-bg-dark py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-6 items-start max-w-3xl">
              <div className="w-1 rounded-full bg-accent-primary flex-shrink-0 self-stretch min-h-[60px]" />
              <div>
                <span className="font-mulish text-xs font-semibold text-accent-primary uppercase tracking-widest block mb-4">
                  El Factor Continuidad
                </span>
                <p className="font-mulish text-text-on-dark text-lg leading-relaxed">
                  {project.continuity}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <span className="font-mulish text-xs font-semibold text-accent-primary uppercase tracking-widest block mb-12">
          Galería
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((src, i) => (
            <div
              key={src}
              className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
            >
              <Image
                src={src}
                alt={`${project.client} - imagen ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#104038] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-anton text-5xl lg:text-6xl text-white uppercase leading-tight mb-6">
            ¿Quieres resultados similares?
          </h2>
          <p className="font-mulish text-text-on-dark text-lg mb-10 leading-relaxed">
            Agenda una llamada de claridad y veamos cómo podemos impulsar tu proyecto juntos.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-3 font-mulish font-semibold text-text-dark bg-accent-primary px-10 py-5 rounded-full text-base hover:scale-105 transition-transform duration-200"
          >
            Comenzar un proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}
