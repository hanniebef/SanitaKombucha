// HERO
 // Hero Video Switcher
 const videos = document.querySelectorAll('.hero-video');
 let currentVideo = 0;

 function switchVideo() {
     videos[currentVideo].classList.add('active');
     currentVideo = (currentVideo + 1) % videos.length;
     videos[currentVideo].classList.remove('active');
 }

 setInterval(switchVideo, 10000);

 


 document.addEventListener("DOMContentLoaded", () => {

    
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'vertical', // Ensure vertical scrolling
    });

    // Log scroll events (optional)
    scroll.on('scroll', (args) => {
        console.log('Scroll position:', args.scroll);
    });

    scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'vertical'
    });
});





