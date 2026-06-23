import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";
import { Check, X } from "lucide-react";

function OMMark({ size = 48, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="24" y1="2" x2="24" y2="46" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      <circle cx="24" cy="24" r="3" fill="#B33939" />
    </svg>
  );
}

export default function LogoSystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="logo" ref={ref} className="py-24 border-b border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_01</span>
        </div>
        <ScrambleText as="h2" text="THE MARK." className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase" />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          Two elements. One identity. The deployment mark and the wordmark.
          Never separate the dot from the word.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-titanium/15 mt-12">
          {/* Mark */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="bg-obsidian p-12 flex flex-col items-center justify-center min-h-[280px]">
            <OMMark size={96} className="text-signal-white" />
            <span className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-6">DEPLOYMENT MARK</span>
            <span className="text-[9px] font-mono text-titanium/50 mt-1">Globe + crosshair + ignition point</span>
          </motion.div>

          {/* Wordmark */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="bg-obsidian p-12 flex flex-col items-center justify-center min-h-[280px]">
            <span className="font-heading font-black text-xl md:text-2xl tracking-[0.15em] text-signal-white text-center">
              OPERATION<span className="text-ignition">.</span>MOBILIZATION
            </span>
            <span className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-6">WORDMARK</span>
            <span className="text-[9px] font-mono text-titanium/50 mt-1">Inter Tight Black · 0.15em tracking</span>
          </motion.div>
        </div>

        {/* Clear space & sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">CLEAR SPACE</span>
            <div className="relative inline-block">
              <div className="border border-dashed border-titanium/30 p-6">
                <span className="font-heading font-black text-sm tracking-[0.15em] text-signal-white">OPERATION<span className="text-ignition">.</span>MOBILIZATION</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-titanium leading-relaxed mt-4">
              Minimum clear space equals the height of the ignition dot on all sides.
              Nothing enters this perimeter.
            </p>
          </div>
          <div className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-wider block mb-4">MINIMUM SIZE</span>
            <div className="flex items-end gap-6">
              <div className="text-center">
                <span className="font-heading font-black text-[10px] tracking-[0.15em] text-signal-white block">OPERATION<span className="text-ignition">.</span>MOBILIZATION</span>
                <span className="text-[9px] font-mono text-titanium mt-2 block">120px / DIGITAL</span>
              </div>
            </div>
            <p className="text-[11px] font-mono text-titanium leading-relaxed mt-4">
              Never reproduce the wordmark below 120px wide on screen. The mark never below 24px.
            </p>
          </div>
        </div>

        {/* Do / Don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-green-500/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Check size={14} className="text-green-500" />
              <span className="text-[9px] font-mono text-green-500 tracking-wider">DO</span>
            </div>
            <div className="space-y-3">
              <div className="bg-obsidian p-4 border border-titanium/10">
                <span className="font-heading font-black text-sm tracking-[0.15em] text-signal-white">OPERATION<span className="text-ignition">.</span>MOBILIZATION</span>
              </div>
              <div className="bg-signal-white p-4">
                <span className="font-heading font-black text-sm tracking-[0.15em] text-obsidian">OPERATION<span className="text-ignition">.</span>MOBILIZATION</span>
              </div>
              <p className="text-[11px] font-mono text-titanium">Use on obsidian or signal white. Keep the dot ignition orange always.</p>
            </div>
          </div>
          <div className="border border-red-500/20 p-6">
            <div className="flex items-center gap-2 mb-4">
              <X size={14} className="text-red-500" />
              <span className="text-[9px] font-mono text-red-500 tracking-wider">DON'T</span>
            </div>
            <div className="space-y-3">
              <div className="bg-obsidian p-4 border border-titanium/10">
                <span className="font-heading font-black text-sm tracking-[0.15em] text-titanium">OPERATION.MOBILIZATION</span>
              </div>
              <div className="bg-obsidian p-4 border border-titanium/10">
                <span className="font-heading font-black text-sm tracking-[0.15em] text-signal-white">OPERATION<span className="text-blue-400">.</span>MOBILIZATION</span>
              </div>
              <p className="text-[11px] font-mono text-titanium">Never recolor the dot. Never drop below signal-white contrast. Never stretch or distort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}