import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, User, ArrowRight, BookOpen, Search, Tag, Sparkles } from "lucide-react";

const categories = ["All", "Cost Optimization", "Security", "DevOps", "Kubernetes", "Tutorials", "AI & Cloud"];

const blogPosts = [
  {
    id: 1, category: "Cost Optimization",
    title: "How We Reduced AWS Costs by 47% Without Sacrificing Performance",
    excerpt: "Discover the strategies and tooling our team used to cut nearly half of a client's monthly cloud spend. From right-sizing instances to leveraging spot fleets, every optimization added up.",
    author: "CloudLunar Team", authorInitials: "CL", readTime: "8 min read", date: "Mar 5, 2026",
    featured: true, gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2, category: "Security",
    title: "Achieving SOC 2 Compliance on AWS: A Practical Roadmap",
    excerpt: "SOC 2 can feel overwhelming, but it doesn't have to be. We break down every trust service criterion and map it to specific AWS services and configurations.",
    author: "Priya Sharma", authorInitials: "PS", readTime: "6 min read", date: "Feb 28, 2026",
    featured: false, gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 3, category: "DevOps",
    title: "Building a Zero-Downtime CI/CD Pipeline with GitHub Actions and ECS",
    excerpt: "Learn how to set up blue-green deployments on Amazon ECS using GitHub Actions. This guide covers task definitions, target groups, and automated rollback.",
    author: "Alex Chen", authorInitials: "AC", readTime: "10 min read", date: "Feb 20, 2026",
    featured: false, gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4, category: "Tutorials",
    title: "Terraform Modules for Multi-Account AWS Organizations",
    excerpt: "Managing dozens of AWS accounts manually is unsustainable. In this tutorial, we walk through reusable Terraform modules that enforce guardrails across every account.",
    author: "Jordan Lee", authorInitials: "JL", readTime: "12 min read", date: "Feb 14, 2026",
    featured: false, gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: 5, category: "Cost Optimization",
    title: "Reserved Instances vs Savings Plans: Which One Is Right for You?",
    excerpt: "AWS offers multiple commitment-based discount models, but choosing the wrong one can lock you into unused capacity. We compare flexibility, savings rates, and ideal use cases.",
    author: "CloudLunar Team", authorInitials: "CL", readTime: "5 min read", date: "Jan 30, 2026",
    featured: false, gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 6, category: "Security",
    title: "Implementing Least-Privilege IAM Policies at Scale",
    excerpt: "Overly permissive IAM policies are one of the top security risks in cloud environments. Here is a systematic approach to auditing and tightening permissions without breaking workloads.",
    author: "Priya Sharma", authorInitials: "PS", readTime: "7 min read", date: "Jan 22, 2026",
    featured: false, gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 7, category: "Kubernetes",
    title: "EKS Cost Optimization: Right-Sizing Pods and Nodes for Real Savings",
    excerpt: "Kubernetes clusters are notorious for over-provisioning. Learn how to analyze pod resource requests vs actual usage and implement Karpenter for intelligent node scaling.",
    author: "Alex Chen", authorInitials: "AC", readTime: "9 min read", date: "Jan 15, 2026",
    featured: true, gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 8, category: "Tutorials",
    title: "Automating AWS Cost Reports with Lambda and QuickSight",
    excerpt: "Stay on top of your cloud spending by building automated cost dashboards. This step-by-step tutorial uses Lambda to aggregate Cost Explorer data and QuickSight to visualize it.",
    author: "Jordan Lee", authorInitials: "JL", readTime: "11 min read", date: "Jan 8, 2026",
    featured: false, gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 9, category: "AI & Cloud",
    title: "Managing AI Inference Costs: GPU Instance Strategies for Production ML",
    excerpt: "GPU instances are expensive. We explore spot vs on-demand strategies, multi-model serving, model distillation, and auto-scaling patterns to keep inference costs under control.",
    author: "CloudLunar Team", authorInitials: "CL", readTime: "10 min read", date: "Dec 28, 2025",
    featured: true, gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 10, category: "DevOps",
    title: "Observability-Driven Development: Beyond Logs and Metrics",
    excerpt: "Traces, structured logs, and SLOs form the backbone of modern observability. We explore how to instrument applications so your team can debug production issues in minutes.",
    author: "Alex Chen", authorInitials: "AC", readTime: "9 min read", date: "Dec 20, 2025",
    featured: false, gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 11, category: "Kubernetes",
    title: "Service Mesh vs Sidecar-Free: Choosing the Right Networking Model for K8s",
    excerpt: "With Istio ambient mesh and Cilium gaining traction, the sidecar debate is evolving. We compare latency, resource overhead, and operational complexity of each approach.",
    author: "Priya Sharma", authorInitials: "PS", readTime: "8 min read", date: "Dec 12, 2025",
    featured: false, gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: 12, category: "AI & Cloud",
    title: "Building RAG Pipelines on AWS: Architecture Patterns and Cost Analysis",
    excerpt: "Retrieval-Augmented Generation is the backbone of enterprise AI. We break down architecture options using Bedrock, OpenSearch, and Lambda — with real cost projections.",
    author: "Jordan Lee", authorInitials: "JL", readTime: "13 min read", date: "Dec 5, 2025",
    featured: false, gradient: "from-blue-500 to-cyan-500",
  },
];

