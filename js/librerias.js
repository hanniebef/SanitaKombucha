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
    // Inicializar Locomotive Scroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        direction: 'vertical',
    });

    // Log de eventos de scroll (opcional)
    scroll.on('scroll', (args) => {
        console.log('Scroll position:', args.scroll);
    });
});
