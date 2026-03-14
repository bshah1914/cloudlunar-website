import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, Server, KeyRound } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Independently audited security controls for data protection and availability.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted at rest (AES-256) and in transit (TLS 1.3).",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Eye,
    title: "Read-Only Access",
    description: "CloudLunar never modifies your AWS resources. Strictly read-only API calls.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: KeyRound,
    title: "STS AssumeRole",
    description: "No permanent credentials stored. Temporary tokens via AWS STS for every session.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: FileCheck,
    title: "CIS AWS Benchmarks",
    description: "Continuous monitoring against CIS AWS Foundations Benchmark v1.5.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Server,
    title: "GDPR Compliant",
    description: "Data processing agreements, right to deletion, and EU data residency options.",
    color: "from-rose-500 to-pink-500",
  },
];

export default function TrustBadges() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 dark:from-[#030712] via-transparent to-slate-50 dark:to-[#030712] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/20"
          >
            <Shield className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
            Enterprise-Grade<br />
            <span className="text-gradient">Security & Compliance</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Your security is non-negotiable. CloudLunar is built with enterprise compliance standards from the ground up.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card-glow p-6 group cursor-default"
            >
              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 group-hover:shadow-xl transition-all duration-500`}
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <cert.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{cert.description}</p>

              <div className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${cert.color} rounded-full transition-all duration-700`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 glass-card p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
        >
          {[
            "99.9% Uptime SLA",
            "ISO 27001 Ready",
            "No Vendor Lock-in",
            "Open Source Core",
          ].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse" />
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
