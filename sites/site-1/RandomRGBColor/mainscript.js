
"use strict";

let box = document.getElementById("mainBox");
let inputRgb = document.getElementById("mainInput");
let getRandomRGBColorBtn = document.getElementById("btnka");
let infinityColorStreamBtn = document.getElementById("infColorStream");
let copyBtn = document.getElementById("copyBtn");
let userColorsList = document.getElementById("userColorInpsList");
let inputUserColor1 = document.getElementById("userColor1");
let inputUserColor2 = document.getElementById("userColor2");
let inputUserColor3 = document.getElementById("userColor3");
let userColorBtn = document.getElementById("userColorBtn");

infinityColorStreamBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
infinityColorStreamBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
userColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
userColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';

function getRandomRGBColor() {
    box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    inputRgb.value = box.style.background + ';';
    inputRgb.style.color = box.style.background;
    getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    getRandomRGBColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    userColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
    userColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';

    ifEqualyColors();

    if(userColorsList.style.display == "flex" && inputRgb.style.display == "none" && copyBtn.style.display == "none") {
        userColorsList.style.display = "none";
        inputUserColor1.style.display = "none";
        inputUserColor2.style.display = "none";
        inputUserColor3.style.display = "none";
        inputRgb.style.display = "flex";
        copyBtn.style.display = "flex";
    }
}

function ifEqualyColors() {
    if(getRandomRGBColorBtn.style.background == box.style.background ) {
        box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        inputRgb.value = box.style.background + ';';
        inputRgb.style.color = box.style.background;

        getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        if(userColorBtn.style.background == getRandomRGBColorBtn.style.background || userColorBtn.style.background == getRandomRGBColorBtn.style.color ||
            userColorBtn.style.background == inputRgb.style.color || userColorBtn.style.background == userColorBtn.style.color ||
            userColorBtn.style.color == getRandomRGBColorBtn.style.background || userColorBtn.style.color == getRandomRGBColorBtn.style.background ||
            userColorBtn.style.color == inputRgb.style.color || userColorBtn.style.color == inputRgb.style.background) {
                userColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
                userColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        }
    }

    if(getRandomRGBColorBtn.style.color == getRandomRGBColorBtn.style.background || getRandomRGBColorBtn.style.color == inputRgb.style.color ||
       getRandomRGBColorBtn.style.color == box.style.background) {
        box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        inputRgb.value = box.style.background + ';';
        inputRgb.style.color = box.style.background;
        getRandomRGBColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        getRandomRGBColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        
        if(userColorBtn.style.background == getRandomRGBColorBtn.style.background || userColorBtn.style.background == getRandomRGBColorBtn.style.color ||
            userColorBtn.style.background == inputRgb.style.color || userColorBtn.style.background == userColorBtn.style.color ||
            userColorBtn.style.color == getRandomRGBColorBtn.style.background || userColorBtn.style.color == getRandomRGBColorBtn.style.background ||
            userColorBtn.style.color == inputRgb.style.color || userColorBtn.style.color == inputRgb.style.background) {
                userColorBtn.style.color = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
                userColorBtn.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
        }
    }
}

function activateInfinityStreamColor() {
    setInterval(
        function getRandomRGBColor2() {
            box.style.background = 'rgb(' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ', ' + getRandomInt(0,255) + ')';
            inputRgb.style.display = "none";
            getRandomRGBColorBtn.style.display = "none";
            infinityColorStreamBtn.style.display = "none";
            copyBtn.style.display = "none";
            userColorBtn.style.display = "none";
            let body = document.body;
            body.style.cursor = "none";
            if(userColorsList.style.display == "flex") {
                userColorsList.style.display = "none";
                inputUserColor1.style.display = "none";
                inputUserColor2.style.display = "none";
                inputUserColor3.style.display = "none";
            }
        }, 1000
    );
}

function activateUserRGBColor() {
    userColorsList.style.display = "flex";
    inputUserColor1.style.display = "flex";
    inputUserColor2.style.display = "flex";
    inputUserColor3.style.display = "flex";
    inputRgb.style.display = "none";
    copyBtn.style.display = "none";
    box.style.background = 'rgb(' + 0 + ', ' +  0  + ', ' +  0  + ')';

    if(inputUserColor1.value > 0 || inputUserColor2.value > 0 || inputUserColor3.value > 0) {
        box.style.background = 'rgb(' + inputUserColor1.value + ', ' + inputUserColor2.value + ', ' + inputUserColor3.value + ')';
    }
}

function getUserRGBColor() {
    box.style.background = 'rgb(' + inputUserColor1.value + ', ' + inputUserColor2.value + ', ' + inputUserColor3.value + ')';
}

function ifMoreOrLessValueUserColor() {
    if(inputUserColor1.value < 0 || inputUserColor1.value > 255 ) {
        inputUserColor1.style.color = "red";

        if(inputUserColor2.value < 0 || inputUserColor2.value > 255 ) {
            inputUserColor2.style.color = "red";
        }

        if(inputUserColor3.value < 0 || inputUserColor3.value > 255 ) {
            inputUserColor3.style.color = "red";
        }
    }

    if(inputUserColor2.value < 0 || inputUserColor2.value > 255 ) {
        inputUserColor2.style.color = "red";
        if(inputUserColor2.value < 0 || inputUserColor2.value > 255 ) {
            inputUserColor2.style.color = "red";
        }

        if(inputUserColor3.value < 0 || inputUserColor3.value > 255 ) {
            inputUserColor3.style.color = "red";
        }

    }

    if(inputUserColor3.value < 0 || inputUserColor3.value > 255 ) {
        inputUserColor3.style.color = "red";

        if(inputUserColor2.value < 0 || inputUserColor2.value > 255 ) {
            inputUserColor2.style.color = "red";
        }

        if(inputUserColor3.value < 0 || inputUserColor3.value > 255 ) {
            inputUserColor3.style.color = "red";
        }
    }  

    if(inputUserColor1.value > 0 && inputUserColor1.value <= 255) {
        inputUserColor1.style.color = "black";
    }

    if(inputUserColor2.value > 0 && inputUserColor2.value <= 255) {
        inputUserColor2.style.color = "black";
    }

    if(inputUserColor3.value > 0 && inputUserColor3.value <= 255) {
        inputUserColor3.style.color = "black";
    }
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
