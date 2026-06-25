import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function DimensionInnovate() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden bg-signal-white/[0.01]">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DIMENSION 04</span>
        </div>
        <ScrambleText
          as="h2"
          text="GO ON THE OFFENSE."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              Go National. 90% of the US was Christian. Today, 60%. The mission field frontlines
              are no longer over there — they are here. The same capabilities OM built for the hardest
              places on earth are exactly what the American church needs now.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Leverage the wedge pilot program Dave McBride pioneered. Replicate. Innovate.
              The template is proven. The need is urgent. The opportunity is national.
            </p>
          </div>
          <div>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              Charlie Kirk created a movement. Courageous, edgy, confrontational heroes like
              Jordan Peterson, Michael Knowles, Elon — and yes, even Trump — showed that the
              American soul is vigorous and alive.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Shame on us if we aren't. The church has the greatest message, the greatest mandate,
              and the greatest force on earth. If culture warriors can mobilize millions for politics,
              what should missionaries be able to do for the kingdom of God?
            </p>
          </div>
        </div>

        <div className="border-l-2 border-ignition pl-6 md:pl-8 py-4 mb-12">
          <p className="text-2xl md:text-4xl font-heading font-black text-signal-white leading-tight tracking-[-0.02em]">
            GOD WENT HARD.
          </p>
          <p className="text-lg md:text-2xl font-heading font-bold text-ignition mt-2 tracking-[-0.01em]">
            So should we.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-titanium/20">
          {[
            { stat: "90%", label: "US CHRISTIAN (CIRCA 1990)", sub: "The sending nation" },
            { stat: "60%", label: "US CHRISTIAN (TODAY)", sub: "The mission field" },
            { stat: "30PT", label: "DECLINE IN ONE GENERATION", sub: "The frontline moved home" },
            { stat: "1", label: "PROVEN PILOT PROGRAM", sub: "Dave McBride's template. Replicate." },
          ].map((item, i) => (
            <div key={i} className="bg-obsidian p-6 text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-ignition tracking-[-0.02em] mb-2">
                {item.stat}
              </div>
              <div className="text-[9px] font-mono text-signal-white tracking-[0.2em] mb-1">{item.label}</div>
              <div className="text-[9px] font-mono text-titanium">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}