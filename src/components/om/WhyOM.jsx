import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cross, Building2, HandHeart } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

const PATHS = [
  {
    icon: Building2,
    label: "PATH 01",
    title: "ON YOUR OWN",
    subtitle: "No covering. No legacy.",
    points: [
      "No sending community behind you",
      "No decades of field experience to draw from",
      "No legal, financial, or pastoral safety net",
      "You carry the weight alone — burnout is the norm",
    ],
  },
  {
    icon: HandHeart,
    label: "PATH 02",
    title: "UNDER A SECULAR ORG",
    subtitle: "The job is the mission. The Gospel is a sidequest.",
    points: [
      "The Red Cross, UN, or your employer gets you in — but Christ is a liability",
      "Sharing your faith risks your job, your visa, your org's reputation",
      "Good works are done, but never in the name of Jesus",
      "You are muzzled at the exact moment eternity is on the line",
    ],
  },
  {
    icon: Cross,
    label: "PATH 03",
    title: "WITH OM",
    subtitle: "Christ is the main quest. You are unleashed.",
    points: [
      "The Gospel is not tolerated — it is the mission",
      "65+ years of hard-place field experience backing you",
      "A global sending community: prayer, logistics, pastoral care",
      "You are sent, supported, and sent to speak the name of Jesus",
    ],
    highlight: true,
  },
];

function PathCard({ path, index }) {
  const Icon = path.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative border p-6 md:p-8 ${
        path.highlight
          ? "border-ignition bg-ignition/[0.04]"
          : "border-titanium/20 bg-transparent"
      }`}
    >
      {path.highlight && (
        <div className="absolute -top-px left-0 right-0 h-px bg-ignition" />
      )}
      <div className="flex items-center justify-between mb-6">
        <span className="text-[9px] font-mono tracking-[0.2em] text-titanium">{path.label}</span>
        <Icon size={20} className={path.highlight ? "text-ignition" : "text-titanium"} />
      </div>
      <h3 className={`font-heading font-black text-xl md:text-2xl tracking-tight mb-1 ${path.highlight ? "text-ignition" : "text-signal-white"}`}>
        {path.title}
      </h3>
      <p className="text-[11px] font-mono text-titanium mb-6">{path.subtitle}</p>
      <ul className="space-y-3">
        {path.points.map((p, i) => (
          <li key={i} className="flex gap-2 text-[12px] font-mono text-signal-white/70 leading-relaxed">
            <span className={`mt-1 w-1 h-1 shrink-0 ${path.highlight ? "bg-ignition" : "bg-titanium"}`} />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function WhyOM() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 border-t border-titanium/20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-ignition animate-pulse-dot" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-ignition">STRATEGIC BRIEF // WHY OM</span>
          </div>
          <ScrambleText
            as="h2"
            text="THREE PATHS TO THE FIELD."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] tracking-[-0.03em] text-signal-white mb-4 block uppercase leading-[0.95]"
          />
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
            Many Christians use a business, a job, or a humanitarian organization to take the Gospel global.
            But the job is #1 — and the Gospel is the sidequest. With OM, <span className="text-signal-white font-bold">Christ is the main quest.</span>
            You are not muzzled. You are <span className="text-ignition font-bold">unleashed</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-titanium/20">
          {PATHS.map((p, i) => (
            <PathCard key={p.label} path={p} index={i} />
          ))}
        </div>

        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 border-l-2 border-ignition pl-6"
          >
            <p className="font-heading font-black text-2xl md:text-4xl text-signal-white tracking-tight">
              AT OM, CHRIST IS <span className="text-ignition">THE MAIN QUEST</span>.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}