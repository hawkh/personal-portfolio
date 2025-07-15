'use client'

import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "BERT-Based AI Content Classification",
    description: "Implemented a BERT-based text classification model to distinguish between AI-generated and human-written articles. Utilized Hugging Face's transformers library for BERT tokenization and fine-tuning. Incorporated Stratified K-Fold cross-validation and optimized training with Adam optimizer.",
    technologies: ["Deep Learning", "NLP", "PyTorch", "BERT"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "#",
  },
  {
    title: "Intelligent Poultry Monitoring System",
    description: "Developed an end-to-end AI pipeline for real-time poultry health monitoring using multimodal data. Trained and deployed YOLOv11 model on Raspberry Pi to count chickens and estimate weights. Implemented anomaly detection using computer vision and audio analysis.",
    technologies: ["Deep Learning", "Computer Vision", "Edge AI", "IoT"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "#",
  },
  {
    title: "Document Intelligence System",
    description: "Developed automated document analysis tool using LangChain and FAISS, reducing processing time by 30%. Implemented Google Generative AI (Gemini) for intelligent document querying. Designed streamlit-based UI for real-time Q&A over PDF documents.",
    technologies: ["NLP", "RAG", "Generative AI", "LangChain"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "#",
  }
];

export default function Projects() {
  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={project.image} 
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