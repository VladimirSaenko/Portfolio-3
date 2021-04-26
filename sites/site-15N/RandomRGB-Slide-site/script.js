
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
let titleSection1 = document.getElementById("titleSection1");
let titleSection2 = document.getElementById("titleSection2");
let titleSection3 = document.getElementById("titleSection3");
let titleSection4 = document.getElementById("titleSection4");
let titleSection5 = document.getElementById("titleSection5");


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

lorem1.addEventListener('click', function() {
    if(lorem1.style.color == "white") {
        titleSection1.style.color = "white";
    }
})

lorem1.addEventListener('dblclick', function() {
    if(lorem1.style.color == "black") {
        titleSection1.style.color = "black";
    }
})

lorem2.addEventListener('click', function() {
    if(lorem2.style.color == "white") {
        titleSection2.style.color = "white";
    }
})

lorem2.addEventListener('dblclick', function() {
    if(lorem2.style.color == "black") {
        titleSection2.style.color = "black";
    }
})

lorem3.addEventListener('click', function() {
    if(lorem3.style.color == "white") {
        titleSection3.style.color = "white";
    }
})

lorem3.addEventListener('dblclick', function() {
    if(lorem3.style.color == "black") {
        titleSection3.style.color = "black";
    }
})

lorem4.addEventListener('click', function() {
    if(lorem4.style.color == "white") {
        titleSection4.style.color = "white";
    }
})

lorem4.addEventListener('dblclick', function() {
    if(lorem4.style.color == "black") {
        titleSection4.style.color = "black";
    }
})

lorem5.addEventListener('click', function() {
    if(lorem5.style.color == "white") {
        titleSection5.style.color = "white";
    }
})

lorem5.addEventListener('dblclick', function() {
    if(lorem5.style.color == "black") {
        titleSection5.style.color = "black";
    }
})

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