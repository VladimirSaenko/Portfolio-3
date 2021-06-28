
"use strict"

let rgbStreamButton = document.getElementById("rgbparty");
let mainbutton = document.getElementById("mainbtn");
rgbStreamButton.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';

function rgbTextParty() {
    setInterval(function() {
        rgbStreamButton.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    }, 500);
}

function rgbParty() {
    setInterval(function() {
    document.documentElement.style.setProperty('--blade-color', getRandomInt(10,1000));
    },1000);
}

function getRandomColor() {
    document.documentElement.style.setProperty('--blade-color', getRandomInt(10,1000));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomColor();
rgbTextParty();
