import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { socialLinks } from '../data/contact'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] -right-1/4 -top-1/4 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-[600px] h-[600px] -left-1/4 -bottom-1/4 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Data Science SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform -rotate-6" />
              <svg
                viewBox="0 0 500 500"
                className="w-full max-w-[500px] mx-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="text-primary/80">
                  {/* Neural Network Nodes */}
                  <circle cx="250" cy="100" r="20" className="fill-current" />
                  <circle cx="150" cy="200" r="20" className="fill-current" />
                  <circle cx="350" cy="200" r="20" className="fill-current" />
                  <circle cx="200" cy="300" r="20" className="fill-current" />
                  <circle cx="300" cy="300" r="20" className="fill-current" />
                  <circle cx="250" cy="400" r="20" className="fill-current" />

                  {/* Connection Lines */}
                  <path
                    d="M250 120 L150 180 M250 120 L350 180 M150 220 L200 280 M150 220 L300 280 M350 220 L200 280 M350 220 L300 280 M200 320 L250 380 M300 320 L250 380"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  {/* Data Points and Binary */}
                  <text x="120" y="150" className="fill-current text-xs">01001</text>
                  <text x="380" y="150" className="fill-current text-xs">10110</text>
                  <text x="180" y="250" className="fill-current text-xs">11001</text>
                  <text x="320" y="250" className="fill-current text-xs">00110</text>

                  {/* Floating Mathematical Symbols */}
                  <text x="150" y="350" className="fill-current text-lg">∑</text>
                  <text x="350" y="350" className="fill-current text-lg">∫</text>
                  <text x="250" y="150" className="fill-current text-lg">π</text>
                  <text x="200" y="200" className="fill-current text-lg">μ</text>
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium text-primary uppercase tracking-wider"
              >
                Machine Learning Engineer
              </motion.h2>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold"
              >
                Hi, I'm{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
                  Sai Ruthvik
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400"
              >
                <p>Turning Data into Intelligence 🧠</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 text-gray-400"
            >
              <p>Designing intelligent systems with code, data, and math</p>
              <p>Building systems that see, understand, and act</p>
              <p>Predictive, perceptive, and production-ready</p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <a
                href="/Sai_Ruthvik MLE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 text-center"
              >
                📄 Download Resume
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-primary/30 hover:border-primary/60 text-primary rounded-full font-medium transition-all duration-200 hover:bg-primary/10 text-center"
              >
                🚀 View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 pt-8 justify-center sm:justify-start"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transform hover:scale-110 transition-all duration-200 border border-gray-700/50 hover:border-primary/50"
                  style={{ color: social.color }}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-5 w-5 filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-200"
                    style={{ filter: 'brightness(0) invert(1)' }}
                    onMouseOver={(e) => e.currentTarget.style.filter = 'none'}
                    onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0) invert(1)'}
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="animate-bounce block">
            <ArrowDownIcon className="h-6 w-6 text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
