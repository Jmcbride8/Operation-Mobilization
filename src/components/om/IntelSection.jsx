import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

const INTEL = [
  {
    id: "REPORT-2026-047",
    classification: "OPERATIONAL",
    title: "FRESH WATER REACHES 340,000 IN THE SAHEL CORRIDOR",
    excerpt: "After 14 months of drilling operations and infrastructure buildout, the Sahel water network is now fully operational. Local maintenance teams have been trained and certified to sustain operations independently.",
    imageKey: "intel.ops_hub",
    reach: "340K",
    status: "SUSTAINED",
    date: "2026.06.18",
    region: "WEST AFRICA",
  },
  {
    id: "REPORT-2026-046",
    classification: "FIELD REPORT",
    title: "MEDICAL CONVOY REACHES FORWARD POSITIONS IN NORTHERN MOUNTAINS",
    excerpt: "A twelve-vehicle convoy carrying surgical supplies and mobile clinic modules successfully navigated mountain passes to reach isolated communities cut off since the spring floods.",
    imageKey: "intel.medical",
    reach: "12K",
    status: "ACTIVE",
    date: "2026.06.14",
    region: "CENTRAL ASIA",
  },
  {
    id: "REPORT-2026-045",
    classification: "FEATURE",
    title: "LEADERSHIP TRAINING PROGRAM GRADUATES 120 LOCAL COORDINATORS",
    excerpt: "The third cohort of the Meridian Leadership Initiative has completed 18 months of intensive training. These coordinators now manage regional operations across four provinces.",
    imageKey: "intel.portrait",
    reach: "450K",
    status: "SUSTAINED",
    date: "2026.06.10",
    region: "SOUTH ASIA",
  },
  {
    id: "REPORT-2026-044",
    classification: "URGENT",
    title: "EMERGENCY SHELTER DEPLOYMENT TO COASTAL DISPLACEMENT ZONE",
    excerpt: "Rapid response teams deployed 600 modular shelter units within 72 hours of the cyclone making landfall. Food and water distribution ongoing across 8 distribution points.",
    imageKey: "intel.command",
    reach: "28K",
    status: "ACTIVE",
    date: "2026.06.06",
    region: "SOUTHEAST ASIA",
  },
];

function IntelCard({ item, index, getImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const classColors = {
    OPERATIONAL: "text-green-500 border-green-500/30",
    "FIELD REPORT": "text-blue-400 border-blue-400/30",
    FEATURE: "text-yellow-500 border-yellow-500/30",
    URGENT: "text-ignition border-ignition/30",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-titanium/20 bg-obsidian/80 group cursor-pointer hover:border-titanium/40 transition-all"
    >
      {/* Image reveal on hover */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={getImage(item.imageKey)}
          alt={item.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:grayscale transition-all duration-700 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/15 transition-colors duration-500" />
        
        {/* Overlay data */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`text-[9px] font-mono px-1.5 py-0.5 border ${classColors[item.classification]}`}>
            {item.classification}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-[9px] font-mono text-signal-white/40">[{item.id}]</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="text-[9px] font-mono text-signal-white/50">{item.region}</span>
          <span className="text-[9px] font-mono text-signal-white/50">{item.date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="font-heading font-bold text-sm tracking-[0.02em] text-signal-white uppercase leading-tight">
          {item.title}
        </h3>
        <p className="text-[11px] font-mono text-titanium leading-relaxed line-clamp-3">
          {item.excerpt}
        </p>

        {/* Metrics */}
        <div className="flex items-center gap-4 pt-2 border-t border-titanium/10">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-mono text-titanium">REACH:</span>
            <span className="text-[11px] font-mono text-ignition font-bold">{item.reach}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 animate-pulse-dot ${item.status === "ACTIVE" ? "bg-green-500" : "bg-blue-400"}`} />
            <span className="text-[9px] font-mono text-titanium">{item.status}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IntelSection() {
  const { getImage } = useSiteImages();

  return (
    <section id="intel" className="py-24 border-t border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_04</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <ScrambleText
              as="h2"
              text="FIELD REPORTS"
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase"
            />
            <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
              Dispatches from the field. Real stories, measured outcomes,
              no embellishment. Truth, not marketing.
            </p>
          </div>
          <span className="text-[10px] font-mono text-titanium tracking-wider">
            {INTEL.length} REPORTS AVAILABLE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INTEL.map((item, i) => (
            <IntelCard key={item.id} item={item} index={i} getImage={getImage} />
          ))}
        </div>
      </div>
    </section>
  );
}