import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";

const SUPPLY_IMG = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/fe9557239_generated_7bc052d7.png";

const CATEGORIES = [
  {
    id: "water",
    label: "WATER INFRASTRUCTURE",
    allocation: 28,
    items: [
      { name: "Purification Units", cost: "$2,400", deployed: 340 },
      { name: "Well Drilling Operations", cost: "$8,500", deployed: 89 },
      { name: "Distribution Systems", cost: "$1,200", deployed: 560 },
    ],
    impact: "1.2M people with clean water access",
  },
  {
    id: "medical",
    label: "MEDICAL DEPLOYMENT",
    allocation: 24,
    items: [
      { name: "Mobile Clinic Modules", cost: "$15,000", deployed: 42 },
      { name: "Medical Supply Kits", cost: "$450", deployed: 2800 },
      { name: "Training Programs", cost: "$3,200", deployed: 120 },
    ],
    impact: "890K patients treated annually",
  },
  {
    id: "education",
    label: "LITERACY & TRAINING",
    allocation: 22,
    items: [
      { name: "Literacy Kits", cost: "$85", deployed: 14000 },
      { name: "Vocational Centers", cost: "$45,000", deployed: 28 },
      { name: "Teacher Training", cost: "$2,100", deployed: 450 },
    ],
    impact: "340K enrolled in programs",
  },
  {
    id: "emergency",
    label: "EMERGENCY RESPONSE",
    allocation: 26,
    items: [
      { name: "Shelter Units", cost: "$600", deployed: 4200 },
      { name: "Food Supply Pallets", cost: "$1,800", deployed: 890 },
      { name: "Response Teams", cost: "$12,000", deployed: 36 },
    ],
    impact: "Rapid deployment to 14 crisis zones",
  },
];

export default function LogisticsSection() {
  const [active, setActive] = useState("water");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const category = CATEGORIES.find((c) => c.id === active);

  return (
    <section id="logistics" ref={ref} className="py-24 border-t border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_03</span>
        </div>
        <ScrambleText
          as="h2"
          text="WHERE IT GOES"
          className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase"
        />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          Radical transparency. Every dollar tracked, every resource accounted for.
          No stock photos. No vague promises. Just stewardship.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Left: Category selector + Image */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`p-3 border text-left transition-all ${
                    active === cat.id
                      ? "border-ignition bg-ignition/5"
                      : "border-titanium/20 hover:border-titanium/40"
                  }`}
                >
                  <span className={`text-[10px] font-mono tracking-[0.1em] block ${
                    active === cat.id ? "text-ignition" : "text-titanium"
                  }`}>
                    {cat.label}
                  </span>
                  <span className={`font-heading font-bold text-2xl block mt-1 ${
                    active === cat.id ? "text-signal-white" : "text-titanium"
                  }`}>
                    {cat.allocation}%
                  </span>
                  <span className="text-[9px] font-mono text-titanium/50">ALLOCATION</span>
                </button>
              ))}
            </div>

            <div className="relative h-56 overflow-hidden border border-titanium/20">
              <img src={SUPPLY_IMG} alt="Supply distribution operations" className="w-full h-full object-cover grayscale" />
              <div className="absolute inset-0 bg-obsidian/50" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[9px] font-mono text-signal-white/60 bg-obsidian/80 px-2 py-1">
                  [ STEWARDSHIP_FEED: LIVE ]
                </span>
              </div>
            </div>
          </div>

          {/* Right: Breakdown */}
          <div className="lg:col-span-7">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="border border-titanium/20 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-signal-white tracking-[0.05em] uppercase">
                    {category.label}
                  </h3>
                  <span className="text-[10px] font-mono text-ignition">
                    {category.allocation}% OF TOTAL RESOURCES
                  </span>
                </div>

                {/* Allocation bar */}
                <div className="w-full h-1 bg-titanium/20 mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${category.allocation}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-ignition"
                  />
                </div>

                {/* Items table */}
                <div className="space-y-0">
                  <div className="grid grid-cols-3 gap-4 pb-2 border-b border-titanium/20">
                    <span className="text-[9px] font-mono text-titanium tracking-wider">RESOURCE</span>
                    <span className="text-[9px] font-mono text-titanium tracking-wider text-right">UNIT COST</span>
                    <span className="text-[9px] font-mono text-titanium tracking-wider text-right">DEPLOYED</span>
                  </div>
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="grid grid-cols-3 gap-4 py-3 border-b border-titanium/10"
                    >
                      <span className="text-xs font-mono text-signal-white">{item.name}</span>
                      <span className="text-xs font-mono text-signal-white/70 text-right">{item.cost}</span>
                      <span className="text-xs font-mono text-ignition text-right font-bold">{item.deployed.toLocaleString()}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact callout */}
              <div className="border border-ignition/30 bg-ignition/5 p-4 flex items-center gap-4">
                <div className="w-2 h-2 bg-ignition animate-pulse-dot flex-shrink-0" />
                <div>
                  <span className="text-[9px] font-mono text-ignition tracking-wider">VERIFIED IMPACT</span>
                  <p className="text-sm font-mono text-signal-white mt-0.5">{category.impact}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}