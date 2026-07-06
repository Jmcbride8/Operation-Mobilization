import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function FrontHQ() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden bg-signal-white/[0.01]">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">FRONT 02</span>
        </div>
        <ScrambleText
          as="h2"
          text="THE HEADQUARTERS."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              The campus was stripped of its soul. The halls went quiet. The hearth went cold.
              A building that once radiated mission became an office you commute to — or worse,
              a place you never visit at all.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              Revitalize it. Make it a place where the remote workforce wants to come back —
              not because they have to, but because they want to be part of the action.
              Recreate critical mass. Rebuild morale. Put the people back in the mission.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Presence is strategy. Proximity is culture. The hearth is the HQ.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-titanium/20">
            <div className="bg-obsidian p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-px bg-ignition" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ignition">MISSIONAL BRANDS</span>
              </div>
              <p className="text-xs font-mono text-titanium leading-relaxed">
                SpaceX, Anduril, Google, Apple — all missional brands. Unashamed of their edge.
                Manifested in their lobby and halls. OM should do the same. The space tells the story
                before anyone says a word.
              </p>
            </div>
            <div className="bg-obsidian p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-px bg-ignition" />
                <span className="text-[10px] font-mono tracking-[0.25em] text-ignition">WALL OF THE FALLEN</span>
              </div>
              <p className="text-xs font-mono text-titanium leading-relaxed">
                Add a Wall of the Fallen to regain gravitas, weight, and heritage. Rebuild the core.
                Make it missional and motivational. Send everyone through there on their journey out.
              </p>
            </div>
          </div>
        </div>

        <div className="relative border border-ignition/40 overflow-hidden">
          <img
            src="https://media.base44.com/images/public/6a39d712e094663f23e0cf53/b41f9514e_generated_image.png"
            alt="Special forces operators"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/60" />
          <div className="relative py-32 md:py-44 px-8 md:px-12 text-center flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px]">
            <p className="text-lg md:text-2xl font-heading font-black text-signal-white tracking-[-0.01em]">
              SEAL TEAM 6 NEVER WORKED REMOTE.
            </p>
            <p className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-2">
              PRESENCE IS STRATEGY. PROXIMITY IS CULTURE. THE HEARTH IS THE HQ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}