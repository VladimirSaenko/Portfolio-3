
"use strict";

let number1 = document.getElementById("numb1");
let number1_1 = document.getElementById("numb1-1");
let number2 = document.getElementById("numb2");
let number2_2 = document.getElementById("numb2-2");
let number3 = document.getElementById("numb3");
let number3_3 = document.getElementById("numb3-3");
let number4 = document.getElementById("numb4");
let number4_4 = document.getElementById("numb4-4");
let number5 = document.getElementById("numb5");
let number5_5 = document.getElementById("numb5-5");
let number6 = document.getElementById("numb6");
let number6_6 = document.getElementById("numb6-6");
let number7 = document.getElementById("numb7");
let number7_7 = document.getElementById("numb7-7");
let number8 = document.getElementById("numb8");
let number8_8 = document.getElementById("numb8-8");
let number9 = document.getElementById("numb9");
let number9_9 = document.getElementById("numb9-9");
let number10 = document.getElementById("numb10");
let number10_10 = document.getElementById("numb10-10");
let number11 = document.getElementById("numb11");
let number11_11 = document.getElementById("numb11-11");
let number12 = document.getElementById("numb12");
let number12_12 = document.getElementById("numb12-12");
number1.innerHTML = getRandomInt(2,10);
number1_1.innerHTML = number1.innerHTML;
number2.innerHTML = getRandomInt(2,10);
number2_2.innerHTML = number2.innerHTML;
number3.innerHTML = getRandomInt(2,10);
number3_3.innerHTML = number3.innerHTML;
number4.innerHTML = getRandomInt(2,10);
number4_4.innerHTML = number4.innerHTML;
number5.innerHTML = getRandomInt(2,10);
number5_5.innerHTML = number5.innerHTML;
number6.innerHTML = getRandomInt(2,10);
number6_6.innerHTML = number6.innerHTML;
number7.innerHTML = getRandomInt(2,10);
number7_7.innerHTML = number7.innerHTML;
number8.innerHTML = getRandomInt(2,10);
number8_8.innerHTML = number8.innerHTML;
number9.innerHTML = getRandomInt(2,10);
number9_9.innerHTML = number9.innerHTML;
number10.innerHTML = getRandomInt(2,10);
number10_10.innerHTML = number10.innerHTML;
number11.innerHTML = getRandomInt(2,10);
number11_11.innerHTML = number11.innerHTML;
number12.innerHTML = getRandomInt(2,10);
number12_12.innerHTML = number12.innerHTML;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
