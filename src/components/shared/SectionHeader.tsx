import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  badgeColor?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export default function SectionHeader({ badge, badgeColor = "text-indigo-400", title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 md:mb-20"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`inline-block ${badgeColor} text-sm font-semibold tracking-widest uppercase mb-4`}
      >
        {badge}
      </motion.span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
