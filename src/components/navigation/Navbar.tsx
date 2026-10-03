'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useLocale } from '@/components/i18n/LocaleProvider';
import { SUPPORTED_LOCALES } from '@/lib/i18n/types';

export function Navbar() {
  const { locale, country, content, setLocale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuTriggerRef = useRef<HTMLButtonElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const languageTriggerRef = useRef<HTMLButtonElement>(null);

  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    mobileMenuTriggerRef.current = event.currentTarget;
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Monitor scroll for subtle surface adaptation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!langDropdownOpen) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!languageDropdownRef.current?.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePointer);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer);
  }, [langDropdownOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      firstMobileLinkRef.current?.focus();
    } else if (mobileMenuTriggerRef.current) {
      mobileMenuTriggerRef.current.focus();
      mobileMenuTriggerRef.current = null;
    }
  }, [mobileMenuOpen]);

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (languageDropdownRef.current?.contains(document.activeElement)) {
          languageTriggerRef.current?.focus();
        }
        setLangDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: content.nav.home, href: '/#home' },
    { label: content.nav.work, href: '/#projects' },
    { label: content.nav.services, href: '/#services' },
    { label: content.nav.about, href: '/#about' },
    { label: content.nav.contact, href: '/#contact' },
  ];

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-[#1f2026] py-3.5 shadow-2xl shadow-black/60'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* BRAND LOGO: Preserving 100% original Next Futuring PNG asset */}
            <Link
              href="/#home"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]"
              aria-label={content.nav.home}
            >
              <div className="relative w-[130px] h-[44px] sm:w-[155px] sm:h-[50px] transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/brand/logo-tight.png"
                  alt="Next Futuring"
                  fill
                  sizes="(max-width: 640px) 130px, 155px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              role="navigation"
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-8 lg:gap-10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display font-semibold text-sm tracking-[0.14em] text-zinc-300 hover:text-[#ccff00] transition-colors duration-150 uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* DESKTOP ACTIONS: GEO INDICATOR, LANGUAGE SWITCHER & PRIMARY CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* Technical Server Edge Country Badge */}
              {country && (
                <div
                  title={`Detected via Vercel Edge Geolocation: ${country}`}
                  className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded bg-[#0e0e12] border border-[#1f2026] text-[10px] font-mono tracking-widest text-zinc-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                  <span>EDGE: {country}</span>
                </div>
              )}

              {/* Language Selector Dropdown */}
              <div
                className="relative"
                ref={languageDropdownRef}
                onBlur={(event) => {
                  const nextTarget = event.relatedTarget;
                  if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
                    setLangDropdownOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  ref={languageTriggerRef}
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="true"
                  aria-label={content.nav.language}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-[#0c0c0f] border border-[#1f2026] text-xs font-mono font-medium text-zinc-300 hover:text-white hover:border-[#ccff00]/40 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ccff00]"
                >
                  <Globe className="w-3.5 h-3.5 text-[#ccff00]" />
                  <span className="uppercase font-semibold">
                    {SUPPORTED_LOCALES.find((l) => l.code === locale)?.shortLabel || 'EN'}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 text-zinc-400 transition-transform duration-200 ${
                      langDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {langDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 py-1.5 bg-[#0e0e12] border border-[#22222a] shadow-2xl rounded-sm backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-100"
                  >
                    <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 border-b border-[#1f2026]">
                      {content.nav.language}
                    </div>
                    {SUPPORTED_LOCALES.map((item) => (
                      <button
                        key={item.code}
                        type="button"
                        aria-pressed={locale === item.code}
                        onClick={() => {
                          setLocale(item.code);
                          setLangDropdownOpen(false);
                          languageTriggerRef.current?.focus();
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                          locale === item.code
                            ? 'bg-[#18181f] text-[#ccff00] font-semibold'
                            : 'text-zinc-300 hover:bg-[#141418] hover:text-white'
                        }`}
                      >
                        <span className="font-sans">{item.label}</span>
                        <span className="font-mono text-[10px] text-zinc-500">
                          {item.shortLabel}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* PRIMARY CTA */}
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#ccff00] hover:bg-[#d8ff1a] text-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_24px_rgba(204,255,0,0.25)] hover:shadow-[0_0_32px_rgba(204,255,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{content.nav.cta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="flex md:hidden items-center gap-3">
              {/* Language pill on mobile */}
              <button
                type="button"
                onClick={openMobileMenu}
                className="px-2 py-1 bg-[#121216] border border-[#22222a] rounded text-[11px] font-mono font-bold text-[#ccff00]"
                aria-label={content.nav.language}
              >
                {SUPPORTED_LOCALES.find((l) => l.code === locale)?.shortLabel || 'EN'}
              </button>

              <button
                type="button"
                onClick={mobileMenuOpen ? closeMobileMenu : openMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? content.nav.menuClose : content.nav.menuOpen}
                className="p-2 text-zinc-200 hover:text-[#ccff00] bg-[#0c0c0f] border border-[#1f2026] rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ccff00]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN DRAWER */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label={content.nav.menuOpen}
          onKeyDown={(event) => {
            if (event.key !== 'Tab') return;

            const focusableElements = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );
            if (!focusableElements?.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (event.shiftKey && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }}
          className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 md:hidden animate-in fade-in duration-200"
        >
          {/* Subtle Background Diagonal Lines */}
          <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-10" />

          {/* Links */}
          <div className="relative z-10 flex flex-col space-y-6 pt-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#ccff00] uppercase">
              INDEX // NAVIGATION
            </span>
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                ref={idx === 0 ? firstMobileLinkRef : undefined}
                onClick={closeMobileMenu}
                className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white hover:text-[#ccff00] transition-colors flex items-center justify-between border-b border-[#1a1a20] pb-4"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Language Selector & CTA */}
          <div className="relative z-10 space-y-6 pt-6">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2.5">
                {content.nav.language} {country ? `// DETECTED: ${country}` : ''}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {SUPPORTED_LOCALES.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLocale(item.code);
                      closeMobileMenu();
                    }}
                    className={`py-2 text-center text-xs font-mono font-bold border transition-colors ${
                      locale === item.code
                        ? 'bg-[#ccff00] text-black border-[#ccff00]'
                        : 'bg-[#0f0f13] text-zinc-300 border-[#22222a] hover:border-zinc-500'
                    }`}
                  >
                    {item.shortLabel}
                  </button>
                ))}
              </div>
            </div>

            <Link
                href="/#contact"
              onClick={closeMobileMenu}
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#ccff00] text-black font-display font-bold text-lg tracking-wider uppercase shadow-[0_0_24px_rgba(204,255,0,0.3)]"
            >
              <span>{content.nav.cta}</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
