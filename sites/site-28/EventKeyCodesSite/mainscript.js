
"use strict";

const insert = document.getElementById("insert");
const body = document.body;

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class='key'>
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class='key'>
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class='key'>
    ${event.code}
    <small>event.code</small>
    </div>

    `;

    body.style.background = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}