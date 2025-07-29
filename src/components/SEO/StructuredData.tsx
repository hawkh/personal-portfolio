'use client'

import { personalData } from '../../data/personal';
import { experiences } from '../../data/experience';
import { projects } from '../../data/projects';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalData.basicInfo.name,
    "jobTitle": personalData.basicInfo.title,
    "description": personalData.professional.summary,
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "email": personalData.basicInfo.email,
    "telephone": personalData.basicInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personalData.basicInfo.location
    },
    "sameAs": [
      personalData.social.linkedin,
      personalData.social.github,
      personalData.social.kaggle,
      personalData.social.leetcode
    ],
    "knowsAbout": personalData.professional.specializations,
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Indian Institute of Technology Madras",
        "url": "https://www.iitm.ac.in/"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "Marri Laxman Reddy Institute of Technology",
        "url": "https://mlritm.ac.in/"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Livestockify",
      "description": "Machine Learning Engineer Intern"
    }
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${personalData.basicInfo.name} - Machine Learning Engineer`,
    "description": personalData.professional.summary,
    "provider": {
      "@type": "Person",
      "name": personalData.basicInfo.name
    },
    "areaServed": "Global",
    "serviceType": "Machine Learning Engineering",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "ML Engineering Services",
      "itemListElement": personalData.professional.specializations.map(spec => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": spec
        }
      }))
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${personalData.basicInfo.name} - Portfolio`,
    "description": `Professional portfolio showcasing machine learning projects and expertise`,
    "author": {
      "@type": "Person",
      "name": personalData.basicInfo.name
    },
    "dateCreated": "2024",
    "keywords": [
      "Machine Learning",
      "Artificial Intelligence", 
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "PyTorch",
      "BERT",
      "Data Science"
    ].join(", ")
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema)
        }}
      />
    </>
  );
}