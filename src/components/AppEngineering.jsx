import React, { useState } from 'react';
import { 
  AppWindow, 
  Terminal, 
  Check, 
  Cpu, 
  Lock
} from 'lucide-react';

export default function AppEngineering() {
  const [activeTab, setActiveTab] = useState('custom');

  const appTypes = [
    {
      id: 'private',
      num: '01',
      label: 'Private Apps & ERP Sync',
      icon: Lock,
      title: 'Shopify Private Apps & Internal Infrastructure',
      subtitle: 'Air-gapped internal tools, warehouse sync, and proprietary backend pipelines.',
      summary: 'Engineered specifically for your store’s private infrastructure. Built with dedicated access scopes, token-based authentication, and direct database linkages that never touch external public services.',
      highlights: [
        'Custom warehouse & 3PL order streaming with sub-5s fulfillment creation',
        'Direct NetSuite / SAP / Katana ERP two-way inventory sync',
        'Automated multi-channel price harmonization across Amazon & Shopify Plus',
        'Enterprise rate-limit management using leaky-bucket token throttling algorithms'
      ],
      codeSnippet: `// Private Microservice: High-Speed Webhook Dispatcher
const express = require('express');
const crypto = require('crypto');
const app = express();

app.post('/api/webhooks/orders/create', verifyShopifyHMAC, async (req, res) => {
  const order = req.body;
  // Push order to internal ERP queue in < 45ms
  await erpQueue.add('ERP_INVENTORY_DEDUCT', {
    orderId: order.id,
    skuList: order.line_items.map(i => ({ sku: i.sku, qty: i.quantity })),
    source: 'SHOPIFY_PLUS'
  }, { attempts: 5, backoff: { type: 'exponential', delay: 2000 } });

  res.status(200).send({ received: true });
});`,
      metricLabel: 'Sync Latency',
      metricValue: '< 45ms',
      metricNote: 'Direct ERP connection'
    },
    {
      id: 'custom',
      num: '02',
      label: 'Shopify Functions (Rust/Wasm)',
      icon: Cpu,
      title: 'Shopify Functions & Store-Specific Custom Apps',
      subtitle: 'Native checkout rules, custom bundling, and dynamic discounts in Rust/Wasm.',
      summary: 'Replace bloated client-side script tags with native Shopify Functions compiled to WebAssembly (Wasm). Executes inside Shopify’s checkout infrastructure in under 5ms without slowing down the customer’s browser.',
      highlights: [
        'Deterministic sub-5ms execution directly within Shopify Checkout Extensibility',
        'Tiered volume pricing, B2B wholesale discounts, and cart item transformations',
        'Custom payment method re-ordering and conditional shipping method hides',
        'Zero theme overhead — no JavaScript injected into customer browser DOM'
      ],
      codeSnippet: `// Shopify Function in Rust: Sub-5ms Checkout Transform
use shopify_function::prelude::*;
use shopify_function::Result;

#[shopify_function_target(cart_transform)]
fn function(input: input::ResponseData) -> Result<output::FunctionRunResult> {
  let operations = input.cart.lines.iter()
    .filter(|line| line.quantity >= 3)
    .map(|line| output::Operation::Update(output::UpdateOperation {
      cart_line_id: line.id.clone(),
      price: Some(output::Price {
        percentage_decrease: Some(Decimal(15.0)), // 15% volume discount
      }),
    }))
    .collect();

  Ok(output::FunctionRunResult { operations })
}`,
      metricLabel: 'Checkout Execution',
      metricValue: '3.2ms',
      metricNote: 'Wasm execution runtime'
    },
    {
      id: 'public',
      num: '03',
      label: 'Public SaaS Apps',
      icon: AppWindow,
      title: 'Turnkey Public Shopify App Store Applications',
      subtitle: 'Commercial SaaS applications built on Remix, Polaris UI, and Billing API v2.',
      summary: 'Got an innovative Shopify app concept? We turn your idea into a production-certified, revenue-generating Shopify App Store product. We manage architecture, security compliance, App Store review, and recurring billing.',
      highlights: [
        'Modern tech stack: Remix, Vite, TypeScript, Prisma, Redis & Shopify Polaris',
        'Shopify App Store Certification guarantee: passes all automated and manual reviews',
        'Shopify App Billing API v2 with recurring subscription & usage charges',
        'Mandatory GDPR webhooks and secure automated database redaction pipelines'
      ],
      codeSnippet: `// Public App: Recurring Billing API Integration
import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  const { billing, session } = await authenticate.admin(request);

  // Enforce monthly recurring app subscription
  await billing.require({
    plans: ['PINAKKAA_GROWTH_PLAN'],
    isTest: false,
    onFailure: async () => billing.request({
      plan: 'PINAKKAA_GROWTH_PLAN',
      isTest: false,
      returnUrl: \`https://\${session.shop}/admin/apps/pinakkaa/billing/confirm\`,
    }),
  });

  return json({ status: 'ACTIVE_SUBSCRIPTION' });
};`,
      metricLabel: 'App Store Review',
      metricValue: '100%',
      metricNote: 'First-pass approval rate'
    }
  ];

  const current = appTypes.find(t => t.id === activeTab) || appTypes[0];

  return (
    <section id="app-engineering" className="py-28 bg-[#ffffff] text-[#0b0d12] border-t border-[#e4e3e0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-stone-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
            <span className="uppercase tracking-wider font-semibold">APP ENGINEERING STUDIO</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight leading-[1.08]">
            Have an app idea? <span className="font-serif-italic font-normal text-cobalt-600">Let’s engineer it</span>.
          </h2>
          
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
            From air-gapped private ERP connectors to sub-5ms Rust Shopify Functions and commercial SaaS apps certified for the Shopify App Store.
          </p>
        </div>

        {/* Minimalist Tabs - Clean Underline Nav */}
        <div className="flex border-b border-black/[0.08] overflow-x-auto scrollbar-none mb-12 gap-2 sm:gap-6">
          {appTypes.map(t => {
            const isSelected = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`pb-4 px-2 sm:px-4 text-left border-b-2 transition-all whitespace-nowrap flex items-center gap-2.5 ${
                  isSelected
                    ? 'border-cobalt-600 text-[#0b0d12] font-bold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                <span className={`text-[11px] font-mono ${isSelected ? 'text-cobalt-600' : 'text-stone-400'}`}>
                  {t.num}
                </span>
                <span className="text-sm tracking-tight">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Open Architecture Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono text-cobalt-600 uppercase tracking-wider font-semibold">
                {current.num} ARCHITECTURE PATTERN
              </span>
              <h3 className="text-3xl font-bold text-[#0b0d12] mt-1 tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-1">
                {current.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              {current.summary}
            </p>

            <div className="space-y-3 pt-2">
              {current.highlights.map((h, hidx) => (
                <div key={hidx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                  <Check className="w-4 h-4 text-cobalt-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Metric Row */}
            <div className="p-6 rounded-2xl bg-[#fbfbfa] border border-black/[0.08] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-stone-500 block">
                  {current.metricLabel}
                </span>
                <span className="text-3xl font-extrabold text-[#0b0d12] font-mono">
                  {current.metricValue}
                </span>
              </div>
              <span className="text-xs font-mono text-cobalt-600 font-semibold">
                {current.metricNote}
              </span>
            </div>
          </div>

          {/* Right Code Terminal with 3D Depth */}
          <div className="lg:col-span-6 perspective-1000">
            <div className="rounded-2xl bg-[#07080a] border border-black/[0.1] shadow-2xl overflow-hidden hover:-translate-y-1.5 transition-transform duration-300 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]">
              <div className="px-5 py-3.5 bg-[#0c0e12] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cobalt-400" />
                  <span className="text-white font-medium">production_implementation.rs</span>
                </div>
                <span className="text-[10px] text-stone-500">UTF-8 · RUST WASM</span>
              </div>

              <div className="p-6 font-mono text-xs overflow-x-auto text-stone-300 leading-relaxed max-h-[400px] scrollbar-thin">
                <pre>{current.codeSnippet}</pre>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
