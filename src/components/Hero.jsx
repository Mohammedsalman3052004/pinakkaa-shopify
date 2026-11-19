import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Tags, 
  Table2, 
  Image as ImageIcon, 
  Activity 
} from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function Hero() {
  const [activeConsoleTab, setActiveConsoleTab] = useState('catalog');
  const consoleRef = useRef(null);
  const heroRef = useRef(null);
  const gridLightRef = useRef(null);
  const gridBloomRef = useRef(null);

  const handleHeroMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Direct DOM manipulation for butter-smooth 144fps tracking with ZERO React re-renders
    if (gridLightRef.current) {
      gridLightRef.current.style.opacity = '1';
      gridLightRef.current.style.maskImage = `radial-gradient(460px circle at ${x}px ${y}px, black 30%, transparent 80%)`;
      gridLightRef.current.style.WebkitMaskImage = `radial-gradient(460px circle at ${x}px ${y}px, black 30%, transparent 80%)`;
    }
    if (gridBloomRef.current) {
      gridBloomRef.current.style.opacity = '1';
      gridBloomRef.current.style.background = `radial-gradient(560px circle at ${x}px ${y}px, rgba(37, 99, 235, 0.18), transparent 75%)`;
    }
  };

  const handleHeroMouseLeave = () => {
    if (gridLightRef.current) gridLightRef.current.style.opacity = '0';
    if (gridBloomRef.current) gridBloomRef.current.style.opacity = '0';
  };

  const handleConsoleMouseMove = (e) => {
    if (!consoleRef.current) return;
    const rect = consoleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    consoleRef.current.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleConsoleMouseLeave = () => {
    if (!consoleRef.current) return;
    consoleRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
  };

  const tickerItems = [
    { name: 'Bulk Tag Manager', type: 'From $5.99/mo · 3-Day Trial', link: 'https://apps.shopify.com/bulk-tag-manager-pinakkaa' },
    { name: 'Bulk Variant Editor', type: '$49/mo · 7-Day Trial', link: 'https://apps.shopify.com/bulk-variant-editor-pinakkaa' },
    { name: 'Variant Image Sync', type: 'From $4.99/mo · Free Trial', link: 'https://apps.shopify.com/bulk-variant-update-g-sync' },
    { name: 'Shopify Functions', type: 'Sub-5ms Rust Engine', link: '#app-engineering' },
    { name: 'Private App Gateway', type: 'Air-Gapped ERP', link: '#app-engineering' },
    { name: 'AEO / GEO Microdata', type: 'AI Search Grounding', link: '#seo-geo' }
  ];

  return (
    <section 
      id="hero" 
      ref={heroRef}
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#07080a] text-white dark-grid"
    >
      {/* Interactive Cursor Grid Illumination Spotlight (Zero Re-render DOM Ref) */}
      <div 
        ref={gridLightRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.32) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.32) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Interactive Ambient Blue Radial Bloom following cursor on grid */}
      <div 
        ref={gridBloomRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 opacity-0"
      />

      {/* Ambient background glow - Royal electric cobalt glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cobalt-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Systems & Partner Status Strip (mitash@pinakkaa.com) */}
        <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 border-b border-white/[0.08] pb-3 mb-8 max-w-5xl mx-auto px-1 sm:px-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-semibold tracking-wide">SYSTEMS OPERATIONAL</span>
            <span className="text-stone-600">/</span>
            <span className="text-stone-300">3 Public Apps Live on Shopify App Store</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-stone-300">15% Lifetime Recurring Partner Commission</span>
            <span className="text-stone-600">/</span>
            <a 
              href="mailto:mitash@pinakkaa.com" 
              className="text-cobalt-400 hover:text-white transition-colors font-medium hover:underline"
            >
              mitash@pinakkaa.com
            </a>
          </div>
        </div>

        {/* Eyebrow badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101318] border border-white/[0.08] text-xs font-mono text-stone-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cobalt-500 animate-pulse"></span>
            <span className="uppercase tracking-wider text-[11px] text-stone-300">CONNECTED COMMERCE FOR SHOPIFY PLUS</span>
            <span className="text-stone-600">·</span>
            <span className="text-cobalt-400 font-semibold">RETAINERS FROM $5,000/MO</span>
          </div>
        </div>

        {/* Hero Title & Subtitle with Marmeto luxury editorial typography */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06]">
            Software to run and grow <br className="hidden sm:inline" />
            <span className="font-serif-italic font-normal text-slate-100">Shopify commerce</span>
            <span className="text-cobalt-500">.</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Pinakkaa helps high-growth DTC brands and agencies eliminate catalog friction, execute sub-5ms checkout logic, and scale operations with <strong className="text-white font-semibold">bespoke software that works together</strong>.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => smoothScrollTo('#app-suite')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-sm transition-all duration-200 shadow-xl shadow-cobalt-600/30 hover:shadow-cobalt-500/50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Explore the suite</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => smoothScrollTo('#quote')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#111317] hover:bg-[#161a22] text-stone-200 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-white/[0.25] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Schedule a walkthrough</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400" />
            </button>

            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-partner-tab'));
                smoothScrollTo('#free-tools');
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-cobalt-500/10 hover:bg-cobalt-500/20 text-cobalt-300 font-mono text-xs border border-cobalt-500/30 hover:border-cobalt-500/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center justify-center gap-1.5"
            >
              <span>15% Partner Program →</span>
            </button>
          </div>

          {/* Trust Guarantees Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-stone-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500"></span>
              <span>480+ Stores Supported</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400"></span>
              <span>Sub-1s Mobile LCP Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Sub-5ms Rust Functions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-500"></span>
              <span>Zero Theme Bloat</span>
            </div>
          </div>
        </div>

        {/* Minimalist Scroll-to-Compose horizontal strip */}
        <div className="mt-6 mb-12">
          <div className="flex items-center justify-between border-y border-white/[0.08] py-4 overflow-x-auto scrollbar-none gap-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 shrink-0">
              COMPOSE YOUR SUITE →
            </span>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {tickerItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="px-3.5 py-1.5 rounded-full bg-[#101318] hover:bg-cobalt-600/20 border border-white/[0.08] hover:border-cobalt-500/50 transition-all flex items-center gap-2 text-xs text-stone-300 hover:text-white"
                >
                  <span className="text-[10px] font-mono text-cobalt-400">0{idx + 1}</span>
                  <span className="font-semibold text-stone-200">{item.name}</span>
                  <span className="text-[10px] text-stone-500 font-mono hidden md:inline">({item.type})</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Live Studio Architecture Console - 3D Interactive Perspective Interface */}
        <div 
          ref={consoleRef}
          onMouseMove={handleConsoleMouseMove}
          onMouseLeave={handleConsoleMouseLeave}
          style={{
            transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
            transformStyle: 'preserve-3d',
          }}
          className="max-w-5xl mx-auto rounded-2xl bg-[#0c0e12] border border-white/[0.1] shadow-2xl shadow-black/95 overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_60px_-15px_rgba(37,99,235,0.25)] hover:border-cobalt-500/30"
        >
          
          {/* Console Header Bar */}
          <div className="px-5 py-4 border-b border-white/[0.08] bg-[#07080a] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-stone-700"></span>
              </div>
              <span className="text-xs font-mono text-stone-400">
                pinakkaa_telemetry_console ~ v2.4.0
              </span>
            </div>

            {/* Switchable Instrument Tabs */}
            <div className="flex items-center gap-1 bg-[#12141a] p-1 rounded-xl border border-white/[0.06]">
              <button
                onClick={() => setActiveConsoleTab('catalog')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeConsoleTab === 'catalog'
                    ? 'bg-cobalt-600 text-white font-medium shadow-md shadow-cobalt-600/40'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                01. Catalog Suite
              </button>
              <button
                onClick={() => setActiveConsoleTab('functions')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeConsoleTab === 'functions'
                    ? 'bg-cobalt-600 text-white font-medium shadow-md shadow-cobalt-600/40'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                02. Rust Wasm (3.2ms)
              </button>
              <button
                onClick={() => setActiveConsoleTab('speed')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeConsoleTab === 'speed'
                    ? 'bg-cobalt-600 text-white font-medium shadow-md shadow-cobalt-600/40'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                03. Speed (99/100)
              </button>
            </div>
          </div>

          {/* Console Body with 3D Depth Layers */}
          <div className="p-6 md:p-8 font-mono text-xs bg-[#0a0b0e]">
            
            {activeConsoleTab === 'catalog' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-white/[0.05]">
                  <span className="text-stone-300 font-semibold flex items-center gap-2">
                    <Tags className="w-4 h-4 text-cobalt-400" />
                    3-in-1 Catalog Automation Pipeline
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    GraphQL Queues Healthy
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06] hover:border-cobalt-500/40 transition-all duration-200">
                    <div className="text-stone-400 text-[11px] mb-1">BULK TAG MANAGER</div>
                    <div className="text-white font-bold text-sm">48,210 Tags Processed</div>
                    <div className="text-emerald-400 text-[10px] mt-2 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Rollback snapshot saved
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06] hover:border-cobalt-500/40 transition-all duration-200">
                    <div className="text-stone-400 text-[11px] mb-1">BULK VARIANT EDITOR</div>
                    <div className="text-white font-bold text-sm">12,450 SKUs Synced</div>
                    <div className="text-cobalt-400 text-[10px] mt-2 flex items-center gap-1">
                      <Table2 className="w-3 h-3 text-cobalt-400" /> 2-way Google Sheets active
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06] hover:border-cobalt-500/40 transition-all duration-200">
                    <div className="text-stone-400 text-[11px] mb-1">VARIANT IMAGE SYNC</div>
                    <div className="text-white font-bold text-sm">3,890 Assets Matched</div>
                    <div className="text-cobalt-400 text-[10px] mt-2 flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-cobalt-400" /> Google Drive connected
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#07080a] border border-white/[0.04] text-stone-400 flex items-center justify-between">
                  <span className="text-stone-300">$ pinakkaa run --catalog-sync --throttle=adaptive</span>
                  <span className="text-stone-500 text-[11px]">Execution time: 1.42s (zero theme injection)</span>
                </div>
              </div>
            )}

            {activeConsoleTab === 'functions' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-white/[0.05]">
                  <span className="text-stone-300 font-semibold flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cobalt-400" />
                    Shopify Functions WebAssembly Execution Benchmark
                  </span>
                  <span className="text-emerald-400 font-bold">Deterministic ~3.2ms</span>
                </div>

                <div className="p-4 rounded-xl bg-[#07080a] border border-white/[0.06] text-stone-300 space-y-1.5 overflow-x-auto">
                  <div className="text-stone-500">// Native Shopify Function executing inside checkout runtime</div>
                  <div className="text-cobalt-400 font-semibold">#[shopify_function_target(cart_transform)]</div>
                  <div>pub fn run(input: input::ResponseData) -&gt; Result&lt;output::FunctionRunResult&gt; &#123;</div>
                  <div className="pl-4 text-stone-400">let discounts = calculate_dynamic_volume_tiers(&amp;input.cart);</div>
                  <div className="pl-4 text-emerald-400">// Execution: 3.2ms · Zero client-side DOM overhead · No script tags</div>
                  <div className="pl-4 text-white">Ok(output::FunctionRunResult &#123; operations: discounts &#125;)</div>
                  <div>&#125;</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-[#111317] border border-white/[0.06] text-stone-300">
                    <span className="text-stone-500 block">SLA Execution Limit:</span> 5.00 ms
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#111317] border border-white/[0.06] text-emerald-400">
                    <span className="text-stone-500 block">Pinakkaa Real Latency:</span> 3.24 ms avg
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#111317] border border-white/[0.06] text-cobalt-400">
                    <span className="text-stone-500 block">Theme Impact:</span> 0 KB JavaScript
                  </div>
                </div>
              </div>
            )}

            {activeConsoleTab === 'speed' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-stone-400 pb-2 border-b border-white/[0.05]">
                  <span className="text-stone-300 font-semibold flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cobalt-400" />
                    Mobile Core Web Vitals (CWV) Lighthouse Telemetry
                  </span>
                  <span className="text-emerald-400 font-bold text-sm">99 / 100 Mobile</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06]">
                    <div className="text-stone-500 text-[10px] mb-1">LCP (LARGEST CONTENTFUL)</div>
                    <div className="text-2xl font-bold text-emerald-400">0.82s</div>
                    <div className="text-[10px] text-stone-400 mt-1">Google benchmark &lt; 2.5s</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06]">
                    <div className="text-stone-500 text-[10px] mb-1">INP (INTERACTION TO NEXT)</div>
                    <div className="text-2xl font-bold text-emerald-400">28ms</div>
                    <div className="text-[10px] text-stone-400 mt-1">Google benchmark &lt; 200ms</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06]">
                    <div className="text-stone-500 text-[10px] mb-1">CLS (CUMULATIVE SHIFT)</div>
                    <div className="text-2xl font-bold text-emerald-400">0.002</div>
                    <div className="text-[10px] text-stone-400 mt-1">Google benchmark &lt; 0.1</div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#111317] border border-white/[0.06]">
                    <div className="text-stone-500 text-[10px] mb-1">CONVERSION LIFT</div>
                    <div className="text-2xl font-bold text-cobalt-400">+38%</div>
                    <div className="text-[10px] text-stone-400 mt-1">Average verified lift</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Console Footer */}
          <div className="px-5 py-3.5 border-t border-white/[0.06] bg-[#07080a] flex flex-wrap items-center justify-between text-[11px] text-stone-500">
            <div className="flex items-center gap-4">
              <span>Ready for enterprise volume</span>
              <span>·</span>
              <span className="text-stone-400">Shopify Plus Partner Certified</span>
            </div>
            <button 
              onClick={() => smoothScrollTo('#quote')}
              className="text-cobalt-400 hover:text-cobalt-300 transition-colors font-medium flex items-center gap-1"
            >
              Request store audit →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
