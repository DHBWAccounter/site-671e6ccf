"use client";

import { useEffect, useRef } from "react";
import {
  Lightbulb,
  Brain,
  Workflow,
  MessageSquareText,
  Plug,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy & Roadmapping",
    description:
      "We assess your organization's readiness, identify high-impact opportunities, and develop a clear implementation roadmap aligned with your business objectives.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Custom Machine Learning Solutions",
    description:
      "Our data scientists build tailored models designed for your specific use cases—from demand forecasting to customer segmentation to anomaly detection.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Streamline operations with AI-powered workflow automation, document processing, and decision support systems that reduce manual effort and improve accuracy.",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: MessageSquareText,
    title: "Natural Language Processing",
    description:
      "Harness the power of text and speech with custom chatbots, sentiment analysis, document extraction, and conversational AI interfaces.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Plug,
    title: "AI Integration & Deployment",
    description:
      "We ensure seamless integration with your existing technology stack, providing end-to-end support from prototype to production.",
    gradient: "from-emerald-500 to-green-500",
  },
];

export function Services() {
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
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-outfit)]">
            Our Core <span className="text-gradient">Services</span>
          </h2>
          <p className="animate-on-scroll opacity-0 delay-100 text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={cn(
                  "animate-on-scroll opacity-0 group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:bg-slate-900/70",
                  index === 4 && "md:col-span-2 lg:col-span-1"
                )}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={cn(
                      "inline-flex p-3 rounded-xl bg-gradient-to-br mb-4",
                      service.gradient
                    )}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-outfit)] text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
