'use client'

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, RocketLaunchIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const contactReasons = [
  {
    icon: BriefcaseIcon,
    title: "Job Opportunities",
    description: "Looking for a skilled ML Engineer? Let's discuss how I can contribute to your team."
  },
  {
    icon: RocketLaunchIcon,
    title: "Project Collaboration",
    description: "Have an exciting AI project? I'd love to collaborate and bring innovative solutions."
  },
  {
    icon: AcademicCapIcon,
    title: "Mentorship & Learning",
    description: "Want to discuss AI/ML concepts or need guidance? Happy to share knowledge!"
  }
];

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] -right-1/3 -top-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute w-[400px] h-[400px] -left-1/4 -bottom-1/4 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your next AI project or explore collaboration opportunities? I'm always excited to connect with fellow innovators.
          </p>
        </motion.div>

        {/* Contact Reasons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{reason.title}</h3>
                <p className="text-gray-400 text-sm">{reason.description}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm currently open to new opportunities and exciting projects. Whether you're looking to hire, collaborate, or just want to chat about AI/ML, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-primary/20 rounded-full mr-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <EnvelopeIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:ruthvikworking@gmail.com" className="text-white hover:text-primary transition-colors font-medium">
                    ruthvikworking@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-primary/20 rounded-full mr-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+919290614597" className="text-white hover:text-primary transition-colors font-medium">
                    +91 9290614597
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-4 bg-gray-800/50 rounded-lg group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-primary/20 rounded-full mr-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <span className="text-white font-medium">Hyderabad, India</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="./Sai_Ruthvik_MLE_Improved.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-200 text-center transform hover:scale-105"
                >
                  📄 Download Resume
                </a>
                <a
                  href="https://linkedin.com/in/sai-ruthvik-6b880a213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary/30 hover:border-primary/60 text-primary rounded-lg font-medium transition-all duration-200 text-center hover:bg-primary/10"
                >
                  💼 LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>
            <form className="space-y-6" action="mailto:ruthvikworking@gmail.com" method="post" encType="text/plain">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                🚀 Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}