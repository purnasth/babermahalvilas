document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");
  const header = document.querySelector(".blur-bg");

  toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("-translate-x-full");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", function () {
    navLinks.classList.add("-translate-x-full");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    overlay.classList.add("hidden");
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("backdrop-blur-sm");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("backdrop-blur-sm");
      header.classList.add("bg-transparent");
    }
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

// HERO CAROUSEL
$(document).ready(function () {
  var slickElement = $(".slick-carousel");

  slickElement.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      slick.$slides.eq(currentSlide).find("img").css("transform", "scale(1)");
    }
  );

  function continuousZoom() {
    slickElement.find(".slick-current img").css("transform", "scale(1.2)");
  }

  setInterval(continuousZoom, 3000);

  slickElement.slick({
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',
    nextArrow: '<button type="button" class="slick-next">&#9655;</button>',
    speed: 1000, // Set the transition duration
    fade: true, // Enable fade transition
    cssEase: "cubic-bezier(0.455, 0.03, 0.515, 0.955)", // Use a custom easing function for smoother transition
    swipe: true, // Enable swipe navigation
    touchMove: true, // Enable touch move
  });
});

// rooms carousel
document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    focusAt: "center",
    autoplay: 5000,
    hoverpause: true,
    gap: 0,
    breakpoints: {
      768: {
        perView: 1,
      },
      1024: {
        perView: 1,
      },
    },
  }).mount();
});
