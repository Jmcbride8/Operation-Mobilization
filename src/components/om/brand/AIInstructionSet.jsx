import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ScrambleText from "../ScrambleText";
import { Copy, Check } from "lucide-react";

const INSTRUCTION_SET = `OPERATION MOBILIZATION — AI BRAND INSTRUCTION SET
=====================================================

# IDENTITY
Operation Mobilization (OM) is a global missionary force founded in 1957, operating in 118 countries. This is not a charity. Not an NGO. It is a called community of long-term specialists deployed to the hardest places on earth. The mission is spiritual, not bureaucratic. Workers are sent by calling, not hired by salary.

# MISSION STATEMENT
"Sending workers to the hardest places on earth since 1957. Not a charity. A global mission force."
Tagline: "CHRIST'S LOVE IN MOTION."
Anchor verse: "Greater love has no one than this: to lay down one's life for one's friends." — John 15:13

# CORE THEOLOGY
- Missions is not a calling — it is a command (Matthew 28:18-20, the Great Commission).
- Sacrifice is the baseline, not the exception. Workers lay down their lives for the gospel.
- The mission belongs to God. We go because He said go. We stay because He said stay.
- Anti-colonial posture: we serve, we train local leaders, we build sustainability, we leave communities stronger and self-governing. We do not impose Western culture. We bring Christ.

# BRAND VOICE & TONE
- Bold. Direct. Unflinching. No hedging, no euphemisms, no corporate softening.
- Short, declarative sentences. Fragments are acceptable and encouraged.
- Military-grade precision in language, but missionary in substance — "deployment" means sending workers, "operations" means ministry on the ground.
- Tone: confident, urgent, reverent, sacrificial. Never cheerful, never casual, never apologetic.
- Headlines hit hard. Data reads clean. Truth over marketing.
- Key phrases: "God does hard. We go hard." / "On the field." / "The order stands." / "Not a charity. A mission force."

# VISUAL LANGUAGE
## Color Palette
DARK MODE (primary):
- Obsidian: #080808 (background, primary surface)
- Signal White: #F2F2F2 (primary text)
- Titanium: #8C8C8C (secondary text, dividers, metadata)
- Ignition Red: #B33939 (accent, CTAs, status indicators, highlights)

LIGHT MODE (inverted):
- Obsidian: #F2F2F2 (inverted to light background)
- Signal White: #080808 (inverted to dark text)
- Titanium: #666666 (darker for WCAG contrast compliance)
- Ignition Red: #B33939 (stays constant across both modes)

Both modes use high contrast. Ignition red is the constant — always #B33939 regardless of mode. Red used sparingly but with maximum impact.

## Typography
- Inter Tight: All headings, display text, subheads. Weights: Black 900, Bold 700, Medium 500. Tight tracking, uppercase for impact.
- JetBrains Mono: All body copy, data labels, metadata, tactical text. Weights: Bold 700, Regular 400. Monospace precision.
- Never use decorative or script fonts. Never use rounded fonts.

## Layout & Structure
- 0px border radius everywhere. Sharp corners only. No rounded elements.
- Grid-based layouts. 12-column systems. Thin borders (1px) in titanium at 10-20% opacity.
- Generous negative space. Let elements breathe.
- Max content width: 1440px. Generous padding on all sides.
- Section markers: "SECTION_01", "SECTION_02", etc. with a short ignition-red line and monospace label.

## Imagery
- High-contrast, low-saturation photography with a 35mm film grain texture.
- Full color by default. Switch to grayscale only on hover.
- Subjects: real people in real field conditions — drilling water wells, medical convoys, training local leaders, disaster response, community gatherings.
- No stock-photo smiles. No posed corporate shots. Raw, documentary, honest.
- No filters that obscure the humanity or dignity of subjects.

## Motion & Interaction
- Entrance animations: fade + rise (opacity 0→1, y 20→0), staggered with 0.08-0.1s delays.
- Hover states: subtle — opacity shifts, grayscale toggles, border highlights. Never bouncy or playful.
- Text reveal: scramble/blur-in effect on key headlines.
- Status indicators: pulsing dots (2s ease-in-out). Green = active/sustained. Blue = in progress. Red = urgent.

## Iconography
- Geometric, line-based, 1px stroke weight. No filled icons unless representing status.
- Lucide-react icon set. Minimal, consistent, never decorative for its own sake.

# WHAT WE ARE / WHAT WE ARE NOT
- NOT a charity → A mission force
- NOT an NGO → A missionary movement
- NOT disaster tourists → Long-term specialists
- NOT a corporation → A called community
- NOT passive donors → Active deployers
- NOT well-meaning → Well-trained

# DO'S AND DON'TS
DO:
- Use "deployment" for sending workers to the field
- Use "operations" for ongoing ministry work
- Honor sacrifice, obedience, and calling
- Cite scripture directly when relevant
- Show measurable outcomes and real numbers
- Use full-color photography with film grain texture

DON'T:
- Use corporate jargon (synergy, optimize, leverage, stakeholders)
- Use church-cliche language that lacks conviction
- Show imagery that depicts communities as helpless or Western workers as saviors
- Use rounded corners, soft shadows, or playful animations
- Overuse ignition red — it is an accent, not a background
- Dilute the mission tone with fundraising appeals that feel transactional

# BRAND ENVIRONMENT
The physical brand environment features:
- Wall-mounted OM monogram and wordmark in the ignition-red and obsidian palette
- John 15:13 verse display as the central scriptural anchor
- Wall of Crosses memorial — triangular arrangement of white crosses honoring those who served
- Black OM flags with red trim flanking the display
- Glass shadow box containing the founding charter document
- Dark, immersive, reverent atmosphere — the tactical operations center meets sacred memorial

# APPLICATIONS
When creating merchandise, assets, social media, print, or digital materials:
- Maintain the obsidian/signal-white/ignition-red palette
- Support both light and dark mode — ignition red stays constant
- Use Inter Tight for headlines, JetBrains Mono for data
- Keep designs sharp, high-contrast, and minimal
- Lead with conviction, not decoration
- Every piece should feel like it belongs in a tactical operations center that happens to be on mission for God`;

