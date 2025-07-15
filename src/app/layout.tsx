import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sai Ruthvik Bommakanti - Portfolio',
  description: 'Machine Learning Engineer and Data Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-gray-100`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}