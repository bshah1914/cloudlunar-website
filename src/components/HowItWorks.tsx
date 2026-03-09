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
    glowColor: "blue-500",
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
    color: "from-blue-500 to-indigo-500",
    glowColor: "blue-500",
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
    color: "from-cyan-500 to-teal-500",
    glowColor: "cyan-500",
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
    glowColor: "amber-500",
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
    glowColor: "green-500",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: "easeOut" as const,
    },
  }),
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 overflow-hidden"
      style={{ backgroundColor: "#030712" }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-green-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-sm font-semibold tracking-widest uppercase mb-5">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-1 mb-5">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            From connect to savings in 5 simple steps. Fully automated — no
            manual tagging or configuration required.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop: Horizontal connecting gradient line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-cyan-500 via-teal-500 via-emerald-500 to-green-500 opacity-40 rounded-full" />
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, transparent, transparent 8px, #030712 8px, #030712 16px)",
              }}
            />
          </div>

          {/* Mobile: Vertical connecting gradient line */}
          <div className="lg:hidden absolute left-[28px] top-[52px] bottom-[52px] w-[2px]">
            <div className="w-full h-full bg-gradient-to-b from-blue-500 via-cyan-500 via-teal-500 via-emerald-500 to-green-500 opacity-40 rounded-full" />
            <div
              className="absolute inset-0 rounded-full opacity-30"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 8px, #030712 8px, #030712 16px)",
              }}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-0 group"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} p-[2px] shadow-lg`}
                    >
                      <div className="w-full h-full rounded-full bg-[#060d1f] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex-1 lg:mt-6 lg:w-full rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md p-5 transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.25 }}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detail Bullets */}
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li
                          key={d}
                          className="text-xs text-gray-500 flex items-start gap-2"
                        >
                          <span
                            className={`mt-1.5 w-1 h-1 flex-shrink-0 rounded-full bg-gradient-to-br ${step.color}`}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
