'use client'

import { useBasePath } from './BasePathProvider'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

export default function OptimizedImage({ src, ...props }: OptimizedImageProps) {
  const { getPath } = useBasePath()
  
  // Only apply base path to relative URLs
  const imageSrc = src.startsWith('http') ? src : getPath(src)
  
  return <Image src={imageSrc} {...props} />
}