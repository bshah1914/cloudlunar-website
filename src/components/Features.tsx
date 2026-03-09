import React from "react";
import { motion } from "framer-motion";
import {
  Search, BarChart3, Brain, Shield, Zap, TrendingUp, ExternalLink, Radio,
  AlertTriangle, Tag, ScrollText, Container, Ship,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const features = [
  {
    icon: Search,
    title: "Auto-Discovery Engine",
    description: "Scans 18+ AWS services automatically. EC2, RDS, S3, Lambda, DynamoDB, ElastiCache, and more \u2014 all discovered in a single sweep with zero config.",
    highlights: ["18+ services", "Zero setup", "Tag-aware"],
    gradient: "from-blue-500 to-cyan-500",
    hoverOverlay: "from-blue-500/[0.04] to-cyan-500/[0.04]",
    glow: "group-hover:shadow-blue-500/20",
    badge: false,
  },
  {
    icon: BarChart3,
    title: "P95 Metrics Analysis",
    description: "14 days of CloudWatch metrics with P95 percentile analysis \u2014 not averages \u2014 for accurate idle detection and rightsizing without false positives.",
    highlights: ["14-day window", "P95 percentile", "CloudWatch native"],
    gradient: "from-cyan-500 to-teal-500",
    hoverOverlay: "from-cyan-500/[0.04] to-teal-500/[0.04]",
    glow: "group-hover:shadow-cyan-500/20",
    badge: false,
  },
  {
    icon: Brain,
    title: "25+ Optimization Rules",
    description: "Rule engine checks every resource: idle instances, missing lifecycle rules, gp2\u2192gp3 migration, over-provisioned DynamoDB, unused Lambda functions, and more.",
    highlights: ["Confidence scoring", "Risk levels", "Per-resource"],
    gradient: "from-blue-600 to-indigo-500",
    hoverOverlay: "from-blue-600/[0.04] to-indigo-500/[0.04]",
    glow: "group-hover:shadow-blue-500/20",
    badge: false,
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Continuous CIS AWS Foundations and SOC 2 compliance checks. STS AssumeRole with read-only access \u2014 no credentials stored, complete audit logging.",
    highlights: ["CIS Benchmarks", "SOC 2", "Read-only access"],
    gradient: "from-emerald-500 to-green-500",
    hoverOverlay: "from-emerald-500/[0.04] to-green-500/[0.04]",
    glow: "group-hover:shadow-emerald-500/20",
    badge: false,
  },
  {
    icon: Zap,
    title: "One-Click Actions",
    description: "Accept, reject, defer, or implement recommendations directly from the dashboard. Track implementation status and realized savings over time.",
    highlights: ["4 action types", "Track savings", "Team workflows"],
    gradient: "from-amber-500 to-orange-500",
    hoverOverlay: "from-amber-500/[0.04] to-orange-500/[0.04]",
    glow: "group-hover:shadow-amber-500/20",
    badge: false,
  },
  {
    icon: TrendingUp,
    title: "Cost Trend Analytics",
    description: "90-day cost history from AWS Cost Explorer, broken down by service. Budget alerts, forecasting, and month-over-month change tracking.",
    highlights: ["90-day history", "Budget alerts", "MoM trends"],
    gradient: "from-rose-500 to-red-500",
    hoverOverlay: "from-rose-500/[0.04] to-red-500/[0.04]",
    glow: "group-hover:shadow-rose-500/20",
    badge: false,
  },
  {
    icon: Radio,
    title: "Cross-Platform Agent Monitoring",
    description: "Install a lightweight agent on Linux, macOS, or Windows \u2014 EC2, containers, or bare metal. Get live CPU, memory, disk, and network metrics every 60 seconds with zero CloudWatch costs.",
    highlights: ["$0 AWS cost", "Linux / macOS / Windows", "WebSocket live"],
    gradient: "from-teal-500 to-cyan-500",
    hoverOverlay: "from-teal-500/[0.04] to-cyan-500/[0.04]",
    glow: "group-hover:shadow-teal-500/20",
    badge: true,
  },
  {
    icon: AlertTriangle,
    title: "Cost Anomaly Detection",
    description: "Automatic spike and drop detection against rolling averages. Get alerted when a service's daily cost deviates significantly \u2014 catch runaway resources before the bill arrives.",
    highlights: ["Rolling average", "Per-service alerts", "Auto-detect"],
    gradient: "from-red-500 to-orange-500",
    hoverOverlay: "from-red-500/[0.04] to-orange-500/[0.04]",
    glow: "group-hover:shadow-red-500/20",
    badge: true,
  },
  {
    icon: Tag,
    title: "Tag-Based Cost Allocation",
    description: "Group costs by any AWS tag \u2014 Environment, Team, Project, or custom keys. See exactly which team or project is spending what, with untagged resource tracking.",
    highlights: ["Any tag key", "Team/project split", "Untagged tracking"],
    gradient: "from-indigo-500 to-blue-500",
    hoverOverlay: "from-indigo-500/[0.04] to-blue-500/[0.04]",
    glow: "group-hover:shadow-indigo-500/20",
    badge: true,
  },
  {
    icon: ScrollText,
    title: "System Logs & Audit Trail",
    description: "Centralized log portal aggregating events from account syncs, resource discovery, cost ingestion, and recommendations. Filter by level, category, and time range.",
    highlights: ["Unified timeline", "Level filtering", "Full audit trail"],
    gradient: "from-gray-500 to-slate-500",
    hoverOverlay: "from-gray-500/[0.04] to-slate-500/[0.04]",
    glow: "group-hover:shadow-gray-500/20",
    badge: true,
  },
  {
    icon: Ship,
    title: "Kubernetes Monitoring",
    description: "Full visibility into EKS clusters — track node utilization, pod resource requests vs actual usage, namespace cost allocation, and idle workload detection across your K8s fleet.",
    highlights: ["EKS clusters", "Pod rightsizing", "Namespace costs"],
    gradient: "from-blue-500 to-indigo-500",
    hoverOverlay: "from-blue-500/[0.04] to-indigo-500/[0.04]",
    glow: "group-hover:shadow-blue-500/20",
    badge: true,
  },
  {
    icon: Container,
    title: "ECS & Fargate Monitoring",
    description: "Monitor ECS services and Fargate tasks in real time. Detect idle services with zero desired tasks, optimize CPU/memory allocations, and track per-service container costs.",
    highlights: ["Task-level metrics", "CPU/mem rightsizing", "Cluster costs"],
    gradient: "from-emerald-500 to-teal-500",
    hoverOverlay: "from-emerald-500/[0.04] to-teal-500/[0.04]",
    glow: "group-hover:shadow-emerald-500/20",
    badge: true,
  },
];

function FeatureCard({ feature, index, className = "" }: { feature: (typeof features)[0]; index: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`glass-card p-7 group relative overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 hover:shadow-xl ${feature.glow} ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.hoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {feature.badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="text-[10px] px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold animate-pulse">
            New
          </span>
        </div>
      )}

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
          <feature.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">{feature.description}</p>
        <div className="flex flex-wrap gap-2">
          {feature.highlights.map((h) => (
            <span key={h} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-white/10 transition-colors">
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
    <section id="features" className="relative py-28 md:py-36 bg-[#030712] bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[200px] animate-aurora-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[180px] animate-aurora-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Everything You Need to<br />
            <span className="text-gradient">Optimize Your Cloud</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Twelve core capabilities covering discovery, analysis, optimization,
            compliance, anomaly detection, cost allocation, Kubernetes, container
            monitoring &mdash; all powered by real AWS data.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard feature={features[0]} index={0} className="md:col-span-2" />
            <FeatureCard feature={features[1]} index={1} className="md:col-span-1" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard feature={features[2]} index={2} />
            <FeatureCard feature={features[3]} index={3} />
            <FeatureCard feature={features[4]} index={4} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard feature={features[5]} index={5} className="md:col-span-1" />
            <FeatureCard feature={features[6]} index={6} className="md:col-span-2" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard feature={features[7]} index={7} />
            <FeatureCard feature={features[8]} index={8} />
            <FeatureCard feature={features[9]} index={9} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FeatureCard feature={features[10]} index={10} />
            <FeatureCard feature={features[11]} index={11} />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <a
            href={TOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            Try All Features Free
            <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
