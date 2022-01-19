
"use strict";

function getHat() {
    setInterval(function() {
        randomHat = getRandomInt(1,35);
        hat.src = `hats/${randomHat}.png`;
    }, 5000);
}

getHat();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