const categoryColors: Record<string, string> = {
  "Cost Optimization": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Security: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  DevOps: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Kubernetes: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  Tutorials: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "AI & Cloud": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) =>
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <section className="relative py-28 md:py-36 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#040a18] to-[#030712] pointer-events-none" />
      <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[200px]" />
      <div className="absolute bottom-[15%] left-[20%] w-[400px] h-[400px] bg-cyan-600/[0.03] rounded-full blur-[160px]" />

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
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 font-medium">Insights & Resources</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            CloudLunar <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Expert perspectives on cloud cost optimization, Kubernetes, security best practices, AI infrastructure, and modern DevOps workflows.
          </p>
        </motion.div>

        {/* Search */}
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
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                activeCategory === cat
                  ? "bg-blue-500/15 text-white border border-blue-500/30 shadow-lg shadow-blue-500/10"
                  : "text-gray-400 border border-white/5 hover:text-white hover:border-white/15 hover:bg-white/[0.03]"
              }`}
            >
              {cat === "All" ? <Tag className="w-3.5 h-3.5" /> : null}
              {cat}
              <span className="text-[10px] text-gray-600 ml-0.5">
                ({cat === "All" ? blogPosts.length : blogPosts.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Featured Articles</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="glass-card group relative overflow-hidden cursor-pointer hover:border-white/[0.12] transition-all duration-500"
                >
                  {/* Gradient top bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${post.gradient}`} />

                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`text-[10px] px-2.5 py-1 rounded-full border ${categoryColors[post.category] || "bg-white/5 text-gray-400 border-white/10"} font-semibold`}>
                        {post.category}
                      </span>
                      <span className="text-[10px] text-gray-600">{post.date}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-[10px] font-bold text-white`}>
                          {post.authorInitials}
                        </div>
                        <div>
                          <p className="text-xs text-gray-300">{post.author}</p>
                          <div className="flex items-center gap-1 text-[10px] text-gray-600">
                            <Clock className="w-3 h-3" /> {post.readTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-cyan-400 transition-colors">
                        Read
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {regularPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 group cursor-pointer hover:border-white/[0.10] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${categoryColors[post.category] || "bg-white/5 text-gray-400 border-white/10"} font-semibold`}>
                        {post.category}
                      </span>
                      <span className="text-[10px] text-gray-600">{post.date}</span>
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-[9px] font-bold text-white`}>
                          {post.authorInitials}
                        </div>
                        <span className="text-[10px] text-gray-500">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-gray-600">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Search className="w-10 h-10 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No articles found.</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-4 text-sm text-blue-400 hover:text-cyan-400 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
