import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function TurnaroundCTA() {
  return (
    <section className="py-32 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ignition/5 to-transparent" />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE CALL</span>
          <div className="w-8 h-px bg-ignition" />
        </div>
        <ScrambleText
          as="h2"
          text="JOIN US. ARM US."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-8"
        />
        <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-2xl mx-auto mb-12">
          The momentum is real. The people are in place. The vision is clear.
          What remains is the capital to execute. Turn this momentum into a movement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:recapitalize@om.org?subject=The Second Act — Investment Inquiry"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ignition text-white font-heading font-bold text-xs tracking-[0.2em] hover:bg-ignition/90 transition-colors"
          >
            REQUEST THE FULL BRIEF
          </a>
          <a
            href="/give"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-titanium/30 text-signal-white font-heading font-bold text-xs tracking-[0.2em] hover:border-ignition transition-colors"
          >
            GIVE NOW
          </a>
        </div>
        <p className="mt-16 text-[9px] font-mono text-titanium/40 tracking-[0.2em]">
          OPERATION MOBILIZATION // EST. 1957 // THE SECOND ACT BEGINS
        </p>
      </div>
    </section>
  );
}