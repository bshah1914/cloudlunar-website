import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Orbit, Github, Linkedin, Twitter, Mail, ExternalLink, Send, ArrowRight } from "lucide-react";

const TOOL_URL = "http://localhost:3000";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="relative pt-28 pb-10 bg-grid-fine bg-white dark:bg-[#030712]">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-white dark:from-[#030712] dark:to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Final CTA */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 md:p-16 text-center mb-24 overflow-hidden shadow-xl shadow-blue-500/15"
        >
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-white/10 rounded-full blur-[150px] animate-aurora" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-white/5 rounded-full blur-[130px] animate-aurora-reverse" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-sm text-white mb-6">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
              Start optimizing in 5 minutes
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Cut Your<br />
              AWS Bill in Half?
            </h2>

            <p className="text-blue-100 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Join hundreds of engineering teams saving thousands per month.
              Connect your AWS account and see real savings in your first scan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TOOL_URL} target="_blank" rel="noopener noreferrer"
                className="group px-10 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Launch Dashboard Free
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link to="/how-it-works"
                className="group px-10 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 border border-white/20"
              >
                See How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <p className="text-xs text-blue-200 mt-6">
              No credit card required &bull; Read-only AWS access &bull; SOC 2 compliant
            </p>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-8 md:p-10 mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Get cloud cost optimization tips, new feature announcements, and AWS savings strategies.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              {subscribed ? (
                <p className="text-emerald-600 text-sm font-medium">Thanks for subscribing!</p>
              ) : (
                <>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com"
                    className="px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500/20 w-full md:w-64 transition-all"
                    required
                  />
                  <button type="submit" className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-medium rounded-xl transition-all flex items-center gap-2 flex-shrink-0 hover:shadow-lg hover:shadow-blue-500/20">
                    <Send className="w-4 h-4" /> Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Orbit className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">CloudLunar</span>
            </Link>
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed mb-4">
              Enterprise cloud cost optimization platform. Real AWS data, real savings.
            </p>
            <div className="flex gap-2">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all group">
                  <Icon className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/features" className="hover:text-gray-800 dark:hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/features" className="hover:text-gray-800 dark:hover:text-white transition-colors">AWS Services</Link></li>
              <li><Link to="/pricing" className="hover:text-gray-800 dark:hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="hover:text-gray-800 dark:hover:text-white transition-colors">Dashboard</Link></li>
              <li><a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white transition-colors flex items-center gap-1">Open App <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/how-it-works" className="hover:text-gray-800 dark:hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/how-it-works" className="hover:text-gray-800 dark:hover:text-white transition-colors">Architecture</Link></li>
              <li><Link to="/docs" className="hover:text-gray-800 dark:hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/blog" className="hover:text-gray-800 dark:hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/news" className="hover:text-gray-800 dark:hover:text-white transition-colors">Tech News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white transition-colors">About</a></li>
              <li><a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white transition-colors">Careers</a></li>
              <li><Link to="/contact" className="hover:text-gray-800 dark:hover:text-white transition-colors">Contact</Link></li>
              <li><a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">&copy; {new Date().getFullYear()} CloudLunar. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400 dark:text-gray-500">
            <a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Security</a>
            <a href="https://cloudlunar.io" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
