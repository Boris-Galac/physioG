///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});
const navLink = document.querySelectorAll(".header .nav__link");
navLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  });
});

// swiper testimonials

var swiper = new Swiper(".testimoial-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper gallery

var swiper = new Swiper(".gallery-swiper", {
  autoplay: true,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///////// INTERSECTION OBSERVER

// from left stagger

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);
// left
const left = document.querySelectorAll(".hidden-left");
left.forEach((el) => observer.observe(el));
// right
const right = document.querySelectorAll(".hidden-right");
right.forEach((el) => observer.observe(el));
// bottom
const fade = document.querySelectorAll(".hidden-fade");
fade.forEach((el) => observer.observe(el));

//// BACK TO TOP

const backToTopbtn = document.querySelector(".back-to-top-btn");

backToTopbtn.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    backToTopbtn.setAttribute("data-visible", "true");
  } else backToTopbtn.setAttribute("data-visible", "false");
});

/////////// HIDE HEADER ON SCROLL

let lastScrollTop = 0;
let navbar = document.querySelector(".header");
let navbarHeight = document.querySelector(".header").scrollHeight;
console.log(navbarHeight);
window.addEventListener("scroll", (e) => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
