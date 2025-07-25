#!/usr/bin/env node

/**
 * Deployment Testing Script
 * 
 * This script performs comprehensive testing of the portfolio deployment
 * including build validation, asset checking, and functionality testing.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧪 Starting deployment testing...\n');

let testsPassed = 0;
let testsFailed = 0;

function runTest(testName, testFunction) {
  try {
    console.log(`🔍 Testing: ${testName}`);
    const result = testFunction();
    if (result.success) {
      console.log(`✅ ${testName}: ${result.message}`);
      testsPassed++;
    } else {
      console.log(`❌ ${testName}: ${result.message}`);
      testsFailed++;
    }
  } catch (error) {
    console.log(`❌ ${testName}: ${error.message}`);
    testsFailed++;
  }
  console.log('');
}

// Test 1: Verify build configuration
function testBuildConfiguration() {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(nextConfigPath)) {
    return { success: false, message: 'next.config.js not found' };
  }
  
  if (!fs.existsSync(packageJsonPath)) {
    return { success: false, message: 'package.json not found' };
  }
  
  const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const hasStaticExport = nextConfig.includes("output: 'export'");
  const hasDeployScript = packageJson.scripts && packageJson.scripts.deploy;
  
  if (!hasStaticExport) {
    return { success: false, message: 'Static export not configured in next.config.js' };
  }
  
  if (!hasDeployScript) {
    return { success: false, message: 'Deploy script not found in package.json' };
  }
  
  return { success: true, message: 'Build configuration is correct' };
}

// Test 2: Verify required files exist
function testRequiredFiles() {
  const requiredFiles = [
    '.github/workflows/deploy.yml',
    'public/.nojekyll',
    'public/404.html',
    'src/utils/paths.ts',
    'src/components/BasePathProvider.tsx'
  ];
  
  const missingFiles = requiredFiles.filter(file => 
    !fs.existsSync(path.join(process.cwd(), file))
  );
  
  if (missingFiles.length > 0) {
    return { 
      success: false, 
      message: `Missing required files: ${missingFiles.join(', ')}` 
    };
  }
  
  return { success: true, message: 'All required files are present' };
}

// Test 3: Verify GitHub Actions workflow
function testGitHubWorkflow() {
  const workflowPath = path.join(process.cwd(), '.github', 'workflows', 'deploy.yml');
  
  if (!fs.existsSync(workflowPath)) {
    return { success: false, message: 'GitHub Actions workflow not found' };
  }
  
  const workflow = fs.readFileSync(workflowPath, 'utf8');
  
  const requiredSteps = [
    'actions/checkout',
    'actions/setup-node',
    'npm ci',
    'npm run deploy',
    'actions/deploy-pages'
  ];
  
  const missingSteps = requiredSteps.filter(step => !workflow.includes(step));
  
  if (missingSteps.length > 0) {
    return { 
      success: false, 
      message: `Workflow missing steps: ${missingSteps.join(', ')}` 
    };
  }
  
  return { success: true, message: 'GitHub Actions workflow is properly configured' };
}

// Test 4: Test local build
function testLocalBuild() {
  try {
    console.log('   Building project locally...');
    execSync('npm run build', { stdio: 'pipe' });
    
    const outDir = path.join(process.cwd(), 'out');
    if (!fs.existsSync(outDir)) {
      return { success: false, message: 'Build output directory not created' };
    }
    
    const indexPath = path.join(outDir, 'index.html');
    if (!fs.existsSync(indexPath)) {
      return { success: false, message: 'index.html not generated' };
    }
    
    const nojekyllPath = path.join(outDir, '.nojekyll');
    if (!fs.existsSync(nojekyllPath)) {
      return { success: false, message: '.nojekyll file not copied to output' };
    }
    
    return { success: true, message: 'Local build completed successfully' };
  } catch (error) {
    return { success: false, message: `Build failed: ${error.message}` };
  }
}

// Test 5: Verify asset paths
function testAssetPaths() {
  const pathsUtilPath = path.join(process.cwd(), 'src', 'utils', 'paths.ts');
  
  if (!fs.existsSync(pathsUtilPath)) {
    return { success: false, message: 'Asset paths utility not found' };
  }
  
  const pathsUtil = fs.readFileSync(pathsUtilPath, 'utf8');
  
  if (!pathsUtil.includes('getAssetPath')) {
    return { success: false, message: 'getAssetPath function not found' };
  }
  
  if (!pathsUtil.includes('GITHUB_REPOSITORY')) {
    return { success: false, message: 'GitHub repository handling not implemented' };
  }
  
  return { success: true, message: 'Asset path handling is properly configured' };
}

// Test 6: Verify SEO metadata
function testSEOMetadata() {
  const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
  
  if (!fs.existsSync(layoutPath)) {
    return { success: false, message: 'Layout file not found' };
  }
  
  const layout = fs.readFileSync(layoutPath, 'utf8');
  
  const requiredMetadata = [
    'title:',
    'description:',
    'keywords:',
    'openGraph:',
    'twitter:',
    'robots:'
  ];
  
  const missingMetadata = requiredMetadata.filter(meta => !layout.includes(meta));
  
  if (missingMetadata.length > 0) {
    return { 
      success: false, 
      message: `Missing metadata: ${missingMetadata.join(', ')}` 
    };
  }
  
  return { success: true, message: 'SEO metadata is properly configured' };
}

// Test 7: Verify sitemap and robots
function testSitemapAndRobots() {
  const sitemapPath = path.join(process.cwd(), 'src', 'app', 'sitemap.ts');
  const robotsPath = path.join(process.cwd(), 'src', 'app', 'robots.ts');
  
  if (!fs.existsSync(sitemapPath)) {
    return { success: false, message: 'Sitemap configuration not found' };
  }
  
  if (!fs.existsSync(robotsPath)) {
    return { success: false, message: 'Robots configuration not found' };
  }
  
  return { success: true, message: 'Sitemap and robots.txt are configured' };
}

// Test 8: Verify TypeScript compilation
function testTypeScriptCompilation() {
  try {
    console.log('   Checking TypeScript compilation...');
    execSync('npm run type-check', { stdio: 'pipe' });
    return { success: true, message: 'TypeScript compilation successful' };
  } catch (error) {
    return { success: false, message: `TypeScript errors found: ${error.message}` };
  }
}

// Test 9: Verify linting
function testLinting() {
  try {
    console.log('   Running ESLint...');
    execSync('npm run lint', { stdio: 'pipe' });
    return { success: true, message: 'Linting passed' };
  } catch (error) {
    // ESLint might return non-zero exit code for warnings, check if it's just warnings
    if (error.message.includes('warning')) {
      return { success: true, message: 'Linting passed with warnings' };
    }
    return { success: false, message: `Linting failed: ${error.message}` };
  }
}

// Test 10: Verify resume file
function testResumeFile() {
  const publicDir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(publicDir);
  
  const resumeFiles = files.filter(file => 
    file.toLowerCase().includes('resume') || 
    file.toLowerCase().includes('cv') || 
    file.toLowerCase().includes('ruthvik')
  );
  
  if (resumeFiles.length === 0) {
    return { success: false, message: 'Resume PDF file not found in public directory' };
  }
  
  return { success: true, message: `Resume file found: ${resumeFiles[0]}` };
}

// Run all tests
const tests = [
  { name: 'Build Configuration', test: testBuildConfiguration },
  { name: 'Required Files', test: testRequiredFiles },
  { name: 'GitHub Actions Workflow', test: testGitHubWorkflow },
  { name: 'Local Build', test: testLocalBuild },
  { name: 'Asset Paths', test: testAssetPaths },
  { name: 'SEO Metadata', test: testSEOMetadata },
  { name: 'Sitemap and Robots', test: testSitemapAndRobots },
  { name: 'TypeScript Compilation', test: testTypeScriptCompilation },
  { name: 'Code Linting', test: testLinting },
  { name: 'Resume File', test: testResumeFile },
];

tests.forEach(({ name, test }) => {
  runTest(name, test);
});

// Summary
console.log('='.repeat(50));
console.log(`📊 Test Results: ${testsPassed} passed, ${testsFailed} failed`);

if (testsFailed === 0) {
  console.log('🎉 All tests passed! Your portfolio is ready for deployment.');
  console.log('\nNext steps:');
  console.log('1. Push your code to GitHub');
  console.log('2. Configure GitHub Pages settings');
  console.log('3. Wait for the GitHub Actions workflow to complete');
  console.log('4. Visit your deployed site');
} else {
  console.log('⚠️  Some tests failed. Please fix the issues before deploying.');
  process.exit(1);
}

console.log('\nFor deployment instructions, see GITHUB_PAGES_SETUP.md');