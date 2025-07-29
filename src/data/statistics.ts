import { Statistic, ExpertiseArea } from '../types';

export const statistics: Statistic[] = [
  {
    value: "95%",
    label: "Model Accuracy",
    description: "Achieved in poultry disease detection using multimodal AI",
    icon: "ChartBarIcon"
  },
  {
    value: "50+", 
    label: "Students Mentored",
    description: "Led and mentored students in AI/ML projects at Infin AI Club",
    icon: "AcademicCapIcon"
  },
  {
    value: "15+",
    label: "Projects Completed", 
    description: "Successfully delivered ML projects across various domains",
    icon: "CodeBracketIcon"
  },
  {
    value: "2+",
    label: "Years Experience",
    description: "Professional experience in machine learning and AI development",
    icon: "ClockIcon"
  }
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    icon: "🤖",
    title: "Machine Learning & AI",
    description: "PyTorch, TensorFlow, Scikit-learn, Model Optimization",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Model Optimization"]
  },
  {
    icon: "👁️", 
    title: "Computer Vision",
    description: "YOLO, OpenCV, Image Processing, Object Detection",
    technologies: ["YOLOv11", "OpenCV", "Image Processing", "Object Detection"]
  },
  {
    icon: "💬",
    title: "Natural Language Processing",
    description: "BERT, Transformers, LangChain, Sentiment Analysis", 
    technologies: ["BERT", "Transformers", "LangChain", "Sentiment Analysis"]
  },
  {
    icon: "🔗",
    title: "Edge AI & IoT", 
    description: "Raspberry Pi, Real-time Processing, IoT Integration",
    technologies: ["Raspberry Pi", "Real-time Processing", "IoT", "Edge Computing"]
  },
  {
    icon: "📊",
    title: "Data Engineering",
    description: "ETL Pipelines, Vector Databases, Data Preprocessing",
    technologies: ["ETL Pipelines", "FAISS", "Data Preprocessing", "Vector Databases"]
  }
];