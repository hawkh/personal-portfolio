'use client'

import { motion } from 'framer-motion';
import { 
  CommandLineIcon, 
  CpuChipIcon,
  CircleStackIcon,
  CloudIcon 
} from '@heroicons/react/24/outline';

const skills = [
  {
    category: "Programming & Frameworks",
    items: ["Python", "Java", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    icon: CommandLineIcon,
    color: "#34D399"
  },
  {
    category: "AI & Machine Learning",
    items: ["Deep Learning", "Computer Vision", "NLP", "BERT", "Transformers", "YOLOv11", "LangChain"],
    icon: CpuChipIcon,
    color: "#60A5FA"
  },
  {
    category: "Data & Analytics",
    items: ["SQL", "MySQL", "MongoDB", "FAISS", "Data Analysis", "Power BI", "Statistical Modeling"],
    icon: CircleStackIcon,
    color: "#F472B6"
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Jupyter", "Streamlit", "Linux", "Raspberry Pi", "Google Colab", "Hugging Face"],
    icon: CloudIcon,
    color: "#A78BFA"
  }
];

const SkillCard = ({ skill, index }) => {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden"
    >
      <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Background SVG Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <pattern id={`grid-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={skill.color} strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill={`url(#grid-${index})`} />
        </svg>
        
        {/* Glowing orb in corner */}
        <div 
          className="absolute -top-10 -right-10 w-20 h-20 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: `${skill.color}20` }}
        />

        <div className="relative">
          <motion.div 
            className="flex items-center mb-4"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-2 rounded-full bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" style={{ backgroundColor: skill.color }}>
              <Icon className="h-6 w-6" style={{ color: skill.color }} />
            </div>
            <h3 className="text-xl font-semibold ml-2 group-hover:text-white transition-colors duration-300">{skill.category}</h3>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="px-3 py-1 rounded-full text-sm relative overflow-hidden group/item"
                style={{ 
                  backgroundColor: `${skill.color}20`,
                  color: skill.color
                }}
              >
                <span className="relative z-10 group-hover/item:text-white transition-colors duration-300">{item}</span>
                <div 
                  className="absolute inset-0 w-0 group-hover/item:w-full transition-all duration-300"
                  style={{ backgroundColor: skill.color }}
                />
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section className="section-container relative" id="skills">
      {/* Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cutting-edge technologies powering intelligent solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}