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
    desc: "Based on our legacy of service, OM does not require you to evacuate warzones or run to safety when you feel called to stay. We don't do the bureaucratic runaround. We put love above life. Forward.",
  },
  {
    id: "05",
    title: "WE HAVE YOUR BACK",
    desc: "OM is an organization that has your back. We are here to equip, support, send, and serve the missionaries forward-deployed to the frontlines of the faith — for as long as they are called to stand.",
  },
  {
    id: "06",
    title: "WE DON'T FLY SOLO",
    desc: "We partner with local churches. We are on the same team. We don't fly solo — we complement, build, and strengthen what God is already doing through His people on the ground. The local church is the lasting legacy. We serve alongside it.",
  },
];

function generateCrosses(count) {
  // Trapezoidal formation: 6 rows, wider at bottom, narrower at top
  const rows = [];
  const rowsCount = 6;
  const colsPerRow = [5, 7, 9, 11, 13, 15]; // narrows toward top
  for (let r = 0; r < rowsCount; r++) {
    const cols = colsPerRow[rowsCount - 1 - r]; // bottom row widest
    const rowWidthPct = 40 + (r / (rowsCount - 1)) * 50; // 40% top → 90% bottom... wait reverse
    const widthPct = 90 - (r / (rowsCount - 1)) * 50; // 90% at bottom (r=0), 40% at top (r=5)
    for (let c = 0; c < cols; c++) {
      const left = 50 - (widthPct / 2) + (cols > 1 ? (c / (cols - 1)) * widthPct : 0);
      rows.push({
        id: `${r}-${c}`,
        top: r * 50,
        left,
        size: 16,
        opacity: 0.7 + ((r * 13 + c * 7) % 25) / 100,
        delay: (r * 0.03 + c * 0.012),
      });
    }
  }
  return rows;
}

function CrossMark({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4.5" y="0" width="3" height="12" fill="currentColor" />
      <rect x="0" y="3.5" width="12" height="3" fill="currentColor" />
    </svg>
  );
}

