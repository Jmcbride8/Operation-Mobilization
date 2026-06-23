import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";

const HEROES = [
  {
    name: "THE APOSTLE PAUL",
    years: "C. 5 — C. 67 AD",
    field: "THE ROMAN WORLD",
    stat: "10,000+ MILES ON FOOT",
    sacrifice:
      "The prototype. A Pharisee who met the risen Christ on a road and was never the same. Walked ten thousand miles across the Roman Empire. Shipwrecked. Beaten. Imprisoned. Stoned and left for dead. Wrote half the New Testament from jail cells. He was beheaded in Rome under Nero, and his letters outlived the Empire that killed him.",
    quote: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/7198696f7_generated_image.png",
  },
  {
    name: "WILLIAM CAREY",
    years: "1761 — 1834",
    field: "BENGAL, INDIA",
    stat: "FATHER OF MODERN MISSIONS",
    sacrifice:
      "Shoemaker turned missionary. Told to sit down by men who believed the age of missions had passed. He didn't. Arrived in India and lost his five-year-old son to disease, then his wife to madness. Translated the Scriptures into Bengali, Sanskrit, and dozens more. He worked for forty years without returning home. He ended the practice of sati — the burning of widows.",
    quote: "Expect great things from God. Attempt great things for God.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/d1f83d3b0_generated_image.png",
  },
  {
    name: "DAVID LIVINGSTONE",
    years: "1813 — 1873",
    field: "SUB-SAHARAN AFRICA",
    stat: "30,000+ MILES WALKED",
    sacrifice:
      "Medical missionary. Explorer. Walked a continent that had no maps. Carried the gospel where no European had stood. His body broken by disease, by lion, by years. Found dead, kneeling by his bed in prayer. They carried his body to England. His heart they buried in the soil of Africa.",
    quote: "I will go anywhere, provided it be forward.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/01f8a3506_generated_image.png",
  },
  {
    name: "HUDSON TAYLOR",
    years: "1832 — 1905",
    field: "INLAND CHINA",
    stat: "800+ WORKERS SENT",
    sacrifice:
      "Left England at twenty-one. Founded the China Inland Mission. Adopted Chinese dress, Chinese customs, Chinese language — so the gospel would not arrive as a foreign thing. Lost his wife and children to disease. Served fifty-one years in a land that buried him.",
    quote: "God's work done in God's way will never lack God's supply.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/7122bdb5b_generated_image.png",
  },
  {
    name: "AMY CARMICHAEL",
    years: "1867 — 1951",
    field: "SOUTH INDIA",
    stat: "55 YEARS. NO FURLOUGH.",
    sacrifice:
      "Served fifty-five years in India without once going home. Darkened her skin, wore Indian dress, built the Dohnavur Fellowship. Rescued hundreds of children from temple prostitution. She never married. She never left. She gave her life away one child at a time.",
    quote: "You can give without loving. But you cannot love without giving.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/4aec35b71_generated_image.png",
  },
  {
    name: "SAINT & ELLIOT",
    years: "1956 — ECUADOR",
    field: "AMAZON BASIN",
    stat: "MARTYRED TOGETHER. RIVERBANK.",
    sacrifice:
      "Nate Saint — pilot, inventor, thirty-two. Jim Elliot — twenty-eight. They reached out to the Waorani people no outsider had met in peace. For months Saint circled his plane overhead, lowering gifts on a line. On January 8, 1956, they landed on a sandbar. The spears came. Five men fell. But the story didn't end — Elliot's widow Elisabeth returned to live among the people who killed her husband. They came to know the God who sent them.",
    quote: "He is no fool who gives what he cannot keep to gain what he cannot lose.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/f711e1ed1_generated_image.png",
  },
  {
    name: "GEORGE VERWER",
    years: "1938 — 2023",
    field: "THE WHOLE WORLD",
    stat: "FOUNDER, OPERATION MOBILIZATION",
    sacrifice:
      "Received a Gospel of John at fourteen. Gave his life to Christ at a Billy Graham rally. Sold his record collection to buy Bibles. Founded Operation Mobilization — what began as a handful of students became a force of thousands representing 110 nationalities across 118 countries. He wore a globe jacket and prayed like a man on fire. He never stopped until his body gave out. The mission he built continues without him.",
    quote: "We need a new generation of revolutionaries who will go to the ends of the earth.",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/7ba33378b_generated_image.png",
  },
];

