import React from "react";
import { motion } from "framer-motion";

const REFLOW_TRANSITION = {
  duration: 0.4,
  repeat: Infinity,
  repeatDelay: 6,
  ease: "easeInOut",
};

export default function DataReflowText({ text, reference }) {
  return (
    <div className="relative z-10 border-l-2 border-ignition pl-4 py-2 overflow-hidden">
      <motion.p
        className="text-xs md:text-sm font-mono text-signal-white/80 italic leading-relaxed"
        animate={{
          filter: ["blur(0px)", "blur(3px)", "blur(0px)"],
          opacity: [1, 0.35, 1],
        }}
        transition={REFLOW_TRANSITION}
      >
        &ldquo;{text}&rdquo;
      </motion.p>
      <motion.span
        className="text-[9px] font-mono text-titanium tracking-wider block mt-2"
        animate={{
          filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
          opacity: [1, 0.25, 1],
        }}
        transition={REFLOW_TRANSITION}
      >
        {reference}
      </motion.span>
      {/* Scan sweep */}
      <motion.div
        className="absolute top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-ignition/30 to-transparent pointer-events-none"
        animate={{ left: ["-4rem", "100%"] }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "linear",
        }}
      />
    </div>
  );
}