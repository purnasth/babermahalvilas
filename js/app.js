document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const svgIcon = document.getElementById("svgIcon");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");
  const header = document.querySelector(".blur-bg");

  toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("-translate-x-full");
    svgIcon.classList.toggle("active");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", function () {
    navLinks.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    svgIcon.classList.remove("active");
  });
});

// Select the Back to Top button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show/Hide button after 100vh scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

// Scroll to top when button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// for dropdown
document.addEventListener("DOMContentLoaded", function () {
  let dropdowns = document.querySelectorAll(".dropdown");
  let timeout;

  function closeAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      if (dropdown.contains(event.target)) {
        isInsideDropdown = true;
      }
    });

    if (!isInsideDropdown) {
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("active");
      });
    }
  });

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var parentLi = link.parentElement;
      dropdowns.forEach(function (dropdown) {
        if (dropdown !== parentLi) {
          dropdown.classList.remove("active");
        }
      });

      parentLi.classList.toggle("active");
    });
  });
});

$(document).ready(function () {
  $(".slider-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left text-base bg-coffee-700/30 text-white px-4 py-2 rounded-full opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out border border-white"></i>',
      '<i class="fa-solid fa-chevron-right text-base bg-coffee-700/30 text-white px-4 py-2 rounded-full opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out border border-coffee-400"></i>',
      // '<i class="text-2xl mx-4 text-coffee-400">&#8592;</i>',
      // '<i class="text-2xl mx-4 text-coffee-400">&#8594;</i>',
    ],
  });
});
$(document).ready(function () {
  $(".rooms-carousel").owlCarousel({
    // items: 1,
    // loop: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    // autoplayHoverPause: true,
    // animateOut: "fadeOut",
    // smartSpeed: 1000,
    // dots: false,
    // nav: true,
    // navText: [
    //   '<i class="fa-solid fa-chevron-left text-base bg-coffee-700 text-coffee-400 px-4 py-2 rounded-xl opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out border border-coffee-600"></i>',
    //   '<i class="fa-solid fa-chevron-right text-base bg-coffee-700 text-coffee-400 px-4 py-2 rounded-xl opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out border border-coffee-600"></i>',
    // ],
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    mouseDrag: true,
    touchDrag: true,
    navText: ["<i>&#8592;</i>", "<i>&#8594;</i>"],
  });
});

$(document).ready(function () {
  var owl = $(".testimonial.owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1, // Set 1 item for mobile devices
      },
      768: {
        items: 2, // Set 2 items for tablets
      },
      992: {
        items: 2, // Keep 2 items for larger screens
      },
    },
  });

  var owlDots = $(".owl-dots");
  owlDots.css("display", "none");
});

//! important for the hero section video.

function startVideo() {
  var backgroundVideo = document.getElementById("backgroundVideo");
  backgroundVideo.play();
}

// for the dynamic italic for Baber Mahal <em>Vilas</em>
document.querySelectorAll(".vilas-italic").forEach((el) => {
  // Use regex to split by any number of spaces, ensuring only actual words are captured
  let words = el.textContent.trim().split(/\s+/);
  if (words.length >= 3) {
    words[2] = `<em class="the-vilas">${words[2]}</em>`;
    el.innerHTML = words.join(" ");
  }
});

// ! lenis scroll : for the smooth scroll
// Initialize Lenis for slower smooth scroll
const lenis = new Lenis({
  duration: 2, // Slower duration (increase this value for slower scroll)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
  smooth: true, // Enable smooth scrolling
  smoothWheel: true, // Smooth out the wheel scroll
  wheelMultiplier: 0.5, // Reduce the scroll speed (lower values slow it down)
});

// Trigger the scroll animation frame
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
