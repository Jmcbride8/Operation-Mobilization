import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const MILESTONES = [
  { year: "1957", title: "THE BEGINNING", desc: "George Verwer sells his books and boards a ship to Mexico with two friends. The movement is born from prayer and a second-hand operation.", image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/cbc67e493_generated_image.png" },
  { year: "1963", title: "GOING GLOBAL", desc: "OM expands into Europe, the Middle East, and Asia. The Logos ship launches, carrying literature and workers to ports across the world.", image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/3d30bdb67_generated_image.png" },
  { year: "1978", title: "DOULOS LAUNCHED", desc: "A second ship joins the fleet. Over the next 30 years, OM's vessels visit over 400 ports, welcoming millions aboard.", image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/63d6519de_generated_image.png" },
  { year: "2000s", title: "NEW FRONTIERS", desc: "OM pivots from ships to sustainable field operations — water infrastructure, medical deployment, literacy, and church planting in hard places.", image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/28b8c68cb_generated_image.png" },
  { year: "TODAY", title: "5,800+ WORKERS", desc: "Operating in 118 countries. Not a charity. Not an NGO. A mission force of called servants, still going hard to the hardest places.", image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/162fe90d2_generated_image.png" },
];

export default function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 border-t border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_01</span>
        </div>
        <ScrambleText
          as="h2"
          text="OUR STORY"
          className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-signal-white tracking-[-0.02em] uppercase mb-4"
        />
        <p className="text-xs font-mono text-titanium max-w-lg mb-12">
          One man. Two friends. A stack of books and a calling.
          This is how God built a global mission force.
        </p>

        <div className="relative" ref={ref}>
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <span className="font-heading font-black text-2xl md:text-3xl text-ignition tracking-tight whitespace-nowrap">{m.year}</span>
                {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-titanium/20 mt-3" />}
              </div>
              <div className="flex-1 pt-1">
                <span className="text-[10px] font-mono text-ignition tracking-[0.15em] block mb-1">{m.title}</span>
                <p className="text-xs md:text-sm font-mono text-signal-white/60 leading-relaxed max-w-xl mb-4">{m.desc}</p>
                <div className="relative h-48 md:h-56 w-full max-w-md overflow-hidden border border-titanium/20 group">
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:grayscale transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono text-signal-white/50">[ {m.year} ]</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}