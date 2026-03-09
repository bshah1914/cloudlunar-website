import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Award,
  Globe2,
  Briefcase,
  Landmark,
} from "lucide-react";

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

const stats = [
  { value: "500+", label: "Cloud accounts managed" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "$12M+", label: "Total savings identified" },
  { value: "< 5 min", label: "Setup time" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#030712]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs text-gray-500 uppercase tracking-[0.3em] font-medium mb-12"
        >
          Trusted by engineering teams at leading companies
        </motion.p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 mx-8 flex-shrink-0 opacity-25 hover:opacity-50 transition-opacity duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <span className="text-base font-medium text-gray-400 whitespace-nowrap tracking-wide">
                    {logo.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-14 mb-10 h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Mini Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-3xl mx-auto"
        >
          {stats.map((item) => (
            <div key={item.label} className="text-center px-2">
              <p className="text-xl font-semibold text-white tracking-tight">
                {item.value}
              </p>
              <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
