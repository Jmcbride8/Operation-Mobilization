import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function SacrificeStatement() {
  const { getImage } = useSiteImages();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sacrifice" ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={getImage("sacrifice.background")} alt="Cross on a hilltop at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-obsidian/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/60 to-obsidian" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE DISTINCTION</span>
          <div className="w-8 h-px bg-ignition" />
        </motion.div>

        <ScrambleText
          as="h2"
          text="SOME KILL"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.95]"
          delay={200}
        />
        <ScrambleText
          as="h2"
          text="FOR THEIR FAITH."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-titanium tracking-[-0.03em] uppercase leading-[0.95]"
          delay={400}
        />
        <ScrambleText
          as="h2"
          text="CHRISTIANS ARE CALLED"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.95] mt-4"
          delay={600}
        />
        <ScrambleText
          as="h2"
          text="TO DIE FOR OURS."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.95]"
          delay={800}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <p className="text-xs md:text-sm font-mono text-signal-white/70 leading-relaxed">
            We are called to die to our sin. To die to ourselves. To take up
            a cross and follow the One who went first. <span className="text-signal-white">We do not come
            to rule. We come to serve — and to lay down our lives for the ones
            He loves.</span>
          </p>
        </motion.div>

        {/* Bible verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 border-l-2 border-r-2 border-ignition/60 px-6 md:px-12 py-6 max-w-2xl mx-auto"
        >
          <p className="font-heading text-lg md:text-2xl text-signal-white italic leading-relaxed">
            "My kingdom is not of this world. If my kingdom were of this world,
            my servants would have been fighting, [...] But my kingdom is not
            from the world."
          </p>
          <span className="block mt-3 text-[10px] font-mono tracking-[0.25em] text-ignition">
            — JOHN 18:36
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-8 border-l-2 border-r-2 border-ignition/60 px-6 md:px-12 py-6 max-w-2xl mx-auto"
        >
          <p className="font-heading text-lg md:text-2xl text-signal-white italic leading-relaxed">
            "Greater love has no one than this, that someone lay down his life
            for his friends."
          </p>
          <span className="block mt-3 text-[10px] font-mono tracking-[0.25em] text-ignition">
            — JOHN 15:13
          </span>
        </motion.div>
      </div>
    </section>
  );
}