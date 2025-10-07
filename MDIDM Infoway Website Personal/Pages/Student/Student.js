document.addEventListener('DOMContentLoaded', function () {
  const clientCarousel = document.querySelector('#clientCarousel');

  const carousel = new bootstrap.Carousel(clientCarousel, {
    interval: 3000,    // Slide every 3 seconds
    ride: 'carousel',  // Start automatically
    pause: false,      // Don't stop on hover/focus
    wrap: true         // Loop back to start
  });
});