import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";

export default function DesignPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="principles" ref={ref} className="py-24 border-b border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_05</span>
        </div>
        <ScrambleText as="h2" text="THE GRID." className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase" />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          Structural rules. The invisible system that holds everything together.
          Sharp edges. Thin borders. Relentless consistency.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
          {/* Grid system */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">12-COLUMN GRID</span>
            <div className="grid grid-cols-12 gap-1 h-24">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-titanium/20 hover:bg-ignition/40 transition-colors" />
              ))}
            </div>
            <div className="mt-4 space-y-1 text-[11px] font-mono text-titanium">
              <div className="flex justify-between"><span>MAX WIDTH</span><span className="text-signal-white">1440px</span></div>
              <div className="flex justify-between"><span>GUTTER</span><span className="text-signal-white">16px / 32px</span></div>
              <div className="flex justify-between"><span>MARGIN</span><span className="text-signal-white">16px (mob) / 32px (desk)</span></div>
            </div>
          </motion.div>

          {/* Borders & radius */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">BORDERS & RADIUS</span>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square border border-titanium/30 flex items-center justify-center">
                <span className="text-[9px] font-mono text-titanium">1px</span>
              </div>
              <div className="aspect-square border-2 border-titanium/40 flex items-center justify-center">
                <span className="text-[9px] font-mono text-titanium">2px</span>
              </div>
              <div className="aspect-square border border-ignition flex items-center justify-center">
                <span className="text-[9px] font-mono text-ignition">ACCENT</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-titanium leading-relaxed mt-4">
              Zero radius. Always. Every element is sharp. Borders are 1px titanium at 20% opacity.
              Hover states brighten to 40%. Ignition borders signal active/selected states.
            </p>
          </motion.div>

          {/* Section markers */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">SECTION MARKERS</span>
            <div className="space-y-3">
              {[
                { num: "SECTION_01", label: "THE MARK" },
                { num: "SECTION_02", label: "THE PALETTE" },
                { num: "SECTION_03", label: "THE TYPE" },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-3">
                  <div className="w-8 h-px bg-ignition" />
                  <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">{s.num}</span>
                  <span className="text-[11px] font-mono text-titanium">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-mono text-titanium leading-relaxed mt-4">
              Every section opens with an ignition line, a numbered marker, and a scramble-text heading. Consistent. Instantly recognizable.
            </p>
          </motion.div>

          {/* Motion & interaction */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">MOTION</span>
            <div className="space-y-2">
              {[
                ["ENTRANCE", "Fade + slide up. 0.4s ease-out."],
                ["STAGGER", "100ms delay per sibling."],
                ["SCRAMBLE", "Text decodes on viewport entry."],
                ["HOVER", "Image desaturates to B&W."],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-titanium/10 pb-1">
                  <span className="text-[10px] font-mono text-ignition tracking-wider">{k}</span>
                  <span className="text-[11px] font-mono text-titanium">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Iconography */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="border border-titanium/20 p-6 mt-4">
          <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">ICONOGRAPHY</span>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { label: "FIELD", shape: <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
              { label: "DEPLOY", shape: <path d="M12 3 L21 20 L12 16 L3 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
              { label: "SUPPLY", shape: <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
              { label: "REACH", shape: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" /><line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1" /><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1" /></> },
              { label: "STATUS", shape: <circle cx="12" cy="12" r="4" fill="currentColor" /> },
              { label: "VECTOR", shape: <path d="M5 19 L19 5 M19 5 L13 5 M19 5 L19 11" stroke="currentColor" strokeWidth="1.5" fill="none" /> },
            ].map((icon) => (
              <div key={icon.label} className="border border-titanium/10 p-4 flex flex-col items-center gap-3 hover:border-ignition/40 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-signal-white">{icon.shape}</svg>
                <span className="text-[9px] font-mono text-titanium tracking-wider">{icon.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] font-mono text-titanium leading-relaxed mt-4">
            Icons are geometric. 1.5px stroke. No fills (except status dots). Drawn on a 24px grid.
            Minimal. Functional. No decorative flourish.
          </p>
        </motion.div>
      </div>
    </section>
  );
}