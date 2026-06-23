import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [utc, setUtc] = useState("");

  useEffect(() => {
    const update = () => setUtc(new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC");
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-titanium/20 bg-obsidian pb-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo + mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-ignition" />
              <span className="font-heading font-black text-sm tracking-[0.2em] text-signal-white">
                OPERATION<span className="text-ignition">.</span>MOBILIZATION
              </span>
            </div>
            <p className="text-[11px] font-mono text-titanium leading-relaxed max-w-xs">
              Sending workers to the hardest places on earth since 1957.
              Not a charity. A global mission force.
            </p>
            <div className="text-[9px] font-mono text-titanium/50 space-y-0.5">
              <div>HQ: 51.5074° N, 0.1278° W</div>
              <div>{utc}</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <span className="text-[9px] font-mono text-titanium tracking-[0.2em] block mb-3">NAVIGATION</span>
            <div className="space-y-2">
              {[
                { label: "Command", href: "#command" },
                { label: "Operations", href: "#operations" },
                { label: "Logistics", href: "#logistics" },
                { label: "Field Intel", href: "#intel" },
                { label: "Deploy", href: "#deploy" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="block text-[11px] font-mono text-signal-white/60 hover:text-ignition transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div className="md:col-span-2">
            <span className="text-[9px] font-mono text-titanium tracking-[0.2em] block mb-3">ORGANIZATION</span>
            <div className="space-y-2">
              {[
                { label: "About OM", to: "/about" },
                { label: "Leadership", to: "/about" },
                { label: "Financial Reports", to: "/about" },
                { label: "Governance", to: "/about" },
                { label: "Press", to: "/about" },
                { label: "Brand Identity", to: "/brand" },
                { label: "Admin Console", to: "/admin" },
              ].map((item) => (
                item.to ? (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block text-[11px] font-mono text-signal-white/60 hover:text-ignition transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[11px] font-mono text-signal-white/60 hover:text-ignition transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <span className="text-[9px] font-mono text-titanium tracking-[0.2em] block mb-3">LEGAL</span>
            <div className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Whistleblower"].map((item) => (
                <a
                  key={item}
                  href="https://om.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[11px] font-mono text-signal-white/60 hover:text-ignition transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <span className="text-[9px] font-mono text-titanium tracking-[0.2em] block mb-3">CHANNELS</span>
            <div className="space-y-2">
              {[
                { label: "X / Twitter", url: "https://x.com/OMInternational" },
                { label: "Instagram", url: "https://instagram.com/ominternational" },
                { label: "YouTube", url: "https://youtube.com/@OMInternational" },
                { label: "LinkedIn", url: "https://linkedin.com/company/om-international" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[11px] font-mono text-signal-white/60 hover:text-ignition transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-4 border-t border-titanium/10 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-[9px] font-mono text-titanium/40">
            © {new Date().getFullYear()} OPERATION MOBILIZATION INTERNATIONAL. ALL RIGHTS RESERVED.
          </span>
          <span className="text-[9px] font-mono text-titanium/30">
            EST. 1957 // STATUS: ON THE FIELD // 118 COUNTRIES
          </span>
        </div>
      </div>
    </footer>
  );
}