
"use strict";

const finder = (key, element) => {
    return element.dataset.key == key;
}

const playSound = (audio, block) => {
    audio.play();
    block.classList.add("playing");
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        block.classList.remove("playing");
    }, 150);
}

const audios = [...document.querySelectorAll("audio")];
const keysBlocks = [...document.querySelectorAll('.key')];

window.addEventListener('keydown', (event) => {
    // console.log(event);
    // const keyCode = event.keyCode;
    const { keyCode } = event;
    const finderWithKey = finder.bind(null, keyCode);
    const currentAudio = audios.find(finderWithKey);
    const currentBlock = keysBlocks.find(finderWithKey);
    currentAudio && playSound(currentAudio, currentBlock);
    // const currentAudio = audios.filter((element) => element.dataset.key == keyCode)[0];
})

function playingSound() {
    const { keyCode } = event;
    const finderWithKey = finder.bind(null, keyCode);
    const currentAudio = audios.find(finderWithKey);
    const currentBlock = keysBlocks.find(finderWithKey);
    currentAudio && playSound(currentAudio, currentBlock);
}

function key1() {
    let audio1 = document.getElementById("a1");
    audio1.play();
}

function key2() {
    let audio2 = document.getElementById("a2");
    audio2.play();
}

function key3() {
    let audio3 = document.getElementById("a3");
    audio3.play();
}

function key4() {
    let audio4 = document.getElementById("a4");
    audio4.play();
}

function key5() {
    let audio5 = document.getElementById("a5");
    audio5.play();
}

function key6() {
    let audio6 = document.getElementById("a6");
    audio6.play();
}

function key7() {
    let audio7 = document.getElementById("a7");
    audio7.play();
}

function key8() {
    let audio8 = document.getElementById("a8");
    audio8.play();
}
