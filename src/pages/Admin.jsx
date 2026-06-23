import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import AdminImages from "@/components/om/admin/AdminImages";
import AdminData from "@/components/om/admin/AdminData";
import { Image, Database, ArrowLeft, ShieldAlert } from "lucide-react";

export default function Admin() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [tab, setTab] = useState("images");

  useEffect(() => {
    base44.auth
      .me()
      .then((u) => setUser(u))
      .catch(() => setUser(null))
      .finally(() => setAuthChecked(true));
  }, []);

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-titanium/20 border-t-ignition rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-sm">
          <ShieldAlert size={48} className="text-ignition mx-auto" />
          <div>
            <h1 className="font-heading font-black text-2xl text-signal-white uppercase tracking-tight">
              ACCESS DENIED
            </h1>
            <p className="text-[11px] font-mono text-titanium mt-3 leading-relaxed">
              Admin console requires administrator privileges.
              {user
                ? " Your account does not have admin access."
                : " Please log in with an admin account."}
            </p>
          </div>
          <button
            onClick={() => base44.auth.redirectToLogin()}
            className="px-6 py-2.5 bg-ignition text-xs font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
          >
            {user ? "GO TO LOGIN" : "LOG IN"}
          </button>
          <div>
            <Link
              to="/"
              className="text-[10px] font-mono text-titanium tracking-wider hover:text-signal-white transition-colors"
            >
              ← BACK TO SITE
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const TABS = [
    { id: "images", label: "IMAGES", icon: Image },
    { id: "data", label: "DATA TABLES", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-signal-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-obsidian/95 backdrop-blur-sm border-b border-titanium/20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-ignition animate-pulse-dot" />
            <span className="font-heading font-black text-sm tracking-[0.2em] text-signal-white">
              OM<span className="text-ignition">.</span>ADMIN
            </span>
            <span className="text-[9px] font-mono text-titanium/50 ml-2 hidden md:inline">
              [ COMMAND CONSOLE ]
            </span>
          </div>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-[10px] font-mono tracking-[0.15em] text-titanium hover:text-signal-white transition-colors"
          >
            <ArrowLeft size={12} />
            BACK TO SITE
          </Link>
        </div>

        {/* Tabs */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex gap-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-[10px] font-mono tracking-[0.15em] border-b-2 transition-all ${
                tab === t.id
                  ? "border-ignition text-signal-white"
                  : "border-transparent text-titanium hover:text-signal-white/70"
              }`}
            >
              <t.icon size={12} />
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">
        {tab === "images" ? <AdminImages /> : <AdminData />}
      </main>
    </div>
  );
}