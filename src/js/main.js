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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  // loop: true,
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
const bottom = document.querySelectorAll(".hidden-bottom");
bottom.forEach((el) => observer.observe(el));

// const cjenikBtn = document.querySelector('.cjenik-btn')
// cjenikBtn.addEventListener('click', (e)=>{
//   // Create a link element
//   const link = document.createElement('a');

//   // Set the href attribute to the path of the PDF file
//   link.href = 'path/to/cjenik.pdf'; // Update this path to the correct location of your PDF file

//   // Set the download attribute with a value that will be the name of the downloaded file
//   link.download = '/';

//   // Append the link to the body (it needs to be in the document for the click to work)
//   document.body.appendChild(link);

//   // Trigger the click event on the link
//   link.click();

//   // Remove the link from the document
//   document.body.removeChild(link);
// })
