import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";
import { Check, X } from "lucide-react";

const MONOGRAM = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/5596cf044_ChatGPTImageJun22202609_30_33PM.png";
const EMBLEM = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/30d7cd0ae_ChatGPTImageJun22202609_26_10PM.png";
const FULL_WORDMARK = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/d41b9c24f_ChatGPTImageJun22202610_12_32PM.png";
const WALL_DISPLAY = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/0d0e3fc52_ChatGPTImageJun23202612_06_25PM.png";



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
          Three assets. One identity. The monogram, the full wordmark, and the brand
          environment. Every deployment carries the mission. Light and dark mode supported.
        </p>

        {/* Brand environment showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mt-12 border border-titanium/20 overflow-hidden"
        >
          <div className="relative aspect-[16/9] bg-obsidian">
            <img src={WALL_DISPLAY} alt="OM Brand Environment — Wall of Crosses" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex items-center justify-between border-t border-titanium/20">
            <span className="text-[10px] font-mono text-ignition tracking-[0.2em]">BRAND ENVIRONMENT</span>
            <span className="text-[9px] font-mono text-titanium/50">Wall of Crosses · John 15:13 · OM Flags · Charter Display</span>
          </div>
        </motion.div>

        {/* Tagline & verse callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-ignition/40 bg-ignition/[0.04] p-6">
            <span className="text-[9px] font-mono text-ignition tracking-[0.2em] block mb-3">TAGLINE</span>
            <p className="font-heading font-black text-2xl text-signal-white tracking-[0.02em]">CHRIST'S LOVE IN MOTION.</p>
            <p className="text-[10px] font-mono text-titanium mt-2">Accompanies the full wordmark. Always paired with "EST. 1957."</p>
          </div>
          <div className="border border-titanium/20 p-6">
            <span className="text-[9px] font-mono text-ignition tracking-[0.2em] block mb-3">ANCHOR VERSE</span>
            <p className="font-mono text-sm text-signal-white/90 leading-relaxed italic">
              "Greater love has no one than this: to lay down one's life for one's friends."
            </p>
            <span className="text-[10px] font-mono text-ignition tracking-[0.2em] block mt-3">— JOHN 15:13</span>
          </div>
        </div>

        {/* Dark Mode Logos */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-ignition">DARK MODE — PRIMARY</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-titanium/15">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="bg-obsidian p-12 flex flex-col items-center justify-center min-h-[280px]">
              <img src={MONOGRAM} alt="OM Monogram — Dark" className="w-28 h-28 object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-6">MONOGRAM</span>
              <span className="text-[9px] font-mono text-titanium/50 mt-1">Brushed · Red on Obsidian</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }} className="bg-obsidian p-12 flex flex-col items-center justify-center min-h-[280px]">
              <img src={EMBLEM} alt="OM Emblem — Dark" className="w-28 h-28 object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-6">EMBLEM</span>
              <span className="text-[9px] font-mono text-titanium/50 mt-1">Intertwined · Social / Favicon</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="bg-obsidian p-12 flex flex-col items-center justify-center min-h-[280px]">
              <img src={FULL_WORDMARK} alt="OM Full Wordmark — Dark" className="max-w-[200px] object-contain" style={{ mixBlendMode: "screen" }} />
              <span className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-6">FULL WORDMARK</span>
              <span className="text-[9px] font-mono text-titanium/50 mt-1">Monogram + Name + Tagline + Est.</span>
            </motion.div>
          </div>
        </div>

        {/* Light Mode Logos */}
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-ignition">LIGHT MODE — INVERTED</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-titanium/15">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="bg-signal-white p-12 flex flex-col items-center justify-center min-h-[280px]">
              <img src={MONOGRAM} alt="OM Monogram — Light" className="w-28 h-28 object-contain" />
              <span className="text-[10px] font-mono text-obsidian/60 tracking-[0.2em] mt-6">MONOGRAM</span>
              <span className="text-[9px] font-mono text-obsidian/40 mt-1">Red on Signal White</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="bg-signal-white p-12 flex flex-col items-center justify-center min-h-[280px]">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-ignition flex items-center justify-center">
                <img src="https://media.base44.com/images/public/6a39d712e094663f23e0cf53/c7ecab672_ChatGPTImageJun22202609_30_33PM.png" alt="OM Emblem — Light" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-mono text-obsidian/60 tracking-[0.2em] mt-6">EMBLEM</span>
              <span className="text-[9px] font-mono text-obsidian/40 mt-1">Red on Signal White</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="bg-signal-white p-12 flex flex-col items-center justify-center min-h-[280px]">
              <img src="https://media.base44.com/images/public/6a39d712e094663f23e0cf53/580f41e36_ChatGPTImageJun25202610_45_57AM.png" alt="OM Full Wordmark — Light" className="max-w-[200px] object-contain" />
              <span className="text-[10px] font-mono text-obsidian/60 tracking-[0.2em] mt-6">FULL WORDMARK</span>
              <span className="text-[9px] font-mono text-obsidian/40 mt-1">Black + Red on Signal White</span>
            </motion.div>
          </div>
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
              <p className="text-[11px] font-mono text-titanium">Use on obsidian or signal white. Keep the dot ignition red in both modes. Light/dark mode supported.</p>
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
              <p className="text-[11px] font-mono text-titanium">Never recolor the dot. Never drop below contrast minimums. Never stretch or distort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}