import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";

const ROLES = [
  { id: "01", label: "FUNDING", desc: "Churches pool resources to send workers who could never go alone. Collective giving funds the field." },
  { id: "02", label: "SUPPORTING", desc: "Prayer coverage, pastoral care, and encouragement sustain missionaries through isolation and hardship." },
  { id: "03", label: "SENDING", desc: "Churches commission and ordain. They stand behind the worker and say: go, we are with you." },
  { id: "04", label: "JOINING", desc: "Some in the pews hear the call themselves. The church becomes a pipeline, not just a platform." },
];

const BENEFITS = [
  { title: "GLOBAL INFRASTRUCTURE", desc: "Access to 118 countries of established field operations, housing, logistics, and local networks — no startup required." },
  { title: "FIELD EXPERTISE", desc: "67 years of hard-won experience in contexts churches have never operated in. We know the terrain." },
  { title: "LEGAL & TAX", desc: "Donation processing, tax-deductible receipts, international compliance, and worker contracts handled by professionals." },
  { title: "TRAINING", desc: "Cross-cultural preparation, language acquisition, and field-ready deployment — not just enthusiasm, but equipping." },
  { title: "CRISIS RESPONSE", desc: "Extraction protocols, medical evacuation, and security infrastructure for when the field turns dangerous." },
  { title: "RETIREMENT", desc: "Long-term planning, retirement accounts, and re-entry support that outlasts a single mission term." },
];

const TRANSFORMATIONS = [
  { title: "SHARED PURPOSE", desc: "A congregation mobilized around a common mission finds unity that no program can manufacture." },
  { title: "OUTWARD FOCUS", desc: "The church turns outward. Self-preservation gives way to self-giving. Comfort yields to conviction." },
  { title: "FORWARD POSTURE", desc: "Partnership with a mission org keeps the church future-facing — engaged with the world, not insulated from it." },
  { title: "GENERATIONAL IMPACT", desc: "Children who grow up sending missionaries become adults who go. The vision compounds across generations." },
];

export default function MissionSenders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { getImage } = useSiteImages();

  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-14">
        <div className="absolute inset-0">
          <img src={getImage("mission.churches")} alt="" className="w-full h-full object-cover opacity-40 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
        </div>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE MISSION / 01</span>
          </div>
          <ScrambleText
            as="h1"
            text="THE SENDERS."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
          />
          <ScrambleText
            as="h1"
            text="CHURCHES ON MISSION."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
            delay={300}
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-xl mt-6 leading-relaxed">
            The local church is the sending body. It commissions, funds, prays,
            and releases. OM exists to serve that calling — providing the
            infrastructure the church needs to reach the nations.
          </p>
        </div>
      </section>

      {/* The Role */}
      <section className="py-24 border-t border-titanium/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE ROLE</span>
          </div>
          <ScrambleText
            as="h2"
            text="WHAT CHURCHES DO."
            className="font-heading font-black text-[36px] md:text-[50px] text-signal-white tracking-[-0.02em] uppercase mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-titanium/15">
            {ROLES.map((role, i) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-obsidian p-8 space-y-3"
              >
                <span className="text-[10px] font-mono text-ignition tracking-wider">[ {role.id} ]</span>
                <h3 className="font-heading font-black text-xl text-signal-white uppercase">{role.label}</h3>
                <p className="text-[11px] font-mono text-titanium leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Benefit */}
      <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE BENEFIT</span>
          </div>
          <ScrambleText
            as="h2"
            text="WHY PARTNER."
            className="font-heading font-black text-[36px] md:text-[50px] text-signal-white tracking-[-0.02em] uppercase mb-4"
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-2xl mb-12 leading-relaxed">
            Churches have the heart and the mandate. OM has the field experience
            and the infrastructure. Together, the gospel reaches places neither
            could reach alone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/15">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-obsidian p-8 border-t-2 border-ignition/30 hover:border-ignition transition-colors"
              >
                <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em] mb-3">{b.title}</h3>
                <p className="text-[11px] font-mono text-titanium leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section ref={ref} className="py-24 border-t border-titanium/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE TRANSFORMATION</span>
          </div>
          <ScrambleText
            as="h2"
            text="WHAT CHANGES."
            className="font-heading font-black text-[36px] md:text-[50px] text-signal-white tracking-[-0.02em] uppercase mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TRANSFORMATIONS.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border-l-2 border-ignition pl-6 py-4"
              >
                <h3 className="font-heading font-black text-xl md:text-2xl text-signal-white uppercase mb-3">{t.title}</h3>
                <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Partner */}
      <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">YOUR PARTNER</span>
            <div className="w-8 h-px bg-ignition" />
          </div>
          <ScrambleText
            as="h2"
            text="OPERATION MOBILIZATION."
            className="font-heading font-black text-[36px] md:text-[50px] text-signal-white tracking-[-0.02em] uppercase mb-4"
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-2xl mx-auto mb-8 leading-relaxed">
            Since 1957, OM has been the bridge between sending churches and the
            mission field. 5,800 workers. 118 countries. One mission.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ignition text-xs font-heading font-bold tracking-[0.2em] text-white hover:bg-ignition/90 transition-colors"
          >
            LEARN ABOUT OM <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}