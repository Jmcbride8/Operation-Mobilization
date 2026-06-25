import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Zap, DollarSign } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

const STEPS = [
  {
    num: "01",
    icon: FileText,
    title: "CHARTER",
    body: "Formalize OM 2.0. Define the mission, the standard, the non-negotiables. Write the charter that the board signs, the team rallies behind, and donors can see. Own the past. Declare the future. Make it binding.",
    action: "DRAFT THE CHARTER",
  },
  {
    num: "02",
    icon: Zap,
    title: "MOBILIZE",
    body: "Deploy the rebrand. Restore the HQ. Rebuild the Launchpad. Onboard the legends. Send every missionary through the hearth before the field. Put the people back in the mission. Presence is strategy. Proximity is culture.",
    action: "MOBILIZE THE FORCE",
  },
  {
    num: "03",
    icon: DollarSign,
    title: "INVEST",
    body: "Fund the four fronts. Capital in, execution out, turnaround delivered. Lead donors unlock Phases 1-2. Monthly sustainers keep the hearth burning. Every dollar mapped to a front. Every front mapped to a phase.",
    action: "CAPITALIZE THE RESURGENCE",
  },
];

export default function RecapitalizeCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-32 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ignition/5 to-transparent" />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE CALL TO ACTION</span>
            <div className="w-8 h-px bg-ignition" />
          </div>
          <ScrambleText
            as="h2"
            text="THREE MOVES."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
          />
          <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-2xl mx-auto">
            The moment is here. The recipe is known. The team is assembled.
            These are the three moves that turn momentum into a movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-titanium/20 mb-16">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="bg-obsidian p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} className="text-ignition" />
                  <span className="text-[10px] font-mono text-ignition tracking-[0.3em]">{step.num}</span>
                </div>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-signal-white uppercase tracking-[-0.01em] mb-4">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed mb-8 flex-grow">
                  {step.body}
                </p>
                <a
                  href="mailto:recapitalize@om.org?subject=OM 2.0 — Charter, Mobilize, Invest"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-ignition/40 text-ignition font-heading font-bold text-[10px] tracking-[0.2em] hover:bg-ignition hover:text-white transition-colors"
                >
                  {step.action}
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-2xl font-heading font-bold text-signal-white leading-relaxed max-w-3xl mx-auto mb-8">
            Capitalize on the momentum. Recapitalize to resurge.
            The embers are smouldering. The hearth is waiting.
            <span className="text-ignition"> Reignite it.</span>
          </p>
          <p className="text-[9px] font-mono text-titanium/40 tracking-[0.2em]">
            OPERATION MOBILIZATION // EST. 1957 // OM 2.0 BEGINS
          </p>
        </div>
      </div>
    </section>
  );
}