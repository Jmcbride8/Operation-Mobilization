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
            The moment is here. New leadership. New board. A clean mandate. The embers of the old
            fire never fully died — they are waiting for someone to blow on them. This is that moment.
          </p>
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
            OM 2.0 is not a rebrand. It is not merely a rebirth. It is a resurgence. The mission hasn't
            changed — the hardest places, the highest cost, the greatest love. What is new is the will
            to say it loud, build it strong, and go hard. This moment — the fall, the turnaround, the
            rising — is not a liability to manage. It is the greatest asset OM has ever had.
          </p>
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
            Before this, OM had a ho-hum carry-on story. Now you have a saga. People want to participate
            in this kind of moment — not out of pity, but out of conviction. Fundraising is no longer a
            rescue appeal. It is a chance to leverage this story into a whole-of-organization push. You
            now have a story to bring donors that is compelling, urgent, and alive. If leveraged well,
            this becomes the greatest capital-raising narrative in OM's history — a story about the
            future, and a bigger, badder, awesomer OM.
          </p>
          <div className="border-l-2 border-ignition pl-6 py-2 my-8">
            <p className="text-base md:text-lg font-heading font-bold text-signal-white leading-relaxed">
              The world doesn't need another cautious, declining mission agency.
              It needs the fire back. The recipe is known. The moment is now.
              The only question is whether leadership will seize it — or let it pass.
            </p>
          </div>
          <p className="text-xs font-mono text-titanium/60 tracking-[0.1em] pt-4">
            — THREE FRONTS FOLLOW. EACH DEMANDS A DECISION.
          </p>
        </motion.div>
      </div>
    </section>
  );
}