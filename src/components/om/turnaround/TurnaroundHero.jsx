import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function TurnaroundHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1502790671504-542ad42d5189?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50" />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">CONFIDENTIAL — FOR PARTNERS ONLY</span>
          </div>
          <ScrambleText
            as="h1"
            text="THE SECOND ACT."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase leading-[0.95]"
          />
          <p className="mt-8 text-sm md:text-base font-mono text-titanium leading-relaxed max-w-2xl">
            Operation Mobilization survived the darkest chapter in its 68-year history.
            The mission force was gutted. The treasury was drained. The soul was under siege.
            Now the tide has turned — and we are not merely recovering. We are surging back.
            This is the pitch for the second act.
          </p>
        </div>
      </div>
    </section>
  );
}