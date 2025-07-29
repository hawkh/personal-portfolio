import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "bert-ai-classification",
    title: "BERT-Based AI Content Classification",
    description: "Implemented BERT model processing 200+ articles/minute with 92% F1-score on 12,000+ training samples",
    longDescription: "Developed a sophisticated BERT-based text classification model to distinguish between AI-generated and human-written articles. Utilized Hugging Face's transformers library for BERT tokenization and fine-tuning. Incorporated Stratified K-Fold cross-validation and optimized training with Adam optimizer, reducing inference time by 35%.",
    technologies: ["Deep Learning", "NLP", "PyTorch", "BERT", "Hugging Face", "Transformers"],
    images: ["https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800&h=400"],
    githubUrl: "https://github.com/hawkh",
    metrics: [
      { label: "F1-Score", value: "92%", improvement: "12% over baseline" },
      { label: "Processing Speed", value: "200+", improvement: "articles/minute" },
      { label: "Training Samples", value: "12,000+", improvement: "comprehensive dataset" },
      { label: "Inference Time", value: "35%", improvement: "reduction achieved" }
    ],
    featured: true
  },
  {
    id: "poultry-monitoring",
    title: "Intelligent Poultry Monitoring System", 
    description: "Developed AI pipeline processing 5+ camera feeds with 98% uptime; deployed YOLOv11 on Raspberry Pi",
    longDescription: "Created an end-to-end AI pipeline for real-time poultry health monitoring using multimodal data. Trained and deployed YOLOv11 model on Raspberry Pi to count chickens and estimate weights with 96% accuracy. Implemented anomaly detection using computer vision and audio analysis, reducing disease outbreak response time from days to hours.",
    technologies: ["YOLOv11", "Computer Vision", "Edge AI", "IoT", "Raspberry Pi", "Audio Processing"],
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400"],
    githubUrl: "https://github.com/hawkh",
    metrics: [
      { label: "System Uptime", value: "98%", improvement: "reliable monitoring" },
      { label: "Camera Feeds", value: "5+", improvement: "simultaneous processing" },
      { label: "Counting Accuracy", value: "96%", improvement: "chicken counting precision" },
      { label: "Response Time", value: "Hours", improvement: "from days to hours" }
    ],
    featured: true
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence System",
    description: "Built LangChain/FAISS document analysis tool with 50K+ embeddings and sub-second query response",
    longDescription: "Developed automated document analysis tool using LangChain and FAISS, reducing processing time by 30%. Implemented Google Generative AI (Gemini) for intelligent document querying. Designed streamlit-based UI supporting concurrent users with real-time document Q&A capabilities. Utilized prompt engineering techniques to enhance response accuracy from 75% to 91%.",
    technologies: ["LangChain", "FAISS", "Generative AI", "Streamlit", "Google Gemini", "RAG"],
    images: ["https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=800&h=400"],
    githubUrl: "https://github.com/hawkh",
    metrics: [
      { label: "Embeddings", value: "50K+", improvement: "comprehensive knowledge base" },
      { label: "Query Response", value: "Sub-second", improvement: "real-time performance" },
      { label: "Processing Time", value: "30%", improvement: "reduction achieved" },
      { label: "Response Accuracy", value: "91%", improvement: "from 75% baseline" }
    ],
    featured: true
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis Engine",
    description: "Advanced sentiment analysis for Amazon reviews using BERT and Transformers with 95% accuracy",
    longDescription: "Developed a comprehensive sentiment analysis model for Amazon reviews using BERT and Hugging Face Transformers. Preprocessed text data with advanced tokenization, stopword removal, and lemmatization techniques. Fine-tuned BERT on a labeled dataset of 50,000+ reviews, achieving 95% accuracy in sentiment classification with robust performance across different product categories.",
    technologies: ["BERT", "Transformers", "NLP", "Sentiment Analysis", "Python", "Hugging Face"],
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400"],
    githubUrl: "https://github.com/hawkh",
    metrics: [
      { label: "Classification Accuracy", value: "95%", improvement: "high precision sentiment analysis" },
      { label: "Reviews Processed", value: "50,000+", improvement: "comprehensive dataset" },
      { label: "Model Performance", value: "Robust", improvement: "across product categories" }
    ],
    featured: false
  }
];