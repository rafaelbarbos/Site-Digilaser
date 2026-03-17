'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'maps';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  href?: string;
  target?: '_blank' | '_self';
}

export function Button({
  variant = 'primary',
  children,
  onClick,
  className = '',
  icon,
  href,
  target,
}: ButtonProps) {
  const base = 'px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2 min-h-[44px]';

  const variants = {
    primary:   'bg-[#1565C0] text-white hover:bg-[#1E88E5] hover:shadow-lg hover:shadow-[#1565C0]/30',
    secondary: 'bg-white text-[#1565C0] border-2 border-[#1565C0] hover:bg-[#1565C0] hover:text-white',
    ghost:     'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#1565C0]',
    whatsapp:  'bg-[#25D366] text-white hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/40',
    maps:      'bg-[#1565C0] text-white hover:bg-[#1E88E5] hover:shadow-lg hover:shadow-[#1565C0]/30 w-full justify-center rounded-none py-4',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {variant === 'whatsapp' && <MessageCircle className="w-5 h-5" />}
      {variant === 'maps' && <MapPin className="w-5 h-5" />}
      {icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      {content}
    </motion.button>
  );
}