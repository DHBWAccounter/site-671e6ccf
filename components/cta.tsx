"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-slate-950 to-cyan-600/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
          Ready to Accelerate Your
          <br />
          <span className="text-gradient">AI Journey?</span>
        </h2>

        <p className="animate-on-scroll opacity-0 delay-100 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Schedule a complimentary strategy session with our team. We&apos;ll assess
          your current capabilities, identify opportunities, and outline a path
          forward tailored to your goals.
        </p>

        <div className="animate-on-scroll opacity-0 delay-200">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-base hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
