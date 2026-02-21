export type SolutionItem = {
  title: string
  description: string
}

export type Project = {
  slug: string
  client: string
  tag: string
  tagColor: string
  image: string
  metric: string
  metricLabel: string
  result: string
  headline: string
  year: string
  industry: string
  services: string[]
  challenge: string
  solutionIntro?: string
  solutionItems?: SolutionItem[]
  solution?: string
  outcomes: { value: string; label: string }[]
  continuity?: string
  gallery: string[]
}

export const projects: Project[] = [
  {
    slug: 'maruchan-mx',
    client: 'Maruchan MX',
    tag: 'Diseño Web + Estrategia UX',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    image: '/portada-rompe-el-hielo.jpg',
    metric: '+26k',
    metricLabel: 'Registros únicos',
    headline: 'Gamificación Masiva: Rompiendo Récords de Conversión para Maruchan MX',
    result: 'Gamificación Masiva: +26k registros en 30 días para la marca líder en México.',
    year: '2025',
    industry: 'Consumo masivo',
    services: ['Prototipado Ultra-Rápido', 'Vibe Coding', 'UX Design', 'Gamificación'],
    challenge:
      'Maruchan MX, líder en el mercado de sopas instantáneas en México, necesitaba una estrategia digital para su gran promoción de invierno 2025. El reto era doble: incentivar la compra física de producto y transformar esa transacción en una experiencia digital divertida, sin las fricciones típicas de los formularios de registro interminables que suelen matar la participación.',
    solutionIntro:
      'En colaboración con la agencia de desarrollo Techies & Beyond, aplicamos un enfoque de Prototipado Ultra-Rápido.',
    solutionItems: [
      {
        title: 'Vibe Coding',
        description:
          'Utilizamos un flujo de trabajo impulsado por IA para generar la primera versión funcional del minigame en menos de 5 días. Esto nos permitió "sentir" la mecánica de juego —romper cubos de hielo sobre una barra transportadora— y calibrar la dificultad y el sistema de puntajes en tiempo real.',
      },
      {
        title: 'UX de Baja Fricción',
        description:
          'Diseñamos un flujo de registro y carga de códigos de producto extremadamente simple, permitiendo que el usuario pasara de la compra al juego en cuestión de segundos.',
      },
      {
        title: 'Lanzamiento Récord',
        description:
          'Desde el primer boceto hasta la plataforma final completamente funcional, el proceso tomó menos de 30 días.',
      },
    ],
    outcomes: [
      { value: '26,278', label: 'Registros únicos' },
      { value: '33,410', label: 'Partidas jugadas' },
      { value: '<30 días', label: 'De boceto a plataforma' },
      { value: '#1', label: 'Campaña del año 2025' },
    ],
    continuity:
      'Este fue el quinto proyecto consecutivo para la marca durante 2025. La capacidad de Row Quintero Studio para actuar como una célula de diseño y estrategia ágil permitió que Maruchan lanzara 5 promociones exitosas en un solo año. Actualmente, nuestra alianza continúa activa para los retos de 2026, operando bajo la misma filosofía de impacto constante y ejecución certera.',
    gallery: ['/portada-rompe-el-hielo.jpg', '/Sala Estudio.jpg', '/escritorio-estudio.jpg'],
  },
  {
    slug: 'grupo-sanfer',
    client: 'Grupo Sanfer',
    tag: 'Sitio Web Corporativo',
    tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    image: '/portada-proyecto sanfer.jpg',
    metric: 'AA + AAA',
    metricLabel: 'Accesibilidad HearColors',
    headline: 'Transformación Corporativa para Grupo Sanfer',
    result: 'Reingeniería Corporativa: De WordPress abandonado a ecosistema digital AA/AAA certificado.',
    year: '2024',
    industry: 'Farmacéutica',
    services: ['Arquitectura de Información', 'CMS + CRM', 'Accesibilidad AA/AAA', 'UX Strategy', 'Formularios Inteligentes'],
    challenge:
      'Grupo Sanfer, uno de los corporativos farmacéuticos más importantes de México con alcance internacional, enfrentaba un problema común en las grandes organizaciones: una web estática, desactualizada y atrapada en un WordPress inconcluso por años. La burocracia interna y las limitaciones del equipo de TI impedían la agilidad. La web no proyectaba la autoridad del grupo, la experiencia de usuario era nula y, fundamentalmente, no cumplía ningún objetivo de negocio. Era un gasto, no un activo.',
    solutionIntro:
      'Nuestra intervención no fue un simple "rediseño", fue una reestructuración profunda de su presencia digital:',
    solutionItems: [
      {
        title: 'Arquitectura de Información Cohesiva',
        description:
          'Organizamos años de contenido disperso —historia, más de 10 unidades de negocio, portafolio de proyectos, Fundación Sanfer y exportaciones— en una navegación intuitiva y profesional.',
      },
      {
        title: 'Centro de Mando (CMS + CRM)',
        description:
          'Eliminamos la dependencia de TI creando un panel de administración a medida. Implementamos un sistema de gestión de contenidos y relaciones con clientes, integrando analíticos y apps de envío de correos.',
      },
      {
        title: 'Canalización Inteligente',
        description:
          'Diseñamos un sistema de formularios con más de 10 casos de uso que dirigen automáticamente las solicitudes a las áreas correspondientes, optimizando la respuesta corporativa.',
      },
      {
        title: 'Accesibilidad Certificada',
        description:
          'Llevamos la web a estándares de élite, obteniendo la certificación HearColors con niveles de accesibilidad AA y AAA, asegurando una experiencia inclusiva a nivel global.',
      },
    ],
    outcomes: [
      { value: 'AA + AAA', label: 'Certificación HearColors de accesibilidad' },
      { value: '+10', label: 'Unidades de negocio integradas en una navegación' },
      { value: '+10', label: 'Formularios inteligentes con enrutamiento automático' },
      { value: '24/7', label: 'Activo de captación, ventas y relaciones públicas' },
    ],
    continuity:
      'Tras el lanzamiento, la relación evolucionó de un proyecto puntual a una alianza estratégica. Durante varios meses adicionales, trabajamos bajo un esquema de mejora continua, optimizando la experiencia del usuario (UX) tanto en el sitio público como en el centro de control, asegurando que el activo se mantuviera a la vanguardia.',
    gallery: ['/portada-proyecto sanfer.jpg', '/row-45.jpg', '/Sala Estudio.jpg'],
  },
  {
    slug: 'avilez-pr',
    client: 'Avilez PR',
    tag: 'Branding + Web',
    tagColor: 'text-accent-primary bg-accent-primary/10 border-accent-primary/20',
    image: '/portada-avilez.jpg',
    metric: 'Día 1',
    metricLabel: 'Primer lead internacional',
    headline: 'De la Improvisación al Impacto Internacional: El Caso Avilez PR',
    result: 'Autoridad Global: Estrategia de marca que generó leads internacionales desde el día 1.',
    year: '2024',
    industry: 'Relaciones Públicas',
    services: ['Branding', 'Identidad Visual', 'Diseño Web', 'SEO Técnico', 'Webflow', 'IA Estratégica'],
    challenge:
      'Majo Avilez, fundadora de Avilez PR, ayuda a artistas emergentes y alternativos extranjeros a conquistar la escena mediática en México. Como toda emprendedora audaz, Majo intentó construir su propia web; sin embargo, se enfrentó al "muro" de la falta de fundamentos de diseño. El resultado fue una versión sencilla que no proyectaba la calidad de su trabajo, haciéndole perder tiempo y afectando la confianza de sus clientes potenciales. Su marca necesitaba dejar de "intentar" y empezar a marcar a fuego su presencia en la industria.',
    solutionIntro:
      'Para este proyecto, aplicamos la versión más avanzada del proceso de Row Quintero Studio, integrando inteligencia artificial no para reemplazar el diseño, sino para elevar la precisión estratégica:',
    solutionItems: [
      {
        title: 'Inteligencia de Datos',
        description:
          'Tras un kickoff y un brief profundo, utilizamos Gemini para transcribir y analizar objetivos, visiones y riesgos.',
      },
      {
        title: 'El "Custom Gem"',
        description:
          'Creamos un asistente de IA personalizado con todo el ADN de Avilez PR, el cual actuó como un co-director de arte, acompañando cada decisión de diseño para asegurar una coherencia total con los perfiles de cliente ideal y el "Brand Flower" de la marca.',
      },
      {
        title: 'Diseño de Alta Velocidad (Relume + Figma)',
        description:
          'Utilizamos Relume para estructurar el mapa del sitio y wireframes con copywriting estratégico de forma casi instantánea. Esto permitió refinar los gráficos y componentes en Figma con una base sólida, validando el diseño final antes de tocar una sola línea de código.',
      },
      {
        title: 'Desarrollo Ágil en Webflow',
        description:
          'Sincronizamos el diseño directamente con Webflow para una maquetación fluida. Optimizamos el SEO técnico, incluimos animaciones sutiles y, como toque de vanguardia, agregamos un archivo .txt amigable para buscadores de IA, preparando a la marca para el futuro de la navegación.',
      },
    ],
    outcomes: [
      { value: 'Día 1', label: 'Primera solicitud de una banda alemana' },
      { value: 'Brand Kit', label: 'Identidad completa: colores, tipografía y templates' },
      { value: 'Hoja de ruta', label: 'Claridad estratégica para escalar el sitio' },
      { value: 'RQ Partner', label: 'Alianza activa Medios + Diseño' },
    ],
    continuity:
      'Lo que comenzó como un proyecto web se ha transformado en una alianza a largo plazo. Actualmente, Avilez PR y Row Quintero Studio colaboran para ofrecer paquetes integrales de Medios + Diseño, asegurando que los artistas no solo tengan presencia en prensa, sino una identidad digital que respalde su talento bajo el esquema de RQ Partner.',
    gallery: ['/portada-avilez.jpg', '/row-terraza.jpg', '/escritorio-estudio.jpg'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
