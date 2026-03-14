import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, DollarSign, TrendingDown, Sparkles, ArrowRight, BarChart3, Zap } from "lucide-react";

function AnimatedValue({ value, prefix = "$", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const prevValue = useRef(0);

  useEffect(() => {
    const start = prevValue.current;
    const end = value;
    const duration = 600;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    prevValue.current = value;
  }, [value]);

  return <span>{prefix}{display.toLocaleString()}{suffix}</span>;
}

const savingsBreakdown = [
  { label: "EC2 Rightsizing", percent: 30, color: "from-orange-400 to-amber-400" },
  { label: "Idle Resources", percent: 25, color: "from-red-400 to-rose-400" },
  { label: "Storage Optimization", percent: 20, color: "from-green-400 to-emerald-400" },
  { label: "Reserved Instances", percent: 15, color: "from-blue-400 to-cyan-400" },
  { label: "Other Optimizations", percent: 10, color: "from-purple-400 to-violet-400" },
];

export default function ROICalculator() {
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const savingsRate = monthlySpend < 10000 ? 0.25 : monthlySpend < 50000 ? 0.35 : 0.42;
  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const annualSavings = monthlySavings * 12;

  const presets = [
    { label: "$5K/mo", value: 5000 },
    { label: "$25K/mo", value: 25000 },
    { label: "$100K/mo", value: 100000 },
    { label: "$500K/mo", value: 500000 },
  ];

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 dark:from-[#030712] via-blue-50/30 dark:via-[#030712] to-slate-50 dark:to-[#030712] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[180px] animate-aurora-slow" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[150px] animate-aurora" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 mb-6"
          >
            <Calculator className="w-4 h-4 text-emerald-500" />
            <span>ROI Calculator</span>
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-3 mb-6">
            See How Much You Could<br />
            <span className="text-gradient-green">Save With CloudLunar</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Enter your current monthly AWS spend and see your projected savings instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Your Monthly AWS Spend</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500">Drag the slider or pick a preset</p>
              </div>
            </div>

            <motion.div
              className="text-center mb-8"
              key={monthlySpend}
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                <AnimatedValue value={monthlySpend} />
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">per month</p>
            </motion.div>

            <div className="relative mb-8">
              <input
                type="range"
                min={1000}
                max={1000000}
                step={1000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-r
                  [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-cyan-400
                  [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-blue-500/30
                  [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing
                  [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:transition-transform"
              />
              <div className="flex justify-between mt-2 text-[10px] text-gray-400 dark:text-gray-500">
                <span>$1K</span>
                <span>$250K</span>
                <span>$500K</span>
                <span>$1M</span>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {presets.map((p) => (
                <motion.button
                  key={p.value}
                  onClick={() => setMonthlySpend(p.value)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    monthlySpend === p.value
                      ? "bg-blue-100 text-blue-700 border border-blue-300"
                      : "bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-700 dark:hover:text-gray-200"
                  }`}
                >
                  {p.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Results Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.div
              className="glass-card p-6 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Savings</p>
                    <p className="text-3xl font-extrabold text-emerald-600">
                      <AnimatedValue value={monthlySavings} />
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <motion.span
                    className="text-2xl font-bold text-emerald-600"
                    key={savingsRate}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    {Math.round(savingsRate * 100)}%
                  </motion.span>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">avg reduction</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass-card p-6 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Annual Savings</p>
                    <p className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      <AnimatedValue value={annualSavings} />
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-6 h-6 text-amber-500" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="glass-card p-6">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                Where Your Savings Come From
              </p>
              <div className="space-y-3">
                {savingsBreakdown.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                      <span className="text-gray-800 dark:text-gray-100 font-medium">
                        ${Math.round(monthlySavings * item.percent / 100).toLocaleString()}/mo
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.percent}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-2xl text-center transition-all hover:shadow-xl hover:shadow-blue-500/25 group"
            >
              <span className="flex items-center justify-center gap-2">
                Start Saving ${monthlySavings.toLocaleString()}/mo Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="text-[11px] text-blue-200/70 font-normal">Free to start — No credit card required</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
