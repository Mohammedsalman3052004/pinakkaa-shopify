import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('retainer'); // 'retainer' or 'project'

  const tiers = [
    {
      name: 'Basic Foundation',
      badge: 'Limited Weekly Hours',
      badgeColor: 'text-stone-400 border-white/[0.08] bg-[#161a22]',
      priceRetainer: '$5,000',
      periodRetainer: '/ month',
      priceProject: '$6,500',
      periodProject: 'one-time sprint',
      hours: '12 – 15 hrs / week dedicated',
      target: 'Established stores ($500K–$2M GMV) requiring steady-state engineering, performance maintenance & prioritized bug fixes.',
      popular: false,
      features: [
        'Dedicated Senior Shopify Engineer (12-15 hours/week)',
        'Core Web Vitals & Speed Optimization (Sub-1s LCP)',
        'Basic SEO technical hygiene & sitemap automation',
        'Theme updates & checkout regression QA',
        'Routine Shopify App stack cleanup & audits',
        '48-hour SLA response time for critical issues',
        'Bi-weekly sprint planning & async Loom video updates'
      ],
      cta: 'Start Basic Retainer',
      accent: 'border-t-white/[0.1] hover:border-t-cobalt-500'
    },
    {
      name: 'Mid-Scale Growth',
      badge: 'Most Popular',
      badgeColor: 'text-cobalt-400 border-cobalt-500/30 bg-cobalt-500/10',
      priceRetainer: '$9,500',
      periodRetainer: '/ month',
      priceProject: '$14,000',
      periodProject: 'one-time sprint',
      hours: '25 – 30 hrs / week dedicated',
      target: 'High-growth brands ($2M–$15M GMV) scaling aggressively with custom app logic, CRO sprints, and API connections.',
      popular: true,
      features: [
        'Dedicated Senior Engineer + Senior UI/UX Specialist',
        'Custom Shopify App & Shopify Functions (Rust/Wasm)',
        'Continuous CRO Engineering (Cart drawer, PDP buy bar)',
        'Next-Gen AEO & GEO Schema for AI Search & Perplexity',
        'API Integrations: Klaviyo, 3PL/WMS, CRM & Custom Webhooks',
        '95+ Lighthouse Mobile Score Guaranteed',
        'Dedicated Shared Slack Channel (12-hr SLA response)',
        'Weekly live sprint sync & roadmap backlog'
      ],
      cta: 'Scale With Growth Partner',
      accent: 'border-t-cobalt-500'
    },
    {
      name: 'Fullscale Enterprise',
      badge: 'Dedicated Squad',
      badgeColor: 'text-stone-300 border-white/[0.1] bg-[#1a1d26]',
      priceRetainer: '$16,500',
      periodRetainer: '/ month',
      priceProject: 'From $25,000',
      periodProject: 'bespoke architecture',
      hours: '45+ hrs / week (Full Squad)',
      target: 'High-volume merchants ($15M–$50M+ GMV) demanding bespoke headless/Hydrogen, public app builds, or deep ERP pipelines.',
      popular: false,
      features: [
        'Full Dedicated Squad: Lead Architect + Senior Dev + UI/UX + QA',
        'Turnkey Public Shopify App Store builds or deep Private App',
        'Bespoke Store Launch from scratch (Liquid 2.0 or Hydrogen)',
        'Enterprise ERP Integration (NetSuite, SAP, Katana, Odoo)',
        'Shopify Plus Checkout Extensibility deep customization',
        'Continuous multivariate CRO testing with statistical reporting',
        '1-hour Emergency SLA + 24/7 Black Friday/Cyber Monday coverage',
        'Fractional Head of Shopify Engineering for executive alignment'
      ],
      cta: 'Engage Fullscale Squad',
      accent: 'border-t-white/[0.1] hover:border-t-cobalt-500'
    }
  ];

  const handleSelectTier = (tierName) => {
    smoothScrollTo('#quote');
    window.dispatchEvent(new CustomEvent('select-tier', { detail: tierName }));
  };

  return (
    <section id="pricing" className="py-28 bg-[#07080a] text-white border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
              <span className="uppercase tracking-wider">TRANSPARENT ARCHITECTURE</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Engineering retainers & <span className="font-serif-italic font-normal text-cobalt-400">project sprints</span>.
            </h2>
            
            <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              Predictable senior engineering bandwidth for brands scaling past $1M GMV. No junior handoffs, no bloated agencies, no hidden scope fees.
            </p>
          </div>

          {/* Retainer / Sprint Switcher with Cobalt Accent */}
          <div className="flex items-center bg-[#101318] p-1.5 rounded-full border border-white/[0.08] shrink-0 self-start md:self-end">
            <button
              onClick={() => setBillingCycle('retainer')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all ${
                billingCycle === 'retainer'
                  ? 'bg-cobalt-600 text-white font-bold shadow-md shadow-cobalt-600/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              MONTHLY RETAINER
            </button>
            <button
              onClick={() => setBillingCycle('project')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all ${
                billingCycle === 'project'
                  ? 'bg-cobalt-600 text-white font-bold shadow-md shadow-cobalt-600/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              ONE-TIME SPRINT
            </button>
          </div>
        </div>

        {/* Pricing Columns - Clean Top Border Architecture without Clunky Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch perspective-1000">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`border-t-2 pt-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] ${t.accent}`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full border ${t.badgeColor}`}>
                    {t.badge}
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    {t.hours}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  {t.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 min-h-[44px]">
                  {t.target}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-extrabold text-white font-mono tracking-tight">
                      {billingCycle === 'retainer' ? t.priceRetainer : t.priceProject}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {billingCycle === 'retainer' ? t.periodRetainer : t.periodProject}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-cobalt-400 mt-2 font-medium">
                    Dedicated engineering capacity · Flexible monthly terms
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                    Included Capabilities:
                  </div>
                  {t.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start gap-3 text-xs text-stone-300">
                      <Check className="w-4 h-4 text-cobalt-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action */}
              <button
                onClick={() => handleSelectTier(t.name)}
                className={`w-full py-4 rounded-full text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                  t.popular
                    ? 'bg-cobalt-600 hover:bg-cobalt-500 text-white shadow-lg shadow-cobalt-600/30 hover:shadow-xl hover:shadow-cobalt-500/50'
                    : 'bg-[#12151c] hover:bg-cobalt-600 text-stone-200 hover:text-white border border-white/[0.08] hover:border-transparent hover:shadow-lg hover:shadow-cobalt-600/30'
                }`}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Retainer Assurance Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-[#0c0e12] border border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cobalt-400" />
            <span>Non-Disclosure Agreement (NDA) signed prior to codebase access</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-stone-400" />
            <span>No long-term lock-in · 30-day notice to pause or adjust capacity</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Immediate onboarding within 48 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
