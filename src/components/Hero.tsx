import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Play,
  Sparkles,
  Shield,
  Zap,
  BarChart3,
  Target,
  CheckCircle2,
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

function AnimatedCounter({ end, duration = 2, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const totalFrames = duration * 60;
          const increment = end / totalFrames;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(current)); }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const typingWords = ["EC2 instances", "S3 buckets", "RDS databases", "Lambda functions", "DynamoDB tables", "EBS volumes", "CloudFront distributions", "ElastiCache clusters"];

function TypingAnimation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting && text === word) { setTimeout(() => setIsDeleting(true), 1500); }
      else if (isDeleting && text === "") { setIsDeleting(false); setWordIndex((prev) => (prev + 1) % typingWords.length); }
      else if (isDeleting) { setText(word.substring(0, text.length - 1)); }
      else { setText(word.substring(0, text.length + 1)); }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return <span className="text-gradient">{text}<span className="text-blue-500 animate-pulse">|</span></span>;
}

function Particles() {
  const dots = useRef(
    Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100, startY: Math.random() * 100,
      size: Math.random() * 3 + 1, dur: Math.random() * 12 + 8, delay: Math.random() * 6,
      color: ["bg-blue-400/15", "bg-cyan-400/15", "bg-emerald-400/10", "bg-purple-400/10"][Math.floor(Math.random() * 4)],
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <motion.div key={i} className={`absolute rounded-full ${d.color}`} style={{ width: d.size, height: d.size, left: `${d.x}%`, top: `${d.startY}%` }}
          animate={{ y: [0, -300], opacity: [0, 0.6, 0] }}
          transition={{ duration: d.dur, repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function GridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          style={{ top: `${12 + i * 12}%` }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
          style={{ left: `${10 + i * 18}%` }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const urgencyBenefits = [
  "No credit card required",
  "5-minute setup",
  "Cancel anytime",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-slate-50 dark:from-[#030712] dark:via-blue-950/30 dark:to-[#030712] bg-dots">
      {/* Soft aurora blobs */}
      <div className="absolute top-[-5%] left-[15%] w-[650px] h-[650px] bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-[200px] animate-aurora" />
      <div className="absolute bottom-[5%] right-[10%] w-[550px] h-[550px] bg-cyan-200/25 dark:bg-cyan-500/8 rounded-full blur-[180px] animate-aurora-reverse" />
      <div className="absolute top-[40%] right-[30%] w-[420px] h-[420px] bg-emerald-200/20 dark:bg-emerald-500/6 rounded-full blur-[160px] animate-aurora-slow" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-purple-200/15 dark:bg-purple-500/5 rounded-full blur-[140px] animate-aurora" />
      <Particles />
      <GridLines />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-20">
          {/* Badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-8 hover:bg-white/80 dark:hover:bg-white/10 transition-all cursor-default select-none shadow-sm">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-blue-500" />
            </motion.div>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium tracking-wide">Enterprise Cloud Cost Optimization Platform</span>
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 text-[10px] font-bold uppercase tracking-wider"
            >
              v4.0
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.15)} className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.08] mb-8 tracking-tight">
            <span className="text-gray-900 dark:text-white">Stop Overpaying</span><br />
            <span className="text-gray-900 dark:text-white">for </span>
            <span className="text-gradient">Your Cloud.</span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div {...fadeUp(0.3)} className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-5 h-10">
            Auto-discovering your <TypingAnimation />
          </motion.div>

          {/* Subheadline */}
          <motion.p {...fadeUp(0.45)} className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            CloudLunar scans every resource across <strong className="text-gray-700 dark:text-gray-200">18+ AWS services</strong>, analyzes real-time CloudWatch metrics with <strong className="text-gray-700 dark:text-gray-200">P95 percentile accuracy</strong>, and generates intelligent cost-saving recommendations. <span className="text-emerald-600 font-medium">Average savings: 40%.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <motion.a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 text-lg"
            >
              Start Saving Now — Free
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link to="/features" className="group px-8 py-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 hover:border-gray-300 hover:bg-gray-50 dark:hover:border-white/20 dark:hover:bg-white/5 text-gray-800 dark:text-gray-100 font-semibold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Play className="w-4 h-4 text-blue-500" />
                See How It Works
                <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust signals */}
          <motion.div {...fadeUp(0.72)} className="flex items-center justify-center gap-4 flex-wrap">
            {urgencyBenefits.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div {...fadeUp(0.85)} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: 18, suffix: "+", label: "AWS Services", sublabel: "Auto-discovered", color: "from-blue-500 to-cyan-500", icon: Shield },
            { value: 25, suffix: "+", label: "Optimization Rules", sublabel: "Real-time checks", color: "from-cyan-500 to-emerald-500", icon: Zap },
            { value: 40, suffix: "%", label: "Avg Cost Reduction", sublabel: "Proven savings", color: "from-emerald-500 to-blue-500", icon: BarChart3 },
            { value: 95, suffix: "%", label: "Accuracy", sublabel: "P95 confidence", color: "from-blue-500 to-emerald-500", icon: Target },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.06, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="glass-card-glow p-5 text-center group cursor-default"
            >
              <motion.div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </motion.div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-0.5">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1.5 + i * 0.3} />
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom links */}
        <motion.div {...fadeUp(1.0)} className="flex flex-wrap justify-center gap-4 mt-14">
          {[
            { label: "View Pricing", to: "/pricing" },
            { label: "See Dashboard", to: "/dashboard" },
            { label: "Read Docs", to: "/docs" },
          ].map((link) => (
            <Link key={link.label} to={link.to} className="group text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1">
              {link.label}
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#f8fafc] dark:from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}
