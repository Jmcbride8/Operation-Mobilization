import React from "react";
import { Eye } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

export default function DimensionVision() {
  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DIMENSION 01</span>
            </div>
            <ScrambleText
              as="h2"
              text="VISION & VOICE."
              className="font-heading font-black text-[34px] md:text-[50px] lg:text-[60px] text-signal-white tracking-[-0.02em] uppercase mb-6"
            />
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-4">
              This website is a manifestation and resurrection of the fire OM once had.
              A downpayment on a vision — and a tribute to the past. Every pixel signals intent.
              Every word declares: we are back, and we mean it.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed mb-4">
              The voice had been hollowed out. Safe. Institutional. Forgettable.
              The tactical, high-stakes aesthetic you see here is not decoration — it is a declaration.
              OM is not a charity. It is a global mission force. The voice must match the mandate.
            </p>
            <p className="text-sm md:text-base font-mono text-titanium leading-relaxed">
              Sharpen the edge. Make it impossible to ignore. The vision is the weapon. Voice is how it's wielded.
            </p>
          </div>

          {/* YouTube clip spot */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Eye size={16} className="text-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE METAPHOR — EMBED CLIP HERE</span>
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
          </div>
        </div>
      </div>
    </section>
  );
}