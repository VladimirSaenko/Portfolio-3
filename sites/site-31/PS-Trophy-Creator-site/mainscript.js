
"use strict";

let trophyIcon = document.getElementById("trophyIcon");
let trophynameInput = document.getElementById("trophynameInp");
let trophytypeInput = document.getElementById("trophytype");
let trophyImg = document.getElementById("trophyImg");
let trophyName = document.getElementById("trophyName");
let mainbutton = document.getElementById("mainbutton");
let isActive = false;

mainbutton.addEventListener("click", function() {
    if(isActive == false) {
        setTimeout(function() {
            trophyIcon.style.display = "flex";
            trophyIcon.style.animation = "uprise 0.5s forwards";
            trophyName.innerText = trophynameInput.value;
            if(trophynameInput.value == '') {
                trophyName.innerText = "empty";
            }
            getTrophyInType();
        }, 500);
    }
    if(!isActive) {
        trophyIcon.style.display = "none";
        trophyIcon.style.animation = "returnUprise 0.5s forwards";
        trophyName.innerText = "";
        trophyImg.src = "";
        setTimeout(function() {
            trophyIcon.style.display = "flex";
            trophyIcon.style.animation = "uprise 0.5s forwards";
            trophyName.innerText = trophynameInput.value;
            if(trophynameInput.value == '') {
                trophyName.innerText = "empty";
            }
            getTrophyInType();
        }, 500);
    }
    isActive = !isActive;
})

function getTrophyInType() {
    if(trophytypeInput.value == "") {
        let random = getRandomInt(1,4);
        if(random == 1) {
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
        if(trophytypeInput.value == "Бронза") {
            trophyImg.src = "images/bronze-trophy.png";
        }
        if(trophytypeInput.value == "Серебро") {
            trophyImg.src = "images/silver-trophy.png";
        }
        if(trophytypeInput.value == "Золото") {
            trophyImg.src = "images/gold-trophy.png";
        }
        if(trophytypeInput.value == "Платина") {
            trophyImg.src = "images/platinum-trophy.png";
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
