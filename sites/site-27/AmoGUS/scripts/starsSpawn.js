
"use strict"

function starsSpawn() {
    let count = 100;
    let i = 0;
    while(i < count) {
        // console.log(i);
        let scene = document.getElementById('scene');
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 12;
        let duration = Math.random() * 5;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = 5 + duration + 's';
        star.style.animationDelay = duration + 's';
        scene.appendChild(star);
        i++;
    }
}

starsSpawn();
