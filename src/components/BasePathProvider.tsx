'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface BasePathContextType {
  basePath: string
  getPath: (path: string) => string
}

const BasePathContext = createContext<BasePathContextType>({
  basePath: '',
  getPath: (path) => path,
})

export const useBasePath = () => useContext(BasePathContext)

interface BasePathProviderProps {
  children: React.ReactNode
}

export default function BasePathProvider({ children }: BasePathProviderProps) {
  const [basePath, setBasePath] = useState('')

  useEffect(() => {
    // Determine base path from window location in browser
    // This handles GitHub Pages deployment with repository name in path
    const path = window.location.pathname
    const segments = path.split('/')
    
    // If we have a path segment that's not empty and not a route
    // (like 'portfolio' in 'username.github.io/portfolio/'), use it as base path
    if (segments.length > 1 && segments[1] !== '') {
      setBasePath(`/${segments[1]}`)
    }
  }, [])

  const getPath = (path: string): string => {
    // If path already starts with basePath or is a full URL, return as is
    if (path.startsWith(basePath) || path.startsWith('http') || path.startsWith('#')) {
      return path
    }
    
    // Otherwise, prepend basePath
    return `${basePath}${path}`
  }

  return (
    <BasePathContext.Provider value={{ basePath, getPath }}>
      {children}
    </BasePathContext.Provider>
  )
}