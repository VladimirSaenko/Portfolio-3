
"use strict";

let inputMain = document.getElementById("input1");
let inputStrings = document.getElementById("input2");
let inputElectric = document.getElementById("input3");
let inputGriff = document.getElementById("input4");
let guitarBody = document.getElementById("body");
let griff = document.getElementById("griff");
let electric1 = document.getElementById("electric1");
let electric2 = document.getElementById("electric2");
let electric3 = document.getElementById("electric3");
let electric4 = document.getElementById("electric4");
let electric5 = document.getElementById("electric5");
let string1 = document.getElementById("string1");
let string2 = document.getElementById("string2");
let string3 = document.getElementById("string3");
let string4 = document.getElementById("string4");
let string5 = document.getElementById("string5");
let string6 = document.getElementById("string6");
let pin1 = document.getElementById("pin1");
let pin2 = document.getElementById("pin2");
let pin3 = document.getElementById("pin3");
let pin4 = document.getElementById("pin4");
let pin5 = document.getElementById("pin5");
let pin6 = document.getElementById("pin6");
let pin7 = document.getElementById("pin7");
let pin8 = document.getElementById("pin8");
let pin9 = document.getElementById("pin9");
let pin10 = document.getElementById("pin10");
let pin11 = document.getElementById("pin11");
let pin12 = document.getElementById("pin12");
let pin13 = document.getElementById("pin13");
let pin14 = document.getElementById("pin14");
let pin15 = document.getElementById("pin15");
let pin16 = document.getElementById("pin16");
let pin17 = document.getElementById("pin17");
let pin18 = document.getElementById("pin18");

guitarBody.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
griff.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
electric1.style.fill = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
electric2.style.fill = electric1.style.fill;
electric3.style.fill = electric1.style.fill;
electric4.style.fill = electric1.style.fill;
electric5.style.fill = electric1.style.fill;
string1.style.stroke = `rgb(${getRandomInt(0, 250)}, ${getRandomInt(0, 250)}, ${getRandomInt(0, 250)})`;
string2.style.stroke = string1.style.stroke;
string3.style.stroke = string1.style.stroke;
string4.style.stroke = string1.style.stroke;
string5.style.stroke = string1.style.stroke;
string6.style.stroke = string1.style.stroke;
pin1.style.fill = guitarBody.style.fill;
pin2.style.fill = guitarBody.style.fill;
pin3.style.fill = guitarBody.style.fill;
pin4.style.fill = guitarBody.style.fill;
pin5.style.fill = guitarBody.style.fill;
pin6.style.fill = guitarBody.style.fill;
pin7.style.fill = guitarBody.style.fill;
pin8.style.fill = guitarBody.style.fill;
pin9.style.fill = guitarBody.style.fill;
pin10.style.fill = guitarBody.style.fill;
pin11.style.fill = guitarBody.style.fill;
pin12.style.fill = guitarBody.style.fill;
pin13.style.fill = guitarBody.style.fill;
pin14.style.fill = guitarBody.style.fill;
pin15.style.fill = guitarBody.style.fill;
pin16.style.fill = guitarBody.style.fill;
pin17.style.fill = guitarBody.style.fill;
pin18.style.fill = guitarBody.style.fill;

inputMain.addEventListener('change', ()=> {
    guitarBody.style.fill = inputMain.value;
    pin1.style.fill = guitarBody.style.fill;
    pin2.style.fill = guitarBody.style.fill;
    pin3.style.fill = guitarBody.style.fill;
    pin4.style.fill = guitarBody.style.fill;
    pin5.style.fill = guitarBody.style.fill;
    pin6.style.fill = guitarBody.style.fill;
    pin7.style.fill = guitarBody.style.fill;
    pin8.style.fill = guitarBody.style.fill;
    pin9.style.fill = guitarBody.style.fill;
    pin10.style.fill = guitarBody.style.fill;
    pin11.style.fill = guitarBody.style.fill;
    pin12.style.fill = guitarBody.style.fill;
    pin13.style.fill = guitarBody.style.fill;
    pin14.style.fill = guitarBody.style.fill;
    pin15.style.fill = guitarBody.style.fill;
    pin16.style.fill = guitarBody.style.fill;
    pin17.style.fill = guitarBody.style.fill;
    pin18.style.fill = guitarBody.style.fill;
})

inputStrings.addEventListener('change', ()=> {
    string1.style.stroke = inputStrings.value;
    string2.style.stroke = string1.style.stroke;
    string3.style.stroke = string1.style.stroke;
    string4.style.stroke = string1.style.stroke;
    string5.style.stroke = string1.style.stroke;
    string6.style.stroke = string1.style.stroke;
})

inputElectric.addEventListener('change', ()=> {
    electric1.style.fill = inputElectric.value;
    electric2.style.fill = electric1.style.fill;
    electric3.style.fill = electric1.style.fill;
    electric4.style.fill = electric1.style.fill;
    electric5.style.fill = electric1.style.fill;
})

inputGriff.addEventListener('change', ()=> {
    griff.style.fill = inputGriff.value;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}