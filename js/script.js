// HERO

 const videos = document.querySelectorAll('.hero-video');
  let currentVideo = 0;

  function switchVideo() {
    videos[currentVideo].classList.add('d-none'); // Oculta el video actual
    currentVideo = (currentVideo + 1) % videos.length; // Avanza al siguiente
    videos[currentVideo].classList.remove('d-none'); // Muestra el siguiente
  }

  // Cambia de video cada 10 segundos
  setInterval(switchVideo, 10000);