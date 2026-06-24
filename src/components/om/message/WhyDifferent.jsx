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
        title: "GOD IS INFINITELY GOOD",
        desc: "God is infinitely good and stamped His own image onto every human being. This isn't philosophy — it's a declaration of war on the idea that people are disposable. Every person walks around carrying the fingerprint of an infinite God. That changes everything.",
      },
      {
        num: "02",
        title: "SIN IS INFINITELY SERIOUS",
        desc: "Here's the catch: if God is infinitely good, then sin against Him isn't a misdemeanor — it's an infinite offense. You don't offend infinite goodness with a slap on the wrist. The weight of our rebellion is incalculable, and no amount of good behavior tips the scale back.",
      },
      {
        num: "03",
        title: "YOU CAN'T FIX IT YOURSELF",
        desc: "Every other religion says: try harder, be better, climb your way back to God. Christianity says: that's delusional. Finite beings cannot right an infinite wrong. To think you can earn your way back to a perfectly good God isn't humility — it's the height of arrogance. The gap is unbridgeable. By us.",
      },
    ],
  },
  {
    label: "THE GOOD NEWS",
    accent: "ignition",
    cards: [
      {
        num: "04",
        title: "GOD BRIDGED THE GAP",
        desc: "Here's where Christianity flips the table on every other belief system: God didn't ask us to climb up to Him — He came down to us. Through Jesus, God Himself absorbed the full, infinite weight of our rebellion and absorbed it in His own body. He paid a debt He didn't owe because we owed a debt we couldn't pay.",
      },
      {
        num: "05",
        title: "FORGIVENESS BY HUMILITY",
        desc: "You don't earn this. You can't. Forgiveness is received the way a drowning man receives a rescue — hands up, mouth shut, completely dependent on the one who jumped in after you. It requires the honesty to confess your wreck and the humility to accept a gift you could never deserve.",
      },
    ],
  },
  {
    label: "HOW WE LIVE",
    accent: "ignition",
    cards: [
      {
        num: "06",
        title: "WE LIVE IN RESPONSE",
        desc: "Once you've been pulled out of the water, you don't swim to prove you deserved it. You live different because you've been rescued. Christians don't serve, love, and sacrifice to earn salvation — they do it because it's already been given. And that gratitude doesn't sit still. It moves. It sends. Every act of obedience becomes a living thank-you note to the God who didn't have to — and the most honest response is to carry that rescue to the ends of the earth.",
      },
      {
        num: "07",
        title: "THE ONLY HONEST PATH",
        desc: "Here's the difference nobody talks about: every other system says do good to get saved. Christianity says you're saved, so do good. That makes our righteousness the only honest kind — not a transaction, not a bribe for heaven, but a free response to grace. We're liberated from pretending and empowered to actually live sacrificially. That's why OM exists — not to earn God's favor, but because His favor is already ours. The only question left is where He's sending us next.",
      },
      {
        num: "08",
        title: "SAVED SINNERS SENT TO SAVE",
        desc: "You've been forgiven an infinite debt. So when someone wrongs you, you don't get to hold the receipt. And you don't get to stay home. Christians are commissioned — deployed — to carry the same mercy that rescued us into every dark corner of the map. To the ones who've never heard. To the places no one else will go. That's not a program. That's the inevitable consequence of having been saved. We go because we were sent. Forward.",
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
          text="CHRISTIANITY. DISTILLED."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />
        <p className="text-xs md:text-sm font-mono text-titanium max-w-2xl leading-relaxed mb-0">
          The fault, the fix, and the follow — the whole Christian message in plain language.
        </p>

        {/* Scripture quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 max-w-2xl border-l-2 border-r-2 border-ignition/60 px-6 md:px-12 py-4"
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