document.addEventListener('DOMContentLoaded', () => {


  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const slideMenu = document.getElementById('slideMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  // Open Menu
  menuToggle.addEventListener('click', () => {
      slideMenu.classList.add('active');
      menuOverlay.classList.add('active');
  });

  // Close Menu
  closeMenu.addEventListener('click', () => {
      slideMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
  });

  // Smooth Scroll for Links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetID = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetID);
          if (targetSection) {
              scroll.scrollTo(targetSection);
              slideMenu.classList.remove('active');
              menuOverlay.classList.remove('active');
          }
      });
  });
});