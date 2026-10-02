import { enUS } from './en-US';
import { es } from './es';
import { fr } from './fr';
import { ptBR } from './pt-BR';
import { SiteContent } from './types';
import { Locale } from '@/lib/i18n/types';

export const contentMap: Record<Locale, SiteContent> = {
  'en-US': enUS,
  'pt-BR': ptBR,
  es: es,
  fr: fr,
};

export function getContent(locale: Locale): SiteContent {
  return contentMap[locale] || contentMap['en-US'];
}

export * from './types';
