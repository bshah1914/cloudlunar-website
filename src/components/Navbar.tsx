import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Moon,
  Cloud,
  ExternalLink,
  Download,
  ChevronRight,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
  { label: "Docs", href: "/docs" },
  { label: "News", href: "/news" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
          ? "bg-[#06070a]/90 backdrop-blur-xl border-b border-violet-500/[0.06] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 rounded-xl bg-violet-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow duration-500">
                <Moon className="w-[18px] h-[18px] text-white" />
              </div>
              <Cloud className="w-3.5 h-3.5 text-violet-300 absolute -top-1 -right-1.5 group-hover:text-violet-200 transition-colors duration-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-white via-white to-violet-300 bg-clip-text text-transparent">
              CloudLunar
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5 ml-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/[0.05]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop right actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Sign In
            </a>
            <Link
              to="/download"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-200 rounded-xl bg-white/[0.05] ring-1 ring-white/[0.08] hover:bg-white/[0.09] hover:ring-white/[0.12] transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </Link>
            <a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 shadow-md shadow-violet-600/20 hover:shadow-violet-500/30 transition-all duration-300"
            >
              Open Dashboard
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#06070a]/95 backdrop-blur-2xl border-t border-white/[0.04]"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-violet-500/10 text-white ring-1 ring-violet-500/[0.12]"
                          : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-colors ${
                          isActive ? "text-violet-400" : "text-zinc-600"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.05] space-y-2.5">
                <a
                  href={TOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Sign In
                </a>
                <Link
                  to="/download"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-zinc-200 rounded-xl bg-white/[0.05] ring-1 ring-white/[0.08] hover:bg-white/[0.09] transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Link>
                <a
                  href={TOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-md shadow-violet-600/20 transition-all duration-300"
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
