(function () {
  const observerOptions = {
    root: null,
    rootMargin: "100px",
    threshold: 0.01,
  };

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      const video = entry.target;
      
      if (entry.isIntersecting) {
        if (video.readyState >= 2) {
          video.play().catch(() => {
            // Autoplay was blocked; video stays paused
          });
        } else {
          video.addEventListener("loadeddata", () => {
            video.play().catch(() => {});
          }, { once: true });
        }
      } else {
        video.pause();
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".locked-video").forEach((video) => {
      observer.observe(video);
    });
  });
})();
