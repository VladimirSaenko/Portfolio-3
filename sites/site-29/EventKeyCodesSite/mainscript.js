
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

    if(event.key === 'r' || event.key === 'R') {
        console.log('event.key');
        // body.style.background = '#f00';
        body.style.background = 'red';
    }
    else if (event.keyCode === 71) {
        console.log('event.ketCode');
        body.style.background = '#0f0';
        // body.style.background = 'green';
    }
    else if (event.code === 'KeyB') {
        console.log('event.code');
        // body.style.background = '#00f';
        body.style.background = 'blue';
    }

    else {
        body.style.background = '#e1e1e1';
        // body.style.background = 'white';
    }
})