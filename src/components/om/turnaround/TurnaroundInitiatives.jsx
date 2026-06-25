import React from "react";
import ScrambleText from "@/components/om/ScrambleText";

const INITIATIVES = [
  {
    num: "01",
    title: "DIGITAL PLATFORM",
    subtitle: "The Downpayment on a Vision",
    body: "This website is the downpayment on a vision and a promise. A digital command center that signals to the world: OM is back, and we mean it. We need funds to move to production and execute — turning this prototype into the operational nerve center of a resurgent mission force.",
    bullets: [],
  },
  {
    num: "02",
    title: "HQ REVITALIZATION & LAUNCHPAD",
    subtitle: "Reignite the Hearth",
    body: "The headquarters fell into disrepair during the COVID remote era, then was stripped of all branding and mission — intentionally demoralizing, erasing history, the mission, and the soul. We aim to reignite the smouldering embers back into the roaring hearth of the organization.",
    bullets: [
      "Commercial branded interiors — the mission, visible in every surface",
      "The Launchpad — HQ becomes a mandatory step in the journey to the field, where missionaries get amped up, trained, and meet the team who has their back before they go out like lone wolves into the far-flung places God has for them",
      "Wall of the Fallen — restoring the gravitas, weight, and heritage that was erased",
    ],
  },
  {
    num: "03",
    title: "MARKETING & RECRUITMENT",
    subtitle: "Full Tilt Offense",
    body: "Manifest this rebrand in marketing collateral and onboard retired missionary legends — the men and women who built OM — to put the fire back in the org, the soul, and to inspire and drive the next generation to the same. Full tilt offense.",
    bullets: [],
  },
  {
    num: "04",
    title: "NATIONAL EXPANSION",
    subtitle: "The Frontline Is Here",
    body: "The USA went from 90% Christian to 60%. The frontline is no longer just over there — it is here. OM has a pioneering pilot program, a proven template for partnering with churches to drive permanent revival and renewal in the USA. It fills the regional gap between local churches and international missions — leveraging the very capabilities OM built to exact the same turnaround here at home.",
    bullets: [],
  },
];

export default function TurnaroundInitiatives() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE PLAN OF ATTACK</span>
        </div>
        <ScrambleText
          as="h2"
          text="FOUR FRONTS."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-16"
        />
        <div className="space-y-px bg-titanium/20">
          {INITIATIVES.map((item) => (
            <div key={item.num} className="bg-obsidian p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <div className="text-[10px] font-mono text-ignition tracking-[0.3em] mb-2">{item.num}</div>
                  <h3 className="font-heading font-black text-2xl md:text-3xl text-signal-white uppercase tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <div className="text-[10px] font-mono text-titanium mt-2 tracking-[0.1em]">{item.subtitle}</div>
                </div>
                <div className="lg:col-span-9">
                  <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-6">
                    {item.body}
                  </p>
                  {item.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-xs md:text-sm font-mono text-signal-white/80 leading-relaxed">
                          <span className="text-ignition mt-0.5">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}