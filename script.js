// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav button[data-target]');
  const sections = document.querySelectorAll('main section');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');

  // Hide all sections initially except the first one
  sections.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
  });

  // Add event listener to each nav button
  navLinks.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');

      // Hide all and show only the selected
      sections.forEach(section => {
        section.style.display = section.id === targetId ? 'block' : 'none';
      });

      // Update active button styling
      navLinks.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Hide nav menu on mobile after click
      if (window.innerWidth <= 768) {
        navLinksContainer.classList.remove('show');
      }
    });
  });

  // Hamburger menu toggle
  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('show');
  });

  // Optional: Hide nav menu if window resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinksContainer.classList.remove('show');
    }
  });
});
