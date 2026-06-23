import React from "react";
import BrandNav from "@/components/om/brand/BrandNav";
import BrandHero from "@/components/om/brand/BrandHero";
import LogoSystem from "@/components/om/brand/LogoSystem";
import ColorPalette from "@/components/om/brand/ColorPalette";
import TypographySystem from "@/components/om/brand/TypographySystem";
import VoiceAndTone from "@/components/om/brand/VoiceAndTone";
import DesignPrinciples from "@/components/om/brand/DesignPrinciples";
import AIInstructionSet from "@/components/om/brand/AIInstructionSet";
import Footer from "@/components/om/Footer";

export default function BrandIdentity() {
  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      <BrandNav />
      <BrandHero />
      <LogoSystem />
      <ColorPalette />
      <TypographySystem />
      <VoiceAndTone />
      <DesignPrinciples />
      <AIInstructionSet />
      <Footer />
    </div>
  );
}