import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor, Server, Database, Cloud, ArrowRight,
  Cpu, BarChart3, Shield, Layers, HardDrive, Gauge, Zap,
  CheckCircle2, DollarSign, Radio,
} from "lucide-react";

const pipeline = [
  { step: "1", label: "Scan Resources", icon: Cloud, desc: "Discover all AWS resources" },
  { step: "2", label: "Ingest Costs", icon: BarChart3, desc: "90-day Cost Explorer data" },
  { step: "3", label: "Collect Metrics", icon: Cpu, desc: "CloudWatch P95 analysis" },
  { step: "4", label: "Optimize", icon: Shield, desc: "Generate recommendations" },
];

const layers = [
  {
    title: "Frontend",
    subtitle: "Next.js 14 + TypeScript",
    icon: Monitor,
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/30",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts"],
    items: [
      "Dashboard with real-time metrics",
      "Resource inventory (18 service types)",
      "Optimization center with actions",
      "Compliance monitoring",
    ],
  },
  {
    title: "API Layer",
    subtitle: "FastAPI + Async Python",
    icon: Server,
    color: "from-indigo-500 to-purple-500",
    borderColor: "border-indigo-500/30",
    tech: ["FastAPI", "SQLAlchemy", "Pydantic", "Structlog"],
    items: [
      "RESTful API with JWT auth",
      "Multi-tenant isolation & RBAC",
      "Paginated responses with filters",
      "Rate limiting & validation",
    ],
  },
  {
    title: "Optimization Engine",
    subtitle: "Rules + Compliance",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    tech: ["25+ rules", "P95 analysis", "CIS/SOC2", "Confidence scoring"],
    items: [
      "25+ optimization rule checks",
      "P95 percentile-based analysis",
      "S3 lifecycle, EBS gp2→gp3, idle detection",
      "CIS / SOC2 compliance frameworks",
    ],
  },
  {
    title: "Data Layer",
    subtitle: "PostgreSQL + Redis",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30",
    tech: ["PostgreSQL", "TimescaleDB", "Redis", "Alembic"],
    items: [
      "TimescaleDB for metrics history",
      "JSONB for flexible resource metadata",
      "Redis caching for sessions",
      "Async SQLAlchemy ORM",
    ],
  },
  {
    title: "Cloud Connector",
    subtitle: "AWS SDK (boto3)",
    icon: Cloud,
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30",
    tech: ["boto3", "STS AssumeRole", "CloudWatch", "Cost Explorer"],
    items: [
      "STS AssumeRole for cross-account",
      "Auto-discover 18+ service types",
      "CloudWatch metrics collection",
      "Cost Explorer integration",
    ],
  },
];

type ViewMode = "architecture" | "stack" | "hosting";

