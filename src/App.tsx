/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import LegalDisclaimer from '../components/legal-disclaimer';
import HeroSection from '../components/hero-section';
import AudioComparison from '../components/audio-comparison';
import PricingDemolition from '../components/pricing-demolition';
import FeatureParody from '../components/feature-parody';
import TestimonialSection from '../components/testimonial-section';
import DemoCTA from '../components/demo-cta';
import { IconShieldCheck, IconPhoneCall, IconBolt } from '@tabler/icons-react';

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0E12] text-[#e3e2e7] selection:bg-[#3eb991]/30 selection:text-[#59dad1] font-sans">
      {/* Prominent Mandatory Legal Disclaimer */}
      <LegalDisclaimer />

      {/* Persistent Roman Glass Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#0d0e12]/85 backdrop-blur-xl border-b border-[#4d4353]/30 px-4 md:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Tag */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6a0dad] to-[#20b2aa] flex items-center justify-center text-[#F5FFFA] shadow-[0_0_15px_rgba(62,185,145,0.4)]">
              <IconShieldCheck size={20} stroke={2.2} />
            </div>
            <div>
              <span className="font-heading font-bold text-base tracking-wider text-[#F5FFFA] block leading-tight">
                SPADE SENTRY
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#59dad1] block">
                The Anti-Pushover Protocol
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="hidden lg:flex items-center gap-6 text-xs text-[#cfc2d5]">
            <button
              onClick={() => scrollTo('audio-section')}
              className="hover:text-[#59dad1] transition-colors cursor-pointer"
            >
              Hear the Difference
            </button>
            <button
              onClick={() => scrollTo('features-section')}
              className="hover:text-[#59dad1] transition-colors cursor-pointer"
            >
              Burn Book & Daily Digest
            </button>
            <button
              onClick={() => scrollTo('pricing-section')}
              className="hover:text-[#59dad1] transition-colors cursor-pointer"
            >
              Wholesale Pricing ($2.99)
            </button>
            <button
              onClick={() => scrollTo('demo-section')}
              className="hover:text-[#59dad1] transition-colors cursor-pointer"
            >
              Call the Pushover
            </button>
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('demo-section')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3eb991] hover:bg-[#65dbb1] text-[#0d0e12] font-semibold text-xs transition-all shadow-[0_0_16px_rgba(62,185,145,0.35)] cursor-pointer"
            >
              <IconBolt size={15} />
              <span>Claim Line: $2.99/mo</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Landing Sections */}
      <main id="top-anchor">
        <HeroSection onScrollToSection={scrollTo} />
        <AudioComparison />
        <PricingDemolition />
        <FeatureParody />
        <TestimonialSection />
        <DemoCTA />
      </main>

      {/* Floating Scannable Ticker & Quick Jump Bar for Fast Scrollers */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-2xl bg-[#12141A]/95 backdrop-blur-xl border border-[#3eb991]/40 rounded-2xl px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="w-2 h-2 rounded-full bg-[#3eb991] animate-ping shrink-0"></span>
          <span className="font-bold text-[#F5FFFA] whitespace-nowrap">Spade Sentry ($2.99/mo):</span>
          <span className="text-[#59dad1] font-mono whitespace-nowrap">7-Sec Intercept</span>
          <span className="text-[#988d9e]">•</span>
          <span className="text-[#dfb7ff] font-mono whitespace-nowrap">Global Burn Book</span>
          <span className="text-[#988d9e]">•</span>
          <span className="text-[#82f8cc] font-mono whitespace-nowrap">No $39 SaaS Trap</span>
        </div>

        <div className="flex items-center gap-2 shrink-0 pl-2 border-l border-[#4d4353]/40">
          <button
            onClick={() => scrollTo('top-anchor')}
            className="px-3 py-1.5 rounded-lg bg-[#3eb991] text-[#0d0e12] font-bold font-mono text-[11px] hover:bg-[#65dbb1] transition-all cursor-pointer shadow-[0_0_10px_rgba(62,185,145,0.4)]"
          >
            ↑ Top / Read
          </button>
        </div>
      </div>
    </div>
  );
}
