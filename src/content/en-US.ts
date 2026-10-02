import { SiteContent } from './types';
import { INVESTMENT_TIERS_BY_LOCALE } from '@/lib/i18n/types';

export const enUS: SiteContent = {
  meta: {
    title: 'NEXT FUTURING | Creative Technology Studio & High-Impact Digital Experiences',
    description:
      'Next Futuring is an elite creative technology and digital brand studio. We build editorial digital platforms designed to make ambitious brands impossible to ignore.',
    ogTitle: 'NEXT FUTURING — Built for What\'s Next',
    ogDescription:
      'Digital experiences designed to make ambitious brands impossible to ignore. Editorial art direction, high-velocity engineering, and commercial impact.',
    keywords: [
      'Next Futuring',
      'Creative Technology Studio',
      'Digital Agency',
      'High-Conversion Web Design',
      'Next.js Studio',
      'Editorial Art Direction',
    ],
  },
  nav: {
    work: 'WORK',
    services: 'SERVICES',
    about: 'ABOUT',
    contact: 'CONTACT',
    cta: 'START A PROJECT',
    language: 'LANGUAGE',
    menuOpen: 'OPEN MENU',
    menuClose: 'CLOSE MENU',
  },
  hero: {
    eyebrow: 'CREATIVE TECHNOLOGY // BRAND SYSTEMS // 2026',
    titleLine1: 'YOUR BUSINESS.',
    titleLine2: 'BUILT FOR',
    titleHighlight: "WHAT'S NEXT.",
    supportingCopy:
      'Digital experiences designed to make ambitious brands impossible to ignore.',
    primaryCta: 'START A PROJECT',
    secondaryCta: 'EXPLORE OUR WORK',
    badge: 'ACCEPTING SELECT CLIENTS // Q4 2026',
    metrics: [
      {
        value: '100%',
        label: 'BESPOKE CODE',
        detail: 'Zero generic templates or drag-and-drop bloat',
      },
      {
        value: '< 0.3s',
        label: 'EDGE LATENCY',
        detail: 'Global serverless infrastructure via Vercel',
      },
      {
        value: '+184%',
        label: 'AVG CONVERSION',
        detail: 'Measured client uplift across primary funnels',
      },
    ],
  },
  manifesto: {
    kicker: 'AGENCY PHILOSOPHY // 01',
    headlinePrimary: "WE DON'T BUILD WEBSITES.",
    headlineAccent: 'WE ENGINEER UNFAIR COMPETITIVE ADVANTAGES.',
    paragraph1:
      'Most agencies deliver interchangeable templates drowned in identical SaaS clichés. We reject complacency. Next Futuring operates where high-fashion editorial art direction collides with bleeding-edge web engineering.',
    paragraph2:
      'Every typography scale, diagonal crop, and millisecond of latency is calculated to elevate your perceived market authority and transform transient visitors into committed clients.',
    tags: ['EDITORIAL ART DIRECTION', 'RADICAL PERFORMANCE', 'HIGH-CONVERSION PSYCHOLOGY'],
  },
  selectedWork: {
    kicker: 'SELECTED CASES // 2025–2026',
    headline: 'PROVEN COMMERCIAL IMPACT',
    subheadline:
      'A cross-section of bespoke digital flagships built for ambitious industry leaders.',
    viewAll: 'VIEW FULL ARCHIVE',
    projects: [
      {
        id: 'aura-wealth',
        title: 'AURA BIOMETRIC WEALTH',
        client: 'AURA CAPITAL',
        category: 'FINTECH // DIGITAL PLATFORM',
        year: '2026',
        impact: '+$314M ASSETS SECURED',
        description:
          'Next-generation dark-mode wealth terminal and client-facing digital flagship. Engineered with sub-second real-time biometric telemetry and luxury editorial typography.',
        tags: ['NEXT.JS 15', 'TAILWIND', 'HIGH-FREQUENCY DATA', 'DARK AESTHETICS'],
        image: '/brand/work-aura.jpg',
      },
      {
        id: 'kinetic-hypercar',
        title: 'KINETIC AUTONOMOUS HYPERCAR',
        client: 'KINETIC MOTORS',
        category: 'AUTOMOTIVE // 3D BRAND EXPERIENCE',
        year: '2026',
        impact: '3,400+ PRE-ORDERS IN 72H',
        description:
          'High-stakes digital showcase with interactive HUD telemetry, aerodynamics visualization, and high-conversion reservation flow for a radical electric hypercar.',
        tags: ['CREATIVE TECH', 'INTERACTIVE 3D', 'PRE-ORDER FUNNEL', 'NEON TELEMETRY'],
        image: '/brand/work-kinetic.jpg',
      },
    ],
  },
  capabilities: {
    kicker: 'STRATEGIC CAPABILITIES // 02',
    headline: 'INTEGRATED DISCIPLINES.',
    subheadline:
      'We eliminate the handoff gap between strategic art direction and uncompromising technical execution.',
    items: [
      {
        num: '01',
        title: 'HIGH-CONVERSION DIGITAL FLAGSHIPS',
        accentTitle: 'WEB PLATFORMS',
        desc: 'Bespoke Next.js web platforms built to outperform competitors in speed, SEO, aesthetics, and conversion velocity.',
        deliverables: [
          'Full Responsive Architecture',
          'Vercel Global Edge Deployment',
          'Sub-second Core Web Vitals',
          'Conversion-Engineered Journeys',
        ],
      },
      {
        num: '02',
        title: 'EDITORIAL ART DIRECTION & 3D SYSTEMS',
        accentTitle: 'BRAND IDENTITY',
        desc: 'Bold graphic identities, oversized condensed typography systems, and photographic 3D assets that assert unquestioned dominance in your category.',
        deliverables: [
          'Custom Typography Hierarchy',
          'Dark-Mode Cinematic Visuals',
          'Motion Design & Restrained Micro-interactions',
          'Advertising Campaign Art Direction',
        ],
      },
      {
        num: '03',
        title: 'INTERNATIONALIZATION & LOCALIZED SCALE',
        accentTitle: 'GLOBAL EXPANSION',
        desc: 'Zero-latency edge country detection, localized content layers, and multi-currency frameworks that adapt naturally to every global visitor.',
        deliverables: [
          'Serverless Geolocation Routing',
          'Zero SEO Penalty Multi-language Architecture',
          'Localized Copy & Visual Alignment',
          'Non-Trapping User Locale Freedom',
        ],
      },
      {
        num: '04',
        title: 'HIGH-VELOCITY CONVERSION SYSTEMS',
        accentTitle: 'COMMERCIAL IMPACT',
        desc: 'Direct WhatsApp integration, frictionless lead capture, and behavioral conversion triggers that turn high-value traffic into qualified conversations.',
        deliverables: [
          'Direct-to-WhatsApp Closing Funnels',
          'Real-time Qualified Lead Routing',
          'Analytics & Event Telemetry',
          'Continuous Performance Hardening',
        ],
      },
    ],
  },
  technologyStandard: {
    kicker: 'TECHNICAL RIGOR // 03',
    headline: 'THE ZERO-COMPROMISE STACK.',
    subheadline: 'Engineered on the modern edge. No legacy baggage. No generic page builders.',
    pillars: [
      {
        title: 'PERFORMANCE FIRST',
        metric: '99/100',
        metricLabel: 'LIGHTHOUSE TARGET',
        desc: 'Lightweight asset delivery, zero runtime layout shifts, and instant server-side renders.',
      },
      {
        title: 'EDGE INTELLIGENCE',
        metric: '< 50ms',
        metricLabel: 'GLOBAL TTFB',
        desc: 'Server-side geolocation and localization rendered on the closest edge node to the visitor.',
      },
      {
        title: 'BESPOKE ART DIRECTION',
        metric: '100%',
        metricLabel: 'OWNABLE IDENTITY',
        desc: 'Authorial typography, neon lime accents, and negative space crafted specifically for Next Futuring.',
      },
    ],
  },
  ctaSection: {
    kicker: 'TAKE THE LEAP // 04',
    headline: "YOUR BRAND ON THE NEXT LEVEL.",
    highlight: "LET'S BUILD WHAT'S NEXT.",
    copy: 'Stop settling for generic templates that render your business invisible. Partner with Next Futuring to build an authoritative digital presence that commands attention and accelerates revenue.',
    primaryButton: 'START A PROJECT',
    whatsappButton: 'CHAT ON WHATSAPP',
    whatsappSubtext: 'Direct conversation with our principal partners // No sales middlemen',
    guaranteeBadge: 'GUARANTEED DELIVERY ON SCHEDULE // FULL CODE OWNERSHIP',
    investmentLabel: 'Target Investment Range',
    investmentPrefix: 'Investment',
    whatsappGreeting: 'Hello Next Futuring team, I would like to discuss a high-impact digital project for my brand.',
    investmentTiers: INVESTMENT_TIERS_BY_LOCALE['en-US'],
  },
  footer: {
    tagline: 'IDEAS THAT GENERATE MEASURABLE RESULTS.',
    headquarters: 'SÃO PAULO · NEW YORK · LONDON',
    timezones: 'BRT [UTC-3] // EST [UTC-5] // GMT [UTC+0]',
    navigationTitle: 'NAVIGATION',
    legalTitle: 'LEGAL & ARCHITECTURE',
    allRightsReserved: 'NEXT FUTURING. ALL RIGHTS RESERVED.',
    status: 'SYSTEMS ONLINE // ACCEPTING SELECT Q4-Q1 ENGAGEMENTS',
    terms: 'TERMS OF ENGAGEMENT',
    privacy: 'PRIVACY POLICY',
  },
};
