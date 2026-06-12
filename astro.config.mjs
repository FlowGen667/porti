// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site URL — update to the final custom domain if different.
const SITE = 'https://mondaini.dev';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en', es: 'es' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
