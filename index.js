const navbar = document.querySelector(".nav-b");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// AOS.init();
