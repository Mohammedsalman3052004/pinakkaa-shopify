import React, { useState } from 'react';

export default function SearchGeoAeo() {
  const [activeTab, setActiveTab] = useState('aeo');

  const pillars = [
    {
      id: 'speed',
      num: '01',
      title: 'Speed & Core Web Vitals',
      subtitle: '95–100 Mobile Lighthouse Guarantee with Sub-1.0s LCP',
      desc: 'Mobile bounce rates increase by 32% as page load time goes from 1s to 3s. We optimize liquid render loops, eliminate render-blocking assets, pre-connect Cloudflare Early Hints, and compress dynamic assets into next-gen WebP/AVIF.',
      stats: [
        { label: 'Mobile Score', value: '98 / 100' },
        { label: 'Largest Contentful Paint', value: '0.84s' },
        { label: 'Interaction to Next Paint', value: '< 40ms' }
      ]
    },
    {
      id: 'cro',
      num: '02',
      title: 'Conversion Rate Optimization (CRO)',
      subtitle: 'Engineering High-Yield Cart Drawers & Sticky Mobile Loops',
      desc: 'Traffic without conversion is vanity. We engineer custom slide-out cart drawers with tiered free shipping/gift thresholds, sticky mobile PDP buy bars, and Shopify Plus Checkout Extensibility 1-click post-purchase order bumps.',
      stats: [
        { label: 'Avg AOV Lift', value: '+24.5%' },
        { label: 'Checkout Start Rate', value: '+38.2%' },
        { label: 'Cart Abandonment Drop', value: '-19.4%' }
      ]
    },
    {
      id: 'aeo',
      num: '03',
      title: 'AEO & GEO: The New AI Search Frontier',
      subtitle: 'Answer Engine Optimization & Generative Engine Optimization',
      desc: 'Traditional keyword SEO is decaying. AI search engines (Perplexity, ChatGPT Search, Google AI Overviews) bypass classic blog results and directly synthesize answers. We ground your Shopify store with deep Schema.org JSON-LD microdata so AI engines recommend your products first.',
      stats: [
        { label: 'AI Citations', value: '#1 Result' },
        { label: 'Schema Depth', value: 'Level 4 Entities' },
        { label: 'Organic AI Traffic', value: '+420%' }
      ]
    }
  ];

  const current = pillars.find(p => p.id === activeTab) || pillars[0];

  return (
    <section id="seo-geo" className="py-28 bg-[#07080a] text-white border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
            <span className="uppercase tracking-wider">SPEED, CRO & AI SEARCH VISIBILITY</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Sub-second speed & <span className="font-serif-italic font-normal text-cobalt-400">AI search citations</span>.
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Engineered to dominate both Google Core Web Vitals and next-gen AI search engines like Perplexity and ChatGPT.
          </p>
        </div>

        {/* Minimalist Tab Selector */}
        <div className="flex border-b border-white/[0.08] overflow-x-auto scrollbar-none mb-12 gap-4 sm:gap-8">
          {pillars.map(p => {
            const isSelected = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`pb-4 px-2 text-left border-b-2 transition-all whitespace-nowrap flex items-center gap-2.5 ${
                  isSelected
                    ? 'border-cobalt-500 text-white font-bold'
                    : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                <span className={`text-[11px] font-mono ${isSelected ? 'text-cobalt-400' : 'text-stone-500'}`}>
                  {p.num}
                </span>
                <span className="text-sm tracking-tight">{p.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-cobalt-400 uppercase tracking-wider font-semibold">
                {current.num} ARCHITECTURAL PILLAR
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
                {current.title}
              </h3>
              <div className="text-xs text-stone-400 font-mono mt-1">
                {current.subtitle}
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {current.desc}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/[0.08]">
              {current.stats.map((s, idx) => (
                <div key={idx}>
                  <span className="text-[10px] font-mono text-stone-500 uppercase block mb-1">
                    {s.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-cobalt-400 font-mono">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right code / benchmark preview */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#0c0e12] border border-white/[0.08] space-y-4 font-mono text-xs text-stone-300 shadow-2xl">
              <div className="text-[11px] text-stone-500 border-b border-white/[0.06] pb-3 flex items-center justify-between">
                <span className="text-white font-medium">AI_ENTITY_SCHEMA.jsonld</span>
                <span className="text-emerald-400">Validated 100%</span>
              </div>
              <div className="text-[11px] text-stone-400 leading-relaxed overflow-x-auto">
                <div className="text-cobalt-400">&#123;</div>
                <div className="pl-3">"@context": "https://schema.org",</div>
                <div className="pl-3">"@type": "Product",</div>
                <div className="pl-3">"name": "Bespoke Shopify Catalog",</div>
                <div className="pl-3">"offers": &#123;</div>
                <div className="pl-6">"@type": "Offer",</div>
                <div className="pl-6">"availability": "InStock",</div>
                <div className="pl-6">"seller": "Pinakkaa Plus"</div>
                <div className="pl-3">&#125;</div>
                <div className="text-cobalt-400">&#125;</div>
              </div>
              <div className="pt-2 text-[10px] text-stone-500 border-t border-white/[0.06]">
                Grounds product entities directly into Perplexity & ChatGPT indices
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
