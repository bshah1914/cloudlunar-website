import React from "react";
import { motion } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 14", desc: "React framework with App Router" },
      { name: "TypeScript", desc: "Type-safe development" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
      { name: "Recharts", desc: "Data visualization" },
    ],
    color: "border-cyan-500/30",
    dot: "bg-cyan-400",
  },
  {
    category: "Backend",
    items: [
      { name: "FastAPI", desc: "High-performance async Python" },
      { name: "SQLAlchemy", desc: "Async ORM with PostgreSQL" },
      { name: "Pydantic", desc: "Data validation" },
      { name: "Structlog", desc: "Structured logging" },
    ],
    color: "border-lunar-500/30",
    dot: "bg-lunar-400",
  },
  {
    category: "Infrastructure",
    items: [
      { name: "PostgreSQL", desc: "Primary database + TimescaleDB" },
      { name: "Redis", desc: "Caching & sessions" },
      { name: "Docker", desc: "Containerized deployment" },
      { name: "Alembic", desc: "Database migrations" },
    ],
    color: "border-green-500/30",
    dot: "bg-green-400",
  },
  {
    category: "AWS Integration",
    items: [
      { name: "boto3", desc: "AWS SDK for Python" },
      { name: "STS AssumeRole", desc: "Secure cross-account access" },
      { name: "CloudWatch", desc: "Metrics & monitoring" },
      { name: "Cost Explorer", desc: "Billing & cost analysis" },
    ],
    color: "border-amber-500/30",
    dot: "bg-amber-400",
  },
];

export default function TechStack() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 text-sm font-semibold tracking-widest uppercase">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-5">
            Built With Modern Stack
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Production-ready technology choices for reliability, performance, and
            developer experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className={`glass-card p-6 border-t-2 ${cat.color}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
                <h3 className="font-semibold text-gray-900 dark:text-white">{cat.category}</h3>
              </div>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
