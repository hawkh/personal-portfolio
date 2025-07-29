import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: "livestockify",
    title: "Machine Learning Engineer Intern",
    company: "Livestockify",
    duration: "Aug 2024 - Present",
    description: "Engineered ML models improving poultry disease detection from 82% to 95%, reducing false negatives by 35%",
    achievements: [
      "Engineered ML models improving poultry disease detection from 82% to 95%, reducing false negatives by 35%",
      "Implemented IoT-ML monitoring system processing 500+ data points daily with real-time analytics",
      "Developed audio-based health monitoring system reducing manual inspection time by 40%"
    ],
    technologies: ["PyTorch", "YOLOv11", "Computer Vision", "IoT", "Raspberry Pi", "Audio Processing"],
    metrics: [
      { label: "Model Accuracy", value: "95%", description: "Disease detection accuracy improvement" },
      { label: "False Negatives Reduced", value: "35%", description: "Reduction in missed disease cases" },
      { label: "Data Points Processed", value: "500+", description: "Daily real-time analytics processing" },
      { label: "Inspection Time Saved", value: "40%", description: "Manual inspection time reduction" }
    ]
  },
  {
    id: "infin-ai",
    title: "Tech Lead",
    company: "Infin AI Club, IIT Madras",
    duration: "Jan 2024 - Present",
    description: "Led team of 8 members across AI/ML projects, establishing development standards and technical roadmaps",
    achievements: [
      "Led team of 8 members across AI/ML projects, establishing development standards and technical roadmaps",
      "Organized 3 hackathons and 5 workshops, increasing club membership by 40% and project completion by 25%"
    ],
    technologies: ["Python", "Machine Learning", "Project Management", "Team Leadership"],
    metrics: [
      { label: "Team Members Led", value: "8", description: "Cross-functional AI/ML team" },
      { label: "Hackathons Organized", value: "3", description: "Major AI/ML competitions" },
      { label: "Workshops Conducted", value: "5", description: "Educational AI workshops" },
      { label: "Membership Growth", value: "40%", description: "Club membership increase" },
      { label: "Project Completion", value: "25%", description: "Improvement in completion rate" }
    ]
  },
  {
    id: "verzeo",
    title: "Machine Learning Intern",
    company: "Verzeo",
    duration: "Jan 2023 - Feb 2023",
    description: "Developed sentiment analysis model for Amazon reviews using BERT, achieving 95% classification accuracy",
    achievements: [
      "Developed sentiment analysis model for Amazon reviews using BERT, achieving 95% classification accuracy",
      "Preprocessed 50,000+ texts with NLP techniques, improving F1-score by 12% over baseline models"
    ],
    technologies: ["BERT", "Transformers", "NLP", "Python", "Hugging Face"],
    metrics: [
      { label: "Classification Accuracy", value: "95%", description: "BERT sentiment analysis model" },
      { label: "Texts Processed", value: "50,000+", description: "Amazon reviews dataset" },
      { label: "F1-Score Improvement", value: "12%", description: "Over baseline models" }
    ]
  }
];

export const education: Education[] = [
  {
    institution: "Indian Institute of Technology Madras",
    degree: "B.Sc. Data Science and Applications",
    field: "Data Science",
    duration: "Jan 2023 - Present",
    gpa: "7.00/10.0",
    coursework: [
      "Machine Learning Foundations",
      "Statistics and Probability", 
      "Deep Learning Architectures",
      "Data Structures and Algorithms",
      "Computer Vision",
      "Natural Language Processing",
      "Python Programming"
    ]
  },
  {
    institution: "Marri Laxman Reddy Institute of Technology",
    degree: "B.Tech Computer Science and IT",
    field: "Computer Science",
    duration: "Nov 2022 - Present", 
    gpa: "8.49/10.0",
    coursework: [
      "Object Oriented Programming",
      "Advanced Data Structures and Algorithms",
      "Computer Networks",
      "Operating Systems", 
      "Database Management Systems",
      "Web Development"
    ]
  },
  {
    institution: "Resonance Jr College",
    degree: "Intermediate",
    field: "Science",
    duration: "April 2020 - Aug 2022",
    gpa: "9.39/10.0",
    coursework: ["Mathematics", "Physics", "Chemistry"]
  }
];