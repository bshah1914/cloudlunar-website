import React from "react";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Award, Globe2, Briefcase, Landmark } from "lucide-react";

const logos = [
  { icon: Building2, name: "TechCorp" },
  { icon: Globe2, name: "GlobalSoft" },
  { icon: Briefcase, name: "FinanceHub" },
  { icon: Landmark, name: "GovCloud" },
  { icon: ShieldCheck, name: "SecureOps" },
  { icon: Award, name: "DataScale" },
  { icon: Building2, name: "CloudFirst" },
  { icon: Globe2, name: "NetBridge" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-surface-800/30 to-[#050510]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-600 uppercase tracking-[0.25em] font-medium mb-10"
        >
          Trusted by engineering teams at leading companies
        </motion.p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050510] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050510] to-transparent z-10" />

          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center gap-3 mx-10 flex-shrink-0 opacity-30 hover:opacity-60 transition-opacity">
                <logo.icon className="w-6 h-6 text-gray-400" />
                <span className="text-lg font-semibold text-gray-400 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14"
        >
          {[
            { value: "500+", label: "Cloud accounts managed" },
            { value: "99.9%", label: "Platform uptime" },
            { value: "$12M+", label: "Total savings identified" },
            { value: "< 5 min", label: "Setup time" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
