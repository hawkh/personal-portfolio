'use client'

import { motion } from 'framer-motion';
import { DocumentArrowDownIcon, EyeIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-purple-500/10 to-secondary/10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Download my resume to see my full experience, or get in touch to discuss how I can contribute to your next AI project.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Resume Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                  <DocumentArrowDownIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Machine Learning Engineer Resume</h3>
                <p className="text-gray-400 mb-6">Complete overview of my experience, skills, and achievements</p>
                
                <div className="space-y-3">
                  <a
                    href="/Sai_Ruthvik MLE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    <DocumentArrowDownIcon className="h-5 w-5" />
                    Download Resume
                  </a>
                  
                  <a
                    href="/Sai_Ruthvik MLE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 hover:border-primary/60 text-primary rounded-lg font-medium transition-all duration-200"
                  >
                    <EyeIcon className="h-5 w-5" />
                    View Online
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Quick Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-white font-medium">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-white font-medium">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ML Models Deployed</span>
                  <span className="text-white font-medium">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Technologies</span>
                  <span className="text-white font-medium">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Current Role</span>
                  <span className="text-primary font-medium">ML Engineer</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Let's Work Together
            </a>
            <a
              href="https://linkedin.com/in/sai-ruthvik-6b880a213"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary/30 hover:border-primary/60 text-primary rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ShareIcon className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}