import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Award,
  Globe2,
  Briefcase,
  Landmark,
  Cpu,
  Layers,
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
  { icon: Cpu, name: "DevStack" },
  { icon: Layers, name: "InfraCore" },
];

function AnimatedStat({ end, prefix = "", suffix = "", duration = 2 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (isInView && !started.current) {
      started.current = true;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) { setCount(end); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 2847, prefix: "", suffix: "+", label: "AWS accounts optimized", color: "text-blue-600" },
  { value: 99.9, prefix: "", suffix: "%", label: "Platform uptime", color: "text-emerald-600" },
  { value: 12, prefix: "$", suffix: "M+", label: "Total savings identified", color: "text-amber-600" },
  { value: 127, prefix: "", suffix: "", label: "5-star reviews", color: "text-rose-600" },
];

export default function TrustedBy() {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-[#030712]">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] font-medium mb-3">
            Trusted by engineering teams at leading companies
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"
          />
        </motion.div>

        {/* Marquee */}
        <div className="relative overflow-hidden mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-white dark:from-[#030712] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => {
              const Icon = logo.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, opacity: 0.8 }}
                  className="flex items-center gap-2.5 mx-8 flex-shrink-0 opacity-30 hover:opacity-60 transition-opacity duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" strokeWidth={1.5} />
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap tracking-wide">
                    {logo.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass-card p-5 text-center group cursor-default"
            >
              <p className={`text-3xl md:text-4xl font-extrabold ${item.color} tracking-tight mb-1`}>
                {typeof item.value === "number" && item.value % 1 !== 0 ? (
                  <span>{item.prefix}{item.value}{item.suffix}</span>
                ) : (
                  <AnimatedStat end={item.value} prefix={item.prefix} suffix={item.suffix} duration={1.5 + i * 0.3} />
                )}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-snug font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {[
            { label: "Product Hunt #1", color: "bg-orange-50 text-orange-600 border-orange-200" },
            { label: "G2 High Performer", color: "bg-red-50 text-red-600 border-red-200" },
            { label: "AWS Partner", color: "bg-amber-50 text-amber-600 border-amber-200" },
            { label: "YC Backed", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
          ].map((badge) => (
            <motion.span
              key={badge.label}
              whileHover={{ scale: 1.08 }}
              className={`text-[11px] px-3 py-1.5 rounded-full border font-semibold ${badge.color} cursor-default`}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
