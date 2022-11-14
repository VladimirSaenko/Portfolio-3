
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
        case 'Bronze':
            trophyImg.src = "images/bronze-trophy.png";
        break;
        case 'Silver':
            trophyImg.src = "images/silver-trophy.png";
        break;
        case 'Gold':
            trophyImg.src = "images/gold-trophy.png";
        break;
        case 'Platinum':
            trophyImg.src = "images/platinum-trophy.png";
        break;
        default:
            trophyImg.src = "images/bronze-trophy.png";
        break;
    }
}
