import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Extract the locale from a URL pathname. Falls back to the default locale. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en' || seg === 'es') return seg;
  return defaultLang;
}

/** Returns a translator bound to a locale. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a locale-aware path. Default locale ('pt') has no prefix,
 * other locales are prefixed with their code.
 *   localizePath('/', 'en')        -> '/en'
 *   localizePath('/#projects','es')-> '/es#projects'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  if (clean === '/') return `/${lang}`;
  return `/${lang}${clean}`;
}

export const locales: Lang[] = ['pt', 'en', 'es'];
