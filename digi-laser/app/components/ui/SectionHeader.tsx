'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean; // true = textos brancos (para fundos escuros)
}

export function SectionHeader({ title, subtitle, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className={`text-3xl sm:text-[40px] font-bold mb-4 ${light ? 'text-white' : 'text-[#0D1B2A]'}`}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#1565C0] to-[#00B0FF] mx-auto mb-6" />
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-[#546E7A]'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}