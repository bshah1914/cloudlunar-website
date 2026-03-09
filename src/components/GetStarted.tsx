import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download, Terminal, Copy, Check, ExternalLink,
  Monitor, Apple, Container, GitBranch, Cpu,
  ChevronRight, Shield, Zap, Clock, Smartphone,
  Bell, BarChart3, Wifi,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";
const GITHUB_REPO = "https://github.com/bshah1914/cloudsecoptoolv4";

type Platform = "docker" | "manual" | "mobile" | "cloud";

const platforms: { id: Platform; label: string; icon: React.ElementType; desc: string }[] = [
  { id: "docker", label: "Docker (Recommended)", icon: Container, desc: "One-command setup with Docker Compose" },
  { id: "manual", label: "Manual Install", icon: Terminal, desc: "Clone repo & run locally" },
  { id: "mobile", label: "Install as App", icon: Smartphone, desc: "PWA — add to home screen" },
  { id: "cloud", label: "Cloud / Hosted", icon: Monitor, desc: "Use the hosted dashboard instantly" },
];

const dockerSteps = [
  { cmd: "git clone https://github.com/bshah1914/cloudsecoptoolv4.git", label: "Clone the repository" },
  { cmd: "cd cloudsecoptoolv4", label: "Enter project directory" },
  { cmd: "cp .env.example .env", label: "Configure environment variables" },
  { cmd: "docker-compose up -d", label: "Launch all services" },
];

