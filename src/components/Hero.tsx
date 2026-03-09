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
} from "lucide-react";

const TOOL_URL = "http://localhost:3000";

/* ──────────────────────────────────────────────
   Animated Counter (intersection-observed)
   ────────────────────────────────────────────── */
function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
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

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ──────────────────────────────────────────────
   Typing Animation — cycles through AWS services
   ────────────────────────────────────────────── */
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
      <span className="text-violet-400 animate-pulse">|</span>
    </span>
  );
}

/* ──────────────────────────────────────────────
   Floating Particles — 25 small dots drifting up
   ────────────────────────────────────────────── */
function Particles() {
  const dots = useRef(
    Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      startY: Math.random() * 100,
      size: Math.random() * 2 + 1,
      dur: Math.random() * 10 + 8,
      delay: Math.random() * 6,
      color:
        ["bg-violet-400/20", "bg-blue-400/20", "bg-emerald-400/20"][
          Math.floor(Math.random() * 3)
        ],
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${d.color}`}
          style={{
            width: d.size,
            height: d.size,
            left: `${d.x}%`,
            top: `${d.startY}%`,
          }}
          animate={{
            y: [0, -250],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: d.dur,
            repeat: Infinity,
            delay: d.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Stagger helpers
   ────────────────────────────────────────────── */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ──────────────────────────────────────────────
   Hero
   ────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06070a] bg-dots">
      {/* ── Aurora gradient orbs ── */}
      <div className="absolute top-[-5%] left-[15%] w-[650px] h-[650px] bg-violet-500/[0.12] rounded-full blur-[200px] animate-aurora" />
      <div className="absolute bottom-[5%] right-[10%] w-[550px] h-[550px] bg-blue-500/[0.09] rounded-full blur-[180px] animate-aurora-reverse" />
      <div className="absolute top-[40%] right-[30%] w-[420px] h-[420px] bg-emerald-500/[0.07] rounded-full blur-[160px] animate-aurora-slow" />

      {/* ── Floating particles ── */}
      <Particles />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center mb-20">
          {/* Badge */}
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-8 hover:bg-white/[0.07] transition-all cursor-default select-none"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-gray-300 font-medium tracking-wide">
              Enterprise Cloud Cost Optimization Platform
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-[10px] font-bold uppercase tracking-wider animate-pulse">
              v4.0
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.08] mb-8 tracking-tight"
          >
            <span className="text-white">Stop Overspending</span>
            <br />
            <span className="text-white">on Your </span>
            <span className="text-gradient">Cloud.</span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div
            {...fadeUp(0.3)}
            className="text-xl md:text-2xl text-gray-500 mb-5 h-10"
          >
            Auto-discovering your <TypingAnimation />
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp(0.45)}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            CloudLunar scans every resource across 18+ AWS services, analyzes
            real-time CloudWatch metrics with P95 percentile accuracy, and
            generates AI-powered cost-saving recommendations. No fake data. No
            guesswork. Just real savings.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href={TOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/25 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Launch Dashboard
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link
              to="/features"
              className="group px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 border border-white/[0.06]"
            >
              <Play className="w-4 h-4 text-violet-400" />
              Explore Features
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
            </Link>
          </motion.div>

          {/* Subtext */}
          <motion.p
            {...fadeUp(0.72)}
            className="text-xs text-gray-600"
          >
            Free to start &bull; No credit card required &bull; 5-minute setup
          </motion.p>
        </div>

        {/* ── Stats Grid ── */}
        <motion.div
          {...fadeUp(0.85)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            {
              value: 18,
              suffix: "+",
              label: "AWS Services",
              sublabel: "Auto-discovered",
              color: "from-violet-500 to-blue-500",
              icon: Shield,
            },
            {
              value: 25,
              suffix: "+",
              label: "Optimization Rules",
              sublabel: "Real-time checks",
              color: "from-blue-500 to-emerald-500",
              icon: Zap,
            },
            {
              value: 40,
              suffix: "%",
              label: "Avg Cost Reduction",
              sublabel: "Proven savings",
              color: "from-emerald-500 to-violet-500",
              icon: BarChart3,
            },
            {
              value: 95,
              suffix: "%",
              label: "Accuracy",
              sublabel: "P95 confidence",
              color: "from-violet-500 to-emerald-500",
              icon: Target,
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.04, y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
              className="glass-card-glow p-5 text-center group cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-3xl font-bold text-white mb-0.5">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={1.5 + i * 0.3}
                />
              </p>
              <p className="text-sm text-gray-300 font-medium">{stat.label}</p>
              <p className="text-[10px] text-gray-600 mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Quick Links ── */}
        <motion.div
          {...fadeUp(1.0)}
          className="flex flex-wrap justify-center gap-4 mt-14"
        >
          {[
            { label: "View Pricing", to: "/pricing" },
            { label: "See Dashboard", to: "/dashboard" },
            { label: "Read Docs", to: "/docs" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="group text-xs text-gray-500 hover:text-violet-400 transition-colors flex items-center gap-1"
            >
              {link.label}
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#06070a] to-transparent pointer-events-none" />
    </section>
  );
}
