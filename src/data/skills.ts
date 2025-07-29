import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming & Frameworks",
    icon: "CommandLineIcon",
    color: "#34D399",
    skills: [
      { name: "Python", proficiency: 95, yearsOfExperience: 3, projects: ["bert-ai-classification", "poultry-monitoring", "document-intelligence"] },
      { name: "PyTorch", proficiency: 90, yearsOfExperience: 2, projects: ["bert-ai-classification", "poultry-monitoring"] },
      { name: "TensorFlow", proficiency: 80, yearsOfExperience: 2, projects: ["sentiment-analysis"] },
      { name: "Scikit-learn", proficiency: 85, yearsOfExperience: 2, projects: ["bert-ai-classification", "sentiment-analysis"] },
      { name: "Java", proficiency: 75, yearsOfExperience: 2, projects: [] },
      { name: "JavaScript", proficiency: 70, yearsOfExperience: 1, projects: [] }
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: "CpuChipIcon", 
    color: "#60A5FA",
    skills: [
      { name: "BERT", proficiency: 90, yearsOfExperience: 2, projects: ["bert-ai-classification", "sentiment-analysis"] },
      { name: "Transformers", proficiency: 88, yearsOfExperience: 2, projects: ["bert-ai-classification", "sentiment-analysis"] },
      { name: "YOLOv11", proficiency: 85, yearsOfExperience: 1, projects: ["poultry-monitoring"] },
      { name: "Computer Vision", proficiency: 87, yearsOfExperience: 2, projects: ["poultry-monitoring"] },
      { name: "NLP", proficiency: 90, yearsOfExperience: 2, projects: ["bert-ai-classification", "sentiment-analysis", "document-intelligence"] },
      { name: "LangChain", proficiency: 80, yearsOfExperience: 1, projects: ["document-intelligence"] },
      { name: "RAG", proficiency: 82, yearsOfExperience: 1, projects: ["document-intelligence"] }
    ]
  },
  {
    name: "Data Engineering & Databases",
    icon: "CircleStackIcon",
    color: "#F472B6", 
    skills: [
      { name: "SQL", proficiency: 85, yearsOfExperience: 2, projects: [] },
      { name: "MySQL", proficiency: 80, yearsOfExperience: 2, projects: [] },
      { name: "MongoDB", proficiency: 75, yearsOfExperience: 1, projects: [] },
      { name: "FAISS", proficiency: 78, yearsOfExperience: 1, projects: ["document-intelligence"] },
      { name: "ETL Pipelines", proficiency: 70, yearsOfExperience: 1, projects: [] },
      { name: "Data Preprocessing", proficiency: 90, yearsOfExperience: 2, projects: ["bert-ai-classification", "sentiment-analysis"] }
    ]
  },
  {
    name: "Tools & Platforms",
    icon: "CloudIcon",
    color: "#A78BFA",
    skills: [
      { name: "Git", proficiency: 85, yearsOfExperience: 3, projects: ["bert-ai-classification", "poultry-monitoring", "document-intelligence"] },
      { name: "Docker", proficiency: 70, yearsOfExperience: 1, projects: [] },
      { name: "Jupyter Notebooks", proficiency: 90, yearsOfExperience: 3, projects: ["bert-ai-classification", "sentiment-analysis"] },
      { name: "Streamlit", proficiency: 80, yearsOfExperience: 1, projects: ["document-intelligence"] },
      { name: "Linux", proficiency: 75, yearsOfExperience: 2, projects: [] },
      { name: "Raspberry Pi", proficiency: 80, yearsOfExperience: 1, projects: ["poultry-monitoring"] },
      { name: "Google Cloud", proficiency: 65, yearsOfExperience: 1, projects: [] },
      { name: "Hugging Face", proficiency: 85, yearsOfExperience: 2, projects: ["bert-ai-classification", "sentiment-analysis"] }
    ]
  }
];