import React from "react";
import DataOverlay from "@/components/om/DataOverlay";
import Navbar from "@/components/om/Navbar";
import HeroSection from "@/components/om/HeroSection";
import GreatCommission from "@/components/om/GreatCommission";
import WhatWeAreNot from "@/components/om/WhatWeAreNot";
import WhyOM from "@/components/om/WhyOM";
import DiagnosisSection from "@/components/om/about/DiagnosisSection";
import CureSection from "@/components/om/about/CureSection";
import WorldMap from "@/components/om/WorldMap";
import HallOfFaith from "@/components/om/HallOfFaith";
import TestimonialsSection from "@/components/om/mission/TestimonialsSection";
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
      <WhyOM />
      <DiagnosisSection />
      <CureSection />
      <WorldMap />
      <HallOfFaith />
      <TestimonialsSection />
      <DeploySection />
      <Footer />
    </div>
  );
}