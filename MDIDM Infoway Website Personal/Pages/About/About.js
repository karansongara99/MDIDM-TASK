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
  