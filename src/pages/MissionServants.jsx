import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import ScrambleText from "@/components/om/ScrambleText";
import LifecycleStage from "@/components/om/mission/LifecycleStage";
import TestimonialsSection from "@/components/om/mission/TestimonialsSection";
import { useSiteImages } from "@/hooks/useSiteImages";

const STAGES = [
  {
    id: "01",
    name: "JOINING",
    imageKey: "mission.joining",
    desc: "The call becomes a conviction. You step forward — not because you're qualified, but because you're willing. OM walks with you from the first conversation, helping discern if this is a season or a lifetime.",
    omSupport: "Initial discernment conversations, application processing, and pastoral assessment to confirm fit and readiness.",
  },
  {
    id: "02",
    name: "SELECTING A FIELD",
    imageKey: "mission.joining",
    desc: "Where? Urban slums, remote villages, ships, refugee camps, creative-access nations. OM's global footprint means you're not choosing blind — you're choosing from 118 countries of lived experience.",
    omSupport: "Field consultations, needs assessments, and matching your giftings to the right mission context.",
  },
  {
    id: "03",
    name: "FUNDRAISING",
    imageKey: "mission.supporters",
    desc: "You build a team — not just donors, but partners. Prayer warriors, encouragers, monthly givers. OM provides the framework so you can focus on people, not paperwork.",
    omSupport: "Donation platform, tax-deductible receipting, donor communication tools, and fundraising coaching.",
  },
  {
    id: "04",
    name: "TRAINING",
    imageKey: "mission.training",
    desc: "Cross-cultural preparation, language acquisition, spiritual formation, and field-specific skills. You don't deploy unprepared — OM trains you for the realities you'll face.",
    omSupport: "Intensive training programs, language school partnerships, cultural orientation, and field-safety preparation.",
  },
  {
    id: "05",
    name: "DEPLOYING",
    imageKey: "mission.deploying",
    desc: "Boots on the ground. You arrive in a new country, a new culture, a new life. OM's field leaders receive you, orient you, and walk you through the first critical months of transition.",
    omSupport: "Field leadership reception, housing setup, visa and legal processing, and cultural transition support.",
  },
  {
    id: "06",
    name: "SERVICE",
    imageKey: "mission.service",
    desc: "The work itself. Evangelism, discipleship, community development, literature distribution, mercy ministry. You serve under field leadership with a team that has your back.",
    omSupport: "Ongoing field leadership, team community, pastoral care, medical coverage, and security protocols.",
  },
  {
    id: "07",
    name: "FURLOUGHS",
    imageKey: "mission.furlough",
    desc: "Scheduled returns home. Rest, reconnect with supporters, receive medical care, and recalibrate. Furlough is not a vacation — it's a strategic reset that sustains long-term service.",
    omSupport: "Furlough planning, supporter engagement scheduling, medical check-ups, and rest protocols.",
  },
  {
    id: "08",
    name: "POST-SERVICE DEBRIEFING",
    imageKey: "mission.furlough",
    desc: "Returning from the field is harder than going. Culture shock, identity questions, and reverse adjustment are real. OM provides structured debriefing to help you process and reintegrate.",
    omSupport: "Professional debriefing, re-entry counseling, transition support, and reintegration resources.",
  },
  {
    id: "09",
    name: "RETIREMENT & LIFE AFTER",
    imageKey: "mission.retirement",
    desc: "The mission doesn't end — it changes shape. Retired missionaries become mentors, advocates, and prayer warriors. OM supports the transition with retirement planning and continued community.",
    omSupport: "Retirement accounts, pension planning, continued community connection, and alumni network.",
  },
];

const BRIDGE_SERVICES = [
  "TAXES & LEGAL COMPLIANCE",
  "CRISIS EXTRACTION",
  "RETIREMENT PLANNING",
  "CULTURE SHOCK DEBRIEFING",
  "LITERATURE & RESOURCES",
  "MEDICAL COVERAGE",
];

export default function MissionServants() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { getImage } = useSiteImages();

  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-14">
        <div className="absolute inset-0">
          <img src={getImage("mission.service")} alt="" className="w-full h-full object-cover opacity-30 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 to-transparent" />
        </div>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE MISSION / 03</span>
          </div>
          <ScrambleText
            as="h1"
            text="THE SERVANTS."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
          />
          <ScrambleText
            as="h1"
            text="THE JOURNEY."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-ignition tracking-[-0.03em] uppercase leading-[0.9] mt-1"
            delay={300}
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-xl mt-6 leading-relaxed">
            From the first stirring of a call to the final debrief and beyond,
            OM walks with you through every stage of the missionary lifecycle.
            Nine stages. One partner. Full-spectrum support that churches and
            supporters alone can't provide.
          </p>
        </div>
      </section>

      {/* Intro / The Bridge */}
      <section className="py-20 border-t border-titanium/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE BRIDGE</span>
            <div className="w-8 h-px bg-ignition" />
          </div>
          <p className="text-sm md:text-base font-heading font-medium text-signal-white/90 leading-relaxed">
            Churches send. Supporters sustain. But neither is equipped to handle
            the operational realities of the field — taxes, legal compliance,
            crisis extraction, retirement, culture shock, literature logistics.
            <span className="text-ignition"> That's where OM stands.</span> We are
            the bridge between the church and the field, carrying the weight so
            the missionary can carry the gospel.
          </p>
        </div>
      </section>

      {/* Lifecycle Stages */}
      <section className="border-t border-titanium/10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">THE LIFECYCLE</span>
          </div>
          <ScrambleText
            as="h2"
            text="NINE STAGES. ONE PARTNER."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase"
          />
        </div>

        <div className="max-w-[1440px] mx-auto">
          {STAGES.map((stage, i) => (
            <LifecycleStage key={stage.id} stage={stage} index={i} getImage={getImage} />
          ))}
        </div>
      </section>

      {/* The Bridge Services */}
      <section ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">WHAT OM CARRIES</span>
          </div>
          <ScrambleText
            as="h2"
            text="THE WEIGHT WE BEAR."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-12"
          />
          <div className="flex flex-wrap gap-3">
            {BRIDGE_SERVICES.map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="px-5 py-3 border border-titanium/30 bg-obsidian hover:border-ignition transition-colors"
              >
                <span className="text-[11px] font-mono tracking-[0.15em] text-signal-white/80">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-24 border-t border-titanium/10 text-center">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <ScrambleText
            as="h2"
            text="THE CALL IS OPEN."
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-4"
          />
          <p className="text-xs md:text-sm font-mono text-titanium max-w-xl mx-auto mb-8 leading-relaxed">
            Step one is a conversation. The rest, you don't walk alone.
          </p>
          <Link
            to="/enlist"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ignition text-xs font-heading font-bold tracking-[0.2em] text-white hover:bg-ignition/90 transition-colors"
          >
            BEGIN THE JOURNEY <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}