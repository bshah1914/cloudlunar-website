import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const categories = [
  {
    name: "Discovery & Coverage",
    features: [
      { feature: "Auto-discovery (no manual setup)", cloudlunar: true, toolA: false, toolB: "partial" },
      { feature: "AWS services covered", cloudlunar: "18+", toolA: "5", toolB: "8" },
      { feature: "Real-time CloudWatch metrics", cloudlunar: true, toolA: false, toolB: true },
      { feature: "P95 percentile analysis", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Resource metadata (tags, config)", cloudlunar: true, toolA: "partial", toolB: true },
    ],
  },
  {
    name: "Optimization",
    features: [
      { feature: "Optimization rules count", cloudlunar: "25+", toolA: "8", toolB: "12" },
      { feature: "S3 lifecycle detection", cloudlunar: true, toolA: false, toolB: false },
      { feature: "EBS gp2\u2192gp3 migration", cloudlunar: true, toolA: false, toolB: true },
      { feature: "DynamoDB billing optimization", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Lambda memory rightsizing", cloudlunar: true, toolA: false, toolB: "partial" },
      { feature: "Confidence scores", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Risk assessment per rec", cloudlunar: true, toolA: false, toolB: true },
    ],
  },
  {
    name: "Data Accuracy",
    features: [
      { feature: "Real AWS pricing API", cloudlunar: true, toolA: false, toolB: "partial" },
      { feature: "No synthetic/fake data", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Cost Explorer integration", cloudlunar: true, toolA: true, toolB: true },
      { feature: "90-day cost history", cloudlunar: true, toolA: "30 days", toolB: "60 days" },
    ],
  },
  {
    name: "Platform",
    features: [
      { feature: "Multi-tenant SaaS", cloudlunar: true, toolA: false, toolB: true },
      { feature: "Compliance monitoring (CIS, SOC2)", cloudlunar: true, toolA: false, toolB: "partial" },
      { feature: "Cost anomaly detection", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Tag-based cost allocation", cloudlunar: true, toolA: "partial", toolB: true },
      { feature: "Cross-platform agent (Linux/macOS/Win)", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Budget alerts", cloudlunar: true, toolA: true, toolB: true },
      { feature: "System logs & audit trail", cloudlunar: true, toolA: false, toolB: "partial" },
      { feature: "One-click actions", cloudlunar: true, toolA: false, toolB: false },
      { feature: "Open source", cloudlunar: true, toolA: false, toolB: false },
    ],
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-green-400" />;
  if (value === false) return <X className="w-5 h-5 text-red-400/50" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-amber-400" />;
  return <span className="text-sm text-gray-300 font-medium">{value}</span>;
}

export default function Comparison() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-surface-800/20 to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">Comparison</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            How CloudLunar Compares
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            See why teams switch to CloudLunar for accurate, comprehensive cloud cost optimization.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card overflow-x-auto">
          <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="text-sm text-gray-500 font-medium">Feature</div>
            <div className="text-center">
              <span className="text-sm font-bold text-gradient">CloudLunar</span>
            </div>
            <div className="text-center text-sm text-gray-500">Competitor A</div>
            <div className="text-center text-sm text-gray-500">Competitor B</div>
          </div>

          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{cat.name}</span>
              </div>
              {cat.features.map((row) => (
                <div key={row.feature} className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <div className="text-sm text-gray-400">{row.feature}</div>
                  <div className="flex justify-center"><CellValue value={row.cloudlunar} /></div>
                  <div className="flex justify-center"><CellValue value={row.toolA} /></div>
                  <div className="flex justify-center"><CellValue value={row.toolB} /></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
