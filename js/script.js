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

