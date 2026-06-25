import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "../ScrambleText";

export default function BrandHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden border-b border-titanium/10">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 py-24 w-full">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">BRAND_IDENTITY_SYSTEM // V2.0</span>
        </div>

        <ScrambleText
          as="h1"
          text="VISUAL MISSION"
          className="font-heading font-black text-4xl md:text-7xl lg:text-8xl text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
        />
        <ScrambleText
          as="h1"
          text="STANDARDS."
          className="font-heading font-black text-4xl md:text-7xl lg:text-8xl text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
          delay={300}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <p className="lg:col-span-6 text-sm font-mono text-titanium leading-relaxed">
            Every pixel carries the mission. This system defines the visual language of
            Operation Mobilization — the colors, type, marks, and voice that make our
            communications unmistakable. Built for clarity at speed. Built for the field.
          </p>
          <div className="lg:col-span-3 lg:col-start-9 space-y-2">
            {[
              ["VERSION", "2.0.0"],
              ["ISSUED", "2026.06.25"],
              ["STATUS", "ACTIVE"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-b border-titanium/10 pb-1">
                <span className="text-[9px] font-mono text-titanium tracking-wider">{k}</span>
                <span className="text-[10px] font-mono text-signal-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}