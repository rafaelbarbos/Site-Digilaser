'use client';

import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#1565C0] hover:bg-[#F4F7FB] group"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#1565C0] to-[#00B0FF] rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#0D1B2A] mb-3">{title}</h3>
      <p className="text-[#546E7A] mb-4 leading-relaxed">{description}</p>
      <a href="#contato" className="inline-flex items-center gap-2 text-[#1565C0] font-medium group-hover:gap-3 transition-all">
        Saiba mais <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}