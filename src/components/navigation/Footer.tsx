'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function Footer() {
  const { content } = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Footer"
      className="bg-[#040405] border-t border-[#16161c] pt-20 pb-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: BRAND LOGO & CORE TAGLINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#181820]">
          
          <div className="lg:col-span-6 space-y-6">
            {/* Original Next Futuring Logo */}
            <div className="relative w-[160px] h-[52px] sm:w-[190px] sm:h-[62px]">
              <Image
                src="/brand/logo-cropped.png"
                alt="Next Futuring"
                fill
                sizes="(max-width: 640px) 160px, 190px"
                className="object-contain object-left"
              />
            </div>

            <p className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white max-w-md">
              {content.footer.tagline}
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
              <span className="tracking-widest uppercase">{content.footer.status}</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Navigation links */}
            <div>
              <div className="text-[11px] font-mono tracking-widest text-[#ccff00] uppercase mb-4 font-bold">
                {content.footer.navigationTitle}
              </div>
              <ul className="space-y-2.5 text-sm font-display uppercase tracking-wider text-zinc-400">
                <li>
                  <Link href="/#home" className="hover:text-white transition-colors">
                    {content.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="hover:text-white transition-colors">
                    {content.nav.work}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    {content.nav.services}
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    {content.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    {content.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Global Nodes */}
            <div>
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
                LOCATIONS
              </div>
              <p className="text-xs font-mono text-zinc-400 leading-relaxed uppercase">
                {content.footer.headquarters}
              </p>
              <div className="mt-3 text-[10px] font-mono text-zinc-600 leading-normal">
                {content.footer.timezones}
              </div>
            </div>

            {/* Legal */}
            <div>
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
                {content.footer.legalTitle}
              </div>
              <ul className="space-y-2 text-xs font-mono text-zinc-400 uppercase">
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    {content.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    {content.footer.terms}
                  </Link>
                </li>
                <li className="text-[10px] text-zinc-600 pt-2">
                  VERCEL EDGE DEPLOYED
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            {content.footer.allRightsReserved}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ccff00] transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span className="tracking-widest uppercase">BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
