import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Play, Sparkles } from "lucide-react";

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
          const start = 0;
          const increment = end / (duration * 60);
          let current = start;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
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

const typingWords = [
  "EC2 instances",
  "S3 buckets",
  "RDS databases",
  "Lambda functions",
  "DynamoDB tables",
  "EBS volumes",
  "CloudFront distributions",
  "ElastiCache clusters",
];

function TypingAnimation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
      } else if (isDeleting) {
        setText(word.substring(0, text.length - 1));
      } else {
        setText(word.substring(0, text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-gradient">
      {text}
      <span className="text-indigo-400 animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px] animate-float" />
      <div className="absolute top-1/3 left-10 w-[200px] h-[200px] bg-pink-600/5 rounded-full blur-[80px] animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-20">
          {/* Top Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-gray-300">Enterprise Cloud Cost Optimization Platform</span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">v4.0</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.1] mb-8 tracking-tight">
            <span className="text-white">Stop Overspending</span>
            <br />
            <span className="text-white">on Your </span>
            <span className="text-gradient">Cloud.</span>
          </motion.h1>

          {/* Auto-discovery subtitle with typing effect */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="text-xl md:text-2xl text-gray-500 mb-4 h-10">
            Auto-discovering your <TypingAnimation />
          </motion.div>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            CloudLunar scans every resource across 18+ AWS services, analyzes real-time CloudWatch metrics with P95 percentile accuracy, and generates AI-powered cost-saving recommendations. No fake data. No guesswork. Just real savings.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Launch Dashboard
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#features" className="group px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />
              See How It Works
            </a>
          </motion.div>

          {/* Subtext */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-xs text-gray-600">
            Free to start &bull; No credit card required &bull; 5-minute setup
          </motion.p>
        </div>

        {/* Animated Stats */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: 18, suffix: "+", label: "AWS Services", sublabel: "Auto-discovered", color: "from-indigo-500 to-purple-500" },
            { value: 25, suffix: "+", label: "Optimization Rules", sublabel: "Real-time checks", color: "from-cyan-500 to-blue-500" },
            { value: 40, suffix: "%", label: "Avg Cost Reduction", sublabel: "Proven savings", color: "from-green-500 to-emerald-500" },
            { value: 95, suffix: "%", label: "Recommendation Accuracy", sublabel: "P95 confidence", color: "from-amber-500 to-orange-500" },
          ].map((stat, i) => (
            <div key={stat.label} className="glass-card-hover p-5 text-center group cursor-default">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-0.5">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1.5 + i * 0.3} />
              </p>
              <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
              <p className="text-[10px] text-gray-600 mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
    </section>
  );
}
