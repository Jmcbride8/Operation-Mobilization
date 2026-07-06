import React, { useState, useEffect } from "react";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import RecapitalizeGate from "@/components/om/recapitalize/RecapitalizeGate";
import RecapitalizeHero from "@/components/om/recapitalize/RecapitalizeHero";
import RecapitalizeLetter from "@/components/om/recapitalize/RecapitalizeLetter";
import FrontWebsite from "@/components/om/recapitalize/FrontWebsite";
import FrontHQ from "@/components/om/recapitalize/FrontHQ";
import FrontRecruitment from "@/components/om/recapitalize/FrontRecruitment";
import LoveGoesHard from "@/components/om/recapitalize/LoveGoesHard";
import RememberWhy from "@/components/om/recapitalize/RememberWhy";
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
      <FrontWebsite />
      <FrontHQ />
      <LoveGoesHard />
      <FrontRecruitment />
      <RememberWhy />
      <RecapitalizeCTA />
      <Footer />
    </div>
  );
}