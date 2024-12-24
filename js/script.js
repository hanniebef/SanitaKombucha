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

  // Inicializar Locomotive Scroll
  const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'vertical',
  });

  // Vincular enlaces del menú con Locomotive Scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault(); // Evitar el comportamiento predeterminado

          const targetID = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetID);

          if (targetSection) {
              scroll.scrollTo(targetSection); // Usar Locomotive Scroll para desplazarse
              slideMenu.classList.remove('active'); // Cerrar el menú
              menuOverlay.classList.remove('active'); // Cerrar el overlay
          }
      });
  });
});
