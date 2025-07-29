// Google Analytics 4 integration

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track resume downloads
export const trackResumeDownload = (source: string) => {
  trackEvent('resume_download', 'engagement', source);
};

// Track contact form submissions
export const trackContactForm = (method: string) => {
  trackEvent('contact_form_submit', 'engagement', method);
};

// Track project interactions
export const trackProjectView = (projectName: string, action: 'view' | 'github' | 'demo') => {
  trackEvent(`project_${action}`, 'projects', projectName);
};

// Track social media clicks
export const trackSocialClick = (platform: string, location: string) => {
  trackEvent('social_click', 'engagement', `${platform}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('time_on_page', 'engagement', 'seconds', seconds);
};

// Enhanced ecommerce tracking for portfolio views
export const trackPortfolioView = (section: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'view_item', {
    currency: 'USD',
    value: 1,
    items: [{
      item_id: section,
      item_name: `Portfolio Section: ${section}`,
      item_category: 'portfolio',
      quantity: 1,
    }]
  });
};