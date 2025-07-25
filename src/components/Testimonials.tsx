'use client'

import { motion } from 'framer-motion';
import { StarIcon, QuoteIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Senior Data Scientist, Tech Corp",
    content: "Sai's work on the poultry monitoring system was exceptional. His ability to integrate multiple AI technologies and deliver a production-ready solution impressed our entire team.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Prof. Anita Sharma",
    role: "AI Research Lead, IIT Madras",
    content: "As a student leader at Infin AI Club, Sai demonstrated remarkable technical skills and mentorship abilities. His projects consistently show innovation and practical impact.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Arjun Patel",
    role: "ML Engineer, Livestockify",
    content: "Working with Sai has been incredible. His deep learning expertise and ability to optimize models for edge deployment made our IoT solution a huge success.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="testimonial-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#testimonial-grid)" />
        </svg>
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
            What People Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feedback from colleagues, mentors, and collaborators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-full">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <QuoteIcon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Want to work together and share your experience?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}