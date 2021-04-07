
"use strict"

const stars = document.querySelectorAll("#star");

stars.forEach(star => {
    let duration = Math.random() * (0.4) + 1.3;
    // console.log(duration);
    star.style.animation = `stars ${duration}s linear infinite alternate-reverse`;
});

window.addEventListener('load', function() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
})