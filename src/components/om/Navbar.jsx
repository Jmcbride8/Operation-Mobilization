import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "HOME", href: "#command" },
  { label: "MISSIONS", href: "#operations" },
  { label: "RESOURCES", href: "#logistics" },
  { label: "FIELD REPORTS", href: "#intel" },
  { label: "GIVE", href: "#deploy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-obsidian/95 backdrop-blur-sm border-b border-titanium/20" : "bg-transparent"}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="flex items-center gap-2 group">
          <div className="w-2 h-2 bg-ignition animate-pulse-dot" />
          <span className="font-heading font-black text-sm tracking-[0.2em] text-signal-white">
            OPERATION<span className="text-ignition">.</span>MOBILIZATION
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) =>
            item.label === "GIVE" ? (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="ml-4 px-4 py-1.5 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="px-3 py-1.5 text-[10px] font-mono tracking-[0.15em] text-titanium hover:text-signal-white hover:border hover:border-titanium/40 transition-all duration-200"
              >
                {item.label}
              </button>
            )
          )}
          <button
            onClick={() => handleNav("#deploy")}
            className="ml-4 px-4 py-1.5 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
          >
            GO
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-signal-white">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian/98 border-b border-titanium/20 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="text-left px-3 py-3 text-xs font-mono tracking-[0.15em] text-titanium hover:text-signal-white border-b border-titanium/10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#deploy")}
                className="mt-2 px-4 py-3 bg-ignition text-xs font-heading font-bold tracking-[0.15em] text-white text-center"
              >
                GO
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}