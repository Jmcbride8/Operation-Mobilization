import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Flame, Cross, Ship, Church, Globe2 } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

const PILLARS = [
  {
    icon: MapPin,
    label: "THE CALLING",
    title: "THE HARDEST PLACES",
    body: "OM doesn't go where it's safe. We go where the gospel has never reached, where the cost is highest, and the need is greatest. The 10/40 Window. Closed nations. Hostile territories. Since 1957, we've deployed to the places no one else would go.",
    return: "The world's hardest places are harder than ever. 3.2 billion people still have no access to the gospel. The need hasn't shrunk — it's grown. The recipe for reaching them hasn't changed: people willing to go.",
  },
  {
    icon: Flame,
    label: "THE LINEAGE",
    title: "SELF-SACRIFICE",
    body: "From Hudson Taylor to Amy Carmichael to the martyrs on the Wall of the Fallen — OM was built by men and women who counted their lives as loss for the sake of the gospel. Not a career. A calling. Not a salary. A sacrifice. This is the DNA.",
    return: "A generation raised on comfort needs to see it again. The missionary legends who built OM are still among us — and the fire they carry is exactly what the next generation is starving for. We're not inventing a recipe. We're returning to it.",
  },
  {
    icon: Cross,
    label: "THE MANDATE",
    title: "THE GREAT COMMISSION",
    body: "Go and make disciples of all nations. It's not a suggestion, a program, or a department. It's the final command of Christ — the operating order of the church. OM exists to execute it, literally, on the field. Everything else is supporting infrastructure.",
    return: "The church in the West has drifted into self-preservation. The Great Commission has been treated as optional. OM exists to embody the unchanging mandate — and the world needs that embodiment now more than ever.",
  },
  {
    icon: Ship,
    label: "THE METHOD",
    title: "SHIPS & SOIL",
    body: "OM pioneered the ship-based ministry — floating libraries of hope that docked in ports the world over. And we pioneered on soil — planting churches, training leaders, and staying for decades. Both sea and land. Both word and deed. Both arrival and abiding.",
    return: "The ships are being restored. The field teams are rebounding. The dual-engine method that made OM unique — mobility AND permanence — is the blueprint for a resurgence that reaches both the coasts and the interiors.",
  },
  {
    icon: Church,
    label: "THE PARTNERSHIP",
    title: "THE LOCAL CHURCH",
    body: "OM doesn't replace the local church — we arm it. We are the bridge between the pew and the field, between the sending church and the deployed missionary. Churches don't need to build visa systems, crisis protocols, or retirement plans. OM absorbs all of it. That's why we're indispensable.",
    return: "Churches are waking up to the missions mandate again — but they need a partner who can actually deploy their people. The gap between 'we want to send' and 'they're on the field' is exactly the gap OM was built to fill. The partnership model is the recipe.",
  },
  {
    icon: Globe2,
    label: "THE REACH",
    title: "118 NATIONS",
    body: "From one man in a truck in Mexico to a global force across 118 countries. OM built the largest missionary mobilization network in history — not by accident, but by a relentless, sacrificial, decade-by-decade push into every corner of the earth. The infrastructure is unmatched.",
    return: "The network survived the dark night. 118 countries, 250+ missionaries and climbing, 68 years of relationships and trust. This is not a startup. This is a resurgence of the most proven mission infrastructure on earth. The bones are great. The second act starts now.",
  },
];

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative border border-titanium/20 bg-obsidian hover:border-ignition/40 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ignition/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Icon size={20} className="text-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">{pillar.label}</span>
        </div>
        <h3 className="font-heading font-black text-xl md:text-2xl text-signal-white uppercase tracking-[-0.01em] mb-4">
          {pillar.title}
        </h3>
        <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed mb-6">
          {pillar.body}
        </p>
        <div className="pt-5 border-t border-titanium/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-px bg-ignition" />
            <span className="text-[9px] font-mono tracking-[0.25em] text-ignition">THE RETURN</span>
          </div>
          <p className="text-xs font-mono text-signal-white/70 leading-relaxed">
            {pillar.return}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TurnaroundCore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE RECIPE</span>
        </div>
        <ScrambleText
          as="h2"
          text="WHAT MADE US GREAT."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />
        <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-3xl mb-16">
          We know what the recipe is. We didn't lose it — it was taken from us. Now we're taking it back.
          These are the six pillars that made OM the tip of the spear. The world needs them now more than ever.
          This is what the return is to.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/20">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}