export default function AboutValues() {
  const crosses = useMemo(() => generateCrosses(60), []);

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
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-2"
          />
          <p className="text-[11px] md:text-xs font-mono text-titanium max-w-2xl mb-10 leading-relaxed">
            Countless men and women laid down their lives to share Christ with OM.
            Each cross marks a servant who loved their neighbor more than themselves.
            We do not forget them. We follow them. Forward.
          </p>

          {/* The wall — dark memorial stone, white crosses, OM flags */}
          <div className="relative w-full h-[1000px] overflow-hidden"
            style={{
              backgroundColor: "#1c1c1c",
              backgroundImage: `
                radial-gradient(ellipse at 50% 20%, rgba(45,45,45,0.8) 0%, transparent 60%),
                radial-gradient(ellipse at 50% 80%, rgba(30,30,30,0.6) 0%, transparent 55%),
                linear-gradient(180deg, #222222 0%, #1c1c1c 40%, #262626 70%, #1a1a1a 100%)
              `,
            }}
          >
            {/* Subtle stone texture lines */}
            <div className="absolute inset-0 pointer-events-none z-[2]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent 0px, transparent 60px, rgba(0,0,0,0.15) 60px, rgba(0,0,0,0.15) 61px),
                  repeating-linear-gradient(90deg, transparent 0px, transparent 120px, rgba(0,0,0,0.08) 120px, rgba(0,0,0,0.08) 121px)
                `,
              }}
            />
            {/* Top lighting glow */}
            <div className="absolute inset-x-0 top-0 h-48 pointer-events-none z-[3]"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)" }}
            />
            {/* Edge vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none z-[4]" />

            {/* Left OM Flag */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 z-10 flex flex-col items-center pointer-events-none">
              {/* Pole */}
              <div className="w-[3px] bg-gradient-to-b from-[#666] via-[#444] to-[#333] relative h-full">
                {/* Spearhead finial */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "10px solid #888" }}
                />
              </div>
              {/* Flag */}
              <div className="absolute top-16 left-[3px] w-20 md:w-28 h-14 md:h-20 bg-black border-2 border-ignition flex items-center justify-center"
                style={{ boxShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-ignition flex items-center justify-center">
                  <span className="text-white font-heading font-black text-[8px] md:text-[10px] tracking-tight">OM</span>
                </div>
              </div>
            </div>

            {/* Right OM Flag */}
            <div className="absolute right-4 md:right-8 top-0 bottom-0 z-10 flex flex-col items-center pointer-events-none">
              <div className="w-[3px] bg-gradient-to-b from-[#666] via-[#444] to-[#333] relative h-full">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0"
                  style={{ borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderBottom: "10px solid #888" }}
                />
              </div>
              <div className="absolute top-16 right-[3px] w-20 md:w-28 h-14 md:h-20 bg-black border-2 border-ignition flex items-center justify-center"
                style={{ boxShadow: "-2px 2px 8px rgba(0,0,0,0.6)" }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 bg-ignition flex items-center justify-center">
                  <span className="text-white font-heading font-black text-[8px] md:text-[10px] tracking-tight">OM</span>
                </div>
              </div>
            </div>

            {/* Top branding */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-15 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-8 h-8 bg-ignition flex items-center justify-center">
                  <span className="text-white font-heading font-black text-xs">OM</span>
                </div>
                <span className="text-white font-heading font-bold text-sm md:text-lg tracking-[0.15em]">
                  OPERATION MOBILIZATION
                </span>
              </div>
              <p className="text-ignition text-[9px] md:text-[10px] font-heading tracking-[0.25em] font-bold">
                NOT A CHARITY. A MISSION FORCE.
              </p>
            </div>

            {/* Central inscription — John 15:13 */}
            <div className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 z-15 text-center w-full px-12 max-w-2xl">
              {/* Single cross above quote */}
              <div className="flex justify-center mb-4 text-white" style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.5))" }}>
                <CrossMark size={16} />
              </div>
              <p className="text-white font-heading font-bold text-sm md:text-lg tracking-[0.05em] leading-relaxed">
                GREATER LOVE HAS NO ONE THAN THIS: TO LAY DOWN ONE'S LIFE FOR ONE'S FRIENDS.
              </p>
              <p className="text-ignition text-[10px] md:text-xs font-heading tracking-[0.3em] font-bold mt-3">
                JOHN 15:13
              </p>
            </div>

            {/* Cross wall — trapezoidal formation */}
            <div className="absolute top-[33%] left-1/2 -translate-x-1/2 z-10 w-full max-w-3xl h-[340px]">
              {crosses.map((c) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.3 }}
                  whileInView={{ opacity: c.opacity, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: c.delay }}
                  className="absolute text-white"
                  style={{
                    top: `${c.top}px`,
                    left: `${c.left}%`,
                    transform: "translateX(-50%)",
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.6)) drop-shadow(0 0 1px rgba(255,255,255,0.2))",
                  }}
                >
                  <CrossMark size={c.size} />
                </motion.div>
              ))}
            </div>

            {/* Memorial book display */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
              <div className="relative"
                style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.7))" }}
              >
                {/* Glass case */}
                <div className="bg-black/90 border border-[#444] px-10 py-6"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
                >
                  {/* Open book */}
                  <div className="flex">
                    <div className="w-20 h-12 bg-[#2a2a2a] border-r border-[#444] flex items-center justify-center">
                      <div className="w-14 h-[2px] bg-[#555] mb-1" />
                    </div>
                    <div className="w-20 h-12 bg-[#2a2a2a] flex items-center justify-center">
                      <div className="w-14 h-[2px] bg-[#555] mb-1" />
                    </div>
                  </div>
                </div>
                {/* Shelf */}
                <div className="h-2 bg-gradient-to-b from-[#333] to-[#1a1a1a] -mx-2" />
                <div className="h-1 bg-[#111]" />
              </div>
              <p className="text-center text-[9px] font-mono text-titanium tracking-[0.2em] mt-3">
                [ THE BOOK OF THE FALLEN ]
              </p>
            </div>

            {/* Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-20 z-0"
              style={{
                background: "linear-gradient(180deg, #1a1a1a 0%, #0e0e0e 100%)",
                backgroundImage: `
                  repeating-linear-gradient(90deg, #222 0px, #222 60px, #1a1a1a 60px, #1a1a1a 120px)
                `,
              }}
            />
            {/* Darker floor inset centered beneath memorial */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-20 z-0"
              style={{
                background: "linear-gradient(180deg, #111 0%, #050505 100%)",
              }}
            />
          </div>

          <p className="text-[10px] font-mono text-titanium/60 tracking-wider mt-4 text-right">
            [ IN MEMORIAM — NAMES WITHHELD FOR SECURITY ]
          </p>
        </div>
      </div>
    </section>
  );
}