export default function AIInstructionSet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INSTRUCTION_SET);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([INSTRUCTION_SET], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "OM_Brand_AI_Instruction_Set.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ai-instructions" ref={ref} className="py-24 border-b border-titanium/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">SECTION_07</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-8">
            <ScrambleText
              as="h2"
              text="AI INSTRUCTION SET."
              className="font-heading font-black text-3xl md:text-5xl text-signal-white tracking-[-0.03em] uppercase"
            />
            <p className="text-xs font-mono text-titanium mt-4 max-w-2xl leading-relaxed">
              The full brand essence, compressed into a single copy-pasteable prompt.
              Drop this into any AI tool — ChatGPT, Claude, Midjourney, Gemini — to generate
              merch, social assets, print materials, and campaign creative that stays on-brand.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end lg:justify-end">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-5 py-2.5 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "COPIED" : "COPY TO CLIPBOARD"}
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 border border-titanium/30 text-[10px] font-heading font-bold tracking-[0.15em] text-signal-white hover:border-titanium/60 transition-colors"
            >
              DOWNLOAD .TXT
            </button>
          </div>
        </div>

        {/* Instruction set display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-titanium/20 bg-obsidian/80"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-titanium/20 bg-signal-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[9px] font-mono text-titanium ml-2 tracking-wider">OM_BRAND_INSTRUCTION_SET.txt</span>
            </div>
            <span className="text-[9px] font-mono text-titanium/50">{INSTRUCTION_SET.length} CHARS</span>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[600px] overflow-y-auto horizontal-scroll">
            <pre className="text-[11px] font-mono text-signal-white/70 leading-relaxed whitespace-pre-wrap break-words">
{INSTRUCTION_SET}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}