import { NextRequest, NextResponse } from 'next/server';
import { isValidLocale, LOCALE_COOKIE_NAME } from '@/lib/i18n/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { locale } = body;

    if (!locale || !isValidLocale(locale)) {
      return NextResponse.json(
        { error: 'Invalid or unsupported locale' },
        { status: 400 }
      );
    }

    const response = NextResponse.json({ success: true, locale });

    // Store preference in cookie for 1 year, accessible across entire site
    response.cookies.set({
      name: LOCALE_COOKIE_NAME,
      value: locale,
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: false, // Accessible to client scripts if needed
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: 'Failed to set locale' },
      { status: 500 }
    );
  }
}
