
"use strict"

let gradientText = document.getElementById('gradient-text');
let box = document.getElementById("box");
let body = document.body;

box.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
',' + getRandomInt(0,255) + ')' + ')';
body.style.background = box.style.background;
gradientText.value = box.style.background;

function getRandomGradient() {
    box.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
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