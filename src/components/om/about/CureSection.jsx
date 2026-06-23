import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const PILLARS = [
  {
    id: "01",
    label: "WE SHARE IT",
    title: "THE MESSAGE",
    desc: "We go to the hardest places and declare the truth that shatters every lie: you are loved. You have always been loved. God so loved the world that He gave His only Son — not for the worthy, but for the broken. This message is not optional. It is the power of God for salvation to everyone who believes, and it must be spoken.",
    scripture: "ROMANS 1:16",
    scriptureText: "I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes.",
  },
  {
    id: "02",
    label: "WE SHOW IT",
    title: "THE PROOF",
    desc: "Words alone are not enough. Love that is only spoken is not yet love. So we live it. We build water systems. We staff clinics. We sit with the dying. We hold the orphan. We feed the hungry. We stay — for years, not weeks. The love of God, made visible in hands and feet that refuse to look away.",
    scripture: "1 JOHN 3:18",
    scriptureText: "Let us not love in word or talk, but in deed and in truth.",
  },
];

export default function CureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cure" ref={ref} className="relative py-24 border-t border-titanium/10 overflow-hidden bg-obsidian">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE RESPONSE</span>
        </div>
        <ScrambleText
          as="h2"
          text="WE BRING THE CURE."
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
        />
        <ScrambleText
          as="h2"
          text="BOTH. ALWAYS."
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
          delay={300}
        />
        <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed max-w-xl mt-6">
          The cure is not a concept we hold. It is a love we carry — we can't
          change the world. But we can bring the God who can.
        </p>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-titanium/15 mt-16">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-obsidian p-8 md:p-12 space-y-6 group hover:bg-signal-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="font-heading font-black text-5xl text-ignition/30 group-hover:text-ignition/50 transition-colors">
                  {p.id}
                </span>
                <div>
                  <span className="text-[9px] font-mono text-ignition tracking-[0.3em] block">{p.label}</span>
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-signal-white uppercase tracking-[-0.02em]">
                    {p.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
                {p.desc}
              </p>

              <div className="border-l-2 border-ignition pl-4 py-2">
                <p className="text-xs md:text-sm font-mono text-signal-white/80 italic leading-relaxed">
                  "{p.scriptureText}"
                </p>
                <span className="text-[9px] font-mono text-titanium tracking-wider block mt-2">{p.scripture}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}