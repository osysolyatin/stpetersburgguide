// Smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const sectionID = this.getAttribute("href").slice(1);

    document.getElementById(sectionID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Slider for City-About section
const swiper = new Swiper(".city-about-swiper", {
  // Optional parameters
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: ".city-about-swiper-pagination",
    clickable: true,
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".city-about-swiper-button-next",
    prevEl: ".city-about-swiper-button-prev",
  },
});

// WoW-animation effects

const wow = new WOW();
wow.init();
