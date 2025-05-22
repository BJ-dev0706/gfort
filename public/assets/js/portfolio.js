document.addEventListener('DOMContentLoaded', function() {
  // Use portfolio data from variables (imported via script tag)
  
  // Populate portfolio filters
  const filtersContainer = document.getElementById('portfolioFilters');
  categories.forEach((category, index) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-filter', index === 0 ? '*' : category.filter);
    if (index === 0) listItem.classList.add('filter-active');
    listItem.textContent = category.name;
    filtersContainer.appendChild(listItem);
  });

  // Populate portfolio items
  const portfolioContainer = document.getElementById('portfolioContainer');
  portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.className = `col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.category}`;
    portfolioItem.setAttribute('data-id', item.id);
    portfolioItem.innerHTML = `
      <div class="portfolio-content h-100">
        <img src="${item.image}" class="img-fluid fixed-height py-5 border" alt="${item.title}">
        <div class="portfolio-info">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <a href="${item.image}" title="${item.title}" data-gallery="portfolio-gallery-${item.category}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
          <a href="${item.detailsLink}" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
        </div>
      </div>
    `;
    portfolioContainer.appendChild(portfolioItem);
  });

  // Initialize portfolio filters
  if (typeof Isotope !== 'undefined') {
    // Use imagesLoaded to ensure Isotope arranges correctly after all images have loaded
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
        });
      });
    });
  }

  // Initialize lightbox
  if (typeof GLightbox !== 'undefined') {
    const portfolioLightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  // Add search functionality
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

    // Update isotope layout after search
    if (typeof Isotope !== 'undefined') {
      const portfolioIsotope = new Isotope('.isotope-container');
      portfolioIsotope.arrange();
    }
  });
}); 