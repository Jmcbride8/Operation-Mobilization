import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const LINE_ITEMS = [
  {
    num: "01",
    front: "DIGITAL PLATFORM",
    items: [
      { label: "Production build & infrastructure", amount: "$75K" },
      { label: "Secure missionary portal & field comms", amount: "$50K" },
      { label: "Donation processing pipeline", amount: "$25K" },
      { label: "Content & storytelling engine", amount: "$20K" },
    ],
    total: "$170K",
    phase: "PHASE 1 — IMMEDIATE",
  },
  {
    num: "02",
    front: "HQ REVITALIZATION & LAUNCHPAD",
    items: [
      { label: "Branded commercial interiors", amount: "$180K" },
      { label: "Wall of the Fallen — marble memorial", amount: "$45K" },
      { label: "Launchpad training facility", amount: "$90K" },
      { label: "Mission heritage restoration", amount: "$35K" },
    ],
    total: "$350K",
    phase: "PHASE 1 — IMMEDIATE",
  },
  {
    num: "03",
    front: "MARKETING & RECRUITMENT",
    items: [
      { label: "Multi-channel campaign production", amount: "$120K" },
      { label: "Missionary legend ambassador program", amount: "$60K" },
      { label: "Recruitment funnel infrastructure", amount: "$40K" },
      { label: "Documentary & legacy content", amount: "$80K" },
    ],
    total: "$300K",
    phase: "PHASE 2 — MONTHS 3-9",
  },
  {
    num: "04",
    front: "NATIONAL EXPANSION",
    items: [
      { label: "First 3 regional hub launches", amount: "$450K" },
      { label: "Church partnership framework", amount: "$75K" },
      { label: "Regional staff deployment (Year 1)", amount: "$240K" },
      { label: "Impact measurement & playbook", amount: "$35K" },
    ],
    total: "$800K",
    phase: "PHASE 3 — YEAR 1-3",
  },
];

const TOTAL_RAISE = LINE_ITEMS.reduce((sum, item) => {
  return sum + parseInt(item.total.replace(/[^0-9]/g, ""));
}, 0);

export default function TurnaroundCapitalPlan() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">CAPITAL DEPLOYMENT</span>
        </div>
        <ScrambleText
          as="h2"
          text="THE CAPITAL PLAN."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />
        <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-3xl mb-16">
          Every dollar mapped to a front. Every front mapped to a phase. This is not a vague appeal — it's a
          deployment schedule. Capital in, execution out, turnaround delivered.
        </p>

        <div className="space-y-px bg-titanium/20 mb-12">
          {LINE_ITEMS.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-obsidian"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: front identity */}
                <div className="lg:col-span-3 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-titanium/20">
                  <div className="text-[10px] font-mono text-ignition tracking-[0.3em] mb-2">{item.num}</div>
                  <h3 className="font-heading font-black text-lg md:text-xl text-signal-white uppercase tracking-[-0.01em] mb-3">
                    {item.front}
                  </h3>
                  <div className="text-[9px] font-mono text-titanium tracking-[0.15em]">{item.phase}</div>
                </div>

                {/* Middle: line items */}
                <div className="lg:col-span-7 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-titanium/20">
                  <div className="space-y-2">
                    {item.items.map((li, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-4 py-1.5 border-b border-titanium/10 last:border-0">
                        <span className="text-xs md:text-sm font-mono text-signal-white/70 leading-relaxed">{li.label}</span>
                        <span className="text-xs md:text-sm font-mono text-signal-white font-bold whitespace-nowrap">{li.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: subtotal */}
                <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center items-start lg:items-end">
                  <div className="text-[9px] font-mono text-titanium tracking-[0.25em] mb-1">FRONT TOTAL</div>
                  <div className="font-heading font-black text-2xl md:text-3xl text-ignition tracking-[-0.02em]">{item.total}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grand total bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border border-ignition/40 bg-ignition/[0.04] p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-ignition tracking-[0.3em] mb-1">TOTAL CAPITAL REQUIREMENT</div>
              <div className="text-xs font-mono text-titanium leading-relaxed max-w-xl">
                Fully funded across all four fronts over 3 years. Phase-gated execution — capital released as milestones are hit, not as lump sums.
              </div>
            </div>
            <div className="text-right">
              <div className="font-heading font-black text-4xl md:text-5xl text-signal-white tracking-[-0.03em]">
                ${TOTAL_RAISE.toLocaleString()}K
              </div>
            </div>
          </div>
        </motion.div>

        {/* Funding structure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-titanium/20 mt-12">
          {[
            {
              title: "PHASE-GATED",
              body: "Capital is released front-by-front as milestones are met. No front receives full funding until the prior phase is executed. Accountability is structural, not aspirational.",
            },
            {
              title: "LEAD DONOR TIERS",
              body: "Anchor gifts of $100K+ unlock immediate execution on Phases 1-2. Named recognition on the Wall of the Fallen and the digital command center for lead capital partners.",
            },
            {
              title: "MONTHLY SUSTAINERS",
              body: "The resurgence is not a one-time raise — it's a movement. Monthly sustainers fund the ongoing operations that keep every front alive after the capital deployment lands.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className="bg-obsidian p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-px bg-ignition" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ignition">{card.title}</span>
              </div>
              <p className="text-xs font-mono text-titanium leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}