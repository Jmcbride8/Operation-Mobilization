import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { ChevronRight } from "lucide-react";

const POSITIONS = [
  {
    id: "POS-001",
    title: "Field Medical Worker",
    region: "East Africa",
    risk: "HIGH",
    duration: "12 months",
    specialization: "Healthcare",
    requirements: "Licensed RN/MD, field experience preferred, physical fitness certification",
    urgency: "CRITICAL",
  },
  {
    id: "POS-002",
    title: "Water Systems Worker",
    region: "Sahel Corridor",
    risk: "MODERATE",
    duration: "18 months",
    specialization: "Engineering",
    requirements: "Civil/environmental engineering degree, water treatment experience",
    urgency: "HIGH",
  },
  {
    id: "POS-003",
    title: "Field Coordinator",
    region: "Central Asia",
    risk: "MODERATE",
    duration: "24 months",
    specialization: "Operations",
    requirements: "Supply chain management experience, crisis logistics preferred",
    urgency: "STANDARD",
  },
  {
    id: "POS-004",
    title: "Community Health Trainer",
    region: "South Asia",
    risk: "LOW",
    duration: "12 months",
    specialization: "Education",
    requirements: "Public health background, teaching experience, cultural sensitivity training",
    urgency: "HIGH",
  },
  {
    id: "POS-005",
    title: "Crisis Response Lead",
    region: "Southeast Asia",
    risk: "HIGH",
    duration: "6 months",
    specialization: "Crisis Mgmt",
    requirements: "Crisis response experience, team leadership, physical fitness",
    urgency: "CRITICAL",
  },
  {
    id: "POS-006",
    title: "Agricultural Advisor",
    region: "West Africa",
    risk: "LOW",
    duration: "18 months",
    specialization: "Agriculture",
    requirements: "Agricultural science degree, sustainable farming methods expertise",
    urgency: "STANDARD",
  },
];

const RISK_COLORS = {
  LOW: "text-green-500",
  MODERATE: "text-yellow-500",
  HIGH: "text-ignition",
};

const URGENCY_COLORS = {
  STANDARD: "bg-titanium/20 text-titanium",
  HIGH: "bg-yellow-500/10 text-yellow-500",
  CRITICAL: "bg-ignition/10 text-ignition",
};

export default function DeploySection() {
  const [filter, setFilter] = useState("ALL");
  const [expandedId, setExpandedId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specs = ["ALL", ...new Set(POSITIONS.map((p) => p.specialization))];
  const filtered = filter === "ALL" ? POSITIONS : POSITIONS.filter((p) => p.specialization === filter);

  return (
    <section id="deploy" ref={ref} className="py-24 border-t border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_05</span>
        </div>
        <ScrambleText
          as="h2"
          text="ANSWER THE CALL"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase"
        />
        <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
          We don't recruit volunteers for a weekend. We send workers for a lifetime.
          Every position is a calling. Match your skills. Count the cost. Go.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-1 mt-8 mb-6">
          {specs.map((spec) => (
            <button
              key={spec}
              onClick={() => setFilter(spec)}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.1em] border transition-all ${
                filter === spec
                  ? "border-ignition bg-ignition/10 text-ignition"
                  : "border-titanium/20 text-titanium hover:border-titanium/40 hover:text-signal-white"
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-12 gap-2 pb-2 border-b border-titanium/30 mb-1">
          <span className="col-span-1 text-[9px] font-mono text-titanium tracking-wider">ID</span>
          <span className="col-span-3 text-[9px] font-mono text-titanium tracking-wider">POSITION</span>
          <span className="col-span-2 text-[9px] font-mono text-titanium tracking-wider">REGION</span>
          <span className="col-span-1 text-[9px] font-mono text-titanium tracking-wider">COST</span>
          <span className="col-span-1 text-[9px] font-mono text-titanium tracking-wider">DURATION</span>
          <span className="col-span-2 text-[9px] font-mono text-titanium tracking-wider">SPEC</span>
          <span className="col-span-2 text-[9px] font-mono text-titanium tracking-wider">URGENCY</span>
        </div>

        {/* Positions */}
        <div className="space-y-0">
          {filtered.map((pos, i) => (
            <motion.div
              key={pos.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <button
                onClick={() => setExpandedId(expandedId === pos.id ? null : pos.id)}
                className="w-full text-left grid grid-cols-1 md:grid-cols-12 gap-2 py-3 border-b border-titanium/10 hover:bg-signal-white/[0.02] transition-colors items-center"
              >
                <span className="md:col-span-1 text-[10px] font-mono text-titanium">[{pos.id}]</span>
                <span className="md:col-span-3 text-xs font-mono text-signal-white font-medium">{pos.title}</span>
                <span className="md:col-span-2 text-[11px] font-mono text-signal-white/70">{pos.region}</span>
                <span className={`md:col-span-1 text-[10px] font-mono font-bold ${RISK_COLORS[pos.risk]}`}>{pos.risk}</span>
                <span className="md:col-span-1 text-[10px] font-mono text-signal-white/70">{pos.duration}</span>
                <span className="md:col-span-2 text-[10px] font-mono text-signal-white/50">{pos.specialization}</span>
                <div className="md:col-span-2 flex items-center justify-between">
                  <span className={`text-[9px] font-mono px-2 py-0.5 ${URGENCY_COLORS[pos.urgency]}`}>
                    {pos.urgency}
                  </span>
                  <ChevronRight
                    size={14}
                    className={`text-titanium transition-transform ${expandedId === pos.id ? "rotate-90" : ""}`}
                  />
                </div>
              </button>

              {expandedId === pos.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-b border-titanium/10 bg-signal-white/[0.02] px-4 py-4 overflow-hidden"
                >
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] font-mono text-titanium tracking-wider">REQUIREMENTS</span>
                      <p className="text-xs font-mono text-signal-white/80 mt-1">{pos.requirements}</p>
                    </div>
                    <button className="px-4 py-2 bg-ignition text-xs font-heading font-bold tracking-[0.1em] text-white hover:bg-ignition/90 transition-colors">
                      APPLY NOW
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}