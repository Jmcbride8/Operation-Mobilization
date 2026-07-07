import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Flame, Users, DollarSign } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

const CARDS = [
  {
    icon: Flame,
    label: "THE STORY",
    title: "A NARRATIVE DONORS CAN'T IGNORE",
    body: "Before this moment, OM had a ho-hum carry-on story — another year, another appeal, another decline. Now you have a saga. A fall. A turnaround. A resurgence. People don't give to maintenance. They give to momentum. They give to moments that matter. This is that moment.",
  },
  {
    icon: Users,
    label: "THE MOVEMENT",
    title: "PEOPLE WANT IN",
    body: "People want to participate in this kind of moment. A resurgence isn't something you apologize for — it's something you invite people into. Donors, churches, retired missionaries, the next generation. The door is open. The story is the key. Open it wide.",
  },
  {
    icon: DollarSign,
    label: "THE LEVERAGE",
    title: "FUNDRAISING AS OFFENSE",
    body: "This is not a rescue appeal. This is a capital raise. The difference is everything. A rescue says 'please help us survive.' A capital raise says 'join us in building something bigger, badder, awesomer.' The resurgence gives you the leverage to ask boldly — and to receive boldly.",
  },
  {
    icon: TrendingUp,
    label: "THE FUTURE",
    title: "A BIGGER, BOLDER OM",
    body: "Not just a rebirth — a resurgence. Not just recovery — a whole-of-organization push. If leveraged across every field, every sending country, every church partner, this story becomes the greatest capital-raising vehicle OM has ever had. The future isn't smaller. It's bigger, badder, awesomer.",
  },
];

export default function RecapitalizeOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE OPPORTUNITY</span>
        </div>
        <ScrambleText
          as="h2"
          text="NOT REBIRTH. RESURGENCE."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />
        <p className="text-sm md:text-base font-mono text-titanium leading-relaxed max-w-3xl mb-16">
          The dark night could have been the end. Instead, it's the setup for the greatest story OM has ever told.
          A rebirth is quiet — a resurgence is loud. People don't rally around quiet. They rally around a moment
          that demands their participation. This is that moment, and the board holds the key.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-titanium/20">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-obsidian p-8 md:p-10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon size={20} className="text-ignition" />
                  <span className="text-[10px] font-mono text-ignition tracking-[0.3em]">{card.label}</span>
                </div>
                <h3 className="font-heading font-black text-xl md:text-2xl text-signal-white uppercase tracking-[-0.01em] mb-4">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 border-l-2 border-ignition pl-6 py-2"
        >
          <p className="text-base md:text-lg font-heading font-bold text-signal-white leading-relaxed">
            Before: "Please help us keep going." After: "Join the resurgence."
            <span className="text-ignition"> That's the difference. That's the opportunity.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}