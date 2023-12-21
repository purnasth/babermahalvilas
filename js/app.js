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

// rooms carousel
// document.addEventListener("DOMContentLoaded", function () {
//   new Glide(".glide", {
//     type: "carousel",
//     startAt: 0,
//     perView: 1,
//     focusAt: "center",
//     autoplay: 5000,
//     hoverpause: true,
//     gap: 0,
//     breakpoints: {
//       768: {
//         perView: 1,
//       },
//       1024: {
//         perView: 1,
//       },
//     },
//   }).mount();
// });

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Glide for the rooms section
  new Glide(".rooms-glide", {
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

  // Initialize Glide for the testimonials section
  // new Glide(".testimonials-glide", {
  //   type: "carousel",
  //   startAt: 0,
  //   perView: 1,
  //   autoplay: 5000,
  //   hoverpause: true,
  //   gap: 0,
  //   breakpoints: {
  //     768: {
  //       perView: 1,
  //     },
  //     1024: {
  //       perView: 1,
  //     },
  //   },
  // }).mount();
});

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
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
