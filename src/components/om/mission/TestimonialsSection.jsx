import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import ScrambleText from "@/components/om/ScrambleText";

const TESTIMONIALS = [
  {
    persona: "CHURCH PASTOR",
    name: "Pastor Daniel R.",
    location: "Texas, USA",
    quote:
      "We wanted to send our own missionaries. Then we realized what that meant — visas, tax compliance, crisis protocols, retirement planning. OM absorbed all of it. Our people are on the field, not buried in paperwork. That's why they're indispensable to us.",
  },
  {
    persona: "MISSIONARY",
    name: "Sarah K.",
    location: "Field Worker, Central Asia",
    quote:
      "OM evacuated us before the USA embassy was able to get their people out. They had a temporary house ready for us to stay in until our family could find our footing. I didn't just have a sending agency — I had a lifeline through every stage.",
  },
  {
    persona: "SUPPORTER",
    name: "James & Mary T.",
    location: "Monthly Partners, UK",
    quote:
      "We give to missionaries, not organizations. But without OM, the missionaries we love couldn't survive the field. Tax receipts, medical coverage, crisis response — it's all invisible to us, and that's the point. They make giving simple and safe.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">VOICES FROM THE FIELD</span>
        </div>
        <ScrambleText
          as="h2"
          text="WHY OM IS INDISPENSABLE."
          className="font-heading font-black text-[36px] md:text-[50px] text-signal-white tracking-[-0.02em] uppercase mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.persona}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative border border-titanium/20 p-8 bg-obsidian hover:border-ignition/40 transition-colors group"
            >
              <Quote className="absolute top-6 right-6 text-ignition/20 group-hover:text-ignition/40 transition-colors" size={32} />

              <div className="text-[9px] font-mono tracking-[0.25em] text-ignition mb-4">{t.persona}</div>

              <p className="text-sm font-mono text-signal-white/80 leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="pt-4 border-t border-titanium/10">
                <div className="text-[11px] font-heading font-bold text-signal-white tracking-wide">{t.name}</div>
                <div className="text-[9px] font-mono text-titanium mt-0.5">{t.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}