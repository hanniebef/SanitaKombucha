document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const slideMenu = document.getElementById('slideMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  // Abrir el menú
  menuToggle.addEventListener('click', () => {
      slideMenu.classList.add('active');
      menuOverlay.classList.add('active');
  });

  // Cerrar el menú
  closeMenu.addEventListener('click', () => {
      slideMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
  });

  menuOverlay.addEventListener('click', () => {
      slideMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
  });

  // Smooth Scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetID = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetID);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
              slideMenu.classList.remove('active');
              menuOverlay.classList.remove('active');
          }
      });
  });
});
