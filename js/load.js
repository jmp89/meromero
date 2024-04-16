"use strict";

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show");
//         observer.unobserve(entry.target); // Deja de observar este elemento una vez que se ha vuelto visible
//       } else {
//         entry.target.classList.remove("show");
//       }
//     });
//   },
//   { root: null, rootMargin: "0px", threshold: 0.5 }
// );

// const sections = document.querySelectorAll("section");

// sections.forEach((section) => {
//   observer.observe(section);
// });

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Deja de observar este elemento una vez que se ha vuelto visible
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddens = document.querySelectorAll(".hidden");
hiddens.forEach((val) => {
  observer.observe(val);
});
