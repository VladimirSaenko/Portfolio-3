
"use strict"

let box = document.getElementById("mainBox");
let inputRgb = document.getElementById("mainInput");
let getRandomRGBColorBtn = document.getElementById("btnka");
let infinityColorStreamBtn = document.getElementById("infColorStream");
let copyBtn = document.getElementById("copyBtn");

infinityColorStreamBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
infinityColorStreamBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';

function getRandomRGBColor() {

    box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    inputRgb.value = box.style.background + ';';
    inputRgb.style.color = box.style.background;
    getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    getRandomRGBColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';

    ifEqualyColors();

    if(getRandomRGBColorBtn.style.background == box.style.background ) {

        box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        inputRgb.value = box.style.background + ';';
        inputRgb.style.color = box.style.background;
        getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    }

    if(getRandomRGBColorBtn.style.color == getRandomRGBColorBtn.style.background || getRandomRGBColorBtn.style.color == inputRgb.style.color ||
       getRandomRGBColorBtn.style.color == box.style.background) {

        box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        inputRgb.value = box.style.background + ';';
        inputRgb.style.color = box.style.background;
        getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        getRandomRGBColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    }
}

function ifEqualyColors() {

    if(getRandomRGBColorBtn.style.background == box.style.background ) {

        box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        inputRgb.value = box.style.background + ';';
        inputRgb.style.color = box.style.background;
        getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    }

    if(getRandomRGBColorBtn.style.color == getRandomRGBColorBtn.style.background || getRandomRGBColorBtn.style.color == inputRgb.style.color ||
       getRandomRGBColorBtn.style.color == box.style.background) {

        box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        inputRgb.value = box.style.background + ';';
        inputRgb.style.color = box.style.background;
        getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        getRandomRGBColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    }
}

function activateInfinityStreamColor() {

    setInterval(

        function getRandomRGBColor2() {
            box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
            // inputRgb.value = box.style.background + ';';
            // inputRgb.style.color = box.style.background;
            inputRgb.style.display = "none";
            getRandomRGBColorBtn.style.display = "none";
            infinityColorStreamBtn.style.display = "none";
            let body = document.body;
            body.style.cursor = "none";
        }, 1000
    );
}

function copyRGBColor() {
    inputRgb.select();
    document.execCommand("copy");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomRGBColor();
ifEqualyColors();
setInterval(function infinityStreamInColorText() {
    infinityColorStreamBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    infinityColorStreamBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
}, 1000);
