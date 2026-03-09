import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const faqs = [
  {
    q: "How does CloudLunar connect to my AWS account?",
    a: "CloudLunar uses AWS STS AssumeRole for secure cross-account access. You create a read-only IAM role in your AWS account and provide the Role ARN. No access keys or secrets are stored \u2014 credentials are temporary and scoped to read-only permissions. Setup takes under 5 minutes.",
  },
  {
    q: "What AWS services does CloudLunar scan?",
    a: "CloudLunar auto-discovers 18+ AWS services: EC2, RDS, S3, EBS Volumes, Elastic IPs, ALB/NLB/CLB, Lambda, NAT Gateways, EBS Snapshots, DynamoDB, ElastiCache, Redshift, CloudFront, ECS/Fargate, OpenSearch, SQS, and CloudWatch Log Groups. Each service has dedicated optimization checks.",
  },
  {
    q: "Is the data real or synthetic?",
    a: "100% real. Every metric comes from CloudWatch, every cost from Cost Explorer, every resource from AWS APIs. CloudLunar never generates fake, hardcoded, or synthetic data. Pricing is fetched from the AWS Pricing API with local cache fallback.",
  },
  {
    q: "How accurate are the savings recommendations?",
    a: "Each recommendation includes a confidence score (0-99%) based on data quality, statistical stability, and analysis window. We use P95 percentile analysis (not simple averages) to avoid false positives. Risk levels (low/medium/high) help you prioritize safely.",
  },
  {
    q: "Can I use CloudLunar with multiple AWS accounts?",
    a: "Yes. CloudLunar supports multi-account setups. Each account has its own IAM role and gets scanned independently. The dashboard aggregates data across all accounts with per-account filtering. Starter supports 5 accounts, Professional up to 20, and Enterprise is unlimited.",
  },
  {
    q: "What optimization checks does the engine run?",
    a: "25+ checks including: idle resource detection (P95 CPU < 5%), EC2/RDS rightsizing, S3 lifecycle rules, S3 Intelligent-Tiering, EBS gp2\u2192gp3 migration, unattached EBS/EIP cleanup, idle load balancers, Lambda memory rightsizing, unused Lambda deletion, DynamoDB on-demand switching, ElastiCache idle clusters, Redshift RA3 migration, CloudFront price class optimization, ECS Fargate rightsizing, OpenSearch Graviton migration, SQS DLQ monitoring, and CloudWatch Logs retention policies.",
  },
  {
    q: "Does CloudLunar modify or change anything in my AWS account?",
    a: "No. CloudLunar only uses read-only API calls. It never creates, modifies, or deletes any resources. Recommendations are surfaced in the dashboard \u2014 implementation is always done by your team with full control.",
  },
  {
    q: "What's the tech stack?",
    a: "Frontend: Next.js 14, TypeScript, Tailwind CSS, Recharts. Backend: FastAPI (Python), async SQLAlchemy, PostgreSQL/TimescaleDB, Redis. AWS Integration: boto3, CloudWatch, Cost Explorer, STS, Pricing API. Infrastructure: Docker, Alembic migrations.",
  },
  {
    q: "How often does CloudLunar scan my resources?",
    a: "Scan frequency depends on your plan: Free gets basic scans, Starter ($99/mo) includes regular scans, Professional ($299/mo) gets daily automated scans, and Enterprise ($999/mo) offers continuous real-time scanning. You can also trigger on-demand scans from the dashboard at any time.",
  },
  {
    q: "Is CloudLunar SOC 2 compliant?",
    a: "Yes. The platform is built with SOC 2 compliance in mind: encrypted data at rest and in transit, complete audit logging, RBAC with least-privilege access, and no persistent credential storage. We also monitor your resources against CIS and SOC 2 benchmarks.",
  },
];

function FAQItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-white/5">
      <button onClick={toggle} className="w-full flex items-center justify-between py-5 text-left group">
        <span className={`text-sm font-medium transition-colors ${isOpen ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
          {q}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-indigo-400" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-400 leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Everything you need to know about CloudLunar. Can't find your answer? Contact our team.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">Still have questions?</p>
          <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-white text-sm font-medium rounded-xl transition-all">
            Contact Support <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
