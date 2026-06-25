import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

export default function LoveGoesHard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative min-h-[115vh] flex items-center overflow-hidden border-t border-titanium/10">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a39d712e094663f23e0cf53/2aa6a269b_image.png"
          alt="Christ on the Cross"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/95 via-obsidian/60 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 w-full py-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE ULTIMATE DEPLOYMENT</span>
          </div>
          <ScrambleText
            as="h2"
            text="LOVE GOES HARD."
            className="font-heading font-black text-[46px] md:text-[80px] lg:text-[100px] text-signal-white tracking-[-0.02em] uppercase leading-[0.95]"
          />
        </motion.div>
      </div>
    </section>
  );
}