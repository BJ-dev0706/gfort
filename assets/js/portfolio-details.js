document.addEventListener('DOMContentLoaded', function() {
  // Get the portfolio ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const portfolioId = parseInt(urlParams.get('id'));
  
  // Find the portfolio item by ID
  const portfolioItem = portfolioItems.find(item => item.id === portfolioId);
  
  if (!portfolioItem) {
    console.error('Portfolio item not found');
    document.querySelector('.portfolio-details-page').innerHTML = '<div class="container mt-5 text-center"><h2>Portfolio item not found</h2><p>The requested project could not be found.</p><a href="portfolio.html" class="btn btn-primary">Back to Portfolio</a></div>';
    return;
  }
  
  // Update page title and meta tags
  document.title = `${portfolioItem.title} - Gfort`;
  document.querySelector('meta[name="description"]').setAttribute('content', portfolioItem.description);
  
  // Set the project information
  document.querySelector('.portfolio-info h3').textContent = 'Project information';
  
  const category = categories.find(cat => cat.id === portfolioItem.category)?.name || 'Uncategorized';
  
  // Update the category in the info list
  const infoList = document.querySelector('.portfolio-info ul');
  infoList.querySelector('li:nth-child(1) strong').nextSibling.textContent = `: ${category}`;
  
  // Update client, date, and URL if available
  if (portfolioItem.client) {
    document.querySelector('.client-name').textContent = portfolioItem.client;
  }
  
  if (portfolioItem.date) {
    document.querySelector('.project-date').textContent = portfolioItem.date;
  }
  
  if (portfolioItem.Link) {
    const urlElement = document.querySelector('.project-url');
    urlElement.textContent = portfolioItem.Link;
    urlElement.href = portfolioItem.Link;
  }
  
  // Update project title and description
  document.querySelector('.portfolio-description h2').textContent = portfolioItem.title;
  document.querySelector('.portfolio-description p').textContent = portfolioItem.description;
  
  // Update slider images based on portfolio category and ID
  const basePath = portfolioItem.image.substring(0, portfolioItem.image.lastIndexOf('/') + 1);
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  
  // Clear existing slides
  swiperWrapper.innerHTML = '';
  
  // Add new slides (we'll assume there are 4 images named 1.png, 2.png, etc.)
  for (let i = 1; i <= 4; i++) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    
    const img = document.createElement('img');
    img.src = `${basePath}${i}.png`;
    img.alt = `${portfolioItem.title} - Image ${i}`;
    img.onerror = function() {
      // Remove slide if image doesn't exist
      if (i > 1) { // Keep at least one slide
        this.parentElement.remove();
      } else {
        // Use the main image as fallback for the first slide
        this.src = portfolioItem.image;
      }
    };
    
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  }
  
  // Update breadcrumb
  document.querySelector('.breadcrumbs .current').textContent = portfolioItem.title;
  
  // Update page title
  document.querySelector('.page-title h1').textContent = portfolioItem.title;
  
  // Reinitialize Swiper
  if (typeof Swiper !== 'undefined') {
    const swiperConfig = JSON.parse(
      document.querySelector(".swiper-config").innerHTML.trim()
    );
    new Swiper('.portfolio-details-slider', swiperConfig);
  }
}); 