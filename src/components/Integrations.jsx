import React, { useRef } from 'react';

function IntegrationCard({ item }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const markRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate realistic 3D perspective angles (-10deg to +10deg)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    // Direct hardware-accelerated transform with zero React re-renders
    card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.025)`;
    card.style.borderColor = 'rgba(37, 99, 235, 0.7)';
    card.style.boxShadow = '0 24px 45px -12px rgba(37, 99, 235, 0.28), 0 8px 20px rgba(0, 0, 0, 0.06)';

    if (glareRef.current) {
      glareRef.current.style.opacity = '1';
      glareRef.current.style.background = `radial-gradient(220px circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(37, 99, 235, 0.12), transparent 75%)`;
    }
    if (markRef.current) {
      markRef.current.style.backgroundColor = '#2563eb';
      markRef.current.style.color = '#ffffff';
      markRef.current.style.borderColor = '#2563eb';
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
    card.style.borderColor = 'rgba(0, 0, 0, 0.07)';
    card.style.boxShadow = 'none';

    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
    if (markRef.current) {
      markRef.current.style.backgroundColor = '';
      markRef.current.style.color = '';
      markRef.current.style.borderColor = '';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.2s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
      className="relative p-5 rounded-2xl bg-white border border-black/[0.07] flex items-center justify-between group overflow-hidden select-none cursor-pointer"
    >
      {/* 3D Dynamic Specular Light Glare Follower */}
      <div
        ref={glareRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-200 opacity-0 z-0"
      />

      {/* Primary Brand Lockup with 3D Depth Layer */}
      <div 
        className="flex items-center gap-3.5 relative z-10" 
        style={{ transform: 'translateZ(20px)' }}
      >
        <div 
          ref={markRef}
          className="w-10 h-10 rounded-xl bg-black/[0.03] border border-black/[0.06] text-cobalt-600 flex items-center justify-center font-mono font-bold text-sm transition-all duration-200 shadow-inner"
        >
          {item.mark}
        </div>
        <div>
          <div className="text-sm font-bold text-[#0b0d12] group-hover:text-cobalt-600 transition-colors">
            {item.name}
          </div>
          <div className="text-[11px] text-stone-500 font-mono">
            {item.category}
          </div>
        </div>
      </div>

      {/* Badge with 3D Depth Layer */}
      <span
        className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/[0.03] text-stone-600 font-medium relative z-10 group-hover:bg-cobalt-50 group-hover:text-cobalt-700 transition-colors"
        style={{ transform: 'translateZ(16px)' }}
      >
        {item.badge}
      </span>
    </div>
  );
}

export default function Integrations() {
  const tools = [
    { name: 'Shopify Plus', category: 'Commerce Engine', badge: 'Certified', mark: 'S' },
    { name: 'Google Sheets', category: 'Catalog Sync', badge: 'Native 2-Way', mark: 'G' },
    { name: 'Google Drive', category: 'Media Pipeline', badge: 'Auto Sync', mark: 'D' },
    { name: 'Rust (Wasm)', category: 'Shopify Functions', badge: 'Sub-5ms', mark: 'R' },
    { name: 'Recharge', category: 'Subscriptions', badge: 'Direct API', mark: 'R' },
    { name: 'Klaviyo', category: 'Retention & Email', badge: 'Event Sync', mark: 'K' },
    { name: 'NetSuite', category: 'Enterprise ERP', badge: 'Private App', mark: 'N' },
    { name: 'SAP S/4HANA', category: 'Enterprise ERP', badge: 'Middleware', mark: 'S' },
    { name: 'Katana MRP', category: 'Manufacturing ERP', badge: 'Inventory Sync', mark: 'K' },
    { name: 'Stripe', category: 'Global Payments', badge: 'Extensibility', mark: 'S' },
    { name: 'Razorpay', category: 'India & APAC Payments', badge: 'Native Checkout', mark: 'R' },
    { name: 'Cloudflare', category: 'Early Hints & Edge', badge: 'Sub-1s LCP', mark: 'C' }
  ];

  return (
    <section id="integrations" className="py-28 bg-[#fbfbfa] text-[#0b0d12] border-t border-[#e4e3e0] light-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-stone-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
            <span className="uppercase tracking-wider font-semibold">INTEGRATIONS</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight leading-[1.08]">
            Plays well with <span className="font-serif-italic font-normal text-cobalt-600">your stack</span>.
          </h2>
          
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
            Over 40 native integrations. Your storefront, payments, ERPs, and marketing tools connect in days, with zero engineering drag.
          </p>
        </div>

        {/* Integration Chips Grid - Interactive 3D Perspective Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 perspective-1000">
          {tools.map((item, idx) => (
            <IntegrationCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}
