import React, { useRef } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { motion, useInView } from "framer-motion";
import ScrambleText from "./ScrambleText";
import "leaflet/dist/leaflet.css";

const OPERATIONS = [
  { name: "South Asia", region: "MERIDIAN", coords: [20.5937, 78.9629], personnel: 1240, status: "ACTIVE" },
  { name: "Middle East & North Africa", region: "CITADEL", coords: [29.3117, 47.4818], personnel: 890, status: "ACTIVE" },
  { name: "East Africa", region: "FULCRUM", coords: [-1.2921, 36.8219], personnel: 1050, status: "ACTIVE" },
  { name: "Central Asia", region: "SUMMIT", coords: [41.2995, 69.2401], personnel: 430, status: "SCALING" },
  { name: "West Africa", region: "VANGUARD", coords: [7.9465, -1.0232], personnel: 380, status: "ACTIVE" },
  { name: "Southeast Asia", region: "TIDEWATER", coords: [-2.5489, 118.0149], personnel: 520, status: "ACTIVE" },
  { name: "Southern Africa", region: "ANCHOR", coords: [-22.3285, 24.6849], personnel: 310, status: "ACTIVE" },
  { name: "Eastern Europe", region: "CROSSWIND", coords: [44.4268, 26.1025], personnel: 280, status: "ACTIVE" },
  { name: "Latin America", region: "COMPASS", coords: [-14.235, -51.9253], personnel: 440, status: "SCALING" },
  { name: "Pacific Islands", region: "HORIZON", coords: [-8.9674, 148.0609], personnel: 120, status: "ACTIVE" },
  { name: "Horn of Africa", region: "BASTION", coords: [9.145, 40.4897], personnel: 190, status: "ACTIVE" },
  { name: "Central Africa", region: "BENCHMARK", coords: [6.6111, 20.9394], personnel: 250, status: "ACTIVE" },
];

export default function WorldMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const totalPersonnel = OPERATIONS.reduce((sum, op) => sum + op.personnel, 0);

  return (
    <section id="map" ref={ref} className="py-24 border-t border-titanium/10 relative overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-px bg-ignition" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">GLOBAL DEPLOYMENT</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <ScrambleText
              as="h2"
              text="GLOBAL MISSION FIELD"
              className="font-heading font-black text-[46px] md:text-[70px] lg:text-[82px] text-signal-white tracking-[-0.02em] uppercase"
            />
            <p className="text-xs font-mono text-titanium mt-3 max-w-lg">
              Where our workers are right now. Every marker represents a long-term mission —
              lives given, communities transformed, the Gospel going forward.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="text-right">
              <span className="font-heading font-black text-2xl text-ignition tabular-nums">{OPERATIONS.length}</span>
              <span className="block text-[9px] font-mono text-titanium tracking-wider">ACTIVE FIELDS</span>
            </div>
            <div className="text-right">
              <span className="font-heading font-black text-2xl text-signal-white tabular-nums">{totalPersonnel.toLocaleString()}</span>
              <span className="block text-[9px] font-mono text-titanium tracking-wider">ON THE FIELD</span>
            </div>
          </div>
        </div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative border border-titanium/20 overflow-hidden"
          style={{ background: "#080808" }}
        >
          {/* Corner labels */}
          <div className="absolute top-3 left-3 z-[1000] flex items-center gap-2 pointer-events-none">
            <div className="w-1.5 h-1.5 bg-ignition animate-pulse-dot" />
            <span className="text-[9px] font-mono text-ignition tracking-wider">LIVE_FIELD_MAP</span>
          </div>
          <div className="absolute top-3 right-3 z-[1000] pointer-events-none">
            <span className="text-[9px] font-mono text-titanium/50 tracking-wider">PROJECTION: MERCATOR</span>
          </div>
          <div className="absolute bottom-3 left-3 z-[1000] pointer-events-none">
            <span className="text-[9px] font-mono text-titanium/50 tracking-wider">UPDATES: LIVE</span>
          </div>
          <div className="absolute bottom-3 right-3 z-[1000] pointer-events-none flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[9px] font-mono text-titanium/50">ACTIVE</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-[9px] font-mono text-titanium/50">SCALING</span>
            </div>
          </div>

          <MapContainer
            center={[20, 15]}
            zoom={2}
            minZoom={2}
            maxZoom={5}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "500px", background: "#080808" }}
            worldCopyJump={true}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; OpenStreetMap &copy; CARTO'
            />
            {OPERATIONS.map((op) => (
              <CircleMarker
                key={op.region}
                center={op.coords}
                radius={Math.max(6, op.personnel / 120)}
                pathOptions={{
                  color: op.status === "ACTIVE" ? "#22c55e" : "#eab308",
                  fillColor: op.status === "ACTIVE" ? "#22c55e" : "#eab308",
                  fillOpacity: 0.4,
                  weight: 1,
                }}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -8]}
                  className="om-tooltip"
                  permanent
                >
                  <div style={{ background: "#080808", border: "1px solid #404040", padding: "6px 8px" }}>
                    <div style={{ fontSize: "11px", fontFamily: "monospace", color: "#F2F2F2", fontWeight: "bold" }}>
                      {op.name}
                    </div>
                    <div style={{ fontSize: "10px", fontFamily: "monospace", color: "#B33939", marginTop: "2px", fontWeight: "bold" }}>
                      {op.personnel.toLocaleString()} WORKERS
                    </div>
                    <div style={{ fontSize: "9px", fontFamily: "monospace", color: "#8C8C8C", marginTop: "1px" }}>
                      {op.status}
                    </div>
                  </div>
                </Tooltip>
              </CircleMarker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Coordinate strip */}
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[9px] font-mono text-titanium/40">
          {OPERATIONS.map((op) => (
            <span key={op.region}>
              <span className="text-ignition">●</span> {op.name.toUpperCase()} {op.coords[0].toFixed(2)}°, {op.coords[1].toFixed(2)}°
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}