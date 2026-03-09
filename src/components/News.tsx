import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Newspaper, Cloud, Cpu, Shield, Ship, Brain,
  Sparkles, TrendingUp, Zap, Globe, Search,
} from "lucide-react";

type Category = "Cloud" | "AI/ML" | "DevOps" | "Security" | "Kubernetes" | "FinOps";
type FilterTab = "All" | Category;

interface NewsItem {
  id: number;
  category: Category;
  source: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  featured?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1, category: "Cloud", source: "AWS",
    title: "AWS Announces Graviton5 Instances for Cost-Optimized Workloads",
    excerpt: "New Graviton5-powered EC2 instances deliver up to 40% better price-performance over previous generation, targeting compute-heavy production workloads.",
    date: "Mar 7, 2026", link: "#", featured: true,
  },
  {
    id: 2, category: "AI/ML", source: "Azure",
    title: "Azure Introduces AI-Driven Cost Management Recommendations",
    excerpt: "Microsoft rolls out intelligent cost optimization suggestions powered by machine learning, helping enterprises reduce cloud spend by an average of 25%.",
    date: "Mar 5, 2026", link: "#", featured: true,
  },
  {
    id: 3, category: "Security", source: "GCP",
    title: "Google Cloud Expands Confidential Computing to All VM Types",
    excerpt: "GCP now supports confidential VMs across its entire compute portfolio, enabling encryption-in-use for sensitive workloads without code changes.",
    date: "Mar 3, 2026", link: "#",
  },
  {
    id: 4, category: "Cloud", source: "AWS",
    title: "Amazon S3 Launches Intelligent Cold Storage Tier",
    excerpt: "A new automated storage class uses access-pattern analysis to move infrequently accessed objects to ultra-low-cost cold storage seamlessly.",
    date: "Feb 28, 2026", link: "#",
  },
  {
    id: 5, category: "Kubernetes", source: "Azure",
    title: "Azure Kubernetes Service Adds Native Multi-Cluster Mesh",
    excerpt: "AKS now includes built-in service mesh capabilities spanning multiple clusters and regions, simplifying zero-trust networking for microservices.",
    date: "Feb 24, 2026", link: "#", featured: true,
  },
  {
    id: 6, category: "AI/ML", source: "GCP",
    title: "GCP BigQuery Introduces Sub-Second Query Latency for Streaming Data",
    excerpt: "Real-time analytics on streaming ingestion now returns results in under one second, unlocking new use cases for fraud detection and live dashboards.",
    date: "Feb 20, 2026", link: "#",
  },
  {
    id: 7, category: "Security", source: "AWS",
    title: "AWS Security Hub Adds Automated Remediation Playbooks",
    excerpt: "Pre-built remediation workflows automatically fix common misconfigurations across EC2, S3, and IAM, reducing mean time to resolution by 60%.",
    date: "Feb 15, 2026", link: "#",
  },
  {
    id: 8, category: "DevOps", source: "Azure",
    title: "Microsoft Unveils Azure Deployment Environments for Platform Teams",
    excerpt: "A new self-service infrastructure provisioning experience lets developers spin up pre-approved environments in minutes with built-in governance.",
    date: "Feb 10, 2026", link: "#",
  },
  {
    id: 9, category: "FinOps", source: "GCP",
    title: "Google Cloud Launches Carbon-Aware Workload Scheduling",
    excerpt: "Organizations can now schedule batch and ML training jobs to run when regional grid carbon intensity is lowest, cutting carbon footprint by up to 30%.",
    date: "Feb 5, 2026", link: "#",
  },
  {
    id: 10, category: "DevOps", source: "AWS",
    title: "AWS Lambda Raises Concurrency Limits and Adds SnapStart for Python",
    excerpt: "Lambda now supports 10,000 concurrent executions by default, and SnapStart cold-start optimization extends beyond Java to Python runtimes.",
    date: "Jan 28, 2026", link: "#",
  },
  {
    id: 11, category: "AI/ML", source: "Azure",
    title: "Azure OpenAI Service Now Available in 12 Additional Regions",
    excerpt: "Expanded regional availability brings GPT-4o and embedding models closer to enterprise customers, improving latency and data-residency compliance.",
    date: "Jan 20, 2026", link: "#",
  },
  {
    id: 12, category: "DevOps", source: "GCP",
    title: "GCP Announces Unified Observability Suite with AI-Powered Insights",
    excerpt: "A consolidated monitoring, logging, and tracing platform uses generative AI to surface root causes and recommend fixes before incidents escalate.",
    date: "Jan 12, 2026", link: "#",
  },
  {
    id: 13, category: "Kubernetes", source: "CNCF",
    title: "Kubernetes 1.33 Brings Sidecar Containers GA and Enhanced GPU Scheduling",
    excerpt: "The latest K8s release graduates sidecar containers to stable and introduces native GPU topology-aware scheduling for ML workloads.",
    date: "Jan 8, 2026", link: "#",
  },
  {
    id: 14, category: "FinOps", source: "AWS",
    title: "AWS Cost Explorer Adds AI-Powered Anomaly Root Cause Analysis",
    excerpt: "New ML-driven feature automatically identifies the specific resources, tags, and usage patterns behind unexpected cost spikes with one-click drill-downs.",
    date: "Jan 3, 2026", link: "#", featured: true,
  },
  {
    id: 15, category: "Security", source: "Industry",
    title: "NIST Releases Updated Cloud Security Framework for 2026",
    excerpt: "The revised framework includes new guidelines for AI workload security, container runtime protection, and zero-trust architecture in multi-cloud environments.",
    date: "Dec 28, 2025", link: "#",
  },
  {
    id: 16, category: "Kubernetes", source: "AWS",
    title: "Amazon EKS Adds Native Karpenter Integration and Cost Visibility",
    excerpt: "EKS now ships with Karpenter as a first-class node provisioner and adds per-pod cost attribution directly in the EKS console.",
    date: "Dec 20, 2025", link: "#",
  },
  {
    id: 17, category: "AI/ML", source: "Industry",
    title: "OpenAI Launches Enterprise API with Built-in Cost Controls",
    excerpt: "New enterprise tier includes per-team budget limits, usage dashboards, and automatic model routing to optimize inference costs across GPT-4o and o1 models.",
    date: "Dec 15, 2025", link: "#",
  },
  {
    id: 18, category: "FinOps", source: "Industry",
    title: "FinOps Foundation Reports 67% of Enterprises Now Have Dedicated Cloud Cost Teams",
    excerpt: "Annual survey reveals rapid adoption of FinOps practices, with container cost management and AI inference costs emerging as top challenges for 2026.",
    date: "Dec 10, 2025", link: "#",
  },
];

