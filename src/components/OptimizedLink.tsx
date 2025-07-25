'use client'

import { useBasePath } from './BasePathProvider'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface OptimizedLinkProps extends Omit<LinkProps, 'href'> {
  href: string
  children: ReactNode
  className?: string
}

export default function OptimizedLink({ href, children, className, ...props }: OptimizedLinkProps) {
  const { getPath } = useBasePath()
  
  // Only apply base path to non-anchor and non-external links
  const linkHref = href.startsWith('#') || href.startsWith('http') ? href : getPath(href)
  
  return (
    <Link href={linkHref} className={className} {...props}>
      {children}
    </Link>
  )
}