
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

    else if(event.keyCode === 71) {
        console.log('event.ketCode');
        body.style.background = '#0f0';
        // body.style.background = 'green';
    }

    else if(event.code === 'KeyB') {
        console.log('event.code');
        // body.style.background = '#00f';
        body.style.background = 'blue';
    }

    else if(event.key === 'w' || event.key === 'W') {
        body.style.background = 'url(backgrounds/w.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.key === 'e' || event.key === 'E') {
        body.style.background = 'url(backgrounds/e.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.key === 't' || event.key === 'T') {
        body.style.background = 'url(backgrounds/t.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.key === 'y' || event.key === 'Y') {
        body.style.background = 'yellow';
    }

    else if(event.key === 'o' || event.key === 'O') {
        body.style.background = 'url(backgrounds/o.jpeg)';
    }

    else if(event.key === 'p' || event.key === 'P') {
        body.style.background = 'pink';
    }

    else if(event.key === '[' || event.key === ']' || event.key === '|' || event.key === ';'
    || event.key === '/' || event.key === ',' || event.key === '.') {
        body.style.background = 'url(backgrounds/skobka.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
    }

    else if(event.key === 'a' || event.key === 'A') {
        body.style.background = 'url(backgrounds/a.jpg)';
    }

    else if(event.key === 's' || event.key === 'S') {
        body.style.background = 'url(backgrounds/s.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundRepeat = 'no-repeat';
    }

    else if(event.key === 'd' || event.key === 'D') {
        body.style.background = 'black';
    }

    else if(event.key === 'd' || event.key === 'D') {
        body.style.background = 'black';
    }

    else if(event.key === 'f' || event.key === 'F') {
        body.style.background = 'url(backgrounds/f.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.key === 'h' || event.key === 'H') {
        body.style.background = 'url(backgrounds/h.png)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
        body.style.backgroundRepeat = 'no-repeat';
    }

    else if(event.key === 'v' || event.key === 'V') {
        body.style.background = 'url(backgrounds/v.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.key === 'x' || event.key === 'X') {
        body.style.background = 'url(backgrounds/x.png)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'auto';
    }

    else if(event.keyCode === 16 || event.keyCode === 18 || event.keyCode === 17 || event.keyCode === 46) {
        body.style.background = 'url(backgrounds/bs.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.keyCode === 13) {
        body.style.background = 'url(backgrounds/enter.jpg)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else if(event.keyCode === 91) {
        body.style.background = 'url(backgrounds/meta.png)';
        body.style.backgroundPosition = 'center';
        body.style.backgroundSize = 'cover';
    }

    else {
        body.style.background = '#e1e1e1';
        // body.style.background = 'white';
    }
})