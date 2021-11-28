
"use strict";

let gradientText = document.getElementById('gradient-text');
let box = document.getElementById("box");
let body = document.body;
let directions = [
    "right",
    "left",
    "top",
    "bottom"
];
box.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0, 4)]}` + ',' + 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + 
',' + getRandomInt(0, 255) + ')' + ',' + 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + 
',' + getRandomInt(0, 255) + ')' + ')';
body.style.background = box.style.background;
gradientText.value = box.style.background;

function getRandomGradient() {
    box.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0, 4)]}` + ',' + 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + 
    ',' + getRandomInt(0, 255) + ')' + ',' + 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + 
    ',' + getRandomInt(0, 255) + ')' + ')';
    body.style.background = box.style.background;
    gradientText.value = box.style.background;
}

function copyPassword() {
    gradientText.select();
    document.execCommand("copy");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
