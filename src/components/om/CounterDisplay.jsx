import React, { useState, useEffect, useRef } from "react";

export default function CounterDisplay({ target, label, duration = 2000, decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;
      setCount(decimals > 0 ? value.toFixed(decimals) : Math.floor(value));
      if (progress >= 1) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-signal-white tabular-nums tracking-tight">
        {count.toLocaleString()}
      </span>
      <span className="text-[10px] font-mono tracking-[0.2em] text-titanium mt-2 uppercase">
        {label}
      </span>
    </div>
  );
}