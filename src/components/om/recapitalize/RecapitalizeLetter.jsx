import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

export default function RecapitalizeLetter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[900px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">A LETTER TO LEADERSHIP</span>
        </div>
        <ScrambleText
          as="h2"
          text="TO THE CEO & BOARD."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
            Much has been improved. The shoots are sprouting. Morale is better — but far from back.
            The organizational damage from the prior administrations is still evident in every hallway,
            every system, every silence where institutional memory used to live.
          </p>
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
            New management. New board. That is the thrust. So own the past — the failure, the drift,
            the erosion. Name it. Then leave it. This is a call to a clear OM 2.0: rekindle the embers,
            restore the fire, and build something that honors the sacrifice of the giants who came before.
          </p>
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
            This is an invitation to turn the page hard. To leverage the organizational and national moment
            of rebirth to create an OM reborn — a new story to inspire the team, and a clear call for donors
            to join and rearm the force.
          </p>
          <div className="border-l-2 border-ignition pl-6 py-2 my-8">
            <p className="text-base md:text-lg font-heading font-bold text-signal-white leading-relaxed">
              The world doesn't need another cautious, declining mission agency.
              It needs the fire back. The recipe is known. The moment is now.
              The only question is whether leadership will seize it — or let it pass.
            </p>
          </div>
          <p className="text-xs font-mono text-titanium/60 tracking-[0.1em] pt-4">
            — FOUR DIMENSIONS FOLLOW. EACH IS A FRONT. EACH DEMANDS A DECISION.
          </p>
        </motion.div>
      </div>
    </section>
  );
}