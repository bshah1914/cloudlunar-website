import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Cloud, Github, Linkedin, Twitter, Mail, ArrowRight, ExternalLink, Send } from "lucide-react";

const TOOL_URL = "http://localhost:3000";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="relative pt-28 pb-10 bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-16 text-center mb-24 relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-indigo-600/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-purple-600/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-gray-300 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Start optimizing in 5 minutes
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Cut Your<br />
              <span className="text-gradient">AWS Bill in Half?</span>
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Join hundreds of engineering teams saving thousands per month.
              Connect your AWS account and see real savings in your first scan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={TOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
              >
                Launch Dashboard Free
                <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="px-10 py-4 glass hover:bg-white/10 text-white font-semibold rounded-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                See Demo
              </a>
            </div>

            <p className="text-xs text-gray-600 mt-6">
              No credit card required &bull; Read-only AWS access &bull; SOC 2 compliant
            </p>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 mb-20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-400">Get cloud cost optimization tips, new feature announcements, and AWS savings strategies delivered to your inbox.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              {subscribed ? (
                <p className="text-green-400 text-sm font-medium">Thanks for subscribing!</p>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 w-full md:w-64"
                    required
                  />
                  <button type="submit" className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-medium rounded-xl transition-all flex items-center gap-2 flex-shrink-0">
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="relative w-8 h-8">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Moon className="w-4 h-4 text-white" />
                </div>
                <Cloud className="w-3 h-3 text-cyan-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-lg font-bold text-gradient">CloudLunar</span>
            </a>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Enterprise cloud cost optimization platform. Real AWS data, real savings.
            </p>
            <div className="flex gap-2">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a key={i} href="#hero" className="w-9 h-9 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="w-4 h-4 text-gray-500 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AWS Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href={TOOL_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">Open App <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#hero" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} CloudLunar. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#hero" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-gray-400 transition-colors">Security</a>
            <a href="#hero" className="hover:text-gray-400 transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
