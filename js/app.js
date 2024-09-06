document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");
  const navLinks = document.getElementById("navLinks");
  const overlay = document.getElementById("overlay");
  // const header = document.querySelector(".blur-bg");

  let lastScrollTop = 0;
  const navbar = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll Down
      navbar.classList.add("-translate-y-full");
    } else {
      // Scroll Up
      navbar.classList.remove("-translate-y-full");
    }

    lastScrollTop = scrollTop;
  });
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

  // window.addEventListener("scroll", function () {
  //   if (window.scrollY > 0) {
  //     header.classList.add("backdrop-blur-sm");
  //     header.classList.remove("bg-transparent");
  //   } else {
  //     header.classList.remove("backdrop-blur-sm");
  //     header.classList.add("bg-transparent");
  //   }
  // });
});

// for dropdown
// ? for active on click
// document.addEventListener("DOMContentLoaded", function () {
//   var links = document.querySelectorAll(".dropdown > a");
//   var dropdowns = document.querySelectorAll(".dropdown");

//   document.addEventListener("click", function (event) {
//     var isInsideDropdown = false;

//     dropdowns.forEach(function (dropdown) {
//       if (dropdown.contains(event.target)) {
//         isInsideDropdown = true;
//       }
//     });

//     if (!isInsideDropdown) {
//       dropdowns.forEach(function (dropdown) {
//         dropdown.classList.remove("active");
//       });
//     }
//   });

//   links.forEach(function (link) {
//     link.addEventListener("mouseover", function (event) {
//       event.preventDefault();
//       var parentLi = link.parentElement;
//       dropdowns.forEach(function (dropdown) {
//         if (dropdown !== parentLi) {
//           dropdown.classList.remove("active");
//         }
//       });

//       parentLi.classList.toggle("active");
//     });
//   });
// });
// ? for active on hover
document.addEventListener("DOMContentLoaded", function () {
  let dropdowns = document.querySelectorAll(".dropdown");
  let timeout; 

  function closeAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("active");
    });
  }

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      clearTimeout(timeout);
      closeAllDropdowns();
      dropdown.classList.add("active");
    });

    // Hide dropdown after 0.5 seconds on mouseleave
    dropdown.addEventListener("mouseleave", function () {
      timeout = setTimeout(function () {
        dropdown.classList.remove("active");
      }, 500);
    });
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
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    nav: false,
    dots: true,
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
