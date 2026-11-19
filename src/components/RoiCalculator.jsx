import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Zap, HelpCircle } from 'lucide-react';

export default function RoiCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(120000);
  const [currentSpeed, setCurrentSpeed] = useState(42);
  const [currentConversion, setCurrentConversion] = useState(2.1);

  // Speed loss calculation: 100ms latency ~ 1% lost conversion.
  // When speed improves from e.g. 40 to 95, estimated conversion increase ~ 12% to 22%.
  const speedDeficit = Math.max(0, 95 - currentSpeed);
  const speedGainFactor = (speedDeficit / 100) * 0.18; // up to 18% lift from speed alone
  const croGainFactor = 0.22; // conservative 22% lift from PDP & checkout optimization

  const monthlySpeedRecovery = Math.round(monthlyRevenue * speedGainFactor);
  const monthlyCroLift = Math.round(monthlyRevenue * croGainFactor);
  const totalMonthlyGain = monthlySpeedRecovery + monthlyCroLift;
  const annualTotalGain = totalMonthlyGain * 12;

  const scrollToContact = () => {
    const el = document.querySelector('#contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-obsidian-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive ROI Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Untapped Shopify Revenue
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Slow load times and checkout drop-offs quietly drain six figures every year. 
            Adjust the sliders to see what speed optimization and conversion engineering will generate for your store.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl bg-obsidian-950 border border-slate-800 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Monthly Revenue */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Current Monthly Revenue</span>
                  <span className="text-white font-bold text-sm bg-obsidian-900 px-3 py-1 rounded border border-slate-700">
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
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cobalt-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$20K</span>
                  <span>$500K</span>
                  <span>$1,000,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Speed Score */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Current Mobile PageSpeed (Lighthouse)</span>
                  <span className={`font-bold text-sm px-3 py-1 rounded border ${
                    currentSpeed < 50 
                      ? 'text-rose-400 bg-rose-950/30 border-rose-900/50' 
                      : 'text-amber-400 bg-amber-950/30 border-amber-900/50'
                  }`}>
                    {currentSpeed} / 100
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="90"
                  step="1"
                  value={currentSpeed}
                  onChange={(e) => setCurrentSpeed(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cobalt-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span className="text-rose-400">Slow (15-49)</span>
                  <span className="text-amber-400">Average (50-75)</span>
                  <span className="text-cobalt-400">Our Target (95+)</span>
                </div>
              </div>

              {/* Slider 3: Current Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Current Conversion Rate</span>
                  <span className="text-white font-bold text-sm bg-obsidian-900 px-3 py-1 rounded border border-slate-700">
                    {currentConversion.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="4.5"
                  step="0.1"
                  value={currentConversion}
                  onChange={(e) => setCurrentConversion(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cobalt-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>0.8%</span>
                  <span>2.0% (Shopify Avg)</span>
                  <span>4.5%</span>
                </div>
              </div>

            </div>

            {/* Right: Projected Yield Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-cobalt-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cobalt-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Projected Incremental Yield
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                +${totalMonthlyGain.toLocaleString()}
                <span className="text-xs text-cobalt-400 font-sans font-medium ml-1">/ month</span>
              </div>
              <div className="text-xs text-emerald-400 font-mono mt-1 font-semibold">
                +${annualTotalGain.toLocaleString()} / year projected lift
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cobalt-400" />
                    <span>Speed Recovery (Sub-1s LCP):</span>
                  </span>
                  <span className="font-mono text-white font-bold">+${monthlySpeedRecovery.toLocaleString()}/mo</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    <span>CRO Architecture & Cart Drawer:</span>
                  </span>
                  <span className="font-mono text-white font-bold">+${monthlyCroLift.toLocaleString()}/mo</span>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-xs transition-all shadow-md shadow-cobalt-600/30 flex items-center justify-center gap-2"
              >
                <span>Unlock This Yield With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-[10px] text-center text-slate-500 font-mono">
                *Based on statistical e-commerce benchmark data & client performance averages.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