export default function Architecture() {
  const [view, setView] = useState<ViewMode>("architecture");

  return (
    <section id="architecture" className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Under the Hood</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Architecture &<br />
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Full-stack SaaS built for production. Every layer designed for scalability, security, and real data accuracy.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setView("architecture")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                view === "architecture"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              <Layers className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Architecture
            </button>
            <button
              onClick={() => setView("stack")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                view === "stack"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              <Cpu className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Tech Stack
            </button>
            <button
              onClick={() => setView("hosting")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                view === "hosting"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              <Server className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Hosting Requirements
            </button>
          </div>
        </motion.div>

        {/* Sync Pipeline - always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 md:p-8 mb-8"
        >
          <h3 className="text-sm font-semibold text-gray-300 mb-5 text-center">Account Sync Pipeline</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {pipeline.map((step, i) => (
              <React.Fragment key={step.step}>
                <div className="flex items-center gap-3 glass rounded-xl px-5 py-3 min-w-[200px]">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/30 flex items-center justify-center text-indigo-400 font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-indigo-500/50 hidden md:block flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Architecture View */}
        {view === "architecture" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card p-6 hover:bg-white/[0.06] transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                      <layer.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{layer.title}</h3>
                      <p className="text-xs text-gray-500">{layer.subtitle}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tech Stack View */}
        {view === "stack" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`glass-card p-6 border-t-2 ${layer.borderColor} hover:bg-white/[0.06] transition-all`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}>
                      <layer.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{layer.title}</h3>
                      <p className="text-xs text-gray-500">{layer.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {layer.tech.map((t) => (
                      <div key={t} className="flex items-center gap-3 bg-white/[0.03] rounded-lg px-3 py-2.5 border border-white/5">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${layer.color}`} />
                        <span className="text-sm font-medium text-white">{t}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hosting Requirements View */}
        {view === "hosting" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-6">
            {/* Resource Usage Breakdown */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-semibold text-white mb-2">Resource Usage per Component</h3>
              <p className="text-sm text-gray-400 mb-6">CloudLunar is lightweight by design. Here's what each component uses on a single server.</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="pb-3 pr-4 text-xs font-medium text-gray-500">Component</th>
                      <th className="pb-3 pr-4 text-xs font-medium text-gray-500">CPU</th>
                      <th className="pb-3 pr-4 text-xs font-medium text-gray-500">Memory</th>
                      <th className="pb-3 pr-4 text-xs font-medium text-gray-500">Disk</th>
                      <th className="pb-3 text-xs font-medium text-gray-500">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Next.js Frontend", cpu: "~0.5 core", mem: "150-250 MB", disk: "~500 MB", note: "Static assets + SSR", icon: Monitor, color: "text-cyan-400" },
                      { name: "FastAPI Backend", cpu: "~0.5 core", mem: "200-300 MB", disk: "~100 MB", note: "Async uvicorn workers", icon: Server, color: "text-indigo-400" },
                      { name: "PostgreSQL", cpu: "~0.3 core", mem: "256-512 MB", disk: "1-5 GB", note: "Scales with data volume", icon: Database, color: "text-green-400" },
                      { name: "Redis", cpu: "~0.1 core", mem: "50-100 MB", disk: "~50 MB", note: "Session cache & queues", icon: Zap, color: "text-amber-400" },
                      { name: "CloudLunar Agent", cpu: "< 0.01 core", mem: "25-40 MB", disk: "0", note: "Runs on monitored servers", icon: Radio, color: "text-teal-400" },
                    ].map((row) => (
                      <tr key={row.name} className="border-b border-white/5 hover:bg-white/[0.02]">
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <row.icon className={`w-4 h-4 ${row.color} flex-shrink-0`} />
                            <span className="text-sm font-medium text-white">{row.name}</span>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-xs text-gray-300 font-mono">{row.cpu}</td>
                        <td className="py-3 pr-4 text-xs text-gray-300 font-mono">{row.mem}</td>
                        <td className="py-3 pr-4 text-xs text-gray-300 font-mono">{row.disk}</td>
                        <td className="py-3 text-xs text-gray-500">{row.note}</td>
                      </tr>
                    ))}
                    <tr className="bg-emerald-500/5">
                      <td className="py-3 pr-4 text-sm font-bold text-emerald-400">Total (Single Server)</td>
                      <td className="py-3 pr-4 text-xs text-emerald-300 font-mono font-bold">~1.5 cores</td>
                      <td className="py-3 pr-4 text-xs text-emerald-300 font-mono font-bold">~700 MB - 1.2 GB</td>
                      <td className="py-3 pr-4 text-xs text-emerald-300 font-mono font-bold">~2-6 GB</td>
                      <td className="py-3 text-xs text-emerald-400 font-medium">All-in-one deployment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommended Instances */}
            <div className="grid md:grid-cols-2 gap-5">
              {/* Dev / Small */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Development / Small Team</h4>
                      <p className="text-xs text-gray-500">Up to 5 cloud accounts</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">Starter</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Instance</p>
                    <p className="text-sm font-bold text-white">t3.small</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">vCPU</p>
                    <p className="text-sm font-bold text-white">2 cores</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">RAM</p>
                    <p className="text-sm font-bold text-white">2 GB</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Disk</p>
                    <p className="text-sm font-bold text-white">20 GB</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-emerald-500/5 rounded-lg px-4 py-2.5 border border-emerald-500/10">
                  <span className="text-xs text-gray-400">Estimated Cost</span>
                  <span className="text-lg font-bold text-emerald-400">~$15<span className="text-xs font-normal text-gray-500">/mo</span></span>
                </div>
              </motion.div>

              {/* Production */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 hover:bg-white/[0.06] transition-all relative"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold">Recommended</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Production / Team</h4>
                    <p className="text-xs text-gray-500">Up to 20 cloud accounts + agents</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Instance</p>
                    <p className="text-sm font-bold text-white">t3.medium</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">vCPU</p>
                    <p className="text-sm font-bold text-white">2 cores</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">RAM</p>
                    <p className="text-sm font-bold text-white">4 GB</p>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                    <p className="text-xs text-gray-500 mb-1">Disk</p>
                    <p className="text-sm font-bold text-white">30-50 GB</p>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-emerald-500/5 rounded-lg px-4 py-2.5 border border-emerald-500/10">
                  <span className="text-xs text-gray-400">Estimated Cost</span>
                  <span className="text-lg font-bold text-emerald-400">~$30<span className="text-xs font-normal text-gray-500">/mo</span></span>
                </div>
              </motion.div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Cpu, label: "Total CPU", value: "< 1.5 cores", desc: "All services combined", color: "text-indigo-400", bg: "bg-indigo-500/10" },
                { icon: HardDrive, label: "Total RAM", value: "< 1.2 GB", desc: "Under full load", color: "text-purple-400", bg: "bg-purple-500/10" },
                { icon: Radio, label: "Agent Footprint", value: "~30 MB", desc: "< 1% CPU, zero disk", color: "text-teal-400", bg: "bg-teal-500/10" },
                { icon: DollarSign, label: "Hosting Cost", value: "From $15/mo", desc: "t3.small is enough", color: "text-emerald-400", bg: "bg-emerald-500/10" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 text-center"
                >
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  <p className="text-[10px] text-gray-600 mt-1">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="glass-card p-5 flex flex-col sm:flex-row items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">No surprise bills.</strong> CloudLunar uses no external paid APIs for monitoring. The agent reads metrics from <code className="text-teal-300 bg-teal-500/10 px-1.5 py-0.5 rounded text-[11px]">/proc</code> via psutil ($0), AWS resource discovery uses free <code className="text-teal-300 bg-teal-500/10 px-1.5 py-0.5 rounded text-[11px]">describe_*</code> API calls ($0), and CloudWatch is only used for optimization analysis on the resources you choose to scan. The database grows ~50 MB/month per agent — set a 90-day retention policy and disk usage stays flat.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
