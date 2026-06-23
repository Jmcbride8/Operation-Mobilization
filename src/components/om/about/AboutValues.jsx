import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const PILLARS = [
  {
    id: "01",
    title: "THE TIP OF THE SPEAR",
    desc: "OM goes where others won't. We have always chosen the hardest, most hostile, most forgotten places on earth — because that is where the love of Christ is needed most.",
  },
  {
    id: "02",
    title: "BEHIND THE IRON CURTAIN",
    desc: "During the Cold War, while the world looked away, OM operators smuggled Bibles and the Gospel behind the Iron Curtain — into Romania, the USSR, Albania. They risked everything to carry hope to the millions trapped in the dark.",
  },
  {
    id: "03",
    title: "THE COST WAS REAL",
    desc: "Men and women who served with OM were imprisoned. Some never came home. They were interrogated, beaten, and cast into cells for years — for the crime of carrying the name of Jesus where it was forbidden.",
  },
  {
    id: "04",
    title: "WE DO NOT EVACUATE THE CALLED",
    desc: "Based on our legacy of service, OM does not require you to evacuate warzones or run to safety when you feel called to stay. We don't do the bureaucratic bullshit. We put love above life. Forward.",
  },
  {
    id: "05",
    title: "WE HAVE YOUR BACK",
    desc: "OM is an organization that has your back. We are here to equip, support, send, and serve the missionaries forward-deployed to the frontlines of the faith — for as long as they are called to stand.",
  },
];

function generateCrosses(count) {
  const rows = [];
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / 24);
    const col = i % 24;
    rows.push({
      id: i,
      top: row * 26 + (col % 2 === 0 ? 0 : 6),
      left: col * (100 / 24),
      size: 10 + ((i * 7) % 5),
      opacity: 0.15 + ((i * 13) % 50) / 100,
      delay: (i % 48) * 0.015,
    });
  }
  return rows;
}

function CrossMark({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.5" y="0" width="3" height="12" fill="currentColor" />
      <rect x="0" y="4.5" width="12" height="3" fill="currentColor" />
    </svg>
  );
}

export default function AboutValues() {
  const crosses = useMemo(() => generateCrosses(240), []);

  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_02</span>
        </div>
        <ScrambleText
          as="h2"
          text="WHAT DRIVES US"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        {/* Intro statement */}
        <div className="max-w-3xl mb-16 border-l-2 border-ignition pl-6">
          <p className="text-sm md:text-base font-mono text-signal-white/90 leading-relaxed">
            OM has always been the tip of the spear of missions. We do not go
            where it is safe. We go where the love of Christ is most denied.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/15 mb-24">
          {PILLARS.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-obsidian p-6 hover:bg-signal-white/[0.02] transition-colors"
            >
              <span className="text-[10px] font-mono text-ignition tracking-wider">[ {v.id} ]</span>
              <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em] mt-3 mb-2">{v.title}</h3>
              <p className="text-[11px] font-mono text-titanium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Wall of Crosses */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE FALLEN</span>
          </div>
          <ScrambleText
            as="h3"
            text="WALL OF CROSSES"
            className="font-heading font-black text-2xl md:text-4xl text-signal-white tracking-[-0.02em] uppercase mb-2"
          />
          <p className="text-[11px] md:text-xs font-mono text-titanium max-w-2xl mb-10 leading-relaxed">
            Countless men and women laid down their lives to share Christ with OM.
            Each cross marks a servant who loved their neighbor more than themselves.
            We do not forget them. We follow them. Forward.
          </p>

          {/* The wall */}
          <div className="relative w-full h-[340px] border border-titanium/20 bg-obsidian/60 overflow-hidden">
            {/* Subtle vertical gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian pointer-events-none z-10" />

            {crosses.map((c) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: c.opacity, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: c.delay }}
                className="absolute text-ignition"
                style={{
                  top: `${c.top}px`,
                  left: `${c.left}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <CrossMark size={c.size} />
              </motion.div>
            ))}

            {/* Center tribute overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="text-center bg-obsidian/70 backdrop-blur-sm px-8 py-6 border border-ignition/40">
                <p className="font-heading font-black text-3xl md:text-5xl text-ignition tracking-[-0.02em] uppercase leading-[0.9]">
                  No Greater Love
                </p>
                <p className="text-[10px] font-mono text-titanium tracking-[0.25em] mt-3">
                  GREATER LOVE HAS NO ONE THAN THIS
                </p>
                <p className="text-[9px] font-mono text-titanium/70 tracking-[0.2em] mt-1">
                  JOHN 15:13
                </p>
              </div>
            </div>
          </div>

          <p className="text-[10px] font-mono text-titanium/60 tracking-wider mt-4 text-right">
            [ IN MEMORIAM — NAMES WITHHELD FOR SECURITY ]
          </p>
        </div>
      </div>
    </section>
  );
}