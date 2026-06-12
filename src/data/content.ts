import type { Lang } from '../i18n/ui';

/* ------------------------------------------------------------------ */
/*  Profile / identity                                                */
/* ------------------------------------------------------------------ */

// WhatsApp: digits only (country code + number) for the wa.me link
const WHATSAPP_NUMBER = '5491179039865';

export const profile = {
  name: 'Gabriel Mondaini',
  handle: '@mondainidev_',
  email: 'mondaini.contato@gmail.com',
  whatsappDisplay: '+54 9 11 7903-9865',
  social: {
    instagram: 'https://instagram.com/mondainidev_',
    instagramHandle: '@mondainidev_',
    github: 'https://github.com/FlowGen667',
    githubHandle: 'FlowGen667',
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
};

export const stats = [
  { value: '5+', key: 'stats.experience' },
  { value: '8+', key: 'stats.projects' },
  { value: '95+', key: 'stats.performance' },
  { value: '3', key: 'stats.languages' },
] as const;

/* ------------------------------------------------------------------ */
/*  Skills                                                            */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  /** i18n-neutral group id, label is translated inline in the component */
  id: 'frontend' | 'backend' | 'platform' | 'craft';
  label: Record<Lang, string>;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: { pt: 'Frontend', en: 'Frontend', es: 'Frontend' },
    items: ['Astro', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'WordPress'],
  },
  {
    id: 'backend',
    label: { pt: 'Backend & Dados', en: 'Backend & Data', es: 'Backend & Datos' },
    items: ['APIs', 'Supabase', 'Firebase', 'Automation', 'AI Integrations'],
  },
  {
    id: 'platform',
    label: { pt: 'Cloud & Plataforma', en: 'Cloud & Platform', es: 'Cloud & Plataforma' },
    items: ['Cloudflare', 'GitHub'],
  },
  {
    id: 'craft',
    label: { pt: 'Performance & UX', en: 'Performance & UX', es: 'Performance & UX' },
    items: ['SEO', 'Core Web Vitals', 'Performance Optimization', 'UX/UI'],
  },
];

/** Flat list used by the marquee / chips. */
export const allSkills: string[] = [
  'Astro',
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'WordPress',
  'Cloudflare',
  'Supabase',
  'Firebase',
  'APIs',
  'Automation',
  'AI Integrations',
  'SEO',
  'Core Web Vitals',
  'Performance',
  'UX/UI',
  'GitHub',
];

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */

export type ProjectTag = 'landing' | 'conversion' | 'platform' | 'tool';

export const projectTagLabels: Record<ProjectTag, Record<Lang, string>> = {
  landing: { pt: 'Landing Page', en: 'Landing Page', es: 'Landing Page' },
  conversion: { pt: 'Conversão', en: 'Conversion', es: 'Conversión' },
  platform: { pt: 'Plataforma', en: 'Platform', es: 'Plataforma' },
  tool: { pt: 'Ferramenta', en: 'Tool', es: 'Herramienta' },
};

export type Project = {
  id: string;
  title: string;
  url: string;
  tags: ProjectTag[];
  description: Record<Lang, string>;
};

export const projects: Project[] = [
  {
    id: 'summit-vinyl',
    title: 'Summit Vinyl Loureiro',
    url: 'https://vl.vinyloureiro.com/summit',
    tags: ['landing', 'conversion'],
    description: {
      pt: 'Landing page de alta conversão focada em inscrição de evento e geração de leads.',
      en: 'High-converting landing page focused on event registration and lead generation.',
      es: 'Landing page de alta conversión enfocada en registro de evento y generación de leads.',
    },
  },
  {
    id: 'desafio-estratega',
    title: 'Desafío Estratega Digital',
    url: 'https://vl.vinyloureiro.com/desafioestratega-c',
    tags: ['landing', 'conversion'],
    description: {
      pt: 'Funil de vendas e landing page de aquisição otimizada para conversão.',
      en: 'Sales funnel and acquisition landing page optimized for conversion.',
      es: 'Embudo de ventas y landing page de adquisición optimizada para conversión.',
    },
  },
  {
    id: 'ana-rizzon',
    title: 'Ana Rizzon Psicologia',
    url: 'https://anarizzonpsicologia.com/nova-lp',
    tags: ['landing'],
    description: {
      pt: 'Landing page moderna e responsiva projetada para captação de clientes e construção de confiança.',
      en: 'Modern and responsive landing page designed for client acquisition and trust building.',
      es: 'Landing page moderna y responsiva diseñada para captación de clientes y generación de confianza.',
    },
  },
  {
    id: 'formacion-estratega',
    title: 'Formación Estratega Digital',
    url: 'https://vl.vinyloureiro.com/formacion-estratega-digital',
    tags: ['platform', 'conversion'],
    description: {
      pt: 'Landing page de plataforma educacional com foco na jornada do usuário e matrícula.',
      en: 'Educational platform landing page with focus on user journey and enrollment.',
      es: 'Landing page de plataforma educativa con foco en el recorrido del usuario y la inscripción.',
    },
  },
  {
    id: 'meta-waitlist',
    title: 'Meta Analysis Academy — Waitlist',
    url: 'http://rc.metaanalysisacademy.com/waitlist',
    tags: ['landing', 'conversion'],
    description: {
      pt: 'Página de captura de leads para campanhas de lançamento de produto educacional.',
      en: 'Lead capture page for educational product launch campaigns.',
      es: 'Página de captura de leads para campañas de lanzamiento de producto educativo.',
    },
  },
  {
    id: 'meta-listadeespera',
    title: 'Meta Analysis Academy — Lista de Espera',
    url: 'http://rc.metaanalysisacademy.com/listadeespera',
    tags: ['landing', 'conversion'],
    description: {
      pt: 'Versão localizada focada em segmentação de público e conversão.',
      en: 'Localized version focused on audience segmentation and conversion.',
      es: 'Versión localizada enfocada en segmentación de audiencia y conversión.',
    },
  },
  {
    id: 'meta-checker',
    title: 'Meta Analysis Academy — Checker',
    url: 'http://rc.metaanalysisacademy.com/checker',
    tags: ['tool'],
    description: {
      pt: 'Ferramenta interativa de validação e qualificação de usuários.',
      en: 'Interactive validation and qualification tool for users.',
      es: 'Herramienta interactiva de validación y calificación de usuarios.',
    },
  },
];

export const featuredProject = {
  title: 'Synapse Performance Analyzer',
  url: 'http://synapse.flowgensolutions.com.br/',
  metrics: ['Performance', 'SEO', 'Acessibilidade', 'UX'],
};
