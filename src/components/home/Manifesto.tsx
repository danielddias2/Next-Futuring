'use client';

import React from 'react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function Manifesto() {
  const { content } = useLocale();

  return (
    <section
      id="manifesto"
      aria-label="Studio Philosophy"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#070709] border-t border-b border-[#181820] overflow-hidden"
    >
      {/* Background Graphic Diagonal Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-display font-black text-[20vw] leading-none text-white whitespace-nowrap -rotate-12 translate-x-1/4">
        NEXT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="w-12 h-[2px] bg-[#ccff00]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold">
            {content.manifesto.kicker}
          </span>
        </div>

        {/* Asymmetric Editorial Typography Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase tracking-[-0.02em] leading-[0.92] text-white">
              <span>{content.manifesto.headlinePrimary}</span>{' '}
              <span className="text-[#ccff00] underline decoration-[#ccff00]/40 underline-offset-8">
                {content.manifesto.headlineAccent}
              </span>
            </h2>
          </div>

          {/* Editorial Paragraphs and Disciplines */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pt-4">
            <div className="space-y-6 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed">
              <p>{content.manifesto.paragraph1}</p>
              <p className="text-zinc-400 font-light">{content.manifesto.paragraph2}</p>
            </div>

            {/* Disciplines Tags */}
            <div className="mt-8 pt-8 border-t border-[#1f202a] flex flex-wrap gap-2">
              {content.manifesto.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-none bg-[#111116] border border-[#23242e] text-[11px] font-mono tracking-wider text-zinc-300 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
