
"use strict";

let gradientText = document.getElementById('gradient-text');
let box = document.getElementById("box");
let body = document.body;
let createGradientButton = document.getElementById("createbtn");
let copyButton = document.getElementById("copybtn");

// let directions = [
//     "right",
//     "left",
//     "top",
//     "bottom"
// ];

function getRandomGradient() {
    box.style.background = `linear-gradient(${getRandomInt(0, 350)}deg, rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}) 
    ${getRandomInt(0, 40)}%, rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}) ${getRandomInt(40, 100)}%)`;
    body.style.background = box.style.background;
    gradientText.value = box.style.background;
}

getRandomGradient();

createGradientButton.addEventListener('click', getRandomGradient);

copyButton.addEventListener('click', () => {
    gradientText.select();
    document.execCommand("copy");
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
