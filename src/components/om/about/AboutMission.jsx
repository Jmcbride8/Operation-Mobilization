import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const MISSION_IMAGE = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/9d8f7d593_generated_image.png";

export default function AboutMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="relative py-24 border-t border-titanium/10 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={MISSION_IMAGE} alt="Missionary serving in a remote village" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian" />
      </div>
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">OUR MISSION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <ScrambleText
              as="h2"
              text="GOD'S LOVE,"
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
            />
            <ScrambleText
              as="h2"
              text="GOING GLOBAL."
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.9]"
              delay={300}
            />
          </div>
          <div className="lg:col-span-5 lg:pt-6 space-y-5">
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              Before He ascended, Jesus gave His followers a single, unmistakable
              command: <span className="text-signal-white">"Go and make disciples of all nations."</span> That
              Great Commission is not a suggestion. It is the Church's standing
              order — the reason we exist.
            </p>
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              The deepest poverty is not physical. It is spiritual. Billions have
              been told by their culture, their religion, their circumstances,
              that they are not loved — that love must be earned, that they will
              never be enough. They carry the weight of that lie every single day.
              It is a poverty no well can fill, no road can reach, no clinic can
              cure.
            </p>
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              The greatest transformation you can make is to change a person's
              heart. To fill it with <span className="text-signal-white">love</span>. <span className="text-signal-white">Hope</span>. <span className="text-signal-white">Light</span>.
              And everything else flows from that transformation — family, culture,
              politics, technology, business, and yes, even entire societies.
            </p>
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              We go to the hardest places on earth. We bring clean water, medical
              care, and practical help — but these are the fruit, not the root. The
              root is a message that shatters every lie: <span className="text-signal-white">you are loved. You
              have always been loved. And the love of God is already pursuing you.</span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border-l-2 border-ignition pl-4 py-2"
            >
              <p className="text-xs md:text-sm font-mono text-signal-white/80 italic leading-relaxed">
                "Go therefore and make disciples of all the nations, baptizing them
                in the name of the Father and of the Son and of the Holy Spirit."
              </p>
              <span className="text-[9px] font-mono text-titanium tracking-wider block mt-2">MATTHEW 28:19</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}