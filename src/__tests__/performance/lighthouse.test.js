const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

describe('Lighthouse Performance Tests', () => {
  let chrome;
  let port;

  beforeAll(async () => {
    chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    port = chrome.port;
  });

  afterAll(async () => {
    await chrome.kill();
  });

  it('should meet performance benchmarks', async () => {
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance'],
      port: port,
    };

    const runnerResult = await lighthouse('http://localhost:3000', options);
    const performanceScore = runnerResult.lhr.categories.performance.score * 100;

    expect(performanceScore).toBeGreaterThanOrEqual(85);
  }, 30000);

  it('should meet accessibility benchmarks', async () => {
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['accessibility'],
      port: port,
    };

    const runnerResult = await lighthouse('http://localhost:3000', options);
    const accessibilityScore = runnerResult.lhr.categories.accessibility.score * 100;

    expect(accessibilityScore).toBeGreaterThanOrEqual(90);
  }, 30000);

  it('should meet SEO benchmarks', async () => {
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['seo'],
      port: port,
    };

    const runnerResult = await lighthouse('http://localhost:3000', options);
    const seoScore = runnerResult.lhr.categories.seo.score * 100;

    expect(seoScore).toBeGreaterThanOrEqual(90);
  }, 30000);
});