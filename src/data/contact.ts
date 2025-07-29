import { ContactInfo, ContactReason, SocialLink } from '../types';

export const contactInfo: ContactInfo = {
  email: "ruthvikworking@gmail.com",
  phone: "+91 9290614597", 
  location: "Hyderabad, India",
  availability: "Open to new opportunities",
  resumeUrl: "./Sai_Ruthvik MLE.pdf"
};

export const contactReasons: ContactReason[] = [
  {
    icon: "BriefcaseIcon",
    title: "Job Opportunities",
    description: "Looking for a skilled ML Engineer? Let's discuss how I can contribute to your team."
  },
  {
    icon: "RocketLaunchIcon", 
    title: "Project Collaboration",
    description: "Have an exciting AI project? I'd love to collaborate and bring innovative solutions."
  },
  {
    icon: "AcademicCapIcon",
    title: "Mentorship & Learning", 
    description: "Want to discuss AI/ML concepts or need guidance? Happy to share knowledge!"
  }
];

export const socialLinks: SocialLink[] = [
  {
    href: "https://linkedin.com/in/sai-ruthvik-6b880a213",
    icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg",
    color: "#0A66C2",
    name: "LinkedIn"
  },
  {
    href: "https://github.com/hawkh",
    icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg", 
    color: "#181717",
    name: "GitHub"
  },
  {
    href: "https://kaggle.com/hawkh",
    icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg",
    color: "#20BEFF", 
    name: "Kaggle"
  },
  {
    href: "https://www.leetcode.com/saifromiitm",
    icon: "https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg",
    color: "#FFA116",
    name: "LeetCode"
  }
];