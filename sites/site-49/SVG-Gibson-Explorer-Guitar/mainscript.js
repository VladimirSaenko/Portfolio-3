
"use strict";

let flowers = document.getElementById("flowers");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

// color1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
// flowers.style.fill = color1.style.fill;
// color2.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;

input1.addEventListener('input', function() {
    color1.style.fill = input1.value;
    flowers.style.fill = input1.value;
    document.body.style.background = input1.value;
})

input2.addEventListener('input', function() {
    color2.style.fill = input2.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}