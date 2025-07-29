// Testing utilities for React components

import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MotionConfig } from 'framer-motion';

// Mock IntersectionObserver for tests
export const mockIntersectionObserver = () => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
  window.IntersectionObserverEntry = jest.fn();
};

// Mock ResizeObserver for tests
export const mockResizeObserver = () => {
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
};

// Mock matchMedia for responsive tests
export const mockMatchMedia = (matches: boolean = false) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

// Mock window.gtag for analytics tests
export const mockGtag = () => {
  window.gtag = jest.fn();
};

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionConfig reducedMotion="always">
      {children}
    </MotionConfig>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

// Test data factories
export const createMockProject = (overrides = {}) => ({
  id: 'test-project',
  title: 'Test Project',
  description: 'A test project description',
  longDescription: 'A longer test project description',
  technologies: ['React', 'TypeScript'],
  images: ['/test-image.jpg'],
  githubUrl: 'https://github.com/test/project',
  liveUrl: 'https://test-project.com',
  metrics: [
    { label: 'Accuracy', value: '95%', improvement: '10% improvement' }
  ],
  featured: false,
  ...overrides
});

export const createMockExperience = (overrides = {}) => ({
  id: 'test-experience',
  title: 'Test Position',
  company: 'Test Company',
  duration: 'Jan 2024 - Present',
  description: 'Test job description',
  achievements: ['Test achievement 1', 'Test achievement 2'],
  technologies: ['React', 'Node.js'],
  metrics: [
    { label: 'Performance', value: '100%', description: 'Test metric' }
  ],
  ...overrides
});

export const createMockSkillCategory = (overrides = {}) => ({
  name: 'Test Skills',
  icon: 'CommandLineIcon',
  color: '#3B82F6',
  skills: [
    { name: 'Test Skill', proficiency: 90, yearsOfExperience: 2, projects: [] }
  ],
  ...overrides
});

// Utility functions for testing
export const waitForAnimation = () => new Promise(resolve => setTimeout(resolve, 100));

export const triggerIntersectionObserver = (element: Element, isIntersecting: boolean = true) => {
  const mockEntry = {
    target: element,
    isIntersecting,
    intersectionRatio: isIntersecting ? 1 : 0,
    boundingClientRect: element.getBoundingClientRect(),
    intersectionRect: isIntersecting ? element.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0 },
    rootBounds: { width: 1024, height: 768, top: 0, left: 0, bottom: 768, right: 1024 },
    time: Date.now()
  };

  // Trigger all intersection observers
  const observers = (window as any).__intersectionObservers || [];
  observers.forEach((observer: any) => {
    if (observer.callback) {
      observer.callback([mockEntry]);
    }
  });
};