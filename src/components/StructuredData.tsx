'use client'

import { useEffect } from 'react'

export default function StructuredData() {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sai Ruthvik Bommakanti",
      "jobTitle": "Machine Learning Engineer",
      "description": "Machine Learning Engineer and Data Science student specializing in AI, Computer Vision, and Deep Learning",
      "url": window.location.origin,
      "sameAs": [
        "https://linkedin.com/in/sai-ruthvik-6b880a213",
        "https://github.com/hawkh",
        "https://kaggle.com/hawkh",
        "https://www.leetcode.com/saifromiitm"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Indian Institute of Technology Madras",
          "alternateName": "IIT Madras"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Marri Laxman Reddy Institute of Technology and Management",
          "alternateName": "MLRITM"
        }
      ],
      "knowsAbout": [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "PyTorch",
        "Python",
        "Data Science",
        "Artificial Intelligence"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Machine Learning Engineer",
        "occupationLocation": {
          "@type": "Place",
          "name": "Hyderabad, India"
        }
      }
    }

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Sai Ruthvik Bommakanti Portfolio",
      "description": "Machine Learning Engineer and Data Science student portfolio showcasing AI, Computer Vision, and Deep Learning projects",
      "url": window.location.origin,
      "author": {
        "@type": "Person",
        "name": "Sai Ruthvik Bommakanti"
      },
      "inLanguage": "en-US",
      "copyrightYear": new Date().getFullYear(),
      "genre": "Portfolio"
    }

    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Machine Learning Engineering Services",
      "description": "Professional machine learning and AI development services",
      "provider": {
        "@type": "Person",
        "name": "Sai Ruthvik Bommakanti"
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Machine Learning Development",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Deep Learning Models",
        "AI Consulting"
      ]
    }

    // Add structured data to head
    const addStructuredData = (schema: object, id: string) => {
      const existingScript = document.getElementById(id)
      if (existingScript) {
        existingScript.remove()
      }

      const script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }

    addStructuredData(personSchema, 'person-schema')
    addStructuredData(websiteSchema, 'website-schema')
    addStructuredData(professionalServiceSchema, 'service-schema')

    // Cleanup function
    return () => {
      const schemas = ['person-schema', 'website-schema', 'service-schema']
      schemas.forEach(id => {
        const script = document.getElementById(id)
        if (script) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}