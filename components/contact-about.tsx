"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Target, TrendingUp, Shield } from "lucide-react";

export function ContactAbout() {
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

  const principles = [
    {
      icon: Target,
      title: "Clear Objectives",
      description:
        "Every engagement begins with well-defined goals and success metrics.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Outcomes",
      description:
        "We deliver results you can quantify, with transparent progress tracking.",
    },
    {
      icon: Users,
      title: "Diverse Expertise",
      description:
        "Our team brings perspectives from leading tech companies and research institutions.",
    },
    {
      icon: Shield,
      title: "Long-term Partnership",
      description:
        "We remain invested in your success beyond project completion.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                Why Partner with <span className="text-gradient">krinAI</span>?
              </h2>
            </div>

            <div className="animate-on-scroll opacity-0 delay-100 space-y-5 text-slate-300 leading-relaxed">
              <p>
                We believe successful AI implementation requires more than
                technical expertise—it demands a deep understanding of business
                context, organizational readiness, and change management.
              </p>

              <p>
                Our approach combines rigorous methodology with practical
                pragmatism. We don&apos;t chase trends; we identify solutions that
                deliver lasting value. Every engagement begins with clear
                objectives and ends with measurable outcomes.
              </p>

              <p>
                With a team drawn from leading technology companies, research
                institutions, and enterprise consultancies, we bring diverse
                perspectives to complex challenges. Our clients stay with us
                because we deliver results, communicate transparently, and remain
                invested in their long-term success.
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 delay-200 mt-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Learn more about our approach
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Principles Grid */}
          <div className="animate-on-scroll opacity-0 delay-300">
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    <principle.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
