import {
  COUNTRY_TO_LOCALE_MAP,
  DEFAULT_LOCALE,
  isValidLocale,
  Locale,
} from './types';

export interface DetectionResult {
  locale: Locale;
  country: string | null;
  detectionSource: 'query' | 'cookie' | 'vercel-geo' | 'accept-language' | 'fallback';
}

/**
 * Server-side visitor locale detection.
 * Priority:
 * 1. Explicit search param `?lang=` or `?locale=` (allows test & manual links)
 * 2. Explicit cookie `nf_locale` (stored when the user manually changes language - NEVER trapped)
 * 3. Vercel Geo Header `x-vercel-ip-country`
 * 4. Standard browser `accept-language` header
 * 5. Fallback to `en-US`
 */
export function detectVisitorLocale(
  headers: Headers,
  cookieValue?: string | null,
  searchParamLocale?: string | null
): DetectionResult {
  // 1. Explicit URL Query parameter override
  if (searchParamLocale && isValidLocale(searchParamLocale)) {
    return {
      locale: searchParamLocale,
      country: headers.get('x-vercel-ip-country'),
      detectionSource: 'query',
    };
  }

  // 2. Explicit user cookie preference (User choice always wins)
  if (cookieValue && isValidLocale(cookieValue)) {
    return {
      locale: cookieValue,
      country: headers.get('x-vercel-ip-country'),
      detectionSource: 'cookie',
    };
  }

  // 3. Vercel Edge Geolocation Header (x-vercel-ip-country)
  const countryHeader = headers.get('x-vercel-ip-country')?.trim().toUpperCase();
  if (countryHeader) {
    const mappedLocale = COUNTRY_TO_LOCALE_MAP[countryHeader];
    if (mappedLocale) {
      return {
        locale: mappedLocale,
        country: countryHeader,
        detectionSource: 'vercel-geo',
      };
    }
  }

  // 4. Browser Accept-Language header fallback
  const acceptLang = headers.get('accept-language')?.toLowerCase();
  if (acceptLang) {
    if (acceptLang.includes('pt-br') || acceptLang.startsWith('pt')) {
      return {
        locale: 'pt-BR',
        country: countryHeader ?? null,
        detectionSource: 'accept-language',
      };
    }
    if (acceptLang.startsWith('es')) {
      return {
        locale: 'es',
        country: countryHeader ?? null,
        detectionSource: 'accept-language',
      };
    }
    if (acceptLang.startsWith('fr')) {
      return {
        locale: 'fr',
        country: countryHeader ?? null,
        detectionSource: 'accept-language',
      };
    }
    if (acceptLang.startsWith('en')) {
      return {
        locale: 'en-US',
        country: countryHeader ?? null,
        detectionSource: 'accept-language',
      };
    }
  }

  // 5. Default Fallback
  return {
    locale: DEFAULT_LOCALE,
    country: countryHeader ?? null,
    detectionSource: 'fallback',
  };
}
