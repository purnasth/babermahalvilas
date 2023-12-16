// navbar links
document.addEventListener("DOMContentLoaded", function () {
  const roomDropdownBtn = document.getElementById("roomDropdownBtn");
  const roomDropdownContent = document.getElementById("roomDropdownContent");
  const aboutDropdownBtn = document.getElementById("aboutDropdownBtn");
  const aboutDropdownContent = document.getElementById("aboutDropdownContent");
  const diningDropdownBtn = document.getElementById("diningDropdownBtn");
  const diningDropdownContent = document.getElementById(
    "diningDropdownContent"
  );
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.querySelector(".lg\\:flex");

  roomDropdownBtn.addEventListener("click", () => {
    roomDropdownContent.classList.toggle("hidden");
  });

  aboutDropdownBtn.addEventListener("click", () => {
    aboutDropdownContent.classList.toggle("hidden");
  });

  diningDropdownBtn.addEventListener("click", () => {
    diningDropdownContent.classList.toggle("hidden");
  });

  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });

  // Close dropdown and mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !roomDropdownBtn.contains(event.target) &&
      !roomDropdownContent.contains(event.target)
    ) {
      roomDropdownContent.classList.add("hidden");
    }

    if (
      !aboutDropdownBtn.contains(event.target) &&
      !aboutDropdownContent.contains(event.target)
    ) {
      aboutDropdownContent.classList.add("hidden");
    }

    if (
      !diningDropdownBtn.contains(event.target) &&
      !diningDropdownContent.contains(event.target)
    ) {
      diningDropdownContent.classList.add("hidden");
    }

    if (
      !mobileMenuBtn.contains(event.target) &&
      !navLinks.contains(event.target) &&
      !event.target.classList.contains("lg\\:flex")
    ) {
      navLinks.classList.add("hidden");
    }
  });
});

// hero carousel
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

  setInterval(continuousZoom, 1000);

  slickElement.slick({
    autoplay: true,
    autoplaySpeed: 2000,
    // dots: true,
    prevArrow: '<button type="button" class="slick-prev">&#9665;</button>',
    nextArrow: '<button type="button" class="slick-next">&#9655;</button>',
    speed: 800, // Set the transition duration
    fade: true, // Enable fade transition
    cssEase: "cubic-bezier(0.455, 0.03, 0.515, 0.955)", // Use a custom easing function for smoother transition
    swipe: true, // Enable swipe navigation
    touchMove: true, // Enable touch move
  });
});
