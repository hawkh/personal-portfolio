import '@testing-library/jest-dom';
import { mockIntersectionObserver, mockResizeObserver, mockMatchMedia, mockGtag } from './utils/testUtils';

// Mock global objects and APIs
beforeEach(() => {
  mockIntersectionObserver();
  mockResizeObserver();
  mockMatchMedia();
  mockGtag();
});

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  motion: {
    div: 'div',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
    a: 'a',
    button: 'button',
    img: 'img',
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  MotionConfig: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock typewriter-effect
jest.mock('typewriter-effect', () => {
  return function MockTypewriter() {
    return <span>Typewriter Effect</span>;
  };
});

// Mock next/head
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

// Mock next/script
jest.mock('next/script', () => {
  return function Script() {
    return null;
  };
});

// Global test utilities
global.console = {
  ...console,
  // Suppress console.warn and console.error in tests unless needed
  warn: jest.fn(),
  error: jest.fn(),
};