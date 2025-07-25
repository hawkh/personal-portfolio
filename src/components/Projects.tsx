'use client'

import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: "BERT-Based AI Content Classification",
<<<<<<< HEAD
    description: "🎯 95% accuracy in distinguishing AI vs human content using BERT transformers. Implemented advanced NLP techniques with Stratified K-Fold validation and Adam optimization for robust model performance.",
    technologies: ["Deep Learning", "NLP", "PyTorch", "BERT", "Hugging Face"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "https://github.com/hawkh",
    liveUrl: "#",
    impact: "95% Accuracy",
    featured: true
  },
  {
    title: "Intelligent Poultry Monitoring System",
    description: "🚀 Real-time AI pipeline for poultry health monitoring with YOLOv11 on Raspberry Pi. Combines computer vision, audio analysis, and IoT sensors for comprehensive livestock management.",
    technologies: ["YOLOv11", "Computer Vision", "Edge AI", "IoT", "Raspberry Pi"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "https://github.com/hawkh",
    liveUrl: "#",
    impact: "Real-time Monitoring",
    featured: true
  },
  {
    title: "Document Intelligence System",
    description: "⚡ 30% faster document processing with AI-powered analysis using LangChain and FAISS. Features intelligent Q&A over PDFs with Google Gemini integration and intuitive Streamlit interface.",
    technologies: ["LangChain", "FAISS", "Generative AI", "Streamlit", "Google Gemini"],
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "https://github.com/hawkh",
    liveUrl: "#",
    impact: "30% Efficiency Boost"
  },
  {
    title: "Sentiment Analysis Engine",
    description: "🎭 Advanced sentiment analysis for Amazon reviews using BERT and Transformers. Achieved 95% accuracy with comprehensive text preprocessing and fine-tuned model architecture.",
    technologies: ["BERT", "Transformers", "NLP", "Sentiment Analysis", "Python"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
    githubUrl: "https://github.com/hawkh",
    impact: "95% Accuracy"
=======
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
>>>>>>> f3fcba78029086a05612b7bfd2aeabbeffc863c9
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
<<<<<<< HEAD
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Innovative AI solutions that deliver real-world impact</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
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
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Impact Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary/90 text-white text-sm font-medium rounded-full">
                    {project.impact}
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
=======
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
>>>>>>> f3fcba78029086a05612b7bfd2aeabbeffc863c9
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