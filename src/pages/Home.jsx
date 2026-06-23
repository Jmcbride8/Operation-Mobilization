import React from "react";
import DataOverlay from "@/components/om/DataOverlay";
import Navbar from "@/components/om/Navbar";
import HeroSection from "@/components/om/HeroSection";
import GreatCommission from "@/components/om/GreatCommission";
import WhatWeAreNot from "@/components/om/WhatWeAreNot";
import WorldMap from "@/components/om/WorldMap";
import OperationsSection from "@/components/om/OperationsSection";
import HallOfFaith from "@/components/om/HallOfFaith";
import LogisticsSection from "@/components/om/LogisticsSection";
import IntelSection from "@/components/om/IntelSection";
import DeploySection from "@/components/om/DeploySection";
import Footer from "@/components/om/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <DataOverlay />
      <Navbar />
      <HeroSection />
      <GreatCommission />
      <WhatWeAreNot />
      <WorldMap />
      <OperationsSection />
      <LogisticsSection />
      <IntelSection />
      <HallOfFaith />
      <DeploySection />
      <Footer />
    </div>
  );
}