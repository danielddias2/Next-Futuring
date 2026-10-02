'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function SelectedWork() {
  const { content } = useLocale();
  const [touchActiveProjectId, setTouchActiveProjectId] = useState<string | null>(null);
  const touchResetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (touchResetTimerRef.current) clearTimeout(touchResetTimerRef.current);
    };
  }, []);

  const handleProjectPointerDown = (event: React.PointerEvent<HTMLDivElement>, projectId: string) => {
    if (event.pointerType !== 'touch') return;
    if (touchResetTimerRef.current) clearTimeout(touchResetTimerRef.current);
    setTouchActiveProjectId(projectId);
  };

  const handleProjectPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch') return;
    if (touchResetTimerRef.current) clearTimeout(touchResetTimerRef.current);
    touchResetTimerRef.current = setTimeout(() => {
      setTouchActiveProjectId(null);
      touchResetTimerRef.current = null;
    }, 420);
  };

  const handleProjectPointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch') return;
    if (touchResetTimerRef.current) clearTimeout(touchResetTimerRef.current);
    setTouchActiveProjectId(null);
    touchResetTimerRef.current = null;
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-label="Selected Client Cases"
      className="scroll-mt-24 py-24 sm:py-32 lg:py-36 bg-[#050505] overflow-hidden focus:outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#1c1c24]">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-[2px] bg-[#ccff00]" />
              <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold">
                {content.selectedWork.kicker}
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-[-0.02em] text-white">
              {content.selectedWork.headline}
            </h2>
            <p className="text-zinc-400 font-sans text-base sm:text-lg mt-3 max-w-xl">
              {content.selectedWork.subheadline}
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.18em] text-[#ccff00] hover:text-white uppercase transition-colors group"
          >
            <span>{content.selectedWork.viewAll}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Project Showcases (Asymmetric, Unconventional Layouts) */}
        <div className="mt-14 sm:mt-20 space-y-24 sm:space-y-32">
          {content.selectedWork.projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className={`project-showcase grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group ${
                  touchActiveProjectId === project.id ? 'project-showcase--touch-active' : ''
                }`}
                onPointerDown={(event) => handleProjectPointerDown(event, project.id)}
                onPointerUp={handleProjectPointerUp}
                onPointerCancel={handleProjectPointerCancel}
              >
                {/* Project Image Container with Skew Frame */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0c0c10] border border-[#23242e] transition-all duration-300 group-hover:border-[#ccff00]/60 shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Corner Diagonal Lime Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                      <div className="absolute transform rotate-45 bg-[#ccff00] text-black font-mono font-black text-[8px] py-1 right-[-35px] top-[18px] w-[120px] text-center tracking-widest shadow-md">
                        FEATURED
                      </div>
                    </div>

                    {/* Impact Pill Floating on Image */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-1.5 bg-[#050505]/90 backdrop-blur-md border border-[#2a2b36] text-xs sm:text-sm font-mono font-bold text-[#ccff00]">
                      {project.impact}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Category and Year */}
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                    <span className="text-[#ccff00] font-bold">{project.category}</span>
                    <span>{'//'}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-4 group-hover:text-[#ccff00] transition-colors">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
                    CLIENT: <span className="text-white">{project.client}</span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-1 bg-[#101014] border border-[#202128] text-[10px] font-mono tracking-wider text-zinc-400 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <div>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#2a2b36] hover:border-[#ccff00] hover:bg-[#ccff00] hover:text-black font-display font-bold text-sm tracking-wider uppercase text-white transition-all duration-200"
                    >
                      <span>DISCUSS SIMILAR SCOPE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
