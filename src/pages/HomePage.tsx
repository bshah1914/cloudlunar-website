import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Search, BarChart3, Brain, Shield, Zap, TrendingUp, Radio, AlertTriangle, Tag, ScrollText, Ship, Container } from "lucide-react";
import PageTransition from "../components/shared/PageTransition";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import AIProcess from "../components/AIProcess";

const features = [
  { icon: Search, title: "Auto-Discovery Engine", description: "Scans 18+ AWS services automatically with zero config.", color: "from-blue-500 to-cyan-500" },
  { icon: BarChart3, title: "P95 Metrics Analysis", description: "14 days of CloudWatch metrics with P95 percentile accuracy.", color: "from-cyan-500 to-teal-500" },
  { icon: Brain, title: "25+ Optimization Rules", description: "Rule engine checks every resource for savings opportunities.", color: "from-blue-600 to-indigo-500" },
  { icon: Shield, title: "Compliance & Security", description: "CIS AWS Foundations and SOC 2 compliance monitoring.", color: "from-emerald-500 to-green-500" },
  { icon: Zap, title: "One-Click Actions", description: "Accept, reject, defer, or implement recommendations.", color: "from-amber-500 to-orange-500" },
  { icon: TrendingUp, title: "Cost Trend Analytics", description: "90-day cost history, budget alerts, and forecasting.", color: "from-rose-500 to-red-500" },
  { icon: Radio, title: "Cross-Platform Agent", description: "Live CPU, memory, disk, network metrics at $0 cost.", color: "from-teal-500 to-cyan-500", isNew: true },
  { icon: AlertTriangle, title: "Anomaly Detection", description: "Auto-detect cost spikes against rolling averages.", color: "from-red-500 to-orange-500", isNew: true },
  { icon: Tag, title: "Tag-Based Allocation", description: "Group costs by team, project, or any AWS tag.", color: "from-indigo-500 to-blue-500", isNew: true },
  { icon: ScrollText, title: "System Logs", description: "Centralized audit trail for all platform events.", color: "from-gray-500 to-slate-500", isNew: true },
  { icon: Ship, title: "Kubernetes Monitoring", description: "EKS cluster visibility, pod rightsizing, namespace costs.", color: "from-blue-500 to-indigo-500", isNew: true },
  { icon: Container, title: "ECS & Fargate", description: "Container task metrics, idle service detection, cost tracking.", color: "from-emerald-500 to-teal-500", isNew: true },
];

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <TrustedBy />
      <AIProcess />

      {/* Features Preview */}
      <section className="relative py-28 md:py-36 bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Capabilities</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
              Everything You Need to<br />
              <span className="text-gradient">Optimize Your Cloud</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Twelve core capabilities covering discovery, analysis, optimization, compliance, Kubernetes, and container monitoring.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            {features.slice(0, 6).map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card-glow p-6 group cursor-default relative overflow-hidden"
              >
                {feature.isNew && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold">New</span>
                  </div>
                )}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{feature.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-12">
            {features.slice(6).map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 6) * 0.08 }} whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card-glow p-6 group cursor-default relative overflow-hidden"
              >
                {feature.isNew && (
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 font-semibold">New</span>
                  </div>
                )}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{feature.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <Link to="/features"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick CTA Strip */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-emerald-600/5" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "View Dashboard Preview", to: "/dashboard", desc: "See what real optimization looks like", color: "text-green-400" },
              { label: "Check Pricing", to: "/pricing", desc: "Start free, scale as you grow", color: "text-amber-400" },
              { label: "Download Now", to: "/download", desc: "Docker, manual, or hosted", color: "text-cyan-400" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={item.to} className="group block glass-card-glow p-8 text-center hover:-translate-y-2 transition-all duration-500">
                  <p className={`text-lg font-semibold text-white mb-2 group-hover:${item.color} transition-colors`}>{item.label}</p>
                  <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                  <ArrowRight className={`w-5 h-5 ${item.color} mx-auto group-hover:translate-x-2 transition-transform`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