const categoryConfig: Record<Category, { icon: React.ElementType; color: string; badge: string; border: string }> = {
  Cloud: { icon: Cloud, color: "text-blue-400", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", border: "hover:border-blue-500/30" },
  "AI/ML": { icon: Brain, color: "text-cyan-400", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", border: "hover:border-cyan-500/30" },
  DevOps: { icon: Zap, color: "text-amber-400", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20", border: "hover:border-amber-500/30" },
  Security: { icon: Shield, color: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", border: "hover:border-emerald-500/30" },
  Kubernetes: { icon: Ship, color: "text-indigo-400", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", border: "hover:border-indigo-500/30" },
  FinOps: { icon: TrendingUp, color: "text-rose-400", badge: "bg-rose-500/10 text-rose-400 border-rose-500/20", border: "hover:border-rose-500/30" },
};

const sourceColors: Record<string, string> = {
  AWS: "text-orange-400",
  Azure: "text-blue-400",
  GCP: "text-green-400",
  CNCF: "text-sky-400",
  Industry: "text-gray-400",
};

const filterTabs: FilterTab[] = ["All", "Cloud", "AI/ML", "DevOps", "Security", "Kubernetes", "FinOps"];

export default function News() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = newsData
    .filter((item) => activeFilter === "All" || item.category === activeFilter)
    .filter((item) =>
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredNews = filteredNews.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <section className="relative py-28 md:py-36 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#040a18] to-[#030712] pointer-events-none" />
      <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[200px]" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-cyan-600/[0.03] rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Newspaper className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 font-medium">Tech News</span>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Latest in <span className="text-gradient">Cloud & Tech</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Stay ahead with the latest announcements, breakthroughs, and trends across cloud computing, AI/ML, Kubernetes, DevOps, and FinOps.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news by title, topic, or provider..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {filterTabs.map((tab) => {
            const config = tab !== "All" ? categoryConfig[tab] : null;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === tab
                    ? "bg-blue-500/15 text-white border border-blue-500/30 shadow-lg shadow-blue-500/10"
                    : "text-gray-400 border border-white/5 hover:text-white hover:border-white/15 hover:bg-white/[0.03]"
                }`}
              >
                {config ? <config.icon className="w-3.5 h-3.5" /> : <Globe className="w-3.5 h-3.5" />}
                {tab}
                <span className="text-[10px] text-gray-600 ml-0.5">
                  ({tab === "All" ? newsData.length : newsData.filter((n) => n.category === tab).length})
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Featured</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredNews.map((item, i) => {
                const config = categoryConfig[item.category];
                return (
                  <motion.a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={`glass-card p-7 group relative overflow-hidden ${config.border} transition-all duration-500`}
                  >
                    <div className={`absolute -top-20 -right-20 w-40 h-40 ${config.badge.split(" ")[0]} rounded-full blur-[80px] opacity-0 group-hover:opacity-60 transition-opacity duration-700`} />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-2.5 py-1 rounded-full border ${config.badge} font-semibold`}>
                            {item.category}
                          </span>
                          <span className={`text-[10px] font-medium ${sourceColors[item.source] || "text-gray-400"}`}>
                            {item.source}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-5">{item.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-cyan-400 transition-colors">
                        Read More
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {regularNews.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {regularNews.map((item, i) => {
                  const config = categoryConfig[item.category];
                  return (
                    <motion.a
                      key={item.id}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className={`glass-card p-6 group ${config.border} transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${config.badge} font-semibold`}>
                            {item.category}
                          </span>
                          <span className={`text-[10px] font-medium ${sourceColors[item.source] || "text-gray-400"}`}>
                            {item.source}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-600">{item.date}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                      <div className="flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-cyan-400 transition-colors">
                        Read More
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-10 h-10 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No news found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
                  className="mt-4 text-sm text-blue-400 hover:text-cyan-400 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
            {filterTabs.filter((t) => t !== "All").map((tab) => {
              const config = categoryConfig[tab as Category];
              const count = newsData.filter((n) => n.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab as FilterTab)}
                  className="group cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl ${config.badge.split(" ")[0]} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    <config.icon className={`w-5 h-5 ${config.color}`} />
                  </div>
                  <p className="text-lg font-bold text-white">{count}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">{tab}</p>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
