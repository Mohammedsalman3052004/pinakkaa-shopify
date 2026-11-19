import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Pinakkaa avoid theme bloat compared to other Shopify apps?',
      a: 'Most Shopify apps inject hundreds of kilobytes of unoptimized JavaScript into your theme.liquid file, degrading mobile Core Web Vitals. Pinakkaa takes an infrastructure-first approach: our 3-in-1 Catalog Suite operates purely through asynchronous Admin GraphQL APIs on backend worker queues, while our custom business logic runs natively via Shopify Functions compiled to WebAssembly (Rust) inside checkout in under 3.5ms.'
    },
    {
      q: 'What is the 15% Partner Program and who is eligible?',
      a: 'Our Partner Program is open to Shopify Developers, eCommerce Agency Owners, Freelancers, and Virtual Assistants managing client stores. When you recommend and install Bulk Tag Manager ($5.99/mo, 3-day trial), Bulk Variant Editor ($49/mo, 7-day trial), or Variant Image Sync ($4.99/mo, free trial) on client stores, you earn a 15% recurring commission every month for the lifetime of their paid subscriptions. To join, simply email mitash@pinakkaa.com with subject "PARTNER" or check the Partner option in our estimate form.'
    },
    {
      q: 'How do the Monthly Engineering Retainers work ($5,000 to $16,500/mo)?',
      a: 'Retainers grant you a dedicated senior Shopify engineer or full multidisciplinary squad (Lead Architect, Senior Developer, UI/UX Designer, and QA Specialist). Retainers include weekly sprint planning, daily async Slack support, speed monitoring, and a guaranteed SLA. Retainers have zero long-term lock-in and operate on flexible 30-day rolling terms.'
    },
    {
      q: 'Can you build custom Private Apps and ERP integrations?',
      a: 'Yes. We specialize in air-gapped Private Shopify Apps and custom middleware synchronizing ERPs (NetSuite, SAP S/4HANA, Katana MRP, Odoo) and 3PL warehouse management systems. We design custom webhook ingestion engines and resilient Redis queues to handle high-volume flash sales without hitting Shopify API rate limits.'
    },
    {
      q: 'What is your guarantee on Core Web Vitals and mobile speed?',
      a: 'We guarantee a 95–100 Mobile Lighthouse score and sub-1.0s Largest Contentful Paint (LCP) on mobile 4G networks. If your store fails to reach target speed thresholds upon completion of our speed optimization sprint, we continue engineering at zero additional cost until the SLA is satisfied.'
    },
    {
      q: 'How do we get started with Pinakkaa?',
      a: 'Submit your store requirements via the estimate form above or email us directly at mitash@pinakkaa.com. We will review your existing theme and catalog taxonomy, prepare an architectural assessment within 24 hours, and schedule a technical walkthrough.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-28 bg-[#07080a] text-white border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111317] border border-white/[0.08] text-[11px] font-mono text-stone-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500"></span>
            <span className="uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            Clear answers, <span className="font-serif-italic font-normal text-cobalt-400">no ambiguity</span>.
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Everything you need to know about our catalog apps, engineering retainers, and partner program.
          </p>
        </div>

        {/* Minimalist Hairline FAQ Accordion with Smooth CSS Grid Animation */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-7 sm:py-8 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-stone-200 group-hover:text-white transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-cobalt-600 text-white border-transparent shadow-lg shadow-cobalt-600/35 rotate-45' 
                      : 'text-stone-400 border-white/[0.1] group-hover:text-white group-hover:border-white/[0.25] rotate-0'
                  }`}>
                    <Plus className="w-4 h-4 transition-transform duration-300" />
                  </div>
                </button>

                {/* Smooth Expandable Content using CSS Grid Rows */}
                <div 
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pr-6 sm:pr-12 text-sm sm:text-base text-stone-400 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center text-xs font-mono text-stone-500">
          Have an unlisted question? Email our technical lead directly at{' '}
          <a href="mailto:mitash@pinakkaa.com" className="text-cobalt-400 hover:underline font-semibold">
            mitash@pinakkaa.com
          </a>
        </div>

      </div>
    </section>
  );
}
