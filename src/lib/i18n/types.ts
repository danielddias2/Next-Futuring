export type Locale = 'en-US' | 'pt-BR' | 'es' | 'fr';

export type CurrencyCode = 'BRL' | 'USD' | 'EUR';

export interface CurrencyConfig {
  currency: CurrencyCode;
  symbol: string;
  intlLocale: string;
}

export interface InvestmentTier {
  id: string;
  label: string;
}

export const LOCALE_CURRENCY_MAP: Record<Locale, CurrencyConfig> = {
  'pt-BR': {
    currency: 'BRL',
    symbol: 'R$',
    intlLocale: 'pt-BR',
  },
  'en-US': {
    currency: 'USD',
    symbol: 'US$',
    intlLocale: 'en-US',
  },
  'es': {
    currency: 'EUR',
    symbol: '€',
    intlLocale: 'es-ES',
  },
  'fr': {
    currency: 'EUR',
    symbol: '€',
    intlLocale: 'fr-FR',
  },
};

export const INVESTMENT_TIERS_BY_LOCALE: Record<Locale, InvestmentTier[]> = {
  'pt-BR': [
    { id: '500_plus', label: 'R$ 500+' },
    { id: '500_1000', label: 'R$ 500 – R$ 1.000' },
    { id: '1000_2500', label: 'R$ 1.000 – R$ 2.500' },
    { id: '2500_5000', label: 'R$ 2.500 – R$ 5.000' },
    { id: '5000_plus', label: 'R$ 5.000+' },
  ],
  'en-US': [
    { id: '500_plus', label: 'US$ 500+' },
    { id: '500_1000', label: 'US$ 500 – US$ 1,000' },
    { id: '1000_2500', label: 'US$ 1,000 – US$ 2,500' },
    { id: '2500_5000', label: 'US$ 2,500 – US$ 5,000' },
    { id: '5000_plus', label: 'US$ 5,000+' },
  ],
  'es': [
    { id: '500_plus', label: '€500+' },
    { id: '500_1000', label: '€500 – €1.000' },
    { id: '1000_2500', label: '€1.000 – €2.500' },
    { id: '2500_5000', label: '€2.500 – €5.000' },
    { id: '5000_plus', label: '€5.000+' },
  ],
  'fr': [
    { id: '500_plus', label: '€500+' },
    { id: '500_1000', label: '€500 – €1.000' },
    { id: '1000_2500', label: '€1.000 – €2.500' },
    { id: '2500_5000', label: '€2.500 – €5.000' },
    { id: '5000_plus', label: '€5.000+' },
  ],
};

export interface LocaleInfo {
  code: Locale;
  label: string;
  nativeName: string;
  region: string;
  shortLabel: string;
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  {
    code: 'en-US',
    label: 'English (US)',
    nativeName: 'English',
    region: 'Global / US / UK',
    shortLabel: 'EN',
  },
  {
    code: 'pt-BR',
    label: 'Português (BR)',
    nativeName: 'Português',
    region: 'Brasil',
    shortLabel: 'PT',
  },
  {
    code: 'es',
    label: 'Español',
    nativeName: 'Español',
    region: 'España / Latam',
    shortLabel: 'ES',
  },
  {
    code: 'fr',
    label: 'Français',
    nativeName: 'Français',
    region: 'France / Europe',
    shortLabel: 'FR',
  },
];

export const DEFAULT_LOCALE: Locale = 'en-US';

export const LOCALE_COOKIE_NAME = 'nf_locale';

/**
 * Mapping from ISO 3166-1 alpha-2 country codes to supported locales.
 * Specified in requirements:
 * BR -> pt-BR
 * US, GB, CA, AU, IE -> en-US
 * ES -> es (plus major Hispanophone countries)
 * FR -> fr (plus francophone)
 * All other countries -> en-US
 */
export const COUNTRY_TO_LOCALE_MAP: Record<string, Locale> = {
  // Portuguese
  BR: 'pt-BR',
  PT: 'pt-BR',
  AO: 'pt-BR',
  MZ: 'pt-BR',

  // English
  US: 'en-US',
  GB: 'en-US',
  CA: 'en-US',
  AU: 'en-US',
  IE: 'en-US',
  NZ: 'en-US',
  SG: 'en-US',
  ZA: 'en-US',

  // Spanish
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  CL: 'es',
  PE: 'es',
  UY: 'es',

  // French
  FR: 'fr',
  BE: 'fr',
  CH: 'fr',
  MC: 'fr',
  LU: 'fr',
};

export function isValidLocale(code: string): code is Locale {
  return SUPPORTED_LOCALES.some((item) => item.code === code);
}
