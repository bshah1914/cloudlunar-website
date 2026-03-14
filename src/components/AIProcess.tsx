import React from "react";
import { motion } from "framer-motion";
import {
  Scan,
  BrainCircuit,
  LineChart,
  Lightbulb,
  Rocket,
  ArrowRight,
  Sparkles,
  Cpu,
  Activity,
  TrendingDown,
} from "lucide-react";

const steps = [
  {
    icon: Scan,
    title: "Intelligent Discovery",
    description: "AI-powered agents scan your entire AWS infrastructure in minutes, mapping every resource, dependency, and cost center automatically.",
    details: ["18+ AWS services auto-detected", "Cross-account discovery", "Real-time resource mapping"],
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/20",
    delay: 0,
  },
  {
    icon: BrainCircuit,
    title: "Deep Analysis Engine",
    description: "Our ML models analyze 14 days of CloudWatch metrics using P95 percentile analysis to understand true resource utilization patterns.",
    details: ["P95 percentile accuracy", "Pattern recognition", "Anomaly detection"],
    color: "from-cyan-500 to-teal-500",
    glow: "bg-cyan-500/20",
    delay: 0.15,
  },
  {
    icon: Lightbulb,
    title: "Smart Recommendations",
    description: "25+ optimization rules process analysis data to generate prioritized, actionable recommendations ranked by potential savings impact.",
    details: ["Risk-scored suggestions", "ROI-ranked actions", "One-click implementation"],
    color: "from-teal-500 to-emerald-500",
    glow: "bg-teal-500/20",
    delay: 0.3,
  },
  {
    icon: Rocket,
    title: "Continuous Optimization",
    description: "Real-time monitoring tracks cost trends, detects anomalies against rolling averages, and alerts you before budget overruns happen.",
    details: ["24/7 cost monitoring", "Budget drift alerts", "Automated compliance"],
    color: "from-emerald-500 to-blue-500",
    glow: "bg-emerald-500/20",
    delay: 0.45,
  },
];

const metrics = [
  { icon: Cpu, value: "< 30s", label: "Full Scan Time", sublabel: "18+ services" },
  { icon: Activity, value: "25+", label: "AI Rules", sublabel: "Always learning" },
  { icon: LineChart, value: "P95", label: "Accuracy", sublabel: "Metric analysis" },
  { icon: TrendingDown, value: "40%", label: "Avg Savings", sublabel: "First month" },
];

export default function AIProcess() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#030712] dark:via-blue-950/30 dark:to-[#030712] pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[180px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-600/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">AI-Driven Optimization</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Powered by <span className="text-gradient">Intelligent Automation</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our AI engine doesn't just scan — it understands your infrastructure, learns usage patterns, and delivers recommendations that actually make sense.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-24">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Step number */}
                <div className="absolute -top-3 -left-2 w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-500/20 flex items-center justify-center z-10">
                  <span className="text-[10px] font-bold text-blue-400">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="glass-card p-6 h-full relative overflow-hidden group-hover:border-gray-300 dark:group-hover:border-white/20 transition-all duration-500">
                  {/* Glow on hover */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 ${step.glow} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow connector (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-5 h-5 text-blue-500/30" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Engine Performance</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Real numbers from real infrastructure analysis.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-500/20 transition-colors">
                    <metric.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{metric.label}</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500">{metric.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
