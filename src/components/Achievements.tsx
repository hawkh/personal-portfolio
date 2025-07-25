'use client'

import { motion } from 'framer-motion';
import { TrophyIcon, AcademicCapIcon, StarIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const achievements = [
  {
    icon: TrophyIcon,
    title: "95% Model Accuracy",
    description: "Achieved 95% accuracy in poultry disease detection using multimodal AI",
    color: "#FFD700"
  },
  {
    icon: ChartBarIcon,
    title: "30% Efficiency Boost",
    description: "Reduced document processing time by 30% with AI-powered analysis",
    color: "#00D4AA"
  },
  {
    icon: AcademicCapIcon,
    title: "IIT Madras Scholar",
    description: "Pursuing BS in Data Science from India's premier tech institute",
    color: "#6366F1"
  },
  {
    icon: StarIcon,
    title: "Tech Leadership",
    description: "Leading AI initiatives at Infin AI Club, mentoring 50+ students",
    color: "#F59E0B"
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
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
            Key Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering measurable impact through innovative AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl"
                    style={{ backgroundColor: achievement.color }}
                  />
                  
                  <div className="relative z-10">
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <Icon 
                        className="h-8 w-8" 
                        style={{ color: achievement.color }}
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {achievement.description}
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