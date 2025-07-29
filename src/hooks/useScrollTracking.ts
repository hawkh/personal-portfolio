import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../utils/analytics';
import { throttle } from '../utils/performance';

export function useScrollTracking() {
  const trackedDepths = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track at 25%, 50%, 75%, and 100% scroll depths
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedDepths.current.has(milestone)) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    }, 250);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// Hook for tracking time spent on page
export function useTimeTracking() {
  const startTime = useRef<number>(Date.now());
  const lastActiveTime = useRef<number>(Date.now());
  const totalActiveTime = useRef<number>(0);

  useEffect(() => {
    const updateActiveTime = () => {
      const now = Date.now();
      const timeDiff = now - lastActiveTime.current;
      
      // Only count as active time if less than 30 seconds since last activity
      if (timeDiff < 30000) {
        totalActiveTime.current += timeDiff;
      }
      
      lastActiveTime.current = now;
    };

    const handleActivity = throttle(updateActiveTime, 1000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        lastActiveTime.current = Date.now();
      } else {
        updateActiveTime();
      }
    };

    // Track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, { passive: true });
    });

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Send time tracking data before page unload
    const handleBeforeUnload = () => {
      updateActiveTime();
      const totalSeconds = Math.round(totalActiveTime.current / 1000);
      
      if (totalSeconds > 5) { // Only track if user spent more than 5 seconds
        // Use sendBeacon for reliable tracking on page unload
        if (navigator.sendBeacon && typeof window.gtag !== 'undefined') {
          window.gtag('event', 'time_on_page', {
            event_category: 'engagement',
            value: totalSeconds,
            non_interaction: true,
          });
        }
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
}