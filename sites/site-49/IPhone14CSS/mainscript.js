"use strict";

const inner = document.getElementById("bg");
const dynamicIsland = document.getElementById("d_island");
const iphoneBody = document.querySelector('.iphone');

// inner.style.backgroundSize = 'cover !important'; // if styles not working
// inner.style.backgroundPosition = 'center !important'; // if styles not working
inner.style.background = `url(images/bg${getRandomInt(1, 4)}.png)`;

dynamicIsland.onclick = () => {
    dynamicIsland.classList.toggle('active');
}

iphoneBody.addEventListener('mouseout', () => {
    inner.style.background = `url(images/bg${getRandomInt(1, 4)}.png)`;
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}