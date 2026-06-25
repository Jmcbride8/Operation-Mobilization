import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function RecapitalizeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545048702-79362596cdc9?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50" />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">CONFIDENTIAL — FOR THE CEO & BOARD</span>
          </div>
          <ScrambleText
            as="h1"
            text="REVITALIZE & RECAPITALIZE."
            className="font-heading font-black text-[40px] md:text-[60px] lg:text-[72px] text-signal-white tracking-[-0.02em] uppercase leading-[0.95]"
          />
          <p className="mt-6 text-lg md:text-xl font-heading font-bold text-ignition tracking-[-0.01em]">
            Re·vital·ize /rēˈvīd(ə)līz/: to imbue with new life and vitality. &nbsp;&nbsp; Re·ca·pit·al·ize /ˌrēkəˈpit(ə)lˌīz/: to furnish with new capital; to restructure and rebuild from the ground up.
          </p>
          <p className="mt-8 text-sm md:text-base font-mono text-titanium leading-relaxed max-w-2xl">
            A consultant's letter to leadership. Not a postmortem — a battle plan.
            Own the past. Turn the page hard. Seize the moment to build OM 2.0 —
            reborn, rearmed, and unashamed.
          </p>
        </div>
      </div>
    </section>
  );
}