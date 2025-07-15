'use client'

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section-container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              Machine Learning Engineer at the intersection of AI research and applied deployment. I specialize in designing, training, and optimizing AI models that translate into business-critical solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently pursuing BS in Data Science at IIT Madras and B.Tech in Computer Science at MLRITM, I combine academic excellence with practical experience in solving real-world problems through data-driven approaches.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Focus Areas:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Machine Learning & AI</li>
              <li>Computer Vision</li>
              <li>Natural Language Processing</li>
              <li>Deep Learning</li>
              <li>IoT-enabled Predictive Analytics</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}