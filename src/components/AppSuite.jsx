import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function AppSuite() {
  const [activeAudience, setActiveAudience] = useState('brands'); // 'brands' or 'agencies'

  const instruments = [
    {
      id: 'tags',
      num: '01',
      name: 'Bulk Tag Manager',
      category: 'CATALOG AUTOMATION',
      audience: 'both',
      tagline: 'Bulk add, remove, replace or update product tags with CSV audit logs.',
      description: 'Stop updating hundreds of product tags manually. Add, remove, replace, and bulk-update product tags across thousands of SKUs in seconds with multi-condition filters and instant CSV rollback snapshots.',
      link: 'https://apps.shopify.com/bulk-tag-manager-pinakkaa',
      features: [
        'Add, remove, replace, or update product tags in bulk',
        'Advanced product filtering (by collection, vendor, inventory, price)',
        'Operation history and 1-click rollback snapshots',
        'Downloadable CSV audit reports & zero theme script injection'
      ],
      metric: 'From $5.99/mo',
      badge: '3-Day Free Trial',
      cta: 'Install on App Store'
    },
    {
      id: 'variants',
      num: '02',
      name: 'Bulk Variant Editor',
      category: 'SPREADSHEET SYNC',
      audience: 'both',
      tagline: 'Manage thousands of product variants using Google Sheets and CSV.',
      description: 'Stop manually editing prices and SKUs one by one. Bulk update prices, compare-at-prices, barcodes, and inventory levels. Directly import and create size/color variants using Google Sheets or CSV workflows without lag.',
      link: 'https://apps.shopify.com/bulk-variant-editor-pinakkaa',
      features: [
        'Bulk update prices, compare-at-prices, SKUs, barcodes & stock',
        'Create size and color variants in bulk with automated matrix',
        'Direct 2-way Google Sheets & CSV import/export pipeline',
        'Track real-time import progress, tested on 100k+ SKUs without freeze'
      ],
      metric: '$49/mo Plan',
      badge: '7-Day Free Trial',
      cta: 'Install on App Store'
    },
    {
      id: 'images',
      num: '03',
      name: 'Variant Image Sync',
      category: 'MEDIA CONNECTOR',
      audience: 'brands',
      tagline: 'Auto-assign variant images using SKU matching straight from Google Drive.',
      description: 'Stop uploading and assigning hundreds of product images one by one. Variant Image Sync automatically pairs variant images using intelligent SKU and filename matching directly from your Google Drive folders.',
      link: 'https://apps.shopify.com/bulk-variant-update-g-sync',
      features: [
        'Direct Google Drive integration: zero manual file re-upload',
        'Automatic variant image assignment using exact SKU matching',
        'Pre-import validation & broken asset link detection',
        'Detailed import logs with high-resolution CDN optimization'
      ],
      metric: 'From $4.99/mo',
      badge: 'Free Trial Available',
      cta: 'Install on App Store'
    },
    {
      id: 'functions',
      num: '04',
      name: 'Shopify Functions (Rust Engine)',
      category: 'SERVERLESS CHECKOUT',
      audience: 'agencies',
      tagline: 'Sub-5ms checkout discounts, payment customization & cart transforms.',
      description: 'Compiled to WebAssembly (Wasm) and executed directly on Shopify’s global checkout infrastructure in under 3.5ms. Eliminate slow theme scripts and buggy client-side discount apps forever.',
      link: '#app-engineering',
      features: [
        'Sub-5ms deterministic serverless execution inside checkout runtime',
        'Custom tiered volume discounts & B2B customer tier pricing',
        'Cart transform rules: automatic product bundling & gift-with-purchase',
        'Zero impact on storefront speed — zero theme JavaScript'
      ],
      metric: '3.2ms execution runtime',
      badge: 'Bespoke Wasm',
      cta: 'Explore Rust Engine'
    },
    {
      id: 'erp',
      num: '05',
      name: 'Private App & ERP Gateway',
      category: 'ENTERPRISE INTEGRATION',
      audience: 'agencies',
      tagline: 'Air-gapped middleware syncing NetSuite, SAP, Katana, and 3PL WMS.',
      description: 'Dedicated Node.js and Redis microservices handling high-volume inventory reconciliation, order dispatch, and custom B2B punchout pipelines without hitting Shopify Admin rate limits.',
      link: '#app-engineering',
      features: [
        'Bi-directional synchronization for NetSuite, SAP, Katana, and Odoo',
        'Multi-location 3PL warehouse inventory polling every 60 seconds',
        'Webhook redundancy with automated backoff and dead-letter queues',
        'Enterprise security: AES-256 at rest, TLS 1.3 in transit'
      ],
      metric: 'Real-time inventory sync',
      badge: 'Private Microservice',
      cta: 'Explore ERP Gateway'
    },
    {
      id: 'aeo',
      num: '06',
      name: 'AEO & GEO Knowledge Graph',
      category: 'AI SEARCH ENGINE',
      audience: 'brands',
      tagline: 'Semantic entity schema for Perplexity, ChatGPT & Google AI Overviews.',
      description: 'Traditional SEO is decaying as generative AI engines answer queries directly. We ground your Shopify product catalog into rich Schema.org JSON-LD microdata so AI models cite and recommend your products first.',
      link: '#seo-geo',
      features: [
        'Deep Schema.org microdata (Product, Offer, ReturnPolicy, FAQPage)',
        'Entity grounding for Perplexity Shopping and Google AI Overviews',
        'Automated real-time inventory and pricing syndication feeds',
        'Sub-1s mobile LCP guarantee ensuring crawler indexing priority'
      ],
      metric: 'Citations in AI Engines',
      badge: 'Next-Gen Schema',
      cta: 'Explore AEO/GEO'
    }
  ];

  const filteredInstruments = instruments.filter(inst => {
    if (activeAudience === 'brands') return inst.audience === 'brands' || inst.audience === 'both';
    return inst.audience === 'agencies' || inst.audience === 'both';
  });

  return (
    <section id="app-suite" className="py-28 bg-[#07080a] text-white border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Marmeto Dark Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
              <span className="uppercase tracking-wider">THE SUITE — 06 INSTRUMENTS</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              One product. <span className="font-serif-italic font-normal text-cobalt-400">One clear role</span>.
            </h2>
            
            <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed">
              Each product is a dedicated instrument with its own features, use cases, and performance SLAs. Start with one. Compose your own suite over time.
            </p>
          </div>

          {/* Persona Segmented Toggle with Cobalt Accent */}
          <div className="flex items-center bg-[#101318] p-1.5 rounded-full border border-white/[0.08] shrink-0 self-start md:self-end">
            <button
              onClick={() => setActiveAudience('brands')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all ${
                activeAudience === 'brands'
                  ? 'bg-cobalt-600 text-white font-bold shadow-md shadow-cobalt-600/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              01 ECOMMERCE BRANDS
            </button>
            <button
              onClick={() => setActiveAudience('agencies')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all ${
                activeAudience === 'agencies'
                  ? 'bg-cobalt-600 text-white font-bold shadow-md shadow-cobalt-600/30'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              02 AGENCIES & SAAS
            </button>
          </div>
        </div>

        {/* Fluid Instrument Grid - 3D Clean Architecture Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {filteredInstruments.map((inst) => {
            const isAppStore = inst.link.startsWith('http');
            return (
              <div
                key={inst.id}
                className="group border-t border-white/[0.1] pt-6 flex flex-col justify-between hover:border-cobalt-500 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cobalt-400 font-bold">
                      {inst.num} / 06
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#12151c] border border-white/[0.08] text-stone-300">
                      {inst.badge}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-1">
                    {inst.category}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cobalt-400 transition-colors mb-3">
                    {inst.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-normal">
                    {inst.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2 mb-8 border-t border-white/[0.05] pt-4">
                    {inst.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2 text-xs text-stone-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cobalt-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-500 block">
                      Target Metric
                    </span>
                    <span className="text-xs font-bold text-white">
                      {inst.metric}
                    </span>
                  </div>

                  {isAppStore ? (
                    <a
                      href={inst.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-[#12151c] hover:bg-cobalt-600 text-stone-300 hover:text-white text-xs font-semibold border border-white/[0.08] hover:border-transparent hover:-translate-y-0.5 hover:shadow-md hover:shadow-cobalt-600/30 active:scale-95 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                    >
                      <span>{inst.cta}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => smoothScrollTo(inst.link)}
                      className="px-4 py-2 rounded-full bg-[#12151c] hover:bg-cobalt-600 text-stone-300 hover:text-white text-xs font-semibold border border-white/[0.08] hover:border-transparent hover:-translate-y-0.5 hover:shadow-md hover:shadow-cobalt-600/30 active:scale-95 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                    >
                      <span>{inst.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* App Store Verification Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0c0e12] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cobalt-500/10 border border-cobalt-500/20 flex items-center justify-center text-cobalt-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                All 3 Catalog Suite Applications are Live on the Shopify App Store
              </div>
              <div className="text-xs text-stone-400 mt-1">
                Install directly with a 14-day free trial. Zero theme script injection, 100% compliant with Shopify Billing API v2.
              </div>
            </div>
          </div>

          <a
            href="https://apps.shopify.com/bulk-tag-manager-pinakkaa"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-xs font-semibold text-white transition-all flex items-center gap-2 shadow-lg shadow-cobalt-600/30 shrink-0"
          >
            <span>Explore on App Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
