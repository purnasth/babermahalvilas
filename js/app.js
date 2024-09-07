document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const svgIcon = document.getElementById("svgIcon");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");

  let lastScrollTop = 0;
  const navbar = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.classList.add("-translate-y-full");
    } else {
      navbar.classList.remove("-translate-y-full");
    }

    lastScrollTop = scrollTop;
  });

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

// for dropdown
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".dropdown > a");
  var dropdowns = document.querySelectorAll(".dropdown");

  document.addEventListener("click", function (event) {
    var isInsideDropdown = false;

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
      '<i class="fa-solid fa-chevron-left text-base bg-coffee-700 text-coffee-400 px-4 py-2 rounded-xl opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out border border-coffee-600"></i>',
      '<i class="fa-solid fa-chevron-right text-base bg-coffee-700 text-coffee-400 px-4 py-2 rounded-xl opacity-60 hover:opacity-100 transition-all duration-150 ease-in-out border border-coffee-600"></i>',
    ],
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
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
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
