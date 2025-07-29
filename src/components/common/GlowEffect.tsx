'use client'

import { motion } from 'framer-motion';

interface GlowEffectProps {
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}

export default function GlowEffect({
  children,
  color = '#3B82F6',
  intensity = 0.5,
  className = ''
}: GlowEffectProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-xl opacity-0"
        style={{
          background: `radial-gradient(circle, ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
        }}
        whileHover={{ opacity: intensity }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}