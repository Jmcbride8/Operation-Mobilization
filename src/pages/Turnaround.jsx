import React, { useState, useEffect } from "react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import TurnaroundGate from "@/components/om/turnaround/TurnaroundGate";
import TurnaroundHero from "@/components/om/turnaround/TurnaroundHero";
import TurnaroundStory from "@/components/om/turnaround/TurnaroundStory";
import TurnaroundCore from "@/components/om/turnaround/TurnaroundCore";
import TurnaroundInitiatives from "@/components/om/turnaround/TurnaroundInitiatives";
import TurnaroundCTA from "@/components/om/turnaround/TurnaroundCTA";

export default function Turnaround() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("turnaround_access") === "granted") {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) {
    return <TurnaroundGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <TurnaroundHero />
      <TurnaroundStory />
      <TurnaroundCore />
      <TurnaroundInitiatives />
      <TurnaroundCTA />
      <Footer />
    </div>
  );
}