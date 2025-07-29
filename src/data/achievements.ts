import { Achievement } from '../types';

// Achievements (Awards and Recognition only)
export const achievements: Achievement[] = [
  {
    id: "iit-hackathon-winner",
    title: "First Place Winner - AI/ML Hackathon, IIT Madras 2024",
    description: "Won first place among 200+ participants in the prestigious AI/ML hackathon at IIT Madras, demonstrating exceptional problem-solving skills and technical expertise",
    date: "2024",
    type: "award",
    icon: "TrophyIcon",
    color: "#FFD700"
  },
  {
    id: "dhandho-fellowship",
    title: "Selected for Dhandho Fellowship 2023",
    description: "Selected as one of the top 500 candidates from over 10,000+ applicants for the prestigious Dhandho Fellowship program",
    date: "2023", 
    type: "recognition",
    icon: "StarIcon",
    color: "#F59E0B"
  },
  {
    id: "model-accuracy-achievement",
    title: "95% Model Accuracy Achievement",
    description: "Achieved 95% accuracy in poultry disease detection using multimodal AI, significantly improving livestock health monitoring",
    date: "2024",
    type: "recognition",
    icon: "ChartBarIcon",
    color: "#00D4AA"
  },
  {
    id: "tech-leadership",
    title: "Tech Leadership at Infin AI Club",
    description: "Leading AI initiatives at Infin AI Club, IIT Madras, mentoring 50+ students and organizing multiple successful hackathons",
    date: "2024",
    type: "recognition", 
    icon: "AcademicCapIcon",
    color: "#6366F1"
  }
];

// Certifications (separate from achievements)
export const certifications: Achievement[] = [
  {
    id: "advanced-sql-cert",
    title: "Advanced SQL Certification - HackerRank",
    description: "Earned advanced SQL certification from HackerRank, demonstrating proficiency in complex database queries and optimization",
    date: "2023",
    type: "certification",
    icon: "DocumentTextIcon",
    color: "#8B5CF6"
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization - Coursera",
    description: "Completed comprehensive Machine Learning Specialization course on Coursera, covering supervised and unsupervised learning algorithms",
    date: "2023",
    type: "certification",
    icon: "DocumentTextIcon", 
    color: "#06B6D4"
  },
  {
    id: "pytorch-cert",
    title: "Deep Learning with PyTorch Certification",
    description: "Obtained certification in Deep Learning with PyTorch, mastering neural network architectures and implementation techniques",
    date: "2023",
    type: "certification",
    icon: "DocumentTextIcon",
    color: "#EF4444"
  }
];