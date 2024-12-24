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

  // Close Menu on Overlay Click
  menuOverlay.addEventListener('click', () => {
      slideMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
  });
});

