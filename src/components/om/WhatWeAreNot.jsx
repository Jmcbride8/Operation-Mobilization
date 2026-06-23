import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";
import { X, Check } from "lucide-react";

const CONTRASTS = [
  {
    not: "A CHARITY",
    is: "A LIVING MOVEMENT",
    desc: "Charities write checks. We send people. Men and women who move into the communities they serve — for years, not weeks.",
    imageKey: "identity.charity",
  },
  {
    not: "AN NGO",
    is: "A MISSIONARY MOVEMENT",
    desc: "NGOs optimize for metrics and grants. We optimize for transformed lives and surrendered obedience. The mission is spiritual, not bureaucratic.",
    imageKey: "identity.ngo",
  },
  {
    not: "DISASTER TOURISTS",
    is: "LONG-TERM SPECIALISTS",
    desc: "We don't parachute in for a photo op and leave. Our average deployment is 18 months. We build, we train, we stay until the work is done.",
    imageKey: "identity.tourists",
  },
  {
    not: "A CORPORATION",
    is: "A CALLED COMMUNITY",
    desc: "We aren't here to maximize ROI. We're here because God said go. Every specialist is deployed by calling, not hired by salary.",
    imageKey: "identity.corporation",
  },
  {
    not: "PASSIVE DONORS",
    is: "ACTIVE DEPLOYERS",
    desc: "You don't 'give to the needy.' You resource a global operations network that transforms regions from the inside out.",
    imageKey: "identity.donors",
  },
  {
    not: "SOCIAL WORK",
    is: "CHANGED HEARTS",
    desc: "We don't just meet physical needs. We share the Gospel that transforms a person from the inside out. New hearts, new lives, new eternities.",
    imageKey: "identity.trained",
  },
];

export default function WhatWeAreNot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { getImage } = useSiteImages();

  return (
    <section id="identity" ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_02</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <ScrambleText
              as="h2"
              text="WHAT WE ARE NOT."
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
            />
            <ScrambleText
              as="h2"
              text="WHAT WE ARE."
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
              delay={300}
            />
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              There's a difference between feeling sorry for the world and
              being sent into it. Most organizations do the first. We do the second.
              Here's the line — drawn sharp.
            </p>
          </div>
        </div>

        {/* Contrasts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/15">
          {CONTRASTS.map((item, i) => (
            <motion.div
              key={item.not}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-obsidian group hover:bg-signal-white/[0.02] transition-colors overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={getImage(item.imageKey)}
                  alt={item.is}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:grayscale transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />
                <span className="absolute top-2 right-2 text-[9px] font-mono text-titanium/40">[ {String(i + 1).padStart(2, "0")} ]</span>
              </div>

              <div className="p-5 space-y-3">
              {/* What we are NOT */}
              <div className="flex items-start gap-2.5">
                <X size={16} className="text-red-500/70 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] font-mono text-titanium tracking-wider block">NOT</span>
                  <span className="font-heading font-bold text-sm text-titanium line-through decoration-titanium/40 uppercase tracking-[0.02em]">
                    {item.not}
                  </span>
                </div>
              </div>

              {/* Divider with arrow */}
              <div className="flex items-center gap-2 py-1">
                <div className="w-full h-px bg-titanium/20" />
                <span className="text-[9px] font-mono text-ignition">↓</span>
                <div className="w-full h-px bg-titanium/20" />
              </div>

              {/* What we ARE */}
              <div className="flex items-start gap-2.5">
                <Check size={16} className="text-ignition flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[9px] font-mono text-ignition tracking-wider block">BUT</span>
                  <span className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em]">
                    {item.is}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[11px] font-mono text-signal-white/50 leading-relaxed pt-1">
                {item.desc}
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}