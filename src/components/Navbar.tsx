import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Orbit,
  ExternalLink,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const TOOL_URL = "http://localhost:3000";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-500">
                <Orbit className="w-[18px] h-[18px] text-white" />
              </div>
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              CloudLunar
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 ml-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-300 ${
                    isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-gray-100 dark:bg-white/10 ring-1 ring-gray-200/60 dark:ring-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-4.5 h-4.5" />
                  </motion.span>
                ) : (
                  <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-4.5 h-4.5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
              Sign In
            </a>
            <a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-600/20 hover:shadow-blue-500/30 transition-all duration-300"
            >
              Open Dashboard
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl border-t border-gray-200/60 dark:border-white/10"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, duration: 0.3 }}>
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive ? "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-1 ring-blue-200/60 dark:ring-blue-500/20" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-colors ${isActive ? "text-blue-500" : "text-gray-300"}`} />
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-3 mt-2 border-t border-gray-100 dark:border-white/10 space-y-2.5">
                <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
                  Sign In
                </a>
                <a
                  href={TOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-600/20 transition-all duration-300"
                >
                  Open Dashboard
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
