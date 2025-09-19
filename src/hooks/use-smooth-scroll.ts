'use client';

import { useCallback, useEffect, useRef } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
}

// Easing functions for different scroll behaviors
const easingFunctions = {
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeOutCubic: (t: number) => (t - 1) * (t - 1) * (t - 1) + 1,
  easeInOutQuart: (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
  easeOutQuart: (t: number) => 1 - (--t) * t * t * t,
};

export const useSmoothScroll = () => {
  const isScrollingRef = useRef(false);

  const smoothScrollTo = useCallback((
    target: number | Element | string,
    options: SmoothScrollOptions = {}
  ) => {
    if (isScrollingRef.current) return;

    const {
      duration = 800,
      easing = easingFunctions.easeInOutCubic,
      offset = 0
    } = options;

    let targetElement: Element | null = null;
    let targetPosition: number;

    // Determine target position
    if (typeof target === 'number') {
      targetPosition = target;
    } else if (typeof target === 'string') {
      targetElement = document.querySelector(target);
      if (!targetElement) return;
      targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    } else {
      targetElement = target;
      targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    }

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    isScrollingRef.current = true;

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrollingRef.current = false;
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  const scrollToTop = useCallback((options?: SmoothScrollOptions) => {
    smoothScrollTo(0, { duration: 600, ...options });
  }, [smoothScrollTo]);

  const scrollToBottom = useCallback((options?: SmoothScrollOptions) => {
    smoothScrollTo(document.documentElement.scrollHeight, { duration: 800, ...options });
  }, [smoothScrollTo]);

  // Enhanced scroll behavior for mobile
  useEffect(() => {
    const handleTouchStart = () => {
      // Add passive event listener for better performance
    };

    const handleWheel = (e: WheelEvent) => {
      // Prevent default only if we're currently programmatically scrolling
      if (isScrollingRef.current) {
        e.preventDefault();
      }
    };

    // Add passive event listeners for better performance
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return {
    smoothScrollTo,
    scrollToTop,
    scrollToBottom,
    isScrolling: isScrollingRef.current,
    easingFunctions
  };
};

// Utility function for smooth scroll to element with intersection observer
export const useScrollToVisible = () => {
  const smoothScroll = useSmoothScroll();

  const scrollToVisible = useCallback((selector: string, options?: SmoothScrollOptions) => {
    const element = document.querySelector(selector);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (!isVisible) {
      smoothScroll.smoothScrollTo(element, {
        duration: 600,
        offset: 80, // Account for navbar
        ...options
      });
    }
  }, [smoothScroll]);

  return { scrollToVisible };
};
