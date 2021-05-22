
"use strict"

let gradientText = document.getElementById('gradient-text');
let box = document.getElementById("box");
let body = document.body;
let directions = [
    "right",
    "left",
    "top",
    "bottom"
];
box.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
',' + getRandomInt(0,255) + ')' + ')';
// Новый способ
body.style.background = box.style.background;
gradientText.value = box.style.background;
// box.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
// ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
// ',' + getRandomInt(0,255) + ')' + ')';
// Старый способ


function getRandomGradient() {
    // box.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    // ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    // ',' + getRandomInt(0,255) + ')' + ')';
    // Старый способ
    box.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    // Новый способ, оба отлично работают
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