
"use strict";

let trophyIcon = document.getElementById("trophyIcon");
let trophynameInput = document.getElementById("trophynameInp");
let trophytypeInput = document.getElementById("trophytype");
let trophyImg = document.getElementById("trophyImg");
let trophyName = document.getElementById("trophyName");
let mainbutton = document.getElementById("mainbutton");
trophynameInput.focus();
// trophytypeInput.focus();

mainbutton.addEventListener("click", function() {
    trophyName.innerText = trophynameInput.value;
    getTrophyInType();
    trophyIcon.classList.add('active');

    if(trophynameInput.value == '') {
        trophyName.innerText = "Empty";
    }
})

function getTrophyInType() {
    if(trophytypeInput.value == "") {
        let random = getRandomInt(1,5);

        if(random == 1 || random == 5) {
            trophyImg.src = "images/bronze-trophy.png";
        }

        if(random == 2) {
            trophyImg.src = "images/silver-trophy.png";
        }

        if(random == 3) {
            trophyImg.src = "images/gold-trophy.png";
        }
        
        if(random == 4) {
            trophyImg.src = "images/platinum-trophy.png";
        }
    }

    else {
        if (trophytypeInput.value == "Бронза") {
            trophyImg.src = "images/bronze-trophy.png";
        }

        if (trophytypeInput.value == "Серебро") {
            trophyImg.src = "images/silver-trophy.png";
        }

        if (trophytypeInput.value == "Золото") {
            trophyImg.src = "images/gold-trophy.png";
        }

        if (trophytypeInput.value == "Платина") {
            trophyImg.src = "images/platinum-trophy.png";
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}