import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";

const categories = ["All", "Cost Optimization", "Security", "DevOps", "Tutorials"];

const blogPosts = [
  {
    id: 1,
    category: "Cost Optimization",
    title: "How We Reduced AWS Costs by 47% Without Sacrificing Performance",
    excerpt:
      "Discover the strategies and tooling our team used to cut nearly half of a client's monthly cloud spend. From right-sizing instances to leveraging spot fleets, every optimization added up.",
    author: "CloudLunar Team",
    authorInitials: "CL",
    readTime: "8 min read",
    date: "Mar 5, 2026",
    featured: true,
    accentGradient: "from-violet-500 to-blue-500",
  },
  {
    id: 2,
    category: "Security",
    title: "Achieving SOC 2 Compliance on AWS: A Practical Roadmap",
    excerpt:
      "SOC 2 can feel overwhelming, but it doesn't have to be. We break down every trust service criterion and map it to specific AWS services and configurations.",
    author: "Priya Sharma",
    authorInitials: "PS",
    readTime: "6 min read",
    date: "Feb 28, 2026",
    featured: false,
    accentGradient: "from-blue-500 to-emerald-500",
  },
  {
    id: 3,
    category: "DevOps",
    title: "Building a Zero-Downtime CI/CD Pipeline with GitHub Actions and ECS",
    excerpt:
      "Learn how to set up blue-green deployments on Amazon ECS using GitHub Actions. This guide covers task definitions, target groups, and automated rollback.",
    author: "Alex Chen",
    authorInitials: "AC",
    readTime: "10 min read",
    date: "Feb 20, 2026",
    featured: false,
    accentGradient: "from-emerald-500 to-violet-500",
  },
  {
    id: 4,
    category: "Tutorials",
    title: "Terraform Modules for Multi-Account AWS Organizations",
    excerpt:
      "Managing dozens of AWS accounts manually is unsustainable. In this tutorial, we walk through reusable Terraform modules that enforce guardrails across every account.",
    author: "Jordan Lee",
    authorInitials: "JL",
    readTime: "12 min read",
    date: "Feb 14, 2026",
    featured: false,
    accentGradient: "from-violet-500 to-emerald-500",
  },
  {
    id: 5,
    category: "Cost Optimization",
    title: "Reserved Instances vs Savings Plans: Which One Is Right for You?",
    excerpt:
      "AWS offers multiple commitment-based discount models, but choosing the wrong one can lock you into unused capacity. We compare flexibility, savings rates, and ideal use cases.",
    author: "CloudLunar Team",
    authorInitials: "CL",
    readTime: "5 min read",
    date: "Jan 30, 2026",
    featured: false,
    accentGradient: "from-blue-500 to-violet-500",
  },
  {
    id: 6,
    category: "Security",
    title: "Implementing Least-Privilege IAM Policies at Scale",
    excerpt:
      "Overly permissive IAM policies are one of the top security risks in cloud environments. Here is a systematic approach to auditing and tightening permissions without breaking workloads.",
    author: "Priya Sharma",
    authorInitials: "PS",
    readTime: "7 min read",
    date: "Jan 22, 2026",
    featured: false,
    accentGradient: "from-emerald-500 to-blue-500",
  },
  {
    id: 7,
    category: "DevOps",
    title: "Observability-Driven Development: Beyond Logs and Metrics",
    excerpt:
      "Traces, structured logs, and SLOs form the backbone of modern observability. We explore how to instrument applications so your team can debug production issues in minutes, not hours.",
    author: "Alex Chen",
    authorInitials: "AC",
    readTime: "9 min read",
    date: "Jan 15, 2026",
    featured: false,
    accentGradient: "from-violet-500 to-blue-500",
  },
  {
    id: 8,
    category: "Tutorials",
    title: "Automating AWS Cost Reports with Lambda and QuickSight",
    excerpt:
      "Stay on top of your cloud spending by building automated cost dashboards. This step-by-step tutorial uses Lambda to aggregate Cost Explorer data and QuickSight to visualize it.",
    author: "Jordan Lee",
    authorInitials: "JL",
    readTime: "11 min read",
    date: "Jan 8, 2026",
    featured: false,
    accentGradient: "from-blue-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function BlogCard({
  post,
  featured = false,
}: {
  post: (typeof blogPosts)[0];
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={cardVariants}
      className={`glass-card-hover relative group overflow-hidden rounded-2xl flex flex-col ${
        featured ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      {/* Gradient accent line */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${post.accentGradient}`}
      />

      {/* Featured gradient border effect */}
      {featured && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent bg-gradient-to-br from-violet-500/20 via-blue-500/10 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      <div className={`p-6 ${featured ? "md:p-10" : ""} flex flex-col flex-1`}>
        {/* Category tag */}
        <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-violet-400 border border-violet-500/20 mb-4">
          {post.category}
        </span>

        {/* Title */}
        <h3
          className={`font-bold text-white mb-3 leading-tight ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={`text-gray-400 mb-6 leading-relaxed flex-1 ${
            featured ? "text-base md:text-lg" : "text-sm"
          }`}
        >
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            {/* Author avatar */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
              {post.authorInitials}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-300">{post.author}</span>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-500 text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Read more link */}
        <div className="mt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors cursor-pointer">
            Read article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#06070a] min-h-screen">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-6">
            <BookOpen className="w-4 h-4 text-violet-400" />
            Insights &amp; Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert perspectives on cloud cost optimization, security best
            practices, and modern DevOps workflows.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog grid */}
        {filteredPosts.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Featured card */}
            {featuredPost && (
              <BlogCard post={featuredPost} featured />
            )}

            {/* Remaining cards */}
            {remainingPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No posts found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
