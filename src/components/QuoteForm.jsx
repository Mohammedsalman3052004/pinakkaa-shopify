import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export default function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState([
    'Custom Shopify App Development',
    'Speed Optimization (95+ CWV)',
    'AEO & GEO AI Search'
  ]);
  const [selectedTier, setSelectedTier] = useState('Basic Foundation ($5,000/mo - Limited Hours)');
  const [isPartnerInquiry, setIsPartnerInquiry] = useState(false);
  const [storeUrl, setStoreUrl] = useState('');
  const [monthlyRevenue, setMonthlyRevenue] = useState('$500K - $2M ARR');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Listen to tier selection and partner events
  useEffect(() => {
    const handleTierSelection = (e) => {
      const tier = e.detail;
      if (tier === 'Basic Foundation') {
        setSelectedTier('Basic Foundation ($5,000/mo - Limited Hours)');
      } else if (tier === 'Mid-Scale Growth') {
        setSelectedTier('Mid-Scale Growth ($9,500/mo - Most Popular)');
      } else if (tier === 'Fullscale Enterprise') {
        setSelectedTier('Fullscale Enterprise ($16,500/mo - Dedicated Squad)');
      }
    };

    const handlePartnerSelection = () => {
      setIsPartnerInquiry(true);
      if (!selectedServices.includes('Pinakkaa 15% Partner Program')) {
        setSelectedServices(prev => [...prev, 'Pinakkaa 15% Partner Program']);
      }
    };

    window.addEventListener('select-tier', handleTierSelection);
    window.addEventListener('select-partner-program', handlePartnerSelection);
    return () => {
      window.removeEventListener('select-tier', handleTierSelection);
      window.removeEventListener('select-partner-program', handlePartnerSelection);
    };
  }, [selectedServices]);

  const serviceOptions = [
    { id: 'custom-app', label: 'Custom Shopify App Development', desc: 'Shopify Functions & tailored business logic' },
    { id: 'private-app', label: 'Private App & Internal ERP Sync', desc: 'Air-gapped warehouse & NetSuite/SAP pipelines' },
    { id: 'public-app', label: 'Public Shopify App (Commercial SaaS)', desc: 'Full App Store lifecycle, Polaris & Billing API' },
    { id: 'catalog-suite', label: 'Pinakkaa 3-in-1 Catalog Suite', desc: 'Bulk Tag Manager, Variant Editor, Image Sync' },
    { id: 'partner', label: 'Pinakkaa 15% Partner Program', desc: 'Earn 15% recurring commission for devs, agencies & VAs' },
    { id: 'launch', label: 'Bespoke Store Launch / Redesign', desc: '100% custom Liquid 2.0 or Hydrogen' },
    { id: 'speed', label: 'Speed Optimization (95+ CWV)', desc: 'Sub-second mobile LCP without pixel loss' },
    { id: 'cro', label: 'CRO & Checkout Extensibility', desc: 'High-converting PDPs & cart drawer upsells' },
    { id: 'aeo-geo', label: 'AEO & GEO AI Search', desc: 'Perplexity, ChatGPT & Google AI Overviews' },
    { id: 'retainer', label: 'Store Management Retainer', desc: 'Ongoing dedicated weekly hours starting at $5k/mo' },
  ];

  const tierOptions = [
    { id: 'basic', label: 'Basic Foundation ($5,000/mo - Limited Hours)', hours: '12-15 hrs/wk', note: 'Maintenance & core speed' },
    { id: 'mid', label: 'Mid-Scale Growth ($9,500/mo - Most Popular)', hours: '25-30 hrs/wk', note: 'Custom apps & continuous CRO' },
    { id: 'full', label: 'Fullscale Enterprise ($16,500/mo - Dedicated Squad)', hours: '45+ hrs/wk', note: 'Full team + 24/7 SLA' },
    { id: 'project', label: 'One-Time Project Architecture ($8,000 - $25,000+)', hours: 'Sprint scope', note: 'Fixed milestone delivery' }
  ];

  const revenueTiers = [
    'Pre-revenue / Launch phase',
    '$100K - $500K ARR',
    '$500K - $2M ARR',
    '$2M - $10M ARR',
    '$10M - $50M+ ARR (Shopify Plus Enterprise)'
  ];

  const toggleService = (label) => {
    setSelectedServices(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
    const generatedId = `PIN-${randomHex}`;
    setReferenceId(generatedId);
    setSubmitted(true);
  };

  const copyBrief = () => {
    const briefText = `PINAKKAA PROJECT ESTIMATE SPECIFICATION
Reference ID: ${referenceId}
Store URL: ${storeUrl || 'Not specified'}
Monthly / Annual GMV: ${monthlyRevenue}
Desired Retainer / Tier: ${selectedTier}
Partner Inquiry: ${isPartnerInquiry ? 'YES (15% Recurring)' : 'No'}
Selected Capabilities:
${selectedServices.map(s => ` - ${s}`).join('\n')}
Client Contact: ${fullName} (${email}, ${phone || 'No phone'})
Project Notes: ${projectNotes || 'None provided'}
Direct Email: mitash@pinakkaa.com`;

    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="quote" className="py-28 bg-[#ffffff] text-[#0b0d12] border-t border-[#e4e3e0] light-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-stone-600 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600"></span>
            <span className="uppercase tracking-wider font-semibold">READY WHEN YOU ARE</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0b0d12] tracking-tight leading-[1.08]">
            See Pinakkaa on <span className="font-serif-italic font-normal text-cobalt-600">your own store</span>.
          </h2>
          
          <p className="mt-5 text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
            A walkthrough with a product specialist or an instant engineering estimate tailored to your store architecture. Free store audit included.
          </p>
        </div>

        {/* Confirmation Screen */}
        {submitted ? (
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-black/[0.08] p-8 sm:p-14 text-center shadow-luxury-light">
            <div className="w-16 h-16 rounded-2xl bg-cobalt-50 border border-cobalt-100 flex items-center justify-center mx-auto mb-6 text-cobalt-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 rounded-md bg-stone-100 text-xs font-mono text-stone-600 border border-stone-200 mb-4">
              REFERENCE ID: <strong className="text-[#0b0d12]">{referenceId}</strong>
            </div>

            <h3 className="text-3xl font-extrabold text-[#0b0d12] mb-3">
              Project Specification Received
            </h3>

            <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <strong className="text-[#0b0d12]">{fullName || 'Partner'}</strong>. Our senior engineering lead has received your requirements and will review your store architecture within 12–24 business hours.
            </p>

            <div className="p-5 rounded-2xl bg-[#fbfbfa] border border-black/[0.06] text-left text-xs font-mono text-stone-600 max-w-xl mx-auto mb-8 space-y-1.5">
              <div>Store: <span className="text-[#0b0d12] font-semibold">{storeUrl || 'Direct consultation'}</span></div>
              <div>Selected Tier: <span className="text-cobalt-600 font-semibold">{selectedTier}</span></div>
              <div>Direct Dispatch: <span className="text-stone-800 font-semibold">mitash@pinakkaa.com</span></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={copyBrief}
                className="px-8 py-3.5 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white text-xs font-semibold transition-all shadow-md shadow-cobalt-600/30 flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Project Specification'}</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="px-7 py-3.5 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-stone-700 text-xs font-medium border border-black/[0.08] transition-all"
              >
                Edit Requirements
              </button>
            </div>
          </div>
        ) : (
          /* Intake Form on Clean White Paper */
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-14 shadow-luxury-light">
            <div className="space-y-12">
              
              {/* Step 1: Select Capabilities */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs font-mono text-stone-600 uppercase tracking-wider font-semibold">
                    01. Select Needed Engineering Capabilities
                  </div>
                  <span className="text-xs font-mono text-cobalt-600 font-bold">
                    {selectedServices.length} Selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {serviceOptions.map(opt => {
                    const isSelected = selectedServices.includes(opt.label);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleService(opt.label)}
                        className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 ${
                          isSelected
                            ? 'bg-cobalt-50/60 border-cobalt-600 shadow-sm'
                            : 'bg-[#fbfbfa] border-black/[0.06] hover:border-black/[0.15]'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-cobalt-600 border-cobalt-600 text-white' : 'border-stone-400 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className={`text-xs font-bold ${isSelected ? 'text-cobalt-950 font-bold' : 'text-[#0b0d12]'}`}>
                            {opt.label}
                          </div>
                          <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Tier / Retainer Model */}
              <div>
                <div className="text-xs font-mono text-stone-600 uppercase tracking-wider font-semibold mb-5">
                  02. Select Retainer Tier or Project Sprint
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {tierOptions.map(tier => {
                    const isSelected = selectedTier.startsWith(tier.label.split(' ')[0]);
                    return (
                      <button
                        type="button"
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.label)}
                        className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-cobalt-50/60 border-cobalt-600 shadow-sm'
                            : 'bg-[#fbfbfa] border-black/[0.06] hover:border-black/[0.15]'
                        }`}
                      >
                        <div>
                          <div className={`text-xs font-bold mb-1 ${isSelected ? 'text-cobalt-950' : 'text-[#0b0d12]'}`}>
                            {tier.label.split('(')[0]}
                          </div>
                          <div className="text-xs font-mono text-cobalt-600 font-semibold">
                            ({tier.label.split('(')[1]}
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-black/[0.06] text-[10px] font-mono text-stone-500">
                          {tier.hours} · {tier.note}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Store & Commercial Metrics */}
              <div>
                <div className="text-xs font-mono text-stone-600 uppercase tracking-wider font-semibold mb-5">
                  03. Store Details & Growth Scale
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-2 font-medium">
                      Shopify Store URL / Primary Domain
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. brandname.com or myshopify.com"
                      value={storeUrl}
                      onChange={(e) => setStoreUrl(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fbfbfa] border border-black/[0.1] focus:border-cobalt-600 focus:outline-none text-xs text-[#0b0d12] placeholder-stone-400 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-2 font-medium">
                      Current Store Revenue Scale
                    </label>
                    <select
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fbfbfa] border border-black/[0.1] focus:border-cobalt-600 focus:outline-none text-xs text-[#0b0d12] font-mono"
                    >
                      {revenueTiers.map(rt => (
                        <option key={rt} value={rt} className="bg-white text-stone-900">
                          {rt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Information */}
              <div>
                <div className="text-xs font-mono text-stone-600 uppercase tracking-wider font-semibold mb-5">
                  04. Direct Contact Information
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fbfbfa] border border-black/[0.1] focus:border-cobalt-600 focus:outline-none text-xs text-[#0b0d12] placeholder-stone-400 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-2 font-medium">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@brandname.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fbfbfa] border border-black/[0.1] focus:border-cobalt-600 focus:outline-none text-xs text-[#0b0d12] placeholder-stone-400 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone-700 mb-2 font-medium">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#fbfbfa] border border-black/[0.1] focus:border-cobalt-600 focus:outline-none text-xs text-[#0b0d12] placeholder-stone-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone-700 mb-2 font-medium">
                    Project Notes & Technical Context
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe current catalog pains, theme slowdowns, app requirements, or custom ERP sync needs..."
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#fbfbfa] border border-black/[0.1] focus:border-cobalt-600 focus:outline-none text-xs text-[#0b0d12] placeholder-stone-400 font-sans"
                  />
                </div>
              </div>

              {/* Partner Program Toggle Checkbox */}
              <div className="p-5 rounded-2xl bg-[#fbfbfa] border border-cobalt-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <input
                    type="checkbox"
                    id="partner-check"
                    checked={isPartnerInquiry}
                    onChange={(e) => setIsPartnerInquiry(e.target.checked)}
                    className="w-4 h-4 accent-cobalt-600 cursor-pointer"
                  />
                  <label htmlFor="partner-check" className="text-xs text-stone-800 cursor-pointer font-medium">
                    <strong className="text-[#0b0d12]">Apply for Pinakkaa 15% Partner Network</strong> — I manage client stores and want to earn 15% recurring commission.
                  </label>
                </div>
                <span className="text-[11px] font-mono text-cobalt-600 font-semibold hidden sm:inline">
                  Recurring Revenue Share
                </span>
              </div>

              {/* Submit CTA & NDA Assurance */}
              <div className="pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-cobalt-600" />
                  <span>Strict NDA Confidentiality · No Sales Spam</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-cobalt-600 hover:bg-cobalt-500 text-white text-xs font-semibold transition-all shadow-xl shadow-cobalt-600/30 hover:shadow-cobalt-500/50 flex items-center justify-center gap-2"
                >
                  <span>Request Engineering Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </form>
        )}

      </div>
    </section>
  );
}
