import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BasePathProvider from '@/components/BasePathProvider'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sai Ruthvik Bommakanti - Machine Learning Engineer Portfolio',
    template: '%s | Sai Ruthvik Bommakanti'
  },
  description: 'Machine Learning Engineer and Data Science student specializing in AI, Computer Vision, and Deep Learning. Experienced in PyTorch, NLP, Computer Vision, and IoT-enabled predictive analytics. View my projects, experience, and skills.',
  keywords: [
    'Machine Learning Engineer',
    'Data Science',
    'Artificial Intelligence',
    'Computer Vision',
    'Deep Learning',
    'PyTorch',
    'NLP',
    'Natural Language Processing',
    'BERT',
    'Transformers',
    'IoT',
    'Predictive Analytics',
    'Python',
    'Portfolio',
    'Sai Ruthvik',
    'Sai Ruthvik Bommakanti',
    'IIT Madras',
    'MLRITM'
  ],
  authors: [{ name: 'Sai Ruthvik Bommakanti', url: 'https://github.com/hawkh' }],
  creator: 'Sai Ruthvik Bommakanti',
  publisher: 'Sai Ruthvik Bommakanti',
  category: 'Technology',
  classification: 'Portfolio Website',
  openGraph: {
    title: 'Sai Ruthvik Bommakanti - Machine Learning Engineer Portfolio',
    description: 'Machine Learning Engineer and Data Science student specializing in AI, Computer Vision, and Deep Learning. Experienced in PyTorch, NLP, and IoT-enabled predictive analytics.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sai Ruthvik Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sai Ruthvik Bommakanti - Machine Learning Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Ruthvik Bommakanti - Machine Learning Engineer Portfolio',
    description: 'Machine Learning Engineer and Data Science student specializing in AI, Computer Vision, and Deep Learning.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.SITE_URL || 'https://hawkh.github.io/portfolio',
  },
  // Additional metadata for GitHub Pages
  other: {
    'github-repo': process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '',
    'theme-color': '#3B82F6',
    'color-scheme': 'dark light',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-gray-100`}>
        <BasePathProvider>
          <StructuredData />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BasePathProvider>
      </body>
    </html>
  )
}