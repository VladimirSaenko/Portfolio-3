
"use strict";

const insert = document.getElementById("insert");
const body = document.body;
const keys = document.querySelectorAll('.keyboard-row button');

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

keys.forEach(key => {
    key.onclick = () => {
        insert.innerHTML = `
        <div class='key'>
            ${key.getAttribute('data-key')}
            <small>event.key</small>
        </div>
    
        <div class='key'>
        ${key.getAttribute('data-keycode')}
        <small>event.keyCode</small>
        </div>
    
        <div class='key'>
        ${key.getAttribute('data-key')}
        <small>event.code</small>
        </div>
        `;
    body.style.background = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
    }
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}