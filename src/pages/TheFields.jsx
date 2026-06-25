import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Anchor, MapPin } from "lucide-react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import DataOverlay from "@/components/om/DataOverlay";
import ScrambleText from "@/components/om/ScrambleText";
import { useSiteImages } from "@/hooks/useSiteImages";
import { base44 } from "@/api/base44Client";
import CriteriaBars, { COUNTRY_CRITERIA, SHIP_CRITERIA } from "@/components/om/fields/CriteriaBars";

const SHIPS = [
  {
    name: "MV Logos Hope",
    status: "ACTIVE",
    launched: "2004",
    image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1200&q=80",
    desc: "The largest book fair ship in the world. Currently serving ports across the globe, carrying over 5,000 crew and volunteers through her decks since launch.",
  },
  {
    name: "MV Doulos",
    status: "DECOMMISSIONED",
    launched: "1978",
    image: "https://media.base44.com/images/public/6a39d712e094663f23e0cf53/c2c3841a3_image.png",
    desc: "Served for 31 years as the world's oldest active ocean-going passenger ship. Visited over 100 countries before retirement in 2009.",
  },
  {
    name: "MV Logos II",
    status: "DECOMMISSIONED",
    launched: "1988",
    image: "https://images.unsplash.com/photo-1572730120360-41b79a7d8ca2?auto=format&fit=crop&w=1200&q=80",
    desc: "Served 20 years visiting ports in the Americas, Europe, and Africa. Retired in 2008 after welcoming over 10 million visitors.",
  },
  {
    name: "MV Logos",
    status: "DECOMMISSIONED",
    launched: "1970",
    image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=1200&q=80",
    desc: "OM's first ship. Sailed for 18 years before being retired in 1988 after running aground off Tierra del Fuego.",
  },
];

