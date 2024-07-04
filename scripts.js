// You can add any additional JavaScript here if needed
document.addEventListener('DOMContentLoaded', function () {
  // Example: Smooth scrolling for internal links
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});