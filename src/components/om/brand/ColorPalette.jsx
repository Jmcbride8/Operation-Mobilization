import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";

const COLORS = [
  { name: "OBSIDIAN", hex: "#080808", hsl: "0 0% 3.1%", role: "Primary background", usage: "All base surfaces, sections, cards" },
  { name: "SIGNAL WHITE", hex: "#F2F2F2", hsl: "0 0% 94.9%", role: "Primary text", usage: "Headlines, body, high-contrast UI" },
  { name: "IGNITION", hex: "#B33939", hsl: "0 52% 46%", role: "Primary accent", usage: "CTAs, key data, section markers" },
  { name: "TITANIUM", hex: "#404040", hsl: "0 0% 25%", role: "Secondary text", usage: "Labels, borders, metadata, dividers" },
  { name: "CARD", hex: "#0D0D0D", hsl: "0 0% 5%", role: "Elevated surface", usage: "Cards, popovers, inset panels" },
  { name: "BORDER", hex: "#242424", hsl: "0 0% 14%", role: "Divider", usage: "All borders, input outlines, separators" },
];

function ColorSwatch({ color, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const isLight = color.name === "SIGNAL WHITE";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-titanium/20"
    >
      <div className="h-40 flex items-end p-4" style={{ backgroundColor: color.hex }}>
        <span className={`text-[9px] font-mono tracking-wider ${isLight ? "text-obsidian" : "text-signal-white/60"}`}>
          {color.hex}
        </span>
      </div>
      <div className="p-4 space-y-1.5">
        <span className="font-heading font-bold text-sm text-signal-white tracking-[0.05em]">{color.name}</span>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-titanium">{color.hex}</span>
          <span className="text-[9px] font-mono text-titanium/50">HSL {color.hsl}</span>
        </div>
        <div className="pt-2 border-t border-titanium/10">
          <span className="text-[9px] font-mono text-ignition tracking-wider block">ROLE</span>
          <span className="text-[11px] font-mono text-signal-white/80 block mt-0.5">{color.role}</span>
          <span className="text-[10px] font-mono text-titanium block mt-1.5 leading-relaxed">{color.usage}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ColorPalette() {
  return (
    <section id="color" className="py-24 border-b border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_02</span>
        </div>
        <ScrambleText as="h2" text="THE PALETTE." className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase" />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          Six colors. No gradients. No decoration. Obsidian for depth, signal white for clarity,
          ignition for action. Everything else is structure.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {COLORS.map((color, i) => (
            <ColorSwatch key={color.name} color={color} index={i} />
          ))}
        </div>

        {/* Hierarchy */}
        <div className="mt-8 border border-titanium/20 p-6">
          <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">CONTRAST HIERARCHY</span>
          <div className="space-y-3">
            {[
              { bg: "#080808", fg: "#F2F2F2", label: "PRIMARY — Obsidian / Signal White", ratio: "16:1" },
              { bg: "#080808", fg: "#B33939", label: "ACCENT — Obsidian / Ignition", ratio: "4.0:1" },
              { bg: "#080808", fg: "#404040", label: "SUPPORT — Obsidian / Titanium", ratio: "3.2:1" },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-32 h-10 flex items-center px-3" style={{ backgroundColor: row.bg }}>
                  <span className="text-[10px] font-mono tracking-wider" style={{ color: row.fg }}>Aa 0123</span>
                </div>
                <span className="text-[11px] font-mono text-signal-white/70 flex-1">{row.label}</span>
                <span className="text-[10px] font-mono text-titanium">{row.ratio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}