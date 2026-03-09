import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Newspaper, Cloud } from "lucide-react";

type NewsSource = "AWS" | "Azure" | "GCP";
type FilterTab = "All" | NewsSource;

interface NewsItem {
  id: number;
  source: NewsSource;
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    source: "AWS",
    title: "AWS Announces Graviton5 Instances for Cost-Optimized Workloads",
    excerpt:
      "New Graviton5-powered EC2 instances deliver up to 40% better price-performance over previous generation, targeting compute-heavy production workloads.",
    date: "Mar 7, 2026",
    link: "#",
  },
  {
    id: 2,
    source: "Azure",
    title: "Azure Introduces AI-Driven Cost Management Recommendations",
    excerpt:
      "Microsoft rolls out intelligent cost optimization suggestions powered by machine learning, helping enterprises reduce cloud spend by an average of 25%.",
    date: "Mar 5, 2026",
    link: "#",
  },
  {
    id: 3,
    source: "GCP",
    title: "Google Cloud Expands Confidential Computing to All VM Types",
    excerpt:
      "GCP now supports confidential VMs across its entire compute portfolio, enabling encryption-in-use for sensitive workloads without code changes.",
    date: "Mar 3, 2026",
    link: "#",
  },
  {
    id: 4,
    source: "AWS",
    title: "Amazon S3 Launches Intelligent Cold Storage Tier",
    excerpt:
      "A new automated storage class uses access-pattern analysis to move infrequently accessed objects to ultra-low-cost cold storage seamlessly.",
    date: "Feb 28, 2026",
    link: "#",
  },
  {
    id: 5,
    source: "Azure",
    title: "Azure Kubernetes Service Adds Native Multi-Cluster Mesh",
    excerpt:
      "AKS now includes built-in service mesh capabilities spanning multiple clusters and regions, simplifying zero-trust networking for microservices.",
    date: "Feb 24, 2026",
    link: "#",
  },
  {
    id: 6,
    source: "GCP",
    title: "GCP BigQuery Introduces Sub-Second Query Latency for Streaming Data",
    excerpt:
      "Real-time analytics on streaming ingestion now returns results in under one second, unlocking new use cases for fraud detection and live dashboards.",
    date: "Feb 20, 2026",
    link: "#",
  },
  {
    id: 7,
    source: "AWS",
    title: "AWS Security Hub Adds Automated Remediation Playbooks",
    excerpt:
      "Pre-built remediation workflows automatically fix common misconfigurations across EC2, S3, and IAM, reducing mean time to resolution by 60%.",
    date: "Feb 15, 2026",
    link: "#",
  },
  {
    id: 8,
    source: "Azure",
    title: "Microsoft Unveils Azure Deployment Environments for Platform Teams",
    excerpt:
      "A new self-service infrastructure provisioning experience lets developers spin up pre-approved environments in minutes with built-in governance.",
    date: "Feb 10, 2026",
    link: "#",
  },
  {
    id: 9,
    source: "GCP",
    title: "Google Cloud Launches Carbon-Aware Workload Scheduling",
    excerpt:
      "Organizations can now schedule batch and ML training jobs to run when regional grid carbon intensity is lowest, cutting carbon footprint by up to 30%.",
    date: "Feb 5, 2026",
    link: "#",
  },
  {
    id: 10,
    source: "AWS",
    title: "AWS Lambda Raises Concurrency Limits and Adds SnapStart for Python",
    excerpt:
      "Lambda now supports 10,000 concurrent executions by default, and SnapStart cold-start optimization extends beyond Java to Python runtimes.",
    date: "Jan 28, 2026",
    link: "#",
  },
  {
    id: 11,
    source: "Azure",
    title: "Azure OpenAI Service Now Available in 12 Additional Regions",
    excerpt:
      "Expanded regional availability brings GPT-4o and embedding models closer to enterprise customers, improving latency and data-residency compliance.",
    date: "Jan 20, 2026",
    link: "#",
  },
  {
    id: 12,
    source: "GCP",
    title: "GCP Announces Unified Observability Suite with AI-Powered Insights",
    excerpt:
      "A consolidated monitoring, logging, and tracing platform uses generative AI to surface root causes and recommend fixes before incidents escalate.",
    date: "Jan 12, 2026",
    link: "#",
  },
];

const sourceStyles: Record<NewsSource, { badge: string; border: string }> = {
  AWS: {
    badge: "bg-orange-400/10 text-orange-400 border border-orange-400/20",
    border: "hover:border-orange-400/40",
  },
  Azure: {
    badge: "bg-blue-400/10 text-blue-400 border border-blue-400/20",
    border: "hover:border-blue-400/40",
  },
  GCP: {
    badge: "bg-green-400/10 text-green-400 border border-green-400/20",
    border: "hover:border-green-400/40",
  },
};

const filterTabs: FilterTab[] = ["All", "AWS", "Azure", "GCP"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function News() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filteredNews =
    activeFilter === "All"
      ? newsData
      : newsData.filter((item) => item.source === activeFilter);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#06070a]">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-sm mb-6">
            <Newspaper className="w-4 h-4" />
            Latest Updates
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cloud{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              News
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Stay up to date with the latest announcements, features, and best
            practices from the major cloud providers.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tab
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-500/10"
                  : "text-gray-400 border border-white/5 hover:text-white hover:border-white/20"
              }`}
            >
              {tab === "All" && <Cloud className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />}
              {tab}
            </button>
          ))}
        </motion.div>

        {/* News Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredNews.map((item) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className={`glass-card-hover group block rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-300 ${sourceStyles[item.source].border}`}
            >
              {/* Source Badge & Date */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${sourceStyles[item.source].badge}`}
                >
                  {item.source}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-violet-300 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {item.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center gap-1.5 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                Read More
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
