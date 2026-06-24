import React, { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

const THEME_KEY = "theme";
const ORDER = ["system", "light", "dark"];

function resolveDark(mode) {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [mode, setMode] = useState("system");

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const initial = ORDER.includes(saved) ? saved : "system";
    setMode(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const apply = () => {
      const dark = resolveDark(mode);
      root.classList.toggle("dark", dark);
    };
    apply();

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [mode]);

  const cycleTheme = () => {
    setMode((prev) => {
      const next = ORDER[(ORDER.indexOf(prev) + 1) % ORDER.length];
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  };

  const Icon = mode === "system" ? Monitor : mode === "dark" ? Sun : Moon;

  return (
    <button
      onClick={cycleTheme}
      className="p-2 text-titanium hover:text-signal-white hover:border hover:border-titanium/40 transition-all duration-200"
      aria-label={`Theme: ${mode}`}
      title={`Theme: ${mode}`}
    >
      <Icon size={16} />
    </button>
  );
}