import { useCallback } from 'react';

interface ErrorHandlerOptions {
  showNotification?: boolean;
  logToConsole?: boolean;
  sendToAnalytics?: boolean;
}

export function useErrorHandler(options: ErrorHandlerOptions = {}) {
  const {
    showNotification = true,
    logToConsole = true,
    sendToAnalytics = true
  } = options;

  const handleError = useCallback((error: Error, context?: string) => {
    // Log to console
    if (logToConsole) {
      console.error(`Error${context ? ` in ${context}` : ''}:`, error);
    }

    // Send to analytics
    if (sendToAnalytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: `${context ? `${context}: ` : ''}${error.message}`,
        fatal: false,
      });
    }

    // Show user notification
    if (showNotification) {
      // You could integrate with a toast library here
      console.warn('Error notification:', error.message);
    }
  }, [showNotification, logToConsole, sendToAnalytics]);

  const handleAsyncError = useCallback(async <T>(
    asyncFn: () => Promise<T>,
    context?: string,
    fallback?: T
  ): Promise<T | undefined> => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error as Error, context);
      return fallback;
    }
  }, [handleError]);

  return { handleError, handleAsyncError };
}

// Global error handler for unhandled promise rejections
export function setupGlobalErrorHandlers() {
  if (typeof window === 'undefined') return;

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'exception', {
        description: `Unhandled promise rejection: ${event.reason}`,
        fatal: false,
      });
    }
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'exception', {
        description: `Global error: ${event.error?.message || event.message}`,
        fatal: false,
      });
    }
  });
}