import React from "react";
import { motion } from "framer-motion";
import {
  Link2,
  ScanSearch,
  LineChart,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Connect Your AWS Account",
    description:
      "Provide an IAM role ARN with read-only access. CloudLunar uses STS AssumeRole — no credentials are stored. Setup takes under 5 minutes.",
    details: [
      "Cross-account IAM role setup",
      "Read-only permissions only",
      "No access keys stored",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ScanSearch,
    step: "02",
    title: "Auto-Discovery Scan",
    description:
      "The engine scans all 18+ AWS service types automatically, building a complete inventory of your cloud resources with metadata.",
    details: [
      "EC2, RDS, S3, Lambda, DynamoDB...",
      "Tags, configuration, and status",
      "Region-aware scanning",
    ],
    color: "from-lunar-500 to-purple-500",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Metrics & Cost Analysis",
    description:
      "CloudWatch metrics are collected (CPU, memory, network) with P95 analysis. Cost Explorer provides 90-day spend history per service.",
    details: [
      "14-day CloudWatch metrics",
      "P95 percentile evaluation",
      "90-day Cost Explorer trends",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    step: "04",
    title: "AI Recommendations",
    description:
      "25+ optimization rules analyze every resource. Each recommendation includes risk level, confidence score, and estimated savings.",
    details: [
      "Idle detection & rightsizing",
      "Storage tier optimization",
      "Commitment opportunities (RI/SP)",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Take Action",
    description:
      "Accept, reject, defer, or implement recommendations directly from the dashboard. Track realized savings over time.",
    details: [
      "One-click action workflow",
      "Implementation tracking",
      "Savings realization reports",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            From connect to savings in 5 simple steps. Fully automated — no
            manual tagging or configuration required.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-lunar-500/50 via-purple-500/50 to-green-500/50 hidden sm:block" />

          <div className="space-y-16">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="hidden sm:flex absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`glass-card p-6 md:w-[calc(50%-40px)] ${
                      isLeft ? "md:mr-auto" : "md:ml-auto"
                    } ml-16 sm:ml-0 hover:bg-white/10 transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center sm:hidden`}
                      >
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-1.5">
                      {step.details.map((d) => (
                        <li
                          key={d}
                          className="text-xs text-gray-500 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-lunar-500 rounded-full" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