function HeroCard({ hero, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border border-titanium/20 bg-obsidian group"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        {/* Index number */}
        <span className="absolute top-3 left-3 text-[9px] font-mono text-titanium/50 tracking-wider">
          [ {String(index + 1).padStart(2, "0")} / {String(HEROES.length).padStart(2, "0")} ]
        </span>
        <span className="absolute top-3 right-3 text-[9px] font-mono text-ignition tracking-wider">
          {hero.field}
        </span>

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-[9px] font-mono text-titanium tracking-[0.2em] block">
            {hero.years}
          </span>
          <h3 className="font-heading font-black text-lg md:text-xl text-signal-white uppercase tracking-tight leading-tight mt-1">
            {hero.name}
          </h3>
          <span className="text-[10px] font-mono text-ignition tracking-wider mt-1 block">
            {hero.stat}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        <p className="text-[11px] font-mono text-signal-white/60 leading-relaxed">
          {hero.sacrifice}
        </p>

        {/* Quote */}
        <div className="pt-3 border-t border-titanium/10">
          <div className="flex gap-2">
            <span className="text-ignition font-heading font-black text-lg leading-none flex-shrink-0">"</span>
            <p className="text-[11px] font-mono text-signal-white italic leading-relaxed">
              {hero.quote}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HallOfFaith() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToDeploy = () => {
    const el = document.querySelector("#deploy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="lineage" ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_06</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8">
            <span className="text-[10px] font-mono tracking-[0.3em] text-titanium block mb-3">
              THE GREATEST TRADITION
            </span>
            <ScrambleText
              as="h2"
              text="GIVING YOUR LIFE"
              className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
            />
            <ScrambleText
              as="h2"
              text="FOR THEIRS."
              className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
              delay={300}
            />
          </div>
          <div className="lg:col-span-4 lg:pt-4">
            <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">
              A generation forgot their names. We will not. These are the ones who went before —
              who counted the cost, paid the price, and never came back the same. They are not
              relics. They are the standard.
            </p>
          </div>
        </div>

        {/* Manifesto block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-l-2 border-ignition pl-6 mb-16 max-w-3xl"
        >
          <p className="text-sm md:text-base font-heading font-medium text-signal-white/90 leading-relaxed">
            For too long, popular culture has whispered that missionaries were naïve, or
            colonial, or worse — irrelevant. We say otherwise. They walked into the unknown
            with no return ticket. They buried their children in foreign soil. They gave their
            lives to people who never asked for them. <span className="text-ignition">That is not foolishness. That is glory.</span>
          </p>
        </motion.div>

        {/* Hero cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HEROES.map((hero, i) => (
            <HeroCard key={hero.name} hero={hero} index={i} />
          ))}

          {/* Closing CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: HEROES.length * 0.1 }}
            className="border border-ignition/40 bg-ignition/[0.03] flex flex-col items-center justify-center text-center p-8 min-h-[300px]"
          >
            <span className="text-[9px] font-mono text-titanium tracking-[0.2em] mb-4">
              [ POSITION OPEN ]
            </span>
            <h3 className="font-heading font-black text-xl md:text-2xl text-signal-white uppercase tracking-tight leading-tight">
              THE NEXT NAME
              <br />
              <span className="text-ignition">IS YOURS.</span>
            </h3>
            <p className="text-[11px] font-mono text-titanium leading-relaxed mt-3 mb-6 max-w-xs">
              The lineage does not end with them. It passes to whoever will pick it up.
              Count the cost. Pay the price. Go.
            </p>
            <button
              onClick={scrollToDeploy}
              className="px-6 py-2.5 bg-ignition text-xs font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
            >
              TAKE YOUR PLACE
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}