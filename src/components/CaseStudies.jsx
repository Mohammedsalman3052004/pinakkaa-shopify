import React, { useState } from 'react';
import { Layers, ArrowUpRight, CheckCircle2, TrendingUp, Zap, ShieldAlert, Cpu } from 'lucide-react';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      brand: 'AURA APPAREL',
      sector: 'Luxury Fashion & DTC',
      challenge: 'Theme suffered from 32 legacy Shopify apps, 4.3s mobile load times, and a 74% cart abandonment rate.',
      architecture: 'Custom Liquid 2.0 architecture, 27 app scripts eliminated, custom sticky drawer with tiered rewards, Cloudflare Early Hints.',
      results: [
        { label: 'Mobile Lighthouse', before: '26 / 100', after: '97 / 100', highlight: '+273%' },
        { label: 'Checkout Conversion', before: '1.82%', after: '3.14%', highlight: '+72.5%' },
        { label: 'Average Order Value', before: '$118.00', after: '$144.50', highlight: '+$26.50' },
      ],
      tag: 'Store Rebuild • Speed • CRO'
    },
    {
      brand: 'KRONOS PERFORMANCE',
      sector: 'Equipment & Multi-Warehouse',
      challenge: 'Needed real-time ERP inventory sync across 14 3PL warehouses and custom tier-based B2B volume pricing without slow client scripts.',
      architecture: 'Private App Node/Redis microservice + Shopify Functions in Rust executing inside checkout in 3.4ms with zero theme overhead.',
      results: [
        { label: 'ERP Sync Latency', before: '15 mins', after: '1.8 secs', highlight: 'Real-time' },
        { label: 'Checkout Function Speed', before: 'N/A (Bloated)', after: '3.4ms', highlight: 'Sub-5ms' },
        { label: 'BFCM Throughput', before: 'Frequent timeouts', after: 'Zero errors ($8.2M GMV)', highlight: '100% Uptime' },
      ],
      tag: 'Shopify Functions • Private App • ERP Sync'
    },
    {
      brand: 'NEXA BOTANICALS',
      sector: 'Organic Wellness & Skincare',
      challenge: 'Traffic was decaying due to AI search engines (Perplexity, Google AI Overviews) bypassing traditional blog articles.',
      architecture: 'Comprehensive Schema.org Product, Offer, AggregateRating, and FAQ microdata + LLM Knowledge Graph entity grounding.',
      results: [
        { label: 'Perplexity Shopping Citations', before: '0 (Unindexed)', after: '#1 Recommended', highlight: 'Dominant' },
        { label: 'AI Search Traffic', before: '< 200/mo', after: '18,400/mo', highlight: '+9,100%' },
        { label: 'Organic AI Revenue', before: '$0', after: '$54,200/mo', highlight: 'New Channel' },
      ],
      tag: 'AEO • GEO • Semantic Schema'
    }
  ];

  const current = cases[selectedCase];

  return (
    <section id="cases" className="py-24 bg-obsidian-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Engineering Outcomes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case Studies: Code That Moves Revenue
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Real metrics from high-growth Shopify Plus brands that transitioned from template plugins to custom engineering.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {cases.map((c, idx) => (
            <button
              key={c.brand}
              onClick={() => setSelectedCase(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
                selectedCase === idx
                  ? 'bg-cobalt-600 border-cobalt-500 text-white font-bold shadow-md shadow-cobalt-600/30'
                  : 'bg-obsidian-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{c.brand}</span>
              <span className="text-[10px] opacity-70">({c.sector})</span>
            </button>
          ))}
        </div>

        {/* Case Study Card */}
        <div className="rounded-2xl bg-obsidian-950 border border-slate-800 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-cobalt-400 uppercase tracking-wider">
                  {current.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {current.brand}
                </h3>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {current.sector}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-obsidian-900 border border-slate-800">
                  <div className="text-xs font-bold text-rose-400 font-mono mb-1">
                    The Problem & Bottleneck
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-900 border border-slate-800">
                  <div className="text-xs font-bold text-cobalt-400 font-mono mb-1">
                    The Engineering Solution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.architecture}
                  </p>
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Verified Production Outcomes
              </div>

              {current.results.map((res, i) => (
                <div key={i} className="p-4 rounded-xl bg-obsidian-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-mono">{res.label}</div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-slate-500 text-xs line-through font-mono">{res.before}</span>
                      <span className="text-lg font-bold text-white font-mono">{res.after}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {res.highlight}
                    </span>
                  </div>
                </div>
              ))}

              <div className="pt-3">
                <button
                  onClick={() => {
                    const el = document.querySelector('#contact-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-cobalt-600/20"
                >
                  <span>Build Similar Architecture For My Brand</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
