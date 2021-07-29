
"use strict";

const modelViewer = document.getElementById('model');
const animBtn = document.querySelectorAll('.btn-container button');

animBtn.forEach(btns => {
    btns.onclick = () => {
        modelViewer.animationName = btns.innerHTML;
    }
})

// hidenBtn.onclick = () => {
//     document.querySelector('.btn-container').classList.toggle('hide');
//     if(hidenBtn.innerHTML == 'Hide') {
//         hidenBtn.innerHTML = 'Show';
//     }
//     else {
//         hidenBtn.innerHTML = 'Hide';
//     }
// }

// внизу два способа

// function Anim(e) {
//     modelViewer.animationName = e.innerHTML;
// }

// function Idle() {
//     modelViewer.animationName = 'Idle';
// }

// function Dance() {
//     modelViewer.animationName = 'Dance';
// }

// function Running() {
//     modelViewer.animationName = 'Running';
// }

// function Death() {
//     modelViewer.animationName = 'Death';
// }

// function Jump() {
//     modelViewer.animationName = 'Jump';
// }

// function Walking() {
//     modelViewer.animationName = 'Walking';
// }
