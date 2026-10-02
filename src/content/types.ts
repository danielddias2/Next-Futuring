export interface ProjectCase {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  impact: string;
  description: string;
  tags: string[];
  image: string;
}

export interface CapabilityItem {
  num: string;
  title: string;
  accentTitle: string;
  desc: string;
  deliverables: string[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    keywords: string[];
  };
  nav: {
    work: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
    language: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleHighlight: string;
    supportingCopy: string;
    primaryCta: string;
    secondaryCta: string;
    badge: string;
    metrics: Array<{
      value: string;
      label: string;
      detail: string;
    }>;
  };
  manifesto: {
    kicker: string;
    headlinePrimary: string;
    headlineAccent: string;
    paragraph1: string;
    paragraph2: string;
    tags: string[];
  };
  selectedWork: {
    kicker: string;
    headline: string;
    subheadline: string;
    viewAll: string;
    projects: ProjectCase[];
  };
  capabilities: {
    kicker: string;
    headline: string;
    subheadline: string;
    items: CapabilityItem[];
  };
  technologyStandard: {
    kicker: string;
    headline: string;
    subheadline: string;
    pillars: Array<{
      title: string;
      metric: string;
      metricLabel: string;
      desc: string;
    }>;
  };
  ctaSection: {
    kicker: string;
    headline: string;
    highlight: string;
    copy: string;
    primaryButton: string;
    whatsappButton: string;
    whatsappSubtext: string;
    guaranteeBadge: string;
    investmentLabel: string;
    investmentPrefix: string;
    whatsappGreeting: string;
    investmentTiers: Array<{
      id: string;
      label: string;
    }>;
  };
  footer: {
    tagline: string;
    headquarters: string;
    timezones: string;
    navigationTitle: string;
    legalTitle: string;
    allRightsReserved: string;
    status: string;
    terms: string;
    privacy: string;
  };
}
