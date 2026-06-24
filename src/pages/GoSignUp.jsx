import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import ScrambleText from "@/components/om/ScrambleText";

export default function GoSignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await base44.auth.register({ email, password });
      navigate("/register", { state: { email } });
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-signal-white flex flex-col">
      {/* Top bar */}
      <div className="border-b border-titanium/20 px-4 md:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft size={14} className="text-titanium group-hover:text-ignition transition-colors" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-titanium">RETURN TO BASE</span>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-ignition animate-pulse-dot" />
          <span className="font-heading font-black text-sm tracking-[0.2em]">
            OPERATION<span className="text-ignition">.</span>MOBILIZATION
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-ignition" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-ignition">ENLIST</span>
              <div className="w-8 h-px bg-ignition" />
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <p className="font-heading font-black text-2xl md:text-3xl text-signal-white leading-tight italic">
                &ldquo;All we have to decide is what to do with the time that is given us.&rdquo;
              </p>
            </motion.blockquote>
            <span className="text-[10px] font-mono tracking-[0.2em] text-titanium">
              — GANDALF
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[10px] font-mono tracking-[0.15em] text-titanium block mb-1.5">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-titanium/30 px-4 py-3 text-sm font-mono text-signal-white focus:border-ignition focus:outline-none transition-colors"
                placeholder="you@command.center"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono tracking-[0.15em] text-titanium block mb-1.5">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border border-titanium/30 px-4 py-3 text-sm font-mono text-signal-white focus:border-ignition focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono tracking-[0.15em] text-titanium block mb-1.5">
                CONFIRM
              </label>
              <input
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-transparent border border-titanium/30 px-4 py-3 text-sm font-mono text-signal-white focus:border-ignition focus:outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-[10px] font-mono text-ignition border border-ignition/30 px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-ignition text-xs font-heading font-bold tracking-[0.2em] text-white hover:bg-ignition/90 transition-colors disabled:opacity-50"
            >
              {loading ? "DEPLOYING…" : "GO"
              }
            </button>
          </form>

          <p className="text-center mt-6 text-[10px] font-mono text-titanium">
            Already enlisted?{" "}
            <Link to="/login" className="text-ignition hover:underline">
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}