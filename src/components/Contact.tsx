'use client'

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section className="section-container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-primary mr-3" />
                <a href="mailto:ruthvikworking@gmail.com" className="hover:text-primary transition-colors">
                  ruthvikworking@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-primary mr-3" />
                <a href="tel:+919290614597" className="hover:text-primary transition-colors">
                  +91 9290614597
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-primary mr-3" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}