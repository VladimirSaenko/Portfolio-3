
"use strict";

// let lightsabersound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/18515/Lightsaber_sound_effect_-_medium_(mp3cut.net).mp3');
// let saberOn = new Audio("http://www.jarrodyellets.com/sounds/saberOn.mp3");
// let saberOff = new Audio("http://www.jarrodyellets.com/sounds/saberOff.mp3");
// lightsabersound.loop = true;
// lightsabersound.volume = 0.25;
// saberOn.volume = 0.25;
// saberOff.volume = 0.25;
// let activeLightsaber = true;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    document.documentElement.style.setProperty('--blade-color', `${getRandomInt(10, 1000)}`);
}

getRandomColor();

// document.getElementById("lightsaberhand").addEventListener('click', () => {
//     if(activeLightsaber == true) {
//         setTimeout(function(){
//             saberOff.pause();
//             saberOff.currentTime = 0;
//             saberOn.play();
//         }, 1);
//         setTimeout(function() {
//             lightsabersound.play();
//         }, 300);
//     }
//     else if(activeLightsaber == false) {
//         lightsabersound.pause();
//         saberOn.pause();
//         saberOn.currentTime = 0;
//         lightsabersound.currentTime = 0;
//         saberOff.play();
//     }
//     activeLightsaber = !activeLightsaber;
// })