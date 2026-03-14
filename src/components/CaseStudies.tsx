import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingDown, Clock, Server, ChevronRight, Building2, Shield, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    company: "FinServe Technologies",
    industry: "Financial Services",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    tagColor: "bg-blue-50 text-blue-600 border-blue-200",
    challenge: "Managing 200+ AWS accounts with no visibility into idle resources. Monthly cloud bill exceeded $180K with no clear optimization path.",
    results: [
      { metric: "$47K", label: "Monthly Savings", icon: TrendingDown },
      { metric: "3 hours", label: "Setup Time", icon: Clock },
      { metric: "340+", label: "Resources Optimized", icon: Server },
      { metric: "26%", label: "Cost Reduction", icon: BarChart3 },
    ],
    quote: "CloudLunar found savings we completely missed. The S3 lifecycle detection alone saved us $12K/month.",
    person: "Rajesh Patel, VP Engineering",
    highlights: ["S3 lifecycle optimization saved $12K/mo", "180 unattached EBS volumes cleaned up", "DynamoDB on-demand switching across 40 tables"],
  },
  {
    company: "ScaleUp Health",
    industry: "Healthcare & Compliance",
    icon: Shield,
    color: "from-emerald-500 to-green-500",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    challenge: "Needed compliance monitoring alongside cost optimization. Running three separate tools with overlapping functionality and high overhead.",
    results: [
      { metric: "3 tools", label: "Replaced", icon: Zap },
      { metric: "$31K", label: "Monthly Savings", icon: TrendingDown },
      { metric: "100%", label: "SOC 2 Coverage", icon: Shield },
      { metric: "< 5 min", label: "Setup Time", icon: Clock },
    ],
    quote: "We replaced three separate tools with CloudLunar. Compliance violations and cost-saving opportunities in one dashboard.",
    person: "Michael Torres, CTO",
    highlights: ["CIS & SOC 2 compliance monitoring built-in", "Consolidated from 3 tools to 1 platform", "HIPAA-ready infrastructure scanning"],
  },
  {
    company: "GameForge Studios",
    industry: "Gaming & Entertainment",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    tagColor: "bg-amber-50 text-amber-600 border-amber-200",
    challenge: "Rapidly scaling infrastructure for game launches with hundreds of Lambda functions and EC2 instances that often went idle after events.",
    results: [
      { metric: "40", label: "Idle Lambdas Found", icon: Server },
      { metric: "$23K", label: "Monthly Savings", icon: TrendingDown },
      { metric: "400+", label: "EBS Volumes Migrated", icon: BarChart3 },
      { metric: "< 1 hr", label: "First Recommendations", icon: Clock },
    ],
    quote: "Lambda optimization identified 40 zero-invocation functions and 12 over-provisioned on memory. Incredible.",
    person: "James Wilson, Platform Engineer",
    highlights: ["Lambda memory rightsizing across 200+ functions", "gp2 to gp3 EBS migration saved $8K/mo", "Automated idle resource detection post-launch"],
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = caseStudies[activeIndex];

  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-white dark:bg-[#030712]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[200px] animate-aurora-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Case Studies</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
            Real Companies,<br />
            <span className="text-gradient-amber">Real Savings</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            See how engineering teams across industries are cutting cloud costs with CloudLunar.
          </p>
        </motion.div>

        {/* Company Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          {caseStudies.map((cs, i) => (
            <motion.button
              key={cs.company}
              onClick={() => setActiveIndex(i)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-left transition-all flex-1 ${
                activeIndex === i
                  ? "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg"
                  : "bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/5 hover:shadow-sm"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cs.color} flex items-center justify-center flex-shrink-0 ${
                activeIndex === i ? "shadow-lg" : ""
              }`}>
                <cs.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${activeIndex === i ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>{cs.company}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500">{cs.industry}</p>
              </div>
              {activeIndex === i && (
                <motion.div layoutId="cs-indicator" className="ml-auto">
                  <ChevronRight className="w-4 h-4 text-blue-500" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Case Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-gray-50/50 to-transparent">
                <span className={`inline-block text-[10px] px-2.5 py-1 rounded-full border font-semibold mb-6 ${active.tagColor}`}>
                  {active.industry}
                </span>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {active.results.map((r, i) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="text-center p-4 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm"
                    >
                      <r.icon className="w-5 h-5 mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                      <p className="text-xl font-bold text-gray-900 dark:text-white">{r.metric}</p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{r.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  {active.highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-1.5 flex-shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{active.company}</h3>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">The Challenge</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{active.challenge}</p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative bg-blue-50/50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/10 rounded-xl p-6 mb-6"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed mb-3">"{active.quote}"</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">— {active.person}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/pricing"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    Get Similar Results
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
