import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  Phone,
  Building2,
  Headphones,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: Headphones,
    title: "Sales & Partnerships",
    description: "Talk to our sales team about enterprise plans, custom integrations, and volume pricing.",
    email: "sales@cloudlunar.io",
    response: "Within 2 hours",
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/10",
  },
  {
    icon: MessageSquare,
    title: "Technical Support",
    description: "Get help with setup, configuration, AWS integration issues, or optimization queries.",
    email: "support@cloudlunar.io",
    response: "Within 1 hour",
    color: "from-cyan-500 to-teal-500",
    glow: "bg-cyan-500/10",
  },
  {
    icon: Building2,
    title: "Enterprise Solutions",
    description: "Custom deployments, SLA agreements, dedicated support, and white-glove onboarding.",
    email: "enterprise@cloudlunar.io",
    response: "Within 4 hours",
    color: "from-teal-500 to-emerald-500",
    glow: "bg-teal-500/10",
  },
];

const offices = [
  { city: "San Francisco", country: "United States", timezone: "PST (UTC-8)", address: "548 Market St, Suite 36451" },
  { city: "London", country: "United Kingdom", timezone: "GMT (UTC+0)", address: "71-75 Shelton Street, WC2H 9JQ" },
  { city: "Bangalore", country: "India", timezone: "IST (UTC+5:30)", address: "HSR Layout, Sector 2" },
];

const faqs = [
  { q: "How quickly can I get started?", a: "You can connect your AWS account and see your first optimization report in under 5 minutes. No infrastructure changes required." },
  { q: "Is my AWS data secure?", a: "Absolutely. We use read-only IAM roles, SOC 2 compliant infrastructure, and your data never leaves your chosen region." },
  { q: "Do you offer free trials?", a: "Yes! Our Starter plan is free forever for up to 2 AWS accounts and 3 users. No credit card required." },
  { q: "Can I get a custom demo?", a: "Of course. Fill out the contact form or email sales@cloudlunar.io and we'll set up a personalized walkthrough." },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", subject: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", subject: "general", message: "" });
  };

  return (
    <section className="relative py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#030712] dark:via-blue-950/30 dark:to-[#030712] pointer-events-none" />
      <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[200px]" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-600/[0.03] rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">Get in Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let's <span className="text-gradient">Optimize Together</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need a custom demo, enterprise pricing, or technical support — our team is ready to help you start saving.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-32 h-32 ${method.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{method.description}</p>
                <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mb-2">
                  <Mail className="w-4 h-4" />
                  {method.email}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  Response time: {method.response}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form + Info Grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  Send another message <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="general" className="bg-blue-50">General Inquiry</option>
                      <option value="demo" className="bg-blue-50">Request a Demo</option>
                      <option value="enterprise" className="bg-blue-50">Enterprise Pricing</option>
                      <option value="support" className="bg-blue-50">Technical Support</option>
                      <option value="partnership" className="bg-blue-50">Partnership</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-medium mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your cloud infrastructure and how we can help..."
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Stats */}
            <div className="glass-card p-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" /> Why Teams Choose Us
              </h4>
              <div className="space-y-4">
                {[
                  { label: "Average cost savings", value: "40%", desc: "in first month" },
                  { label: "Setup time", value: "< 5 min", desc: "to first scan" },
                  { label: "Customer satisfaction", value: "98%", desc: "renewal rate" },
                  { label: "Support response", value: "< 1 hr", desc: "avg. reply" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-white/5 last:border-0">
                    <div>
                      <p className="text-sm text-gray-400 dark:text-gray-500">{stat.label}</p>
                      <p className="text-[10px] text-gray-400 dark:text-gray-500">{stat.desc}</p>
                    </div>
                    <span className="text-lg font-bold text-gradient">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Badge */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">SOC 2 Compliant</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Your data is protected with enterprise-grade security. Read-only AWS access, encrypted at rest, and compliant with industry standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Quick Resources</h4>
              <div className="space-y-2">
                {[
                  { label: "Documentation", to: "/docs", icon: BookOpen },
                  { label: "Pricing Plans", to: "/pricing", icon: Phone },
                  { label: "How It Works", to: "/how-it-works", icon: Sparkles },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <link.icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{link.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 ml-auto group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Offices</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 group hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">{office.city}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{office.country}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{office.address}</p>
                    <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 dark:text-gray-500">
                      <Clock className="w-3 h-3" />
                      {office.timezone}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Mini Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Common Questions</h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{faq.q}</span>
                  <ArrowRight className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${activeFaq === i ? "rotate-90" : ""}`} />
                </button>
                {activeFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
