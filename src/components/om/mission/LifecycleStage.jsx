import React from "react";
import { motion } from "framer-motion";

export default function LifecycleStage({ stage, index, getImage }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative grid grid-cols-1 md:grid-cols-2 border-t border-titanium/10"
    >
      <div className={`relative h-56 md:h-auto md:min-h-[420px] overflow-hidden ${isReversed ? "md:order-2" : ""}`}>
        <img
          src={getImage(stage.imageKey)}
          alt={stage.name}
          className="w-full h-full object-cover opacity-80 dark:opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent md:bg-gradient-to-l" />
        <span className="absolute top-4 left-4 text-[10px] font-mono text-ignition tracking-wider">
          [ {stage.id} / 09 ]
        </span>
      </div>

      <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? "md:order-1" : ""}`}>
        <span className="text-[10px] font-mono tracking-[0.3em] text-titanium mb-2">
          STAGE {stage.id}
        </span>
        <h3 className="font-heading font-black text-2xl md:text-3xl text-signal-white uppercase tracking-[-0.02em] mb-4">
          {stage.name}
        </h3>
        <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed mb-6">
          {stage.desc}
        </p>
        <div className="border-l-2 border-ignition pl-4">
          <span className="text-[9px] font-mono tracking-[0.2em] text-ignition block mb-1">
            OM PROVIDES
          </span>
          <p className="text-[11px] font-mono text-signal-white/80 leading-relaxed">
            {stage.omSupport}
          </p>
        </div>
      </div>
    </motion.div>
  );
}