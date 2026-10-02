import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Inter, Space_Mono } from 'next/font/google';
import { cookies, headers } from 'next/headers';
import './globals.css';
import { LocaleProvider } from '@/components/i18n/LocaleProvider';
import { detectVisitorLocale } from '@/lib/i18n/detector';
import { LOCALE_COOKIE_NAME } from '@/lib/i18n/types';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nextfuturing.com'),
  title: {
    default: 'NEXT FUTURING | Creative Technology Studio & High-Impact Digital Experiences',
    template: '%s | NEXT FUTURING',
  },
  description:
    'Next Futuring is an elite creative technology and digital brand studio. We build editorial digital platforms designed to make ambitious brands impossible to ignore.',
  keywords: [
    'Next Futuring',
    'Creative Technology Studio',
    'Digital Agency',
    'High-Conversion Web Design',
    'Next.js Studio',
    'Editorial Art Direction',
    'Advertising Technology',
  ],
  authors: [{ name: 'Next Futuring' }],
  creator: 'Next Futuring',
  publisher: 'Next Futuring',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextfuturing.com',
    siteName: 'NEXT FUTURING',
    title: 'NEXT FUTURING — Built for What\'s Next',
    description:
      'Digital experiences designed to make ambitious brands impossible to ignore. Editorial art direction, high-velocity engineering, and commercial impact.',
    images: [
      {
        url: '/brand/campaign-poster.png',
        width: 1024,
        height: 1536,
        alt: 'Next Futuring — High-Impact Digital Brand Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXT FUTURING — Built for What\'s Next',
    description:
      'Digital experiences designed to make ambitious brands impossible to ignore.',
    images: ['/brand/campaign-poster.png'],
    creator: '@nextfuturing',
  },
  alternates: {
    canonical: 'https://nextfuturing.com',
    languages: {
      'en-US': 'https://nextfuturing.com/?lang=en-US',
      'pt-BR': 'https://nextfuturing.com/?lang=pt-BR',
      'es': 'https://nextfuturing.com/?lang=es',
      'fr': 'https://nextfuturing.com/?lang=fr',
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const cookieStore = await cookies();

  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  const detection = detectVisitorLocale(headerList, cookieLocale);

  return (
    <html
      lang={detection.locale}
      className={`${barlowCondensed.variable} ${inter.variable} ${spaceMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ccff00] selection:text-black">
        <LocaleProvider
          initialLocale={detection.locale}
          initialCountry={detection.country}
          initialSource={detection.detectionSource}
        >
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
