import { useEffect } from 'react';

interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
}

export function useWebVitals() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamic import to avoid SSR issues
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      const reportMetric = (metric: WebVitalsMetric) => {
        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`${metric.name}:`, metric.value);
        }

        // Send to analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          });
        }

        // Send to performance monitoring service (if configured)
        if (typeof window.performance !== 'undefined' && window.performance.mark) {
          window.performance.mark(`${metric.name}:${metric.value}`);
        }
      };

      // Measure all Web Vitals
      getCLS(reportMetric);
      getFID(reportMetric);
      getFCP(reportMetric);
      getLCP(reportMetric);
      getTTFB(reportMetric);
    }).catch(error => {
      console.warn('Failed to load web-vitals:', error);
    });
  }, []);
}

// Custom hook for performance monitoring
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              console.warn('Long task detected:', entry.duration);
              
              // Report to analytics
              if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'long_task', {
                  event_category: 'Performance',
                  value: Math.round(entry.duration),
                  non_interaction: true,
                });
              }
            }
          }
        });

        longTaskObserver.observe({ entryTypes: ['longtask'] });

        // Monitor layout shifts
        const layoutShiftObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if ((entry as any).hadRecentInput) continue;
            
            const value = (entry as any).value;
            if (value > 0.1) {
              console.warn('Large layout shift detected:', value);
              
              if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'layout_shift', {
                  event_category: 'Performance',
                  value: Math.round(value * 1000),
                  non_interaction: true,
                });
              }
            }
          }
        });

        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });

        return () => {
          longTaskObserver.disconnect();
          layoutShiftObserver.disconnect();
        };
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, []);
}

// Hook for monitoring resource loading
export function useResourceMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleLoad = () => {
      // Monitor resource loading performance
      if (window.performance && window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType('resource');
        
        resources.forEach((resource: any) => {
          // Report slow resources
          if (resource.duration > 1000) {
            console.warn('Slow resource:', resource.name, resource.duration);
            
            if (typeof window.gtag !== 'undefined') {
              window.gtag('event', 'slow_resource', {
                event_category: 'Performance',
                event_label: resource.name,
                value: Math.round(resource.duration),
                non_interaction: true,
              });
            }
          }
        });
      }
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);
}