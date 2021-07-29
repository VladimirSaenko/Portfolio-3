
"use strict";

let countTittle = document.getElementById("count");
let allImages = document.getElementById("all-images");
let camera = document.getElementById("camera");
let headphone = document.getElementById("headphone");
let mobile = document.getElementById("mobile");
let sho = document.getElementById("shoe");
let watch = document.getElementById("watch");
let computer = document.getElementById("computer");

countTittle.textContent = "";

allImages.addEventListener('click', function() {
    countTittle.textContent = "";
    countTittle.style.display = "none";
    countTittle.style.visibility = "hidden";
})

camera.addEventListener('click', function() {
    countTittle.style.display = "flex";
    countTittle.style.visibility = "visible";
    countTittle.textContent = "Найдено 3 совпадений";
})

headphone.addEventListener('click', function() {
    countTittle.style.display = "flex";
    countTittle.style.visibility = "visible";
    countTittle.textContent = "Найдено 4 совпадений";
})

mobile.addEventListener('click', function() {
    countTittle.style.display = "flex";
    countTittle.style.visibility = "visible";
    countTittle.textContent = "Найдено 5 совпадений";
})

sho.addEventListener('click', function() {
    countTittle.style.display = "flex";
    countTittle.style.visibility = "visible";
    countTittle.textContent = "Найдено 4 совпадения";
})

watch.addEventListener('click', function() {
    countTittle.style.display = "flex";
    countTittle.style.visibility = "visible";
    countTittle.textContent = "Найдено 4 совпадения";
})

computer.addEventListener('click', function() {
    countTittle.style.display = "flex";
    countTittle.style.visibility = "visible";
    countTittle.textContent = "Найдено 4 совпадения";
})
