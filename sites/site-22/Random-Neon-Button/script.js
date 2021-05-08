
"use strict"

let neonButton = document.getElementById("btn");
let userColor = document.getElementById("userColor");
let span1 = document.getElementById("s1");
let span2 = document.getElementById("s2");
let span3 = document.getElementById("s3");
let span4 = document.getElementById("s4");

function getRandomColor() {
    neonButton.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    let randomColor = neonButton.style.color;
    span1.style.background = `linear-gradient(90deg,transparent, ${randomColor})`;
    span2.style.background = `linear-gradient(90deg,transparent, ${randomColor})`;
    span3.style.background = `linear-gradient(90deg,transparent, ${randomColor})`;
    span4.style.background = `linear-gradient(90deg,transparent, ${randomColor})`;
}

function getUserColor() {
    neonButton.style.color = userColor.value;
    let color = userColor.value;
    span1.style.background = `linear-gradient(90deg,transparent, ${color})`;
    span2.style.background = `linear-gradient(90deg,transparent, ${color})`;
    span3.style.background = `linear-gradient(90deg,transparent, ${color})`;
    span4.style.background = `linear-gradient(90deg,transparent, ${color})`;
    if(userColor.value == "#000000") {
        let color2 = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        neonButton.style.color = color2;
        span1.style.background = `linear-gradient(90deg,transparent, ${color2})`;
        span2.style.background = `linear-gradient(90deg,transparent, ${color2})`;
        span3.style.background = `linear-gradient(90deg,transparent, ${color2})`;
        span4.style.background = `linear-gradient(90deg,transparent, ${color2})`;
    }
}

neonButton.addEventListener('mousemove', function() {
    neonButton.style.background = userColor.value;
    let color3 = userColor.value;
    neonButton.style.color = "black";
    neonButton.style.boxShadow = `0 0 5px ${color3}, 0 0 25px ${color3}, 0 0 50px ${color3}, 0 0 200px ${color3}`;
    if(userColor.value == "#000000") {
        color3 = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        neonButton.style.color = color3;
        span1.style.background = `linear-gradient(90deg,transparent, ${color3})`;
        span2.style.background = `linear-gradient(90deg,transparent, ${color3})`;
        span3.style.background = `linear-gradient(90deg,transparent, ${color3})`;
        span4.style.background = `linear-gradient(90deg,transparent, ${color3})`;
    }

})

neonButton.addEventListener('mouseleave', function() {
    neonButton.style.background = "black";
    neonButton.style.color = userColor.value;
    neonButton.style.boxShadow = "none";
})

getRandomColor();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}