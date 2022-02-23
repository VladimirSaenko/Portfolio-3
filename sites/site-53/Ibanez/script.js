
"use strict";

let guitarBody = document.getElementById("guitarBody");
let pad = document.getElementById("pad");
let path4197 = document.getElementById("path4197");
let input1 = document.getElementById("color1");
let input2 = document.getElementById("color2");
const mainbutton = document.querySelector(".mainbutton");

mainbutton.addEventListener('click', function() {
    guitarBody.style.fill = input1.value;
    pad.style.fill = input2.value;
    path4197.style.fill = input2.value;
})
