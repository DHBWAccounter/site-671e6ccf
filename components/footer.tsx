import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-[family-name:var(--font-outfit)]">
                  k
                </span>
              </div>
              <span className="text-xl font-semibold font-[family-name:var(--font-outfit)] tracking-tight">
                krin<span className="text-cyan-400">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              A premier AI consulting agency helping businesses integrate
              cutting-edge artificial intelligence solutions to drive growth,
              efficiency, and innovation.
            </p>
          </div>

          {/* Headquarters */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[family-name:var(--font-outfit)]">
              Headquarters
            </h3>
            <div className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                1200 Innovation Drive, Suite 400
                <br />
                San Francisco, CA 94105
              </address>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 font-[family-name:var(--font-outfit)]">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@krinai.agency"
                className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                hello@krinai.agency
              </a>
              <a
                href="tel:+14155550192"
                className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                (415) 555-0192
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-3 font-[family-name:var(--font-outfit)]">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm text-center">
            © 2024 krinAI Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
