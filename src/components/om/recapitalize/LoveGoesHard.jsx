import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

export default function LoveGoesHard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden border-t border-titanium/10">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a39d712e094663f23e0cf53/6258de976_image.png"
          alt="Christ on the Cross"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian/80" />
        <div className="absolute inset-0 grid-lines opacity-10" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE ULTIMATE DEPLOYMENT</span>
            <div className="w-8 h-px bg-ignition" />
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