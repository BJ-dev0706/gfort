document.addEventListener('DOMContentLoaded', function() {
  "use strict";

  const images = document.querySelectorAll('img:not([loading])');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  imagesWithoutAlt.forEach(img => {
    const imgPath = img.src.split('/').pop();
    const imgName = imgPath.split('.')[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    img.setAttribute('alt', imgName);
  });

  const linksWithoutTitle = document.querySelectorAll('a:not([title])');
  linksWithoutTitle.forEach(link => {
    if (link.textContent.trim() !== '') {
      link.setAttribute('title', link.textContent.trim());
    }
  });

  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
  externalLinks.forEach(link => {
    if (!link.getAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
      const currentRel = link.getAttribute('rel') || '';
      link.setAttribute('rel', currentRel ? currentRel + ' noopener' : 'noopener');
    }
  });

  externalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (typeof gtag === 'function') {
        gtag('event', 'click', {
          'event_category': 'outbound',
          'event_label': link.href
        });
      }
    });
  });

  if (!document.querySelector('script[type="application/ld+json"]')) {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Gfort Technologies",
      "url": window.location.origin,
      "logo": window.location.origin + "/assets/img/logo/logo-dark.png",
      "image": window.location.origin + "/assets/img/hero-carousel/hero-carousel-0.jpg",
      "description": "A multidisciplinary tech agency specializing in 3D Web, Blockchain, Full Stack Development, AI, and Mobile Apps.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Spain"
      },
      "telephone": "(+34) 603814470",
      "email": "info@gfort.org",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-18:00"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script);
  }
}); 