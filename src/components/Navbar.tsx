import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Cloud, ExternalLink } from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Architecture", href: "#architecture" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050510]/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-indigo-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-lg group-hover:bg-indigo-500/30 transition-colors" />
            <div className="relative w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <Cloud className="w-3.5 h-3.5 text-cyan-400 absolute -top-1 -right-1" />
          </div>
          <span className="text-xl font-bold text-gradient">CloudLunar</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            Sign In
          </a>
          <a
            href={TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-1.5"
          >
            Open Dashboard
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gray-400 hover:text-white p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050510]/98 backdrop-blur-2xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-white transition-colors py-1">
                  {link.label}
                </a>
              ))}
              <hr className="border-white/5 my-2" />
              <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium rounded-xl text-center flex items-center justify-center gap-2">
                Open Dashboard <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
