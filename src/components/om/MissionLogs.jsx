import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOGS = [
  { id: "ML-0491", region: "SOUTH ASIA", text: "Gospel broadcast reached 12,000 homes. 47 professions of faith.", time: "06:14 UTC", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=200&h=120&fit=crop" },
  { id: "ML-0492", region: "EAST AFRICA", text: "Church planted in unreached village. First service: 130 gathered.", time: "08:33 UTC", img: "https://images.unsplash.com/photo-1524670231024-9e2cce6353f1?w=200&h=120&fit=crop" },
  { id: "ML-0493", region: "MIDDLE EAST", text: "Believer baptized in secret. 9th new convert this month.", time: "09:47 UTC", img: "https://images.unsplash.com/photo-1502810365585-7c5b3f6e8e0a?w=200&h=120&fit=crop" },
  { id: "ML-0494", region: "CENTRAL ASIA", text: "Field team deployed. 12 missionaries entering closed nation.", time: "11:02 UTC", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=120&fit=crop" },
  { id: "ML-0495", region: "NORTH AFRICA", text: "Scriptures distributed: 2,400 Bibles delivered to house churches.", time: "12:58 UTC", img: "https://images.unsplash.com/photo-1532531562-1e7e8f3d30e5?w=200&h=120&fit=crop" },
  { id: "ML-0496", region: "SOUTHEAST ASIA", text: "Orphan rescued from trafficking ring. Now in discipleship.", time: "14:21 UTC", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae2b40?w=200&h=120&fit=crop" },
  { id: "ML-0497", region: "EUROPE", text: "Refugee family baptized. Father declares Christ before camp.", time: "15:40 UTC", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=200&h=120&fit=crop" },
  { id: "ML-0498", region: "LATIN AMERICA", text: "Evangelism campaign closed: 340 souls saved in 3 days.", time: "17:05 UTC", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop" },
];

export default function MissionLogs() {
  const [visibleLogs, setVisibleLogs] = useState(LOGS.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % LOGS.length;
        setVisibleLogs((logs) => [...logs.slice(1), LOGS[next]]);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 bg-ignition animate-pulse-dot" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-ignition">LIVE MISSION LOG</span>
      </div>
      <div className="space-y-1 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleLogs.map((log) => (
            <motion.div
              key={log.id + log.time}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="border border-titanium/20 bg-obsidian/60 p-2.5 flex gap-3"
            >
              <div className="w-20 h-20 shrink-0 overflow-hidden border border-titanium/20">
                <img src={log.img} alt={log.region} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-mono text-ignition">[{log.id}]</span>
                  <span className="text-[9px] font-mono text-titanium">{log.region}</span>
                  <span className="text-[9px] font-mono text-titanium/50 ml-auto">{log.time}</span>
                </div>
                <p className="text-[11px] font-mono text-signal-white/80 leading-relaxed">{log.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}