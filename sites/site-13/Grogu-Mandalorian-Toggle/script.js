
"use strict"

let mandalorian = document.getElementById("mando");
// let yoda = document.getElementById("yoda");
let container = document.getElementById("container");
let toggle = document.getElementById("slider");

function activateMando() {
    mandalorian.style.visibility = 'visible';
    container.style.background = '#121011';
    toggle.style.backgroundImage = "linear-gradient(#000000,#5a5252,#585552, #6d6565, #000000)";
}