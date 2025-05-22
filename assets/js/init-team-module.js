/**
 * Team Members Module Initializer
 * 
 * This script automatically initializes the Team Members Module on any page
 * that includes a team section with id="team".
 * 
 * Include this script after team-members.js to automatically render team members
 * on any page without having to add page-specific initialization code.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Check if the TeamMembersModule exists
  if (typeof window.TeamMembersModule === 'undefined') {
    console.error('Team Members Module not loaded. Make sure to include team-members.js before this script.');
    return;
  }

  // Check if there's a team section on the page
  const teamSection = document.getElementById('team');
  if (!teamSection) {
    return; // No team section on this page
  }

  // Get the current page from the URL
  const currentPage = window.location.pathname.split('/').pop().split('.')[0] || 'index';
  
  // Default configuration
  let title = 'Team Members';
  let subtitle = 'Our team members share their experiences and success stories with Gfort\'s innovative solutions.';
  let teamMembers = null; // Use default team members
  let renderFunction = window.TeamMembersModule.renderTeamMembersList;
  
  // Page-specific configurations
  switch (currentPage) {
    case 'about':
      title = 'Our Team';
      subtitle = 'Meet the professionals behind Gfort\'s success';
      break;
      
    case 'team':
      title = 'Team Members';
      subtitle = 'Our dedicated team of professionals working to deliver exceptional results';
      break;
      
    case 'services':
    case 'web-development':
      teamMembers = window.TeamMembersModule.getDepartmentTeamMembers('technology');
      title = 'Development Team';
      subtitle = 'Our talented developers who bring your projects to life';
      break;
      
    case 'design':
      teamMembers = window.TeamMembersModule.getDepartmentTeamMembers('design');
      title = 'Design Team';
      subtitle = 'Our creative designers crafting beautiful and intuitive user experiences';
      break;
      
    // Add more page-specific configurations as needed
  }
  
  // Render the team members
  renderFunction('team', teamMembers, title, subtitle);
}); 