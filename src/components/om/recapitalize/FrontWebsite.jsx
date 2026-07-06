import React from "react";
import { Eye } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

export default function FrontWebsite() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">FRONT 01</span>
            </div>
            <ScrambleText
              as="h2"
              text="THE WEBSITE."
              className="font-heading font-black text-[34px] md:text-[50px] lg:text-[60px] text-signal-white tracking-[-0.02em] uppercase mb-6"
            />
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-4">
              100% of current missionaries found OM through this website. Every single one.
              There is no active recruitment pipeline — no teams going to churches, no campus
              tours, no dedicated force bringing people in. That is a vulnerability. But it is
              also what makes this site the highest-leverage asset OM owns.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-4">
              This is not a brochure. It is a public pronouncement. Every section published is
              a commitment made to the world — and to the team. The plan, the standard, the
              fire — all declared in the open. You cannot quietly retreat from what is written
              here. That is the point.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Cross the Rubicon. The moment this goes live, there is no going back.
              No safe half-measures. No lukewarm middle. The website is the line in the sand.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Eye size={16} className="text-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">YOUR FINGERS WOULD REMEMBER THEIR OLD STRENGTH, IF YOU HELD YOUR SWORD AGAIN</span>
            </div>
            <div className="aspect-video relative bg-black border border-titanium/20 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/4JEC08MUiqY?si=Od8SUIedtB--pxlG"
                title="Your fingers would remember their old strength if they grasped the sword"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="border border-ignition/40 bg-ignition/[0.04] p-6 mt-4">
              <div className="text-[10px] font-mono text-ignition tracking-[0.3em] mb-3">REVELATION 3:16</div>
              <p className="text-base md:text-lg font-heading font-bold text-signal-white leading-relaxed">
                "So, because you are lukewarm — neither hot nor cold — I am about to spit you out of my mouth."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}