$(function () {
  // Load components
  $("#navbar-placeholder").load("./components/navbar.html", function () {
    // Navbar-specific JavaScript goes here

    // Variables for toggle functionality
    const toggleButton = $("#toggleButton");
    const svgIcon = $("#svgIcon");
    const navLinks = $("#navLinks");
    const overlay = $("#overlay");
    let lastScrollTop = 0;

    // Scroll functionality to hide/show navbar
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      const navbar = $("header");

      if (scrollTop > lastScrollTop) {
        navbar.addClass("-translate-y-full");
      } else {
        navbar.removeClass("-translate-y-full");
      }

      lastScrollTop = scrollTop;
    });

    // Toggle button functionality
    toggleButton.on("click", function () {
      navLinks.toggleClass("-translate-x-full");
      svgIcon.toggleClass("active");
      overlay.toggleClass("hidden");
    });

    overlay.on("click", function () {
      navLinks.addClass("-translate-x-full");
      overlay.addClass("hidden");
      svgIcon.removeClass("active");
    });

    // Dropdown functionality
    $(".dropdown").each(function () {
      const dropdown = $(this);
      let timeout;

      function closeAllDropdowns() {
        dropdown
          .find(".drop")
          .addClass("translate-x-full opacity-0 invisible")
          .removeClass("translate-x-0 opacity-100 visible");
      }

      dropdown.on("mouseenter", function () {
        clearTimeout(timeout);
        closeAllDropdowns();
        const dropMenu = dropdown.find(".drop");
        dropMenu
          .removeClass("translate-x-full opacity-0 invisible")
          .addClass("translate-x-0 opacity-100 visible");
      });

      dropdown.on("mouseleave", function () {
        const dropMenu = dropdown.find(".drop");
        timeout = setTimeout(function () {
          dropMenu
            .addClass("translate-x-full opacity-0 invisible")
            .removeClass("translate-x-0 opacity-100 visible");
        }, 500);
      });
    });
  });

  // Load footer and set current year
  $("#footer-placeholder").load("./components/footer.html", function () {
    $("#current-year").text(new Date().getFullYear());
  });
});

// Initialize carousels
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
  ],
});

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

var owl = $(".testimonial.owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 2 },
  },
});

$(".owl-dots").css("display", "none");
