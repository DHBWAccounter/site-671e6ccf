"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow delay-200" />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl animate-float" />

      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 border border-blue-500/20 rounded-lg rotate-12 animate-float opacity-40" />
      <div className="absolute bottom-32 right-20 w-16 h-16 border border-cyan-500/20 rounded-full animate-float delay-300 opacity-40" />
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-on-scroll opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300 font-medium">
              Enterprise AI Solutions
            </span>
          </div>
        </div>

        <h1 className="animate-on-scroll opacity-0 delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-[family-name:var(--font-outfit)]">
          Intelligence Engineered
          <br />
          <span className="text-gradient">for Your Business</span>
        </h1>

        <p className="animate-on-scroll opacity-0 delay-200 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          At krinAI Agency, we bridge the gap between cutting-edge artificial
          intelligence and real-world business impact. Our team of AI
          strategists, data scientists, and implementation specialists work
          alongside your organization to design, build, and deploy intelligent
          systems that drive measurable results.
        </p>

        <p className="animate-on-scroll opacity-0 delay-300 text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Whether you&apos;re exploring your first AI initiative or scaling existing
          capabilities, we provide the expertise and frameworks to ensure
          success. From natural language processing to predictive analytics, we
          transform complex technology into practical business solutions.
        </p>

        <div className="animate-on-scroll opacity-0 delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-base hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
          >
            Schedule Consultation
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white rounded-xl font-semibold text-base hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
