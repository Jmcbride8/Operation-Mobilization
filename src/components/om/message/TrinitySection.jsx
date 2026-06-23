import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const PERSONS = [
  {
    num: "01",
    name: "THE FATHER",
    title: "SOURCE",
    desc: "The origin. Uncreated, unbegotten. The fountainhead of all love, justice, and authority. He is the will behind creation — the one who spoke and there was. He is not a force. He is a Father.",
    verse: "Matthew 6:9 — \"Our Father in heaven, hallowed be your name.\"",
  },
  {
    num: "02",
    name: "THE SON",
    title: "EXPRESSION",
    desc: "The Word. The exact imprint of the Father's nature — His image made flesh. Jesus is not a prophet pointing to God; He is God pointing at Himself. He is what God looks like when God becomes seeable.",
    verse: "John 1:1 — \"In the beginning was the Word, and the Word was with God, and the Word was God.\"",
  },
  {
    num: "03",
    name: "THE HOLY SPIRIT",
    title: "PRESENCE",
    desc: "The breath. God not just with us, but in us. The Spirit is the lived experience of God — comforter, convictor, empowerer. He is God's own life deposited into the hearts of those who believe.",
    verse: "Acts 1:8 — \"You will receive power when the Holy Spirit comes on you.\"",
  },
];

const SPECTRUM = [
  { pos: 0, label: "ATHEISM", count: "0", desc: "No god. Matter is all there is. Everything is accident." },
  { pos: 12, label: "JUDAISM / ISLAM", count: "1", desc: "One god. Strict, solitary, unified. God is one person." },
  { pos: 25, label: "CHRISTIANITY", count: "3", desc: "One God. Three Persons. Same essence. Distinct identities." },
  { pos: 50, label: "HINDUISM", count: "3M+", desc: "Thousands of gods — diverse, regional, often expressions of one." },
  { pos: 88, label: "POLYTHEISM", count: "∞", desc: "Endless gods. Every force, every fear, its own deity." },
];

