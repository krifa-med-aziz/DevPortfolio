"use strict";
/////////// Section scrolling
const allSections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".link");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const clicked = e.target.closest(".link");
    const id = clicked.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavor: "smooth" });
  });
});
/////////// SrollUp Button
const scrolUpBtn = document.querySelector(".ScrollUp");
const navbar = document.querySelector(".navbar");
scrolUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  navbar.scrollIntoView({ behavior: "smooth" });
});
const stikyBtn = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    scrolUpBtn.classList.remove("hide");
    scrolUpBtn.classList.add("show");
  } else {
    scrolUpBtn.classList.remove("show");
    scrolUpBtn.classList.add("hide");
  }
};
const navbarObserver = new IntersectionObserver(stikyBtn, {
  root: null,
  threshold: 0,
  rootMargin: `${navbar.getBoundingClientRect().height}px`,
});
navbarObserver.observe(navbar);
////////////// section revealing on scrolling
const sectionOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section__hidden");
    observer.unobserve(entry.target);
  });
};
const sectionObserver = new IntersectionObserver(sectionOnScroll, {
  root: null,
  threshold: 0.2,
});
allSections.forEach((section) => {
  section.classList.add("section__hidden");
  sectionObserver.observe(section);
});
