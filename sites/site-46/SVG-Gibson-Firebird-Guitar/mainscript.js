
"use strict";

let inputMain = document.getElementById("input1");
let inputPad = document.getElementById("input2");
let inputElectrics = document.getElementById("input3");

let guitarBody1 = document.getElementById("guitarBody1");
let guitarBody2 = document.getElementById("guitarBody2");
let guitarBody3 = document.getElementById("guitarBody3");
let guitarBody4 = document.getElementById("guitarBody4");

let guitarPad1 = document.getElementById("guitarPad1");
let guitarPad2 = document.getElementById("guitarPad2");

let electric1 = document.getElementById("electric1");
let electric2 = document.getElementById("electric2");
let electric3 = document.getElementById("electric3");
let electric4 = document.getElementById("electric4");
let electric5 = document.getElementById("electric5");
let electric6 = document.getElementById("electric6");
let electric7 = document.getElementById("electric7");

let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin3 = document.getElementById("pin3");
let pin4 = document.getElementById("pin4");

guitarPad1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
guitarPad2.style.fill = guitarPad1.style.fill;
guitarBody1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
guitarBody2.style.fill = guitarBody1.style.fill;
guitarBody3.style.fill = guitarBody1.style.fill;
guitarBody4.style.fill = guitarBody1.style.fill;
electric1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
electric2.style.fill = electric1.style.fill;
electric3.style.fill = electric1.style.fill;
electric4.style.fill = electric1.style.fill;
electric5.style.fill = electric1.style.fill;
electric6.style.fill = electric1.style.fill;
electric7.style.fill = electric1.style.fill;
pin1.style.fill = guitarPad1.style.fill;
pin2.style.fill = guitarPad1.style.fill;
pin3.style.fill = guitarPad1.style.fill;
pin4.style.fill = guitarPad1.style.fill;

inputMain.addEventListener('change', () => {
    guitarBody1.style.fill = inputMain.value;
    guitarBody2.style.fill = inputMain.value;
    guitarBody3.style.fill = inputMain.value;
    guitarBody4.style.fill = inputMain.value;
})

inputPad.addEventListener('change', () => {
    guitarPad1.style.fill = inputPad.value;
    guitarPad2.style.fill = guitarPad1.style.fill;
    pin1.style.fill = guitarPad1.style.fill;
    pin2.style.fill = guitarPad1.style.fill;
    pin3.style.fill = guitarPad1.style.fill;
    pin4.style.fill = guitarPad1.style.fill;
})

inputElectrics.addEventListener('change', ()=> {
    electric1.style.fill = inputElectrics.value;
    electric2.style.fill = inputElectrics.value;
    electric3.style.fill = inputElectrics.value;
    electric4.style.fill = inputElectrics.value;
    electric5.style.fill = inputElectrics.value;
    electric6.style.fill = inputElectrics.value;
    electric7.style.fill = inputElectrics.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}