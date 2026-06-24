import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OPERATIONS = [
  { name: "South Asia", coords: [20.5937, 78.9629], personnel: 1240 },
  { name: "Middle East & North Africa", coords: [29.3117, 47.4818], personnel: 890 },
  { name: "East Africa", coords: [-1.2921, 36.8219], personnel: 1050 },
  { name: "Central Asia", coords: [41.2995, 69.2401], personnel: 430 },
  { name: "West Africa", coords: [7.9465, -1.0232], personnel: 380 },
  { name: "Southeast Asia", coords: [-2.5489, 118.0149], personnel: 520 },
  { name: "Southern Africa", coords: [-22.3285, 24.6849], personnel: 310 },
  { name: "Eastern Europe", coords: [44.4268, 26.1025], personnel: 280 },
  { name: "Latin America", coords: [-14.235, -51.9253], personnel: 440 },
  { name: "Pacific Islands", coords: [-8.9674, 148.0609], personnel: 120 },
  { name: "Horn of Africa", coords: [9.145, 40.4897], personnel: 190 },
  { name: "Central Africa", coords: [6.6111, 20.9394], personnel: 250 },
];

export default function HeroMap() {
  const [isDark, setIsDark] = useState(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <MapContainer
      key={isDark ? "dark" : "light"}
      center={[20, 15]}
      zoom={2}
      minZoom={2}
      maxZoom={2}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: "100%", height: "100%", background: "var(--obsidian)" }}
      worldCopyJump={true}
    >
      <TileLayer
        url={isDark
          ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"}
      />
      {OPERATIONS.map((op, i) => (
        <CircleMarker
          key={i}
          center={op.coords}
          radius={Math.max(5, op.personnel / 120)}
          pathOptions={{
            color: "#B33939",
            fillColor: "#B33939",
            fillOpacity: 0.5,
            weight: 1,
          }}
        />
      ))}
    </MapContainer>
  );
}