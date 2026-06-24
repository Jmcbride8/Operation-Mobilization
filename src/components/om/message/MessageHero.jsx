import React from "react";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function MessageHero() {
  const { getImage } = useSiteImages();
  const heroImage = getImage("message.hero");

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden border-b border-titanium/10">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Illuminated Bible" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/70 dark:from-black/30 dark:via-black/20 dark:to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/30 dark:from-black/60 dark:via-transparent dark:to-black/30" />
      </div>
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-32">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE GOSPEL</span>
          <div className="w-8 h-px bg-ignition" />
        </div>
        <ScrambleText
          as="h1"
          text="THE MESSAGE"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
        />
        <p className="mt-8 text-xs md:text-sm font-mono text-signal-white/70 max-w-xl mx-auto leading-relaxed">
          What we believe. Why it matters. The faith that sends us
          to the ends of the earth.
        </p>
      </div>
    </section>
  );
}