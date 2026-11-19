import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Coins, 
  Repeat, 
  Gift, 
  Briefcase, 
  LineChart, 
  ShieldCheck,
  Send
} from 'lucide-react';

export default function PartnerProgram() {
  const [clientCount, setClientCount] = useState(15);
  const [avgPlanPrice, setAvgPlanPrice] = useState(49); // avg $49/mo app plan

  // Calculate 15% recurring commission
  const monthlyVolume = clientCount * avgPlanPrice;
  const monthlyCommission = Math.round(monthlyVolume * 0.15);
  const annualCommission = monthlyCommission * 12;

  const partnerTypes = [
    { role: 'Shopify Developers', benefit: 'Add recurring passive income to client projects.' },
    { role: 'eCommerce Agencies', benefit: 'Provide clients top-tier catalog tools with zero maintenance.' },
    { role: 'Shopify Consultants', benefit: 'Recommend vetted catalog automation that clients will love.' },
    { role: 'Freelancers & VAs', benefit: 'Earn monthly revenue while saving hours of manual work.' }
  ];

  return (
    <section id="partner" className="py-24 bg-obsidian-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-4">
            <Coins className="w-3.5 h-3.5" />
            <span>Pinakkaa Partner & Agency Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Earn 15% Lifetime Recurring Commission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Are you managing Shopify stores or running an agency? 
            Partner with Pinakkaa. Recommend our 3-in-1 Catalog Automation Apps and earn 
            <strong className="text-white"> 15% recurring revenue share every single month</strong> for the lifetime of every active subscription.
          </p>
        </div>

        {/* 3 Step Win-Win Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="p-7 rounded-2xl bg-obsidian-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cobalt-600/20 border border-cobalt-500/30 flex items-center justify-center text-cobalt-400 font-mono font-bold text-lg mb-5">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Join the Partner Program
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sign up in under 2 minutes. Get dedicated partner tracking links and direct access to co-marketing resources and our engineering team.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-cobalt-400 font-mono">
              Fast approvals • Dedicated Partner Dashboard
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-obsidian-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cobalt-600/20 border border-cobalt-500/30 flex items-center justify-center text-cobalt-400 font-mono font-bold text-lg mb-5">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Solve Client Catalog Pains
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recommend Bulk Tag Manager, Bulk Variant Editor, or Variant Image Sync to your clients. Help them automate tags, variants, and image mapping.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-mono">
              Save clients 20+ hours every month
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-obsidian-950 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-lg mb-5">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Earn 15% Every Month
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Receive 15% monthly payouts on automatic schedule for as long as your referred merchants remain active. No limits, no expiration dates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-400 font-mono">
              True lifetime recurring revenue
            </div>
          </div>

        </div>

        {/* Interactive Partner Earnings Calculator */}
        <div className="rounded-2xl bg-obsidian-950 border border-slate-800 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Partner Revenue Calculator
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  How Much Will You Earn As a Pinakkaa Partner?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">
                  Adjust the client slider to model your recurring monthly earnings based on 15% revenue share across our catalog suite.
                </p>
              </div>

              {/* Slider: Number of Active Stores */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300">Active Stores / Clients Referred</span>
                  <span className="text-white font-bold text-sm bg-obsidian-900 px-3 py-1 rounded border border-slate-700">
                    {clientCount} Stores
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>2 Stores</span>
                  <span>50 Stores</span>
                  <span>100+ Stores</span>
                </div>
              </div>

              {/* Who can join grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {partnerTypes.map((pt, i) => (
                  <div key={i} className="p-3 rounded-xl bg-obsidian-900/80 border border-slate-800 text-xs">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cobalt-400" />
                      <span>{pt.role}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-normal font-mono">
                      {pt.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projected Earnings Display */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-gradient-to-b from-obsidian-900 to-obsidian-950 border border-amber-500/30 text-center space-y-5 shadow-2xl relative">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Your Projected Commission (15%)
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-mono tracking-tight">
                  ${monthlyCommission.toLocaleString()}
                  <span className="text-xs text-slate-400 font-sans font-medium ml-1">/ month</span>
                </div>
                <div className="text-xs text-emerald-400 font-mono mt-1 font-semibold">
                  ${annualCommission.toLocaleString()} / year passive recurring
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-slate-800 text-left text-xs space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>Commission Rate:</span>
                  <span className="text-white font-bold font-mono">15% Lifetime</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Payout Frequency:</span>
                  <span className="text-white font-bold font-mono">Monthly (Automated)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Minimum Threshold:</span>
                  <span className="text-emerald-400 font-bold font-mono">$50 (Direct Transfer/PayPal)</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.querySelector('#contact-form');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    window.dispatchEvent(new CustomEvent('select-partner-program'));
                  }
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-obsidian-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Apply as Pinakkaa Partner</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 font-mono">
                Have questions? Direct email to <strong className="text-white">mitash@pinakkaa.com</strong>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
