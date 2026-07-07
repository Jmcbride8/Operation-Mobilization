import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

const PAIRS = [
  {
    label: "THE FRONT DOOR",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/fdbba481c_IMG_5018.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/27ef4f274_ChatGPTImageJul6202605_52_01PM.png",
    caption: "A forgotten tree in a parking island becomes a cross-shaped fountain engraved with John 15:13 — the first thing every visitor and every missionary sees.",
  },
  {
    label: "THE RECEPTION",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/03613b557_IMG_4284.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/5766bfdf0_ChatGPTImageJul6202604_36_50PM.png",
    caption: "A generic corporate desk becomes a command-center welcome — 'WELCOME TO THE FRONTLINES OF FAITH' in ignition red.",
  },
  {
    label: "THE ATRIUM",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/e117a2505_IMG_4259.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/59dbd4c39_ChatGPTImageJul6202605_18_57PM.png",
    caption: "Blank grey walls become the mission mandate — WE GO. WE LOVE. WE SERVE. — with the Wall of Crosses honoring the fallen.",
  },
  {
    label: "THE LOUNGE",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/f799d17dc_IMG_5006.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/764603a96_ChatGPTImageJul6202604_55_46PM.png",
    caption: "A forgettable waiting area becomes 'The Greatest Tradition, The Greatest Mission' — a gallery wall of the lineage, from Jesus to George Verwer. The next frame is yours.",
  },
  {
    label: "THE AUDITORIUM",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/a4a4f308e_IMG_4258.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/775cd1c6a_ChatGPTImageJul6202605_31_38PM.png",
    caption: "A cavernous, carpeted hall becomes a tactical briefing room — every gathering framed by the mission.",
  },
  {
    label: "THE DINING HALL",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/ce599d2c8_IMG_4255.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/14655b99f_ChatGPTImageJul6202605_39_26PM.png",
    caption: "An institutional cafeteria becomes a hearth — 'WELCOME HOME. REFUEL. RECHARGE. RECOMMIT.'",
  },
  {
    label: "THE STAIRWELL",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/ffedd29b9_IMG_4261.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/71663b8b5_ChatGPTImageJul6202605_24_16PM.png",
    caption: "Every transition space becomes a deployment reminder — Mark 16:15 and the global footprint, unavoidable on every walk.",
  },
  {
    label: "THE MEZZANINE",
    before: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/33a114a2d_IMG_4254.jpg",
    after: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/73b0ab627_ChatGPTImageJul6202605_22_23PM.png",
    caption: "A sparse, soulless corridor becomes a mission-anchored command corridor — the vision wall visible from every angle.",
  },
];

function ComparisonPair({ pair, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="bg-obsidian border border-titanium/20"
    >
      {/* Label bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-titanium/20">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-ignition tracking-[0.3em]">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[10px] font-mono text-signal-white tracking-[0.2em]">{pair.label}</span>
        </div>
        <ArrowRight size={14} className="text-ignition" />
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 gap-px bg-titanium/20">
        <div className="relative aspect-[4/3] overflow-hidden bg-obsidian group">
          <img
            src={pair.before}
            alt={`${pair.label} — before`}
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 bg-obsidian/90 text-[9px] font-mono tracking-[0.2em] text-titanium">BEFORE</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-obsidian">
          <img
            src={pair.after}
            alt={`${pair.label} — after`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2 py-1 bg-ignition text-[9px] font-mono tracking-[0.2em] text-white">AFTER</span>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="px-5 py-4">
        <p className="text-xs font-mono text-titanium leading-relaxed">{pair.caption}</p>
      </div>
    </motion.div>
  );
}

export default function HQRevitalizationGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">FRONT 02 — VISUAL DOSSIER</span>
        </div>
        <ScrambleText
          as="h2"
          text="THE HEARTH, REIGNITED."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />
        <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-3xl mb-16">
          The headquarters was stripped of branding, heritage, and soul — demoralizing by design.
          Below is the planned transformation: every surface reclaimed for the mission.
          This is what your capital builds. Not offices. A hearth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-titanium/20">
          {PAIRS.map((pair, i) => (
            <ComparisonPair key={pair.label} pair={pair} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-l-2 border-ignition pl-6 py-2"
        >
          <p className="text-base md:text-lg font-heading font-bold text-signal-white leading-relaxed">
            Every missionary who deploys will walk through this space first —
            <span className="text-ignition"> amped, trained, and face-to-face with the lineage they're joining.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}