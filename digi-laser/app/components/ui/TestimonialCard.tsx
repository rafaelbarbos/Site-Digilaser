'use client';

import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  city: string;
}

export function TestimonialCard({ quote, name, city }: TestimonialCardProps) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-xl p-6 shadow-lg mx-3 border border-white/40">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-[#0D1B2A] italic mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1565C0] to-[#00B0FF] flex items-center justify-center text-white font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-[#0D1B2A]">{name}</p>
          <p className="text-sm text-[#546E7A]">{city}</p>
        </div>
      </div>
    </div>
  );
}