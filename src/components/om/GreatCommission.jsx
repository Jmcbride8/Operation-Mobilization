import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import ScrambleText from "./ScrambleText";
import ReflowCycle from "./ReflowCycle";
import { useSiteImages } from "@/hooks/useSiteImages";

export default function GreatCommission() {
  const { getImage } = useSiteImages();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="commission"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden border-y border-titanium/10"
    >
      {/* Parallax background image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={getImage("commission.background")}
          alt="The Great Commission"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/65 dark:bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/35 to-white/55 dark:from-black/80 dark:via-black/30 dark:to-black/50" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center py-24">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE MANDATE</span>
          <div className="w-8 h-px bg-ignition" />
        </motion.div>

        {/* Main headline */}
        <ScrambleText
          as="h2"
          text="MISSIONS AREN'T A CALLING."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.95]"
        />
        <ReflowCycle>
          <ScrambleText
            as="h2"
            text="IT'S A COMMAND."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.95] mt-1"
            delay={300}
          />
        </ReflowCycle>

        {/* Scripture quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="border-l-2 border-ignition pl-6 text-left">
            <p className="text-sm md:text-lg font-heading font-medium text-signal-white/90 leading-relaxed italic">
              "All authority in heaven and on earth has been given to Me. Go therefore and make
              disciples of all nations, baptizing them in the name of the Father and of the Son
              and of the Holy Spirit, teaching them to observe all that I have commanded you.
              And behold, I am with you always, to the end of the age."
            </p>
            <p className="text-[10px] md:text-xs font-mono text-ignition tracking-[0.2em] mt-4">
              — MATTHEW 28:18–20
            </p>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-[11px] font-mono text-titanium tracking-[0.15em] mt-12"
        >
          [ THE ORDER STANDS. 2000 YEARS AND COUNTING. ]
        </motion.p>
      </div>
    </section>
  );
}