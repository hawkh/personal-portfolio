'use client'

import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Innovative AI solutions that deliver real-world impact</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full">
                  FEATURED
                </span>
              </div>
              
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Impact Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
                    {project.metrics[0]?.value} {project.metrics[0]?.label}
                  </span>
                </div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-all duration-200 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeBracketIcon className="h-4 w-4 transform group-hover/link:rotate-12 transition-transform duration-200" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-all duration-200 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GlobeAltIcon className="h-4 w-4 transform group-hover/link:rotate-12 transition-transform duration-200" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transform hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-200 group/link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CodeBracketIcon className="h-5 w-5 transform group-hover/link:rotate-12 transition-transform duration-200" />
                      Code
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-all duration-200 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GlobeAltIcon className="h-5 w-5 transform group-hover/link:rotate-12 transition-transform duration-200" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}