const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".carousel-main div").length;

function showSlide(index) {
  const carousel = document.querySelector(".carousel-main");
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  const translateValue = -currentIndex * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Function to scroll to a specific element
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Add event listeners to the links
document.getElementById("home-link").addEventListener("click", function () {
  scrollToSection("home");
});
document.getElementById("reviews-link").addEventListener("click", function () {
  scrollToSection("reviews");
});
document.getElementById("about-link").addEventListener("click", function () {
  scrollToSection("aboutus");
});
document.getElementById("contact-link").addEventListener("click", function () {
  scrollToSection("contactus");
});

document.getElementById("gallery-link").addEventListener("click", function () {
  scrollToSection("gallery");
});
