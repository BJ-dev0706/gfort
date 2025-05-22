/**
 * Team Members Module
 * A reusable module to manage and display team members across the website
 */

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Nazir Kazimi",
    position: "Chief executive Officer",
    image: "assets/img/team/nazir.jpg",
    bio: "Innovating with cutting-edge technology to drive success and efficiency.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 2,
    name: "Lam Jingan",
    position: "Chief Technology Officer",
    image: "assets/img/team/lam.png",
    bio: "Ensuring operational excellence and smooth execution of projects.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 3,
    name: "Ruben Granados",
    position: "Full Stack Developer",
    image: "assets/img/team/ruben.png",
    bio: "Crafting strategies that enhance brand visibility and customer engagement.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "Arian Koshelenko",
    position: "3D web developer & VR developer",
    image: "assets/img/team/arian.jpg",
    bio: "Designing intuitive and user-friendly interfaces that delight users.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "Nikita Dulenko",
    position: "Blockchain Developer",
    image: "assets/img/team/nikita.png",
    bio: "Designing intuitive and user-friendly interfaces that delight users.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  }
];

// Department-specific team members
const departmentTeamMembers = {
  'technology': [
    {
      id: 101,
      name: "Thomas Wilson",
      position: "Senior Developer",
      image: "assets/img/team/team-05.png",
      bio: "Building robust and scalable applications with expertise in multiple programming languages.",
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 102,
      name: "Laura Chen",
      position: "DevOps Engineer",
      image: "assets/img/team/team-06.png",
      bio: "Streamlining development processes and ensuring smooth deployment and operation of applications.",
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    }
  ],
  'design': [
    {
      id: 201,
      name: "Alex Rodriguez",
      position: "Graphic Designer",
      image: "assets/img/team/team-07.png",
      bio: "Creating captivating visual designs that elevate brand identity and user experience.",
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      id: 202,
      name: "Priya Sharma",
      position: "UI/UX Researcher",
      image: "assets/img/team/team-08.png",
      bio: "Conducting user research to inform design decisions and enhance user experience.",
      social: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      }
    }
  ]
};

/**
 * Create social links HTML for a team member
 * @param {Object} social - Social media links
 * @returns {string} HTML for social links
 */
function createSocialLinksHtml(social) {
  return `<div class="social">
    <a href="${social.twitter}"><i class="bi bi-twitter-x"></i></a>
    <a href="${social.facebook}"><i class="bi bi-facebook"></i></a>
    <a href="${social.instagram}"><i class="bi bi-instagram"></i></a>
    <a href="${social.linkedin}"><i class="bi bi-linkedin"></i></a>
  </div>`;
}

/**
 * Create a team member item HTML
 * @param {Object} member - Team member data
 * @param {number} delay - Animation delay
 * @returns {string} HTML for a team member item
 */
function createTeamMemberItemHtml(member, delay = 100) {
  return `
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="${delay}">
      <div class="team-member d-flex align-items-start">
        <div class="pic">
          <img src="${member.image}" class="img-fluid" alt="${member.name}" />
        </div>
        <div class="member-info">
          <h4>${member.name}</h4>
          <span>${member.position}</span>
          <p>${member.bio}</p>
          ${createSocialLinksHtml(member.social)}
        </div>
      </div>
    </div>
  `;
}

/**
 * Create a team member card HTML for grid layouts
 * @param {Object} member - Team member data
 * @param {number} delay - Animation delay
 * @returns {string} HTML for a team member card
 */
function createTeamMemberCardHtml(member, delay = 100) {
  return `
    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="${delay}">
      <div class="team-member-card text-center">
        <div class="pic">
          <img src="${member.image}" class="img-fluid rounded-circle" alt="${member.name}" />
        </div>
        <div class="member-info mt-3">
          <h4>${member.name}</h4>
          <span>${member.position}</span>
          <p class="mt-2">${member.bio}</p>
          ${createSocialLinksHtml(member.social)}
        </div>
      </div>
    </div>
  `;
}

/**
 * Render team members in a list layout
 * @param {string} containerId - The ID of the container to render into
 * @param {Array} [customTeamMembers=null] - Optional custom team members array
 * @param {string} [title="Team Members"] - Section title
 * @param {string} [subtitle="Our team members share their experiences and success stories with Gfort's innovative solutions."] - Section subtitle
 */
function renderTeamMembersList(containerId, customTeamMembers = null, title = "Team Members", subtitle = "Our team members share their experiences and success stories with Gfort's innovative solutions.") {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const membersToUse = customTeamMembers || teamMembers;
  
  let html = `
    <div class="container section-title" data-aos="fade-up">
      <h2>${title}</h2>
      <p>${subtitle}</p>
    </div>
    <div class="container">
      <div class="row gy-4">
  `;
  
  membersToUse.forEach((member, index) => {
    html += createTeamMemberItemHtml(member, (index + 1) * 100);
  });
  
  html += `
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

/**
 * Render team members in a grid layout with cards
 * @param {string} containerId - The ID of the container to render into
 * @param {Array} [customTeamMembers=null] - Optional custom team members array
 * @param {string} [title="Our Team"] - Section title
 * @param {string} [subtitle="Meet the talented professionals behind Gfort's success"] - Section subtitle
 */
function renderTeamMembersGrid(containerId, customTeamMembers = null, title = "Our Team", subtitle = "Meet the talented professionals behind Gfort's success") {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const membersToUse = customTeamMembers || teamMembers;
  
  let html = `
    <div class="container section-title" data-aos="fade-up">
      <h2>${title}</h2>
      <p>${subtitle}</p>
    </div>
    <div class="container">
      <div class="row gy-4">
  `;
  
  membersToUse.forEach((member, index) => {
    html += createTeamMemberCardHtml(member, (index + 1) * 100);
  });
  
  html += `
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

/**
 * Get department-specific team members or default ones
 * @param {string} department - Department identifier
 * @returns {Array} Array of team members
 */
function getDepartmentTeamMembers(department) {
  return departmentTeamMembers[department] || teamMembers;
}

// Export the functions for use in other files
window.TeamMembersModule = {
  teamMembers,
  departmentTeamMembers,
  renderTeamMembersList,
  renderTeamMembersGrid,
  getDepartmentTeamMembers
}; 