import React from "react";
import { motion } from "framer-motion";
import {
  Search, BarChart3, Brain, Shield, Bell, Layers, Zap, Lock,
  GitBranch, Eye, Target, TrendingUp,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const features = [
  {
    icon: Search, title: "Auto-Discovery Engine",
    description: "Scans all 18+ AWS services automatically using boto3. EC2, RDS, S3, DynamoDB, Lambda, ElastiCache, Redshift, CloudFront, ECS, OpenSearch, SQS, CloudWatch Logs, EBS, EIP, ELB, NAT Gateway, and EBS Snapshots \u2014 all discovered in a single sweep.",
    highlights: ["18+ service types", "Zero manual config", "Tag-aware scanning"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BarChart3, title: "P95 Metrics Analysis",
    description: "Collects 14 days of CloudWatch metrics including CPU, memory, network, and connections. Uses P95 percentile analysis \u2014 not averages \u2014 to ensure accurate idle detection and rightsizing without false positives.",
    highlights: ["14-day data window", "P95 percentile", "CloudWatch native"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Brain, title: "25+ Optimization Rules",
    description: "Rule-based engine checks every resource type: idle EC2s, S3 buckets without lifecycle rules, gp2\u2192gp3 migration, unattached EIPs, over-provisioned DynamoDB, unused Lambda functions, old snapshots, and more.",
    highlights: ["Per-resource checks", "Confidence scoring", "Risk assessment"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield, title: "Compliance Monitoring",
    description: "Continuous compliance checks against CIS AWS Foundations, SOC 2, and custom frameworks. Real-time violation detection with step-by-step remediation guidance.",
    highlights: ["CIS Benchmarks", "SOC 2 controls", "Custom frameworks"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Bell, title: "Budget Alerts & Forecasting",
    description: "Set budgets per account, service, or tag. Automatic threshold monitoring with critical breach alerts. Cost forecasting based on 90-day spend trends from Cost Explorer.",
    highlights: ["Per-service budgets", "Threshold alerts", "90-day trends"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Layers, title: "Multi-Tenant SaaS Architecture",
    description: "Production-ready multi-tenant platform with complete data isolation per tenant. RBAC with Admin, Analyst, and Viewer roles. Team invitation system with secure JWT authentication.",
    highlights: ["Tenant isolation", "RBAC (3 roles)", "Team management"],
    color: "from-rose-500 to-red-500",
  },
  {
    icon: Zap, title: "One-Click Action Workflow",
    description: "Accept, reject, defer, or implement recommendations directly from the dashboard. Track implementation status, assigned engineer, and realized savings over time.",
    highlights: ["4 action types", "Implementation tracking", "Savings realized"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Lock, title: "Security-First Design",
    description: "STS AssumeRole for cross-account access \u2014 no access keys stored. JWT authentication, encrypted at rest, complete audit logging, and read-only IAM permissions.",
    highlights: ["STS AssumeRole", "Read-only access", "Audit logging"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: GitBranch, title: "AWS Pricing API Integration",
    description: "Fetches live EC2 pricing from the AWS Pricing API. Falls back to cached data if the API is unavailable. Always uses real, up-to-date pricing \u2014 never hardcoded estimates.",
    highlights: ["Live pricing", "Cache fallback", "Always accurate"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Eye, title: "Full Resource Visibility",
    description: "Complete inventory of every cloud resource with metadata, tags, configuration, cost, and utilization. Filter by provider, service type, region, idle status, or search by name.",
    highlights: ["Rich metadata", "JSONB tags", "Advanced filters"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Target, title: "Prioritized Recommendations",
    description: "Every recommendation includes an AI priority score, confidence level, risk assessment, effort estimate, and exact dollar savings. Sort by impact to tackle the biggest wins first.",
    highlights: ["Priority scoring", "Risk levels", "Effort estimates"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingUp, title: "Cost Trend Analytics",
    description: "90-day cost history from AWS Cost Explorer, broken down by service. Monthly summaries with month-over-month change percentages. Spot spending anomalies before they become problems.",
    highlights: ["90-day history", "Service breakdown", "MoM changes"],
    color: "from-emerald-500 to-green-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Capabilities</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Everything You Need to<br />
            <span className="text-gradient">Optimize Your Cloud</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            12 enterprise features covering discovery, analysis, optimization, compliance, and cost management. Every feature works with real AWS data.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card-hover p-6 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{feature.description}</p>
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((h) => (
                  <span key={h} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5">{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5">
            Try All Features Free <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
