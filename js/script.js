 // Counter Animation
 const counters = document.querySelectorAll('.counter');
 counters.forEach(counter => {
   const target = parseInt(counter.getAttribute('data-target'));
   const increment = target / 200;
   
   function updateCount() {
     const count = +counter.innerText;
     if(count < target) {
       counter.innerText = Math.ceil(count + increment);
       setTimeout(updateCount, 10);
     } else {
       counter.innerText = target;
     }
   }
   
   updateCount();
 });

 // Mobile Menu Toggle
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const navLinks = document.getElementById('nav-links');

 mobileMenuButton.addEventListener('click', () => {
   navLinks.classList.toggle('active');
 });


  // Back to Top Button Functionality
  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.remove('hidden');
    } else {
      backToTopButton.classList.add('hidden');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Testimonial
  const carousel = document.getElementById('testimonial-carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let scrollAmount = 0;

  nextBtn.addEventListener('click', () => {
    scrollAmount += carousel.offsetWidth / 2;
    if (scrollAmount >= carousel.scrollWidth) scrollAmount = 0;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    scrollAmount -= carousel.offsetWidth / 2;
    if (scrollAmount < 0) scrollAmount = carousel.scrollWidth - carousel.offsetWidth;
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });