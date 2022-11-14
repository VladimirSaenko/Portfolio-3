
"use strict";

const messageEl = document.getElementById("msg");
const randomNumb = getRandomNumb();
// const randomNumb = getRandomInt(1, 100);
// console.log("Number: ", randomNumb);

function getRandomNumb() {
    return Math.floor(Math.random() * 100) + 1; // 1 - 100
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.lang = 'ru-RU';
recognition.start();

function writeMessage(message) {
    messageEl.innerHTML = `
    <div>You said: </div>
    <span class="box">${message}</span>
    `;
}

function checkNumber(msg) {
    const num = +msg;
    // const num = msg === 'один' ? 1 : +msg;
    console.log(num);
    if(num === 300) {
        messageEl.innerHTML = '<div>Make a good in Tractorist!</div>';
        return;
    }
    if(isNaN(num)) {
        messageEl.innerHTML += '<div>That is not a valid number</div>';
        return;
    }
    if(num > 100 || num < 1) {
        messageEl.innerHTML += '<div>Number must be between 1 and 100</div>';
        return;
    }
    if(num === randomNumb) {
        document.body.innerHTML = `
        <h2>Congrats! You have guessed the number! 
        <br></br> It was ${num} !
        </h2>
        <button class="play-again" id="play-again">Play Again</button>
        `;
    }
    else if(num > randomNumb) {
        messageEl.innerHTML += '<div>GO LOWER </div>';
    } else {
        messageEl.innerHTML += '<div>GO HIGHER </div>';
    }
}

function onSpeek(e) {
    console.log(e);
    const msg = e.results[0][0].transcript;
    writeMessage(msg);
    checkNumber(msg);
}

recognition.addEventListener('result', onSpeek);
recognition.addEventListener('end', function() {
    recognition.start();
});

// document.getElementById('play-again').addEventListener('click', () => {
//     window.location.reload;
//     // location.reload;
// })

document.body.addEventListener('click', (e) => {
    if(e.target.id == "play-again") {
        window.location.reload();
        location.reload();
    }
})

// checkNumber(randomNumb);
// checkNumber(randomNumb + 10);
// checkNumber(randomNumb - 10);
// checkNumber('qwe'); //NaN
// checkNumber('2'); // 2
// checkNumber('-2');
// checkNumber('2qwe'); //NaN

// const writeMessage(message) {
//     messageEl.innerHTML = `
//     <div>You said: </div>
//     <span class="box">${message}</span>
//     `; 
// } 

// writeMessage("aboba");


// const getRandomNumb = () => {
//     return Math.floor(Math.random() * 100) + 1; // 1 - 100
// }

// const getRandomNumb = () => Math.floor(Math.random() * 100) + 1;

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }