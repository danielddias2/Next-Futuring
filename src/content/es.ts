import { SiteContent } from './types';
import { INVESTMENT_TIERS_BY_LOCALE } from '@/lib/i18n/types';

export const es: SiteContent = {
  meta: {
    title: 'NEXT FUTURING | Estudio de Tecnología Creativa y Experiencias Digitales',
    description:
      'Next Futuring es un estudio de tecnología creativa y branding digital de élite. Creamos plataformas diseñadas para hacer que las marcas ambiciosas sean imposibles de ignorar.',
    ogTitle: "NEXT FUTURING — Construido para lo que viene",
    ogDescription:
      'Experiencias digitales diseñadas para marcas ambiciosas. Dirección de arte editorial, ingeniería de alta velocidad e impacto comercial.',
    keywords: [
      'Next Futuring',
      'Estudio de Tecnología Creativa',
      'Agencia Digital',
      'Diseño Web Alta Conversión',
      'Next.js Studio',
      'Dirección de Arte Editorial',
    ],
  },
  nav: {
    work: 'PROYECTOS',
    services: 'SERVICIOS',
    about: 'NOSOTROS',
    contact: 'CONTACTO',
    cta: 'INICIAR PROYECTO',
    language: 'IDIOMA',
    menuOpen: 'ABRIR MENÚ',
    menuClose: 'CERRAR MENÚ',
  },
  hero: {
    eyebrow: 'TECNOLOGÍA CREATIVA // SISTEMAS DE MARCA // 2026',
    titleLine1: 'TU NEGOCIO.',
    titleLine2: 'CONSTRUIDO PARA',
    titleHighlight: 'LO QUE VIENE.',
    supportingCopy:
      'Experiencias digitales diseñadas para hacer que las marcas ambiciosas sean imposibles de ignorar.',
    primaryCta: 'INICIAR PROYECTO',
    secondaryCta: 'EXPLORAR PROYECTOS',
    badge: 'ACEPTANDO CLIENTES SELECCIONADOS // 2026',
    metrics: [
      {
        value: '100%',
        label: 'CÓDIGO A MEDIDA',
        detail: 'Cero plantillas genéricas ni constructores lentos',
      },
      {
        value: '< 0.3s',
        label: 'LATENCIA EN EDGE',
        detail: 'Infraestructura global serverless con Vercel',
      },
      {
        value: '+184%',
        label: 'CONVERSIÓN PROMEDIO',
        detail: 'Impacto medido en los canales de nuestros clientes',
      },
    ],
  },
  manifesto: {
    kicker: 'FILOSOFÍA DE AGENCIA // 01',
    headlinePrimary: 'NO CREAMOS SITIOS WEB COMUNES.',
    headlineAccent: 'DISEÑAMOS VENTAJAS COMPETITIVAS.',
    paragraph1:
      'La mayoría de agencias entregan plantillas descartables llenas de clichés. Rechazamos lo genérico. Next Futuring une la alta dirección de arte editorial con la ingeniería web más avanzada.',
    paragraph2:
      'Cada detalle tipográfico, corte diagonal y milisegundo de respuesta está calculado para elevar la autoridad de tu marca en el mercado.',
    tags: ['DIRECCIÓN DE ARTE EDITORIAL', 'VELOCIDAD RADICAL', 'PSICOLOGÍA DE CONVERSIÓN'],
  },
  selectedWork: {
    kicker: 'CASOS SELECCIONADOS // 2025–2026',
    headline: 'IMPACTO COMERCIAL DEMOSTRADO',
    subheadline:
      'Plataformas digitales a medida para marcas que lideran sus sectores.',
    viewAll: 'VER TODOS LOS PROYECTOS',
    projects: [
      {
        id: 'aura-wealth',
        title: 'AURA BIOMETRIC WEALTH',
        client: 'AURA CAPITAL',
        category: 'FINTECH // PLATAFORMA DIGITAL',
        year: '2026',
        impact: '+$314M ACTIVOS GESTIONADOS',
        description:
          'Terminal de gestión patrimonial en modo oscuro con telemetría biométrica instantánea y tipografía editorial de lujo.',
        tags: ['NEXT.JS 15', 'TAILWIND', 'DATOS EN TIEMPO REAL', 'ESTÉTICA DARK'],
        image: '/brand/work-aura.jpg',
      },
      {
        id: 'kinetic-hypercar',
        title: 'KINETIC AUTONOMOUS HYPERCAR',
        client: 'KINETIC MOTORS',
        category: 'AUTOMOTRIZ // EXPERIENCIA 3D',
        year: '2026',
        impact: '3.400+ RESERVAS EN 72 HORAS',
        description:
          'Showcase digital interactivo con telemetría HUD, visualización aerodinámica y flujo de reservas de alta conversión.',
        tags: ['TECNOLOGÍA CREATIVA', '3D INTERACTIVO', 'EMBUDO DE RESERVAS', 'TELEMETRÍA NEÓN'],
        image: '/brand/work-kinetic.jpg',
      },
    ],
  },
  capabilities: {
    kicker: 'CAPACIDADES ESTRATÉGICAS // 02',
    headline: 'DISCIPLINAS INTEGRADAS.',
    subheadline:
      'Eliminamos la distancia entre dirección de arte audaz y ejecución técnica impecable.',
    items: [
      {
        num: '01',
        title: 'PLATAFORMAS WEB DE ALTA CONVERSIÓN',
        accentTitle: 'FLAGSHIPS DIGITALES',
        desc: 'Webs a medida con Next.js preparadas para superar a tus competidores en velocidad, SEO y conversión.',
        deliverables: [
          'Arquitectura 100% Responsiva',
          'Despliegue Global en Vercel Edge',
          'Rendimiento Subsegundo',
          'Diseño Orientado a Resultados',
        ],
      },
      {
        num: '02',
        title: 'DIRECCIÓN DE ARTE EDITORIAL Y 3D',
        accentTitle: 'IDENTIDAD VISUAL',
        desc: 'Sistemas tipográficos contundentes, visuales cinematográficos dark y modelos 3D que consolidan el liderazgo de tu marca.',
        deliverables: [
          'Jerarquía Tipográfica Editorial',
          'Estética Dark de Alta Gama',
          'Microinteracciones Sutiles',
          'Dirección de Campañas Digitales',
        ],
      },
      {
        num: '03',
        title: 'INTERNACIONALIZACIÓN Y EDGE COMPUTING',
        accentTitle: 'ESCALA GLOBAL',
        desc: 'Detección inteligente de país sin latencia y soporte multilingüe sin penalización de posicionamiento orgánico.',
        deliverables: [
          'Detección en Servidor Edge',
          'Arquitectura Multilingüe SEO-Friendly',
          'Adaptación de Monedas y Textos',
          'Libertad Total de Cambio de Idioma',
        ],
      },
      {
        num: '04',
        title: 'EMBUDOS DE CONVERSIÓN DIRECTA',
        accentTitle: 'CONVERSIÓN COMERCIAL',
        desc: 'Conexión estratégica a WhatsApp comercial y reducción de fricción para convertir visitantes en clientes de alto valor.',
        deliverables: [
          'Canal de Conversión WhatsApp',
          'Captura Inmediata de Oportunidades',
          'Seguimiento y Telemetría',
          'Soporte y Garantía Total',
        ],
      },
    ],
  },
  technologyStandard: {
    kicker: 'RIGOR TÉCNICO // 03',
    headline: 'EL ESTÁNDAR SIN CONCESIONES.',
    subheadline: 'Construido en el edge moderno. Sin ataduras del pasado.',
    pillars: [
      {
        title: 'VELOCIDAD SUPREMA',
        metric: '99/100',
        metricLabel: 'LIGHTHOUSE',
        desc: 'Carga instantánea, sin saltos de contenido y máxima estabilidad.',
      },
      {
        title: 'INTELIGENCIA DISTRIBUIDA',
        metric: '< 50ms',
        metricLabel: 'TIEMPO DE RESPUESTA',
        desc: 'Servidores edge cercanos al usuario en cualquier rincón del mundo.',
      },
      {
        title: 'PROPIEDAD TOTAL',
        metric: '100%',
        metricLabel: 'DEL CÓDIGO',
        desc: 'Sin suscripciones ocultas ni restricciones. El código te pertenece.',
      },
    ],
  },
  ctaSection: {
    kicker: 'DA EL SIGUIENTE PASO // 04',
    headline: 'TU MARCA AL SIGUIENTE NIVEL.',
    highlight: 'CREEMOS EL FUTURO.',
    copy: 'Deja atrás las plantillas genéricas que hacen invisible a tu empresa. Asóciate con Next Futuring para construir una presencia digital que cautiva y genera ingresos reales.',
    primaryButton: 'INICIAR PROYECTO',
    whatsappButton: 'HABLAR POR WHATSAPP',
    whatsappSubtext: 'Conversación directa con los directores // Sin intermediarios comerciales',
    guaranteeBadge: 'CALIDAD, SOPORTE Y ENTREGA PUNTUAL GARANTIZADOS',
    investmentLabel: 'Rango de Inversión Estimada',
    investmentPrefix: 'Inversión',
    whatsappGreeting: 'Hola equipo Next Futuring, me gustaría conversar sobre un proyecto digital de alto impacto para mi marca.',
    investmentTiers: INVESTMENT_TIERS_BY_LOCALE['es'],
  },
  footer: {
    tagline: 'IDEAS QUE GENERAN RESULTADOS MEDIBLES.',
    headquarters: 'SÃO PAULO · NUEVA YORK · LONDRES',
    timezones: 'BRT [UTC-3] // EST [UTC-5] // GMT [UTC+0]',
    navigationTitle: 'NAVEGACIÓN',
    legalTitle: 'LEGAL Y TECNOLOGÍA',
    allRightsReserved: 'NEXT FUTURING. TODOS LOS DERECHOS RESERVADOS.',
    status: 'SISTEMAS ONLINE // PROYECTOS SELECCIONADOS 2026',
    terms: 'TÉRMINOS DE SERVICIO',
    privacy: 'POLÍTICA DE PRIVACIDAD',
  },
};
