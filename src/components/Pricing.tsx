import React from "react";
import { motion } from "framer-motion";
import { Check, ExternalLink, Sparkles } from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for startups and small teams getting started with cloud cost optimization.",
    features: [
      "1 AWS account",
      "Up to 50 resources",
      "Weekly scans",
      "Basic recommendations",
      "Email alerts",
      "7-day metrics history",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
    color: "border-gray-700",
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing teams that need comprehensive optimization across multiple accounts.",
    features: [
      "Up to 10 AWS accounts",
      "Unlimited resources",
      "Daily automated scans",
      "All 25+ optimization rules",
      "Compliance monitoring (CIS, SOC2)",
      "Budget alerts & forecasting",
      "90-day metrics history",
      "Priority email support",
      "Team management (up to 10)",
      "API access",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
    color: "border-indigo-500",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with complex multi-account infrastructure and compliance needs.",
    features: [
      "Unlimited AWS accounts",
      "Unlimited resources",
      "Real-time continuous scanning",
      "Custom optimization rules",
      "Custom compliance frameworks",
      "Advanced RBAC & SSO",
      "Unlimited metrics history",
      "Dedicated support engineer",
      "Unlimited team members",
      "Custom API integrations",
      "SLA guarantees",
      "On-premises deployment option",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "border-purple-700",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-surface-800/20 to-[#050510] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Simple, Transparent<br />
            <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Start free and scale as your cloud grows. Every plan includes real AWS data analysis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card p-8 ${plan.color} ${
                plan.popular ? "border-indigo-500/50 shadow-xl shadow-indigo-500/10" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={TOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                  plan.popular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/25"
                    : "glass hover:bg-white/10 text-white"
                }`}
              >
                {plan.cta}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-xs text-gray-600 mt-10">
          All plans include &bull; Real AWS data (no synthetic/fake data) &bull; Secure STS AssumeRole &bull; Read-only access &bull; SOC 2 compliant infrastructure
        </motion.p>
      </div>
    </section>
  );
}
