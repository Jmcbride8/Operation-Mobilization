import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

export default function EnlistConfirmation({ onConfirm, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md text-center"
    >
      {/* Warning icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-ignition/20 blur-2xl animate-pulse-dot" />
          <div className="relative w-20 h-20 border-2 border-ignition flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
            <AlertTriangle size={28} className="text-ignition mt-3" />
          </div>
        </div>
      </motion.div>

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-8 h-px bg-ignition" />
        <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">CAUTION</span>
        <div className="w-8 h-px bg-ignition" />
      </div>

      {/* Warning text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-heading font-black text-xl md:text-2xl text-signal-white leading-snug mb-8"
      >
        You will be opposed, tested, and stretched — but not alone.
      </motion.p>

      {/* Question */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="text-sm font-mono text-titanium mb-10"
      >
        Are you sure you want to continue?
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-col gap-3"
      >
        <button
          onClick={onConfirm}
          className="w-full py-3 bg-ignition text-xs font-heading font-bold tracking-[0.2em] text-white hover:bg-ignition/90 transition-colors flex items-center justify-center gap-2"
        >
          I&apos;M SURE — CONTINUE <ArrowRight size={14} />
        </button>
        <button
          onClick={onBack}
          className="w-full py-3 border border-titanium/30 text-xs font-heading font-bold tracking-[0.2em] text-titanium hover:text-signal-white hover:border-titanium/60 transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft size={14} /> NOT YET — GO BACK
        </button>
      </motion.div>
    </motion.div>
  );
}