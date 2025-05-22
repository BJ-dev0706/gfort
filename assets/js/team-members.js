/**
 * Team Members Module
 * A reusable module to manage and display team members across the website
 */

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Nazir Kazimi",
    position: "Chief Executive Officer",
    image: "assets/img/team/nazir.jpg",
    bio: "Driving strategic vision and business growth while cultivating a culture of innovation and excellence across all departments.",
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
    bio: "Architecting our technology roadmap and leading R&D initiatives to ensure we remain at the cutting edge of industry innovation.",
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
    position: "Software Developer",
    image: "assets/img/team/ruben.png",
    bio: "Crafting clean, efficient code and developing scalable applications that form the backbone of our product ecosystem.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "Jhon Alejandro",
    position: "Blockchain Developer",
    image: "assets/img/team/jhon.jpg",
    bio: "Designing and implementing decentralized solutions with expertise in smart contracts, consensus mechanisms, and blockchain protocols.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 5,
    name: "Nikita Dulenko",
    position: "Blockchain Developer",
    image: "assets/img/team/nikita.png",
    bio: "Engineering robust blockchain infrastructure and developing cryptographic solutions that ensure security and transparency.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 6,
    name: "David Ricardo",
    position: "AI Engineer",
    image: "assets/img/team/david.png",
    bio: "Creating intelligent systems and algorithms that power our predictive analytics and automation capabilities.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 7,
    name: "Jhon Alejandro",
    position: "Blockchain Developer",
    image: "assets/img/team/jhon.jpg",
    bio: "Developing distributed ledger applications and implementing cryptographic protocols to enhance data integrity and security.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
  
  {
    id: 8,
    name: "Arian Koshelenko",
    position: "3D web developer & VR developer",
    image: "assets/img/team/arian.jpg",
    bio: "Building immersive digital experiences through WebGL, Three.js, and VR technologies that push the boundaries of spatial computing.",
    social: {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com"
    }
  },
];

// Department-specific team members
const departmentTeamMembers = {
  'technology': [
    {
      id: 101,
      name: "Thomas Wilson",
      position: "Senior Developer",
      image: "assets/img/team/team-05.png",
      bio: "Mentoring development teams and delivering high-performance solutions with expertise in system architecture and code optimization.",
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
      bio: "Streamlining development workflows and orchestrating cloud infrastructure to ensure reliable, secure, and scalable application deployment.",
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
      bio: "Creating visually striking designs and brand assets that communicate our message through thoughtful typography, color theory, and composition.",
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
      bio: "Conducting user studies and analyzing interaction patterns to inform design decisions that create intuitive, accessible digital experiences.",
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

window.TeamMembersModule = {
  teamMembers,
  departmentTeamMembers,
  renderTeamMembersList,
  renderTeamMembersGrid,
  getDepartmentTeamMembers
}; 