'use client'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillBarProps {
  skill: string;
  proficiency: number;
  color?: string;
  delay?: number;
}

export default function SkillBar({ 
  skill, 
  proficiency, 
  color = '#3B82F6',
  delay = 0 
}: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: delay,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
}