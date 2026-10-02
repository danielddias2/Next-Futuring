import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export const metadata = {
  title: 'Selected Work & Case Studies',
  description: 'Archive of high-impact digital flagships and bespoke technology platforms built by Next Futuring.',
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#ccff00] flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            HOME
          </Link>
          <span>/</span>
          <span className="text-[#ccff00]">WORK ARCHIVE</span>
        </div>

        {/* Header */}
        <div className="border-b border-[#1c1c24] pb-12">
          <div className="text-xs font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold mb-3">
            PORTFOLIO // 2024–2026
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight">
            SELECTED <span className="text-[#ccff00]">WORK.</span>
          </h1>
          <p className="font-sans text-zinc-400 text-lg sm:text-xl max-w-2xl mt-4">
            A comprehensive retrospective of digital flagships, 3D brand experiences, and high-velocity commerce systems.
          </p>
        </div>

        {/* Future Architecture Notice */}
        <div className="mt-12 p-8 bg-[#09090c] border border-[#1f2026] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              ARCHIVE MODULE UNDER EXPANSION
            </div>
            <p className="text-zinc-300 font-sans text-sm max-w-xl">
              The full multi-case filterable index is being populated for Stage 2. Explore the featured flagship cases on our home showcase.
            </p>
          </div>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ccff00] text-black font-display font-bold text-sm tracking-wider uppercase whitespace-nowrap hover:bg-[#d8ff1a] transition-colors"
          >
            <span>VIEW FEATURED CASES</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
