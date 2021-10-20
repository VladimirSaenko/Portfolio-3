
"use strict";

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sec = document.querySelector('#sec');
const deg = 6;

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let sc = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${sc}deg)`;
}, 1);