const manualSteps = [
  { cmd: "git clone https://github.com/bshah1914/cloudsecoptoolv4.git && cd cloudsecoptoolv4", label: "Clone & enter directory" },
  { cmd: "cd backend && pip install -r requirements.txt", label: "Install backend dependencies" },
  { cmd: "cd frontend && npm install", label: "Install frontend dependencies" },
  { cmd: "# Terminal 1: Start backend\ncd backend && uvicorn app.main:app --reload --port 8000", label: "Start FastAPI backend" },
  { cmd: "# Terminal 2: Start frontend\ncd frontend && npm run dev", label: "Start Next.js frontend" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-500 hover:text-gray-300"
      title="Copy to clipboard"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export default function GetStarted() {
  const [activePlatform, setActivePlatform] = useState<Platform>("docker");

  return (
    <section id="get-started" className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Get Started</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Download &<br />
            <span className="text-gradient-green">Install CloudLunar</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get the full CloudLunar dashboard running in minutes. Choose your preferred installation method below.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          {[
            { icon: Clock, label: "Setup Time", value: "< 5 min", color: "text-green-400" },
            { icon: Shield, label: "Read-Only", value: "Safe Access", color: "text-blue-400" },
            { icon: Zap, label: "First Scan", value: "Instant", color: "text-amber-400" },
            { icon: Cpu, label: "Requirements", value: "Docker / Node", color: "text-purple-400" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 text-center">
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
              <p className="text-sm font-semibold text-white">{stat.value}</p>
              <p className="text-[11px] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Platform Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlatform(p.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-left transition-all flex-1 ${
                  activePlatform === p.id
                    ? "bg-indigo-500/15 border border-indigo-500/30 text-white"
                    : "bg-white/[0.03] border border-white/5 text-gray-400 hover:bg-white/[0.06] hover:text-gray-300"
                }`}
              >
                <p.icon className={`w-5 h-5 flex-shrink-0 ${activePlatform === p.id ? "text-indigo-400" : "text-gray-500"}`} />
                <div>
                  <p className="text-sm font-medium">{p.label}</p>
                  <p className="text-[11px] text-gray-500">{p.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Docker Install */}
          {activePlatform === "docker" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-4">
                <Container className="w-5 h-5 text-blue-400" />
                <h3 className="text-sm font-semibold text-white">Docker Compose Setup</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Recommended</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                The fastest way to get CloudLunar running. Includes the Next.js frontend, FastAPI backend, PostgreSQL, and Redis — all pre-configured.
              </p>

              <div className="space-y-3">
                {dockerSteps.map((step, i) => (
                  <div key={i} className="bg-[#0a0a1a] rounded-xl border border-white/5 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 w-5 h-5 rounded flex items-center justify-center">{i + 1}</span>
                        <span className="text-[11px] text-gray-500">{step.label}</span>
                      </div>
                      <CopyButton text={step.cmd} />
                    </div>
                    <div className="px-4 py-3">
                      <code className="text-sm text-green-400 font-mono">$ {step.cmd}</code>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                <p className="text-xs text-gray-400">
                  <span className="text-indigo-400 font-semibold">Tip:</span> After running <code className="text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded text-[11px]">docker-compose up -d</code>, open{" "}
                  <a href="http://localhost:3000" className="text-indigo-400 underline">http://localhost:3000</a> to access the dashboard. The backend API runs at port 8000.
                </p>
              </div>
            </motion.div>
          )}

          {/* Manual Install */}
          {activePlatform === "manual" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-semibold text-white">Manual Installation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-semibold text-gray-300 mb-2">Prerequisites</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500">
                    <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-indigo-400" /> Python 3.10+</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-indigo-400" /> Node.js 18+</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-indigo-400" /> PostgreSQL 14+</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-indigo-400" /> Redis 6+</li>
                  </ul>
                </div>
                <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                  <h4 className="text-xs font-semibold text-gray-300 mb-2">Supported Platforms</h4>
                  <ul className="space-y-1.5 text-xs text-gray-500">
                    <li className="flex items-center gap-2"><Monitor className="w-3 h-3 text-blue-400" /> Linux (Ubuntu, Debian, CentOS)</li>
                    <li className="flex items-center gap-2"><Apple className="w-3 h-3 text-gray-400" /> macOS (Intel & Apple Silicon)</li>
                    <li className="flex items-center gap-2"><Monitor className="w-3 h-3 text-cyan-400" /> Windows (WSL2 recommended)</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                {manualSteps.map((step, i) => (
                  <div key={i} className="bg-[#0a0a1a] rounded-xl border border-white/5 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 w-5 h-5 rounded flex items-center justify-center">{i + 1}</span>
                        <span className="text-[11px] text-gray-500">{step.label}</span>
                      </div>
                      <CopyButton text={step.cmd} />
                    </div>
                    <div className="px-4 py-3">
                      <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">$ {step.cmd}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Install as App (PWA) */}
          {activePlatform === "mobile" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-semibold text-white">Install as Mobile App (PWA)</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">No App Store</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">
                CloudLunar is a <strong className="text-white">Progressive Web App</strong> — install it directly from your browser to your home screen. No App Store or Play Store needed. Same app, instant updates, works on any device.
              </p>

              {/* Install Instructions */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {/* iOS */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <Apple className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 text-center">iPhone & iPad</h4>
                  <p className="text-xs text-gray-500 mb-4 text-center">Safari browser</p>
                  <ol className="space-y-2.5 text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span>Open <strong className="text-white">CloudLunar dashboard</strong> in Safari</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span>Tap the <strong className="text-white">Share</strong> button (square with arrow)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <span>Select <strong className="text-white">"Add to Home Screen"</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <span>Tap <strong className="text-white">"Add"</strong> — done! Opens fullscreen like a native app</span>
                    </li>
                  </ol>
                </div>

                {/* Android / Chrome */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-700/50 to-green-900/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                    <Download className="w-7 h-7 text-green-400" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 text-center">Android & Desktop</h4>
                  <p className="text-xs text-gray-500 mb-4 text-center">Chrome / Edge browser</p>
                  <ol className="space-y-2.5 text-xs text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-green-400 bg-green-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span>Open <strong className="text-white">CloudLunar dashboard</strong> in Chrome</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-green-400 bg-green-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span>Tap the <strong className="text-white">"Install"</strong> prompt in the address bar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-green-400 bg-green-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <span>Or tap <strong className="text-white">⋮ → "Install app"</strong> from the menu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[10px] font-bold text-green-400 bg-green-500/10 w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                      <span>Confirm <strong className="text-white">"Install"</strong> — app icon appears on home screen</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* PWA Features */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                {[
                  { icon: Bell, label: "Push Notifications", desc: "Real-time cost alerts via service worker", color: "text-red-400" },
                  { icon: BarChart3, label: "Full Dashboard", desc: "Same features as the web version", color: "text-indigo-400" },
                  { icon: Wifi, label: "Offline Support", desc: "Cached data available without internet", color: "text-green-400" },
                  { icon: Zap, label: "Instant Updates", desc: "Always up to date — no store approval wait", color: "text-amber-400" },
                  { icon: Smartphone, label: "Fullscreen Mode", desc: "Runs like a native app — no browser UI", color: "text-purple-400" },
                  { icon: Shield, label: "No Store Needed", desc: "Install directly from browser, zero friction", color: "text-cyan-400" },
                ].map((feature) => (
                  <div key={feature.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <feature.icon className={`w-4 h-4 ${feature.color}`} />
                      <h4 className="text-xs font-semibold text-white">{feature.label}</h4>
                    </div>
                    <p className="text-[11px] text-gray-500">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Why PWA */}
              <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/15 rounded-xl p-6">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex gap-3 flex-shrink-0">
                    {/* Phone Mockup */}
                    <div className="w-28 h-48 rounded-2xl bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a] border border-white/10 p-2 shadow-xl">
                      <div className="w-full h-full rounded-xl bg-gradient-to-b from-indigo-900/30 to-purple-900/20 flex flex-col items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/30 flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="w-14 h-1.5 rounded bg-white/10" />
                        <div className="w-10 h-1 rounded bg-white/5" />
                        <div className="w-16 h-6 rounded bg-green-500/10 mt-1 flex items-center justify-center">
                          <span className="text-[8px] text-green-400 font-bold">-$3,847</span>
                        </div>
                        <div className="w-16 h-2 rounded bg-white/5 mt-1" />
                        <div className="w-16 h-2 rounded bg-white/5" />
                        <div className="w-16 h-2 rounded bg-white/5" />
                      </div>
                    </div>
                    {/* Desktop Mockup */}
                    <div className="w-36 h-48 rounded-xl bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a] border border-white/10 p-2 shadow-xl hidden sm:block">
                      <div className="w-full h-3 rounded-t-lg bg-gray-800 flex items-center px-1.5 gap-1 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                      </div>
                      <div className="w-full h-[calc(100%-16px)] rounded-b-lg bg-gradient-to-b from-indigo-900/20 to-purple-900/10 flex flex-col items-center justify-center gap-1.5">
                        <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center">
                          <Monitor className="w-3 h-3 text-purple-400" />
                        </div>
                        <div className="w-20 h-1 rounded bg-white/10" />
                        <div className="w-24 h-4 rounded bg-indigo-500/10 flex items-center justify-center">
                          <span className="text-[6px] text-indigo-400 font-bold">CloudLunar</span>
                        </div>
                        <div className="flex gap-1 w-24">
                          <div className="flex-1 h-8 rounded bg-white/5" />
                          <div className="flex-1 h-8 rounded bg-white/5" />
                          <div className="flex-1 h-8 rounded bg-white/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Why a PWA Instead of Native Apps?</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3">
                      Progressive Web Apps deliver the same experience as native apps — home screen icon, fullscreen mode, push notifications, and offline support — without the overhead of maintaining separate iOS and Android codebases. One codebase, instant updates, zero App Store fees.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Same Codebase</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">Works Offline</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">Push Notifications</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">Auto Updates</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open Dashboard CTA */}
              <div className="mt-6 text-center">
                <a
                  href={TOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                >
                  Open Dashboard to Install <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-gray-500 mt-2">Open in Chrome or Safari, then follow the steps above</p>
              </div>
            </motion.div>
          )}

          {/* Cloud / Hosted */}
          {activePlatform === "cloud" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-5 h-5 text-purple-400" />
                <h3 className="text-sm font-semibold text-white">Hosted Dashboard</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Skip the setup entirely. Access the CloudLunar dashboard instantly via the hosted version — no installation, no dependencies.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-6 text-center">
                  <Monitor className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">Web Dashboard</h4>
                  <p className="text-xs text-gray-400 mb-4">Full-featured dashboard accessible from any browser. Connect your AWS account and start scanning immediately.</p>
                  <a
                    href={TOOL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25"
                  >
                    Open Dashboard <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                  <h4 className="text-sm font-bold text-white mb-3">What's Included</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Full 18-service AWS scanning",
                      "Real-time CloudWatch metrics",
                      "P95 percentile optimization engine",
                      "Cost Explorer integration",
                      "Exportable PDF & CSV reports",
                      "Multi-account support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* GitHub + Download Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mt-8"
        >
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">Source Code</p>
              <p className="text-[11px] text-gray-500">View on GitHub</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
          </a>

          <a
            href={`${GITHUB_REPO}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Download className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors">Download Release</p>
              <p className="text-[11px] text-gray-500">Latest stable version</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
          </a>

          <a
            href={`${GITHUB_REPO}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <Terminal className="w-6 h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">Documentation</p>
              <p className="text-[11px] text-gray-500">Setup guide & API docs</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-600 ml-auto" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
