// HERO
 // Hero Video Switcher
 const videos = document.querySelectorAll('.hero-video');
 let currentVideo = 0;

 function switchVideo() {
     videos[currentVideo].classList.add('d-none');
     currentVideo = (currentVideo + 1) % videos.length;
     videos[currentVideo].classList.remove('d-none');
 }

 setInterval(switchVideo, 10000);


 // LOCOMOTIVE
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'diagonal',
});

// Optional: Log the scroll position
scroll.on('scroll', (args) => {
    console.log('Scroll position:', args.scroll.y);
});



