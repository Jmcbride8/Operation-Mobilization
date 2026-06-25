import React, { useRef } from "react";
import { useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

function StatBlock({ label, value, sub, color }) {
  return (
    <div className="bg-obsidian p-6">
      <div className="text-[10px] font-mono text-titanium tracking-[0.2em] mb-2">{label}</div>
      <div className={`font-heading font-black text-3xl md:text-4xl ${color}`}>{value}</div>
      <div className="text-[10px] font-mono text-titanium/60 mt-1">{sub}</div>
    </div>
  );
}

export default function TurnaroundStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className={`py-24 border-t border-titanium/10 ${isInView ? "animate-scramble" : ""}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* The Dark Night */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">01 — THE DARK NIGHT</span>
            </div>
            <ScrambleText
              as="h2"
              text="THE FALL."
              className="font-heading font-black text-[34px] md:text-[44px] text-signal-white tracking-[-0.02em] uppercase"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              COVID struck. Then came the deeper blow — a CEO and board that sought to gut the organization from within.
              Not negligence. Intent. They drove OM to the edge of bankruptcy and watched the mission force collapse
              from 900 to 100. Branding was stripped. Heritage was erased. The headquarters was hollowed into a
              generic lobby — indistinguishable from a hotel, stripped of any vestige of the mission.
              It was demoralizing by design.
            </p>
            <div className="grid grid-cols-2 gap-px bg-titanium/20">
              <StatBlock label="MISSION FORCE" value="900 → 100" sub="Decimated in 3 years" color="text-ignition" />
              <StatBlock label="TREASURY" value="NEAR ZERO" sub="Days from insolvency" color="text-ignition" />
            </div>
          </div>
        </div>

        {/* The Turnaround */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">02 — THE RISING</span>
            </div>
            <ScrambleText
              as="h2"
              text="THE TURNAROUND."
              className="font-heading font-black text-[34px] md:text-[44px] text-signal-white tracking-[-0.02em] uppercase"
            />
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Leaders inside the organization rose up. The CEO was fired. Much of the board was removed.
              The mission force is rebounding — 250+ and climbing. Finances are recovering.
              The people are in place. But much work remains.
            </p>
            <div className="grid grid-cols-2 gap-px bg-titanium/20">
              <StatBlock label="MISSION FORCE" value="100 → 250+" sub="And accelerating" color="text-signal-white" />
              <StatBlock label="LEADERSHIP" value="RESTORED" sub="Mission-aligned team" color="text-signal-white" />
            </div>
          </div>
        </div>

        {/* The Vision */}
        <div className="border border-titanium/20 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-10" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">03 — THE VISION</span>
            </div>
            <ScrambleText
              as="h2"
              text="NOT RECOVER. RESURGE."
              className="font-heading font-black text-[34px] md:text-[44px] text-signal-white tracking-[-0.02em] uppercase mb-6"
            />
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-3xl">
              We are leveraging the dark night to radically refocus on the very courage and edge that made OM
              the tip of the spear in the missions world. With newfound resolve and clarity, we are determined
              to create an epic second act — returning to the great bones and daring do. Not a recovery.
              A resurgence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}