export default function TrinitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_03</span>
        </div>
        <ScrambleText
          as="h2"
          text="THREE. NOT ONE. NOT MANY."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-6"
        />

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="border-l-2 border-ignition pl-6">
              <p className="text-sm md:text-base font-mono text-signal-white/90 leading-relaxed">
                Christians don't believe in three gods. Christians don't believe in one god.
                Christians believe in one God who is three Persons — Father, Son, and Holy Spirit.
              </p>
              <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed mt-4">
                This is not a math problem. It's a claim that God is, by nature, relational to His core.
                Love isn't something God decided to do — it's what God is. A solitary god could only
                start loving after creating something to love. The Trinity has loved eternally, because
                love requires an other, and God has always had an other. Three Persons, expressing every
                dimension of good, in perfect unity. One essence. Three centers of consciousness.
                Never divided. Never confused.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-2 border-r-2 border-ignition/60 px-6 py-4"
            >
              <p className="font-heading text-base md:text-lg text-signal-white italic leading-relaxed">
                "Therefore go and make disciples of all nations,
                baptizing them in the name of the Father and of the Son
                and of the Holy Spirit."
              </p>
              <span className="block mt-3 text-[10px] font-mono tracking-[0.25em] text-ignition">
                — MATTHEW 28:19
              </span>
            </motion.div>
          </div>
        </div>

        {/* Spectrum / Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE SPECTRUM</span>
          </div>
          <p className="text-xs font-mono text-titanium max-w-2xl leading-relaxed mb-8">
            On a timeline from zero to infinity, Christianity lands in a strange, specific place: three.
            Not solitary. Not scattered. One God, three Persons — relational at the root.
          </p>

          {/* Timeline bar */}
          <div className="relative h-32 border-y border-titanium/20">
            {/* Axis line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-titanium/30" />

            {/* Markers */}
            {SPECTRUM.map((item, i) => {
              const isChristian = item.label === "CHRISTIANITY";
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                  style={{ left: `${item.pos}%`, transform: "translateX(-50%)" }}
                >
                  {/* Label above */}
                  <div className="absolute bottom-1/2 mb-4 text-center w-32">
                    <span className={`block text-[10px] font-mono tracking-[0.15em] ${isChristian ? "text-ignition font-bold" : "text-titanium"}`}>
                      {item.label}
                    </span>
                    <span className={`block text-[16px] font-heading font-black mt-1 ${isChristian ? "text-signal-white" : "text-titanium/70"}`}>
                      {item.count}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className={`w-3 h-3 ${isChristian ? "bg-ignition" : "bg-titanium/50"} ${isChristian ? "ring-2 ring-ignition/30" : ""} rounded-full`} />

                  {/* Description below */}
                  <div className="absolute top-1/2 mt-4 text-center w-32">
                    <span className="text-[9px] font-mono text-titanium/50 leading-tight block">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scale labels */}
          <div className="flex justify-between mt-2">
            <span className="text-[9px] font-mono text-titanium/40 tracking-wider">0 GODS</span>
            <span className="text-[9px] font-mono text-titanium/40 tracking-wider">∞ GODS</span>
          </div>
        </div>

        {/* Three Persons */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE THREE PERSONS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-titanium/15">
            {PERSONS.map((person, i) => (
              <motion.div
                key={person.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-obsidian p-6 border-t-2 border-ignition hover:bg-signal-white/[0.02] transition-colors"
              >
                <span className="text-[10px] font-mono text-ignition tracking-wider">[ {person.num} ]</span>
                <span className="block text-[10px] font-mono text-signal-white/60 tracking-[0.15em] mt-3">{person.title}</span>
                <h3 className="font-heading font-bold text-base text-signal-white uppercase tracking-[0.02em] mt-1 mb-3">
                  {person.name}
                </h3>
                <p className="text-[11px] font-mono text-titanium leading-relaxed mb-4">{person.desc}</p>
                <div className="pt-3 mt-3 border-t border-titanium/15">
                  <span className="text-[9px] font-mono text-titanium/60 tracking-wider block">SCRIPTURE</span>
                  <span className="text-[11px] font-mono text-signal-white/80 leading-relaxed italic">{person.verse}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demystify / Differentiate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-titanium/15">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-obsidian p-8"
          >
            <span className="text-[10px] font-mono text-ignition tracking-[0.3em]">DEMYSTIFY</span>
            <h3 className="font-heading font-bold text-xl text-signal-white uppercase tracking-tight mt-3 mb-4">
              Not a Puzzle. A Personhood.
            </h3>
            <p className="text-xs font-mono text-titanium leading-relaxed">
              The Trinity isn't 1+1+1=3. It's 1×1×1=1. One essence, one will, one God —
              in three distinct relational centers. Think of it this way: you have one mind,
              but you can think, speak, and act. Those aren't three yous — they're one you
              expressed three ways. The Trinity is that, but without the metaphor's limits.
              The Father is not the Son. The Son is not the Spirit. But they share one
              identical divine nature — not three slices of divinity, but each fully God.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-obsidian p-8"
          >
            <span className="text-[10px] font-mono text-ignition tracking-[0.3em]">DIFFERENTIATE</span>
            <h3 className="font-heading font-bold text-xl text-signal-white uppercase tracking-tight mt-3 mb-4">
              Why Three Changes Everything
            </h3>
            <p className="text-xs font-mono text-titanium leading-relaxed">
              A solitary god creates out of boredom or need — he requires a creation to love,
              to communicate, to be complete. The triune God needs nothing. Love, communication,
              and relationship are eternal within Himself. He didn't create because He was lonely;
              He created because love overflows. That's why the Christian God doesn't demand
              slaves — He adopts sons. He doesn't need your worship — He invites you into a
              relationship that has existed before the stars.
            </p>
          </motion.div>
        </div>

        {/* Unity statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="font-heading text-lg md:text-2xl text-signal-white italic leading-relaxed max-w-3xl mx-auto">
            "May the grace of the Lord Jesus Christ,
            and the love of God,
            and the fellowship of the Holy Spirit
            be with you all."
          </p>
          <span className="block mt-4 text-[10px] font-mono tracking-[0.25em] text-ignition">
            — 2 CORINTHIANS 13:14
          </span>
        </motion.div>
      </div>
    </section>
  );
}