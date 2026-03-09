import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingDown, AlertTriangle, CheckCircle2, DollarSign,
  ArrowDownRight, ArrowUpRight, Server, Database, HardDrive,
  Globe, ExternalLink, CloudLightning, Layers, FileText,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

const mockRecommendations = [
  { title: "Rightsize EC2: web-api-prod", type: "t3.xlarge \u2192 t3.large", savings: "$121.18/mo", risk: "Low", confidence: 92, category: "Rightsize" },
  { title: "Enable S3 lifecycle rules: data-lake-prod", type: "Add transition rules", savings: "$847.50/mo", risk: "Low", confidence: 85, category: "Storage" },
  { title: "Switch DynamoDB to on-demand: sessions", type: "PROVISIONED \u2192 PAY_PER_REQUEST", savings: "$186.40/mo", risk: "Low", confidence: 80, category: "Rightsize" },
  { title: "Delete unattached EBS volume: vol-0a8f3c", type: "gp2, 500GB", savings: "$50.00/mo", risk: "Medium", confidence: 90, category: "Idle" },
  { title: "Release unattached EIP: 54.32.xx.xx", type: "No association", savings: "$3.65/mo", risk: "Low", confidence: 98, category: "Idle" },
  { title: "Set retention for CW Logs: /aws/lambda/api", type: "Never expire \u2192 30 days", savings: "$23.10/mo", risk: "Low", confidence: 90, category: "Storage" },
  { title: "Migrate EBS gp2 \u2192 gp3: vol-prod-db", type: "200GB, 20% savings", savings: "$4.00/mo", risk: "Low", confidence: 95, category: "Modernize" },
  { title: "Idle ElastiCache: cache-staging", type: "cache.r5.large, 0 connections", savings: "$121.18/mo", risk: "Medium", confidence: 80, category: "Idle" },
];

const resourceBreakdown = [
  { name: "EC2", count: 24, cost: "$4,218", icon: Server, color: "text-orange-400", trend: "-3.2%" },
  { name: "RDS", count: 8, cost: "$2,840", icon: Database, color: "text-blue-400", trend: "+1.1%" },
  { name: "S3", count: 35, cost: "$1,560", icon: Globe, color: "text-green-400", trend: "+5.8%" },
  { name: "EBS", count: 67, cost: "$890", icon: HardDrive, color: "text-purple-400", trend: "-1.4%" },
  { name: "Lambda", count: 45, cost: "$320", icon: CloudLightning, color: "text-yellow-400", trend: "+2.3%" },
  { name: "DynamoDB", count: 12, cost: "$680", icon: Layers, color: "text-teal-400", trend: "-8.1%" },
  { name: "CW Logs", count: 89, cost: "$210", icon: FileText, color: "text-rose-400", trend: "+12.4%" },
];

const tabs = ["All", "Quick Wins", "High Impact", "Low Risk"];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredRecs = activeTab === "All"
    ? mockRecommendations
    : mockRecommendations.filter((r) =>
        activeTab === "Quick Wins" ? r.category === "Idle" || r.category === "Storage" :
        activeTab === "High Impact" ? parseFloat(r.savings.replace(/[^0-9.]/g, "")) > 100 :
        r.risk === "Low"
      );

  return (
    <section id="dashboard" className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[180px] animate-aurora" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">Live Preview</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Dashboard<br />
            <span className="text-gradient-green">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            See what CloudLunar looks like in action. Every number in the real app comes from your actual AWS account.
          </p>
        </motion.div>

        {/* Mock Dashboard */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-card p-4 md:p-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-xs text-gray-500 ml-3">CloudLunar Dashboard</span>
            </div>
            <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
              Open Real Dashboard <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { label: "Monthly Spend", value: "$12,480", change: "-8.2%", icon: DollarSign, color: "text-green-400", up: false },
              { label: "Potential Savings", value: "$3,847", change: "30.8%", icon: TrendingDown, color: "text-indigo-400", up: false },
              { label: "Recommendations", value: "47", change: "12 quick wins", icon: AlertTriangle, color: "text-amber-400", up: true },
              { label: "Implemented", value: "23", change: "$1,240 saved", icon: CheckCircle2, color: "text-emerald-400", up: true },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-gray-500">{stat.label}</span>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {stat.up ? <ArrowUpRight className="w-3 h-3 text-amber-400" /> : <ArrowDownRight className="w-3 h-3 text-green-400" />}
                  <span className={`text-[11px] ${stat.up ? "text-amber-400" : "text-green-400"}`}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recommendations */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-300">Top Recommendations</h3>
                <div className="flex gap-1">
                  {tabs.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-1 rounded-lg text-[11px] transition-colors ${activeTab === tab ? "bg-indigo-500/20 text-indigo-300" : "text-gray-500 hover:text-gray-300"}`}>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                {filteredRecs.map((rec, i) => (
                  <motion.div
                    key={rec.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3 border border-white/5 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-medium text-white truncate">{rec.title}</p>
                      <p className="text-[11px] text-gray-500">{rec.type}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                      <div className="hidden sm:flex items-center gap-1.5">
                        <div className="w-12 h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-indigo-500" style={{ width: `${rec.confidence}%` }} />
                        </div>
                        <span className="text-[10px] text-gray-500">{rec.confidence}%</span>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${rec.risk === "Low" ? "bg-green-500/10 text-green-400" : "bg-amber-500/10 text-amber-400"}`}>
                        {rec.risk}
                      </span>
                      <span className="text-sm font-bold text-green-400 min-w-[80px] text-right">{rec.savings}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Resource Breakdown</h3>
                <div className="space-y-2">
                  {resourceBreakdown.map((res) => (
                    <div key={res.name} className="flex items-center justify-between bg-white/[0.03] rounded-xl px-3 py-2.5 border border-white/5">
                      <div className="flex items-center gap-2.5">
                        <res.icon className={`w-4 h-4 ${res.color}`} />
                        <div>
                          <p className="text-xs font-medium text-white">{res.name}</p>
                          <p className="text-[10px] text-gray-600">{res.count} resources</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-gray-300">{res.cost}</span>
                        <p className={`text-[10px] ${res.trend.startsWith('-') ? 'text-green-400' : 'text-amber-400'}`}>{res.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Savings Card */}
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-xl p-5">
                <p className="text-xs text-indigo-300 font-medium mb-1">Total Monthly Savings</p>
                <p className="text-3xl font-bold text-white">$3,847</p>
                <p className="text-xs text-gray-400 mt-1">Across 47 recommendations</p>
                <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-all">
                  View Full Dashboard <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
