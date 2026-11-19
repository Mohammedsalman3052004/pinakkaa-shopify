import React, { useState } from 'react';
import { 
  AppWindow, 
  Store, 
  Gauge, 
  TrendingUp, 
  Bot, 
  Workflow, 
  CheckCircle, 
  ArrowRight, 
  Boxes, 
  Terminal,
  ShieldCheck,
  Zap,
  Sparkles,
  Search
} from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'apps',
      category: 'apps',
      icon: AppWindow,
      badge: 'Core Specialty',
      badgeColor: 'text-cobalt-400 border-cobalt-500/30 bg-cobalt-500/10',
      title: 'Shopify App Engineering (Private, Custom & Public)',
      subtitle: 'Native apps built on Remix, Node, and Shopify Functions.',
      description: 'When third-party apps slow down your checkout or fail to meet complex business logic, we architect custom solutions. From internal private ERP pipelines to certified public apps on the Shopify App Store.',
      deliverables: [
        'Private Apps: High-security internal ERP/CRM & warehouse connectors',
        'Custom Apps: Tailored discount, bundling & checkout validation rules',
        'Public Apps: App Store certified, multi-tenant Postgres, Polaris UI',
        'Shopify Functions (Rust/Wasm) executing in <5ms without JS bloat'
      ],
      tag: 'Remix • Node • Rust • GraphQL'
    },
    {
      id: 'launch',
      category: 'launch',
      icon: Store,
      badge: 'Design & Build',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      title: 'Bespoke Store Launch & High-Converting UI/UX',
      subtitle: 'Zero generic templates. 100% custom Liquid 2.0 & Hydrogen.',
      description: 'Generic Shopify themes bleed conversions. We craft pixel-perfect, mobile-first brand experiences from scratch in Figma and translate them into blazing fast, modular Liquid sections or headless storefronts.',
      deliverables: [
        'Custom Figma UI/UX designed around buyer psychology and conversion loops',
        'Liquid 2.0 modular architecture with native theme customizer blocks',
        'Hydrogen / Oxygen headless storefronts for ultra-scale enterprise DTC',
        'Full checkout branding, customized order status, and post-purchase flows'
      ],
      tag: 'Figma • Liquid 2.0 • Hydrogen • Tailwind'
    },
    {
      id: 'management',
      category: 'retainer',
      icon: Boxes,
      badge: 'From $5,000/mo',
      badgeColor: 'text-slate-300 border-slate-700 bg-slate-800/60',
      title: 'Shopify Store Management & Retainer Sprints',
      subtitle: 'Your dedicated fractional Shopify engineering squad.',
      description: 'Keep your store running like clockwork. We handle ongoing development sprints, theme updates, app rationalization, emergency uptime monitoring, and weekly feature launches.',
      deliverables: [
        'Dedicated weekly engineering hours with guaranteed SLA response times',
        'Proactive app stack audits (removing slow plugins and redundant scripts)',
        'Shopify Markets, multi-currency, and global localization management',
        'Monthly conversion & performance audits with clear sprint deliverables'
      ],
      tag: 'Bi-Weekly Sprints • Slack Channel • 99.9% SLA'
    },
    {
      id: 'speed-cro',
      category: 'growth',
      icon: Gauge,
      badge: '95+ CWV Guarantee',
      badgeColor: 'text-cobalt-400 border-cobalt-500/30 bg-cobalt-500/10',
      title: 'Sub-Second Speed Optimization & Core Web Vitals',
      subtitle: 'Mobile speed is revenue. We fix slow stores without breaking pixels.',
      description: 'Every 100ms of latency drops conversion by 1%. We conduct deep code-level profiling, defer tracking scripts safely, purge unused CSS, and optimize assets so your store loads instantly on mobile.',
      deliverables: [
        'Sub-1.0 second Largest Contentful Paint (LCP) on mobile 4G networks',
        'Zero layout shifts (CLS < 0.05) and instant interaction readiness (INP)',
        'Smart script facade loading for Klaviyo, Meta, TikTok & Google Tag Manager',
        'Shopify CDN asset compression and responsive modern format serving'
      ],
      tag: 'Core Web Vitals • Lighthouse 95+ • Profiling'
    },
    {
      id: 'cro',
      category: 'growth',
      icon: TrendingUp,
      badge: 'Conversion Uplift',
      badgeColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      title: 'Aggressive CRO (Conversion Rate Optimization)',
      subtitle: 'Engineered PDPs and checkout flows that double cart completion.',
      description: 'Design alone does not convert. We implement battle-tested behavioral UX patterns: interactive sticky add-to-carts, tiered free shipping progress bars, dynamic upsell slide-outs, and frictionless 1-click checkouts.',
      deliverables: [
        'High-converting cart drawer with tiered free-gift & shipping thresholds',
        'PDP sticky purchase bars, variant swatches, and social proof anchors',
        'Shopify Plus Checkout Extensibility custom upsell widgets & address validation',
        'A/B testing implementation to statistically prove revenue gains'
      ],
      tag: 'AOV Boost • Checkout Extensibility • +30% CRO'
    },
    {
      id: 'aeo-geo',
      category: 'discovery',
      icon: Search,
      badge: 'Next-Gen Discovery',
      badgeColor: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
      title: 'SEO, AEO (Answer Engine) & GEO (Generative Engine)',
      subtitle: 'Rank on Google, Perplexity, ChatGPT Shopping & Google AI Overviews.',
      description: 'Traditional SEO only covers blue links. Generative AI is reshaping commerce discovery. We build deep Knowledge Graph entity markup, clean semantic JSON-LD, and LLM-ready markdown endpoints so AI engines recommend your products.',
      deliverables: [
        'Basic & Advanced Technical SEO: Semantic architecture, sitemaps, canonicals',
        'AEO: Rich Schema.org markup (Product, Offer, MerchantReturn, FAQ, Rating)',
        'GEO: Knowledge Graph entity grounding for ChatGPT & Perplexity Shopping',
        'AI engine crawler optimization to dominate zero-click transactional answers'
      ],
      tag: 'Schema.org • LLM Knowledge Graph • AI Overviews'
    },
    {
      id: 'api',
      category: 'apps',
      icon: Workflow,
      badge: 'Enterprise Architecture',
      badgeColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      title: 'Mission-Critical API Integrations & Middleware',
      subtitle: 'Bi-directional real-time sync with ERP, CRM, and 3PL WMS.',
      description: 'Flawless communication between Shopify and your backend systems. We build resilient middleware that handles rate-limits, webhook deduplication, and automated retry queues for high-volume transactions.',
      deliverables: [
        'ERP Sync: NetSuite, SAP, Microsoft Dynamics, Katana, Odoo',
        '3PL & Warehouse: ShipBob, Flexport, custom EDI endpoints, inventory feeds',
        'Marketing & Loyalty: Klaviyo custom event pipelines, Yotpo, Gorgias sync',
        'Webhook worker pipelines with dead-letter queue recovery and HMAC security'
      ],
      tag: 'REST • GraphQL • Webhooks • Redis • Node'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'apps', label: 'Apps & APIs' },
    { id: 'launch', label: 'Store Launch & UI' },
    { id: 'growth', label: 'Speed & CRO' },
    { id: 'discovery', label: 'SEO / AEO / GEO' },
    { id: 'retainer', label: 'Store Management' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-obsidian-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/20 text-xs font-mono text-cobalt-400 mb-4">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Full-Spectrum Shopify Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            From low-latency custom apps to high-converting bespoke storefront launches and generative AI search indexing.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cobalt-600 text-white shadow-sm shadow-cobalt-600/30'
                    : 'bg-obsidian-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between glass-card-hover group border border-slate-800/80"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-slate-700/60 flex items-center justify-center text-cobalt-400 group-hover:text-white group-hover:border-cobalt-500/50 group-hover:bg-cobalt-600/10 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cobalt-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet Deliverables */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cobalt-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Tag & Action */}
                <div className="mt-7 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {service.tag}
                  </span>
                  <button 
                    onClick={() => {
                      const el = document.querySelector('#contact-form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs text-cobalt-400 group-hover:text-cobalt-300 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>Scope this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
