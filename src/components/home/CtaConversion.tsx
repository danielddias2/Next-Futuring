'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { useLocale } from '@/components/i18n/LocaleProvider';

export function CtaConversion() {
  const { content } = useLocale();

  const tiers = content.ctaSection.investmentTiers;
  const defaultTier = tiers[0]?.id ?? '';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: defaultTier,
    message: '',
  });

  // When tiers change (locale switch) compute whether the currently selected
  // budget id still exists in the new locale's tiers. If not, fall back to the
  // first tier of the new locale. Derived synchronously — no effect needed.
  const budgetIdInCurrentLocale = tiers.some((t) => t.id === formData.budget)
    ? formData.budget
    : defaultTier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Resolve the human-readable label for the currently selected tier.
  const selectedTierLabel =
    tiers.find((t) => t.id === budgetIdInCurrentLocale)?.label ?? budgetIdInCurrentLocale;

  // Build WhatsApp message that always uses the current locale's currency labels.
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999';
  const whatsappText = encodeURIComponent(
    `${content.ctaSection.whatsappGreeting}\n${content.ctaSection.investmentPrefix}: ${selectedTierLabel}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <section
      id="contact"
      aria-label="Conversion Call to Action"
      className="relative py-24 sm:py-32 lg:py-40 bg-[#060608] border-t border-[#181820] overflow-hidden"
    >
      {/* Background Neon Ambient Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none blur-[150px] opacity-[0.16] -z-0"
        style={{
          background: 'radial-gradient(circle, #ccff00 0%, rgba(204,255,0,0) 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: PUNCHY EDITORIAL HEADLINE & WHATSAPP DIRECT ACTION */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-8 h-[2px] bg-[#ccff00]" />
                <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#ccff00] uppercase font-bold">
                  {content.ctaSection.kicker}
                </span>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.92] text-white">
                <span>{content.ctaSection.headline}</span><br />
                <span className="text-[#ccff00]">{content.ctaSection.highlight}</span>
              </h2>

              <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed mt-6 max-w-xl">
                {content.ctaSection.copy}
              </p>
            </div>

            {/* Direct WhatsApp Closing Channel */}
            <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-[#0c0c10] border border-[#22222c] hover:border-[#ccff00]/60 transition-all shadow-xl">
              <div className="flex items-center gap-3 mb-2 text-[#ccff00]">
                <MessageCircle className="w-6 h-6 shrink-0" />
                <span className="font-display font-bold text-lg uppercase tracking-wider">
                  DIRECT PARTNER ACCESS
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-400 mb-6">
                {content.ctaSection.whatsappSubtext}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#111116] hover:bg-[#ccff00] text-[#ccff00] hover:text-black border border-[#2a2b36] hover:border-[#ccff00] font-display font-bold text-sm tracking-wider uppercase transition-all duration-200"
              >
                <span>{content.ctaSection.whatsappButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Quality & Delivery Guarantee Badge */}
              <div className="mt-6 pt-4 border-t border-[#1a1a22] flex items-center gap-2.5 text-[11px] font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-[#ccff00] shrink-0" />
                <span>{content.ctaSection.guaranteeBadge}</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-CONVERSION BRIEFING FORM */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 bg-[#09090c] border border-[#22222c] shadow-2xl relative">

              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1b1c24]">
                <div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white">
                    PROJECT INQUIRY
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    RESPONSE TIME: UNDER 4 HOURS
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#ccff00]/10 border border-[#ccff00] flex items-center justify-center mx-auto text-[#ccff00]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-2xl uppercase text-white">
                    INQUIRY RECEIVED
                  </h4>
                  <p className="font-sans text-sm text-zinc-400 max-w-sm mx-auto">
                    Thank you. A principal architect will review your project parameters and respond with initial strategic notes shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2 text-xs font-mono tracking-widest text-[#ccff00] border border-[#ccff00]/40 hover:bg-[#ccff00] hover:text-black uppercase transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-3 bg-[#111116] border border-[#22222a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-3 bg-[#111116] border border-[#22222a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                      Company / Brand Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Global"
                      className="w-full px-3.5 py-3 bg-[#111116] border border-[#22222a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors"
                    />
                  </div>

                  {/* INVESTMENT RANGE — driven entirely by current locale tiers */}
                  <div>
                    <label htmlFor="budget" className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                      {content.ctaSection.investmentLabel}
                    </label>
                    <select
                      id="budget"
                      value={budgetIdInCurrentLocale}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-3 bg-[#111116] border border-[#22222a] text-sm text-white focus:outline-none focus:border-[#ccff00] transition-colors"
                    >
                      {tiers.map((tier) => (
                        <option key={tier.id} value={tier.id}>
                          {tier.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-1.5">
                      Project Goals &amp; Vision *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you want to build and what you expect to achieve..."
                      className="w-full px-3.5 py-3 bg-[#111116] border border-[#22222a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#ccff00] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#ccff00] hover:bg-[#d8ff1a] text-black font-display font-black text-base tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.45)]"
                  >
                    <span>{content.ctaSection.primaryButton}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
