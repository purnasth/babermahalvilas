$(function () {
  // Load components
  $("#navbar-component").load("./components/navbar.html", function () {
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
  $("#footer-component").load("./components/footer.html", function () {
    $("#current-year").text(new Date().getFullYear());
  });

  $("#whatsapp-component").load("./components/whatsapp.html");

  $("#revisited-component").load("./components/revisited.html");
});

// lenis smooth scroll
$(function () {
  const lenis = new Lenis({
    duration: 2.5, // Slower duration (increase this value for slower scroll)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    smoothWheel: true,
    wheelMultiplier: 0.85, // Reduce the scroll speed (lower values slow it down)
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
