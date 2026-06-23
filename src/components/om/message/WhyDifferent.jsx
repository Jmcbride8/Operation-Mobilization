import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const GROUPS = [
  {
    label: "THE BAD NEWS",
    accent: "titanium",
    cards: [
      {
        num: "01",
        title: "GOD IS INFINITELY GOOD & WE BEAR HIS IMAGE",
        desc: "God is infinitely good and created us in His image. This isn't just a philosophical idea — it means we reflect God's character. Every person carries infinite worth because they reflect an infinite God.",
      },
      {
        num: "02",
        title: "BUT THAT MAKES EVERY SIN INFINITELY SERIOUS",
        desc: "Because God is infinitely good, sin against Him (and against those made in His image) is infinitely serious. It's not just breaking rules — it's transgressing against infinite goodness, which makes the weight of sin incalculable.",
      },
      {
        num: "03",
        title: "WHICH WE COMPOUND WITH IGNORANCE AND ARROGANCE",
        desc: "Unlike other religions that call you to fix yourself through effort or discipline, Christianity teaches that finite beings cannot right an infinite wrong against a perfectly good God. To try is arrogance. You cannot earn your way back to Him.",
      },
    ],
  },
  {
    label: "THE GOOD NEWS",
    accent: "ignition",
    cards: [
      {
        num: "04",
        title: "SO GOD BRIDGED THE UNBRIDGEABLE GAP",
        desc: "Here's where Christianity is radically different: God Himself came and died to bridge the infinite gap we could never bridge. Through Jesus, God absorbed the full weight of our infinite transgression and made reconciliation possible.",
      },
      {
        num: "05",
        title: "FORGIVENESS THROUGH HUMILITY, NOT ACHIEVEMENT",
        desc: "We receive forgiveness not by performing or earning it, but by humbly acknowledging we could never bridge the gap ourselves and accepting God's free gift. It requires honest confession of our gravity and complete dependence on His mercy.",
      },
    ],
  },
  {
    label: "THANKFULNESS, NOT PENANCE",
    accent: "ignition",
    cards: [
      {
        num: "06",
        title: "AND SO WE LIVE IN GRATEFUL RESPONSE",
        desc: "Once forgiven, Christians live differently — not to earn salvation, but to demonstrate gratitude. A life transformed by grace becomes a living thank you to God. Service, love, and growth flow from having received something we never deserved.",
      },
    ],
  },
  {
    label: "PAYING IT FORWARD",
    accent: "ignition",
    cards: [
      {
        num: "07",
        title: "THE ONLY HONEST PATH OF RIGHTEOUSNESS",
        desc: "Because our good works flow from gratitude for salvation — not attempts to earn it — Christianity offers the only truly honest path of righteousness. We're freed from transactional love and empowered to live sacrificially and volitionally. The church, family, and society become places where we aspire to live out these ideals together, even when we fall short.",
      },
    ],
  },
  {
    label: "HOW WE LIVE",
    accent: "ignition",
    cards: [
      {
        num: "08",
        title: "CALLED TO FORGIVE AND HEAL AS WE WERE HEALED",
        desc: "Because we have been forgiven of infinite wrongs, we are commissioned to forgive others and heal the world as God healed us. Our purpose becomes an echo of His grace — extending mercy, pursuing justice, and mending what sin has broken.",
      },
    ],
  },
];

function MessageCard({ card, accent, index }) {
  const isBad = accent === "titanium";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`bg-obsidian p-6 border-l-2 ${isBad ? "border-titanium/30" : "border-ignition"} hover:bg-signal-white/[0.02] transition-colors`}
    >
      <span className={`text-[10px] font-mono tracking-wider ${isBad ? "text-titanium" : "text-ignition"}`}>
        [ {card.num} ]
      </span>
      <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em] mt-3 mb-3">
        {card.title}
      </h3>
      <p className="text-[11px] font-mono text-titanium leading-relaxed">{card.desc}</p>
    </motion.div>
  );
}

export default function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_01</span>
        </div>
        <ScrambleText
          as="h2"
          text="WHY CHRISTIANITY IS DIFFERENT"
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />
        <p className="text-xs md:text-sm font-mono text-titanium max-w-2xl leading-relaxed mb-8">
          If you're unfamiliar with Christianity, here are some key ideas that set it apart.
        </p>

        {/* Scripture quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 max-w-2xl border-l-2 border-r-2 border-ignition/60 px-6 md:px-12 py-6"
        >
          <p className="font-heading text-lg md:text-2xl text-signal-white italic leading-relaxed">
            "For God so loved the world that he gave his one and only Son,
            that whoever believes in him shall not perish but have eternal life."
          </p>
          <span className="block mt-3 text-[10px] font-mono tracking-[0.25em] text-ignition">
            — JOHN 3:16
          </span>
        </motion.div>

        {/* Groups */}
        <div className="space-y-12">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-6 h-px ${group.accent === "titanium" ? "bg-titanium/40" : "bg-ignition"}`} />
                <span className={`text-[10px] font-mono tracking-[0.3em] ${group.accent === "titanium" ? "text-titanium" : "text-ignition"}`}>
                  {group.label}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/15">
                {group.cards.map((card, i) => (
                  <MessageCard key={card.num} card={card} accent={group.accent} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}