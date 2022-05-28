
"use strict";

const stars = document.querySelectorAll("#star");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');

stars.forEach(star => {
    let duration = Math.random() * (0.4) + 1.3;
    // console.log(duration);
    star.style.animation = `stars ${duration}s linear infinite alternate-reverse`;
});

window.addEventListener('load', function() {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");

    setTimeout(()=> {
        popup.style.display = "block";
    }, 7000);

    setInterval(()=> {
        popup.style.display = "block";
    }, 17500);

});

close.addEventListener('click', function() {
    popup.style.display = "none";
});
