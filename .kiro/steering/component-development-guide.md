# Component Development Guide

## Component Creation Standards

### File Structure
- Create components in `src/components/` directory
- Use PascalCase for component names (e.g., `ProjectCard.tsx`)
- One component per file
- Export as default function

### Component Template
```tsx
'use client'

import { motion } from 'framer-motion'
import { IconName } from '@heroicons/react/24/outline'

interface ComponentNameProps {
  // Define props interface if needed
}

export default function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="component-specific-classes"
    >
      {/* Component JSX */}
    </motion.div>
  )
}
```

## Animation Patterns

### Standard Animations
1. **Fade In**: `initial={{ opacity: 0 }}` → `animate={{ opacity: 1 }}`
2. **Slide Up**: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
3. **Slide In**: `initial={{ opacity: 0, x: -20 }}` → `animate={{ opacity: 1, x: 0 }}`
4. **Scale**: `initial={{ opacity: 0, scale: 0.8 }}` → `animate={{ opacity: 1, scale: 1 }}`

### Scroll Animations
- Use `whileInView` for scroll-triggered animations
- Always include `viewport={{ once: true }}` to prevent re-triggering
- Add delays for staggered effects: `delay: index * 0.1`

### Hover Effects
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ duration: 0.2 }}
  className="cursor-pointer"
>
```

## Styling Guidelines

### Tailwind Class Organization
1. **Layout**: `flex`, `grid`, `relative`, `absolute`
2. **Sizing**: `w-full`, `h-48`, `max-w-7xl`
3. **Spacing**: `p-6`, `m-4`, `gap-4`, `space-y-4`
4. **Colors**: `bg-primary`, `text-gray-600`, `border-gray-300`
5. **Typography**: `text-xl`, `font-bold`, `leading-6`
6. **Effects**: `shadow-lg`, `rounded-lg`, `transition-all`
7. **Responsive**: `md:grid-cols-2`, `lg:text-6xl`
8. **States**: `hover:text-primary`, `focus:ring-2`

### Card Components
```tsx
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6">
  {/* Card content */}
</div>
```

### Button Components
```tsx
<button className="btn btn-primary">
  Button Text
</button>

// Or custom button
<button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors duration-200">
  Custom Button
</button>
```

## Data Handling

### Static Data Arrays
```tsx
const items = [
  {
    id: 1,
    title: "Item Title",
    description: "Item description",
    // other properties
  },
  // more items
];
```

### Mapping Over Data
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id || index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    {/* Item content */}
  </motion.div>
))}
```

## Icon Usage

### Heroicons Integration
```tsx
import { 
  IconName1, 
  IconName2 
} from '@heroicons/react/24/outline'

// Usage
<IconName1 className="h-6 w-6 text-primary" />
```

### Icon with Animation
```tsx
<motion.div
  whileHover={{ rotate: 12 }}
  transition={{ duration: 0.2 }}
>
  <IconName className="h-5 w-5" />
</motion.div>
```

## Responsive Design

### Breakpoint Strategy
- Mobile first approach
- Use `md:` for tablet (768px+)
- Use `lg:` for desktop (1024px+)
- Use `xl:` for large screens (1280px+)

### Grid Layouts
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>
```

### Typography Scaling
```tsx
<h1 className="text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

## Accessibility

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Use semantic elements (`section`, `article`, `nav`)
- Include `alt` attributes for images
- Use `aria-label` for icon buttons

### Keyboard Navigation
```tsx
<button
  className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
  aria-label="Descriptive button label"
>
```

### Screen Reader Support
```tsx
<span className="sr-only">Screen reader only text</span>
```

## Performance Optimization

### Image Optimization
```tsx
<img 
  src={imageSrc}
  alt="Descriptive alt text"
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### Animation Performance
- Use `transform` properties for animations (scale, translate, rotate)
- Avoid animating layout properties (width, height, padding)
- Use `will-change` sparingly and remove after animation

## Error Handling

### Safe Rendering
```tsx
{items?.length > 0 && (
  <div>
    {items.map(item => (
      <div key={item.id}>
        {item.title || 'Untitled'}
      </div>
    ))}
  </div>
)}
```

### Fallback Content
```tsx
{loading ? (
  <div className="animate-pulse">Loading...</div>
) : error ? (
  <div className="text-red-500">Error loading content</div>
) : (
  <div>{content}</div>
)}
```

## Testing Considerations

### Component Testing
- Test component rendering
- Test user interactions
- Test responsive behavior
- Test accessibility features
- Test animation states

### Visual Testing
- Test across different screen sizes
- Test dark/light mode variations
- Test hover and focus states
- Test loading states