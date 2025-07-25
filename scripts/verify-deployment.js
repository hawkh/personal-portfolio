#!/usr/bin/env node

/**
 * Deployment Verification Script
 * This script helps verify that the portfolio is properly configured for GitHub Pages
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying GitHub Pages deployment configuration...\n');

const checks = [];

// Check 1: Verify next.config.js exists and has correct settings
function checkNextConfig() {
  const configPath = path.join(process.cwd(), 'next.config.js');
  
  if (!fs.existsSync(configPath)) {
    return { pass: false, message: 'next.config.js not found' };
  }
  
  const configContent = fs.readFileSync(configPath, 'utf8');
  
  const requiredSettings = [
    'output: \'export\'',
    'trailingSlash: true',
    'unoptimized: true'
  ];
  
  const missingSettings = requiredSettings.filter(setting => 
    !configContent.includes(setting)
  );
  
  if (missingSettings.length > 0) {
    return { 
      pass: false, 
      message: `Missing required settings: ${missingSettings.join(', ')}` 
    };
  }
  
  return { pass: true, message: 'Next.js configuration is correct' };
}

// Check 2: Verify GitHub Actions workflow exists
function checkGitHubWorkflow() {
  const workflowPath = path.join(process.cwd(), '.github', 'workflows', 'deploy.yml');
  
  if (!fs.existsSync(workflowPath)) {
    return { pass: false, message: 'GitHub Actions workflow not found' };
  }
  
  const workflowContent = fs.readFileSync(workflowPath, 'utf8');
  
  const requiredElements = [
    'Deploy to GitHub Pages',
    'actions/checkout',
    'actions/setup-node',
    'npm ci',
    'npm run deploy'
  ];
  
  const missingElements = requiredElements.filter(element => 
    !workflowContent.includes(element)
  );
  
  if (missingElements.length > 0) {
    return { 
      pass: false, 
      message: `Workflow missing elements: ${missingElements.join(', ')}` 
    };
  }
  
  return { pass: true, message: 'GitHub Actions workflow is configured' };
}

// Check 3: Verify package.json has deployment scripts
function checkPackageScripts() {
  const packagePath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packagePath)) {
    return { pass: false, message: 'package.json not found' };
  }
  
  const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const scripts = packageContent.scripts || {};
  
  const requiredScripts = ['build', 'deploy'];
  const missingScripts = requiredScripts.filter(script => !scripts[script]);
  
  if (missingScripts.length > 0) {
    return { 
      pass: false, 
      message: `Missing scripts: ${missingScripts.join(', ')}` 
    };
  }
  
  return { pass: true, message: 'Package.json scripts are configured' };
}

// Check 4: Verify static files exist
function checkStaticFiles() {
  const publicPath = path.join(process.cwd(), 'public');
  
  if (!fs.existsSync(publicPath)) {
    return { pass: false, message: 'public directory not found' };
  }
  
  const requiredFiles = ['.nojekyll'];
  const missingFiles = requiredFiles.filter(file => 
    !fs.existsSync(path.join(publicPath, file))
  );
  
  if (missingFiles.length > 0) {
    return { 
      pass: false, 
      message: `Missing files in public/: ${missingFiles.join(', ')}` 
    };
  }
  
  return { pass: true, message: 'Required static files are present' };
}

// Check 5: Verify resume file exists
function checkResumeFile() {
  const publicPath = path.join(process.cwd(), 'public');
  const resumeFiles = fs.readdirSync(publicPath).filter(file => 
    file.toLowerCase().includes('resume') || file.toLowerCase().includes('cv') || file.endsWith('.pdf')
  );
  
  if (resumeFiles.length === 0) {
    return { pass: false, message: 'No resume/CV PDF file found in public/' };
  }
  
  return { pass: true, message: `Resume file found: ${resumeFiles[0]}` };
}

// Check 6: Verify TypeScript configuration
function checkTypeScriptConfig() {
  const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
  
  if (!fs.existsSync(tsconfigPath)) {
    return { pass: false, message: 'tsconfig.json not found' };
  }
  
  return { pass: true, message: 'TypeScript configuration exists' };
}

// Run all checks
const allChecks = [
  { name: 'Next.js Configuration', check: checkNextConfig },
  { name: 'GitHub Actions Workflow', check: checkGitHubWorkflow },
  { name: 'Package.json Scripts', check: checkPackageScripts },
  { name: 'Static Files', check: checkStaticFiles },
  { name: 'Resume File', check: checkResumeFile },
  { name: 'TypeScript Configuration', check: checkTypeScriptConfig }
];

let allPassed = true;

allChecks.forEach(({ name, check }) => {
  const result = check();
  const status = result.pass ? '✅' : '❌';
  console.log(`${status} ${name}: ${result.message}`);
  
  if (!result.pass) {
    allPassed = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All checks passed! Your portfolio is ready for GitHub Pages deployment.');
  console.log('\nNext steps:');
  console.log('1. Push your code to the main branch');
  console.log('2. Configure GitHub Pages in repository settings');
  console.log('3. Set source to "GitHub Actions"');
  console.log('4. Wait for the workflow to complete');
} else {
  console.log('⚠️  Some checks failed. Please fix the issues above before deploying.');
  process.exit(1);
}

console.log('\nFor detailed setup instructions, see GITHUB_PAGES_SETUP.md');