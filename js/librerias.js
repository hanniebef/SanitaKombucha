// HERO Video Switcher
const videos = document.querySelectorAll('.hero-video');
let currentVideo = 0;

function switchVideo() {
    videos[currentVideo].classList.add('d-none');
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].classList.remove('d-none');
}

setInterval(switchVideo, 10000);

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Locomotive Scroll with responsive settings
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'vertical',
        smartphone: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            breakpoint: 414
        },
        tablet: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
            breakpoint: 820
        }
    });

    // Handle videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        // Force video reload on mobile
        if (window.innerWidth <= 414) {
            video.load();
        }
        
        // Handle playback
        video.addEventListener('loadedmetadata', function() {
            video.play().catch(function(error) {
                console.log("Video play failed:", error);
            });
        });
    });

    // Update scroll on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            scroll.update();
        }, 250);
    });

    // Handle horizontal scroll sections
    const horizontalSections = document.querySelectorAll('[data-scroll-direction="horizontal"]');
    function updateHorizontalScroll() {
        const isMobile = window.innerWidth <= 414;
        const isTablet = window.innerWidth <= 820 && window.innerWidth > 414;
        
        horizontalSections.forEach(section => {
            if (isMobile) {
                section.setAttribute('data-scroll-speed', '3');
            } else if (isTablet) {
                section.setAttribute('data-scroll-speed', '5');
            } else {
                section.setAttribute('data-scroll-speed', section.dataset.originalSpeed || '8');
            }
        });
        
        scroll.update();
    }

    // Initialize horizontal scroll
    horizontalSections.forEach(section => {
        section.dataset.originalSpeed = section.getAttribute('data-scroll-speed');
    });
    
    updateHorizontalScroll();
    window.addEventListener('resize', updateHorizontalScroll);

    // Handle menu
    const menuButton = document.querySelector('.menu-button');
    const slideMenu = document.querySelector('.slide-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (menuButton && slideMenu && menuOverlay) {
        menuButton.addEventListener('click', () => {
            slideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            slideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        document.querySelector('.close-button')?.addEventListener('click', closeMenu);
        menuOverlay.addEventListener('click', closeMenu);
    }
});