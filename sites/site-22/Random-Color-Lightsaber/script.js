
"use strict";

function getRandomColor() {
    document.documentElement.style.setProperty('--blade-color', getRandomInt(10,1000));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomColor();
