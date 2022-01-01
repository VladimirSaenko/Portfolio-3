
"use strict";

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let hamb1 = document.getElementById("hamb1");
let hamb2 = document.getElementById("hamb2");
let griff = document.getElementById("griff");
let electric1 = document.getElementById("electric1");
let electric2 = document.getElementById("electric2");
let griffHand = document.getElementById("griffhand");
let inputMain = document.getElementById("inputMain");
let inputPad = document.getElementById("inputPad");
let inputGriff1 = document.getElementById("inputGriff1");
let inputGriff2 = document.getElementById("inputGriff2");
let inputElectrics = document.getElementById("inputElectric");

hamb1.style.fill = color2.style.fill;
hamb2.style.fill = color2.style.fill;
// color1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
// color2.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
// griff.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
// griffHand.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;

document.getElementById("btn").addEventListener('click', function() {
    color1.style.fill = inputMain.value;
    color2.style.fill = inputPad.value;
    hamb1.style.fill = color2.style.fill;
    hamb2.style.fill = color2.style.fill;
    griff.style.fill = inputGriff1.value;
    griffHand.style.fill = inputGriff2.value;
    electric1.style.fill = inputElectrics.value;
    electric2.style.fill = electric1.style.fill;
    // electric2.style.fill = inputElectrics.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}