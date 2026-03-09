import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ExternalLink, Sparkles } from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const plans = [
  {
    name: "Starter",
    monthly: "$0",
    annual: "$0",
    period: "forever",
    annualPeriod: "forever",
    description: "Get started with basic cloud cost monitoring and alerts.",
    features: [
      "2 cloud accounts",
      "3 team members",
      "Basic cost dashboard",
      "Daily cost reports",
      "Email alerts",
      "7-day data retention",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Growth",
    monthly: "$79",
    annual: "$63",
    period: "/month",
    annualPeriod: "/mo billed annually",
    description: "Advanced optimization for growing cloud infrastructure.",
    features: [
      "10 cloud accounts",
      "15 team members",
      "AWS cloud dashboard",
      "AI cost recommendations",
      "Cost anomaly detection",
      "Custom reports & exports",
      "Budget alerts & tracking",
      "30-day data retention",
      "Cross-platform agent (Linux/macOS/Win)",
      "Email + chat support",
    ],
    cta: "Start 14-Day Trial",
    popular: false,
  },
  {
    name: "Professional",
    monthly: "$199",
    annual: "$159",
    period: "/month",
    annualPeriod: "/mo billed annually",
    description: "Full-featured platform for scaling organizations.",
    features: [
      "50 cloud accounts",
      "50 team members",
      "Everything in Growth, plus:",
      "Advanced AI optimization engine",
      "Compliance monitoring (SOC 2, HIPAA)",
      "What-if simulation engine",
      "REST API access",
      "Tag-based cost allocation",
      "Slack & Teams integration",
      "90-day data retention",
      "Role-based access control",
      "Priority support",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: "$499",
    annual: "$399",
    period: "/month",
    annualPeriod: "/mo billed annually",
    description: "Unlimited scale with premium support and SLA guarantees.",
    features: [
      "Unlimited cloud accounts",
      "Unlimited team members",
      "Everything in Professional, plus:",
      "SSO / SAML authentication",
      "Custom compliance frameworks",
      "Advanced anomaly detection",
      "Dedicated account manager",
      "Custom data retention",
      "SLA guarantees (99.9%)",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-28 md:py-36" style={{ backgroundColor: "#030712" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="inline-block text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Simple, Transparent<br />
            <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Start free and scale as your cloud grows. Every plan includes real AWS data analysis.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${annual ? "bg-gradient-to-r from-blue-600 to-cyan-500" : "bg-white/10"}`}
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1.5 w-5 h-5 rounded-full bg-white shadow-lg"
                style={{ left: annual ? "calc(100% - 26px)" : "6px" }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-gray-500"}`}>
              Annual
              <span className="ml-2 text-[10px] px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-semibold">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative group rounded-2xl flex flex-col ${plan.popular ? "lg:-mt-4 lg:mb-0" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500/20 opacity-100" />
              )}

              <div className={`relative flex flex-col h-full rounded-2xl p-7 backdrop-blur-xl transition-shadow duration-300 ${
                plan.popular
                  ? "bg-[#060d1f]/95 shadow-xl shadow-blue-500/10 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
                  : "bg-white/[0.03] border border-white/[0.06] group-hover:shadow-xl group-hover:shadow-white/5 group-hover:bg-white/[0.05]"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-lg shadow-blue-500/25">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {annual ? plan.annual : plan.monthly}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {annual ? plan.annualPeriod : plan.period}
                  </span>
                </div>

                <div className={`h-px mb-6 ${plan.popular ? "bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" : "bg-white/[0.06]"}`} />

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[13px] text-gray-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={TOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                      : "bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] text-white hover:border-white/[0.15]"
                  }`}
                >
                  {plan.cta}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center mt-14">
          <p className="text-sm text-gray-600">
            All plans include &bull; Real AWS data &bull; Secure STS AssumeRole &bull; Read-only access &bull; SOC 2 compliant
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Have a coupon code? Apply it at checkout for additional discounts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
