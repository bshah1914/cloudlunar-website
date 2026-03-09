import React from "react";
import { motion } from "framer-motion";
import {
  Search, BarChart3, Brain, Shield, Zap, TrendingUp, ExternalLink, Radio,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const features = [
  {
    icon: Search,
    title: "Auto-Discovery Engine",
    description:
      "Scans 18+ AWS services automatically. EC2, RDS, S3, Lambda, DynamoDB, ElastiCache, and more — all discovered in a single sweep with zero config.",
    highlights: ["18+ services", "Zero setup", "Tag-aware"],
    gradient: "from-violet-500 to-blue-500",
    hoverOverlay: "from-violet-500/[0.04] to-blue-500/[0.04]",
    glow: "group-hover:shadow-violet-500/20",
    badge: false,
  },
  {
    icon: BarChart3,
    title: "P95 Metrics Analysis",
    description:
      "14 days of CloudWatch metrics with P95 percentile analysis — not averages — for accurate idle detection and rightsizing without false positives.",
    highlights: ["14-day window", "P95 percentile", "CloudWatch native"],
    gradient: "from-cyan-500 to-teal-500",
    hoverOverlay: "from-cyan-500/[0.04] to-teal-500/[0.04]",
    glow: "group-hover:shadow-cyan-500/20",
    badge: false,
  },
  {
    icon: Brain,
    title: "25+ Optimization Rules",
    description:
      "Rule engine checks every resource: idle instances, missing lifecycle rules, gp2→gp3 migration, over-provisioned DynamoDB, unused Lambda functions, and more.",
    highlights: ["Confidence scoring", "Risk levels", "Per-resource"],
    gradient: "from-violet-500 to-pink-500",
    hoverOverlay: "from-violet-500/[0.04] to-pink-500/[0.04]",
    glow: "group-hover:shadow-violet-500/20",
    badge: false,
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description:
      "Continuous CIS AWS Foundations and SOC 2 compliance checks. STS AssumeRole with read-only access — no credentials stored, complete audit logging.",
    highlights: ["CIS Benchmarks", "SOC 2", "Read-only access"],
    gradient: "from-emerald-500 to-green-500",
    hoverOverlay: "from-emerald-500/[0.04] to-green-500/[0.04]",
    glow: "group-hover:shadow-emerald-500/20",
    badge: false,
  },
  {
    icon: Zap,
    title: "One-Click Actions",
    description:
      "Accept, reject, defer, or implement recommendations directly from the dashboard. Track implementation status and realized savings over time.",
    highlights: ["4 action types", "Track savings", "Team workflows"],
    gradient: "from-amber-500 to-orange-500",
    hoverOverlay: "from-amber-500/[0.04] to-orange-500/[0.04]",
    glow: "group-hover:shadow-amber-500/20",
    badge: false,
  },
  {
    icon: TrendingUp,
    title: "Cost Trend Analytics",
    description:
      "90-day cost history from AWS Cost Explorer, broken down by service. Budget alerts, forecasting, and month-over-month change tracking.",
    highlights: ["90-day history", "Budget alerts", "MoM trends"],
    gradient: "from-rose-500 to-red-500",
    hoverOverlay: "from-rose-500/[0.04] to-red-500/[0.04]",
    glow: "group-hover:shadow-rose-500/20",
    badge: false,
  },
  {
    icon: Radio,
    title: "Real-Time Agent Monitoring",
    description:
      "Install a lightweight agent on any server — EC2, containers, or bare metal. Get live CPU, memory, disk, and network metrics every 60 seconds with zero CloudWatch costs.",
    highlights: ["$0 AWS cost", "psutil-based", "WebSocket live"],
    gradient: "from-teal-500 to-cyan-500",
    hoverOverlay: "from-teal-500/[0.04] to-cyan-500/[0.04]",
    glow: "group-hover:shadow-teal-500/20",
    badge: true,
  },
];

function FeatureCard({
  feature,
  index,
  className = "",
}: {
  feature: (typeof features)[0];
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`glass-card p-7 group relative overflow-hidden hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500 hover:shadow-xl ${feature.glow} ${className}`}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.hoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Badge */}
      {feature.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold animate-pulse">
            New
          </span>
        </div>
      )}

      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
        >
          <feature.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {feature.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {feature.highlights.map((h) => (
            <span
              key={h}
              className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36 bg-[#06070a] bg-dots">
      {/* Background gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06070a] via-transparent to-[#06070a] pointer-events-none" />

      {/* Aurora gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[200px] animate-aurora-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[180px] animate-aurora-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Everything You Need to
            <br />
            <span className="text-gradient">Optimize Your Cloud</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Seven core capabilities covering discovery, analysis, optimization,
            compliance, cost management, and real-time monitoring — all powered
            by real AWS data.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-5">
          {/* Row 1: 2-col + 1-col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              feature={features[0]}
              index={0}
              className="md:col-span-2"
            />
            <FeatureCard
              feature={features[1]}
              index={1}
              className="md:col-span-1"
            />
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard feature={features[2]} index={2} />
            <FeatureCard feature={features[3]} index={3} />
            <FeatureCard feature={features[4]} index={4} />
          </div>

          {/* Row 3: 1-col + 2-col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              feature={features[5]}
              index={5}
              className="md:col-span-1"
            />
            <FeatureCard
              feature={features[6]}
              index={6}
              className="md:col-span-2"
            />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-1"
          >
            Try All Features Free
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
