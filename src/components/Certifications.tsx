'use client'

import { motion } from 'framer-motion';
import { DocumentTextIcon, AcademicCapIcon, StarIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { certifications } from '../data/achievements';

export default function Certifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications validating technical expertise and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const iconMap: { [key: string]: any } = {
              DocumentTextIcon,
              AcademicCapIcon,
              StarIcon,
              ChartBarIcon
            };
            const Icon = iconMap[cert.icon] || DocumentTextIcon;
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-full">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl"
                    style={{ backgroundColor: cert.color }}
                  />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${cert.color}20` }}
                      >
                        <Icon 
                          className="h-6 w-6" 
                          style={{ color: cert.color }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 flex-grow">
                      {cert.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}