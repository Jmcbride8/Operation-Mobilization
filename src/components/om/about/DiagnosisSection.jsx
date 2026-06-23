import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: "01",
    label: "THE SYMPTOM",
    title: "A WORLD IN DESPERATION",
    imageKey: "diagnosis.symptom",
    body: "Look at the world. War. Famine. Exploitation. Abuse. Children discarded. Women oppressed. Men trapped in cycles they cannot break. Entire populations ground down by poverty, violence, and despair. These are the symptoms — the visible, measurable, undeniable symptoms of a world that has lost its way.",
    accent: "text-red-500",
    stat: "1.3 BILLION",
    statLabel: "IN MULTI-DIMENSIONAL POVERTY",
  },
  {
    id: "02",
    label: "THE CAUSE",
    title: "HEARTS BENT ON EVIL",
    imageKey: "diagnosis.cause",
    body: "Strip away the politics, the economics, the systems. Go deeper. The root is not policy. The root is not infrastructure. The root is hearts bent on evil. We are not just missing some cuddles. We live in a darkness we chose. The human heart, turned from God, hardened by lies, incapable of love on its own. Every war, every abuse, every act of exploitation — it all begins here.",
    accent: "text-titanium",
    stat: "JEREMIAH 17:9",
    statLabel: "THE HEART IS DECEITFUL ABOVE ALL THINGS",
  },
  {
    id: "03",
    label: "THE CURE",
    title: "GOD'S LOVE",
    imageKey: "diagnosis.cure",
    body: "The cure is not a program. It is not a policy. It is a person. The love of God — relentless, pursuing, sacrificial — that shatters every darkness. When a heart is filled with love, hope, and light, everything else flows from that transformation: family, culture, politics, technology, business, and entire societies. This is why we go. Not to treat symptoms. To bring the cure.",
    accent: "text-ignition",
    stat: "1 JOHN 4:16",
    statLabel: "GOD IS LOVE. WHOEVER LIVES IN LOVE LIVES IN GOD",
  },
];

export default function DiagnosisSection() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { getImage } = useSiteImages();
  const slide = SLIDES[active];

  const next = () => setActive((p) => (p + 1) % SLIDES.length);
  const prev = () => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section id="diagnosis" ref={ref} className="relative py-24 border-t border-titanium/10 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DIAGNOSIS</span>
        </div>
        <ScrambleText
          as="h2"
          text="THE SYMPTOM. THE CAUSE. THE CURE."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9] mb-12"
        />

        {/* Slide nav tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-titanium/20">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-all duration-300 ${
                i === active
                  ? "border-ignition text-signal-white"
                  : "border-transparent text-titanium hover:text-signal-white/70"
              }`}
            >
              <span className="text-[9px] font-mono tracking-[0.2em]">{s.id}</span>
              <span className="text-[10px] font-heading font-bold tracking-[0.15em]">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Slide content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-titanium/20 group">
                <img
                  src={getImage(slide.imageKey)}
                  alt={slide.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:grayscale transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] font-mono text-signal-white/40 tracking-wider">[ {slide.id} ]</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className={`text-[9px] font-mono ${slide.accent} tracking-[0.2em]`}>{slide.label}</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <ScrambleText
                key={`title-${slide.id}`}
                as="h3"
                text={slide.title}
                className={`font-heading font-black text-3xl md:text-5xl ${slide.accent} tracking-[-0.02em] uppercase leading-[0.95]`}
              />
              <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed max-w-xl">
                {slide.body}
              </p>

              {/* Stat */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="border-l-2 border-ignition pl-4 py-2"
              >
                <span className={`font-heading font-black text-2xl ${slide.accent} tracking-tight block`}>
                  {slide.stat}
                </span>
                <span className="text-[9px] font-mono text-titanium tracking-wider block mt-1">
                  {slide.statLabel}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prev}
            className="flex items-center gap-2 text-titanium hover:text-signal-white transition-colors group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-mono tracking-[0.2em]">PREV</span>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`h-px transition-all duration-300 ${
                  i === active ? "w-12 bg-ignition" : "w-6 bg-titanium/30 hover:bg-titanium/60"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex items-center gap-2 text-titanium hover:text-signal-white transition-colors group"
          >
            <span className="text-[10px] font-mono tracking-[0.2em]">NEXT</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}