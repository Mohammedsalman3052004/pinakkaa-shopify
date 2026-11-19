import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Zap, 
  Coins, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

import { smoothScrollTo } from '../utils/scroll';

export default function FreeInstruments() {
  const [activeTab, setActiveTab] = useState('speed'); // 'speed' or 'partner'

  // Listen to open-partner-tab events so clicking Partner Program activates the partner calculator
  useEffect(() => {
    const handlePartner = () => {
      setActiveTab('partner');
    };
    window.addEventListener('select-partner-program', handlePartner);
    window.addEventListener('open-partner-tab', handlePartner);
    return () => {
      window.removeEventListener('select-partner-program', handlePartner);
      window.removeEventListener('open-partner-tab', handlePartner);
    };
  }, []);

  // Speed ROI state
  const [monthlyRevenue, setMonthlyRevenue] = useState(150000); // $150k/mo
  const [loadTime, setLoadTime] = useState(3.8); // 3.8s mobile
  const [conversionRate, setConversionRate] = useState(1.9); // 1.9%

  // Speed Calculations (Google & Deloitte benchmark: every 100ms improvement = 1% lift)
  const idealLoadTime = 0.9; // 0.9s
  const excessLatency = Math.max(0, loadTime - idealLoadTime);
  const potentialLiftPercent = Math.min(48, Math.round(excessLatency * 9.5));
  const annualRevenue = monthlyRevenue * 12;
  const annualRevenueLost = Math.round(annualRevenue * (potentialLiftPercent / 100) * 0.45);
  const annualRevenueGain = Math.round(annualRevenue * (potentialLiftPercent / 100));

  // Partner Calculator state
  const [clientCount, setClientCount] = useState(15);
  const [avgPlanPrice, setAvgPlanPrice] = useState(49);
  const monthlyPartnerCommission = Math.round(clientCount * avgPlanPrice * 0.15);
  const annualPartnerCommission = monthlyPartnerCommission * 12;

  const scrollToQuote = (tier) => {
    smoothScrollTo('#quote');
    if (tier) {
      window.dispatchEvent(new CustomEvent('select-tier', { detail: tier }));
    }
  };

  const notifyPartner = () => {
    smoothScrollTo('#quote');
    window.dispatchEvent(new CustomEvent('select-partner-program'));
  };

  return (
    <section id="free-tools" className="py-28 bg-[#fbfbfa] text-[#0b0d12] border-t border-[#e4e3e0] light-grid relative">
      <div id="partner" className="absolute -top-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-stone-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
            <span className="uppercase tracking-wider font-semibold">FREE INSTRUMENTS</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight leading-[1.08]">
            Value before <span className="font-serif-italic font-normal text-cobalt-600">the sales call</span>.
          </h2>
          
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
            Use the same practical engineering frameworks our team uses with Shopify Plus merchants. No login, no credit card, no gated PDF.
          </p>
        </div>

        {/* Tab Switcher - Minimalist Underline Nav */}
        <div className="flex border-b border-black/[0.08] overflow-x-auto scrollbar-none mb-12 gap-6">
          <button
            onClick={() => setActiveTab('speed')}
            className={`pb-4 text-left border-b-2 transition-all whitespace-nowrap flex items-center gap-2 text-sm ${
              activeTab === 'speed'
                ? 'border-cobalt-600 text-[#0b0d12] font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Zap className="w-4 h-4 text-cobalt-600" />
            <span>01. Store Speed & Revenue Loss Model</span>
          </button>

          <button
            onClick={() => setActiveTab('partner')}
            className={`pb-4 text-left border-b-2 transition-all whitespace-nowrap flex items-center gap-2 text-sm ${
              activeTab === 'partner'
                ? 'border-cobalt-600 text-[#0b0d12] font-bold'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            <Coins className="w-4 h-4 text-cobalt-600" />
            <span>02. 15% Partner Revenue Calculator</span>
          </button>
        </div>

        {/* TOOL 01: Store Speed & Revenue Loss Calculator */}
        {activeTab === 'speed' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-stone-700 font-medium">Monthly Store Revenue</span>
                  <span className="text-cobalt-600 font-bold text-base">
                    ${monthlyRevenue.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full accent-cobalt-600 bg-stone-300 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>$20,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-stone-700 font-medium">Current Mobile Load Time (LCP)</span>
                  <span className="text-rose-600 font-bold text-base">
                    {loadTime}s mobile
                  </span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="6.5"
                  step="0.1"
                  value={loadTime}
                  onChange={(e) => setLoadTime(Number(e.target.value))}
                  className="w-full accent-cobalt-600 bg-stone-300 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>1.0s (Fast)</span>
                  <span>3.5s (Average)</span>
                  <span>6.5s (Critical Friction)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-stone-700 font-medium">Baseline Conversion Rate</span>
                  <span className="text-[#0b0d12] font-bold text-base">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="4.5"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-cobalt-600 bg-stone-300 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>0.8%</span>
                  <span>2.5%</span>
                  <span>4.5%</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.08] text-xs text-stone-600 flex items-start gap-3">
                <Clock className="w-4 h-4 text-cobalt-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Based on Google & Deloitte retail benchmarks: every 100ms improvement in mobile checkout speed increases retail conversions by up to 1.1% while significantly decreasing checkout abandonment.
                </p>
              </div>
            </div>

            {/* Calculated Outputs Column with 3D Depth */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-black/[0.08] shadow-luxury-light hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-8 preserve-3d">
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider mb-2">
                  PROJECTED SPEED REVENUE LIFT
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight">
                  +{potentialLiftPercent}%
                </div>
                <div className="text-xs text-emerald-600 font-mono mt-2 font-semibold">
                  When mobile LCP is optimized to &lt; 0.9s
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-black/[0.06] text-sm font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Est. Annual Revenue Lost:</span>
                  <span className="text-rose-600 font-bold">-${annualRevenueLost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Est. Annual Revenue Upside:</span>
                  <span className="text-emerald-600 font-bold">+${annualRevenueGain.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Estimated ROI Multiple:</span>
                  <span className="text-cobalt-600 font-bold">14x – 28x</span>
                </div>
              </div>

              <button
                onClick={() => scrollToQuote('Mid-Scale Growth')}
                className="w-full py-4 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white text-xs font-semibold transition-all shadow-md shadow-cobalt-600/30 flex items-center justify-center gap-2"
              >
                <span>Recover lost revenue with sprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* TOOL 02: Partner Passive Revenue Calculator */}
        {activeTab === 'partner' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Partner Inputs */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-stone-700 font-medium">Referred Active Client Stores</span>
                  <span className="text-cobalt-600 font-bold text-base">
                    {clientCount} active merchant stores
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="100"
                  step="1"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full accent-cobalt-600 bg-stone-300 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>3 stores</span>
                  <span>25 stores</span>
                  <span>100+ stores</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-stone-700 font-medium">Average App Plan Subscription</span>
                  <span className="text-[#0b0d12] font-bold text-base">
                    ${avgPlanPrice} / month per store
                  </span>
                </div>
                <input
                  type="range"
                  min="29"
                  max="149"
                  step="10"
                  value={avgPlanPrice}
                  onChange={(e) => setAvgPlanPrice(Number(e.target.value))}
                  className="w-full accent-cobalt-600 bg-stone-300 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-stone-400 mt-1">
                  <span>$29/mo (Standard)</span>
                  <span>$69/mo (Pro Suite)</span>
                  <span>$149/mo (Enterprise)</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-black/[0.08] text-xs text-stone-600 space-y-3">
                <div className="text-[11px] font-mono text-cobalt-600 uppercase font-semibold">
                  For Shopify Developers, Agencies, Freelancers & VAs:
                </div>
                <p className="leading-relaxed text-stone-700">
                  Save your clients hours of manual catalog work while earning an additional stream of monthly recurring revenue. Recommend and install Pinakkaa apps on your clients' Shopify stores, and receive a 15% recurring commission every month for the lifetime of their subscriptions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-black/[0.05] text-[11px] font-mono text-stone-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Instant partner registration</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dedicated referral dashboard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Monthly automated payouts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct engineering Slack escalation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Calculated Outputs with 3D Depth */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-black/[0.08] shadow-luxury-light hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-8 preserve-3d">
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 tracking-wider mb-2">
                  MONTHLY PASSIVE COMMISSIONS
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight">
                  ${monthlyPartnerCommission.toLocaleString()}
                  <span className="text-sm font-mono text-stone-500 font-normal"> / mo</span>
                </div>
                <div className="text-xs text-cobalt-600 font-mono mt-2 font-semibold">
                  ${annualPartnerCommission.toLocaleString()} / year in recurring revenue
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-black/[0.06] text-sm font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Active Stores Managed:</span>
                  <span className="text-[#0b0d12] font-bold">{clientCount} stores</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Commission Rate:</span>
                  <span className="text-emerald-600 font-bold">15% Lifetime</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Payout Schedule:</span>
                  <span className="text-stone-700 font-bold">Monthly (Automated)</span>
                </div>
              </div>

              <button
                onClick={notifyPartner}
                className="w-full py-4 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white text-xs font-semibold transition-all shadow-md shadow-cobalt-600/30 flex items-center justify-center gap-2"
              >
                <span>Join 15% Partner Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
