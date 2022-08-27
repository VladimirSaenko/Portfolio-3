
"use strict";

let mainBox = document.getElementById("mainBox");
let inputHSL = document.getElementById("mainInput");
let randomButton = document.getElementById("mainbtn");
let copyBtn = document.getElementById("copyBtn");
let body = document.body;
let hue, saturation, lightness = 0;

function getRandomHSLColor() {
    hue = getRandomInt(0, 365);
    saturation = getRandomInt(0, 100);
    lightness = getRandomInt(0, 100);
    document.documentElement.style.setProperty('--hue', `${hue}`);
    document.documentElement.style.setProperty('--saturation', `${saturation}`);
    document.documentElement.style.setProperty('--lightness', `${lightness}`);
    body.style.background = mainBox.style.background;
    inputHSL.value = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

randomButton.addEventListener('click', getRandomHSLColor);

copyBtn.addEventListener('click', () => {
    inputHSL.select();
    document.execCommand("copy");
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomHSLColor();