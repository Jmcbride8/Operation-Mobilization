import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";

export default function RecapitalizeGate({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "resurgent") {
      sessionStorage.setItem("recapitalize_access", "granted");
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-2 h-2 bg-ignition animate-pulse-dot" />
          <span className="font-heading font-black text-sm tracking-[0.2em] text-signal-white">
            OPERATION<span className="text-ignition">.</span>MOBILIZATION
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2 text-titanium">
            <Lock size={16} />
            <span className="text-[10px] font-mono tracking-[0.2em]">CLASSIFIED — LEADERSHIP ONLY</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            placeholder="ENTER PASSPHRASE"
            className="w-full bg-transparent border border-titanium/30 px-4 py-3 text-signal-white font-mono text-sm tracking-[0.1em] placeholder:text-titanium/40 focus:border-ignition focus:outline-none transition-colors"
            autoFocus
          />
          {error && (
            <p className="text-[10px] font-mono text-ignition tracking-[0.1em]">ACCESS DENIED — INVALID PASSPHRASE</p>
          )}
          <button
            type="submit"
            className="w-full bg-ignition text-white font-heading font-bold text-xs tracking-[0.2em] py-3 hover:bg-ignition/90 transition-colors flex items-center justify-center gap-2"
          >
            REQUEST ACCESS <ArrowRight size={14} />
          </button>
        </form>
      </motion.div>
    </div>
  );
}