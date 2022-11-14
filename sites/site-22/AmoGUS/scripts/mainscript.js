
"use strict";

let color1 = document.querySelector('.st2'); // основной цвет
let color2 = document.querySelector('.st3'); // цвет в тени
let color3 = document.querySelector('.st7'); // цвет учатска портфеля
let color4 = document.querySelector('.st4'); // цвет портфеля
let color5 = document.querySelector('.st5'); // скафандер
let color6 = document.querySelector('.st6'); // скафандер
let color7 = document.querySelector('.st8'); // скафандер

color5.style.fill = 'rgb(69, 99, 109)';
color6.style.fill = 'rgb(157, 205, 219)';
color7.style.fill = 'rgb(225, 225, 225)';

let impostortext = document.getElementById("impostertext");
let randomColor = getRandomInt(0, 22);

const colors = [
    'Red',
    'Blue',
    'Green',
    'Pink',
    'Orange',
    'Yellow',
    'Black',
    'White',
    'Purple',
    'Brown',
    'Cyan',
    'Lime',
    'Maroon',
    'Rose',
    'Banana',
    'Gray',
    'Tan',
    'Coral',
    'Fortegreen',
    'Olive',
    'Golden',
    'Polar White',
    'Old Orange',
    'Piriwinkle',
    'Baby Pink',
    'Baby Blue',
    'Crystal',
    'Seafoam',
    'Salmon',
    'Lilac',
    'Gold',
    'Beige',
    'Turquoise',
    'CoffeeScript',
    'Grey',
    'Pearl',
    'Ocean Breeze',
    'Taupe',
    'Lavender',
    'Fuchsia',
    'Fruit',
    // 'Minion Pink',
    // 'Olympic Green',
    'Mint',
    'Tomato',
    'Peach',
    'Purple Wine',
    'Teal',
    'Navy Blue',
    'Aqua',
    'Kiwi',
    'Coconut',
    'Sweet Apple',
    'Glaucous',
    'Lychee',
    'Watermelon',
    'Avocado',
    'Passion Fruit',
    'Scary Dark',
    'Empty Black',
    'Retro Green',
    'Dark Blue',
    'Silver',
    'Monty Green',
    'Roxy Purple',
    'Gregory Color',
    'Spring Green'
];

