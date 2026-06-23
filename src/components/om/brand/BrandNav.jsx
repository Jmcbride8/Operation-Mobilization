import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  { label: "Logo", href: "#logo" },
  { label: "Color", href: "#color" },
  { label: "Type", href: "#type" },
  { label: "Voice", href: "#voice" },
  { label: "Principles", href: "#principles" },
];

export default function BrandNav() {
  const [utc, setUtc] = useState("");

  useEffect(() => {
    const update = () => setUtc(new Date().toISOString().replace("T", " ").slice(11, 19) + " UTC");
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-titanium/20 bg-obsidian/95 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-2 h-2 bg-ignition" />
            <span className="font-heading font-black text-xs tracking-[0.2em] text-signal-white group-hover:text-ignition transition-colors">
              OM<span className="text-ignition">.</span>BRAND
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {SECTIONS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="px-3 py-1.5 text-[10px] font-mono tracking-[0.15em] text-titanium hover:text-signal-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-[9px] font-mono text-titanium/50 tracking-wider">{utc}</span>
          <Link
            to="/"
            className="px-4 py-1.5 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
          >
            ← BACK
          </Link>
        </div>
      </div>
    </nav>
  );
}