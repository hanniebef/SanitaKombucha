// 1. Main Settings
const scrollSettings = {
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.05,
    smartphone: {
        smooth: true,
        breakpoint: 414
    },
    tablet: {
        smooth: true,
        breakpoint: 820
    }
};

// 2. Initialize Everything When Page Loads
document.addEventListener('DOMContentLoaded', () => {
    // Create the scroll effect
    const scroll = new LocomotiveScroll(scrollSettings);

    // Start all the features
    setupModals(scroll);
    setupMenu(scroll);
    setupImageSlider();
    setupTextAnimation();
    setupScrollUpdates(scroll);
});

// 3. Modal Setup (Popups)
function setupModals(scroll) {
    // Find all modals on the page
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Create Bootstrap modal
        const modalPopup = new bootstrap.Modal(modal, {
            keyboard: true,
            backdrop: true
        });

        // When modal opens
        modal.addEventListener('show.bs.modal', () => {
            scroll.stop();
            document.documentElement.classList.add('modal-open');
        });

        // When modal closes
        modal.addEventListener('hidden.bs.modal', () => {
            scroll.start();
            document.documentElement.classList.remove('modal-open');
            scroll.update();
        });

        // Close button functionality
        const closeBtn = modal.querySelector('.btn-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => modalPopup.hide());
        }
    });
}

// 4. Menu Setup
function setupMenu(scroll) {
    // Get all menu elements
    const menuBtn = document.querySelector('.menu-button');
    const menu = document.querySelector('.slide-menu');
    const overlay = document.querySelector('.menu-overlay');
    const closeBtn = document.querySelector('.close-button');

    // Function to open menu
    function openMenu() {
        menu.classList.add('active');
        overlay.classList.add('active');
        scroll.stop();
    }

    // Function to close menu
    function closeMenu() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        scroll.start();
    }

    // Add click events
    menuBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);
}

// 5. Image Slider Setup
function setupImageSlider() {
    let currentImage = 0;
    const images = document.querySelectorAll('.image-slider img');
    
    // Change image every 3 seconds
    function changeImage() {
        if (images.length > 0) {
            // Hide current image
            images[currentImage].style.opacity = '0';
            // Move to next image
            currentImage = (currentImage + 1) % images.length;
            // Show new image
            images[currentImage].style.opacity = '1';
        }
    }

    setInterval(changeImage, 3000);
}

// 6. Text Animation Setup
function setupTextAnimation() {
    // Find all text elements
    const textElements = document.querySelectorAll('.ml10 .letters');
    
    // Add animation spans
    textElements.forEach(element => {
        element.innerHTML = element.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    });

    // Start animation
    anime.timeline({loop: false})
        .add({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
        });
}

// 7. Scroll Updates Setup
function setupScrollUpdates(scroll) {
    // Function to update scroll
    function updateScroll() {
        scroll.update();
    }
    
    // Update on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateScroll, 250);
    });

    // Update on page load
    window.addEventListener('load', () => {
        updateScroll();
        setTimeout(updateScroll, 1000);
    });

    // Update when images load
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', updateScroll);
    });
}