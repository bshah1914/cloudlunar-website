import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "VP of Engineering",
    company: "FinServe Technologies",
    quote: "CloudLunar found $47K in monthly savings we completely missed. The S3 lifecycle detection alone saved us $12K/month. The fact that everything is real AWS data \u2014 not estimates \u2014 gave us confidence to implement immediately.",
    savings: "$47K/mo saved",
    avatar: "RP",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Cloud Architect",
    company: "DataStream Analytics",
    quote: "We had 200+ unattached EBS volumes and 15 idle ElastiCache clusters we didn't know about. CloudLunar's auto-discovery found everything in our first scan. The DynamoDB on-demand switching recommendation alone was worth it.",
    savings: "$23K/mo saved",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "CTO",
    company: "ScaleUp Health",
    quote: "As a health-tech company, compliance is critical. CloudLunar's CIS and SOC 2 monitoring runs alongside cost optimization. We get compliance violations and cost-saving opportunities in one dashboard. Replaced three separate tools.",
    savings: "3 tools replaced",
    avatar: "MT",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "DevOps Lead",
    company: "E-commerce Plus",
    quote: "Setup took 4 minutes. Connected our 8 AWS accounts, and within an hour we had 180+ recommendations. The gp2 to gp3 migration alone saved us $8K/month across 400 volumes. The confidence scores made prioritization easy.",
    savings: "$31K/mo saved",
    avatar: "PS",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Platform Engineer",
    company: "GameForge Studios",
    quote: "The Lambda optimization feature is incredible. It identified 40 functions with zero invocations in the last 30 days and 12 that were over-provisioned on memory. Clean infrastructure = lower costs and smaller attack surface.",
    savings: "40 idle Lambdas found",
    avatar: "JW",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Director of Infrastructure",
    company: "MediaFlow Networks",
    quote: "CloudLunar's CloudWatch Logs retention detection was a game-changer. We had 2TB of logs with no retention policy \u2014 costing $60/month in storage alone. Multiply that across 50 log groups. Now everything has proper retention.",
    savings: "$18K/mo saved",
    avatar: "LA",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[150px] animate-aurora-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">
            Loved by Engineering<br />
            <span className="text-gradient-green">Teams Worldwide</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            See how engineering teams are saving thousands per month with CloudLunar's real-data approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <div className="relative mb-5 flex-1">
                <Quote className="w-8 h-8 text-blue-500/20 absolute -top-1 -left-1" />
                <p className="text-sm text-gray-300 leading-relaxed pl-4">{t.quote}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-[11px] text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
                  {t.savings}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
