"use strict";

const navLinks = document.querySelector(".nav__links");

navLinks.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("features__link") ||
    e.target.classList.contains("company__link")
  ) {
    const dropdown = e.target.dataset.dropdown;
    document.querySelector(`.dropdown--${dropdown}`).classList.toggle("hidden");
  }
});
