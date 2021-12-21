
"use strict";

let inputMain = document.getElementById("input1");
let inputPad = document.getElementById("input2");
let inputElectrics = document.getElementById("input3");
let guitarBody1 = document.getElementById("guitarBody1");
let guitarBody2 = document.getElementById("guitarBody2");
let guitarBody3 = document.getElementById("guitarBody3");
let guitarBody4 = document.getElementById("guitarBody4");
let guitarPad1 = document.getElementById("pad1");
let guitarPad2 = document.getElementById("pad2");
let electronica1 = document.getElementById("electronica1");
let electronica2 = document.getElementById("electronica2");
let electronica3 = document.getElementById("electronica3");
let electronica4 = document.getElementById("electronica4");
let electronica5 = document.getElementById("electronica5");
let electronica6 = document.getElementById("electronica6");
let electronica7 = document.getElementById("electronica7");
let electronica8 = document.getElementById("electronica8");
let electronica9 = document.getElementById("electronica9");
let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin3 = document.getElementById("pin3");
let pin4 = document.getElementById("pin4");
let pin5 = document.getElementById("pin5");
let pin6 = document.getElementById("pin6");

guitarPad1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
guitarPad2.style.fill = guitarPad1.style.fill;

pin1.style.fill = guitarPad1.style.fill;
pin2.style.fill = guitarPad1.style.fill;
pin3.style.fill = guitarPad1.style.fill;
pin4.style.fill = guitarPad1.style.fill;
pin5.style.fill = guitarPad1.style.fill;
pin6.style.fill = guitarPad1.style.fill;

guitarBody1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
guitarBody2.style.fill = guitarBody1.style.fill;
guitarBody3.style.fill = guitarBody1.style.fill;
guitarBody4.style.fill = guitarBody1.style.fill;

electronica1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
electronica2.style.fill = electronica1.style.fill;
electronica3.style.fill = electronica1.style.fill;
electronica4.style.fill = electronica1.style.fill;
electronica5.style.fill = electronica1.style.fill;
electronica6.style.fill = electronica1.style.fill;
electronica7.style.fill = electronica1.style.fill;
electronica8.style.fill = electronica1.style.fill;
electronica9.style.fill = electronica1.style.fill;

inputMain.addEventListener('change', ()=> {
    guitarBody1.style.fill = inputMain.value;
    guitarBody2.style.fill = inputMain.value;
    guitarBody3.style.fill = inputMain.value;
    guitarBody4.style.fill = inputMain.value;
})

inputPad.addEventListener('change', function() {
    guitarPad1.style.fill = inputPad.value;
    guitarPad2.style.fill = inputPad.value;
    pin1.style.fill = guitarPad1.style.fill;
    pin2.style.fill = guitarPad1.style.fill;
    pin3.style.fill = guitarPad1.style.fill;
    pin4.style.fill = guitarPad1.style.fill;
    pin5.style.fill = guitarPad1.style.fill;
    pin6.style.fill = guitarPad1.style.fill;
})

inputElectrics.addEventListener('change', function() {
    electronica1.style.fill = inputElectrics.value;
    electronica2.style.fill = inputElectrics.value;
    electronica3.style.fill = inputElectrics.value;
    electronica4.style.fill = inputElectrics.value;
    electronica5.style.fill = inputElectrics.value;
    electronica6.style.fill = inputElectrics.value;
    electronica7.style.fill = inputElectrics.value;
    electronica8.style.fill = inputElectrics.value;
    electronica9.style.fill = inputElectrics.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}