export default function TheFields() {
  const { getImage } = useSiteImages();
  const heroImage = getImage("fields.hero");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await base44.entities.Country.list("display_order", 200);
        setCountries(data);
      } catch (e) {
        setCountries([]);
      }
      setLoading(false);
    };
    loadCountries();
  }, []);

  const totalLand = countries.reduce((sum, c) => sum + (c.missionaries || 0), 0);

  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <DataOverlay />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-14">
        <div className="absolute inset-0">
          <img src={heroImage} alt="The Fields" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/70 dark:from-black/30 dark:via-black/20 dark:to-black/70" />
        </div>
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">DEPLOYMENT ZONES</span>
            <div className="w-8 h-px bg-ignition" />
          </div>
          <ScrambleText
            as="h1"
            text="THE FIELDS"
            className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.03em] uppercase leading-[0.9]"
          />
          <p className="mt-8 text-xs md:text-sm font-mono text-titanium max-w-xl mx-auto leading-relaxed">
            Where the workers are deployed. By land and by sea —
            the harvest fields are vast, and the laborers are few.
          </p>
        </div>
      </section>

      {/* Group nav */}
      <section className="border-b border-titanium/20 bg-obsidian">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8">
            <a href="#land" className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-signal-white hover:text-ignition transition-colors">
              <MapPin size={14} /> LAND
            </a>
            <a href="#sea" className="flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-signal-white hover:text-ignition transition-colors">
              <Anchor size={14} /> SEA
            </a>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <div className="font-heading font-black text-2xl text-ignition">{totalLand.toLocaleString()}</div>
              <div className="text-[9px] font-mono text-titanium tracking-[0.2em]">LAND WORKERS</div>
            </div>
            <div>
              <div className="font-heading font-black text-2xl text-ignition">{countries.length}</div>
              <div className="text-[9px] font-mono text-titanium tracking-[0.2em]">NATIONS</div>
            </div>
            <div>
              <div className="font-heading font-black text-2xl text-ignition">1</div>
              <div className="text-[9px] font-mono text-titanium tracking-[0.2em]">ACTIVE SHIP</div>
            </div>
          </div>
        </div>
      </section>

      {/* LAND */}
      <section id="land" className="py-20 px-4 md:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <MapPin className="text-ignition" size={24} />
            <ScrambleText
              as="h2"
              text="LAND"
              className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase"
            />
            <div className="flex-1 h-px bg-titanium/20" />
            <span className="text-[10px] font-mono text-titanium tracking-[0.2em]">{countries.length} COUNTRIES</span>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-24 bg-signal-white/[0.03] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {countries.map((country, i) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
                  className="group relative border border-titanium/20 hover:border-ignition/50 bg-signal-white/[0.02] hover:bg-signal-white/[0.05] p-5 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <img
                      src={`https://flagcdn.com/40x30/${country.code?.toLowerCase()}.png`}
                      alt={country.name}
                      className="h-6 w-8 object-cover"
                    />
                    <span className="text-[8px] font-mono text-titanium/50 tracking-[0.15em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="font-heading font-bold text-sm text-signal-white mb-1">{country.name}</div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono text-lg font-bold text-ignition">{(country.missionaries || 0).toLocaleString()}</span>
                    <span className="text-[9px] font-mono text-titanium">workers</span>
                  </div>
                  {COUNTRY_CRITERIA[country.code]?.cost && (
                    <div className="mt-1.5 flex items-center justify-between">
                      <span className="text-[8px] font-mono tracking-[0.15em] text-titanium">MO. SUPPORT</span>
                      <span className="text-[10px] font-mono font-bold text-signal-white">${COUNTRY_CRITERIA[country.code].cost.toLocaleString()}</span>
                    </div>
                  )}
                  <CriteriaBars type="country" code={country.code} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SEA */}
      <section id="sea" className="py-20 px-4 md:px-8 border-t border-titanium/20 bg-signal-white/[0.01]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Anchor className="text-ignition" size={24} />
            <ScrambleText
              as="h2"
              text="SEA"
              className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.02em] uppercase"
            />
            <div className="flex-1 h-px bg-titanium/20" />
            <span className="text-[10px] font-mono text-titanium tracking-[0.2em]">OM SHIP MINISTRIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHIPS.map((ship, i) => (
              <motion.div
                key={ship.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`relative border ${ship.status === "ACTIVE" ? "border-ignition/50" : "border-titanium/20"} bg-signal-white/[0.02] overflow-hidden`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ship.image}
                    alt={ship.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`text-[9px] font-mono tracking-[0.2em] px-2 py-1 ${ship.status === "ACTIVE" ? "bg-ignition text-white" : "bg-titanium/20 text-titanium"}`}>
                      {ship.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Anchor size={20} className={ship.status === "ACTIVE" ? "text-ignition" : "text-titanium"} />
                  <span className="text-[9px] font-mono text-titanium tracking-[0.2em]">LAUNCHED {ship.launched}</span>
                </div>
                <h3 className="font-heading font-black text-xl md:text-2xl text-signal-white mb-3">{ship.name}</h3>
                <p className="text-xs font-mono text-titanium leading-relaxed">{ship.desc}</p>
                {SHIP_CRITERIA[ship.name]?.cost && (
                  <div className="mt-4 pt-3 border-t border-titanium/10 flex items-center justify-between">
                    <span className="text-[9px] font-mono tracking-[0.2em] text-titanium">MONTHLY SUPPORT / PERSON</span>
                    <span className="font-mono font-bold text-lg text-ignition">${SHIP_CRITERIA[ship.name].cost.toLocaleString()}</span>
                  </div>
                )}
                <CriteriaBars type="ship" code={ship.name} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 border-t border-titanium/20">
        <div className="max-w-2xl mx-auto text-center">
          <ScrambleText
            as="h2"
            text="THE HARVEST IS PLENTIFUL"
            className="font-heading font-black text-2xl md:text-4xl text-signal-white tracking-[-0.02em] uppercase"
          />
          <p className="mt-6 text-xs md:text-sm font-mono text-titanium leading-relaxed max-w-xl mx-auto">
            But the laborers are few. Pray the Lord of the harvest to send out laborers into His harvest.
          </p>
          <Link
            to="/enlist"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
          >
            DEPLOY <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}