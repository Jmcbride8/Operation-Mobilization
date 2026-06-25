import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function DimensionMissional() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DIMENSION 03</span>
        </div>
        <ScrambleText
          as="h2"
          text="MISSIONAL."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              OM has drifted into that cold and cowardly space — knowing neither victory nor defeat.
              The OM ships page is but one example: indistinguishable from a cruise ship or a kindergarten site.
              Selling entertainment, not a mission. That is not OM. That is decay wearing a smile.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              The mission is not entertainment. It is not comfort. It is the Great Commission —
              executed in the hardest places on earth, at the highest cost, for the highest purpose.
              Every surface of OM — digital, physical, verbal — must radiate that.
            </p>
          </div>

          {/* Man in the Arena */}
          <div className="border-l-2 border-ignition pl-6">
            <div className="text-[10px] font-mono text-ignition tracking-[0.3em] mb-4">THE MAN IN THE ARENA</div>
            <p className="text-sm md:text-base font-mono text-signal-white/70 leading-relaxed italic">
              "It is not the critic who counts; not the man who points out how the strong man stumbles...
              The credit belongs to the man who is actually in the arena, whose face is marred by dust and
              sweat and blood; who strives valiantly; who errs, who comes short again and again...
              who at the best knows in the end the triumph of high achievement, and who at the worst,
              if he fails, at least fails while daring greatly, so that his place shall never be with those
              <span className="text-ignition not-italic font-bold"> cold and timid souls who know neither victory nor defeat.</span>"
            </p>
            <p className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-4">
              — THEODORE ROOSEVELT, SORBONNE, 1910
            </p>
          </div>
        </div>

        {/* HQ & Wall of the Fallen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-titanium/20">
          <div className="bg-obsidian p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-ignition">RESTORE THE HQ</span>
            </div>
            <p className="text-xs font-mono text-titanium leading-relaxed">
              Restore the HQ as the physical core of the organization. Give it a mission. Give it gravity.
              Give it weight. It is a physical manifestation of decay and drift — and it must become
              a physical manifestation of fire and purpose.
            </p>
          </div>
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
              Put the people back in the mission.
            </p>
          </div>
        </div>

        <div className="mt-8 border border-ignition/40 bg-ignition/[0.04] p-6 md:p-8 text-center">
          <p className="text-lg md:text-2xl font-heading font-black text-signal-white tracking-[-0.01em]">
            SEAL TEAM 6 NEVER WORKED REMOTE.
          </p>
          <p className="text-[10px] font-mono text-titanium tracking-[0.2em] mt-2">
            PRESENCE IS STRATEGY. PROXIMITY IS CULTURE. THE HEARTH IS THE HQ.
          </p>
        </div>
      </div>
    </section>
  );
}