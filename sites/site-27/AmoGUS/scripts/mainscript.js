
"use strict"

let color1 = document.querySelector('.st2'); // основной цвет
let color2 = document.querySelector('.st3'); // цвет в тени
let color3 = document.querySelector('.st7'); // цвет учатска портфеля
let color4 = document.querySelector('.st4'); // цвет портфеля
let impostortext = document.getElementById("impostertext");
let randomColor = getRandomInt(0,44);
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
    'Coffee',
    'Sky',
    'Sky Blue',
    'Grey',
    'Pearl',
    'Hot Pink',
    'Taupe',
    'Lavender',
    'Fuchsia',
    'Fruit'
];

setInterval(function() {
    randomColor = getRandomInt(0,44);
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
    if(randomColor == 20) {
        impostortext.innerText = `${colors[19]} was The Impostor`;
        color1.style.fill = 'rgb(97, 114, 24)';
        color2.style.fill = 'rgb(66, 91, 15)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 21) {
        impostortext.innerText = `${colors[20]} was The Impostor`;
        color1.style.fill = 'rgb(240,245,64)';
        color2.style.fill = 'rgb(243,42,48)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 22) {
        impostortext.innerText = `${colors[21]} was The Impostor`;
        color1.style.fill = 'rgb(204,204,204)';
        color2.style.fill = 'rgb(153,153,153)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 23) {
        impostortext.innerText = `${colors[22]} was The Impostor`;
        color1.style.fill = 'rgb(252,154,3)';
        color2.style.fill = 'rgb(149,95,21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 24) {
        impostortext.innerText = `${colors[23]} was The Impostor`;
        color1.style.fill = 'rgb(177,180,255)';
        color2.style.fill = 'rgb(141,145,252)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 25) {
        impostortext.innerText = `${colors[24]} was The Impostor`;
        color1.style.fill = 'rgb(253,188,230)';
        color2.style.fill = 'rgb(255,112,200)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 26) {
        impostortext.innerText = `${colors[25]} was The Impostor`;
        color1.style.fill = 'rgb(161,239,252)';
        color2.style.fill = 'rgb(99,207,233)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 27) {
        impostortext.innerText = `${colors[26]} was The Impostor`;
        color1.style.fill = 'rgb(238,210,251)';
        color2.style.fill = 'rgb(206,126,249)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 28) {
        impostortext.innerText = `${colors[27]} was The Impostor`;
        color1.style.fill = 'rgb(174,244,181)';
        color2.style.fill = 'rgb(122,253,139)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 29) {
        impostortext.innerText = `${colors[28]} was The Impostor`;
        color1.style.fill = 'rgb(251,136,92)';
        color2.style.fill = 'rgb(228,99,80)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 30) {
        impostortext.innerText = `${colors[29]} was The Impostor`;
        color1.style.fill = 'rgb(204,144,230)';
        color2.style.fill = 'rgb(126,107,196)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 31) {
        impostortext.innerText = `${colors[30]} was The Impostor`;
        color1.style.fill = 'rgb(255,194,15)';
        color2.style.fill = 'rgb(207,170,1)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 32) {
        impostortext.innerText = `${colors[31]} was The Impostor`;
        color1.style.fill = 'rgb(177,138,95)';
        color2.style.fill = 'rgb(147,95,74)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 33) {
        impostortext.innerText = `${colors[32]} was The Impostor`;
        color1.style.fill = 'rgb(1,254,145)';
        color2.style.fill = 'rgb(1,231,79)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 34) {
        impostortext.innerText = `${colors[33]} was The Impostor`;
        color1.style.fill = 'rgb(125,51,6)';
        color2.style.fill = 'rgb(78,27,0)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 35) {
        impostortext.innerText = `${colors[34]} was The Impostor`;
        color1.style.fill = 'rgb(0,148,254)';
        color2.style.fill = 'rgb(0,125,191)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 36) {
        impostortext.innerText = `${colors[35]} was The Impostor`;
        color1.style.fill = 'rgb(0,169,198)';
        color2.style.fill = 'rgb(0,125,145)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 37) {
        impostortext.innerText = `${colors[36]} was The Impostor`;
        color1.style.fill = 'rgb(128,128,128)';
        color2.style.fill = 'rgb(64,64,64)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 38) {
        impostortext.innerText = `${colors[37]} was The Impostor`;
        color1.style.fill = 'rgb(176,192,243)';
        color2.style.fill = 'rgb(87,96,161)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 40) {
        impostortext.innerText = `${colors[39]} was The Impostor`;
        color1.style.fill = 'rgb(188,167,138)';
        color2.style.fill = 'rgb(156,136,103)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 41) {
        impostortext.innerText = `${colors[40]} was The Impostor`;
        color1.style.fill = 'rgb(153,141,215)';
        color2.style.fill = 'rgb(136,118,228)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 42) {
        impostortext.innerText = `${colors[41]} was The Impostor`;
        color1.style.fill = 'rgb(200,43,114)';
        color2.style.fill = 'rgb(158,40,100)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 43 || randomColor == 44) {
        impostortext.innerText = `${colors[42]} was The Impostor`;
        color1.style.fill = 'rgb(254,69,2)';
        color2.style.fill = 'rgb(210,43,0)';
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
    if(randomColor == 20) {
        impostortext.innerText = `${colors[19]} was The Impostor`;
        color1.style.fill = 'rgb(97, 114, 24)';
        color2.style.fill = 'rgb(66, 91, 15)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 21) {
        impostortext.innerText = `${colors[20]} was The Impostor`;
        color1.style.fill = 'rgb(240,245,64)';
        color2.style.fill = 'rgb(243,42,48)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 22) {
        impostortext.innerText = `${colors[21]} was The Impostor`;
        color1.style.fill = 'rgb(204,204,204)';
        color2.style.fill = 'rgb(153,153,153)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 23) {
        impostortext.innerText = `${colors[22]} was The Impostor`;
        color1.style.fill = 'rgb(252,154,3)';
        color2.style.fill = 'rgb(149,95,21)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 24) {
        impostortext.innerText = `${colors[23]} was The Impostor`;
        color1.style.fill = 'rgb(177,180,255)';
        color2.style.fill = 'rgb(141,145,252)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 25) {
        impostortext.innerText = `${colors[24]} was The Impostor`;
        color1.style.fill = 'rgb(253,188,230)';
        color2.style.fill = 'rgb(255,112,200)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 26) {
        impostortext.innerText = `${colors[25]} was The Impostor`;
        color1.style.fill = 'rgb(161,239,252)';
        color2.style.fill = 'rgb(99,207,233)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 27) {
        impostortext.innerText = `${colors[26]} was The Impostor`;
        color1.style.fill = 'rgb(238,210,251)';
        color2.style.fill = 'rgb(206,126,249)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 28) {
        impostortext.innerText = `${colors[27]} was The Impostor`;
        color1.style.fill = 'rgb(174,244,181)';
        color2.style.fill = 'rgb(122,253,139)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 29) {
        impostortext.innerText = `${colors[28]} was The Impostor`;
        color1.style.fill = 'rgb(251,136,92)';
        color2.style.fill = 'rgb(228,99,80)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 30) {
        impostortext.innerText = `${colors[29]} was The Impostor`;
        color1.style.fill = 'rgb(204,144,230)';
        color2.style.fill = 'rgb(126,107,196)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 31) {
        impostortext.innerText = `${colors[30]} was The Impostor`;
        color1.style.fill = 'rgb(255,194,15)';
        color2.style.fill = 'rgb(207,170,1)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 32) {
        impostortext.innerText = `${colors[31]} was The Impostor`;
        color1.style.fill = 'rgb(177,138,95)';
        color2.style.fill = 'rgb(147,95,74)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 33) {
        impostortext.innerText = `${colors[32]} was The Impostor`;
        color1.style.fill = 'rgb(1,254,145)';
        color2.style.fill = 'rgb(1,231,79)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 34) {
        impostortext.innerText = `${colors[33]} was The Impostor`;
        color1.style.fill = 'rgb(125,51,6)';
        color2.style.fill = 'rgb(78,27,0)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 35) {
        impostortext.innerText = `${colors[34]} was The Impostor`;
        color1.style.fill = 'rgb(0,148,254)';
        color2.style.fill = 'rgb(0,125,191)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 36) {
        impostortext.innerText = `${colors[35]} was The Impostor`;
        color1.style.fill = 'rgb(0,169,198)';
        color2.style.fill = 'rgb(0,125,145)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 37) {
        impostortext.innerText = `${colors[36]} was The Impostor`;
        color1.style.fill = 'rgb(128,128,128)';
        color2.style.fill = 'rgb(64,64,64)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 38) {
        impostortext.innerText = `${colors[37]} was The Impostor`;
        color1.style.fill = 'rgb(176,192,243)';
        color2.style.fill = 'rgb(87,96,161)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 40) {
        impostortext.innerText = `${colors[39]} was The Impostor`;
        color1.style.fill = 'rgb(188,167,138)';
        color2.style.fill = 'rgb(156,136,103)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 41) {
        impostortext.innerText = `${colors[40]} was The Impostor`;
        color1.style.fill = 'rgb(153,141,215)';
        color2.style.fill = 'rgb(136,118,228)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 42) {
        impostortext.innerText = `${colors[41]} was The Impostor`;
        color1.style.fill = 'rgb(200,43,114)';
        color2.style.fill = 'rgb(158,40,100)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
    if(randomColor == 43 || randomColor == 44) {
        impostortext.innerText = `${colors[42]} was The Impostor`;
        color1.style.fill = 'rgb(254,69,2)';
        color2.style.fill = 'rgb(210,43,0)';
        color3.style.fill = color1.style.fill;
        color4.style.fill = color2.style.fill;
    }
}

getColor();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
