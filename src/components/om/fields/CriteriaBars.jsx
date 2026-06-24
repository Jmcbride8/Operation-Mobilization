import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Country field criteria (1–10 scale) keyed by ISO code
export const COUNTRY_CRITERIA = {
  IN: { difficulty: 9, language: 9, religion: 8, persecution: 9, access: 3, cost: 1200 },
  ZA: { difficulty: 6, language: 4, religion: 2, persecution: 3, access: 8, cost: 1800 },
  KE: { difficulty: 5, language: 5, religion: 2, persecution: 4, access: 8, cost: 1500 },
  ES: { difficulty: 4, language: 3, religion: 1, persecution: 1, access: 9, cost: 2200 },
  EG: { difficulty: 8, language: 7, religion: 9, persecution: 7, access: 3, cost: 1900 },
  KZ: { difficulty: 7, language: 8, religion: 6, persecution: 5, access: 4, cost: 1700 },
  NG: { difficulty: 7, language: 6, religion: 7, persecution: 8, access: 5, cost: 1600 },
  TR: { difficulty: 8, language: 7, religion: 8, persecution: 7, access: 3, cost: 2100 },
  BR: { difficulty: 5, language: 3, religion: 2, persecution: 3, access: 9, cost: 1800 },
  ID: { difficulty: 7, language: 7, religion: 7, persecution: 7, access: 4, cost: 1400 },
  BD: { difficulty: 8, language: 8, religion: 9, persecution: 8, access: 3, cost: 1100 },
  PK: { difficulty: 9, language: 8, religion: 10, persecution: 9, access: 2, cost: 1300 },
  MZ: { difficulty: 6, language: 6, religion: 2, persecution: 3, access: 6, cost: 1400 },
  UA: { difficulty: 7, language: 4, religion: 3, persecution: 5, access: 7, cost: 2000 },
  PH: { difficulty: 5, language: 4, religion: 1, persecution: 3, access: 9, cost: 1500 },
};

// Ship criteria (1–10 scale)
export const SHIP_CRITERIA = {
  "MV Logos Hope": { crewCapacity: 9, visitorVolume: 10, bookLibrary: 10, portReach: 9, cost: 2500 },
  "MV Doulos": { crewCapacity: 7, visitorVolume: 8, bookLibrary: 7, portReach: 10, cost: 2000 },
  "MV Logos II": { crewCapacity: 6, visitorVolume: 7, bookLibrary: 6, portReach: 7, cost: 1800 },
  "MV Logos": { crewCapacity: 5, visitorVolume: 6, bookLibrary: 5, portReach: 6, cost: 1600 },
};

const COUNTRY_LABELS = {
  difficulty: "DIFFICULTY",
  language: "LANGUAGE BARRIER",
  religion: "RELIGION RESTRICTION",
  persecution: "PERSECUTION",
  access: "GOSPEL ACCESS",
};

const SHIP_LABELS = {
  crewCapacity: "CREW CAPACITY",
  visitorVolume: "VISITOR VOLUME",
  bookLibrary: "BOOK LIBRARY",
  portReach: "PORT REACH",
};

function barColor(value) {
  if (value >= 8) return "bg-ignition";
  if (value >= 6) return "bg-orange-500";
  if (value >= 4) return "bg-yellow-500";
  return "bg-titanium";
}

function Bar({ label, value, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-mono tracking-[0.15em] text-titanium">{label}</span>
        <span className="text-[8px] font-mono font-bold text-signal-white">{value}/10</span>
      </div>
      <div className="h-1.5 w-full bg-signal-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value * 10}%` } : { width: 0 }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
          className={`h-full ${barColor(value)}`}
        />
      </div>
    </div>
  );
}

export default function CriteriaBars({ type, code }) {
  const [expanded, setExpanded] = useState(false);

  const data = type === "ship" ? SHIP_CRITERIA[code] : COUNTRY_CRITERIA[code];
  const labels = type === "ship" ? SHIP_LABELS : COUNTRY_LABELS;
  const cost = data?.cost;

  if (!data) return null;

  const entries = Object.entries(data);

  return (
    <div className="mt-4 pt-3 border-t border-titanium/10">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1.5 text-[8px] font-mono tracking-[0.2em] text-titanium hover:text-ignition transition-colors"
      >
        <span className={expanded ? "rotate-90" : ""} style={{ transition: "transform 0.2s" }}>▶</span>
        FIELD CRITERIA
      </button>
      {expanded && (
        <div className="mt-3 space-y-2.5">
          {entries.map(([key, value], i) => (
            <Bar key={key} label={labels[key]} value={value} delay={i * 0.05} />
          ))}
          {cost && (
            <div className="pt-2 border-t border-titanium/10 flex items-center justify-between">
              <span className="text-[8px] font-mono tracking-[0.15em] text-titanium">MONTHLY SUPPORT</span>
              <span className="text-[10px] font-mono font-bold text-ignition">${cost.toLocaleString()}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}