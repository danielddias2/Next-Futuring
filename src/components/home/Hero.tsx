'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Cpu, Zap } from 'lucide-react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function Hero() {
  const { content } = useLocale();

  return (
    <section
      id="home"
      tabIndex={-1}
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 flex flex-col justify-between overflow-hidden bg-[#050505] focus:outline-none"
    >
      {/* BACKGROUND ATMOSPHERE: Subtle Architectural Grid & Tech Markings */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-15" />

      {/* Subtle Ambient Radial Light (Subdued neon green reflection on obsidian surface) */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] lg:w-[750px] lg:h-[750px] rounded-full pointer-events-none blur-[140px] opacity-[0.14] -z-0"
        style={{
          background: 'radial-gradient(circle, #ccff00 0%, rgba(204,255,0,0) 70%)',
        }}
      />

      {/* Technical Watermark / Geometric Accent */}
      <div className="absolute top-20 right-8 sm:right-16 text-[10px] font-mono tracking-[0.25em] text-zinc-600 uppercase hidden md:flex items-center gap-3 select-none pointer-events-none">
        <span>SYS.V.26</span>
        <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full" />
        <span>GLOBAL_EDGE_DISTRIBUTED</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: OVERSIZED EDITORIAL HEADLINE & VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Category Tag */}
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="inline-block w-8 h-[2px] bg-[#ccff00]" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.18em] text-[#ccff00] uppercase font-bold">
                {content.hero.eyebrow}
              </span>
            </div>

            {/* Oversized High-Contrast Typography */}
            <h1 className="font-display font-black tracking-[-0.02em] leading-[0.88] text-5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[8rem] uppercase text-white mb-6 sm:mb-8">
              <span className="block text-white">
                {content.hero.titleLine1}
              </span>
              <span className="block text-zinc-400">
                {content.hero.titleLine2}
              </span>
              <span className="block text-brand-neon">
                {content.hero.titleHighlight}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-zinc-300 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
              {content.hero.supportingCopy}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-14">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ccff00] hover:bg-[#d8ff1a] text-black font-display font-black text-base sm:text-lg tracking-wider uppercase transition-all duration-200 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{content.hero.primaryCta}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/#projects"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#0a0a0d] hover:bg-[#121217] text-white border border-[#22222a] hover:border-[#ccff00]/60 font-display font-bold text-base sm:text-lg tracking-wider uppercase transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]"
              >
                <span>{content.hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 text-[#ccff00] transition-transform duration-200 group-hover:translate-y-0.5" />
              </Link>
            </div>

            {/* Editorial Status Pill */}
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              <span className="tracking-widest uppercase">{content.hero.badge}</span>
            </div>

          </div>

          {/* RIGHT COLUMN: SOPHISTICATED LAYERED 3D / LAPTOP VISUAL OBJECT */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
              
              {/* Diagonal Cut Background Accent Frame */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#1a1a24] to-[#0c0c10] border border-[#262630] -rotate-1 rounded-sm -z-10 shadow-2xl" />

              {/* Main Visual: 3D Titanium & Dark Glass Geometry with Lime Accents */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-[#2c2d38] bg-[#0c0c10] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Image
                  src="/brand/hero-3d.jpg"
                  alt="Next Futuring — 3D Dark Glass & Titanium Technology Art Direction"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  priority
                />

                {/* Subtle Diagonal Neon Slash Element */}
                <div className="absolute top-0 right-0 w-32 h-1 bg-[#ccff00] rotate-45 transform origin-top-right shadow-[0_0_15px_#ccff00]" />
                
                {/* Visual Technical Badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#050505]/85 backdrop-blur-md border border-[#222228] text-[10px] font-mono tracking-widest text-[#ccff00]">
                  ARCH_RENDER // 3D.GEO
                </div>
              </div>

              {/* Overlapping Secondary Layer: Sleek Laptop Terminal Card */}
              <div className="relative -mt-14 sm:-mt-16 ml-auto w-[85%] sm:w-[80%] rounded-sm border border-[#2f303c] bg-[#08080b]/95 backdrop-blur-xl p-3 sm:p-4 shadow-2xl">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1c1c24]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                    <span className="text-[10px] font-mono text-zinc-400 ml-1">NEXT_ENGINE // v16.3</span>
                  </div>
                  <Cpu className="w-3.5 h-3.5 text-[#ccff00]" />
                </div>

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-[#1f2026]">
                  <Image
                    src="/brand/hero-laptop.jpg"
                    alt="Next Futuring Interface Deployment"
                    fill
                    sizes="(max-width: 768px) 80vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[9px] font-mono text-[#ccff00]">
                    LIVE RENDER // 0.2s
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-[#ccff00]" />
                    EDGE ACCELERATED
                  </span>
                  <span className="text-[#ccff00] font-bold">100% LIGHTHOUSE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM METRICS BAR */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#1a1a22] grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {content.hero.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col border-l-2 border-[#ccff00] pl-4 sm:pl-5 group"
            >
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight group-hover:text-[#ccff00] transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-mono font-bold tracking-[0.14em] text-[#ccff00] uppercase mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-zinc-400 font-sans mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-8 w-full pt-8 text-[11px] font-mono text-zinc-600 select-none">
        <span>COORDINATES: 23°33&apos;S 46°38&apos;W</span>
        <div className="flex items-center gap-2 text-zinc-500">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#ccff00] animate-bounce" />
        </div>
        <span>BUILT FOR WHAT&apos;S NEXT</span>
      </div>

    </section>
  );
}
