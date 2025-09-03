// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact Form Alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});
