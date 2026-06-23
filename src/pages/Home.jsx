import React from "react";
import DataOverlay from "@/components/om/DataOverlay";
import Navbar from "@/components/om/Navbar";
import HeroSection from "@/components/om/HeroSection";
import WhatWeAreNot from "@/components/om/WhatWeAreNot";
import OperationsSection from "@/components/om/OperationsSection";
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
      <WhatWeAreNot />
      <OperationsSection />
      <LogisticsSection />
      <IntelSection />
      <DeploySection />
      <Footer />
    </div>
  );
}