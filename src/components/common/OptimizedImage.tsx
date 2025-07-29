'use client'

import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generate WebP and AVIF sources
  const getOptimizedSrc = (format: 'webp' | 'avif' | 'original') => {
    if (src.startsWith('http') || src.startsWith('data:')) {
      return src; // External URLs or data URLs
    }
    
    const extension = src.split('.').pop();
    const basePath = src.replace(`.${extension}`, '');
    
    switch (format) {
      case 'webp':
        return `${basePath}.webp`;
      case 'avif':
        return `${basePath}.avif`;
      default:
        return src;
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageStyle = {
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  };

  const placeholderStyle = {
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '200px',
    opacity: isLoaded ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out'
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={placeholderStyle}
        />
      )}

      {/* Optimized Image */}
      {isInView && !hasError && (
        <picture>
          <source srcSet={getOptimizedSrc('avif')} type="image/avif" />
          <source srcSet={getOptimizedSrc('webp')} type="image/webp" />
          <img
            src={getOptimizedSrc('original')}
            alt={alt}
            style={imageStyle}
            className={`w-full h-full object-cover ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}

      {/* Error fallback */}
      {hasError && (
        <div
          className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
          style={{ width: width || '100%', height: height || '200px' }}
        >
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
}