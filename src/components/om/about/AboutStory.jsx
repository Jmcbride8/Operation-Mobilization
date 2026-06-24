import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

const MILESTONES = [
  { year: "1955", title: "THE CONVERSION", desc: "A classmate hands George Verwer a copy of the Gospel of John. George gives his life to Christ at a Billy Graham crusade. The seed of a global movement is planted.", imageKey: "story.1955" },
  { year: "1957", title: "THE BEGINNING", desc: "George Verwer sells his books and boards a ship to Mexico with two friends. The movement is born from prayer and a second-hand operation.", imageKey: "story.1957" },
  { year: "1960", title: "SPAIN & SEND THE LIGHT", desc: "George and his team move to Spain, distributing literature across Europe. The vision crystallizes: mobilize the Church to reach the nations. Send the Light is born.", imageKey: "story.1960" },
  { year: "1963", title: "GOING GLOBAL", desc: "OM expands into Europe, the Middle East, and Asia. The Logos ship launches, carrying literature and workers to ports across the world.", imageKey: "story.1963" },
  { year: "1970", title: "THE LOGOS SHIP", desc: "The Logos — OM's first missionary vessel — sets sail, revolutionizing how the Gospel reaches port cities. Millions would step aboard over the next four decades.", imageKey: "story.1970" },
  { year: "1978", title: "DOULOS LAUNCHED", desc: "A second ship joins the fleet. Over the next 30 years, OM's vessels visit over 400 ports, welcoming millions aboard.", imageKey: "story.1978" },
  { year: "1981", title: "OFFICIALLY OM", desc: "Send the Light officially changes its name to Operation Mobilisation. The identity of a global mission force is forged.", imageKey: "story.1981" },
  { year: "2000s", title: "NEW FRONTIERS", desc: "OM pivots from ships to sustainable field operations — water infrastructure, medical deployment, literacy, and church planting in hard places.", imageKey: "story.2000s" },
  { year: "2023", title: "A SERVANT GOES HOME", desc: "Founder George Verwer goes to be with the Lord at age 84. His legacy: a movement of 5,800+ workers in 118 countries, still going hard.", imageKey: "story.2023" },
  { year: "TODAY", title: "5,800+ WORKERS", desc: "Operating in 118 countries. Not a charity. Not an NGO. A mission force of called servants, still going hard to the hardest places.", imageKey: "story.today" },
];

export default function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { getImage } = useSiteImages();

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
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-4"
        />
        <p className="text-xs font-mono text-titanium max-w-lg mb-12">
          One man. Two friends. A stack of books and a calling.
          This is how God built a global mission force.
        </p>

        <div className="relative lg:pl-10" ref={ref}>
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 md:gap-10 pb-12 last:pb-0"
            >
              <div className="flex flex-col items-center w-20 md:w-24 shrink-0">
                <span className="font-heading font-black text-2xl md:text-3xl text-ignition tracking-tight whitespace-nowrap">{m.year}</span>
                {i < MILESTONES.length - 1 && <div className="w-px flex-1 bg-titanium/20 mt-3" />}
              </div>
              <div className="flex-1 pt-1">
                <span className="text-[10px] font-mono text-ignition tracking-[0.15em] block mb-1">{m.title}</span>
                <p className="text-xs md:text-sm font-mono text-signal-white/60 leading-relaxed max-w-xl mb-4">{m.desc}</p>
                <div className="relative h-48 md:h-56 w-full max-w-md overflow-hidden border border-titanium/20 group">
                  <img src={getImage(m.imageKey)} alt={m.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:grayscale transition-all duration-700" />
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