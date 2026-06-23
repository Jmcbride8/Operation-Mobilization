import React from "react";
import ScrambleText from "@/components/om/ScrambleText";
import CounterDisplay from "@/components/om/CounterDisplay";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function AboutHero() {
  const { getImage } = useSiteImages();
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-14">
      <div className="absolute inset-0">
        <img src={getImage("about.hero")} alt="OM field workers" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-transparent to-obsidian/60" />
      </div>
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 py-20 w-full">
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">EST. 1957</span>
          </div>
          <ScrambleText
            as="h1"
            text="ABOUT OM"
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-lg leading-relaxed">
            A global movement of ordinary people, sent to extraordinary places.
            For nearly seven decades, we've taken the love of Jesus to the ends
            of the earth — one community at a time.
          </p>
          <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
            <CounterDisplay target={5800} label="On the Field" />
            <CounterDisplay target={118} label="Countries" duration={1500} />
            <CounterDisplay target={67} label="Years" duration={1200} />
          </div>
        </div>
      </div>
    </section>
  );
}