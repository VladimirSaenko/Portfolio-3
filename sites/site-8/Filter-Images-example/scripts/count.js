
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
    countTitle.textContent = "Знайдено 3 співпадіння";
})

headphone.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Знайдено 4 співпадіння";
})

mobile.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Знайдено 5 співпадіння";
})

sho.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Знайдено 4 співпадіння";
})

watch.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Знайдено 4 співпадіння";
})

computer.addEventListener('click', function() {
    countTitle.style.display = "flex";
    countTitle.style.visibility = "visible";
    countTitle.textContent = "Знайдено 4 співпадіння";
})
