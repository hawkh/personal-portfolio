# Deployment Validation Guide

This guide helps you validate that your portfolio is properly configured and deployed.

## Pre-Deployment Validation

### 1. Run Automated Tests

```bash
# Run comprehensive deployment tests
npm run test:deployment

# Run configuration verification
npm run verify

# Check code quality
npm run check
```

### 2. Manual Configuration Check

- [ ] **Next.js Configuration**
  - [ ] `output: 'export'` is set in `next.config.js`
  - [ ] Image optimization is disabled (`unoptimized: true`)
  - [ ] Base path and asset prefix are configured for GitHub Pages

- [ ] **GitHub Actions Workflow**
  - [ ] `.github/workflows/deploy.yml` exists
  - [ ] Workflow includes all required steps
  - [ ] Permissions are properly configured

- [ ] **Static Files**
  - [ ] `.nojekyll` file exists in `public/`
  - [ ] `404.html` exists for client-side routing
  - [ ] Resume PDF file is present in `public/`

- [ ] **Asset Path Handling**
  - [ ] `src/utils/paths.ts` utility exists
  - [ ] Components use asset path utility for local resources
  - [ ] BasePathProvider is configured

## Local Testing

### 1. Build Test

```bash
# Clean previous builds
npm run clean

# Test production build
npm run build:production

# Verify output directory
ls -la out/
```

### 2. Local Preview

```bash
# Build and serve locally
npm run preview

# Visit http://localhost:3001 to test
```

### 3. Functionality Testing

Test these features locally:

- [ ] **Navigation**
  - [ ] All section links work (About, Experience, Projects, Skills, Contact)
  - [ ] Smooth scrolling to sections
  - [ ] Mobile menu functionality

- [ ] **Resume Download**
  - [ ] Resume link opens/downloads PDF correctly
  - [ ] PDF file is accessible

- [ ] **Responsive Design**
  - [ ] Mobile layout works properly
  - [ ] Tablet layout is functional
  - [ ] Desktop layout displays correctly

- [ ] **Animations**
  - [ ] Framer Motion animations work
  - [ ] Typewriter effect functions
  - [ ] Hover effects are responsive

- [ ] **Dark Mode**
  - [ ] Dark theme is applied correctly
  - [ ] All text is readable
  - [ ] Colors have proper contrast

## Post-Deployment Validation

### 1. Site Accessibility

After deployment, verify your site is accessible:

- [ ] Site loads at GitHub Pages URL
- [ ] All pages render without errors
- [ ] No console errors in browser developer tools

### 2. SEO Validation

- [ ] **Meta Tags**
  - [ ] Title tag is present and descriptive
  - [ ] Meta description is compelling
  - [ ] Open Graph tags are configured
  - [ ] Twitter Card tags are set

- [ ] **Structured Data**
  - [ ] Person schema is present
  - [ ] Website schema is configured
  - [ ] Professional service schema is included

- [ ] **Search Engine Files**
  - [ ] `sitemap.xml` is accessible
  - [ ] `robots.txt` is properly configured
  - [ ] Favicon is displayed

### 3. Performance Testing

Use these tools to test performance:

- [ ] **Google PageSpeed Insights**
  - [ ] Mobile score > 90
  - [ ] Desktop score > 95
  - [ ] Core Web Vitals are good

- [ ] **Lighthouse Audit**
  - [ ] Performance score > 90
  - [ ] Accessibility score > 95
  - [ ] Best Practices score > 90
  - [ ] SEO score > 95

### 4. Cross-Browser Testing

Test in multiple browsers:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (if available)
- [ ] Edge (latest)

### 5. Mobile Testing

Test on different devices:

- [ ] iPhone (various sizes)
- [ ] Android phones
- [ ] Tablets
- [ ] Different screen orientations

## Troubleshooting Common Issues

### Build Failures

1. **TypeScript Errors**
   ```bash
   npm run type-check
   ```
   Fix any type errors before deployment.

2. **Linting Errors**
   ```bash
   npm run lint:fix
   ```
   Auto-fix linting issues where possible.

3. **Missing Dependencies**
   ```bash
   npm ci
   ```
   Ensure all dependencies are installed.

### Asset Loading Issues

1. **Images Not Loading**
   - Check if images use absolute URLs or proper asset path utility
   - Verify base path configuration in `next.config.js`

2. **Resume Not Downloading**
   - Ensure PDF file exists in `public/` directory
   - Check that Navbar uses `getAssetPath` utility

3. **CSS Not Applied**
   - Verify Tailwind CSS is properly configured
   - Check that global styles are imported

### Routing Issues

1. **404 Errors on Refresh**
   - Ensure `404.html` exists in `public/`
   - Verify client-side routing configuration

2. **Base Path Issues**
   - Check `next.config.js` base path configuration
   - Verify environment variables are set correctly

## Performance Optimization

### 1. Image Optimization

- [ ] Use optimized image formats (WebP when possible)
- [ ] Implement lazy loading for images
- [ ] Use appropriate image sizes

### 2. Code Optimization

- [ ] Remove unused dependencies
- [ ] Minimize bundle size
- [ ] Use code splitting where appropriate

### 3. Caching Strategy

- [ ] Leverage browser caching
- [ ] Use CDN for static assets
- [ ] Implement service worker (optional)

## Security Checklist

- [ ] **HTTPS Enforcement**
  - [ ] Site loads over HTTPS
  - [ ] Mixed content warnings are resolved

- [ ] **Content Security**
  - [ ] No sensitive information in code
  - [ ] External links use proper rel attributes
  - [ ] Form inputs are validated

- [ ] **Dependencies**
  - [ ] All dependencies are up to date
  - [ ] No known security vulnerabilities

## Final Deployment Checklist

Before going live:

- [ ] All tests pass locally
- [ ] Code is pushed to main branch
- [ ] GitHub Pages is configured
- [ ] GitHub Actions workflow completes successfully
- [ ] Site is accessible at GitHub Pages URL
- [ ] All functionality works as expected
- [ ] Performance metrics meet targets
- [ ] SEO optimization is complete

## Monitoring and Maintenance

After deployment:

- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Monitor site uptime
- [ ] Regularly update dependencies
- [ ] Keep content fresh and updated
- [ ] Monitor performance metrics

---

**Need Help?** 

- Check the GitHub Actions logs for deployment issues
- Review browser console for client-side errors
- Use the automated testing scripts for quick validation
- Refer to the detailed setup guides in the repository