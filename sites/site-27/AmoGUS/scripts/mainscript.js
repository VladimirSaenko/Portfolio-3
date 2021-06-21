
"use strict"

let color1 = document.querySelector('.st2'); // основной цвет
let color2 = document.querySelector('.st3'); // цвет в тени
let color3 = document.querySelector('.st7'); // цвет учатска портфеля
let color4 = document.querySelector('.st4'); // цвет портфеля
let impostortext = document.getElementById("impostertext");
let randomColor = getRandomInt(0,21);
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
    'Olive'
];

setInterval(function() {
    randomColor = getRandomInt(0,21);
    if(randomColor == 1 || randomColor == 0) {
        impostortext.innerText = `${colors[0]} was The Impostor`;
        color1.style.fill = 'rgb(215, 30, 34)';
        color2.style.fill = 'rgb(122, 8, 56)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(76, 14, 22)';
    }
    if(randomColor == 2) {
        impostortext.innerText = `${colors[1]} was The Impostor`;
        color1.style.fill = 'rgb(29, 60, 233)';
        color2.style.fill = 'rgb(9, 21, 142)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(13, 29, 137)';
    }
    if(randomColor == 3) {
        impostortext.innerText = `${colors[2]} was The Impostor`;
        color1.style.fill = 'rgb(27, 145, 62)';
        color2.style.fill = 'rgb(10, 77, 46)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(12, 82, 34)';
    }
    if(randomColor == 4) {
        impostortext.innerText = `${colors[3]} was The Impostor`;
        color1.style.fill = 'rgb(237, 84, 186)';
        color2.style.fill = 'rgb(171, 43, 173)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(71, 24, 53)';
    }
    if(randomColor == 5) {
        impostortext.innerText = `${colors[4]} was The Impostor`;
        color1.style.fill = 'rgb(255, 141, 28)';
        color2.style.fill = 'rgb(180, 62, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(95, 50, 16)';
    }
    if(randomColor == 6) {
        impostortext.innerText = `${colors[5]} was The Impostor`;
        color1.style.fill = 'rgb(255, 255, 103)';
        color2.style.fill = 'rgb(195, 136, 34)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(165, 153, 52)';
    }
    if(randomColor == 7) {
        impostortext.innerText = `${colors[6]} was The Impostor`;
        color1.style.fill = 'rgb(63, 71, 78)';
        color2.style.fill = 'rgb(30, 31, 38)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(17, 17, 17)';
    }
    if(randomColor == 8) {
        impostortext.innerText = `${colors[7]} was The Impostor`;
        color1.style.fill = 'rgb(214, 224, 240)';
        color2.style.fill = 'rgb(131, 148, 191)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 9) {
        impostortext.innerText = `${colors[8]} was The Impostor`;
        color1.style.fill = 'rgb(107, 49, 188)';
        color2.style.fill = 'rgb(60, 23, 124)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 10) {
        impostortext.innerText = `${colors[9]} was The Impostor`;
        color1.style.fill = 'rgb(113, 73, 30)';
        color2.style.fill = 'rgb(94, 38, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 11) {
        impostortext.innerText = `${colors[10]} was The Impostor`;
        color1.style.fill = 'rgb(68, 253, 245)';
        color2.style.fill = 'rgb(36, 167, 189)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 12) {
        impostortext.innerText = `${colors[11]} was The Impostor`;
        color1.style.fill = 'rgb(80, 239, 57)';
        color2.style.fill = 'rgb(21, 167, 66)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 13) {
        impostortext.innerText = `${colors[12]} was The Impostor`;
        color1.style.fill = 'rgb(115, 27, 19)';
        color2.style.fill = 'rgb(91, 19, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 14) {
        impostortext.innerText = `${colors[13]} was The Impostor`;
        color1.style.fill = 'rgb(236, 192, 211)';
        color2.style.fill = 'rgb(211, 146, 179)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 15) {
        impostortext.innerText = `${colors[14]} was The Impostor`;
        color1.style.fill = 'rgb(255, 253, 190)';
        color2.style.fill = 'rgb(209, 188, 137)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 16) {
        impostortext.innerText = `${colors[15]} was The Impostor`;
        color1.style.fill = 'rgb(112, 132, 151)';
        color2.style.fill = 'rgb(68, 83, 102)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 17) {
        impostortext.innerText = `${colors[16]} was The Impostor`;
        color1.style.fill = 'rgb(146, 135, 118)';
        color2.style.fill = 'rgb(81, 66, 61)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 18) {
        impostortext.innerText = `${colors[17]} was The Impostor`;
        color1.style.fill = 'rgb(236, 117, 120)';
        color2.style.fill = 'rgb(180, 67, 98)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 19) {
        impostortext.innerText = `${colors[18]} was The Impostor`;
        color1.style.fill = 'rgb(29, 152, 83)';
        color2.style.fill = 'rgb(18, 63, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(3, 39, 16)';
    }
    if(randomColor == 20 || randomColor == 21) {
        impostortext.innerText = `${colors[19]} was The Impostor`;
        color1.style.fill = 'rgb(97, 114, 24)';
        color2.style.fill = 'rgb(66, 91, 15)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
},5000);

function getColor() {
    if(randomColor == 1 || randomColor == 0) {
        impostortext.innerText = `${colors[0]} was The Impostor`;
        color1.style.fill = 'rgb(215, 30, 34)';
        color2.style.fill = 'rgb(122, 8, 56)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(76, 14, 22)';
    }
    if(randomColor == 2) {
        impostortext.innerText = `${colors[1]} was The Impostor`;
        color1.style.fill = 'rgb(29, 60, 233)';
        color2.style.fill = 'rgb(9, 21, 142)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(13, 29, 137)';
    }
    if(randomColor == 3) {
        impostortext.innerText = `${colors[2]} was The Impostor`;
        color1.style.fill = 'rgb(27, 145, 62)';
        color2.style.fill = 'rgb(10, 77, 46)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(12, 82, 34)';
    }
    if(randomColor == 4) {
        impostortext.innerText = `${colors[3]} was The Impostor`;
        color1.style.fill = 'rgb(237, 84, 186)';
        color2.style.fill = 'rgb(171, 43, 173)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(71, 24, 53)';
    }
    if(randomColor == 5) {
        impostortext.innerText = `${colors[4]} was The Impostor`;
        color1.style.fill = 'rgb(255, 141, 28)';
        color2.style.fill = 'rgb(180, 62, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(95, 50, 16)';
    }
    if(randomColor == 6) {
        impostortext.innerText = `${colors[5]} was The Impostor`;
        color1.style.fill = 'rgb(255, 255, 103)';
        color2.style.fill = 'rgb(195, 136, 34)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(165, 153, 52)';
    }
    if(randomColor == 7) {
        impostortext.innerText = `${colors[6]} was The Impostor`;
        color1.style.fill = 'rgb(63, 71, 78)';
        color2.style.fill = 'rgb(30, 31, 38)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(17, 17, 17)';
    }
    if(randomColor == 8) {
        impostortext.innerText = `${colors[7]} was The Impostor`;
        color1.style.fill = 'rgb(214, 224, 240)';
        color2.style.fill = 'rgb(131, 148, 191)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 9) {
        impostortext.innerText = `${colors[8]} was The Impostor`;
        color1.style.fill = 'rgb(107, 49, 188)';
        color2.style.fill = 'rgb(60, 23, 124)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 10) {
        impostortext.innerText = `${colors[9]} was The Impostor`;
        color1.style.fill = 'rgb(113, 73, 30)';
        color2.style.fill = 'rgb(94, 38, 21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 11) {
        impostortext.innerText = `${colors[10]} was The Impostor`;
        color1.style.fill = 'rgb(68, 253, 245)';
        color2.style.fill = 'rgb(36, 167, 189)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 12) {
        impostortext.innerText = `${colors[11]} was The Impostor`;
        color1.style.fill = 'rgb(80, 239, 57)';
        color2.style.fill = 'rgb(21, 167, 66)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 13) {
        impostortext.innerText = `${colors[12]} was The Impostor`;
        color1.style.fill = 'rgb(115, 27, 19)';
        color2.style.fill = 'rgb(91, 19, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 14) {
        impostortext.innerText = `${colors[13]} was The Impostor`;
        color1.style.fill = 'rgb(236, 192, 211)';
        color2.style.fill = 'rgb(211, 146, 179)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 15) {
        impostortext.innerText = `${colors[14]} was The Impostor`;
        color1.style.fill = 'rgb(255, 253, 190)';
        color2.style.fill = 'rgb(209, 188, 137)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 16) {
        impostortext.innerText = `${colors[15]} was The Impostor`;
        color1.style.fill = 'rgb(112, 132, 151)';
        color2.style.fill = 'rgb(68, 83, 102)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 17) {
        impostortext.innerText = `${colors[16]} was The Impostor`;
        color1.style.fill = 'rgb(146, 135, 118)';
        color2.style.fill = 'rgb(81, 66, 61)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 18) {
        impostortext.innerText = `${colors[17]} was The Impostor`;
        color1.style.fill = 'rgb(236, 117, 120)';
        color2.style.fill = 'rgb(180, 67, 98)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 19) {
        impostortext.innerText = `${colors[18]} was The Impostor`;
        color1.style.fill = 'rgb(29, 152, 83)';
        color2.style.fill = 'rgb(18, 63, 27)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = 'rgb(3, 39, 16)';
    }
    if(randomColor == 20 || randomColor == 21) {
        impostortext.innerText = `${colors[19]} was The Impostor`;
        color1.style.fill = 'rgb(97, 114, 24)';
        color2.style.fill = 'rgb(66, 91, 15)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
}

getColor();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
