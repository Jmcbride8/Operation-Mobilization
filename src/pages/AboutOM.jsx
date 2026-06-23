import React from "react";
import DataOverlay from "@/components/om/DataOverlay";
import Navbar from "@/components/om/Navbar";
import AboutHero from "@/components/om/about/AboutHero";
import AboutStory from "@/components/om/about/AboutStory";
import AboutValues from "@/components/om/about/AboutValues";
import Footer from "@/components/om/Footer";

export default function AboutOM() {
  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <DataOverlay />
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <Footer />
    </div>
  );
}