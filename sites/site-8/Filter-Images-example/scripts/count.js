
"use strict";

let countTitle = document.getElementById("count");
let allImages = document.getElementById("all-images");
let camera = document.getElementById("camera");
let headphone = document.getElementById("headphone");
let mobile = document.getElementById("mobile");
let sho = document.getElementById("shoe");
let watch = document.getElementById("watch");
let computer = document.getElementById("computer");

countTitle.textContent = "";

allImages.addEventListener('click', function() {
    countTitle.textContent = "";
    countTitle.style.display = "none";
    countTitle.style.visibility = "hidden";
})

camera.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Найдено 3 совпадений";
})

headphone.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Найдено 4 совпадений";
})

mobile.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Найдено 5 совпадений";
})

sho.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Найдено 4 совпадения";
})

watch.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Найдено 4 совпадения";
})

computer.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Найдено 4 совпадения";
})
