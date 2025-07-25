'use client'

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: "95%", label: "Model Accuracy" },
    { number: "50+", label: "Students Mentored" },
    { number: "15+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden" id="about">
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] -left-1/4 top-1/4 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute w-[300px] h-[300px] -right-1/4 -bottom-1/4 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transforming ideas into intelligent solutions through cutting-edge AI
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a <span className="text-primary font-semibold">Machine Learning Engineer</span> passionate about building AI solutions that create real-world impact. With expertise spanning computer vision, NLP, and edge AI deployment, I've successfully delivered models that improve efficiency by 30-40% and accuracy by 10-15%.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently pursuing dual degrees from <span className="text-primary font-semibold">IIT Madras</span> (Data Science) and <span className="text-primary font-semibold">MLRITM</span> (Computer Science), I combine academic rigor with hands-on experience in solving complex problems through data-driven approaches.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As a <span className="text-primary font-semibold">Tech Lead</span> at Infin AI Club, I've mentored 50+ students and led multiple successful AI projects, always focusing on practical applications that make a difference.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
                <h3 className="text-2xl font-bold mb-6 text-white">Expertise Areas</h3>
                <div className="space-y-4">
                  {[
                    { icon: "🤖", title: "Machine Learning & AI", desc: "PyTorch, TensorFlow, Scikit-learn" },
                    { icon: "👁️", title: "Computer Vision", desc: "YOLO, OpenCV, Image Processing" },
                    { icon: "💬", title: "Natural Language Processing", desc: "BERT, Transformers, LangChain" },
                    { icon: "🔗", title: "Edge AI & IoT", desc: "Raspberry Pi, Real-time Processing" },
                    { icon: "📊", title: "Data Engineering", desc: "ETL Pipelines, Vector Databases" }
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-700/30 transition-colors duration-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-2xl">{area.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{area.title}</h4>
                        <p className="text-gray-400 text-sm">{area.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}