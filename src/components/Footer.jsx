import React from 'react';
import { ArrowUpRight, Coins } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function Footer() {
  const scrollTo = (id) => {
    smoothScrollTo(id);
  };

  return (
    <footer className="bg-[#050608] text-stone-400 font-sans border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#111317] border border-white/[0.12] flex items-center justify-center">
                <div className="w-4 h-4 relative">
                  <span className="absolute inset-0 border-t-2 border-l-2 border-white rounded-tl-sm"></span>
                  <span className="absolute inset-0 border-b-2 border-r-2 border-cobalt-500 rounded-br-sm"></span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  PINAKKAA
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500 -mt-1">
                  Shopify Solutions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Bespoke Shopify engineering studio. Creators of the 3-in-1 Catalog Automation Suite, sub-5ms Shopify Functions in Rust, and dedicated high-yield engineering retainers.
            </p>

            {/* Status indicator - Marmeto style */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-stone-300">All Systems Operational</span>
              <span className="text-stone-600">·</span>
              <span>Shopify Admin v2025</span>
            </div>

            <div className="pt-2 text-xs font-mono text-stone-400">
              Direct Contact:{' '}
              <a href="mailto:mitash@pinakkaa.com" className="text-cobalt-400 hover:underline font-semibold">
                mitash@pinakkaa.com
              </a>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-300 font-bold">
              The Suite
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a 
                  href="https://apps.shopify.com/bulk-tag-manager-pinakkaa" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Bulk Tag Manager ($5.99/mo)</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.shopify.com/bulk-variant-editor-pinakkaa" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Bulk Variant Editor ($49/mo)</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.shopify.com/bulk-variant-update-g-sync" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Variant Image Sync ($4.99/mo)</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600" />
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#app-engineering')}
                  className="hover:text-white transition-colors"
                >
                  Shopify Functions (Rust)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#app-engineering')}
                  className="hover:text-white transition-colors"
                >
                  Private ERP Gateway
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#seo-geo')}
                  className="hover:text-white transition-colors"
                >
                  AEO & GEO Knowledge Graph
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Client Deployments */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-300 font-bold">
              Production Stores
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="https://creamyfabrics.com/en" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span className="font-semibold text-white">Creamy Fabrics</span>
                  <span className="text-[10px] font-mono text-emerald-400">€21M Peak</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://dalstrong.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Dalstrong</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600 group-hover:text-cobalt-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://cuzenmatcha.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Cuzen Matcha</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600 group-hover:text-cobalt-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://trybello.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Try Bello</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600 group-hover:text-cobalt-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://koolmore.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>KoolMore</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-600 group-hover:text-cobalt-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.canva.com/design/DAG9eoPW3_w/Rk8hyMf2x0Ulqfo2isffiw/view?utm_content=DAG9eoPW3_w&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3e805aa68a" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-between group text-cobalt-400"
                >
                  <span className="font-semibold">Block Party Deck</span>
                  <ArrowUpRight className="w-3 h-3 text-cobalt-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Retainers & Program */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-300 font-bold">
              Partnership & Pricing
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => scrollTo('#partner')}
                  className="hover:text-cobalt-400 transition-colors flex items-center gap-1.5 font-medium text-stone-200"
                >
                  <Coins className="w-4 h-4 text-cobalt-400" />
                  <span>15% Partner Program</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#pricing')}
                  className="hover:text-white transition-colors"
                >
                  Basic Foundation ($5,000/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#pricing')}
                  className="hover:text-white transition-colors"
                >
                  Mid-Scale Growth ($9,500/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#pricing')}
                  className="hover:text-white transition-colors"
                >
                  Fullscale Enterprise ($16,500/mo)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('#free-tools')}
                  className="hover:text-white transition-colors"
                >
                  Store Speed & ROI Calculator
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © 2026 PINAKKAA. Built for high-yield Shopify Plus commerce.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://pinakkaa.com" className="hover:text-stone-300 transition-colors">
              pinakkaa.com
            </a>
            <span>·</span>
            <a href="mailto:mitash@pinakkaa.com" className="hover:text-stone-300 transition-colors">
              mitash@pinakkaa.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