setInterval(function() {
    randomColor = getRandomInt(0, 68);
    if(randomColor == 1 || randomColor == 0) {
        impostortext.innerText = `${colors[0]} was The Imposter`;
        color1.style.fill = 'rgb(215, 30, 34)';
        color2.style.fill = 'rgb(122, 8, 56)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(76, 14, 22)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 2) {
        impostortext.innerText = `${colors[1]} was The Imposter`;
        color1.style.fill = 'rgb(29, 60, 233)';
        color2.style.fill = 'rgb(9, 21, 142)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(13, 29, 137)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 3) {
        impostortext.innerText = `${colors[2]} was The Imposter`;
        color1.style.fill = 'rgb(27, 145, 62)';
        color2.style.fill = 'rgb(10, 77, 46)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(12, 82, 34)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 4) {
        impostortext.innerText = `${colors[3]} was The Imposter`;
        color1.style.fill = 'rgb(237, 84, 186)';
        color2.style.fill = 'rgb(171, 43, 173)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(71, 24, 53)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 5) {
        impostortext.innerText = `${colors[4]} was The Imposter`;
        color1.style.fill = 'rgb(255, 141, 28)';
        color2.style.fill = 'rgb(180, 62, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(95, 50, 16)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 6) {
        impostortext.innerText = `${colors[5]} was The Imposter`;
        color1.style.fill = 'rgb(255, 255, 103)';
        color2.style.fill = 'rgb(195, 136, 34)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(165, 153, 52)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 7) {
        impostortext.innerText = `${colors[6]} was The Imposter`;
        color1.style.fill = 'rgb(63, 71, 78)';
        color2.style.fill = 'rgb(30, 31, 38)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(17, 17, 17)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 8) {
        impostortext.innerText = `${colors[7]} was The Imposter`;
        color1.style.fill = 'rgb(214, 224, 240)';
        color2.style.fill = 'rgb(131, 148, 191)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 9) {
        impostortext.innerText = `${colors[8]} was The Imposter`;
        color1.style.fill = 'rgb(107, 49, 188)';
        color2.style.fill = 'rgb(60, 23, 124)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 10) {
        impostortext.innerText = `${colors[9]} was The Imposter`;
        color1.style.fill = 'rgb(113, 73, 30)';
        color2.style.fill = 'rgb(94, 38, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 11) {
        impostortext.innerText = `${colors[10]} was The Imposter`;
        color1.style.fill = 'rgb(68, 253, 245)';
        color2.style.fill = 'rgb(36, 167, 189)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 12) {
        impostortext.innerText = `${colors[11]} was The Imposter`;
        color1.style.fill = 'rgb(80, 239, 57)';
        color2.style.fill = 'rgb(21, 167, 66)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 13) {
        impostortext.innerText = `${colors[12]} was The Imposter`;
        color1.style.fill = 'rgb(115, 27, 19)';
        color2.style.fill = 'rgb(91, 19, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 14) {
        impostortext.innerText = `${colors[13]} was The Imposter`;
        color1.style.fill = 'rgb(236, 192, 211)';
        color2.style.fill = 'rgb(211, 146, 179)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 15) {
        impostortext.innerText = `${colors[14]} was The Imposter`;
        color1.style.fill = 'rgb(255, 253, 190)';
        color2.style.fill = 'rgb(209, 188, 137)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 16) {
        impostortext.innerText = `${colors[15]} was The Imposter`;
        color1.style.fill = 'rgb(112, 132, 151)';
        color2.style.fill = 'rgb(68, 83, 102)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 17) {
        impostortext.innerText = `${colors[16]} was The Imposter`;
        color1.style.fill = 'rgb(146, 135, 118)';
        color2.style.fill = 'rgb(81, 66, 61)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 18) {
        impostortext.innerText = `${colors[17]} was The Imposter`;
        color1.style.fill = 'rgb(236, 117, 120)';
        color2.style.fill = 'rgb(180, 67, 98)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 19) {
        impostortext.innerText = `${colors[18]} was The Imposter`;
        color1.style.fill = 'rgb(29, 152, 83)';
        color2.style.fill = 'rgb(18, 63, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(3, 39, 16)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 20) {
        impostortext.innerText = `${colors[19]} was The Imposter`;
        color1.style.fill = 'rgb(97, 114, 24)';
        color2.style.fill = 'rgb(66, 91, 15)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 21) {
        impostortext.innerText = `${colors[20]} was The Imposter`;
        color1.style.fill = 'rgb(240, 245, 64)';
        color2.style.fill = 'rgb(243, 42, 48)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 22) {
        impostortext.innerText = `${colors[21]} was The Imposter`;
        color1.style.fill = 'rgb(204, 204, 204)';
        color2.style.fill = 'rgb(153, 153, 153)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 23) {
        impostortext.innerText = `${colors[22]} was The Imposter`;
        color1.style.fill = 'rgb(252, 154, 3)';
        color2.style.fill = 'rgb(149, 95, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 24) {
        impostortext.innerText = `${colors[23]} was The Imposter`;
        color1.style.fill = 'rgb(177, 180, 255)';
        color2.style.fill = 'rgb(141, 145, 252)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 25) {
        impostortext.innerText = `${colors[24]} was The Imposter`;
        color1.style.fill = 'rgb(253, 188, 230)';
        color2.style.fill = 'rgb(255, 112 ,200)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 26) {
        impostortext.innerText = `${colors[25]} was The Imposter`;
        color1.style.fill = 'rgb(161, 239, 252)';
        color2.style.fill = 'rgb(99, 207, 233)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 27) {
        impostortext.innerText = `${colors[26]} was The Imposter`;
        color1.style.fill = 'rgb(238, 210, 251)';
        color2.style.fill = 'rgb(206, 126, 249)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 28) {
        impostortext.innerText = `${colors[27]} was The Imposter`;
        color1.style.fill = 'rgb(174, 244, 181)';
        color2.style.fill = 'rgb(122, 253, 139)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 29) {
        impostortext.innerText = `${colors[28]} was The Imposter`;
        color1.style.fill = 'rgb(251, 136, 92)';
        color2.style.fill = 'rgb(228, 99, 80)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 30) {
        impostortext.innerText = `${colors[29]} was The Imposter`;
        color1.style.fill = 'rgb(204, 144, 230)';
        color2.style.fill = 'rgb(126, 107, 196)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 31) {
        impostortext.innerText = `${colors[30]} was The Imposter`;
        color1.style.fill = 'rgb(255, 194, 15)';
        color2.style.fill = 'rgb(207, 170, 1)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 32) {
        impostortext.innerText = `${colors[31]} was The Imposter`;
        color1.style.fill = 'rgb(177, 138, 95)';
        color2.style.fill = 'rgb(147, 95, 74)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 33) {
        impostortext.innerText = `${colors[32]} was The Imposter`;
        color1.style.fill = 'rgb(1, 254, 145)';
        color2.style.fill = 'rgb(1, 231, 79)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 34) {
        impostortext.innerText = `${colors[33]} was The Imposter`;
        color1.style.fill = 'rgb(125, 51, 6)';
        color2.style.fill = 'rgb(78, 27, 0)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 35) {
        impostortext.innerText = `${colors[34]} was The Imposter`;
        color1.style.fill = 'rgb(128, 128, 128)';
        color2.style.fill = 'rgb(64, 64, 64)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 36) {
        impostortext.innerText = `${colors[35]} was The Imposter`;
        color1.style.fill = 'rgb(176, 192, 243)';
        color2.style.fill = 'rgb(87, 96, 161)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 37) {
        impostortext.innerText = `${colors[36]} was The Imposter`;
        color1.style.fill = 'rgb(91, 174, 128)';
        color2.style.fill = 'rgb(55, 117, 78)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 38) {
        impostortext.innerText = `${colors[37]} was The Imposter`;
        color1.style.fill = 'rgb(188, 167, 138)';
        color2.style.fill = 'rgb(156, 136, 103)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 39) {
        impostortext.innerText = `${colors[38]} was The Imposter`;
        color1.style.fill = 'rgb(153, 141, 215)';
        color2.style.fill = 'rgb(136, 118, 228)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 40) {
        impostortext.innerText = `${colors[39]} was The Imposter`;
        color1.style.fill = 'rgb(200, 43, 114)';
        color2.style.fill = 'rgb(158, 40, 100)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 41) {
        impostortext.innerText = `${colors[40]} was The Imposter`;
        color1.style.fill = 'rgb(254, 69, 2)';
        color2.style.fill = 'rgb(210, 43, 0)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 42) {
        let randomNumber1 = getRandomInt(1, 457);
        impostortext.innerText = `Player ${randomNumber1} eliminated`;
        color1.style.fill = 'rgb(149, 33, 96)';
        color2.style.fill = 'rgb(108, 0, 58)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(0, 0, 0)';
        color6.style.fill = 'rgb(0, 0, 0)';
    }
    if(randomColor == 43) {
        let randomNumber2 = getRandomInt(1, 457);
        impostortext.innerText = `Player ${randomNumber2} was ejected`;
        color1.style.fill = 'rgb(45, 191, 190)';
        color2.style.fill = 'rgb(23, 161, 164)';
        color3.style.fill = 'rgb(254, 255, 255)';
        color4.style.fill = color3.style.fill;
        color5.style.fill = 'rgb(0, 0, 0)';
        color6.style.fill = 'rgb(0, 0, 0)';
    }
    if(randomColor == 44) {
        impostortext.innerText = `${colors[41]} was The Imposter`;
        color1.style.fill = 'rgb(206, 254, 214)';
        color2.style.fill = 'rgb(143, 187, 151)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 45) {
        impostortext.innerText = `${colors[42]} was The Imposter`;
        color1.style.fill = 'rgb(179, 75, 76)';
        color2.style.fill = 'rgb(123, 37, 36)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 46) {
        impostortext.innerText = `${colors[43]} was The Imposter`;
        color1.style.fill = 'rgb(247, 193, 167)';
        color2.style.fill = 'rgb(231, 146, 107)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 47) {
        impostortext.innerText = `${colors[44]} was The Imposter`;
        color1.style.fill = 'rgb(80, 14, 75)';
        color2.style.fill = 'rgb(53, 11, 49)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 48) {
        impostortext.innerText = `${colors[45]} was The Imposter`;
        color1.style.fill = 'rgb(11, 129, 115)';
        color2.style.fill = 'rgb(5, 59, 61)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 49) {
        impostortext.innerText = `${colors[46]} was The Imposter`;
        color1.style.fill = 'rgb(45, 37, 96)';
        color2.style.fill = 'rgb(37, 30, 74)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 50) {
        impostortext.innerText = `${colors[47]} was The Imposter`;
        color1.style.fill = 'rgb(123, 255, 206)';
        color2.style.fill = 'rgb(68, 220, 159)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 51) {
        impostortext.innerText = `${colors[48]} was The Imposter`;
        color1.style.fill = 'rgb(158, 198, 50)';
        color2.style.fill = 'rgb(107, 63, 36)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(241, 248, 132)';
        color6.style.fill = color5.style.fill;
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 52) {
        impostortext.innerText = `${colors[49]} was The Imposter`;
        color1.style.fill = 'white';
        color2.style.fill = 'rgb(87, 42, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 53) {
        impostortext.innerText = `${colors[50]} was The Imposter`;
        color1.style.fill = 'rgb(251, 238, 170)';
        color2.style.fill = 'rgb(151, 14, 42)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 54) {
        impostortext.innerText = `${colors[51]} was The Imposter`;
        color1.style.fill = 'rgb(99, 131, 178)';
        color2.style.fill = 'rgb(44, 60, 86)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 55) {
        impostortext.innerText = `${colors[52]} was The Imposter`;
        color1.style.fill = 'rgb(243, 237, 213)';
        color2.style.fill = 'rgb(226, 71, 89)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(91, 40, 49)';
        color6.style.fill = color5.style.fill;
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 56) {
        impostortext.innerText = `${colors[53]} was The Imposter`;
        color1.style.fill = 'rgb(215, 96, 118)';
        color2.style.fill = 'rgb(84, 145, 50)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 57) {
        impostortext.innerText = `${colors[54]} was The Imposter`;
        color1.style.fill = 'rgb(240, 245, 155)';
        color2.style.fill = 'rgb(92, 147, 56)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(124, 77, 31)';
        color6.style.fill = color5.style.fill;
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 58) {
        impostortext.innerText = `${colors[55]} was The Imposter`;
        color1.style.fill = 'white';
        color2.style.fill = 'rgb(124, 15, 57)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(226, 161, 33)';
        color6.style.fill = color5.style.fill;
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 59) {
        impostortext.innerText = `${colors[56]} was The Imposter`;
        color1.style.fill = 'rgb(96, 134, 137)';
        color2.style.fill = 'rgb(58, 52, 100)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(123, 6, 0)';
        color6.style.fill = 'rgb(217, 8, 1)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 60) {
        impostortext.innerText = `${colors[57]} was The Imposter`;
        color1.style.fill = 'rgb(38, 38, 38)';
        color2.style.fill = 'rgb(26, 26, 26)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(29, 29, 29)';
        color6.style.fill = 'rgb(76, 76, 76)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 61) {
        impostortext.innerText = `${colors[58]} was The Imposter`;
        color1.style.fill = 'rgb(155, 188, 11)';
        color2.style.fill = 'rgb(53, 98, 57)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(61, 88, 57)';
        color6.style.fill = 'rgb(117, 162, 103)';
        color7.style.fill = 'rgb(200, 232, 191)';
    }
    if(randomColor == 62) {
        impostortext.innerText = `${colors[59]} was The Imposter`;
        color1.style.fill = 'rgb(45, 64, 107)';
        color2.style.fill = 'rgb(34, 44, 71)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 63) {
        impostortext.innerText = `${colors[60]} was The Imposter`;
        color1.style.fill = 'rgb(172, 181, 182)';
        color2.style.fill = 'rgb(94, 101, 101)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(148, 159, 162)';
        color6.style.fill = 'rgb(219, 228, 230)';
        color7.style.fill = 'white';
    }
    if(randomColor == 64) {
        impostortext.innerText = `${colors[61]} was The Imposter`;
        color1.style.fill = 'rgb(56, 234, 0)';
        color2.style.fill = 'rgb(231, 218, 0)';
        color4.style.fill = color2.style.fill;
        color3.style.fill = 'rgb(172, 4, 223)';
        color5.style.fill = 'rgb(148, 159, 162)';
        color6.style.fill = 'rgb(219, 228, 230)';
        color7.style.fill = 'white';
    }
    if(randomColor == 65) {
        impostortext.innerText = `${colors[62]} was The Imposter`;
        color1.style.fill = 'rgb(255, 236, 253)';
        color2.style.fill = 'rgb(169, 0, 255)';
        color4.style.fill = color2.style.fill;
        color3.style.fill = color1.style.fill;
        color5.style.fill = 'rgb(148, 159, 162)';
        color6.style.fill = 'rgb(219, 228, 230)';
        color7.style.fill = 'white';
    }
    if(randomColor == 66) {
        impostortext.innerText = `${colors[63]} was The Imposter`;
        color1.style.fill = 'rgb(0, 54, 255)';
        color2.style.fill = 'rgb(154, 85, 70)';
        color4.style.fill = color2.style.fill;
        color3.style.fill = color1.style.fill;
        color5.style.fill = 'rgb(249, 183, 149)';
        color6.style.fill = 'rgb(240, 151, 33)';
        color7.style.fill = 'white';
    }
    if(randomColor == 67 || randomColor == 68) {
        impostortext.innerText = `${colors[64]} was The Imposter`;
        color1.style.fill = 'rgb(90, 127, 22)';
        color2.style.fill = 'rgb(44, 62, 14)';
        color4.style.fill = color2.style.fill;
        color3.style.fill = color1.style.fill;
        color6.style.fill = 'rgb(232, 232, 232)';
        color5.style.fill = 'rgb(138, 138, 138)';
        color7.style.fill = 'white';
    }
}, 5000);

