'use client';

import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { getContent, SiteContent } from '@/content';
import {
  isValidLocale,
  Locale,
  LOCALE_COOKIE_NAME,
} from '@/lib/i18n/types';

interface LocaleContextType {
  locale: Locale;
  country: string | null;
  detectionSource: string;
  content: SiteContent;
  setLocale: (newLocale: Locale) => void;
  isPending: boolean;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

interface LocaleProviderProps {
  initialLocale: Locale;
  initialCountry?: string | null;
  initialSource?: string;
  children: React.ReactNode;
}

export function LocaleProvider({
  initialLocale,
  initialCountry = null,
  initialSource = 'fallback',
  children,
}: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [country] = useState<string | null>(initialCountry);
  const [detectionSource] = useState<string>(initialSource);
  const [isPending, startTransition] = useTransition();

  // Keep html lang attribute in sync
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    if (!isValidLocale(newLocale)) return;

    startTransition(async () => {
      setLocaleState(newLocale);

      // Set cookie in browser immediately
      document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

      // Also persist to API endpoint
      try {
        await fetch('/api/locale', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locale: newLocale }),
        });
      } catch (err) {
        console.error('Failed to sync locale to server:', err);
      }
    });
  };

  const content = getContent(locale);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        country,
        detectionSource,
        content,
        setLocale,
        isPending,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
