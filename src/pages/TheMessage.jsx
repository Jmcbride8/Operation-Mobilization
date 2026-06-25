import React from "react";
import DataOverlay from "@/components/om/DataOverlay";
import Navbar from "@/components/om/Navbar";
import Footer from "@/components/om/Footer";
import MessageHero from "@/components/om/message/MessageHero";
import WhyDifferent from "@/components/om/message/WhyDifferent";
import OneBody from "@/components/om/message/OneBody";
import LoveGoesHard from "@/components/om/recapitalize/LoveGoesHard";

export default function TheMessage() {
  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <DataOverlay />
      <Navbar />
      <MessageHero />
      <WhyDifferent />
      <LoveGoesHard />
      <OneBody />
      <Footer />
    </div>
  );
}