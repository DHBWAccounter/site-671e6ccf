"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-outfit)]">
                Get in <span className="text-gradient">Touch</span>
              </h2>
            </div>

            <div className="animate-on-scroll opacity-0 delay-100 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Schedule a Consultation
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Ready to discuss your AI initiatives? Fill out the form and a
                  member of our team will reach out to schedule a complimentary
                  strategy session.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-transparent" />

              {/* Contact Details */}
              <div className="space-y-5">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  Prefer to reach out directly?
                </h4>

                <a
                  href="mailto:hello@krinai.agency"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      hello@krinai.agency
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+14155550192"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Phone</div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      (415) 555-0192
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Office Location</div>
                    <div className="text-white font-medium">
                      1200 Innovation Drive, Suite 400
                      <br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-400 italic">
                We work with clients globally. Virtual consultations available
                for all time zones.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-on-scroll opacity-0 delay-200">
            <div className="relative p-8 md:p-10 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-t-2xl" />

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Thank You!
                  </h3>
                  <p className="text-slate-300">
                    We&apos;ve received your inquiry and will be in touch within one
                    business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Company <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Role/Title
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                        placeholder="Your role"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
                        <option value="">Select type</option>
                        <option value="strategy">Strategy</option>
                        <option value="custom-ml">Custom ML Solution</option>
                        <option value="automation">Automation</option>
                        <option value="nlp">NLP</option>
                        <option value="integration">Integration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Budget Range
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
                        <option value="">Select budget</option>
                        <option value="under-50k">Under $50K</option>
                        <option value="50k-150k">$50K – $150K</option>
                        <option value="150k-500k">$150K – $500K</option>
                        <option value="500k+">$500K+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project or goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-base hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50"
                  >
                    Submit Inquiry
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
