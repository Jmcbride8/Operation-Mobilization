import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const BRANCHES = [
  {
    id: "01",
    name: "PENTECOSTAL / CHARISMATIC",
    tagline: "THE EMOTIONAL & EXPRESSIVE",
    desc: "Vibrant, personal experience of God's presence. Joyful, expressive, interactive worship. Active work of the Holy Spirit — healing, gifts, and power for today.",
    strength: "Spiritual fire and boldness",
    verse: "Acts 1:8 — \"You will receive power when the Holy Spirit comes on you; and you will be my witnesses.\"",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/e581a8875_generated_image.png",
  },
  {
    id: "03",
    name: "BAPTIST",
    tagline: "BELIEVER'S BAPTISM & LOCAL CHURCH",
    desc: "Baptism by immersion as a public declaration of personal faith. Autonomy of the local church. Deep commitment to Scripture, evangelism, and the priesthood of every believer.",
    strength: "Convictional faith and local church vitality",
    verse: "Romans 6:4 — \"We were therefore buried with him through baptism into death, that just as Christ was raised, we too may live a new life.\"",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/e12bcff10_generated_image.png",
  },
  {
    id: "05",
    name: "REFORMED / CALVINIST",
    tagline: "SOVEREIGNTY & INTELLECT",
    desc: "Emphasis on God's ultimate control and authority. Deep theological reflection and careful study of Scripture alongside personal faith.",
    strength: "Theological rigor and discipline",
    verse: "Ephesians 1:11 — \"In Him we were also chosen, having been predestined according to the plan of Him who works out everything in conformity with His will.\"",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/38fcc4e21_generated_image.png",
  },
  {
    id: "07",
    name: "METHODIST",
    tagline: "DISCIPLINE & SOCIAL HOLINESS",
    desc: "Born from John Wesley's movement. Emphasis on personal holiness, disciplined spiritual practices, and social action. A theology of grace that moves from justification to sanctification.",
    strength: "Disciplined discipleship and social witness",
    verse: "Hebrews 12:14 — \"Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord.\"",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/4a4de1a72_generated_image.png",
  },
  {
    id: "08",
    name: "LUTHERAN",
    tagline: "JUSTIFICATION BY FAITH",
    desc: "Born from Martin Luther's Reformation. The doctrine that we are saved by grace through faith alone. Sacramental worship rooted in Scripture. Christ alone, faith alone, grace alone, Scripture alone.",
    strength: "Reformation clarity and sacramental rootedness",
    verse: "Ephesians 2:8-9 — \"For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God — not by works.\"",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/9098d4c05_generated_image.png",
  },
  {
    id: "09",
    name: "AND MANY MORE",
    tagline: "THE WHOLE BODY",
    desc: "Anglican, Episcopal, Presbyterian, Quaker, Mennonite, Seventh-day Adventist, Nazarene, Salvation Army, Vineyard, non-denominational churches — and every gathering of believers who call Jesus Lord. The body of Christ is bigger than any list. If you believe the Creed, you are already on the team.",
    strength: "The fullness of Christ's body",
    verse: "Revelation 7:9 — \"A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.\"",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop",
  },
];

function BranchCard({ branch, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-obsidian border-t-2 border-ignition hover:bg-signal-white/[0.02] transition-colors group overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={branch.image}
          alt={branch.name}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:grayscale transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent" />
        <span className="absolute top-2 left-2 text-[10px] font-mono text-ignition tracking-wider">[ {branch.id} ]</span>
        <span className="absolute top-3 right-3 text-[12px] font-mono text-signal-white tracking-[0.15em] text-right font-bold">{branch.tagline}</span>
      </div>
      <div className="p-6">
      <h3 className="font-heading font-bold text-sm text-signal-white uppercase tracking-[0.02em] mb-3">
        {branch.name}
      </h3>
      <p className="text-[11px] font-mono text-titanium leading-relaxed mb-4">{branch.desc}</p>
      <div className="pt-3 mt-3 border-t border-titanium/15">
        <span className="text-[9px] font-mono text-titanium/60 tracking-wider block">EMPHASIS VERSE</span>
        <span className="text-[11px] font-mono text-signal-white/80 leading-relaxed italic">{branch.verse}</span>
      </div>
      </div>
    </motion.div>
  );
}

export default function OneBody() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_02</span>
        </div>
        <ScrambleText
          as="h2"
          text="ONE BODY. MANY PARTS."
          className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase mb-4"
        />

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <div className="border-l-2 border-ignition pl-6">
              <p className="text-sm md:text-base font-mono text-signal-white/90 leading-relaxed">
                OM is non-denominational. If you believe the Christian Creed —
                we are on the same team. Same Savior. Same mission.
              </p>
              <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed mt-4">
                We give honor to the diversity of denominations and the strengths
                they bring to the mission of Christ. Different branches. One root.
                One Lord. One Great Commission. We don't uniform the body — we deploy it.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-2 border-r-2 border-ignition/60 px-6 py-4"
            >
              <p className="font-heading text-base md:text-lg text-signal-white italic leading-relaxed">
                "As a body, though one, has many parts,
                and all the parts form one body — so it is with Christ."
              </p>
              <span className="block mt-3 text-[10px] font-mono tracking-[0.25em] text-ignition">
                — 1 CORINTHIANS 12:12
              </span>
            </motion.div>
          </div>
        </div>

        {/* Branches grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-titanium/15">
          {BRANCHES.map((branch, i) => (
            <BranchCard key={branch.id} branch={branch} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}