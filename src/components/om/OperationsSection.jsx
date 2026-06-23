import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";

const REGION_SA = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/b3202034e_generated_f1e526ec.png";
const REGION_ME = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/b925a4c82_generated_e0771031.png";
const OPS_HUB = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/34ef08e21_generated_fd8ecaec.png";
const MEDICAL = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/57b2add53_generated_7a4bd510.png";

const OPERATIONS = [
  {
    id: "OP-MERIDIAN",
    region: "SOUTH ASIA",
    image: REGION_SA,
    status: "ACTIVE",
    personnel: 1240,
    reach: "2.4M",
    operations: ["Water Infrastructure", "Medical Deployment", "Leadership Training"],
    coordinates: "20.5937° N, 78.9629° E",
  },
  {
    id: "OP-CITADEL",
    region: "MIDDLE EAST & NORTH AFRICA",
    image: REGION_ME,
    status: "ACTIVE",
    personnel: 890,
    reach: "1.8M",
    operations: ["Refugee Integration", "Community Health", "Emergency Response"],
    coordinates: "29.3117° N, 47.4818° E",
  },
  {
    id: "OP-FULCRUM",
    region: "EAST AFRICA",
    image: OPS_HUB,
    status: "ACTIVE",
    personnel: 1050,
    reach: "3.1M",
    operations: ["Agricultural Systems", "Literacy Programs", "Supply Logistics"],
    coordinates: "1.2921° S, 36.8219° E",
  },
  {
    id: "OP-SUMMIT",
    region: "CENTRAL ASIA",
    image: MEDICAL,
    status: "SCALING",
    personnel: 430,
    reach: "890K",
    operations: ["Medical Clinics", "Vocational Training", "Infrastructure"],
    coordinates: "41.2995° N, 69.2401° E",
  },
];

function OperationCard({ op, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[340px] md:w-[420px] border border-titanium/20 bg-obsidian/80 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={op.image}
          alt={`${op.region} operations`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-obsidian/20 transition-colors" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className={`w-1.5 h-1.5 animate-pulse-dot ${op.status === "ACTIVE" ? "bg-green-500" : "bg-yellow-500"}`} />
          <span className="text-[9px] font-mono tracking-[0.15em] text-signal-white/80">{op.status}</span>
        </div>
        <span className="absolute top-3 right-3 text-[9px] font-mono text-signal-white/40">[{op.id}]</span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-heading font-bold text-lg tracking-[0.05em] text-signal-white uppercase">{op.region}</h3>
          <span className="text-[9px] font-mono text-titanium">{op.coordinates}</span>
        </div>

        {/* Metrics */}
        <div className="flex gap-4 border-t border-b border-titanium/15 py-2.5">
          <div>
            <span className="font-heading font-bold text-xl text-signal-white">{op.personnel}</span>
            <span className="block text-[9px] font-mono text-titanium tracking-wider">PERSONNEL</span>
          </div>
          <div className="border-l border-titanium/15 pl-4">
            <span className="font-heading font-bold text-xl text-ignition">{op.reach}</span>
            <span className="block text-[9px] font-mono text-titanium tracking-wider">REACH</span>
          </div>
        </div>

        {/* Operations list */}
        <div className="space-y-1">
          {op.operations.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 bg-ignition/60" />
              <span className="text-[10px] font-mono text-signal-white/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function OperationsSection() {
  const scrollRef = useRef(null);

  return (
    <section id="operations" className="py-24 border-t border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_02</span>
        </div>
        <ScrambleText
          as="h2"
          text="ACTIVE OPERATIONS"
          className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase"
        />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          Real-time deployment status across strategic regions. Each operation is a self-sustaining node
          in the global network — resourced, measured, and accountable.
        </p>
      </div>

      {/* Horizontal scrolling cards */}
      <div
        ref={scrollRef}
        className="horizontal-scroll overflow-x-auto flex gap-4 px-4 md:px-8 pb-4"
      >
        {OPERATIONS.map((op, i) => (
          <OperationCard key={op.id} op={op} index={i} />
        ))}
        {/* End spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>
    </section>
  );
}