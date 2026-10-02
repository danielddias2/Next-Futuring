import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/home/Hero';
import { Manifesto } from '@/components/home/Manifesto';
import { SelectedWork } from '@/components/home/SelectedWork';
import { Capabilities } from '@/components/home/Capabilities';
import { TechStandard } from '@/components/home/TechStandard';
import { CtaConversion } from '@/components/home/CtaConversion';
import { Footer } from '@/components/navigation/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-[#ccff00] selection:text-black">
      {/* Global Minimal Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {/* 1. Hero Section (Visual Centerpiece, Oversized Type, 3D Object) */}
        <Hero />

        {/* 2. Philosophy & Manifesto Statement */}
        <Manifesto />

        {/* 3. Selected Case Studies */}
        <SelectedWork />

        {/* 4. Strategic Capabilities & Disciplines */}
        <Capabilities />

        {/* 5. Technical Rigor & Edge Standard */}
        <TechStandard />

        {/* 6. High-Conversion CTA & Briefing */}
        <CtaConversion />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
