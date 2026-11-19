import React, { useState } from 'react';
import { 
  Tags, 
  Table2, 
  Image as ImageIcon, 
  Cpu, 
  Coins, 
  ArrowUpRight, 
  CheckCircle2
} from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function BottleneckSection() {
  const [selectedBottleneck, setSelectedBottleneck] = useState(0);

  const bottlenecks = [
    {
      id: 'tags',
      category: 'CATALOG TAXONOMY',
      title: 'Manual Tagging Overhead',
      pain: 'Merchants and merchandising teams spending 15+ hours weekly editing product tags, fixing broken smart collections, and risking unrecoverable bulk mistakes.',
      solution: 'Bulk Tag Manager',
      outcome: 'Multi-rule automated tagging, 1-click rollback snapshots, advanced product filtering, and instant CSV audit trails.',
      metric: 'From $5.99/mo · 3-Day Free Trial',
      cta: 'Explore Bulk Tag Manager',
      link: 'https://apps.shopify.com/bulk-tag-manager-pinakkaa',
      icon: Tags
    },
    {
      id: 'variants',
      category: 'HIGH-SKU CATALOGS',
      title: 'Price & Inventory Bottlenecks',
      pain: 'Editing prices, compare-at-prices, SKUs, and inventory levels across thousands of variants causes browser freezes and corrupted CSV uploads.',
      solution: 'Bulk Variant Editor',
      outcome: 'Direct two-way Google Sheets & CSV sync, bulk update prices, barcodes & stock, generate size/color matrix, tested on 100k+ SKUs without lag.',
      metric: '$49/mo · 7-Day Free Trial',
      cta: 'Explore Variant Editor',
      link: 'https://apps.shopify.com/bulk-variant-editor-pinakkaa',
      icon: Table2
    },
    {
      id: 'images',
      category: 'MEDIA MAPPING',
      title: 'Slow Product Photoshoot Launches',
      pain: 'Studio teams spend days manually clicking into every variant dropdown to upload and pair swatch images from Google Drive folders.',
      solution: 'Variant Image Sync',
      outcome: 'Auto-pair high-res studio assets to variants using exact SKU matching straight from Google Drive folders with pre-import validation.',
      metric: 'From $4.99/mo · Free Trial Available',
      cta: 'Explore Variant Image Sync',
      link: 'https://apps.shopify.com/bulk-variant-update-g-sync',
      icon: ImageIcon
    },
    {
      id: 'checkout',
      category: 'CHECKOUT EXTENSIBILITY',
      title: 'Slow Checkout & Legacy Script Bloat',
      pain: 'Client-side discount apps and cart scripts injecting 300KB+ of render-blocking JavaScript, ruining checkout speed and lowering conversion.',
      solution: 'Shopify Functions (Rust Engine)',
      outcome: 'Sub-5ms deterministic serverless discount logic, cart validation, and payment customization in WebAssembly.',
      metric: '3.2ms execution runtime',
      cta: 'Engage Custom Functions',
      link: '#app-engineering',
      icon: Cpu
    },
    {
      id: 'partner',
      category: 'AGENCY PARTNER ECOSYSTEM',
      title: 'Agency Client Churn & One-Off Projects',
      pain: 'Agencies and freelance Shopify developers deliver one-off theme builds with no recurring passive revenue stream.',
      solution: 'Pinakkaa 15% Partner Program',
      outcome: 'Earn 15% recurring commission every single month for the lifetime of every active app subscription referred.',
      metric: '15% Lifetime Recurring',
      cta: 'Join Partner Network',
      link: '#partner',
      icon: Coins
    }
  ];

  const current = bottlenecks[selectedBottleneck];
  const Icon = current.icon;

  return (
    <section id="bottleneck" className="py-28 bg-[#fbfbfa] text-[#0b0d12] border-t border-[#e4e3e0] light-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Marmeto White/Light Style */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-stone-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
            <span className="uppercase tracking-wider font-semibold">FIND YOUR STARTING POINT</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight leading-[1.08]">
            Start with the <span className="font-serif-italic font-normal text-cobalt-600">bottleneck</span>.
          </h2>
          
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
            Choose the outcome that matters most right now. Start with the Pinakkaa instrument built to move it forward, then add more when your business needs them.
          </p>
        </div>

        {/* Minimalist Tab Navigation - No Heavy Boxes */}
        <div className="flex border-b border-black/[0.08] overflow-x-auto scrollbar-none mb-12 gap-1 sm:gap-2">
          {bottlenecks.map((b, idx) => {
            const isSelected = selectedBottleneck === idx;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBottleneck(idx)}
                className={`pb-4 px-3 sm:px-5 text-left transition-all border-b-2 whitespace-nowrap flex items-center gap-2.5 ${
                  isSelected
                    ? 'border-cobalt-600 text-[#0b0d12] font-bold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                <span className={`text-[11px] font-mono ${isSelected ? 'text-cobalt-600' : 'text-stone-400'}`}>
                  0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm tracking-tight">{b.title}</span>
              </button>
            );
          })}
        </div>

        {/* Open Editorial Display - High End, Fluid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-4">
          
          {/* Left Column: Problem, Architecture & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs font-mono text-cobalt-600 uppercase tracking-widest font-semibold mb-2 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span>{current.category} · RESOLVED BY PINAKKAA</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0b0d12] tracking-tight">
                {current.solution}
              </h3>
            </div>

            {/* Friction & Resolution Minimalist Rows */}
            <div className="space-y-6 border-y border-black/[0.08] py-8">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6">
                <div className="sm:col-span-4 text-xs font-mono uppercase text-rose-600 tracking-wider font-semibold">
                  The Friction Point
                </div>
                <div className="sm:col-span-8 text-sm sm:text-base text-stone-700 leading-relaxed">
                  {current.pain}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 pt-4 border-t border-black/[0.05]">
                <div className="sm:col-span-4 text-xs font-mono uppercase text-cobalt-600 tracking-wider font-semibold">
                  The Engineering Fix
                </div>
                <div className="sm:col-span-8 text-sm sm:text-base text-[#0b0d12] font-semibold leading-relaxed">
                  {current.outcome}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (current.link === '#partner') {
                    window.dispatchEvent(new CustomEvent('open-partner-tab'));
                    smoothScrollTo('#free-tools', -75);
                  } else {
                    smoothScrollTo(current.link, -75);
                  }
                }}
                className="px-7 py-3.5 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white text-xs font-semibold transition-all duration-200 shadow-md shadow-cobalt-600/25 hover:shadow-lg hover:shadow-cobalt-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] flex items-center gap-2"
              >
                <span>{current.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => smoothScrollTo('#quote')}
                className="px-7 py-3.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-stone-700 hover:text-black text-xs font-medium border border-black/[0.08] hover:border-black/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200"
              >
                Talk with product lead
              </button>
            </div>
          </div>

          {/* Right Column: Verified Outcome & Proof with 3D Depth */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-black/[0.08] shadow-luxury-light hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-8 preserve-3d">
            <div>
              <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-2">
                VERIFIED OUTCOME
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#0b0d12] tracking-tight">
                {current.metric}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-black/[0.06] text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-cobalt-600 shrink-0" />
                <span>Certified Shopify App Store Architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero theme code pollution or script tags</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-stone-500 shrink-0" />
                <span>Asynchronous rate-limit safe Admin GraphQL queues</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-stone-400 pt-2 flex items-center justify-between border-t border-black/[0.06]">
              <span>CODE: PIN-{current.id.toUpperCase()}-01</span>
              <span className="text-cobalt-600 font-semibold">Ready for production</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
