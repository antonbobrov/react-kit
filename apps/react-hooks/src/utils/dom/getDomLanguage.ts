import { isBrowser } from '../env/isBrowser';

/**
 * Get current language from `html` `lang` attribute
 * @deprecated
 */
export function getDomLanguage() {
  if (!isBrowser) {
    return 'en';
  }

  return document.documentElement.lang ?? 'en';
}
