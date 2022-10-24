const burger = document.querySelector(".toggler");
const navLinks = document.querySelector(".links");

burger.addEventListener("click", function () {
  navLinks.classList.toggle("links");
});
