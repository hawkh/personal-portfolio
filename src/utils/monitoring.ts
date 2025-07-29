// Production monitoring utilities

export interface MonitoringConfig {
  analytics: {
    gaId?: string;
    enableWebVitals: boolean;
    enableErrorTracking: boolean;
  };
  performance: {
    budgets: {
      lcp: number; // ms
      fid: number; // ms
      cls: number; // score
    };
    alertThresholds: {
      errorRate: number; // percentage
      responseTime: number; // ms
    };
  };
  uptime: {
    checkInterval: number; // minutes
    alertEmail?: string;
  };
}

const defaultConfig: MonitoringConfig = {
  analytics: {
    enableWebVitals: true,
    enableErrorTracking: true
  },
  performance: {
    budgets: {
      lcp: 2500,
      fid: 100,
      cls: 0.1
    },
    alertThresholds: {
      errorRate: 5,
      responseTime: 3000
    }
  },
  uptime: {
    checkInterval: 5
  }
};

/**
 * Initialize production monitoring
 */
export function initMonitoring(config: Partial<MonitoringConfig> = {}): void {
  const finalConfig = { ...defaultConfig, ...config };
  
  if (typeof window === 'undefined') return;
  
  // Initialize error tracking
  if (finalConfig.analytics.enableErrorTracking) {
    initErrorTracking();
  }
  
  // Initialize performance monitoring
  initPerformanceMonitoring(finalConfig.performance);
  
  // Initialize analytics
  if (finalConfig.analytics.gaId) {
    initAnalytics(finalConfig.analytics.gaId);
  }
}

/**
 * Error tracking and reporting
 */
function initErrorTracking(): void {
  // Global error handler
  window.addEventListener('error', (event) => {
    const error = {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };
    
    reportError('javascript_error', error);
  });
  
  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    const error = {
      reason: event.reason,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };
    
    reportError('unhandled_promise_rejection', error);
  });
  
  // React error boundary integration
  (window as any).__PORTFOLIO_ERROR_HANDLER__ = (error: Error, errorInfo: any) => {
    reportError('react_error', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    });
  };
}

/**
 * Performance monitoring with budgets
 */
function initPerformanceMonitoring(config: MonitoringConfig['performance']): void {
  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    // LCP monitoring
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as any;
      const lcp = lastEntry.startTime;
      
      if (lcp > config.budgets.lcp) {
        reportPerformanceIssue('lcp_budget_exceeded', { value: lcp, budget: config.budgets.lcp });
      }
      
      trackMetric('lcp', lcp);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // FID monitoring
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        
        if (fid > config.budgets.fid) {
          reportPerformanceIssue('fid_budget_exceeded', { value: fid, budget: config.budgets.fid });
        }
        
        trackMetric('fid', fid);
      });
    }).observe({ entryTypes: ['first-input'] });
    
    // CLS monitoring
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      
      if (clsValue > config.budgets.cls) {
        reportPerformanceIssue('cls_budget_exceeded', { value: clsValue, budget: config.budgets.cls });
      }
      
      trackMetric('cls', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
  
  // Monitor resource loading
  new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      const resource = entry as PerformanceResourceTiming;
      
      if (resource.duration > config.alertThresholds.responseTime) {
        reportPerformanceIssue('slow_resource', {
          name: resource.name,
          duration: resource.duration,
          threshold: config.alertThresholds.responseTime
        });
      }
    });
  }).observe({ entryTypes: ['resource'] });
}

/**
 * Analytics initialization
 */
function initAnalytics(gaId: string): void {
  // Load Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
  
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).gtag = function() {
    (window as any).dataLayer.push(arguments);
  };
  
  (window as any).gtag('js', new Date());
  (window as any).gtag('config', gaId, {
    send_page_view: true,
    anonymize_ip: true
  });
}

/**
 * Report errors to monitoring service
 */
function reportError(type: string, error: any): void {
  // In production, send to your monitoring service
  console.error(`[${type}]`, error);
  
  // Send to analytics if available
  if (typeof gtag !== 'undefined') {
    gtag('event', 'exception', {
      description: error.message || type,
      fatal: false
    });
  }
  
  // You could also send to services like Sentry, LogRocket, etc.
  // Example: Sentry.captureException(error);
}

/**
 * Report performance issues
 */
function reportPerformanceIssue(type: string, data: any): void {
  console.warn(`[Performance Issue] ${type}:`, data);
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'performance_issue', {
      issue_type: type,
      value: data.value,
      budget: data.budget
    });
  }
}

/**
 * Track custom metrics
 */
function trackMetric(name: string, value: number): void {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'web_vitals', {
      metric_name: name,
      metric_value: value,
      custom_parameter: true
    });
  }
}

/**
 * Health check endpoint simulation
 */
export function performHealthCheck(): Promise<{ status: string; checks: any }> {
  return new Promise((resolve) => {
    const checks = {
      dom: document.readyState === 'complete',
      javascript: true,
      analytics: typeof gtag !== 'undefined',
      performance: 'PerformanceObserver' in window,
      storage: (() => {
        try {
          localStorage.setItem('test', 'test');
          localStorage.removeItem('test');
          return true;
        } catch {
          return false;
        }
      })()
    };
    
    const allPassed = Object.values(checks).every(check => check === true);
    
    resolve({
      status: allPassed ? 'healthy' : 'degraded',
      checks
    });
  });
}

/**
 * Generate monitoring report
 */
export async function generateMonitoringReport(): Promise<any> {
  const healthCheck = await performHealthCheck();
  
  const report = {
    timestamp: new Date().toISOString(),
    health: healthCheck,
    performance: {
      navigation: performance.getEntriesByType('navigation')[0],
      resources: performance.getEntriesByType('resource').length,
      memory: (performance as any).memory
    },
    environment: {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine
    }
  };
  
  return report;
}