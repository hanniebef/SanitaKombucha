document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const slideMenu = document.querySelector('.slide-menu');
    const overlay = document.querySelector('.menu-overlay');
    const closeButton = document.querySelector('.close-button');

    function toggleMenu() {
        slideMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = slideMenu.classList.contains('active') ? 'hidden' : '';
    }

    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});


document.addEventListener("DOMContentLoaded", function() {
    // Wrap every letter in spans
    document.querySelectorAll('.ml10 .letters').forEach(function(element) {
        element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    });

    anime.timeline({loop: true})
        .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
        })
        .add({
            targets: '.ml10',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
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

