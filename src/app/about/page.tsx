import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';

export const metadata = {
  title: 'About the Studio & Philosophy',
  description: 'The ethos, leadership, and engineering standards behind Next Futuring.',
};

export default function AboutPage() {
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
          <span className="text-[#ccff00]">ABOUT STUDIO</span>
        </div>

        {/* Header */}
        <div className="border-b border-[#1c1c24] pb-12">
          <div className="text-xs font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold mb-3">
            AGENCY ETHOS // 2026
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight">
            ABOUT <span className="text-[#ccff00]">NEXT FUTURING.</span>
          </h1>
          <p className="font-sans text-zinc-400 text-lg sm:text-xl max-w-2xl mt-4">
            Operating where high-fashion editorial art direction collides with bleeding-edge web engineering.
          </p>
        </div>

        {/* Architecture Notice */}
        <div className="mt-12 p-8 bg-[#09090c] border border-[#1f2026] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              STUDIO PROFILES & MANIFESTO DETAIL EXPANDING
            </div>
            <p className="text-zinc-300 font-sans text-sm max-w-xl">
              Learn about our foundational principles, global team distribution, and creative philosophy on our home manifesto.
            </p>
          </div>

          <Link
            href="/#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ccff00] text-black font-display font-bold text-sm tracking-wider uppercase whitespace-nowrap hover:bg-[#d8ff1a] transition-colors"
          >
            <span>READ STUDIO MANIFESTO</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
