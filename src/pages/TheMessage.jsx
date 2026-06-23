import React from "react";
import DataOverlay from "@/components/om/DataOverlay";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import MessageHero from "@/components/om/message/MessageHero";
import WhyDifferent from "@/components/om/message/WhyDifferent";
import OneBody from "@/components/om/message/OneBody";
import TrinitySection from "@/components/om/message/TrinitySection";

export default function TheMessage() {
  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <DataOverlay />
      <Navbar />
      <MessageHero />
      <TrinitySection />
      <WhyDifferent />
      <OneBody />
      <Footer />
    </div>
  );
}