function getColor() {
    if(randomColor == 1 || randomColor == 0) {
        impostortext.innerText = `${colors[0]} was The Imposter`;
        color1.style.fill = 'rgb(215, 30, 34)';
        color2.style.fill = 'rgb(122, 8, 56)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(76, 14, 22)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 2) {
        impostortext.innerText = `${colors[1]} was The Imposter`;
        color1.style.fill = 'rgb(29, 60, 233)';
        color2.style.fill = 'rgb(9, 21, 142)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(13, 29, 137)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 3) {
        impostortext.innerText = `${colors[2]} was The Imposter`;
        color1.style.fill = 'rgb(27, 145, 62)';
        color2.style.fill = 'rgb(10, 77, 46)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(12, 82, 34)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 4) {
        impostortext.innerText = `${colors[3]} was The Imposter`;
        color1.style.fill = 'rgb(237, 84, 186)';
        color2.style.fill = 'rgb(171, 43, 173)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(71, 24, 53)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 5) {
        impostortext.innerText = `${colors[4]} was The Imposter`;
        color1.style.fill = 'rgb(255, 141, 28)';
        color2.style.fill = 'rgb(180, 62, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(95, 50, 16)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 6) {
        impostortext.innerText = `${colors[5]} was The Imposter`;
        color1.style.fill = 'rgb(255, 255, 103)';
        color2.style.fill = 'rgb(195, 136, 34)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(165, 153, 52)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 7) {
        impostortext.innerText = `${colors[6]} was The Imposter`;
        color1.style.fill = 'rgb(63, 71, 78)';
        color2.style.fill = 'rgb(30, 31, 38)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(17, 17, 17)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 8) {
        impostortext.innerText = `${colors[7]} was The Imposter`;
        color1.style.fill = 'rgb(214, 224, 240)';
        color2.style.fill = 'rgb(131, 148, 191)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 9) {
        impostortext.innerText = `${colors[8]} was The Imposter`;
        color1.style.fill = 'rgb(107, 49, 188)';
        color2.style.fill = 'rgb(60, 23, 124)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 10) {
        impostortext.innerText = `${colors[9]} was The Imposter`;
        color1.style.fill = 'rgb(113, 73, 30)';
        color2.style.fill = 'rgb(94, 38, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 11) {
        impostortext.innerText = `${colors[10]} was The Imposter`;
        color1.style.fill = 'rgb(68, 253, 245)';
        color2.style.fill = 'rgb(36, 167, 189)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 12) {
        impostortext.innerText = `${colors[11]} was The Imposter`;
        color1.style.fill = 'rgb(80, 239, 57)';
        color2.style.fill = 'rgb(21, 167, 66)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 13) {
        impostortext.innerText = `${colors[12]} was The Imposter`;
        color1.style.fill = 'rgb(115, 27, 19)';
        color2.style.fill = 'rgb(91, 19, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 14) {
        impostortext.innerText = `${colors[13]} was The Imposter`;
        color1.style.fill = 'rgb(236, 192, 211)';
        color2.style.fill = 'rgb(211, 146, 179)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 15) {
        impostortext.innerText = `${colors[14]} was The Imposter`;
        color1.style.fill = 'rgb(255, 253, 190)';
        color2.style.fill = 'rgb(209, 188, 137)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 16) {
        impostortext.innerText = `${colors[15]} was The Imposter`;
        color1.style.fill = 'rgb(112, 132, 151)';
        color2.style.fill = 'rgb(68, 83, 102)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 17) {
        impostortext.innerText = `${colors[16]} was The Imposter`;
        color1.style.fill = 'rgb(146, 135, 118)';
        color2.style.fill = 'rgb(81, 66, 61)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 18) {
        impostortext.innerText = `${colors[17]} was The Imposter`;
        color1.style.fill = 'rgb(236, 117, 120)';
        color2.style.fill = 'rgb(180, 67, 98)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 19) {
        impostortext.innerText = `${colors[18]} was The Imposter`;
        color1.style.fill = 'rgb(29, 152, 83)';
        color2.style.fill = 'rgb(18, 63, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(3, 39, 16)';
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 20) {
        impostortext.innerText = `${colors[19]} was The Imposter`;
        color1.style.fill = 'rgb(97, 114, 24)';
        color2.style.fill = 'rgb(66, 91, 15)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 21) {
        impostortext.innerText = `${colors[20]} was The Imposter`;
        color1.style.fill = 'rgb(240, 245, 64)';
        color2.style.fill = 'rgb(243, 42, 48)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
    if(randomColor == 22) {
        impostortext.innerText = `${colors[21]} was The Imposter`;
        color1.style.fill = 'rgb(204, 204, 204)';
        color2.style.fill = 'rgb(153, 153, 153)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
        color5.style.fill = 'rgb(69, 99, 109)';
        color6.style.fill = 'rgb(157, 205, 219)';
        color7.style.fill = 'rgb(225, 225, 225)';
    }
}

getColor();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
