import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

const OPTIONS = [
  {
    id: "01",
    key: "give.om",
    title: "OPERATION MOBILIZATION",
    tag: "THE ORGANIZATION",
    desc: "Fuel the entire mission. Fund headquarters, logistics, training, and the infrastructure that keeps 5,800+ workers deployed across 118 countries.",
  },
  {
    id: "02",
    key: "give.fields",
    title: "FIELDS",
    tag: "COUNTRIES & REGIONS",
    desc: "Direct resources to a specific country or region. Support operations on the ground — from the Sahel corridor to the Amazon basin to the mountains of Central Asia.",
  },
  {
    id: "03",
    key: "give.ministries",
    title: "MINISTRIES",
    tag: "PROGRAMS & SHIPS",
    desc: "Fund specialized programs: OM Ships, disaster response, community health, literacy initiatives, and water infrastructure projects deployed where they're needed most.",
  },
  {
    id: "04",
    key: "give.missionaries",
    title: "MISSIONARIES",
    tag: "INDIVIDUAL WORKERS",
    desc: "Stand behind a specific worker. Cover their living costs, medical, and field expenses so they can serve full-time without distraction or financial burden.",
  },
];

function GiveCard({ option, index, getImage }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-titanium/20 bg-obsidian group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={getImage(option.key)}
          alt={option.title}
          className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-70 dark:group-hover:opacity-50 group-hover:grayscale transition-all duration-700 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        <span className="absolute top-3 left-3 text-[9px] font-mono text-titanium/60 tracking-wider">
          [ {option.id} / 04 ]
        </span>
        <span className="absolute top-3 right-3 text-[9px] font-mono text-ignition tracking-wider">
          {option.tag}
        </span>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-heading font-black text-xl md:text-2xl text-signal-white uppercase tracking-tight leading-tight">
            {option.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] font-mono text-signal-white/60 leading-relaxed flex-1">
          {option.desc}
        </p>
        <button className="mt-5 w-full py-2.5 bg-ignition text-xs font-heading font-bold tracking-[0.2em] text-white hover:bg-ignition/90 transition-colors">
          GIVE
        </button>
      </div>
    </motion.div>
  );
}

export default function Give() {
  const { getImage } = useSiteImages();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-obsidian text-signal-white flex flex-col">
      {/* Top bar */}
      <div className="border-b border-titanium/20 px-4 md:px-8 h-14 flex items-center justify-between flex-shrink-0">
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft size={14} className="text-titanium group-hover:text-ignition transition-colors" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-titanium">RETURN TO BASE</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-ignition animate-pulse-dot" />
          <span className="font-heading font-black text-sm tracking-[0.2em]">
            OPERATION<span className="text-ignition">.</span>MOBILIZATION
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-8 py-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DEPLOY RESOURCES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8" ref={ref}>
            <ScrambleText
              as="h1"
              text="SEND SUPPLIES."
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
            />
            <ScrambleText
              as="h1"
              text="SUSTAIN THE MISSION."
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
              delay={300}
            />
          </div>
          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              Every dollar goes to the front lines. Choose where your resources
              land — the organization, a specific field, a specialized ministry,
              or an individual worker. No nonsense. No waste. Just the mission.
            </p>
          </div>
        </div>

        {/* Scripture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-l-2 border-ignition pl-6 mb-16 max-w-2xl"
        >
          <p className="text-sm md:text-base font-heading font-medium text-signal-white/90 leading-relaxed italic">
            "The one who supplies seed to the sower and bread for food will supply
            and multiply your seed for sowing and increase the harvest of your righteousness."
          </p>
          <span className="block mt-3 text-[10px] font-mono tracking-[0.25em] text-ignition">
            — 2 CORINTHIANS 9:10
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OPTIONS.map((option, i) => (
            <GiveCard key={option.id} option={option} index={i} getImage={getImage} />
          ))}
        </div>
      </div>
    </div>
  );
}