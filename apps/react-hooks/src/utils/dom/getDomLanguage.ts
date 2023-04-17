import { isBrowser } from '../env/isBrowser';

export function getDomLanguage() {
  if (!isBrowser) {
    return 'en';
  }

  return document.documentElement.lang ?? 'en';
}
