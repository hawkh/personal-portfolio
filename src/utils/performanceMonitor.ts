// Performance monitoring utilities

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

/**
 * Measure Core Web Vitals
 */
export function measureWebVitals(): Promise<PerformanceMetrics> {
  return new Promise((resolve) => {
    const metrics: Partial<PerformanceMetrics> = {};
    
    // Measure LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      metrics.lcp = lastEntry.startTime;
      
      if (Object.keys(metrics).length === 5) {
        resolve(metrics as PerformanceMetrics);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Measure FID
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metrics.fid = entry.processingStart - entry.startTime;
      });
      
      if (Object.keys(metrics).length === 5) {
        resolve(metrics as PerformanceMetrics);
      }
    }).observe({ entryTypes: ['first-input'] });
    
    // Measure CLS
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.cls = clsValue;
      
      if (Object.keys(metrics).length === 5) {
        resolve(metrics as PerformanceMetrics);
      }
    }).observe({ entryTypes: ['layout-shift'] });
    
    // Measure FCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
        }
      });
      
      if (Object.keys(metrics).length === 5) {
        resolve(metrics as PerformanceMetrics);
      }
    }).observe({ entryTypes: ['paint'] });
    
    // Measure TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      
      if (Object.keys(metrics).length === 5) {
        resolve(metrics as PerformanceMetrics);
      }
    }
  });
}

/**
 * Monitor resource loading performance
 */
export function monitorResourcePerformance(): void {
  new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const resource = entry as PerformanceResourceTiming;
      
      // Log slow resources (>1s)
      if (resource.duration > 1000) {
        console.warn(`Slow resource detected: ${resource.name} took ${resource.duration}ms`);
      }
      
      // Track resource types
      if (resource.initiatorType === 'img' && resource.duration > 500) {
        console.warn(`Slow image loading: ${resource.name}`);
      }
    });
  }).observe({ entryTypes: ['resource'] });
}

/**
 * Measure JavaScript execution time
 */
export function measureJSPerformance(label: string, fn: () => void): number {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  console.log(`${label} took ${duration}ms`);
  return duration;
}

/**
 * Check if device has good performance characteristics
 */
export function getDevicePerformanceLevel(): 'high' | 'medium' | 'low' {
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 1;
  
  // Check memory (if available)
  const memory = (navigator as any).deviceMemory || 1;
  
  // Check connection speed
  const connection = (navigator as any).connection;
  const effectiveType = connection?.effectiveType || '4g';
  
  if (cores >= 8 && memory >= 8 && effectiveType === '4g') {
    return 'high';
  } else if (cores >= 4 && memory >= 4) {
    return 'medium';
  } else {
    return 'low';
  }
}

/**
 * Optimize animations based on device performance
 */
export function shouldReduceAnimations(): boolean {
  // Check user preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true;
  }
  
  // Check device performance
  const performanceLevel = getDevicePerformanceLevel();
  return performanceLevel === 'low';
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources(): void {
  const criticalResources = [
    '/fonts/inter-var.woff2',
    '/images/hero-bg.webp'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    
    if (resource.includes('.woff2')) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (resource.includes('.webp') || resource.includes('.jpg')) {
      link.as = 'image';
    }
    
    document.head.appendChild(link);
  });
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') return;
  
  // Monitor resources
  monitorResourcePerformance();
  
  // Preload critical resources
  preloadCriticalResources();
  
  // Measure web vitals after page load
  window.addEventListener('load', async () => {
    try {
      const metrics = await measureWebVitals();
      
      // Send to analytics if available
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          fcp: metrics.fcp,
          ttfb: metrics.ttfb
        });
      }
      
      console.log('Web Vitals:', metrics);
    } catch (error) {
      console.error('Failed to measure web vitals:', error);
    }
  });
}