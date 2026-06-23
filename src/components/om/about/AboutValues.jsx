import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const VALUES = [
  { id: "01", title: "BIBLICAL ROOTS", desc: "We go because God said go. Scripture is our authority, Jesus is our message, and the Great Commission is our mandate." },
  { id: "02", title: "RADICAL OBEDIENCE", desc: "We don't measure success by comfort. We measure it by faithfulness — even when it costs everything." },
  { id: "03", title: "LOCAL EMPOWERMENT", desc: "We don't build dependencies. We train, equip, and hand over. Communities lead their own transformation." },
  { id: "04", title: "INTEGRITY & TRANSPARENCY", desc: "Every dollar tracked. Every outcome verified. Radical stewardship because the resources aren't ours." },
  { id: "05", title: "PEOPLE OVER PROGRAMS", desc: "We deploy people, not projects. Relationships are the strategy. Lives changed are the metric." },
  { id: "06", title: "LONG-TERM COMMITMENT", desc: "We don't parachute in. We stay. Our average deployment is measured in years, not weeks." },
];

export default function AboutValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_02</span>
        </div>
        <ScrambleText
          as="h2"
          text="WHAT DRIVES US"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/15">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-obsidian p-6 hover:bg-signal-white/[0.02] transition-colors"
            >
              <span className="text-[10px] font-mono text-ignition tracking-wider">[ {v.id} ]</span>
              <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em] mt-3 mb-2">{v.title}</h3>
              <p className="text-[11px] font-mono text-titanium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}