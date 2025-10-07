document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('bnr-ch-video');

  // Try playing immediately
  video.play().catch(function (error) {
    console.log("Video play failed:", error);
  });

  // Pause when not visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(video);

  // Resize behavior for better responsiveness
  function handleResize() {
    const videoContainer = document.querySelector('.ch-video-wrap');
    const videoRatio = 16 / 9;
    const containerRatio = videoContainer.clientWidth / videoContainer.clientHeight;

    if (containerRatio > videoRatio) {
      video.style.width = '100%';
      video.style.height = 'auto';
    } else {
      video.style.width = 'auto';
      video.style.height = '100%';
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();
});




$(document).ready(function () {
  $("#courses-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ["<", ">"]
  });
});





const accordionBtns = document.querySelectorAll(".accordion-custom button");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";

    accordionBtns.forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      b.nextElementSibling.style.maxHeight = null;
    });

    if (!expanded) {
      this.setAttribute("aria-expanded", "true");
      const content = this.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});



$(document).ready(function () {
  var owl = $(".training-sessions-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  // Custom navigation
  $(".custom-next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".custom-prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

