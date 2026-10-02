import { SiteContent } from './types';
import { INVESTMENT_TIERS_BY_LOCALE } from '@/lib/i18n/types';

export const ptBR: SiteContent = {
  meta: {
    title: 'NEXT FUTURING | Studio de Tecnologia Criativa & Sites de Alto Padrão',
    description:
      'Next Futuring é um estúdio de tecnologia criativa e branding digital de elite. Criamos sites modernos, rápidos e estratégicos para transformar visitantes em clientes.',
    ogTitle: 'NEXT FUTURING — Seu Negócio no Digital de Verdade',
    ogDescription:
      'Sites modernos, rápidos e estratégicos para transformar visitantes em clientes. Direção de arte editorial, performance radical e foco em resultados.',
    keywords: [
      'Next Futuring',
      'Criação de Sites Profissionais',
      'Studio de Tecnologia Criativa',
      'Agência Digital',
      'Sites Rápidos Next.js',
      'Direção de Arte Publicitária',
    ],
  },
  nav: {
    work: 'PROJETOS',
    services: 'SERVIÇOS',
    about: 'SOBRE',
    contact: 'CONTATO',
    cta: 'INICIAR PROJETO',
    language: 'IDIOMA',
    menuOpen: 'ABRIR MENU',
    menuClose: 'FECHAR MENU',
  },
  hero: {
    eyebrow: 'TECNOLOGIA CRIATIVA // DIREÇÃO DE ARTE // 2026',
    titleLine1: 'SEU NEGÓCIO.',
    titleLine2: 'CONSTRUÍDO PARA',
    titleHighlight: 'O PRÓXIMO NÍVEL.',
    supportingCopy:
      'Sites modernos, rápidos e estratégicos para transformar visitantes em clientes e tornar sua marca impossível de ignorar.',
    primaryCta: 'INICIAR PROJETO',
    secondaryCta: 'CONHECER PROJETOS',
    badge: 'ACEITANDO CLIENTES SELECIONADOS // 2026',
    metrics: [
      {
        value: '100%',
        label: 'CÓDIGO SOB MEDIDA',
        detail: 'Zero templates genéricos ou construtores pesados',
      },
      {
        value: '< 0.3s',
        label: 'LATÊNCIA NA BORDA',
        detail: 'Infraestrutura global serverless via Vercel Edge',
      },
      {
        value: '+184%',
        label: 'AUMENTO DE CONVERSÃO',
        detail: 'Média de impacto comercial nos funis de clientes',
      },
    ],
  },
  manifesto: {
    kicker: 'NOSSA FILOSOFIA // 01',
    headlinePrimary: 'NÃO FAZEMOS APENAS SITES.',
    headlineAccent: 'CONSTRUÍMOS VANTAGENS COMPETITIVAS INJUSTAS.',
    paragraph1:
      'A maioria das agências entrega templates descartáveis copiados de fórmulas genéricas de SaaS. Nós rejeitamos o comum. A Next Futuring opera na fusão entre direção de arte editorial de alto padrão e engenharia de software de ponta.',
    paragraph2:
      'Cada escolha tipográfica, corte diagonal e milissegundo de carregamento é desenhado para posicionar seu negócio como autoridade incontestável no mercado.',
    tags: ['DIREÇÃO DE ARTE EDITORIAL', 'VELOCIDADE MÁXIMA', 'PSICOLOGIA DE CONVERSÃO'],
  },
  selectedWork: {
    kicker: 'CASOS SELECIONADOS // 2025–2026',
    headline: 'IMPACTO COMERCIAL COMPROVADO',
    subheadline:
      'Uma amostra de plataformas digitais exclusivas projetadas para líderes de mercado.',
    viewAll: 'VER TODOS OS PROJETOS',
    projects: [
      {
        id: 'aura-wealth',
        title: 'AURA BIOMETRIC WEALTH',
        client: 'AURA CAPITAL',
        category: 'FINTECH // PLATAFORMA DIGITAL',
        year: '2026',
        impact: '+$314M EM ATIVOS PROTEGIDOS',
        description:
          'Terminal de gestão patrimonial e presença digital institucional de luxo. Desenvolvido com telemetria biométrica instantânea e tipografia refinada.',
        tags: ['NEXT.JS 15', 'TAILWIND', 'DADOS EM TEMPO REAL', 'DESIGN DARK'],
        image: '/brand/work-aura.jpg',
      },
      {
        id: 'kinetic-hypercar',
        title: 'KINETIC AUTONOMOUS HYPERCAR',
        client: 'KINETIC MOTORS',
        category: 'AUTOMOTIVO // EXPERIÊNCIA 3D',
        year: '2026',
        impact: '3.400+ RESERVAS EM 72 HORAS',
        description:
          'Apresentação digital de hipercarro elétrico com interface HUD interativa, visualização aerodinâmica 3D e fluxo de conversão de alto impacto.',
        tags: ['TECNOLOGIA CRIATIVA', '3D INTERATIVO', 'FUNIL DE RESERVAS', 'TELEMETRIA NEON'],
        image: '/brand/work-kinetic.jpg',
      },
    ],
  },
  capabilities: {
    kicker: 'CAPACIDADES ESTRATÉGICAS // 02',
    headline: 'DISCIPLINAS INTEGRADAS.',
    subheadline:
      'Eliminamos o abismo entre direção de arte impactante e execução técnica cirúrgica.',
    items: [
      {
        num: '01',
        title: 'PLATAFORMAS DIGITAIS DE ALTA CONVERSÃO',
        accentTitle: 'SITES PROFISSIONAIS',
        desc: 'Websites sob medida com Next.js que superam qualquer concorrente em velocidade, SEO, credibilidade e geração de vendas.',
        deliverables: [
          'Design 100% Responsivo e Fluido',
          'Deploy Global na Vercel Edge',
          'Carregamento Ultrarrápido (< 1s)',
          'Arquitetura Focada em Leads e Vendas',
        ],
      },
      {
        num: '02',
        title: 'DIREÇÃO DE ARTE EDITORIAL & 3D',
        accentTitle: 'IDENTIDADE DE MARCA',
        desc: 'Identidades visuais fortes, tipografia condensada de alto impacto e elementos 3D que elevam sua marca ao padrão internacional.',
        deliverables: [
          'Hierarquia Tipográfica Marcante',
          'Visuais Cinematográficos Dark Mode',
          'Microinterações Elegantes e Contidas',
          'Direção de Campanha Publicitária',
        ],
      },
      {
        num: '03',
        title: 'INTERNACIONALIZAÇÃO & ESCALA NA BORDA',
        accentTitle: 'EXPANSÃO GLOBAL',
        desc: 'Detecção de país sem latência, arquitetura multilíngue sem penalidade de SEO e flexibilidade total para o visitante escolher seu idioma.',
        deliverables: [
          'Detecção de País no Servidor',
          'Arquitetura Multilíngue SEO-Friendly',
          'Conteúdo e Moedas Adaptados',
          'Liberdade Total de Troca de Idioma',
        ],
      },
      {
        num: '04',
        title: 'SISTEMAS DE FECHAMENTO PELO WHATSAPP',
        accentTitle: 'CONVERSÃO DIRETA',
        desc: 'Integração cirúrgica com WhatsApp comercial e funis simplificados que reduzem fricção e colocam o cliente qualificado direto em contato com você.',
        deliverables: [
          'Botão WhatsApp Estratégico',
          'Encaminhamento de Mensagens Pré-formatadas',
          'Rastreamento de Origem e Leads',
          'Segurança e Estabilidade Total',
        ],
      },
    ],
  },
  technologyStandard: {
    kicker: 'RIGOR TÉCNICO // 03',
    headline: 'PADRÃO ZERO CONCESSÕES.',
    subheadline: 'Construído na ponta da tecnologia moderna. Sem gambiarras. Sem lentidão.',
    pillars: [
      {
        title: 'VELOCIDADE RADICAL',
        metric: '99/100',
        metricLabel: 'LIGHTHOUSE',
        desc: 'Sites leves, carregamento instantâneo e estabilidade garantida em qualquer conexão.',
      },
      {
        title: 'INTELIGÊNCIA NA BORDA',
        metric: '< 50ms',
        metricLabel: 'RESPOSTA DE SERVIDOR',
        desc: 'Detecção de país e entrega distribuída globalmente com servidores locais no Brasil e exterior.',
      },
      {
        title: 'AUTONOMIA E PROPRIEDADE',
        metric: '100%',
        metricLabel: 'DO CÓDIGO É SEU',
        desc: 'Sem taxas ocultas ou aprisionamento de plataforma. Você é dono total do seu ativo digital.',
      },
    ],
  },
  ctaSection: {
    kicker: 'DÊ O PRÓXIMO PASSO // 04',
    headline: 'SUA MARCA NO PRÓXIMO NÍVEL.',
    highlight: 'VAMOS CRIAR O FUTURO.',
    copy: 'Chega de sites lentos ou modelos genéricos que diminuem o valor do seu trabalho. Junte-se à Next Futuring e tenha um site profissional que converte visitantes em clientes reais.',
    primaryButton: 'INICIAR PROJETO',
    whatsappButton: 'CONVERSAR NO WHATSAPP',
    whatsappSubtext: 'Tire suas dúvidas diretamente conosco // Sem intermediários ou compromisso',
    guaranteeBadge: 'QUALIDADE, SUPORTE E ENTREGA NO PRAZO GARANTIDOS',
    investmentLabel: 'Faixa de Investimento Estimada',
    investmentPrefix: 'Investimento',
    whatsappGreeting: 'Olá equipe Next Futuring, gostaria de conversar sobre um projeto digital para minha marca.',
    investmentTiers: INVESTMENT_TIERS_BY_LOCALE['pt-BR'],
  },
  footer: {
    tagline: 'IDEIAS QUE GERAM RESULTADOS.',
    headquarters: 'SÃO PAULO · NOVA YORK · LONDRES',
    timezones: 'BRT [UTC-3] // EST [UTC-5] // GMT [UTC+0]',
    navigationTitle: 'NAVEGAÇÃO',
    legalTitle: 'LEGAL & ENGENHARIA',
    allRightsReserved: 'NEXT FUTURING. TODOS OS DIREITOS RESERVADOS.',
    status: 'SISTEMAS OPERACIONAIS // PROJETOS SELECIONADOS 2026',
    terms: 'TERMOS DE SERVIÇO',
    privacy: 'PRIVACIDADE & LGPD',
  },
};
