'use client'

import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "Livestockify",
    duration: "Aug 2024 - Present",
<<<<<<< HEAD
    description: "🎯 Engineered end-to-end ML pipeline achieving 95% accuracy in poultry disease detection, reducing false negatives by 35% and preventing $50K+ in annual losses. Deployed YOLOv11 on Raspberry Pi processing 500+ daily data points with 98% uptime.",
    highlights: ["95% Model Accuracy", "35% Reduction in False Negatives", "$50K+ Cost Savings"]
=======
    description: "Engineered and deployed ML models achieving 95% accuracy for poultry disease detection using multimodal data. Implemented real-time monitoring system integrating IoT sensors with machine learning pipeline. Developed automated health monitoring system using audio processing and deep learning algorithms.",
>>>>>>> f3fcba78029086a05612b7bfd2aeabbeffc863c9
  },
  {
    title: "Tech Lead",
    company: "Infin AI Club, IIT Madras",
    duration: "Jan 2024 - Present",
<<<<<<< HEAD
    description: "🚀 Led cross-functional team of 8 engineers across 5 AI/ML projects, mentoring 50+ students and increasing project completion by 25%. Organized 3 hackathons securing $10K in sponsorships.",
    highlights: ["50+ Students Mentored", "25% Higher Completion Rate", "$10K Sponsorships"]
=======
    description: "Led multiple AI/ML projects, mentoring club members to develop impactful solutions. Organized hackathons and AI workshops, fostering a culture of innovation and hands-on learning.",
>>>>>>> f3fcba78029086a05612b7bfd2aeabbeffc863c9
  },
  {
    title: "Machine Learning Intern",
    company: "Verzeo",
    duration: "Jan 2023 - Feb 2023",
<<<<<<< HEAD
    description: "⚡ Developed BERT-based sentiment analysis achieving 95% accuracy on 50K+ Amazon reviews. Optimized model inference time by 30% using quantization and pruning techniques.",
    highlights: ["95% Accuracy", "50K+ Samples", "30% Faster Inference"]
=======
    description: "Developed a sentiment analysis model for Amazon reviews using BERT and Hugging Face Transformers. Preprocessed text data with tokenization, stopword removal, and lemmatization. Fine-tuned BERT on a labeled dataset, achieving ~95% accuracy in sentiment classification.",
>>>>>>> f3fcba78029086a05612b7bfd2aeabbeffc863c9
  },
];

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
              key={index}
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
              <div className="relative z-10">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
<<<<<<< HEAD
                <p className="text-gray-500 dark:text-gray-400 mb-3">{exp.duration}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                {exp.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
=======
                <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
>>>>>>> f3fcba78029086a05612b7bfd2aeabbeffc863c9
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}