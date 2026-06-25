import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function DimensionCommitment() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden bg-signal-white/[0.01]">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              The website isn't an infomercial. It is the face of the brand. It is public.
              It is a commitment. Every section published is a promise made to the world —
              and to the team. Refine it. Deploy it. Then live up to it.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              Seize the moment to go hard and commit. Or fade into irrelevance in that cold and dreary night.
              There is no middle ground. There never was. OM spent years in the lukewarm middle —
              and it nearly killed the organization.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              The commitment is not to a website. It is to a standard. The standard says:
              we are the tip of the spear. Everything we ship — digital, physical, verbal —
              must reflect that. No exceptions. No half-measures. No safe bets.
            </p>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DIMENSION 02</span>
            </div>
            <ScrambleText
              as="h2"
              text="COMMITMENT."
              className="font-heading font-black text-[34px] md:text-[50px] lg:text-[60px] text-signal-white tracking-[-0.02em] uppercase mb-8"
            />
            <div className="border border-ignition/40 bg-ignition/[0.04] p-8">
              <div className="text-[10px] font-mono text-ignition tracking-[0.3em] mb-4">REVELATION 3:16</div>
              <p className="text-lg md:text-xl font-heading font-bold text-signal-white leading-relaxed">
                "So, because you are lukewarm —
                neither hot nor cold —
                I am about to spit you out of my mouth."
              </p>
            </div>
            <p className="text-[10px] font-mono text-titanium/60 tracking-[0.2em] mt-4 text-right">
              THE WARNING IS TO THE CHURCH. IT APPLIES TO OM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}