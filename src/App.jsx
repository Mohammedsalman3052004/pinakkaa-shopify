import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BottleneckSection from './components/BottleneckSection';
import AppSuite from './components/AppSuite';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Integrations from './components/Integrations';
import SecurityEnterprise from './components/SecurityEnterprise';
import AppEngineering from './components/AppEngineering';
import SearchGeoAeo from './components/SearchGeoAeo';
import FreeInstruments from './components/FreeInstruments';
import Pricing from './components/Pricing';
import QuoteForm from './components/QuoteForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Lenis smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      // Update top scroll progress bar
      if (progressBarRef.current) {
        const progress = e.progress || (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    });

    const tickerCb = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      window.__lenis = null;
      lenis.destroy();
      gsap.ticker.remove(tickerCb);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07080a] text-white flex flex-col font-sans selection:bg-cobalt-600 selection:text-white relative">
      
      {/* Precision Trailing Custom Cursor */}
      <CustomCursor />

      {/* Razor-thin Top Scroll Progress Bar */}
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cobalt-600 via-cobalt-400 to-emerald-400 z-[100] origin-left pointer-events-none"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />

      {/* Floating Centered Glass Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 01. Hero [BLACK] - Connected Software for Shopify Commerce */}
        <Hero />

        {/* 02. Starting Point [WHITE] - "Start with the bottleneck." */}
        <BottleneckSection />

        {/* 03. The Suite [BLACK] - "One product. One clear role." */}
        <AppSuite />

        {/* 04. How It Works [WHITE] - "Three steps to composed commerce." */}
        <HowItWorks />

        {/* 05. Social Proof & Stores [BLACK] - "Proof, not promises." */}
        <Portfolio />

        {/* 06. Integrations [WHITE] - "Plays well with your stack." */}
        <Integrations />

        {/* 07. Security & Compliance [BLACK] - "Enterprise-grade, by default." */}
        <SecurityEnterprise />

        {/* 08. App Engineering Studio [WHITE] - "Have an app idea? Let’s engineer it." */}
        <AppEngineering />

        {/* 09. Speed, CRO & AI Search [BLACK] - "Sub-second speed & AI search citations." */}
        <SearchGeoAeo />

        {/* 10. Free Instruments [WHITE] - "Value before the sales call." (Speed & Partner Calculators) */}
        <FreeInstruments />

        {/* 11. Transparent Pricing [BLACK] - Engineering Retainers from $5k/mo & Project Sprints */}
        <Pricing />

        {/* 12. Project Scope & Intake [WHITE] - "See Pinakkaa on your own store." */}
        <QuoteForm />

        {/* 13. Minimalist Accordion FAQ [BLACK] */}
        <Faq />
      </main>

      {/* 14. Architectural Multi-Column Footer [BLACK] */}
      <Footer />
    </div>
  );
}
