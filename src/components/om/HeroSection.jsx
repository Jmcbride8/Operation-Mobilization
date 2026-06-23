import React from "react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import CounterDisplay from "./CounterDisplay";
import MissionLogs from "./MissionLogs";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/08e8f025d_generated_image.png";
const FOOT_WASHING_IMAGE = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/08e8f025d_generated_image.png";
const OM_LOGO = "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/696c1b35a_ChatGPTImageJun22202609_23_54PM.png";

export default function HeroSection() {
  const scrollToOps = () => {
    const el = document.querySelector("#operations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDeploy = () => {
    const el = document.querySelector("#deploy");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="command" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Missionary on the field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-transparent to-obsidian/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-ignition" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">ON THE FIELD SINCE 1957</span>
              </div>

              <div className="flex justify-center mb-6">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  src={OM_LOGO}
                  alt="Operation Mobilization"
                  className="w-56 md:w-72 lg:w-80"
                />
              </div>

              <ScrambleText
                as="h1"
                text="GOD DOES HARD."
                className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-signal-white tracking-[-0.03em] uppercase leading-[0.9] text-center"
                delay={200}
              />
              <ScrambleText
                as="h1"
                text="WE GO HARD."
                className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-ignition tracking-[-0.03em] uppercase leading-[0.9] text-center"
                delay={400}
              />
            </div>

            <p className="text-xs md:text-sm font-mono text-titanium max-w-lg mx-auto leading-relaxed text-center">
              Operation Mobilization sends men and women to the hardest places on earth.
              Not tourists. Not spectators. Workers who build, train, and lay down their lives
              to see communities transformed at the root.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-4">
              <CounterDisplay target={5800} label="On the Field" />
              <CounterDisplay target={118} label="Countries" duration={1500} />
              <CounterDisplay target={67} label="Years Deployed" duration={1200} />
            </div>
          </div>

          {/* Right: Mission logs */}
          <div className="lg:col-span-5 lg:pl-8">
            <MissionLogs />
          </div>
        </div>
      </div>

      {/* Bottom CTA bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-obsidian/95 backdrop-blur-sm border-t border-titanium/20"
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <span className="text-[10px] font-mono text-titanium tracking-[0.15em] hidden md:block">
            [ THE CALL IS OPEN ]
          </span>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={scrollToDeploy}
              className="flex-1 md:flex-none px-6 py-2 bg-ignition text-xs font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
            >
              GIVE
            </button>
            <button
              onClick={scrollToDeploy}
              className="flex-1 md:flex-none px-6 py-2 bg-ignition text-xs font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
            >
              GO
            </button>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToOps}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 text-titanium hover:text-signal-white transition-colors"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}