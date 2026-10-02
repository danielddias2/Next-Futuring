'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function Capabilities() {
  const { content } = useLocale();

  return (
    <section
      id="services"
      tabIndex={-1}
      aria-label="Capabilities and Services"
      className="scroll-mt-24 py-24 sm:py-32 lg:py-36 bg-[#07070a] border-t border-b border-[#17171e] focus:outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-12 sm:pb-16 border-b border-[#1c1c24]">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-8 h-[2px] bg-[#ccff00]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold">
              {content.capabilities.kicker}
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.02em] text-white">
            {content.capabilities.headline}
          </h2>
          <p className="text-zinc-400 font-sans text-base sm:text-lg mt-3 max-w-2xl">
            {content.capabilities.subheadline}
          </p>
        </div>

        {/* Editorial Disciplines List (Structured as Asymmetric Editorial Blocks, not SaaS cards) */}
        <div className="mt-12 divide-y divide-[#1c1c24]">
          {content.capabilities.items.map((item) => (
            <div
              key={item.num}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#0c0c10]/60 transition-colors px-2 sm:px-6 -mx-2 sm:-mx-6"
            >
              {/* Massive Number */}
              <div className="lg:col-span-2 flex items-baseline gap-4">
                <span className="font-display font-black text-5xl sm:text-6xl text-zinc-600 group-hover:text-[#ccff00] transition-colors">
                  {item.num}
                </span>
                <span className="text-xs font-mono tracking-widest text-[#ccff00] uppercase font-bold lg:hidden">
                  {item.accentTitle}
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-5">
                <span className="hidden lg:inline-block text-xs font-mono tracking-widest text-[#ccff00] uppercase font-bold mb-2">
                  {item.accentTitle}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mt-4">
                  {item.desc}
                </p>
              </div>

              {/* Deliverables Checklist with Crisp Alignment */}
              <div className="lg:col-span-5 lg:pl-8 lg:border-l border-[#1c1c24]">
                <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-4">
                  CORE DELIVERABLES
                </div>
                <ul className="space-y-3">
                  {item.deliverables.map((deliv, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-center gap-3 text-sm font-sans text-zinc-300"
                    >
                      <span className="w-4 h-4 rounded-none bg-[#13141a] border border-[#262732] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#ccff00]" />
                      </span>
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
