
"use strict"

let scren = document.getElementById("scren");
let holderup1 = document.getElementById("holderup1");
let holderup2 = document.getElementById("holderup2");
let holderdown1 = document.getElementById("holderdown1");
let holderdown2 = document.getElementById("holderdown2");
let strap1 = document.getElementById("strap1");
let strap2 = document.getElementById("strap2");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let colorstrap1 = document.getElementById("colorstrap1");
let colorstrap2 = document.getElementById("colorstrap2");
let directions = [
    "right",
    "left",
    "top",
    "bottom"
];

function autoRandomColors() {
    scren.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    holderup1.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    holderup2.style.background = holderup1.style.background;
    holderdown1.style.background = holderup1.style.background;
    holderdown2.style.background = holderup1.style.background;
    colorstrap1.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    colorstrap2.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    strap1.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    strap2.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    color1.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    color2.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
}

function getMainColorClock() {
    holderup1.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    holderup2.style.background = holderup1.style.background;
    holderdown1.style.background = holderup1.style.background;
    holderdown2.style.background = holderup1.style.background;
}

function getGradientScreen() {
    scren.style.background = 'linear-gradient(' + getRandomInt(100,360) + 'deg' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
}

function getStrapsColor() {
    strap1.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    ',' + getRandomInt(0,255) + ')' + ')';
    // strap2.style.background = 'linear-gradient(' + `to ${directions[getRandomInt(0,4)]}` + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    // ',' + getRandomInt(0,255) + ')' + ',' + 'rgb(' + getRandomInt(0,255) + ',' + getRandomInt(0,255) + 
    // ',' + getRandomInt(0,255) + ')' + ')';
    strap2.style.background = strap1.style.background;
}

color1.addEventListener('change', function() {
    holderdown1.style.background = color1.value;
    holderup1.style.background = color1.value;
})

color2.addEventListener('change', function() {
    holderdown2.style.background = color2.value;
    holderup2.style.background = color2.value;
})

colorstrap1.addEventListener('change',function() {
    strap1.style.background = colorstrap1.value;
})

colorstrap2.addEventListener('change',function() {
    strap2.style.background = colorstrap2.value;
})

autoRandomColors();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
