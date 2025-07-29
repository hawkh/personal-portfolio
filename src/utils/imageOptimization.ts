// Image optimization utilities

export interface ImageSizes {
  mobile: number;
  tablet: number;
  desktop: number;
  xl: number;
}

export const defaultImageSizes: ImageSizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  xl: 1440
};

// Generate responsive image srcset
export function generateSrcSet(basePath: string, sizes: ImageSizes = defaultImageSizes): string {
  const extensions = ['avif', 'webp', 'jpg'];
  const srcSets: string[] = [];

  Object.entries(sizes).forEach(([breakpoint, width]) => {
    extensions.forEach(ext => {
      const path = basePath.replace(/\.[^/.]+$/, `-${width}w.${ext}`);
      srcSets.push(`${path} ${width}w`);
    });
  });

  return srcSets.join(', ');
}

// Generate picture element sources
export function generatePictureSources(basePath: string, sizes: ImageSizes = defaultImageSizes) {
  const sources = [];

  // AVIF sources
  sources.push({
    srcSet: Object.entries(sizes)
      .map(([_, width]) => `${basePath.replace(/\.[^/.]+$/, `-${width}w.avif`)} ${width}w`)
      .join(', '),
    type: 'image/avif'
  });

  // WebP sources
  sources.push({
    srcSet: Object.entries(sizes)
      .map(([_, width]) => `${basePath.replace(/\.[^/.]+$/, `-${width}w.webp`)} ${width}w`)
      .join(', '),
    type: 'image/webp'
  });

  return sources;
}

// Get optimal image format based on browser support
export async function getOptimalImageFormat(): Promise<'avif' | 'webp' | 'jpg'> {
  if (typeof window === 'undefined') return 'jpg';

  // Check AVIF support
  try {
    const avifSupported = await new Promise<boolean>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img.width === 2);
      img.onerror = () => resolve(false);
      img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });

    if (avifSupported) return 'avif';
  } catch (error) {
    console.warn('AVIF support check failed:', error);
  }

  // Check WebP support
  try {
    const webpSupported = await new Promise<boolean>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img.width === 2);
      img.onerror = () => resolve(false);
      img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });

    if (webpSupported) return 'webp';
  } catch (error) {
    console.warn('WebP support check failed:', error);
  }

  return 'jpg';
}

// Preload critical images
export function preloadImage(src: string, priority: 'high' | 'low' = 'low') {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = priority;
  
  document.head.appendChild(link);
}

// Lazy load images with intersection observer
export function createImageObserver(callback: (entries: IntersectionObserverEntry[]) => void) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
}

// Calculate image dimensions for layout shift prevention
export function calculateAspectRatio(width: number, height: number): string {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const divisor = gcd(width, height);
  return `${width / divisor}/${height / divisor}`;
}

// Generate blur placeholder
export function generateBlurPlaceholder(width: number, height: number, color: string = '#e5e7eb'): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

// Image compression utility (client-side)
export function compressImage(file: File, quality: number = 0.8, maxWidth: number = 1920): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Calculate new dimensions
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;

      // Draw and compress
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(resolve, 'image/jpeg', quality);
    };

    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}