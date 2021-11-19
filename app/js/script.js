const hamburgerContainer = document.querySelector(".navbar");
const hamburger = document.querySelector(".navbar__hamburger");
const links = document.querySelectorAll(".navbar__list li");

hamburger.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("navbar__clicked");
});
