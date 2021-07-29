
"use strict";

let planet = document.getElementById("planet");
let planetName = document.getElementById("title");
let renameInput = document.getElementById("userText");
let resizePlanetInput = document.getElementById("resize");
let rotationPlanetInput = document.getElementById("rotation");
let planetNameLenght = 3;
// let planetNumberLenght = 1;
let randomPlanetName = "";
let randomPlanetNumber = "";
let planetNames = [
    'aba','far','corus','nar','satur','pluto','uran', 'tatoo',
    'mar','adu','az','ak','to','kor','aki','aku','ban','al','zoc',
    'am','ray','ana','prime','an','ar','val','bal','lok',
    'bir','vi','vo','vul', 'lor', 'mir', 'land', 'mor'
];
let planetNumbers = [
    'III','II','I','IV','V','VI','VII',
    'VIII','IX','X','XI','XII','XIV','XV','XVI',
    'XVII','XVIII','XIX','XX','XIII'
];

planetName.innerHTML = "";
resizePlanetInput.value = "";
planet.style.animationDuration = getRandomInt(1,5) + 's';

function resizePlanet() {
    planet.style.width = resizePlanetInput.value + 'px';
    planet.style.height = resizePlanet.value + 'px';
    planet.style.transform = 'rotate(' + getRandomInt(30,360) + 'deg)';
    if(resizePlanetInput.value == "") {
        planet.style.width = 395 + 'px';
        planet.style.height = 395 + 'px';
        planet.style.transform = 'rotate(' + 30 + 'deg)';
        if(window.matchMedia('screen and (min-width: 300px) and (max-width: 800px)')) {
            planet.style.width = 300 + 'px';
            planet.style.height = 300 + 'px';
            planet.style.transform = 'rotate(' + 30 + 'deg)';
        }
    }
    if(resizePlanetInput.value <= 0) {
        planet.style.width = 395 + 'px';
        planet.style.height = 395 + 'px';
        resizePlanetInput.style.color = "red";
        planet.style.transform = 'rotate(' + 30 + 'deg)';
        if(window.matchMedia('screen and (min-width: 300px) and (max-width: 800px)')) {
            planet.style.width = 300 + 'px';
            planet.style.height = 300 + 'px';
            resizePlanetInput.style.color = "red";
            planet.style.transform = 'rotate(' + 30 + 'deg)';
        }
    }
    else {
        resizePlanetInput.style.color = "black";
    }
}

function changePlanetRotation() {
    planet.style.animationDuration = rotationPlanetInput.value + 's';
    if(rotationPlanetInput.value <= 0 || rotationPlanetInput.value > 5) {
        rotationPlanetInput.style.color = 'red';
        planet.style.animationDuration = getRandomInt(1,5) + 's';     
    }
    if(rotationPlanetInput.value == "") {
        planet.style.animationDuration = getRandomInt(1,5) + 's';
    }
    else {
        rotationPlanetInput.style.color = 'black';
    }
}

function userPlanetName() {
    planetName.innerHTML = "";
    let userPlanetName = renameInput.value;
    planetName.innerHTML = userPlanetName;
    if(renameInput.value == "") {
        planetName.innerHTML = "";
        randomPlanetName = "";
        randomPlanetNumber = "";
        getRandomPlanetName();
    }
}

function getRandomPlanetName() {
    for(let i = 0; i < planetNameLenght; i++) {
        let randomNumber = Math.floor(Math.random() * planetNames.length);
        randomPlanetName += planetNames[randomNumber];
        // for(let i = 0; i < planetNumberLenght; i++){
        //     let randomNumber2 = Math.floor(Math.random() * planetNumbers.length);
        //     randomPlanetNumber += planetNumbers[randomNumber2];
        // }
        let randomPlanetNumber = getRandomInt(0,20);
        planetName.innerHTML = randomPlanetName + '-' + planetNumbers[randomPlanetNumber];
        if(window.matchMedia('screen and (min-width: 300px) and (max-width: 800px)')) {
            let randomNumber2 = Math.floor(Math.random() * planetNumbers.length); 
            randomPlanetNumber += planetNumbers[randomNumber2];
            planetName.innerHTML = randomPlanetName + '-' + randomPlanetNumber.length;
        }
    }
}

function renamePlanetName() {
    randomPlanetName = "";
    randomPlanetNumber = "";
    planetName.innerHTML = "";
    for(let i = 0; i < planetNameLenght; i++) {
        let randomNumber = Math.floor(Math.random() * planetNames.length);
        randomPlanetName += planetNames[randomNumber];
        // for(let i = 0; i < planetNumberLenght; i++){
        //     let randomNumber2 = Math.floor(Math.random() * planetNumbers.length);
        //     randomPlanetNumber += planetNumbers[randomNumber2];
        // }
        let randomPlanetNumber = getRandomInt(0,20);
        planetName.innerHTML = randomPlanetName + '-' + planetNumbers[randomPlanetNumber];
        if(window.matchMedia('screen and (min-width: 300px) and (max-width: 800px)')) {
            let randomNumber2 = Math.floor(Math.random() * planetNumbers.length); 
            randomPlanetNumber += planetNumbers[randomNumber2];
            planetName.innerHTML = randomPlanetName + '-' + randomPlanetNumber.length;
        } 
    }
}

function repaintPlanet() {
    let color = getRandomInt(50,1000);
    planet.style.filter = 'hue-rotate(' + color + 'deg)';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

getRandomPlanetName();
repaintPlanet();
