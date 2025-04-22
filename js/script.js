
 // Mobile Menu Toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const navLinks = document.getElementById('nav-links');

 mobileMenuButton.addEventListener('click', () => {
   navLinks.classList.toggle('active');
 });