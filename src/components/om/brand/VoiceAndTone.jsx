import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";

const PRINCIPLES = [
  {
    id: "01",
    title: "DIRECT. ALWAYS.",
    body: "No hedging. No jargon for its own sake. Say what is true and move on. If a sentence doesn't carry weight, cut it.",
    example: "We don't 'facilitate missional engagement.' We send workers to the hardest places on earth.",
  },
  {
    id: "02",
    title: "TACTICAL, NOT MILITARISTIC",
    body: "We use operational language — field, deploy, reach — because it's precise. But we never glorify combat. The mission is love, not war.",
    example: "Right: 'Deployed to the Sahel corridor.' Wrong: 'Boots on ground, ready for engagement.'",
  },
  {
    id: "03",
    title: "HONOR SACRIFICE",
    body: "Name the cost. Always. The people we send give up comfort, safety, sometimes their lives. Their sacrifice is the story — not our brand.",
    example: "She served fifty-five years in India without once going home.",
  },
  {
    id: "04",
    title: "GOD FIRST. US SECOND.",
    body: "Every sentence points beyond the organization. God does hard. We go hard. The order matters. We are the instrument, not the hand.",
    example: "Right: 'God sends workers through OM.' Wrong: 'OM sends workers for God.'",
  },
  {
    id: "05",
    title: "TRUTH OVER MARKETING",
    body: "No embellishment. No inflated metrics. If 340,000 people have water, say 340,000. Not 'millions transformed.' Precision is integrity.",
    example: "REACH: 340K // STATUS: SUSTAINED // DATE: 2026.06.18",
  },
  {
    id: "06",
    title: "THE CALL IS OPEN",
    body: "Every piece ends with an invitation. Give. Go. Pray. The mission is not complete and the reader is not a spectator. They are next.",
    example: "Count the cost. Pay the price. Go.",
  },
];

function PrincipleCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-l-2 border-titanium/20 hover:border-ignition transition-colors pl-6 py-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-[10px] font-mono text-ignition tracking-[0.2em]">{item.id}</span>
        <span className="font-heading font-black text-lg text-signal-white uppercase tracking-[0.02em]">{item.title}</span>
      </div>
      <p className="text-[12px] font-mono text-titanium leading-relaxed">{item.body}</p>
      <div className="mt-3 border border-titanium/10 p-3 bg-obsidian/50">
        <span className="text-[9px] font-mono text-ignition/70 tracking-wider block mb-1">EXAMPLE</span>
        <p className="text-[11px] font-mono text-signal-white/70 italic leading-relaxed">{item.example}</p>
      </div>
    </motion.div>
  );
}

export default function VoiceAndTone() {
  return (
    <section id="voice" className="py-24 border-b border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_04</span>
        </div>
        <ScrambleText as="h2" text="THE VOICE." className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase" />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          How OM sounds. Not what we say — how we say it. Six principles that govern every
          headline, caption, field report, and call to action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-12">
          {PRINCIPLES.map((item, i) => (
            <PrincipleCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}