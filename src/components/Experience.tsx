'use client'

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="section-container" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex-shrink-0 relative z-10">
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <BriefcaseIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                
                {/* Achievements */}
                {exp.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {exp.technologies.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metrics */}
                {exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-2 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}