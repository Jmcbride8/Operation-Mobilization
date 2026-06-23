import React, { useState, useEffect } from "react";

export default function DataOverlay() {
  const [utc, setUtc] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setUtc(now.toISOString().replace("T", " ").slice(0, 19) + " UTC");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Left edge data */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1 text-[10px] font-mono text-titanium tracking-widest opacity-40" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
        <span>FIELD.ACTIVE</span>
        <span className="text-ignition">{utc}</span>
        <span>LAT 51.5074° N</span>
        <span>LON 0.1278° W</span>
      </div>
      {/* Right edge data */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1 text-[10px] font-mono text-titanium tracking-widest opacity-40" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
        <span>OM.GLOBAL.MISSION</span>
        <span>SINCE: 1957</span>
        <span>COUNTRIES: 118 ACTIVE</span>
      </div>
    </>
  );
}