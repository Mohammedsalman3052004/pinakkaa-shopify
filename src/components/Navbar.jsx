import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Tags, 
  Table2, 
  Image as ImageIcon, 
  ChevronDown
} from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const lastScrollY = useRef(0);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Do not auto-hide if a menu is open or programmatic navigation is taking place
      if (mobileMenuOpen || productsOpen || isNavigatingRef.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Always show when near the very top of page
      if (currentScrollY < 60) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN -> smoothly slide up so content and titles are 100% unobstructed
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP -> smoothly slide back into view for instant navigation
        setNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen, productsOpen]);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setNavVisible(true);
    isNavigatingRef.current = true;
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1200);
    smoothScrollTo(id, -75);
  };

  return (
    <header className={`fixed top-3.5 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center transition-all duration-300 ease-out ${
      navVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
    }`}>
      
      {/* Centered Floating Glass Capsule - Strictly Single Line Navigation */}
      <nav 
        className={`pointer-events-auto rounded-full transition-all duration-300 w-auto max-w-[98vw] flex items-center ${
          scrolled
            ? 'bg-[#08090d]/90 backdrop-blur-2xl border border-white/[0.14] shadow-2xl shadow-black/80 py-1.5 sm:py-2 px-3 sm:px-5'
            : 'bg-[#090b0f]/80 backdrop-blur-xl border border-white/[0.1] shadow-xl shadow-black/50 py-1.5 sm:py-2 px-3 sm:px-5'
        }`}
      >
        <div className="flex items-center flex-nowrap whitespace-nowrap gap-2 sm:gap-4 md:gap-5">
          
          {/* Brand Logo Lockup */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('top', 0);
            }}
            className="flex items-center gap-2 group focus:outline-none shrink-0 pr-1 sm:pr-2"
          >
            <div className="w-7 h-7 rounded-full bg-[#12151c] border border-white/[0.15] group-hover:border-cobalt-500/80 flex items-center justify-center transition-all duration-300 shadow-inner">
              <div className="w-3 h-3 relative">
                <span className="absolute inset-0 border-t-2 border-l-2 border-white rounded-tl-sm"></span>
                <span className="absolute inset-0 border-b-2 border-r-2 border-cobalt-500 rounded-br-sm"></span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-cobalt-400 transition-colors">
                PINAKKAA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500 animate-pulse"></span>
            </div>
          </a>

          {/* Desktop Nav Items - Strictly Single Line with nowrap protection */}
          <div className="hidden lg:flex items-center flex-nowrap whitespace-nowrap gap-0.5 xl:gap-1 text-[13px] font-medium text-stone-300 shrink-0">
            
            {/* Products Dropdown Trigger */}
            <div className="relative shrink-0">
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Products</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {productsOpen && (
                <div 
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] p-3.5 rounded-2xl bg-[#0a0c10]/95 border border-white/[0.12] shadow-2xl shadow-black/95 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2 px-2 flex items-center justify-between">
                    <span>Catalog Suite & Engineering</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      All Live
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <a 
                      href="https://apps.shopify.com/bulk-tag-manager-pinakkaa" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#141822] border border-white/[0.08] flex items-center justify-center text-cobalt-400 shrink-0">
                        <Tags className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          Bulk Tag Manager
                          <span className="text-[10px] font-mono text-cobalt-400 font-normal">($5.99/mo · 3-Day Trial)</span>
                          <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover/item:text-cobalt-400 transition-colors" />
                        </div>
                        <div className="text-[11px] text-stone-400 leading-relaxed">
                          Bulk add, remove, replace tags with CSV audit trails.
                        </div>
                      </div>
                    </a>

                    <a 
                      href="https://apps.shopify.com/bulk-variant-editor-pinakkaa" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#141822] border border-white/[0.08] flex items-center justify-center text-cobalt-400 shrink-0">
                        <Table2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          Bulk Variant Editor
                          <span className="text-[10px] font-mono text-cobalt-400 font-normal">($49/mo · 7-Day Trial)</span>
                          <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover/item:text-cobalt-400 transition-colors" />
                        </div>
                        <div className="text-[11px] text-stone-400 leading-relaxed">
                          Manage thousands of variants using Google Sheets & CSV sync.
                        </div>
                      </div>
                    </a>

                    <a 
                      href="https://apps.shopify.com/bulk-variant-update-g-sync" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#141822] border border-white/[0.08] flex items-center justify-center text-cobalt-400 shrink-0">
                        <ImageIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                          Variant Image Sync
                          <span className="text-[10px] font-mono text-cobalt-400 font-normal">($4.99/mo · Free Trial)</span>
                          <ArrowUpRight className="w-3 h-3 text-stone-500 group-hover/item:text-cobalt-400 transition-colors" />
                        </div>
                        <div className="text-[11px] text-stone-400 leading-relaxed">
                          Auto-pair high-res images to variants via SKU matching & Google Drive.
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-white/[0.06] flex items-center justify-between px-2 text-[11px]">
                    <span className="text-stone-400">Custom Rust Functions?</span>
                    <button 
                      onClick={() => handleNavClick('#app-engineering')}
                      className="text-cobalt-400 font-semibold hover:underline"
                    >
                      View Functions →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('#bottleneck')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Solutions</span>
            </button>

            <button 
              onClick={() => handleNavClick('#portfolio')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Client Stores</span>
            </button>

            <button 
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-partner-tab'));
                handleNavClick('#free-tools');
              }}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all flex items-center gap-1.5 text-stone-300 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Partner Program</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cobalt-500/20 text-cobalt-300 border border-cobalt-500/30 font-semibold shrink-0 whitespace-nowrap">
                15%
              </span>
            </button>

            <button 
              onClick={() => handleNavClick('#pricing')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Retainers</span>
            </button>

            <button 
              onClick={() => handleNavClick('#free-tools')}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">ROI Tools</span>
            </button>
          </div>

          {/* Right Action CTA Pill */}
          <div className="hidden sm:flex items-center gap-1.5 xl:gap-2 whitespace-nowrap shrink-0">
            <button
              onClick={() => handleNavClick('#app-suite')}
              className="hidden xl:inline-flex px-3 py-1.5 rounded-full text-xs font-medium text-stone-300 hover:text-white hover:bg-white/[0.06] transition-all whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">The Suite (06)</span>
            </button>

            <button
              onClick={() => handleNavClick('#quote')}
              className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-cobalt-600 hover:bg-cobalt-500 text-white transition-all duration-200 shadow-md shadow-cobalt-600/35 hover:shadow-cobalt-500/50 flex items-center gap-1.5 whitespace-nowrap shrink-0 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="whitespace-nowrap">Get Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-white/[0.08]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Floating Mobile Menu Card */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden w-full max-w-sm mt-2 p-4 rounded-2xl bg-[#090b0f]/95 backdrop-blur-2xl border border-white/[0.14] shadow-2xl shadow-black/90 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 text-sm font-medium">
            <button
              onClick={() => handleNavClick('#app-suite')}
              className="w-full text-left px-3.5 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/[0.06]"
            >
              Products (Catalog Suite)
            </button>
            <button
              onClick={() => handleNavClick('#bottleneck')}
              className="w-full text-left px-3.5 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/[0.06]"
            >
              Solutions & Bottlenecks
            </button>
            <button
              onClick={() => handleNavClick('#portfolio')}
              className="w-full text-left px-3.5 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/[0.06]"
            >
              Client Stores
            </button>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-partner-tab'));
                handleNavClick('#free-tools');
              }}
              className="w-full text-left px-3.5 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/[0.06] flex items-center justify-between"
            >
              <span>15% Partner Program</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cobalt-500/20 text-cobalt-400 font-semibold">
                Recurring
              </span>
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="w-full text-left px-3.5 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/[0.06]"
            >
              Pricing & Retainers
            </button>
            <button
              onClick={() => handleNavClick('#free-tools')}
              className="w-full text-left px-3.5 py-2 rounded-xl text-stone-200 hover:text-white hover:bg-white/[0.06]"
            >
              Speed ROI Calculator
            </button>
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => handleNavClick('#quote')}
              className="w-full py-2.5 rounded-full text-center text-xs font-semibold bg-cobalt-600 hover:bg-cobalt-500 text-white shadow-md shadow-cobalt-600/30"
            >
              Request Scope & Estimate
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
