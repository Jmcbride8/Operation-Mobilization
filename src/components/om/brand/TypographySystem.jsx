import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";

function TypeSpecimen({ label, font, className, sample, meta, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-titanium/20 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-[9px] font-mono text-ignition tracking-[0.2em]">{label}</span>
        <span className="text-[9px] font-mono text-titanium/50">{meta}</span>
      </div>
      <p className={`${font} ${className} text-signal-white`}>{sample}</p>
    </motion.div>
  );
}

export default function TypographySystem() {
  return (
    <section id="type" className="py-24 border-b border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_03</span>
        </div>
        <ScrambleText as="h2" text="THE TYPE." className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase" />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          Two faces. Inter Tight for impact. JetBrains Mono for precision.
          Headlines hit hard. Data reads clean. No exceptions.
        </p>

        {/* Font specimens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12">
          <div className="border border-titanium/20 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-heading font-black text-lg text-signal-white tracking-[0.05em]">Inter Tight</span>
              <span className="text-[9px] font-mono text-titanium tracking-wider">HEADING / DISPLAY</span>
            </div>
            <p className="font-heading font-black text-5xl text-signal-white tracking-[-0.03em] uppercase leading-none">Aa</p>
            <div className="mt-6 space-y-2">
              {["Black 900", "Bold 700", "Medium 500"].map((w) => (
                <div key={w} className="flex items-center justify-between border-b border-titanium/10 pb-1">
                  <span className={`font-heading text-signal-white ${w.includes("Black") ? "font-black" : w.includes("Bold") ? "font-bold" : "font-medium"} text-sm`}>The call is open.</span>
                  <span className="text-[9px] font-mono text-titanium">{w}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-mono text-titanium/50 mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
          </div>

          <div className="border border-titanium/20 p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono font-bold text-lg text-signal-white tracking-[0.05em]">JetBrains Mono</span>
              <span className="text-[9px] font-mono text-titanium tracking-wider">BODY / MONO</span>
            </div>
            <p className="font-mono text-5xl text-signal-white leading-none">Aa</p>
            <div className="mt-6 space-y-2">
              {["Bold 700", "Regular 400"].map((w) => (
                <div key={w} className="flex items-center justify-between border-b border-titanium/10 pb-1">
                  <span className={`font-mono text-signal-white ${w.includes("Bold") ? "font-bold" : ""} text-sm`}>REACH: 340K // STATUS: ACTIVE</span>
                  <span className="text-[9px] font-mono text-titanium">{w}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-mono text-titanium/50 mt-4">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</p>
          </div>
        </div>

        {/* Type scale */}
        <div className="mt-4 border border-titanium/20 p-6">
          <span className="text-[9px] font-mono text-ignition tracking-wider block mb-6">TYPE SCALE</span>
          <div className="space-y-4">
            {[
              { size: "7xl / 72px", label: "DISPLAY", className: "font-heading font-black text-7xl", text: "GO HARD.", tracking: "tracking-[-0.03em]" },
              { size: "5xl / 48px", label: "H2", className: "font-heading font-black text-5xl", text: "ON THE FIELD", tracking: "tracking-[-0.02em]" },
              { size: "3xl / 30px", label: "H3", className: "font-heading font-bold text-3xl", text: "FIELD REPORTS", tracking: "tracking-[-0.02em]" },
              { size: "lg / 18px", label: "SUBHEAD", className: "font-heading font-medium text-lg", text: "Workers who build, train, and lay down their lives.", tracking: "" },
              { size: "sm / 14px", label: "BODY", className: "font-mono text-sm", text: "Real stories, measured outcomes, no embellishment.", tracking: "" },
              { size: "xs / 12px", label: "META", className: "font-mono text-xs", text: "REPORT-2026-047 // 2026.06.18", tracking: "tracking-wider" },
              { size: "12px", label: "LABEL", className: "font-mono text-[12px]", text: "SECTION_01", tracking: "tracking-[0.3em]" },
            ].map((row, i) => (
              <TypeSpecimen key={row.label} label={row.label} font={row.className.split(" ")[0]} className={`${row.className} ${row.tracking} uppercase`} sample={row.text} meta={row.size} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}