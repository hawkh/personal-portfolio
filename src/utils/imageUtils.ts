// Image optimization utilities

export interface ImageSizes {
  mobile: number;
  tablet: number;
  desktop: number;
}

export const defaultImageSizes: ImageSizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1200
};

/**
 * Generate responsive image srcSet for different screen sizes
 */
export function generateSrcSet(
  basePath: string, 
  sizes: ImageSizes = defaultImageSizes,
  formats: string[] = ['webp', 'jpg']
): string {
  const srcSets: string[] = [];
  
  Object.entries(sizes).forEach(([breakpoint, width]) => {
    formats.forEach(format => {
      const extension = basePath.split('.').pop();
      const path = basePath.replace(`.${extension}`, `.${format}`);
      srcSets.push(`${path}?w=${width} ${width}w`);
    });
  });
  
  return srcSets.join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(
  sizes: ImageSizes = defaultImageSizes
): string {
  return `(max-width: 768px) ${sizes.mobile}px, (max-width: 1200px) ${sizes.tablet}px, ${sizes.desktop}px`;
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, priority: boolean = false): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = priority ? 'preload' : 'prefetch';
  link.as = 'image';
  link.href = src;
  
  document.head.appendChild(link);
}

/**
 * Convert image to WebP format (client-side)
 */
export function convertToWebP(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      ctx?.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to convert image'));
        }
      }, 'image/webp', 0.8);
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

/**
 * Get optimal image format based on browser support
 */
export function getOptimalFormat(): 'avif' | 'webp' | 'jpg' {
  if (typeof window === 'undefined') return 'jpg';
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  // Check AVIF support
  if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
    return 'avif';
  }
  
  // Check WebP support
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    return 'webp';
  }
  
  return 'jpg';
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages(selector: string = 'img[data-src]'): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }
  
  const images = document.querySelectorAll(selector);
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  images.forEach(img => imageObserver.observe(img));
}