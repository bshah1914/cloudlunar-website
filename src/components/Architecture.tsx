import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  ArrowRight,
  Cpu,
  BarChart3,
  Shield,
} from "lucide-react";

const layers = [
  {
    title: "Frontend",
    subtitle: "Next.js 14 + TypeScript",
    icon: Monitor,
    color: "from-cyan-500 to-blue-500",
    items: [
      "Dashboard with real-time metrics",
      "Resource inventory (18 service types)",
      "Optimization center with actions",
      "Compliance monitoring",
      "Budget tracking & alerts",
    ],
  },
  {
    title: "API Layer",
    subtitle: "FastAPI + Async Python",
    icon: Server,
    color: "from-lunar-500 to-purple-500",
    items: [
      "RESTful API with JWT auth",
      "Multi-tenant isolation",
      "Role-based access (Admin/Analyst/Viewer)",
      "Paginated responses with filters",
      "Rate limiting & validation",
    ],
  },
  {
    title: "Engine",
    subtitle: "Optimization + Compliance",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    items: [
      "25+ optimization rule checks",
      "P95 percentile-based analysis",
      "Confidence scoring & risk levels",
      "S3 lifecycle, EBS gp2\u2192gp3, idle detection",
      "CIS / SOC2 compliance frameworks",
    ],
  },
  {
    title: "Data Layer",
    subtitle: "PostgreSQL + Redis",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    items: [
      "TimescaleDB for metrics history",
      "JSONB for flexible resource metadata",
      "Redis caching for sessions",
      "Async SQLAlchemy ORM",
      "Alembic migrations",
    ],
  },
  {
    title: "Cloud Connector",
    subtitle: "AWS SDK (boto3)",
    icon: Cloud,
    color: "from-amber-500 to-orange-500",
    items: [
      "STS AssumeRole for cross-account",
      "Auto-discover 18+ service types",
      "CloudWatch metrics collection",
      "Cost Explorer integration",
      "Real-time API checks (S3, Lambda, etc.)",
    ],
  },
];

const pipeline = [
  { step: "1", label: "Scan Resources", icon: Cloud, desc: "Discover all AWS resources" },
  { step: "2", label: "Ingest Costs", icon: BarChart3, desc: "90-day Cost Explorer data" },
  { step: "3", label: "Collect Metrics", icon: Cpu, desc: "CloudWatch P95 analysis" },
  { step: "4", label: "Optimize", icon: Shield, desc: "Generate recommendations" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-32 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            Under the Hood
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Architecture
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Full-stack SaaS built for production. Every layer designed for
            scalability, security, and real data accuracy.
          </p>
        </motion.div>

        {/* Sync Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Account Sync Pipeline
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {pipeline.map((step, i) => (
              <React.Fragment key={step.step}>
                <div className="flex items-center gap-3 glass rounded-xl px-5 py-3 min-w-[200px]">
                  <div className="w-8 h-8 rounded-lg bg-lunar-600/30 flex items-center justify-center text-lunar-400 font-bold text-sm">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                </div>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-lunar-500/50 hidden md:block flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Architecture Layers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card p-6 ${
                i >= 3 ? "lg:col-span-1" : ""
              } hover:bg-white/10 transition-all`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center`}
                >
                  <layer.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{layer.title}</h3>
                  <p className="text-xs text-gray-500">{layer.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-400 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lunar-500/60 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
