# GitHub Pages Setup Guide

## Step-by-Step GitHub Pages Configuration

Follow these steps to configure GitHub Pages for your portfolio:

### 1. Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar

### 2. Configure Pages Source

1. In the **Pages** settings:
   - **Source**: Select "GitHub Actions"
   - This enables the workflow we created in `.github/workflows/deploy.yml`

### 3. Enable GitHub Pages

1. Once you select "GitHub Actions" as the source:
   - GitHub will automatically detect the workflow
   - The site will be built and deployed when you push to the main branch

### 4. Custom Domain (Optional)

If you want to use a custom domain:

1. In the **Pages** settings:
   - Enter your custom domain in the **Custom domain** field
   - Example: `yourname.com` or `portfolio.yourname.com`

2. Update the `next.config.js` file:
   ```javascript
   // Remove or comment out the basePath and assetPrefix for custom domains
   // basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
   // assetPrefix: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
   ```

### 5. HTTPS Configuration

1. GitHub Pages automatically provides HTTPS
2. Check **Enforce HTTPS** option (recommended)
3. This ensures all traffic is encrypted

### 6. Repository Permissions

Ensure your repository has the correct permissions:

1. Go to **Settings** > **Actions** > **General**
2. Under **Workflow permissions**:
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

### 7. Environment Setup (Optional)

For additional security, you can create a GitHub Pages environment:

1. Go to **Settings** > **Environments**
2. Click **New environment**
3. Name it `github-pages`
4. Add protection rules if needed (e.g., required reviewers)

## Verification Steps

After configuration, verify your setup:

### 1. Check Workflow Status

1. Go to **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow
3. Check that it runs successfully on push to main branch

### 2. Access Your Site

1. Your site will be available at:
   - **Default**: `https://[username].github.io/[repository-name]`
   - **Custom domain**: `https://[your-custom-domain]`

2. The URL will be shown in the **Pages** settings once deployed

### 3. Test Functionality

Verify these features work on the live site:
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Resume PDF downloads correctly
- [ ] All images and assets load
- [ ] Mobile responsiveness works
- [ ] Dark mode functions properly

## Troubleshooting

### Common Issues

1. **404 Error on Site**
   - Check that GitHub Pages source is set to "GitHub Actions"
   - Verify the workflow completed successfully
   - Ensure the repository is public (or you have GitHub Pro for private repos)

2. **Assets Not Loading**
   - Check the browser console for 404 errors
   - Verify asset paths in the code
   - Ensure `.nojekyll` file is present in the output

3. **Workflow Fails**
   - Check the Actions logs for specific errors
   - Verify Node.js version compatibility
   - Ensure all dependencies are properly listed

4. **Custom Domain Issues**
   - Verify DNS settings point to GitHub Pages
   - Check that CNAME file is created correctly
   - Allow time for DNS propagation (up to 24 hours)

### Getting Help

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the workflow logs in the Actions tab
3. Verify all configuration files are correct
4. Test the build locally using `npm run preview`

## Security Considerations

1. **Repository Visibility**
   - Public repositories get GitHub Pages for free
   - Private repositories require GitHub Pro/Team/Enterprise

2. **Secrets Management**
   - Don't commit sensitive information
   - Use GitHub Secrets for any API keys or tokens

3. **Content Security**
   - Review all content before deployment
   - Ensure no sensitive data is in the repository

## Performance Optimization

1. **Image Optimization**
   - Use optimized images in the `public` folder
   - Consider using WebP format for better compression

2. **Bundle Analysis**
   - Run `npm run analyze` to check bundle size
   - Optimize imports and dependencies

3. **Caching**
   - GitHub Pages provides automatic caching
   - Use proper cache headers for static assets

## Monitoring

1. **Analytics** (Optional)
   - Add Google Analytics or similar
   - Monitor site performance and usage

2. **Uptime Monitoring**
   - Use services like UptimeRobot for monitoring
   - Set up alerts for downtime

3. **Performance Monitoring**
   - Use tools like Lighthouse for performance audits
   - Monitor Core Web Vitals