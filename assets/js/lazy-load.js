/**
 * Lazy Loading Implementation
 * This script adds lazy loading functionality to images throughout the site.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Check if Intersection Observer is supported
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Only load images when they come into view
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            
            // Add a fade-in animation
            img.classList.add('lazy-loaded');
          }
          
          // Once the image is loaded, stop observing it
          observer.unobserve(img);
        }
      });
    }, {
      // Options for the observer
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Find all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const lazyLoadImages = function() {
      let lazyImages = document.querySelectorAll('img[data-src]');
      
      if (lazyImages.length === 0) {
        document.removeEventListener('scroll', lazyLoadThrottled);
        window.removeEventListener('resize', lazyLoadThrottled);
        window.removeEventListener('orientationchange', lazyLoadThrottled);
        return;
      }
      
      lazyImages.forEach(function(img) {
        if ((img.getBoundingClientRect().top <= window.innerHeight && 
             img.getBoundingClientRect().bottom >= 0) && 
            getComputedStyle(img).display !== 'none') {
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          img.classList.add('lazy-loaded');
        }
      });
    };
    
    // Throttle function to limit how often the lazy load function runs
    const throttle = function(callback, limit) {
      let waiting = false;
      return function() {
        if (!waiting) {
          callback.apply(this, arguments);
          waiting = true;
          setTimeout(function() {
            waiting = false;
          }, limit);
        }
      };
    };
    
    const lazyLoadThrottled = throttle(lazyLoadImages, 200);
    
    // Add event listeners
    document.addEventListener('scroll', lazyLoadThrottled);
    window.addEventListener('resize', lazyLoadThrottled);
    window.addEventListener('orientationchange', lazyLoadThrottled);
    
    // Initial load
    lazyLoadImages();
  }
});

// Function to convert regular images to lazy load format
function prepareLazyLoadImages() {
  // For all images in the document
  document.querySelectorAll('img:not([data-src])').forEach(img => {
    // Skip images that already have data-src or are in the loading state
    if (img.hasAttribute('data-src') || img.classList.contains('lazy-loading')) {
      return;
    }
    
    // Skip small icons and SVGs that don't need lazy loading
    if (img.classList.contains('no-lazy') || img.src.endsWith('.svg')) {
      return;
    }
    
    // Store original source
    const originalSrc = img.src;
    
    // Create placeholder image
    if (originalSrc && originalSrc !== '') {
      img.setAttribute('data-src', originalSrc);
      
      // Set a lightweight placeholder or blur-up effect
      img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"%3E%3Crect width="100%25" height="100%25" fill="%23f0f0f0"/%3E%3C/svg%3E';
      
      // Add loading class for styling
      img.classList.add('lazy-loading');
    }
  });
} 