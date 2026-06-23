import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

/**
 * Converts an ISO 3166-1 alpha-2 country code into its regional indicator
 * symbol pair so the browser renders the correct flag emoji.
 */
function TickerItem({ country }) {
  return (
    <div className="flex items-center gap-2 px-6 whitespace-nowrap">
      {country.code && (
        <img
          src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
          alt={country.code}
          className="w-6 h-4 object-cover"
        />
      )}
      <span className="text-[11px] font-mono text-signal-white tracking-[0.05em] uppercase">
        {country.name}
      </span>
      <span className="text-[11px] font-mono text-ignition font-bold tabular-nums">
        {country.missionaries.toLocaleString()}
      </span>
      <span className="text-[9px] font-mono text-titanium/40 tracking-wider">DEPLOYED</span>
      <span className="text-titanium/20 ml-2">/</span>
    </div>
  );
}

export default function MissionaryTicker() {
  const [duplicated, setDuplicated] = useState([]);
  const scrollRef = useRef(null);

  const { data: countries = [] } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const result = await base44.entities.Country.list();
      return result.sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
    },
  });

  // Duplicate the list so the scroll loops seamlessly
  useEffect(() => {
    if (countries.length > 0) {
      setDuplicated([...countries, ...countries]);
    }
  }, [countries]);

  if (!countries || countries.length === 0) return null;

  return (
    <div className="relative border-y border-titanium/20 bg-obsidian/80 backdrop-blur-sm overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-obsidian to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-obsidian to-transparent pointer-events-none" />

      {/* Label */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center pl-3">
        <div className="flex items-center gap-1.5 bg-ignition px-2 py-1">
          <div className="w-1.5 h-1.5 bg-white animate-pulse-dot" />
          <span className="text-[8px] font-mono text-white tracking-[0.2em] font-bold">LIVE</span>
        </div>
      </div>

      {/* Scrolling track */}
      <div
        ref={scrollRef}
        className="flex items-center py-2.5 pl-20"
        style={{
          animation: "ticker-scroll 60s linear infinite",
        }}
      >
        {duplicated.map((country, i) => (
          <TickerItem key={`${country.id}-${i}`} country={country} />
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}