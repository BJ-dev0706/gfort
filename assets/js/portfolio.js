document.addEventListener('DOMContentLoaded', function() {
  
  const filtersContainer = document.getElementById('portfolioFilters');
  categories.forEach((category, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-filter', index === 0 ? '*' : category.filter);
    if (index === 0) listItem.classList.add('filter-active');
    listItem.textContent = category.name;
    filtersContainer.appendChild(listItem);
  });

  const portfolioContainer = document.getElementById('portfolioContainer');
  portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = `col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`;
    portfolioItem.setAttribute('data-id', item.id);
    portfolioItem.innerHTML = `
      <div class="portfolio-card h-100">
        <div class="portfolio-img-container">
          <img data-src="${item.image}" class="img-fluid lazy-loading" alt="${item.title}" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 150'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3C/svg%3E">
          <div class="portfolio-hover">
            <div class="portfolio-links">
              <a href="${item.image}" title="${item.title}" data-gallery="portfolio-gallery-${item.category}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="${item.detailsLink}?id=${item.id}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
        <div class="portfolio-info">
          <span class="portfolio-category">${categories.find(cat => cat.id === item.category)?.name || 'Uncategorized'}</span>
          <h4>${item.title}</h4>
          <p class="portfolio-description">${item.description}</p>
        </div>
      </div>
    `;
    portfolioContainer.appendChild(portfolioItem);
  });

  if (typeof Isotope !== 'undefined') {
    imagesLoaded(portfolioContainer, function() {
      const portfolioIsotope = new Isotope('.isotope-container', {
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
      });

      document.querySelectorAll('.isotope-filters li').forEach(filter => {
        filter.addEventListener('click', function() {
          document.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          
          if (typeof lazyLoadImages === 'function') {
            setTimeout(lazyLoadImages, 300);
          }
        });
      });
    });
  }

  if (typeof GLightbox !== 'undefined') {
    const portfolioLightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  document.getElementById('portfolioSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    portfolioItems.forEach(item => {
      const element = document.querySelector(`[data-id="${item.id}"]`);
      if (element) {
        const isVisible = 
          item.title.toLowerCase().includes(searchTerm) || 
          item.description.toLowerCase().includes(searchTerm);
        element.style.display = isVisible ? 'block' : 'none';
      }
    });

    if (typeof Isotope !== 'undefined') {
      const portfolioIsotope = new Isotope('.isotope-container');
      portfolioIsotope.arrange();
      
      if (typeof lazyLoadImages === 'function') {
        setTimeout(lazyLoadImages, 300);
      }
    }
  });
  
  if (typeof initLazyLoading === 'function') {
    initLazyLoading();
  }
}); 