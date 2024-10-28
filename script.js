"use strict";

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-slides img");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const offset = -currentIndex * 100;

  document.querySelector(
    ".carousel-slides"
  ).style.transform = `translateX(${offset}%)`;
}