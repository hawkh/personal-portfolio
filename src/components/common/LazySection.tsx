'use client'

import React, { Suspense } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6"></div>
    </div>
  </div>
);

export default function LazySection({
  children,
  fallback = <LoadingSkeleton />,
  rootMargin = '100px',
  threshold = 0.1,
  className = ''
}: LazySectionProps) {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce: true
  });

  return (
    <div ref={targetRef} className={className}>
      {hasIntersected ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        <div style={{ minHeight: '200px' }}>
          {fallback}
        </div>
      )}
    </div>
  );
}