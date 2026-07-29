import React from "react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import TurnaroundHero from "@/components/om/turnaround/TurnaroundHero";
import TurnaroundStory from "@/components/om/turnaround/TurnaroundStory";
import TurnaroundCore from "@/components/om/turnaround/TurnaroundCore";
import TurnaroundInitiatives from "@/components/om/turnaround/TurnaroundInitiatives";
import HQRevitalizationGallery from "@/components/om/shared/HQRevitalizationGallery";
import TurnaroundCapitalPlan from "@/components/om/turnaround/TurnaroundCapitalPlan";
import TurnaroundCTA from "@/components/om/turnaround/TurnaroundCTA";

export default function Turnaround() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <TurnaroundHero />
      <TurnaroundStory />
      <TurnaroundCore />
      <TurnaroundInitiatives />
      <HQRevitalizationGallery />
      <TurnaroundCapitalPlan />
      <TurnaroundCTA />
      <Footer />
    </div>
  );
}