
"use strict"

let randomColor1 = 'rgb(' + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")";
let randomColor2 = 'rgb(' + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")";
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
document.documentElement.style.setProperty('--one-color', `${randomColor1}`);
document.documentElement.style.setProperty('--second-color', `${randomColor2}`);

function getRandomColors() {
    randomColor1 = 'rgb(' + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")";
    randomColor2 = 'rgb(' + getRandomInt(0,255) + "," + getRandomInt(0,255) + "," + getRandomInt(0,255) + ")";
    document.documentElement.style.setProperty('--one-color', `${randomColor1}`);
    document.documentElement.style.setProperty('--second-color', `${randomColor2}`);
}

function getColor1() {
    document.documentElement.style.setProperty('--one-color', `${color1.value}`);
    if(color1.value == '#000000') {
        document.documentElement.style.setProperty('--one-color', `${randomColor1}`);
    }
}

function getColor2() {
    document.documentElement.style.setProperty('--second-color', `${color2.value}`);
    if(color2.value == '#000000') {
        document.documentElement.style.setProperty('--second-color', `${randomColor2}`);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
