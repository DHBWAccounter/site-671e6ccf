"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "krinAI Agency transformed our customer service operations with an intelligent routing system that reduced response times by 60%. Their strategic approach ensured we saw ROI within the first quarter.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Nexus Financial Group",
  },
  {
    quote:
      "The team at krinAI didn't just build us a model—they taught us how to think about AI as a core business capability. Their ongoing support has been invaluable as we scale.",
    author: "Marcus Williams",
    role: "CTO",
    company: "MedTech Innovations",
  },
  {
    quote:
      "From initial workshop to full deployment, krinAI delivered a demand forecasting system that improved our inventory efficiency by 34%. Exceptional expertise and professionalism.",
    author: "Dr. Ananya Patel",
    role: "Director of Supply Chain",
    company: "GlobalRetail Corp",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
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
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-outfit)]">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 text-lg text-slate-400 max-w-2xl mx-auto">
            Hear from organizations that have transformed with AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "animate-on-scroll opacity-0 group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/40 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
              )}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-500/20 group-hover:text-blue-500/30 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Quote text */}
              <blockquote className="text-slate-300 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-white font-[family-name:var(--font-outfit)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
