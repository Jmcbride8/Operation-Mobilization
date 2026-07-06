import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

export default function FrontRecruitment() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden bg-signal-white/[0.01]">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">FRONT 03</span>
        </div>
        <ScrambleText
          as="h2"
          text="RECRUITMENT."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
              100% of missionaries found OM through the website — and that is the problem.
              There is no active recruitment. No offense. No momentum. A mission force that
              does not recruit is a mission force in retreat.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Rebuild the recruitment team. Go to churches. Go to campuses. Go to the places
              where the called are waiting. Build the pipeline. Market the mission. Scale the
              force. Go on offense.
            </p>
          </div>

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

        <div className="border-l-2 border-ignition pl-6 md:pl-8 py-4 mb-12">
          <p className="text-2xl md:text-4xl font-heading font-black text-signal-white leading-tight tracking-[-0.02em]">
            GOD WENT HARD.
          </p>
          <p className="text-lg md:text-2xl font-heading font-bold text-ignition mt-2 tracking-[-0.01em]">
            So should we.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-titanium/20">
          {[
            { stat: "90%", label: "US CHRISTIAN (CIRCA 1990)", sub: "The sending nation" },
            { stat: "60%", label: "US CHRISTIAN (TODAY)", sub: "The mission field" },
            { stat: "30PT", label: "DECLINE IN ONE GENERATION", sub: "The frontline moved home" },
            { stat: "100%", label: "MISSIONARIES FROM THE WEBSITE", sub: "No active recruitment. Yet." },
          ].map((item, i) => (
            <div key={i} className="bg-obsidian p-6 text-center">
              <div className="font-heading font-black text-3xl md:text-4xl text-ignition tracking-[-0.02em] mb-2">
                {item.stat}
              </div>
              <div className="text-[9px] font-mono text-signal-white tracking-[0.2em] mb-1">{item.label}</div>
              <div className="text-[9px] font-mono text-titanium">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}