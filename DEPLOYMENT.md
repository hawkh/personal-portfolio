# Deployment Guide

## GitHub Pages Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://[username].github.io/[repository-name]`

### Manual Deployment

If you need to deploy manually:

```bash
# Build for production
npm run deploy:github

# The built files will be in the 'out' directory
# Upload the contents of 'out' to your GitHub Pages branch
```

### Local Testing

To test the production build locally:

```bash
# Build and serve locally
npm run preview

# This will build the site and serve it at http://localhost:3001
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:github` - Build specifically for GitHub Pages
- `npm run deploy` - Build and prepare for deployment
- `npm run preview` - Build and serve locally for testing
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build directories

### Configuration

The deployment configuration is handled in:

- `next.config.js` - Next.js configuration for static export
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `package.json` - Build scripts and dependencies

### Troubleshooting

If deployment fails:

1. Check the GitHub Actions logs in the repository's Actions tab
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the source is set to "GitHub Actions" in Pages settings
4. Check that all dependencies are properly installed

### Environment Variables

The build process uses these environment variables:

- `GITHUB_REPOSITORY` - Automatically set by GitHub Actions
- `NODE_ENV` - Set to 'production' for production builds

### Asset Handling

- All static assets should be placed in the `public/` directory
- Images are optimized for static export
- The `.nojekyll` file prevents Jekyll processing
- Custom 404 handling is configured for client-side routing