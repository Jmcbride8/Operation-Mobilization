import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function LaunchScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 60);

    // Complete
    const completeTimer = setTimeout(() => {
      setDone(true);
      setTimeout(() => onComplete && onComplete(), 1350);
    }, 4200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Grid backdrop */}
          <div className="absolute inset-0 grid-lines opacity-10" />

          {/* Scanning beam */}
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100vh" }}
            transition={{ duration: 3.75, ease: "linear", repeat: Infinity }}
            className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-ignition/5 to-transparent"
          />

          {/* Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex items-center gap-3 mb-8"
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 border border-ignition/30"
                style={{ borderRadius: "50%" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="absolute inset-1 border border-titanium/20 border-t-ignition/50"
                style={{ borderRadius: "50%" }}
              />
              <div className="w-2.5 h-2.5 bg-ignition animate-pulse-dot" />
            </div>
            <span className="font-heading font-black text-base md:text-lg tracking-[0.25em] text-signal-white">
              OPERATION<span className="text-ignition">.</span>MOBILIZATION
            </span>
          </motion.div>

          {/* Welcome headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.45 }}
            className="text-center mb-8 px-4 max-w-4xl"
          >
            <h1 className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-signal-white tracking-[-0.02em] uppercase leading-[1.05]">
              WELCOME TO THE
              <br />
              <span className="text-ignition">FRONTLINES OF FAITH</span>
            </h1>
          </motion.div>

          {/* Scripture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-center px-4 max-w-2xl"
          >
            <p className="text-sm md:text-base font-heading font-medium text-signal-white/80 italic leading-relaxed">
              "Go into all the world and preach the gospel to all creation."
            </p>
            <p className="mt-2 text-[10px] font-mono tracking-[0.25em] text-ignition">
              MARK 16:15 (NIV)
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 md:w-64 h-px bg-titanium/15 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-ignition"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="mt-2 text-[9px] font-mono text-titanium/40 tracking-[0.2em]">
            {String(progress).padStart(3, "0")}%
          </span>

          {/* Corner brackets */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-titanium/30" />
          <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-titanium/30" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-titanium/30" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-titanium/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}