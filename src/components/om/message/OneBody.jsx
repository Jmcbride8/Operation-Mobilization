import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "@/components/om/ScrambleText";

const BRANCHES = [
  {
    id: "01",
    name: "PASTORS & MINISTERS",
    tagline: "SHEPHERDS OF THE FLOCK",
    desc: "Those who preach, counsel, and lead the local church. They carry the weight of spiritual oversight — feeding, guiding, and guarding the people of God with the Word.",
    strength: "Spiritual leadership and care",
    verse: "1 Peter 5:2-3 — \"Be shepherds of God's flock that is under your care, watching over them — not because you must, but because you are willing, as God wants you to be.\"",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "BUSINESS LEADERS",
    tagline: "STEWARDS OF RESOURCES",
    desc: "Entrepreneurs, executives, and managers who generate capital, create jobs, and steward resources. Their work funds the mission, sustains families, and extends the reach of the Gospel through enterprise.",
    strength: "Provision and strategic stewardship",
    verse: "Colossians 3:23 — \"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.\"",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "TRADESPEOPLE",
    tagline: "BUILDERS & MAKERS",
    desc: "Plumbers, electricians, carpenters, welders, mechanics. They build, fix, and sustain the physical world. Every pipe laid, every wire run, every structure raised is an act of service to Christ and neighbor.",
    strength: "Skilled labor and faithful craftsmanship",
    verse: "1 Thessalonians 4:11-12 — \"Make it your ambition to lead a quiet life: You should mind your own business and work with your hands, so that your daily life may win the respect of outsiders.\"",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    name: "HEALERS & CAREGIVERS",
    tagline: "HANDS OF MERCY",
    desc: "Doctors, nurses, paramedics, and caregivers who tend the sick and comfort the dying. They are the hands of the Great Physician — bringing healing, dignity, and presence to the suffering.",
    strength: "Compassion and the ministry of healing",
    verse: "Matthew 25:36 — \"I was sick and you looked after me... whatever you did for one of the least of these brothers and sisters of mine, you did for me.\"",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "05",
    name: "EDUCATORS",
    tagline: "TRAINERS OF MINDS",
    desc: "Teachers, professors, and mentors who shape the next generation. They cultivate wisdom, discipline, and truth — forming minds and character in a world desperate for both.",
    strength: "Wisdom and the formation of the next generation",
    verse: "Proverbs 22:6 — \"Train up a child in the way he should go; even when he is old he will not depart from it.\"",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "06",
    name: "ENGINEERS & TECHNICIANS",
    tagline: "ARCHITECTS OF SYSTEMS",
    desc: "Software developers, engineers, and technologists who design the systems that connect and sustain the modern world. Their work amplifies the Gospel's reach — translating truth into tools that serve millions.",
    strength: "Innovation and infrastructure for the mission",
    verse: "Exodus 31:3-5 — \"I have filled him with the Spirit of God, with wisdom, with understanding, with knowledge and with all kinds of skills — to make artistic designs.\"",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "07",
    name: "ARTISTS & MUSICIANS",
    tagline: "BEARERS OF BEAUTY",
    desc: "Painters, writers, musicians, and filmmakers who create beauty that points beyond itself. Their work carries truth, stirs the soul, and echoes the creativity of the Creator.",
    strength: "Beauty that awakens worship",
    verse: "Psalm 33:3 — \"Sing to Him a new song; play skillfully, and shout for joy.\"",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "08",
    name: "FARMERS & LABORERS",
    tagline: "CULTIVATORS OF THE EARTH",
    desc: "Those who work the land, harvest the fields, and feed the nations. Their labor is the most ancient calling — sustaining life through sweat, patience, and trust in God's provision.",
    strength: "Sustenance and the dignity of labor",
    verse: "1 Corinthians 3:7 — \"So neither the one who plants nor the one who waters is anything, but only God, who makes things grow.\"",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed74794?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "09",
    name: "AND MANY MORE",
    tagline: "THE WHOLE BODY",
    desc: "Homemakers, soldiers, scientists, athletes, cooks, lawyers, janitors, students, retirees — every ethnicity, every nation, every vocation. If your work is offered to Christ, it is holy. The body of Christ is bigger than any list. If you believe the Creed, you are already on the team.",
    strength: "The fullness of Christ's body",
    verse: "Revelation 7:9 — \"A great multitude that no one could count, from every nation, tribe, people and language, standing before the throne and before the Lamb.\"",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop",
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
                Pastors and plumbers. Surgeons and soldiers. Teachers and tradespeople.
                If you believe the Christian Creed — we are on the same team. Same Savior. Same mission.
              </p>
              <p className="text-xs md:text-sm font-mono text-titanium leading-relaxed mt-4">
                We honor the diversity of Christian vocations, ethnicities, and callings —
                every profession is noble, every contribution needed, every worker a minister.
                Different roles. One body. One Lord. One Great Commission. We don't uniform the body — we deploy it.
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