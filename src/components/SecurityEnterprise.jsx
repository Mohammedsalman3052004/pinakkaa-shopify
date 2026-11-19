import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SecurityEnterprise() {
  const pillars = [
    {
      num: '01',
      title: 'Zero Theme Bloat',
      description: 'Unlike legacy Shopify apps that inject 250KB+ of render-blocking JavaScript into your theme.liquid file, Pinakkaa apps run via asynchronous Admin GraphQL queues or native Functions.',
      highlight: '0 KB Theme Script Overhead'
    },
    {
      num: '02',
      title: 'Shopify Functions in Rust',
      description: 'Checkout discounts and cart transformations run as compiled WebAssembly directly on Shopify’s global serverless edge in under 3.5ms without external server round-trips.',
      highlight: 'Sub-5ms Serverless SLA'
    },
    {
      num: '03',
      title: 'GDPR & DPDP Ready',
      description: 'Full adherence to Shopify mandatory GDPR customer data webhooks (customers/data_request, customers/redact, shop/redact) with automated cryptographic data purging.',
      highlight: '100% Privacy Compliance'
    },
    {
      num: '04',
      title: 'Air-Gapped Private Middleware',
      description: 'Private apps and enterprise ERP sync endpoints are protected with AES-256 encryption at rest, TLS 1.3 in transit, and dedicated Redis queue isolation.',
      highlight: 'Bank-Grade Data Security'
    }
  ];

  return (
    <section id="security" className="py-28 bg-[#07080a] text-white border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
            <span className="uppercase tracking-wider">SECURITY AND COMPLIANCE</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Enterprise-grade, <span className="font-serif-italic font-normal text-cobalt-400">by default</span>.
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Engineered to meet the strict security, privacy, and architectural standards demanded by high-volume Shopify Plus brands.
          </p>
        </div>

        {/* 4 Pillars Grid - Minimalist Top Hairlines, No Clunky Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="border-t-2 border-white/[0.1] hover:border-cobalt-500 pt-8 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-extrabold text-stone-500 group-hover:text-cobalt-400 transition-colors">
                    {p.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#111317] border border-white/[0.06] flex items-center justify-center text-stone-400">
                    <ShieldCheck className="w-4 h-4 text-cobalt-400" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cobalt-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 font-normal">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{p.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
