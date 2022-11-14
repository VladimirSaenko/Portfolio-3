
"use strict";

let randomHat = getRandomInt(1, 34);
let hat = document.getElementById("hat"); //шляпа
hat.src = `hats/${randomHat}.webp`;
function getHat() {
    setInterval(function() {
        randomHat = getRandomInt(1, 34);
        hat.src = `hats/${randomHat}.webp`;
    }, 5000);
}

getHat();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
