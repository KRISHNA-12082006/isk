// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav button[data-target]');
  const sections = document.querySelectorAll('main section');

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

      // Update active button styling (optional)
      navLinks.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Inside navLinks.forEach(button => { ... })
if (window.innerWidth <= 768) {
  navLinks.classList.remove('show');
}

    });
  });
});


// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
