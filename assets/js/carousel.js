(function () {
  let carousels = [];

  function initCarousel(container, itemSelector) {
    const items = Array.from(container.querySelectorAll(itemSelector));
    if (items.length === 0) return null;

    let currentIndex = 0;

    const controlsDiv = document.createElement("div");
    controlsDiv.className = "carousel-controls";

    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn";
    prevBtn.textContent = "← Prev";
    prevBtn.type = "button";

    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn";
    nextBtn.textContent = "Next →";
    nextBtn.type = "button";

    const indicator = document.createElement("div");
    indicator.className = "carousel-indicator";

    controlsDiv.appendChild(prevBtn);
    controlsDiv.appendChild(nextBtn);

    container.parentElement.appendChild(controlsDiv);
    container.parentElement.appendChild(indicator);

    function updateCarousel() {
      items.forEach((item, idx) => {
        if (idx === currentIndex) {
          item.classList.add("carousel-active");
        } else {
          item.classList.remove("carousel-active");
        }
      });

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === items.length - 1;
      indicator.textContent = `${currentIndex + 1} / ${items.length}`;
    }

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    updateCarousel();

    return {
      destroy: () => {
        controlsDiv.remove();
        indicator.remove();
        items.forEach((item) => item.classList.remove("carousel-active"));
      },
    };
  }

  function setupCarousels() {
    const isMobile = window.innerWidth <= 520;

    carousels.forEach((carousel) => carousel && carousel.destroy());
    carousels = [];

    if (isMobile) {
      const videoGallery = document.querySelector(".video-gallery");
      const galleryGrid = document.querySelector(".gallery-grid");

      if (videoGallery) {
        const videoCarousel = initCarousel(videoGallery, ".video-card");
        if (videoCarousel) carousels.push(videoCarousel);
      }

      if (galleryGrid) {
        const galleryCarousel = initCarousel(galleryGrid, ".gallery-card");
        if (galleryCarousel) carousels.push(galleryCarousel);
      }
    }
  }

  window.addEventListener("DOMContentLoaded", setupCarousels);
  window.addEventListener("resize", setupCarousels);
})();
