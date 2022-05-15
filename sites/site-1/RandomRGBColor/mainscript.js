
"use strict";

let mainBox = document.getElementById("mainBox");
let inputRgb = document.getElementById("mainInput");
let getRandomRGBColorBtn = document.getElementById("mainbtn");
let copyBtn = document.getElementById("copyBtn");

function getRandomRGBColor() {
    mainBox.style.background = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    let body = document.body;
    body.style.background = mainBox.style.background;
    inputRgb.value = mainBox.style.background + ';';
    // inputRgb.style.color = mainBox.style.background;
    // getRandomRGBColorBtn.style.background = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    // getRandomRGBColorBtn.style.color = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
}

getRandomRGBColorBtn.addEventListener('click', getRandomRGBColor);

copyBtn.addEventListener('click', () => {
    inputRgb.select();
    document.execCommand("copy");
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomRGBColor();