import React, { useState, useEffect } from "react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import RecapitalizeGate from "@/components/om/recapitalize/RecapitalizeGate";
import RecapitalizeHero from "@/components/om/recapitalize/RecapitalizeHero";
import RecapitalizeLetter from "@/components/om/recapitalize/RecapitalizeLetter";
import DimensionVision from "@/components/om/recapitalize/DimensionVision";
import DimensionCommitment from "@/components/om/recapitalize/DimensionCommitment";
import DimensionMissional from "@/components/om/recapitalize/DimensionMissional";
import DimensionInnovate from "@/components/om/recapitalize/DimensionInnovate";
import LoveGoesHard from "@/components/om/recapitalize/LoveGoesHard";
import RecapitalizeCTA from "@/components/om/recapitalize/RecapitalizeCTA";

export default function Recapitalize() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("recapitalize_access") === "granted") {
      setUnlocked(true);
    }
  }, []);

  if (!unlocked) {
    return <RecapitalizeGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <RecapitalizeHero />
      <RecapitalizeLetter />
      <DimensionVision />
      <DimensionCommitment />
      <LoveGoesHard />
      <DimensionMissional />
      <DimensionInnovate />
      <RecapitalizeCTA />
      <Footer />
    </div>
  );
}