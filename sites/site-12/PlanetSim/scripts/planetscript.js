
"use strict"

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
    'aba','far','corus','nar','nol','gado','gad',
    'mar','adu','az','ak','to','Aqu','aki','aku','mak',
    'al','zoc','am','ray','ana','prime','an','ar','val',
    'bal','lok','bir','vi','vo','vul'
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

    if(resizePlanetInput.value == "") {
        planet.style.width = 395 + 'px';
        planet.style.height = 395 + 'px';
    }

    if(resizePlanetInput.value <= 0) {
        planet.style.width = 395 + 'px';
        planet.style.height = 395 + 'px';
        resizePlanetInput.style.color = "red";
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