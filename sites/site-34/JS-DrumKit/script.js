
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

// console.log(audios);