"use client";

import { useEffect, useRef } from "react";

export function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-blue-600/5 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
          <span className="text-sm text-slate-300 font-medium">
            We respond within 24 hours
          </span>
        </div>

        <h1 className="animate-on-scroll opacity-0 delay-100 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 font-[family-name:var(--font-outfit)] leading-tight">
          Let&apos;s Build Something
          <br />
          <span className="text-gradient">Intelligent Together</span>
        </h1>

        <p className="animate-on-scroll opacity-0 delay-200 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Whether you have a defined AI project in mind or are exploring
          possibilities, our team is here to help. Reach out to schedule a
          discovery call, and we&apos;ll respond within one business day.
        </p>

        {/* Scroll indicator */}
        <div className="animate-on-scroll opacity-0 delay-300 mt-16 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 uppercase tracking-widest">
            Scroll to connect
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
