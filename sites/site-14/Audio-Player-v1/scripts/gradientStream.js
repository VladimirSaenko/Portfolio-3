
"use strict";

let body = document.body;
let randomdeg = getRandomInt(0,360);

function letsGoParty() {
    setInterval(function() {
        body.style.background = 'linear-gradient(' + randomdeg + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
        ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
        ',' + getRandomInt(0,255) + ')' + ')';
        body.style.transition = "10s";
    }, 1000)
}

letsGoParty();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
