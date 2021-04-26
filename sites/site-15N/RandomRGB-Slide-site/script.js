
"use strict"

let color1 = document.getElementById('c1');
let color2 = document.getElementById('c2');
let color3 = document.getElementById('c3');
let color4 = document.getElementById('c4');
let color5 = document.getElementById('c5');
let lorem1 = document.getElementById('p1');
let lorem2 = document.getElementById('p2');
let lorem3 = document.getElementById('p3');
let lorem4 = document.getElementById('p4');
let lorem5 = document.getElementById('p5');

color1.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + "url(images/bg1.jpg)";
color2.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + "url(images/bg2.jpg)";
color3.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + "url(images/bg3.jpg)";
color4.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + "url(images/bg4.jpg)";
color5.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + "url(images/bg5.jpg)";

const clip = document.querySelectorAll('p');

for(let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('click', function(e) {
        clip[i].style.color = "white";
    });
    clip[i].addEventListener('dblclick', function(e) {
        clip[i].style.color = "black";
    });
}

function getColor1() {
    color1.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + `url(images/bg${getRandomInt(1,5)}.jpg)`;
}

function getColor2() {
    color2.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + `url(images/bg${getRandomInt(1,5)}.jpg)`;
}

function getColor3() {
    color3.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + `url(images/bg${getRandomInt(1,5)}.jpg)`;
}

function getColor4() {
    color4.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + `url(images/bg${getRandomInt(1,5)}.jpg)`;
}

function getColor5() {
    color5.style.background = "rgb(" + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + ")" + `url(images/bg${getRandomInt(1,5)}.jpg)`;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}