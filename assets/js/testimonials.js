/**
 * Testimonials Module
 * A reusable module to manage and display testimonials across the website
 */

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Ceo & Founder",
    image: "assets/img/testimonials/testimonial-1.png",
    stars: 5,
    quote: "Gfort transformed our digital presence with their innovative solutions. Their team's dedication and expertise exceeded our expectations."
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Designer",
    image: "assets/img/testimonials/testimonial-2.png",
    stars: 5,
    quote: "Working with Gfort was a game-changer for our business. They delivered exceptional results and provided invaluable support throughout the project."
  },
  {
    id: 3,
    name: "David Johnson",
    position: "Store Owner",
    image: "assets/img/testimonials/testimonial-3.png",
    stars: 5,
    quote: "Gfort's professionalism and attention to detail are unmatched. They not only met but exceeded our requirements, making them a trusted partner."
  },
  {
    id: 4,
    name: "Emaly",
    position: "Freelancer",
    image: "assets/img/testimonials/testimonials-5.jpg",
    stars: 5,
    quote: "Choosing Gfort was the best decision we made. Their creativity and strategic insights helped us achieve remarkable growth in our online presence."
  },
  {
    id: 5,
    name: "Jane",
    position: "Entrepreneur",
    image: "assets/img/testimonials/testimonials-6.png",
    stars: 5,
    quote: "Gfort's commitment to quality and customer satisfaction is outstanding. They consistently deliver results that align perfectly with our business goals."
  },
  {
    id: 6,
    name: "Sarah Martinez",
    position: "Store Owner",
    image: "assets/img/testimonials/testimonials-7.png",
    stars: 5,
    quote: "I highly recommend Gfort for their exceptional service and innovative solutions. Their team is responsive, knowledgeable, and a pleasure to work with."
  }
];

// Service-specific testimonials
const serviceTestimonials = {
  'web-development': [
    {
      id: 101,
      name: "James Anderson",
      position: "CEO, InnovateTech",
      image: "",
      stars: 5,
      quote: "Gfort exceeded our expectations with their web development expertise. They delivered a responsive and user-friendly website that has significantly boosted our online presence."
    },
    {
      id: 102,
      name: "Emily Davis",
      position: "CMO, MarketMasters",
      image: "assets/img/testimonials/testimonial-2.jpg",
      stars: 5,
      quote: "Working with Gfort was a pleasure. They were responsive to our needs, communicated effectively throughout the project, and delivered a high-quality website that has been crucial for our business growth."
    }
  ],
  'digital-marketing': [
    {
      id: 201,
      name: "John Doe",
      position: "CEO, Example Company",
      image: "assets/img/testimonials/testimonial-1.jpg",
      stars: 5,
      quote: "Gfort's digital marketing strategies have transformed our online presence. They helped us reach new heights in customer engagement and conversions."
    },
    {
      id: 202,
      name: "Jane Smith",
      position: "Marketing Director, Another Company",
      image: "assets/img/testimonials/testimonial-2.jpg",
      stars: 5,
      quote: "Working with Gfort has been a game-changer for us. Their SEO expertise boosted our website traffic significantly, resulting in more leads and sales."
    }
  ],
  'design': [
    {
      id: 301,
      name: "John Doe",
      position: "CEO, Example Company",
      image: "assets/img/testimonials/testimonial-1.jpg",
      stars: 5,
      quote: "Working with Gfort on our app's UI was a game-changer. Their design expertise not only improved user satisfaction but also boosted our app's downloads by 40%!"
    }
  ]
};

/**
 * Generate stars HTML based on rating
 * @param {number} count - Number of stars
 * @returns {string} HTML for stars
 */
function generateStars(count) {
  return '<div class="stars">' + 
    '<i class="bi bi-star-fill"></i>'.repeat(count) + 
    '</div>';
}

/**
 * Create a testimonial item HTML
 * @param {Object} testimonial - Testimonial data
 * @param {number} delay - Animation delay
 * @returns {string} HTML for a testimonial item
 */
function createTestimonialItemHtml(testimonial, delay = 100) {
  return `
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="${delay}">
      <div class="testimonial-item">
        <img src="${testimonial.image}" class="testimonial-img" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
        <h4>${testimonial.position}</h4>
        ${generateStars(testimonial.stars)}
        <p>
          <i class="bi bi-quote quote-icon-left"></i>
          <span>${testimonial.quote}</span>
          <i class="bi bi-quote quote-icon-right"></i>
        </p>
      </div>
    </div>
  `;
}

/**
 * Create a testimonial slide HTML for swipers
 * @param {Object} testimonial - Testimonial data
 * @returns {string} HTML for a testimonial slide
 */
function createTestimonialSlideHtml(testimonial) {
  return `
    <div class="swiper-slide">
      <div class="testimonial-item">
        <p>
          <i class="bi bi-quote quote-icon-left"></i>
          ${testimonial.quote}
          <i class="bi bi-quote quote-icon-right"></i>
        </p>
        <img src="${testimonial.image}" class="testimonial-img" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
        <h4>${testimonial.position}</h4>
        ${generateStars(testimonial.stars)}
      </div>
    </div>
  `;
}

/**
 * Render testimonials in a grid layout
 * @param {string} containerId - The ID of the container to render into
 * @param {Array} [customTestimonials=null] - Optional custom testimonials array
 * @param {string} [title="Testimonials"] - Section title
 * @param {string} [subtitle="Our clients share their experiences and success stories with Gfort's innovative solutions."] - Section subtitle
 */
function renderTestimonialsGrid(containerId, customTestimonials = null, title = "Testimonials", subtitle = "Our clients share their experiences and success stories with Gfort's innovative solutions.") {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const testimonialsToUse = customTestimonials || testimonials;
  
  let html = `
    <div class="container section-title" data-aos="fade-up">
      <h2>${title}</h2>
      <p>${subtitle}</p>
    </div>
    <!-- End Section Title -->
    <div class="container">
      <div class="row gy-4">
  `;
  
  testimonialsToUse.forEach((testimonial, index) => {
    html += createTestimonialItemHtml(testimonial, (index + 1) * 100);
  });
  
  html += `
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

/**
 * Render testimonials in a slider layout
 * @param {string} containerId - The ID of the container to render into
 * @param {Array} [customTestimonials=null] - Optional custom testimonials array
 * @param {string} [title="Client Testimonials"] - Section title
 * @param {string} [subtitle="Here's what our clients say about our services:"] - Section subtitle
 * @param {boolean} [sectionBg=false] - Whether to add section-bg class
 */
function renderTestimonialsSlider(containerId, customTestimonials = null, title = "Client Testimonials", subtitle = "Here's what our clients say about our services:", sectionBg = false) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const testimonialsToUse = customTestimonials || testimonials;
  
  let html = `
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
      
      <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper-wrapper">
  `;
  
  testimonialsToUse.forEach(testimonial => {
    html += createTestimonialSlideHtml(testimonial);
  });
  
  html += `
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  // Initialize swiper if not already initialized
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 20 }
      }
    });
  }
}

/**
 * Get service-specific testimonials or default ones
 * @param {string} service - Service identifier
 * @returns {Array} Array of testimonials
 */
function getServiceTestimonials(service) {
  return serviceTestimonials[service] || testimonials;
}

// Export the functions for use in other files
window.TestimonialsModule = {
  testimonials,
  serviceTestimonials,
  renderTestimonialsGrid,
  renderTestimonialsSlider,
  getServiceTestimonials
}; 