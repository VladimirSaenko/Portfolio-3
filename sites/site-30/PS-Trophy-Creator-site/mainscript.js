
"use strict";

let trophyIcon = document.getElementById("trophyIcon");
let trophynameInput = document.getElementById("trophynameInp");
let trophytypeInput = document.getElementById("trophytype");
let trophyImg = document.getElementById("trophyImg");
let trophyName = document.getElementById("trophyName");
let mainbutton = document.getElementById("mainbutton");

mainbutton.addEventListener("click", function() {
    if(trophynameInput.value == '') {
        trophyName.innerText = "Empty";
    }
    else {
        trophyName.innerText = trophynameInput.value;
    }
    getTrophyInType();
    trophyIcon.classList.toggle('active');
    setTimeout(() => {
        trophyIcon.classList.toggle('active');
    }, 2500)
})

function getTrophyInType() {
    switch (trophytypeInput.value) {
        case 'Бронза':
            trophyImg.src = "images/bronze-trophy.png";
        break;
        case 'Серебро':
            trophyImg.src = "images/silver-trophy.png";
        break;
        case 'Золото':
            trophyImg.src = "images/gold-trophy.png";
        break;
        case 'Платина':
            trophyImg.src = "images/platinum-trophy.png";
        break;
        default:
            trophyImg.src = "images/bronze-trophy.png";
        break;
    }
}

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
