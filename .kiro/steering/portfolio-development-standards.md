# Portfolio Development Standards

## Project Overview
This is a personal portfolio website for Sai Ruthvik, a Machine Learning Engineer and Data Science student. The portfolio showcases projects, experience, and skills in AI/ML, Computer Vision, and Data Science.

## Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite (with some Next.js configurations present)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Special Libraries**: Typewriter Effect for text animations

## Architecture Patterns

### Component Structure
- Components are organized in `src/components/` directory
- Each component is a separate `.tsx` file with descriptive names
- Components use functional components with hooks
- All components use TypeScript with proper type definitions

### Styling Approach
- Tailwind CSS utility-first approach
- Custom color palette defined in `tailwind.config.js`:
  - Primary: `#3B82F6` (blue)
  - Secondary: `#1E40AF` (darker blue)
  - Dark: `#111827` (dark gray)
- Dark mode support with `class` strategy
- Custom CSS classes in `globals.css` for reusable patterns
- Responsive design with mobile-first approach

### Animation Standards
- Framer Motion for all animations
- Consistent animation patterns:
  - `initial={{ opacity: 0 }}` for fade-ins
  - `whileInView` for scroll-triggered animations
  - `viewport={{ once: true }}` to prevent re-triggering
  - Staggered animations with delay multipliers (e.g., `delay: index * 0.1`)
- Hover effects with `whileHover` and CSS transitions

## Code Standards

### TypeScript Usage
- Strict TypeScript configuration enabled
- All components properly typed
- Props interfaces defined when needed
- No `any` types - use proper type definitions

### Component Patterns
```tsx
'use client' // For client-side components

import { motion } from 'framer-motion'
import { IconName } from '@heroicons/react/24/outline'

export default function ComponentName() {
  return (
    <section className="section-container" id="section-id">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Component content */}
      </motion.div>
    </section>
  )
}
```

### CSS Class Conventions
- Use Tailwind utility classes primarily
- Custom component classes defined in `@layer components`
- Consistent spacing with `section-container` class
- Hover states with smooth transitions
- Responsive breakpoints: `md:`, `lg:` prefixes

### Data Patterns
- Static data arrays defined within components
- Consistent object structures for similar data types
- External links with proper `target="_blank"` and `rel="noopener noreferrer"`

## Design System

### Colors
- Primary actions and highlights: `text-primary`, `bg-primary`
- Secondary elements: `text-secondary`, `bg-secondary`
- Text hierarchy: `text-gray-900` (dark), `text-gray-600` (medium), `text-gray-400` (light)
- Dark mode variants: `dark:text-gray-100`, `dark:bg-gray-800`

### Typography
- Headings: `text-3xl font-bold` for section titles
- Subheadings: `text-xl font-semibold`
- Body text: Default with appropriate gray shades
- Gradient text: `bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`

### Spacing
- Section padding: `py-16` (or use `section-container` class)
- Container margins: `max-w-7xl mx-auto px-4`
- Element spacing: `space-y-4`, `space-y-6`, `gap-4`, `gap-8`

### Interactive Elements
- Buttons: Use `btn` and `btn-primary` classes
- Hover effects: `hover:scale-110`, `hover:text-primary`
- Transitions: `transition-all duration-300`
- Cards: `shadow-lg hover:shadow-2xl` with `hover:-translate-y-2`

## Performance Guidelines
- Use `viewport={{ once: true }}` for animations to prevent re-triggering
- Optimize images with proper sizing and formats
- Lazy load components when appropriate
- Minimize bundle size by importing only needed icons/components

## Accessibility Standards
- Proper semantic HTML structure
- Alt text for images
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly content
- Focus states for interactive elements

## File Organization
```
src/
├── components/          # Reusable UI components
├── app/                # Next.js app directory (if using)
├── index.css           # Tailwind imports
└── main.tsx           # Application entry point
```

## Development Workflow
- Use TypeScript strict mode
- Follow component-based architecture
- Implement responsive design from mobile-first
- Test animations and interactions across devices
- Maintain consistent code formatting
- Use meaningful commit messages

## Content Guidelines
- Professional tone for portfolio content
- Technical accuracy in project descriptions
- Consistent formatting for experience and skills
- Up-to-date contact information and social links
- Proper attribution for external resources