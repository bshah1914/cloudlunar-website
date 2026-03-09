import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Server, Database, HardDrive, Globe, CloudLightning,
  Network, Camera, Search, Radio, Warehouse, MonitorSpeaker,
  MessageSquare, FileText, Workflow, Box, Layers, BarChart3,
  ChevronRight,
} from "lucide-react";

const services = [
  { icon: Server, name: "EC2 Instances", type: "Compute", checks: ["Idle detection (P95 CPU < 5%)", "Rightsizing with SKU recommendations", "Reserved Instance / Savings Plan opportunity", "Stopped instance billing detection"], color: "text-orange-400", bg: "bg-orange-500/10" },
  { icon: Database, name: "RDS Databases", type: "Database", checks: ["CPU & memory P95 analysis", "Idle database detection", "Instance class rightsizing", "Reserved Instance recommendations"], color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Globe, name: "S3 Buckets", type: "Storage", checks: ["Missing lifecycle rules detection", "Intelligent-Tiering opportunity", "Incomplete multipart upload cleanup", "Versioning without expiration warning"], color: "text-green-400", bg: "bg-green-500/10" },
  { icon: HardDrive, name: "EBS Volumes", type: "Storage", checks: ["Unattached volume detection", "gp2 \u2192 gp3 migration (20% savings)", "Volume size optimization", "Snapshot-and-delete workflow"], color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Radio, name: "Elastic IPs", type: "Network", checks: ["Unassociated EIP billing ($3.65/mo)", "Release recommendation", "Instance association check"], color: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: Network, name: "Load Balancers", type: "Network", checks: ["ALB/NLB idle detection (0 healthy targets)", "Classic ELB with 0 instances", "Base cost analysis ($16-18/mo)"], color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: CloudLightning, name: "Lambda Functions", type: "Compute", checks: ["Unused functions (0 invocations/30d)", "Memory over-provisioning", "Duration-based rightsizing", "Code cleanup recommendations"], color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Workflow, name: "NAT Gateways", type: "Network", checks: ["Low-traffic detection", "VPC Endpoint alternative", "Base cost analysis ($32.85/mo)"], color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Camera, name: "EBS Snapshots", type: "Storage", checks: ["Old snapshots (90+ days)", "Storage cost per GB ($0.05/GB/mo)", "Source volume validation"], color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Layers, name: "DynamoDB Tables", type: "Database", checks: ["Over-provisioned RCU/WCU", "On-demand billing switch", "Capacity utilization analysis", "GSI cost review"], color: "text-teal-400", bg: "bg-teal-500/10" },
  { icon: MonitorSpeaker, name: "ElastiCache", type: "Database", checks: ["Idle cluster detection (low CPU + connections)", "Node type rightsizing", "Engine-aware analysis (Redis/Memcached)"], color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Warehouse, name: "Redshift", type: "Analytics", checks: ["dc2/ds2 \u2192 RA3 migration", "Low CPU utilization pausing", "Node count optimization"], color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Globe, name: "CloudFront", type: "CDN", checks: ["Disabled distribution cleanup", "PriceClass_All \u2192 PriceClass_200", "Data transfer optimization"], color: "text-sky-400", bg: "bg-sky-500/10" },
  { icon: Box, name: "ECS / Fargate", type: "Containers", checks: ["Idle services (0 desired tasks)", "Fargate CPU/memory rightsizing", "Cluster utilization review"], color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Search, name: "OpenSearch", type: "Analytics", checks: ["Low CPU utilization domains", "m5/r5 \u2192 Graviton (m6g/r6g)", "EBS volume optimization"], color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: MessageSquare, name: "SQS Queues", type: "Messaging", checks: ["DLQ message accumulation", "Missing redrive policy", "Processing failure alerts"], color: "text-lime-400", bg: "bg-lime-500/10" },
  { icon: FileText, name: "CloudWatch Logs", type: "Monitoring", checks: ["Missing retention policy", "Export to S3 for old logs", "Storage cost optimization ($0.03/GB)"], color: "text-fuchsia-400", bg: "bg-fuchsia-500/10" },
  { icon: BarChart3, name: "Cost Explorer", type: "Billing", checks: ["90-day cost trend analysis", "Service-level cost breakdown", "Month-over-month change tracking"], color: "text-gray-400", bg: "bg-gray-500/10" },
];

const typeColors: Record<string, string> = {
  Compute: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Database: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Storage: "bg-green-500/10 text-green-400 border-green-500/20",
  Network: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Analytics: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  CDN: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Containers: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  Messaging: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Monitoring: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Billing: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function Services() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Coverage</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            <span className="text-gradient">18 AWS Services</span><br />Covered
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Every service is auto-discovered from your AWS account using boto3 API calls. Click any service to see the specific optimization checks the engine runs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, i) => {
            const isExpanded = expanded === svc.name;
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => setExpanded(isExpanded ? null : svc.name)}
                className={`glass-card p-5 cursor-pointer transition-all duration-300 ${isExpanded ? "bg-white/[0.08] border-white/[0.15]" : "hover:bg-white/[0.06]"}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${svc.bg} flex items-center justify-center flex-shrink-0`}>
                    <svc.icon className={`w-5 h-5 ${svc.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-white text-sm">{svc.name}</h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${typeColors[svc.type]}`}>
                          {svc.type}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                    </div>
                    {isExpanded && (
                      <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 space-y-1.5">
                        {svc.checks.map((check) => (
                          <li key={check} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                            {check}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                    {!isExpanded && (
                      <p className="text-[11px] text-gray-600 mt-1">{svc.checks.length} optimization checks</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
