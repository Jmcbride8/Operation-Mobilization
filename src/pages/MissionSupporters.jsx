import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

const WAYS = [
  { id: "01", title: "PRAYER", desc: "The front line. Faithful intercession sustains missionaries through spiritual warfare, isolation, and burnout. No support is more vital." },
  { id: "02", title: "FINANCIAL", desc: "Monthly giving covers living costs, field expenses, and medical care. Predictable support lets missionaries focus on the mission, not the money." },
  { id: "03", title: "ENCOURAGEMENT", desc: "Letters, messages, calls. A word from home can carry a missionary through a month of hardship. Silence is the enemy of endurance." },
  { id: "04", title: "ADVOCACY", desc: "Sharing the mission with others — at church, in small groups, with friends. Supporters multiply the team by recruiting more supporters." },
];

const CONNECTIONS = [
  { title: "FIELD UPDATES", desc: "Regular reports from the field — not marketing copy, but honest accounts of what God is doing and where help is needed." },
  { title: "TRANSPARENT FINANCES", desc: "Every dollar tracked. Every missionary funded. Supporters see exactly where their giving goes and what it accomplishes." },
  { title: "DIRECT RELATIONSHIPS", desc: "OM facilitates real connection between supporters and the missionaries they back — names, faces, stories, and two-way communication." },
  { title: "PRAYER INTELLIGENCE", desc: "Specific, timely prayer requests from the field — not vague generalities, but actionable intercession for real situations." },
];

export default function MissionSupporters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { getImage } = useSiteImages();

  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-14">
        <div className="absolute inset-0">
          <img src={getImage("mission.supporters")} alt="" className="w-full h-full object-cover opacity-40 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
        </div>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE MISSION / 02</span>
          </div>
          <ScrambleText
            as="h1"
            text="THE SUPPORTERS."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
          />
          <ScrambleText
            as="h1"
            text="THE BACKBONE."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
            delay={300}
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-xl mt-6 leading-relaxed">
            No missionary goes alone. Behind every worker on the field is a
            network of believers praying, giving, and holding the rope. OM
            connects supporters directly to the field — not as donors, but as
            partners.
          </p>
        </div>
      </section>

      {/* The Role */}
      <section className="py-24 border-t border-titanium/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE ROLE</span>
          </div>
          <ScrambleText
            as="h2"
            text="HOW TO STAND."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-titanium/15">
            {WAYS.map((way, i) => (
              <motion.div
                key={way.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-obsidian p-8 md:p-10 border-t-2 border-ignition/30 space-y-3"
              >
                <span className="text-[10px] font-mono text-ignition tracking-wider">[ {way.id} ]</span>
                <h3 className="font-heading font-black text-2xl text-signal-white uppercase">{way.title}</h3>
                <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">{way.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-r-2 border-ignition/60 px-8 py-6"
          >
            <p className="font-heading text-base md:text-lg text-signal-white italic leading-relaxed">
              "I thank my God every time I remember you. In all my prayers for
              all of you, I always pray with joy because of your partnership in
              the gospel from the first day until now."
            </p>
            <span className="block mt-4 text-[10px] font-mono tracking-[0.25em] text-ignition">
              — PHILIPPIANS 1:3-5
            </span>
          </motion.div>
        </div>
      </section>

      {/* The Connection */}
      <section ref={ref} className="py-24 border-t border-titanium/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE CONNECTION</span>
          </div>
          <ScrambleText
            as="h2"
            text="OM BRIDGES THE GAP."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-4"
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-2xl mb-12 leading-relaxed">
            Supporters don't give into a void. OM connects every supporter to
            real workers on real fields with real needs — and real fruit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-titanium/15">
            {CONNECTIONS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-obsidian p-8 space-y-3"
              >
                <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em]">{c.title}</h3>
                <p className="text-[11px] font-mono text-titanium leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-titanium/10 text-center">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <ScrambleText
            as="h2"
            text="HOLD THE ROPE."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-4"
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-xl mx-auto mb-8 leading-relaxed">
            William Carey said it: "I will go down into the pit, if you will
            hold the rope." Become a supporter today.
          </p>
          <Link
            to="/give"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ignition text-xs font-heading font-bold tracking-[0.2em] text-white hover:bg-ignition/90 transition-colors"
          >
            GIVE NOW <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}