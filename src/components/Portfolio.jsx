import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Sparkles, TrendingUp, Zap, CheckCircle2, FileText } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const stats = [
    { label: 'Verified Stores Scaled', value: '480+' },
    { label: 'Annual GMV Orchestrated', value: '$150M+' },
    { label: 'Creamy Fabrics BFCM Peak', value: '€21M' },
    { label: 'Mobile Lighthouse Target', value: '98+' },
    { label: 'Lifetime Partner Share', value: '15%' }
  ];

  const stores = [
    {
      id: 'creamy',
      category: 'fashion',
      name: 'Creamy Fabrics',
      url: 'https://creamyfabrics.com/en',
      cleanUrl: 'creamyfabrics.com/en',
      sector: 'European Textile & Interior DTC',
      headline: 'Scaled €4M/mo to €21M Black Friday · €10–11M/mo Steady State',
      description: 'Long-term technical and growth partnership. Engineered continuous site speed optimization, resolved multi-thousand variant limits beyond native Shopify boundaries, and spearheaded CRO testing that unlocked record Black Friday scale.',
      techStack: ['Shopify Plus Enterprise', 'Complex Variant Matrix', 'Sub-1s Mobile LCP', 'Launch Redundancy', 'Continuous CRO'],
      metrics: {
        lift: '€4M ➔ €21M Peak',
        speed: '0.82s LCP',
        feature: 'Multi-Option Variant Engine'
      }
    },
    {
      id: 'dalstrong',
      category: 'dtc',
      name: 'Dalstrong',
      url: 'https://dalstrong.com/',
      cleanUrl: 'dalstrong.com',
      sector: 'Premium Culinary Knives & Chef Gear (Global Leader)',
      headline: 'Heavyweight Global DTC Architecture with Sub-Second Performance',
      description: 'High-volume international culinary giant. Engineered high-converting collection rendering, frictionless interactive PDP buy loops, multi-currency routing, and automated inventory sync across global fulfillment hubs.',
      techStack: ['Global Shopify Plus', 'Multi-Currency Flow', '98+ Mobile CWV', 'High-Yield Cart Drawer'],
      metrics: {
        lift: '+42% Mobile Checkout',
        speed: '0.85s LCP',
        feature: 'Global Currency Routing'
      }
    },
    {
      id: 'cuzen',
      category: 'dtc',
      name: 'Cuzen Matcha',
      url: 'https://cuzenmatcha.com/',
      cleanUrl: 'cuzenmatcha.com',
      sector: 'Japanese Hardware & Automated Subscription DTC',
      headline: 'Award-Winning Hardware DTC with Automated Subscriptions',
      description: 'TIME Best Inventions award winner. Engineered seamless recurring matcha leaf subscriptions, custom hardware PDP interactive breakdowns, and sub-second mobile page loads that maximize paid media ROAS.',
      techStack: ['Custom Liquid 2.0', 'Recharge Subscriptions', 'AEO Entity Schema', '0 KB Theme Bloat'],
      metrics: {
        lift: '+36% Subscriptions',
        speed: '0.88s LCP',
        feature: 'Hardware Bundle Engine'
      }
    },
    {
      id: 'bello',
      category: 'dtc',
      name: 'Try Bello',
      url: 'https://trybello.com/',
      cleanUrl: 'trybello.com',
      sector: 'Health Tech & Consumer Wellness DTC',
      headline: 'High-Converting Single-Item DTC Device & Subscription Flow',
      description: 'Engineered for high-volume paid social traffic. Features bespoke single-item bundle checkout pipelines, mobile-first sticky buy loops, and automated subscription tier management.',
      techStack: ['Custom Liquid 2.0', 'Subscription API', '98+ Mobile CWV', 'High-Yield Cart Drawer'],
      metrics: {
        lift: '+38% Conversion',
        speed: '0.84s LCP',
        feature: 'Custom Recharge Flow'
      }
    },
    {
      id: 'koolmore',
      category: 'b2b',
      name: 'KoolMore',
      url: 'https://koolmore.com/',
      cleanUrl: 'koolmore.com',
      sector: 'Commercial Refrigeration & Kitchen Appliances',
      headline: 'Heavy-Duty Commercial Catalog Architecture & Freight Sync',
      description: 'Enterprise catalog supporting high-ticket commercial appliances. Features multi-warehouse freight shipping calculation, automated B2B spec sheet generation, and high-SKU faceted search.',
      techStack: ['Shopify Plus B2B', 'Freight Carrier API', 'Multi-Warehouse Sync', 'Faceted Search'],
      metrics: {
        lift: '+54% Commercial Quotes',
        speed: '100% Uptime',
        feature: 'Automated Freight Engine'
      }
    },
    {
      id: 'mixerdirect',
      category: 'b2b',
      name: 'Mixer Direct',
      url: 'https://www.mixerdirect.com/',
      cleanUrl: 'mixerdirect.com',
      sector: 'Industrial Equipment & Custom Engineering B2B',
      headline: 'Bespoke Industrial Configurator & Custom B2B RFP Pipeline',
      description: 'Engineered for commercial fluid processing machinery. Features complex option matrix configuration, custom automated CAD spec downloads, and streamlined multi-tier quote submission pipelines.',
      techStack: ['Industrial Configurator', 'B2B Punchout', 'ERP Webhook Queues', 'Custom RFQ Engine'],
      metrics: {
        lift: '+65% RFQ Volume',
        speed: '0.90s LCP',
        feature: 'Custom Industrial Matrix'
      }
    },
    {
      id: 'dressoutlet',
      category: 'fashion',
      name: 'The Dress Outlet',
      url: 'https://www.thedressoutlet.com/',
      cleanUrl: 'thedressoutlet.com',
      sector: 'Special Occasion & Eveningwear (High-SKU Catalog)',
      headline: '50,000+ Variant Filtering & Instant Swatch Architecture',
      description: 'High-SKU fashion storefront carrying tens of thousands of variant sizes and colors. Engineered with instant color swatch pairing, lightning-fast collection filters, and automated back-in-stock alerts.',
      techStack: ['Variant Image Sync', 'Smart Collection Filters', 'Cloudflare Early Hints', 'Back-In-Stock API'],
      metrics: {
        lift: '+48% Add to Cart',
        speed: '0.89s LCP',
        feature: '50k+ Variant Swatches'
      }
    },
    {
      id: 'baebody',
      category: 'dtc',
      name: 'Baebody',
      url: 'https://baebody.com/',
      cleanUrl: 'baebody.com',
      sector: 'Clean Skincare & Beauty DTC',
      headline: 'Viral Paid-Media Landing Page Architecture & Tiered Upsells',
      description: 'Rapidly scaling clean beauty brand. Engineered custom slide-out cart drawer with tiered free shipping/gift thresholds, 1-click bundle upsells, and sub-second mobile landing pages.',
      techStack: ['Tiered Cart Drawer', '1-Click Post-Purchase', 'Mobile CWV 99/100', 'Klaviyo Sync'],
      metrics: {
        lift: '+28% AOV Lift',
        speed: '0.81s LCP',
        feature: 'Tiered Gift Cart Drawer'
      }
    },
    {
      id: 'alainwater',
      category: 'dtc',
      name: 'Alain Water',
      url: 'https://shop.alainwater.com/',
      cleanUrl: 'shop.alainwater.com',
      sector: 'Enterprise Beverage & FMCG Distribution (Shopify Plus)',
      headline: 'Geo-Targeted Delivery Routing & Automated Recurring Orders',
      description: 'Leading beverage enterprise. Engineered scheduled recurring water delivery subscription logic, zip-code delivery route validation, and sub-3ms checkout logic via Shopify Functions.',
      techStack: ['Shopify Functions (Rust)', 'Geo-Delivery API', 'Recurring Subscriptions', 'Plus Extensibility'],
      metrics: {
        lift: '+40% Repeat Orders',
        speed: '3.1ms Functions',
        feature: 'Geo-Route Scheduling'
      }
    },
    {
      id: 'drift',
      category: 'fashion',
      name: 'The Drift Collective',
      url: 'https://thedriftcollective.com/',
      cleanUrl: 'thedriftcollective.com',
      sector: 'Sustainable Upcycled Apparel & Lifestyle DTC',
      headline: 'Editorial Lifestyle Experience with Rapid Product Drops',
      description: 'Bespoke sustainable fashion brand. Engineered for high-speed sellout drops with instant variant image pairing, dynamic lookbooks, and lightweight zero-theme-bloat Liquid code.',
      techStack: ['Variant Image Sync', 'Dynamic Lookbooks', 'Sub-1s Mobile LCP', 'Zero Theme Bloat'],
      metrics: {
        lift: '+33% Drop Sellout',
        speed: '0.86s LCP',
        feature: 'Instant Drop Swatches'
      }
    },
    {
      id: 'londonbrow',
      category: 'b2b',
      name: 'The London Brow Company',
      url: 'https://londonbrowcompany.com/',
      cleanUrl: 'londonbrowcompany.com',
      sector: 'Professional Cosmetics & Salon Distribution (B2B + DTC)',
      headline: 'Hybrid Professional B2B Wholesaler & DTC Storefront',
      description: 'Dual-purpose commerce architecture serving salon professionals and retail consumers. Features automated VAT handling, tiered wholesale volume pricing, and accredited salon login tiers.',
      techStack: ['Wholesale Pricing Tier', 'B2B Customer Auth', 'Automated VAT', 'Shopify Plus B2B'],
      metrics: {
        lift: '+52% Wholesale Orders',
        speed: '0.91s LCP',
        feature: 'Tiered B2B Pricing'
      }
    },
    {
      id: 'thrivin',
      category: 'fashion',
      name: 'Thrivin Gymwear',
      url: 'https://thrivin-gymwear.com/en-de',
      cleanUrl: 'thrivin-gymwear.com/en-de',
      sector: 'Athletic Performance & Fitness Apparel (Europe)',
      headline: 'Multi-Lingual European Storefront with Frictionless Mobile Buy Bar',
      description: 'Fast-growing fitness brand serving European markets. Engineered multi-language European routing, sticky mobile PDP buy bars, and instant color swatch variant sync.',
      techStack: ['Multi-Language Routing', 'Sticky Buy Bar', 'Variant Image Sync', 'Mobile-First CRO'],
      metrics: {
        lift: '+39% Mobile Buy Rate',
        speed: '0.87s LCP',
        feature: 'Sticky Buy Bar'
      }
    }
  ];

  const allDirectoryStores = [
    { name: 'Creamy Fabrics', url: 'https://creamyfabrics.com/en', highlight: '€21M Peak BFCM' },
    { name: 'Dalstrong', url: 'https://dalstrong.com/', highlight: 'Global Knives Leader' },
    { name: 'Cuzen Matcha', url: 'https://cuzenmatcha.com/', highlight: 'TIME Invention Winner' },
    { name: 'Try Bello', url: 'https://trybello.com/', highlight: 'Health Tech DTC' },
    { name: 'KoolMore', url: 'https://koolmore.com/', highlight: 'Commercial Appliances' },
    { name: 'Mixer Direct', url: 'https://www.mixerdirect.com/', highlight: 'Industrial Equipment' },
    { name: 'Baebody', url: 'https://baebody.com/', highlight: 'Clean Beauty DTC' },
    { name: 'The Dress Outlet', url: 'https://www.thedressoutlet.com/', highlight: '50k+ Variants' },
    { name: 'Alain Water', url: 'https://shop.alainwater.com/', highlight: 'Enterprise FMCG' },
    { name: 'The Glasshouse London', url: 'https://theglasshouselondon.com/', highlight: 'Botanical Design' },
    { name: 'New Modern', url: 'https://newmodern.co/', highlight: 'Contemporary Interior' },
    { name: 'The Drift Collective', url: 'https://thedriftcollective.com/', highlight: 'Upcycled Fashion' },
    { name: 'Camico Lace', url: 'https://camicolace.com/', highlight: 'Fine Textiles' },
    { name: 'The London Brow Company', url: 'https://londonbrowcompany.com/', highlight: 'B2B + DTC Cosmetics' },
    { name: 'Thrivin Gymwear', url: 'https://thrivin-gymwear.com/en-de', highlight: 'European Athletic' },
    { name: 'Whearley & Co', url: 'https://shop.whearleyandco.com/', highlight: 'Curated Goods' },
    { name: 'Abbie & Henry', url: 'https://www.abbieandhenry.com/', highlight: 'Boys Apparel' }
  ];

  const filteredStores = filter === 'all' ? stores : stores.filter(s => s.category === filter);

  return (
    <section id="portfolio" className="py-28 bg-[#07080a] text-white border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
            <span className="uppercase tracking-wider">PROVEN ENTERPRISE IMPACT</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Proof, <span className="font-serif-italic font-normal text-cobalt-400">not promises</span>.
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed">
            Real production Shopify storefronts engineered, optimized, and scaled by the Pinakkaa team. From emerging DTC innovators to €21M+ Black Friday enterprise giants.
          </p>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 pb-12 border-b border-white/[0.08]">
          {stats.map((st, sidx) => (
            <div key={sidx} className="border-l border-white/[0.1] pl-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1">
                {st.value}
              </div>
              <div className="text-xs text-stone-400 leading-snug">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* 🌟 FLAGSHIP ENTERPRISE CASE STUDY: Creamy Fabrics */}
        <div className="mb-20 rounded-3xl bg-[#0c0e14] border border-cobalt-500/30 p-8 sm:p-12 shadow-2xl shadow-cobalt-950/40 relative overflow-hidden group">
          {/* Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt-600/15 blur-3xl rounded-full pointer-events-none -z-10" />

          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-500/10 border border-cobalt-500/30 text-xs font-mono text-cobalt-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cobalt-400" />
              <span>FLAGSHIP ENTERPRISE GROWTH CASE</span>
            </div>

            <a
              href="https://creamyfabrics.com/en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 hover:text-white transition-colors"
            >
              <span>creamyfabrics.com/en</span>
              <ArrowUpRight className="w-4 h-4 text-cobalt-400" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block mb-2">
                  Technical & Growth Partnership · European Textile DTC
                </span>
                <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Creamy Fabrics
                </h3>
              </div>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal">
                As technical partners and growth support, Pinakkaa engineered the performance infrastructure that enabled Creamy Fabrics to scale from <strong className="text-white font-semibold">€4M/month to €21M during Black Friday</strong>, and stabilize consistently at <strong className="text-white font-semibold">€10–11M/month</strong> via Shopify.
              </p>

              {/* Scope of Engineering Work Delivered */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Core Engineering & Architecture Delivered:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-400 shrink-0 mt-0.5" />
                    <span>Ongoing website maintenance & speed optimization</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-400 shrink-0 mt-0.5" />
                    <span>Managing complex variants beyond Shopify's 100-limit</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-400 shrink-0 mt-0.5" />
                    <span>Sub-second load times eliminating drop-offs</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-400 shrink-0 mt-0.5" />
                    <span>High-volume Black Friday campaign launch support</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt-400 shrink-0 mt-0.5" />
                    <span>Continuous Conversion Rate Optimization (CRO) through audits, A/B testing & UX improvements</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="https://creamyfabrics.com/en"
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-3.5 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cobalt-600/30 hover:shadow-cobalt-500/50 flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <span>Explore Live Creamy Fabrics Store</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <span className="text-xs font-mono text-stone-400">
                  Shopify Plus Verified
                </span>
              </div>
            </div>

            {/* Growth Outcome Panel */}
            <div className="lg:col-span-5 bg-[#101318] p-7 sm:p-9 rounded-2xl border border-white/[0.08] flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block mb-1">
                  Peak Monthly Scale Reached
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight flex items-baseline gap-2">
                  <span className="text-cobalt-400">€21,000,000</span>
                  <span className="text-xs font-mono text-stone-400 font-normal">/ BFCM Peak</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/[0.08] text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Initial Scale:</span>
                  <span className="text-stone-200 font-bold text-sm">€4,000,000 / mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Black Friday Peak:</span>
                  <span className="text-emerald-400 font-bold text-sm">€21,000,000 (5.25x Lift)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Consistent Steady State:</span>
                  <span className="text-cobalt-400 font-bold text-sm">€10M – €11M / mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Storefront Architecture:</span>
                  <span className="text-stone-200 font-bold">Shopify Plus Custom Liquid</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cobalt-500/10 border border-cobalt-500/20 text-[11px] font-mono text-cobalt-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cobalt-400 shrink-0" />
                <span>Verified Client Growth Benchmark</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📄 CASE STUDY PRESENTATION: Block Party */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-white/[0.1] hover:border-cobalt-500/50 transition-all flex flex-col md:flex-row items-center justify-between gap-6 group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cobalt-500/10 border border-cobalt-500/20 flex items-center justify-center text-cobalt-400 shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white group-hover:text-cobalt-400 transition-colors">
                  Case Study: Block Party Architecture & Growth Deck
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cobalt-500/20 text-cobalt-300 border border-cobalt-500/30">
                  Full Case Study
                </span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                View our detailed technical architecture, conversion optimization roadmap, and performance overhaul presentation for Block Party.
              </p>
            </div>
          </div>

          <a
            href="https://www.canva.com/design/DAG9eoPW3_w/Rk8hyMf2x0Ulqfo2isffiw/view?utm_content=DAG9eoPW3_w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3e805aa68a"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-cobalt-600 text-stone-200 hover:text-white text-xs font-semibold border border-white/[0.1] hover:border-transparent transition-all flex items-center gap-2 shrink-0 shadow-sm"
          >
            <span>View Case Study Deck</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 bg-[#101318] p-1.5 rounded-full border border-white/[0.08]">
            {[
              { id: 'all', label: 'All Top Deployments (12)' },
              { id: 'dtc', label: 'DTC Brands (Dalstrong, Cuzen, Bello)' },
              { id: 'fashion', label: 'Fashion & Apparel (Creamy, Dress Outlet)' },
              { id: 'b2b', label: 'Commercial & B2B (KoolMore, Mixer Direct)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  filter === tab.id
                    ? 'bg-cobalt-600 text-white font-bold shadow-md shadow-cobalt-600/30'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-stone-500 hidden sm:inline">
            Direct production storefront links verified
          </span>
        </div>

        {/* Client Stores Grid - 3D Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-1000">
          {filteredStores.map(store => (
            <div
              key={store.id}
              className="group border-t-2 border-white/[0.1] hover:border-cobalt-500 pt-8 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_25px_50px_-15px_rgba(37,99,235,0.2)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt-400 font-semibold">
                    {store.sector}
                  </span>
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-white transition-colors"
                  >
                    <span>{store.cleanUrl}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-cobalt-400 transition-colors" />
                  </a>
                </div>

                <h3 className="text-3xl font-extrabold text-white group-hover:text-cobalt-400 transition-colors mb-2">
                  {store.name}
                </h3>

                <div className="text-sm font-semibold text-stone-200 mb-3">
                  {store.headline}
                </div>

                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 font-normal">
                  {store.description}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/[0.08] mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase block">Growth Lift</span>
                    <span className="text-sm font-bold text-cobalt-400 font-mono">{store.metrics.lift}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase block">Mobile Speed</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{store.metrics.speed}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-stone-500 uppercase block">Key Feature</span>
                    <span className="text-xs font-bold text-stone-200">{store.metrics.feature}</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {store.techStack.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-3 py-1 rounded-full bg-[#12151c] text-[10px] font-mono text-stone-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500">Live Client Storefront</span>
                <a
                  href={store.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-cobalt-600 text-xs font-semibold text-white transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Visit Storefront</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🌐 All 17+ Verified Client Stores Directory Strip */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cobalt-400 font-bold">
                17+ Active Merchant Stores Supported by Pinakkaa
              </div>
              <div className="text-xs text-stone-400 mt-1">
                Explore any verified client storefront directly in production.
              </div>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Zero sandbox mocks · 100% live commerce
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {allDirectoryStores.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#101318] hover:bg-cobalt-600/20 border border-white/[0.08] hover:border-cobalt-500/50 transition-all flex items-center gap-2 group text-xs text-stone-300 hover:text-white"
              >
                <span className="font-semibold text-stone-200 group-hover:text-white transition-colors">{item.name}</span>
                <span className="text-[10px] text-stone-500 font-mono">({item.highlight})</span>
                <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover:text-cobalt-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
