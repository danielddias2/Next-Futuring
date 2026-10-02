import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { CtaConversion } from '@/components/home/CtaConversion';
import { Footer } from '@/components/navigation/Footer';

export const metadata = {
  title: 'Contact & Project Inquiries',
  description: 'Initiate a bespoke project inquiry with Next Futuring principal partners.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#ccff00] flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            HOME
          </Link>
          <span>/</span>
          <span className="text-[#ccff00]">CONTACT & INQUIRIES</span>
        </div>

        {/* Header */}
        <div className="border-b border-[#1c1c24] pb-8 mb-8">
          <div className="text-xs font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold mb-3">
            ENGAGEMENT // 2026
          </div>
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight">
            START A <span className="text-[#ccff00]">PROJECT.</span>
          </h1>
          <p className="font-sans text-zinc-400 text-lg sm:text-xl max-w-2xl mt-4">
            Direct access to our principal creative technologists. We respond within 4 hours during business days.
          </p>
        </div>

        {/* Embedded Full High-Conversion Section */}
        <CtaConversion />
      </main>

      <Footer />
    </div>
  );
}
