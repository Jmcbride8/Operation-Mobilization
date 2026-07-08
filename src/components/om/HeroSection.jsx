import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScrambleText from "./ScrambleText";
import CounterDisplay from "./CounterDisplay";
import MissionLogs from "./MissionLogs";
import MissionaryTicker from "./MissionaryTicker";
import { ChevronDown } from "lucide-react";
import HeroMap from "./HeroMap";

export default function HeroSection() {
  const navigate = useNavigate();
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
      {/* Background map */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full hero-map-container">
          <HeroMap />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/30 to-obsidian/60" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 pt-24 pb-48 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-ignition" />
                <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">ON THE FIELD SINCE 1957</span>
              </div>

              <ScrambleText
                as="h1"
                text="GOD'S LOVE,"
                className="font-heading font-black text-[64px] md:text-[100px] lg:text-[130px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
                delay={200}
              />
              <ScrambleText
                as="h1"
                text="GOING GLOBAL."
                className="font-heading font-black text-[64px] md:text-[100px] lg:text-[130px] text-ignition tracking-[-0.03em] uppercase leading-[0.9]"
                delay={400}
              />
            </div>

            <p className="text-xs md:text-sm font-mono text-titanium max-w-lg leading-relaxed">
              Operation Mobilization sends men and women anywhere on earth.
              Not tourists. Not spectators. Servants, determined to take the
              love of Jesus to the ends of the earth. Do it with Doers who have Done it.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
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
              onClick={() => navigate("/give")}
              className="flex-1 md:flex-none px-6 py-2 bg-ignition text-xs font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
            >
              GIVE
            </button>
            <button
              onClick={() => navigate("/enlist")}
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
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-titanium hover:text-signal-white transition-colors"
      >
        <ChevronDown size={24} />
      </motion.button>

      {/* Missionary ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <MissionaryTicker />
      </div>
    </section>
  );
}