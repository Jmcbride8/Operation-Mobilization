import React from "react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";

export default function LegalLayout({ title, lastUpdated, children }) {
  return (
    <div className="bg-obsidian min-h-screen text-signal-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-ignition" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">LEGAL</span>
          </div>
          <h1 className="font-heading font-black text-3xl md:text-5xl tracking-tight mb-3">{title}</h1>
          <p className="text-[10px] font-mono text-titanium mb-12">
            LAST UPDATED: {lastUpdated}
          </p>
          <div className="space-y-6 text-[13px] font-mono text-signal-white/70 leading-relaxed">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}