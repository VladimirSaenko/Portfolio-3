
"use strict";

let box = document.getElementById("mainBox");
let inputRgb = document.getElementById("mainInput");
let getRandomRGBColorBtn = document.getElementById("btnka");
let infinityColorStreamBtn = document.getElementById("infColorStream");
let copyBtn = document.getElementById("copyBtn");
let userColorsList = document.getElementById("userColorInpsList");
let InputUserColor1 = document.getElementById("userColor1");
let InputUserColor2 = document.getElementById("userColor2");
let InputUserColor3 = document.getElementById("userColor3");
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
        InputUserColor1.style.display = "none";
        InputUserColor2.style.display = "none";
        InputUserColor3.style.display = "none";
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
                InputUserColor1.style.display = "none";
                InputUserColor2.style.display = "none";
                InputUserColor3.style.display = "none";
            }
        }, 1000
    );
}

function activateUserRGBColor() {
    userColorsList.style.display = "flex";
    InputUserColor1.style.display = "flex";
    InputUserColor2.style.display = "flex";
    InputUserColor3.style.display = "flex";
    inputRgb.style.display = "none";
    copyBtn.style.display = "none";
    box.style.background = 'rgb(' + 0 + ', ' +  0  + ', ' +  0  + ')';

    if(InputUserColor1.value > 0 || InputUserColor2.value > 0 || InputUserColor3.value > 0) {
        box.style.background = 'rgb(' + InputUserColor1.value + ', ' + InputUserColor2.value + ', ' + InputUserColor3.value + ')';
    }
}

function getUserRGBColor() {
    box.style.background = 'rgb(' + InputUserColor1.value + ', ' + InputUserColor2.value + ', ' + InputUserColor3.value + ')';
}

function ifMoreOrLessValueUserColor() {
    if(InputUserColor1.value < 0 || InputUserColor1.value > 255 ) {
        InputUserColor1.style.color = "red";

        if(InputUserColor2.value < 0 || InputUserColor2.value > 255 ) {
            InputUserColor2.style.color = "red";
        }

        if(InputUserColor3.value < 0 || InputUserColor3.value > 255 ) {
            InputUserColor3.style.color = "red";
        }
    }

    if(InputUserColor2.value < 0 || InputUserColor2.value > 255 ) {
        InputUserColor2.style.color = "red";
        if(InputUserColor2.value < 0 || InputUserColor2.value > 255 ) {
            InputUserColor2.style.color = "red";
        }

        if(InputUserColor3.value < 0 || InputUserColor3.value > 255 ) {
            InputUserColor3.style.color = "red";
        }

    }

    if(InputUserColor3.value < 0 || InputUserColor3.value > 255 ) {
        InputUserColor3.style.color = "red";

        if(InputUserColor2.value < 0 || InputUserColor2.value > 255 ) {
            InputUserColor2.style.color = "red";
        }

        if(InputUserColor3.value < 0 || InputUserColor3.value > 255 ) {
            InputUserColor3.style.color = "red";
        }
    }  

    if(InputUserColor1.value > 0 && InputUserColor1.value <= 255) {
        InputUserColor1.style.color = "black";
    }

    if(InputUserColor2.value > 0 && InputUserColor2.value <= 255) {
        InputUserColor2.style.color = "black";
    }

    if(InputUserColor3.value > 0 && InputUserColor3.value <= 255) {
        InputUserColor3.style.color = "black";
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
