'use client'

import { useState, useCallback, ReactNode } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

interface RetryWrapperProps {
  children: ReactNode;
  onRetry: () => Promise<void> | void;
  maxRetries?: number;
  retryDelay?: number;
  fallback?: ReactNode;
  className?: string;
}

export default function RetryWrapper({
  children,
  onRetry,
  maxRetries = 3,
  retryDelay = 1000,
  fallback,
  className = ''
}: RetryWrapperProps) {
  const [isRetrying, setIsRetrying] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleRetry = useCallback(async () => {
    if (retryCount >= maxRetries) return;

    setIsRetrying(true);
    setHasError(false);

    try {
      // Add delay before retry
      if (retryDelay > 0) {
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }

      await onRetry();
      setRetryCount(0);
    } catch (error) {
      console.error('Retry failed:', error);
      setRetryCount(prev => prev + 1);
      setHasError(true);
    } finally {
      setIsRetrying(false);
    }
  }, [onRetry, retryCount, maxRetries, retryDelay]);

  if (isRetrying) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`flex flex-col items-center justify-center p-8 ${className}`}
      >
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Retrying... ({retryCount + 1}/{maxRetries})
        </p>
      </motion.div>
    );
  }

  if (hasError && retryCount >= maxRetries) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <div className="text-4xl mb-4">😞</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Unable to load content
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
          We've tried {maxRetries} times but couldn't load this content. Please check your connection and try again.
        </p>
        <button
          onClick={() => {
            setRetryCount(0);
            setHasError(false);
            handleRetry();
          }}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  return <>{children}</>;
}