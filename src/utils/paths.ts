/**
 * Utility function to handle base path for GitHub Pages deployment
 * This ensures assets are loaded correctly regardless of deployment environment
 * 
 * @param path - The path to the asset (should start with a slash)
 * @returns The complete path with proper base path for the current environment
 */
export const getAssetPath = (path: string): string => {
  // In browser environment
  if (typeof window !== 'undefined') {
    // Get base path from <base> tag if it exists
    const baseElement = document.querySelector('base');
    const basePath = baseElement?.getAttribute('href')?.replace(/\/$/, '') || '';
    return `${basePath}${path}`;
  }
  
  // In Node.js environment (during build/SSR)
  const repoName = process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
    : '';
  const basePath = process.env.NODE_ENV === 'production' ? repoName : '';
  return `${basePath}${path}`;
};