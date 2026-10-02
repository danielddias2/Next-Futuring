'use client';

import React from 'react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function TechStandard() {
  const { content } = useLocale();

  return (
    <section
      aria-label="Technical Rigor and Standards"
      className="py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#1c1c24]">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#ccff00]" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold">
                {content.technologyStandard.kicker}
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              {content.technologyStandard.headline}
            </h2>
          </div>

          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-md">
            {content.technologyStandard.subheadline}
          </p>
        </div>

        {/* 3 Pillars Grid with Asymmetric Technical Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.technologyStandard.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-[#09090c] border border-[#1e1f28] hover:border-[#ccff00]/50 transition-colors group flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="w-8 h-1 bg-[#ccff00] mb-6" />

              <div>
                <div className="font-display font-black text-5xl sm:text-6xl text-white tracking-tight group-hover:text-[#ccff00] transition-colors">
                  {pillar.metric}
                </div>
                <div className="text-xs font-mono font-bold tracking-widest text-[#ccff00] uppercase mt-2">
                  {pillar.metricLabel}
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-wider text-white mt-6 mb-3">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Subtle Technical Indicator */}
              <div className="mt-8 pt-4 border-t border-[#191922] flex items-center justify-between text-[10px] font-mono text-zinc-600">
                <span>SPEC // 0{idx + 1}</span>
                <span className="text-[#ccff00]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
