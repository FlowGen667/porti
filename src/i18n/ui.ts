export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

/** <html lang="…"> value per locale. */
export const htmlLang: Record<Lang, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

/** UI strings + section copy, one entry per locale. */
export const ui = {
  pt: {
    'meta.title': 'Gabriel Mondaini — Desenvolvedor Full Stack',
    'meta.description':
      'Desenvolvedor Full Stack com mais de 5 anos de experiência em performance, automação e experiências web modernas. Landing pages, plataformas, dashboards e soluções digitais de alta conversão.',
    'meta.ogAlt': 'Gabriel Mondaini — Desenvolvedor Full Stack',

    'nav.skills': 'Skills',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.cta': 'Vamos conversar',
    'nav.menu': 'Menu',
    'nav.theme': 'Alternar tema',
    'nav.lang': 'Idioma',

    'hero.eyebrow': 'Desenvolvedor Full Stack',
    'hero.headline':
      'Desenvolvedor Full Stack especializado em Performance, Automação e Experiências Web Modernas.',
    'hero.intro':
      'Olá! Sou Gabriel Mondaini (@mondainidev_), desenvolvedor web com mais de 5 anos de experiência criando landing pages, plataformas web, automações, dashboards e soluções digitais focadas em performance, conversão e escalabilidade.',
    'hero.ctaPrimary': 'Ver projetos',
    'hero.ctaSecondary': 'Entrar em contato',
    'hero.available': 'Disponível para novos projetos',

    'stats.experience': 'Anos de experiência',
    'stats.projects': 'Projetos entregues',
    'stats.performance': 'Foco em Core Web Vitals',
    'stats.languages': 'Idiomas atendidos',

    'skills.eyebrow': 'Stack & Especialidades',
    'skills.title': 'Tecnologias que domino',
    'skills.subtitle':
      'Um conjunto de ferramentas modernas para construir produtos rápidos, escaláveis e orientados a resultados.',

    'projects.eyebrow': 'Portfólio',
    'projects.title': 'Projetos selecionados',
    'projects.subtitle':
      'Landing pages e plataformas construídas com foco em conversão, velocidade e experiência do usuário.',
    'projects.all': 'Todos',
    'projects.visit': 'Visitar projeto',
    'projects.empty': 'Nenhum projeto nesta categoria.',

    'featured.eyebrow': 'Projeto SaaS em destaque',
    'featured.title': 'Synapse Performance Analyzer',
    'featured.description':
      'Desenvolvi uma plataforma que analisa websites e gera métricas técnicas de performance, SEO, acessibilidade e experiência do usuário, identificando oportunidades de melhoria e otimização.',
    'featured.cta': 'Acessar plataforma',
    'featured.tag': 'SaaS · Produto próprio',

    'about.eyebrow': 'Sobre mim',
    'about.title': 'Tecnologia aplicada a negócios digitais',
    'about.description':
      'Trabalho com desenvolvimento web, performance, infraestrutura cloud, automações e inteligência artificial aplicada a negócios digitais.',
    'about.point1': 'Desenvolvimento web full stack de ponta a ponta',
    'about.point2': 'Performance e otimização de Core Web Vitals',
    'about.point3': 'Infraestrutura cloud e automação de processos',
    'about.point4': 'Integrações de IA aplicadas a produtos reais',

    'contact.eyebrow': 'Contato',
    'contact.title': 'Vamos construir algo incrível juntos.',
    'contact.subtitle':
      'Conte-me sobre o seu projeto. Respondo normalmente em até 24 horas.',
    'contact.name': 'Nome',
    'contact.namePlaceholder': 'Seu nome',
    'contact.email': 'E-mail',
    'contact.emailPlaceholder': 'voce@email.com',
    'contact.message': 'Mensagem',
    'contact.messagePlaceholder': 'Como posso ajudar?',
    'contact.send': 'Enviar mensagem',
    'contact.sending': 'Enviando…',
    'contact.success': 'Mensagem enviada! Em breve entro em contato.',
    'contact.error': 'Algo deu errado. Tente novamente ou envie um e-mail.',
    'contact.orEmail': 'Ou envie um e-mail diretamente',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.built': 'Construído com Astro · Hospedado na Cloudflare',
    'footer.backToTop': 'Voltar ao topo',
  },

  en: {
    'meta.title': 'Gabriel Mondaini — Full Stack Developer',
    'meta.description':
      'Full Stack Developer with 5+ years of experience in performance, automation and modern web experiences. High-converting landing pages, platforms, dashboards and digital solutions.',
    'meta.ogAlt': 'Gabriel Mondaini — Full Stack Developer',

    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk",
    'nav.menu': 'Menu',
    'nav.theme': 'Toggle theme',
    'nav.lang': 'Language',

    'hero.eyebrow': 'Full Stack Developer',
    'hero.headline':
      'Full Stack Developer specialized in Performance, Automation and Modern Web Experiences.',
    'hero.intro':
      "Hello! I'm Gabriel Mondaini (@mondainidev_), a web developer with over 5 years of experience building landing pages, web platforms, automations, dashboards and digital solutions focused on performance, conversion and scalability.",
    'hero.ctaPrimary': 'View projects',
    'hero.ctaSecondary': 'Get in touch',
    'hero.available': 'Available for new projects',

    'stats.experience': 'Years of experience',
    'stats.projects': 'Projects delivered',
    'stats.performance': 'Core Web Vitals focus',
    'stats.languages': 'Languages supported',

    'skills.eyebrow': 'Stack & Expertise',
    'skills.title': 'Technologies I master',
    'skills.subtitle':
      'A modern toolset for building fast, scalable and results-driven products.',

    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Selected projects',
    'projects.subtitle':
      'Landing pages and platforms built with a focus on conversion, speed and user experience.',
    'projects.all': 'All',
    'projects.visit': 'Visit project',
    'projects.empty': 'No projects in this category.',

    'featured.eyebrow': 'Featured SaaS project',
    'featured.title': 'Synapse Performance Analyzer',
    'featured.description':
      'I developed a platform that analyzes websites and generates technical metrics related to performance, SEO, accessibility and user experience, helping identify optimization opportunities.',
    'featured.cta': 'Open the platform',
    'featured.tag': 'SaaS · Own product',

    'about.eyebrow': 'About me',
    'about.title': 'Technology applied to digital businesses',
    'about.description':
      'I work with web development, cloud infrastructure, automation and artificial intelligence applied to digital businesses.',
    'about.point1': 'End-to-end full stack web development',
    'about.point2': 'Performance and Core Web Vitals optimization',
    'about.point3': 'Cloud infrastructure and process automation',
    'about.point4': 'AI integrations applied to real products',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build something amazing together.",
    'contact.subtitle': 'Tell me about your project. I usually reply within 24 hours.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'you@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'How can I help?',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': "Message sent! I'll get back to you soon.",
    'contact.error': 'Something went wrong. Please try again or send an email.',
    'contact.orEmail': 'Or send an email directly',

    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro · Hosted on Cloudflare',
    'footer.backToTop': 'Back to top',
  },

  es: {
    'meta.title': 'Gabriel Mondaini — Desarrollador Full Stack',
    'meta.description':
      'Desarrollador Full Stack con más de 5 años de experiencia en rendimiento, automatización y experiencias web modernas. Landing pages, plataformas, dashboards y soluciones digitales de alta conversión.',
    'meta.ogAlt': 'Gabriel Mondaini — Desarrollador Full Stack',

    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.cta': 'Hablemos',
    'nav.menu': 'Menú',
    'nav.theme': 'Cambiar tema',
    'nav.lang': 'Idioma',

    'hero.eyebrow': 'Desarrollador Full Stack',
    'hero.headline':
      'Desarrollador Full Stack especializado en Performance, Automatización y Experiencias Web Modernas.',
    'hero.intro':
      '¡Hola! Soy Gabriel Mondaini (@mondainidev_), desarrollador web con más de 5 años de experiencia creando landing pages, plataformas web, automatizaciones, dashboards y soluciones digitales enfocadas en rendimiento, conversión y escalabilidad.',
    'hero.ctaPrimary': 'Ver proyectos',
    'hero.ctaSecondary': 'Contactar',
    'hero.available': 'Disponible para nuevos proyectos',

    'stats.experience': 'Años de experiencia',
    'stats.projects': 'Proyectos entregados',
    'stats.performance': 'Enfoque en Core Web Vitals',
    'stats.languages': 'Idiomas atendidos',

    'skills.eyebrow': 'Stack & Especialidades',
    'skills.title': 'Tecnologías que domino',
    'skills.subtitle':
      'Un conjunto de herramientas modernas para construir productos rápidos, escalables y orientados a resultados.',

    'projects.eyebrow': 'Portafolio',
    'projects.title': 'Proyectos seleccionados',
    'projects.subtitle':
      'Landing pages y plataformas construidas con foco en conversión, velocidad y experiencia de usuario.',
    'projects.all': 'Todos',
    'projects.visit': 'Visitar proyecto',
    'projects.empty': 'No hay proyectos en esta categoría.',

    'featured.eyebrow': 'Proyecto SaaS destacado',
    'featured.title': 'Synapse Performance Analyzer',
    'featured.description':
      'Desarrollé una plataforma que analiza sitios web y genera métricas técnicas de performance, SEO, accesibilidad y experiencia de usuario, ayudando a identificar oportunidades de mejora y optimización.',
    'featured.cta': 'Abrir la plataforma',
    'featured.tag': 'SaaS · Producto propio',

    'about.eyebrow': 'Sobre mí',
    'about.title': 'Tecnología aplicada a negocios digitales',
    'about.description':
      'Trabajo con desarrollo web, infraestructura cloud, automatización e inteligencia artificial aplicada a negocios digitales.',
    'about.point1': 'Desarrollo web full stack de extremo a extremo',
    'about.point2': 'Rendimiento y optimización de Core Web Vitals',
    'about.point3': 'Infraestructura cloud y automatización de procesos',
    'about.point4': 'Integraciones de IA aplicadas a productos reales',

    'contact.eyebrow': 'Contacto',
    'contact.title': 'Construyamos algo increíble juntos.',
    'contact.subtitle':
      'Cuéntame sobre tu proyecto. Normalmente respondo en menos de 24 horas.',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Correo',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': '¿Cómo puedo ayudarte?',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando…',
    'contact.success': '¡Mensaje enviado! Te responderé pronto.',
    'contact.error': 'Algo salió mal. Inténtalo de nuevo o envía un correo.',
    'contact.orEmail': 'O envía un correo directamente',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con Astro · Alojado en Cloudflare',
    'footer.backToTop': 'Volver arriba',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];
