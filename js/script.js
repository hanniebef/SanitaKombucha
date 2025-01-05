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


// WRAP TEXT
document.addEventListener("DOMContentLoaded", function() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml10 .letters');
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/./g, "<span class='letter'>$&</span>");
    
        anime.timeline({loop: true})
          .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
          }).add({
            targets: '.ml10',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
    }
});

// IMAGE SLIDE

let currentImageIndex = 0;
const images = document.querySelectorAll('.image-slider img');
const totalImages = images.length;

function changeImage() {
    // Reset all images to opacity 0
    images.forEach(img => img.style.opacity = '0');
    // Set current image to opacity 1
    images[currentImageIndex].style.opacity = '1';
    
    // Increment image index, reset to 0 if last image is reached
    currentImageIndex = (currentImageIndex + 1) % totalImages;
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

// Initialize first image as visible
changeImage();

