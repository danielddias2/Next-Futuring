import { SiteContent } from './types';
import { INVESTMENT_TIERS_BY_LOCALE } from '@/lib/i18n/types';

export const fr: SiteContent = {
  meta: {
    title: 'NEXT FUTURING | Studio de Technologie Créative & Expériences Digitales',
    description:
      'Next Futuring est un studio d\'élite en technologie créative et image de marque digitale. Nous concevons des plateformes immersives qui rendent les marques incontournables.',
    ogTitle: 'NEXT FUTURING — Conçu pour ce qui vient',
    ogDescription:
      'Expériences digitales conçues pour rendre les marques ambitieuses impossibles à ignorer. Direction artistique éditoriale et haute vitesse.',
    keywords: [
      'Next Futuring',
      'Studio Technologie Créative',
      'Agence Digitale',
      'Design Web Haute Conversion',
      'Next.js Studio',
      'Direction Artistique Éditoriale',
    ],
  },
  nav: {
    work: 'PROJETS',
    services: 'SERVICES',
    about: 'À PROPOS',
    contact: 'CONTACT',
    cta: 'LANCER UN PROJET',
    language: 'LANGUE',
    menuOpen: 'OUVRIR LE MENU',
    menuClose: 'FERMER LE MENU',
  },
  hero: {
    eyebrow: 'TECHNOLOGIE CRÉATIVE // SYSTÈMES DE MARQUE // 2026',
    titleLine1: 'VOTRE ENTREPRISE.',
    titleLine2: 'CONÇUE POUR',
    titleHighlight: 'LE FUTUR.',
    supportingCopy:
      'Des expériences digitales conçues pour rendre les marques ambitieuses impossibles à ignorer.',
    primaryCta: 'LANCER UN PROJET',
    secondaryCta: 'DÉCOUVRIR NOS PROJETS',
    badge: 'CLIENTS SÉLECTIONNÉS // Q4 2026',
    metrics: [
      {
        value: '100%',
        label: 'CODE SUR MESURE',
        detail: 'Zéro template générique ni fardeau inutile',
      },
      {
        value: '< 0.3s',
        label: 'LATENCE EDGE',
        detail: 'Infrastructure globale serverless propulsée par Vercel',
      },
      {
        value: '+184%',
        label: 'CONVERSION MOYENNE',
        detail: 'Progression mesurée sur les parcours de nos clients',
      },
    ],
  },
  manifesto: {
    kicker: 'PHILOSOPHIE // 01',
    headlinePrimary: 'NOUS NE CRÉONS PAS DE SIMPLES SITES.',
    headlineAccent: 'NOUS BÂTISSONS DES AVANTAGES COMPÉTITIFS MAJEURS.',
    paragraph1:
      'La plupart des agences livrent des templates standardisés et interchangeables. Nous refusons l’ordinaire. Next Futuring opère à la jonction entre direction artistique éditoriale et ingénierie logicielle d’avant-garde.',
    paragraph2:
      'Chaque échelle typographique, coupe diagonale et milliseconde de chargement est calibrée pour asseoir votre autorité sur votre marché.',
    tags: ['DIRECTION ARTISTIQUE ÉDITORIALE', 'VITESSE RADICALE', 'PSYCHOLOGIE DE CONVERSION'],
  },
  selectedWork: {
    kicker: 'PROJETS CHOISIS // 2025–2026',
    headline: 'IMPACT COMMERCIAL DÉMONTRÉ',
    subheadline:
      'Une sélection de plateformes digitales sur mesure conçues pour des leaders audacieux.',
    viewAll: 'VOIR TOUS LES PROJETS',
    projects: [
      {
        id: 'aura-wealth',
        title: 'AURA BIOMETRIC WEALTH',
        client: 'AURA CAPITAL',
        category: 'FINTECH // PLATEFORME DIGITALE',
        year: '2026',
        impact: '+$314M ACTIFS SÉCURISÉS',
        description:
          'Terminal de gestion patrimoniale dark mode avec télémétrie biométrique instantanée et typographie éditoriale de prestige.',
        tags: ['NEXT.JS 15', 'TAILWIND', 'DONNÉES TEMPS RÉEL', 'ESTHÉTIQUE DARK'],
        image: '/brand/work-aura.jpg',
      },
      {
        id: 'kinetic-hypercar',
        title: 'KINETIC AUTONOMOUS HYPERCAR',
        client: 'KINETIC MOTORS',
        category: 'AUTOMOBILE // EXPÉRIENCE 3D',
        year: '2026',
        impact: '3 400+ PRÉCOMMANDES EN 72H',
        description:
          'Présentation interactive avec affichage tête haute, visualisations aérodynamiques 3D et parcours de précommande haut de gamme.',
        tags: ['TECHNOLOGIE CRÉATIVE', '3D INTERACTIF', 'TUNNEL RÉSERVATION', 'TÉLÉMÉTRIE NÉON'],
        image: '/brand/work-kinetic.jpg',
      },
    ],
  },
  capabilities: {
    kicker: 'COMPÉTENCES CLÉS // 02',
    headline: 'DISCIPLINES INTÉGRÉES.',
    subheadline:
      'Nous supprimons la rupture entre direction artistique audacieuse et exécution technique rigoureuse.',
    items: [
      {
        num: '01',
        title: 'PLATEFORMES WEB HAUTE CONVERSION',
        accentTitle: 'FLAGSHIPS DIGITAUX',
        desc: 'Sites sur mesure Next.js conçus pour surclasser la concurrence en réactivité, SEO et impact commercial.',
        deliverables: [
          'Design 100% Responsive et Fluide',
          'Déploiement Global Vercel Edge',
          'Vitesse de Chargement Inférieure à 1s',
          'Architecture Orientée Résultats',
        ],
      },
      {
        num: '02',
        title: 'DIRECTION ARTISTIQUE ÉDITORIALE & 3D',
        accentTitle: 'IMAGE DE MARQUE',
        desc: 'Identités graphiques percutantes, typographies condensées et éléments 3D cinématographiques pour affirmer votre statut.',
        deliverables: [
          'Hiérarchie Typographique Signature',
          'Visuels Dark Mode Immersifs',
          'Micro-interactions Sobres et Précises',
          'Direction de Campagne Publicitaire',
        ],
      },
      {
        num: '03',
        title: 'INTERNATIONALISATION ET EDGE',
        accentTitle: 'ENVERGURE GLOBALE',
        desc: 'Détection du pays sans latence, gestion multilingue optimisée pour le SEO et liberté absolue pour l’utilisateur.',
        deliverables: [
          'Détection Géolocalisée Côté Serveur',
          'Architecture Multilingue SEO-Friendly',
          'Adaptation Culturelle et Monétaire',
          'Changement de Langue Instantané',
        ],
      },
      {
        num: '04',
        title: 'SYSTÈMES DE CONVERSION DIRECTE',
        accentTitle: 'ENGAGEMENT IMMÉDIAT',
        desc: 'Intégration fluide vers WhatsApp professionnel pour qualifier et convertir rapidement les prospects à forte valeur.',
        deliverables: [
          'Canal de Conversion Direct WhatsApp',
          'Qualification Accélérée des Demandes',
          'Suivi Événementiel et Analytics',
          'Support et Fiabilité Totale',
        ],
      },
    ],
  },
  technologyStandard: {
    kicker: 'EXIGENCE TECHNIQUE // 03',
    headline: 'LE STANDARD SANS COMPROMIS.',
    subheadline: 'Bâti sur l’Edge moderne. Sans lourdeurs technologiques dépassées.',
    pillars: [
      {
        title: 'VITESSE RADICALE',
        metric: '99/100',
        metricLabel: 'SCORE LIGHTHOUSE',
        desc: 'Rendu instantané, assets optimisés et zéro décalage de mise en page.',
      },
      {
        title: 'EDGE INTELLIGENCE',
        metric: '< 50ms',
        metricLabel: 'TEMPS DE RÉPONSE',
        desc: 'Distribution ultra-proche de chaque visiteur via les nœuds serveurs mondiaux.',
      },
      {
        title: 'CODE PROPRIÉTAIRE',
        metric: '100%',
        metricLabel: 'VOTRE ACTIF',
        desc: 'Pleine propriété du code source, sans dépendances capturantes.',
      },
    ],
  },
  ctaSection: {
    kicker: 'FRANCHIR LE CAP // 04',
    headline: 'VOTRE MARQUE AU NIVEAU SUPÉRIEUR.',
    highlight: 'BÂTISSONS LE FUTUR.',
    copy: 'Ne vous contentez plus de modèles impersonnels qui noient votre marque dans la masse. Rejoignez Next Futuring pour déployer une vitrine digitale d’exception.',
    primaryButton: 'LANCER UN PROJET',
    whatsappButton: 'DISCUTER SUR WHATSAPP',
    whatsappSubtext: 'Échangez directement avec les directeurs fondateurs // Sans intermédiaire',
    guaranteeBadge: 'QUALITÉ, SUPPORT ET LIVRAISON RESPECTÉE GARANTIS',
    investmentLabel: "Fourchette d'Investissement Cible",
    investmentPrefix: 'Investissement',
    whatsappGreeting: "Bonjour équipe Next Futuring, je souhaite discuter d'un projet digital à fort impact pour ma marque.",
    investmentTiers: INVESTMENT_TIERS_BY_LOCALE['fr'],
  },
  footer: {
    tagline: 'DES IDÉES QUI PRODUISENT DES RÉSULTATS MESURABLES.',
    headquarters: 'SÃO PAULO · NEW YORK · LONDRES',
    timezones: 'BRT [UTC-3] // EST [UTC-5] // GMT [UTC+0]',
    navigationTitle: 'NAVIGATION',
    legalTitle: 'CADRE LÉGAL & SYSTÈME',
    allRightsReserved: 'NEXT FUTURING. TOUS DROITS RÉSERVÉS.',
    status: 'SYSTÈMES OPÉRATIONNELS // CLIENTS SÉLECTIONNÉS 2026',
    terms: 'CONDITIONS GÉNÉRALES',
    privacy: 'POLITIQUE DE CONFIDENTIALITÉ',
  },
};
