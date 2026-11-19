import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Choose your instruments',
      description: 'Start with the one product or retainer sprint that removes your biggest bottleneck — catalog taxonomy, variant management, slow checkout, or AI search visibility.',
      detail: 'No rip-and-replace required. Every Pinakkaa product operates independently or as a unified suite.',
      tag: 'Modular Architecture'
    },
    {
      step: '02',
      title: 'Connect in days, not months',
      description: 'Native integrations with your Shopify Plus admin. Zero theme script injection, no client-side DOM overhead, and rate-limit safe asynchronous GraphQL queues.',
      detail: 'Certified Shopify App Store installations with 1-click authorization and instant rollbacks.',
      tag: 'Zero Theme Bloat'
    },
    {
      step: '03',
      title: 'Build along your path',
      description: 'Add custom Shopify Functions in Rust, air-gapped ERP pipelines, or continuous monthly CRO retainers designed for your audience as GMV expands.',
      detail: 'Earn 15% recurring passive revenue on all referred clients through our partner network.',
      tag: 'High-Yield Growth'
    }
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[#ffffff] text-[#0b0d12] border-t border-[#e4e3e0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-stone-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
            <span className="uppercase tracking-wider font-semibold">HOW IT WORKS</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight leading-[1.08]">
            Three steps to <span className="font-serif-italic font-normal text-cobalt-600">composed commerce</span>.
          </h2>
          
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
            A practical, frictionless engineering approach designed to respect your merchant stack without slow migrations.
          </p>
        </div>

        {/* 3 Step Milestone Columns - Open, Editorial, No Box Structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="border-t-2 border-black/[0.1] hover:border-cobalt-600 pt-8 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-4xl font-extrabold font-mono text-stone-400 group-hover:text-cobalt-600 transition-colors">
                    {s.step}
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/[0.04] text-stone-600 uppercase font-semibold">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#0b0d12] mb-4 group-hover:text-cobalt-600 transition-colors">
                  {s.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
                  {s.description}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] text-xs font-mono text-stone-500">
                {s.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
