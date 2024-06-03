let currentSlide = 0;

const slides = document.querySelectorAll(".ad-sub-container");
const overlay = document.querySelector(".ad-container-overlay");

setInterval(() => {
  overlay.classList.add("active");
  let lastSlide = currentSlide;
  currentSlide = currentSlide != slides.length - 1 ? currentSlide + 1 : 0;

  setTimeout(() => {
    slides[lastSlide].classList.add("hidden");
    overlay.classList.add("hidden");
    slides.forEach((slide, slideIndex) => {
      if (slideIndex == lastSlide) {
        const content = slide.querySelector(".ad-content-ha-bhai")
          ? slide.querySelector(".ad-content-ha-bhai")
          : slide.querySelector(".ad-content-last-slide");
        content.classList.add("hidden");
        setTimeout(() => {
          content.classList.remove("hidden");
        }, 500);
      }
      if (slideIndex == currentSlide) {
        slide.classList.add("animate-it");
      } else {
        slide.classList.remove("animate-it");
      }
    });
    setTimeout(() => {
      overlay.classList.remove("active");

      slides[lastSlide].classList.remove("hidden");
      setTimeout(() => {
        overlay.classList.remove("hidden");
      }, 100);
    }, 100);
  }, 900);
}, 5000);
