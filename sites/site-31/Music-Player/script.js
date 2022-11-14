"use strict";

const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const body = document.body;
const mainTitle = document.getElementById("main-title");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const currentTimeEl = document.getElementById("currTime");
const durationTimeEl = document.getElementById("durTime");

const songs = ['hey', 'summer', 'ukulele', 'astronomia', 'hyper', 'phoenix', 'rock', 'tom'];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    // console.log(title.innerText);
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
    // audio.play();
    getSongBg();
    setColorInProgress();
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function PauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

playBtn.addEventListener('click', function() {
    const isPlaying = musicContainer.classList.contains('play');
    isPlaying ? PauseSong() : playSong();
    // if(isPlaying) {
    //     PauseSong();
    // }
    // else {
    //     playSong();
    // }
})

prevBtn.addEventListener('click', prevSong);

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    // songIndex = songIndex < 0 ? songs.length - 1: songIndex;

    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener('click', nextSong);

function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    // console.log(e);
    // const duration = e.srcElement.duration;
    // const currentTime = e.srcElement.currentTime;
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    setColorInProgress();
}

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e) {
    // console.log(e);
    // console.log(e.offsetX);
    // console.log(this.clientWidth);
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
    setColorInProgress();
}

progressContainer.addEventListener('click', setProgress);

function durationTimeSong(e) {
    const {duration, currentTime} = e.srcElement;
    currentTimeEl.innerText = formatDuration(currentTime);
    durationTimeEl.innerText = formatDuration(duration);
}

function formatDuration(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    const resaultMin = min < 10 ? '0' + min : min;
    const resaultSec = sec < 10 ? '0' + sec : sec;
    // return `${resaultMin} : ${resaultSec}`;
    const result = `${resaultMin} : ${resaultSec}`;
    // return result;
    return seconds ? result : '00 : 00';
}

audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', durationTimeSong);

function getSongBg() {
    // title.style.color = "black";
    // mainTitle.style.color = "black";
    if(title.innerText == 'Summer') {
        body.style.backgroundImage = 'linear-gradient(135deg, #92FFC0 10%, #002661 100%)';
        musicContainer.classList.add("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
        musicContainer.classList.remove("tom");
    }
    else if(title.innerText == 'Phoenix') {
        body.style.background = 'linear-gradient(50deg, #cfcb0c 47%, #d90909 100%)';
        musicContainer.classList.add("phoenix");
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
        musicContainer.classList.remove("tom");
    }
    else if(title.innerText == 'Rock') {
        body.style.background = 'linear-gradient(135deg, red 45%, #0d138f 100%)';
        musicContainer.classList.add("rock");
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("hey");
        musicContainer.classList.remove("tom");
    }
    else if(title.innerText == 'Hyper') {
        body.style.background = 'linear-gradient(135deg, #FEC163 10%, #DE4313 100%)';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
        musicContainer.classList.remove("tom");
    }
    else if(title.innerText == 'Tom') {
        body.style.background = 'linear-gradient(326deg, black 21%, rgba(221,213,45,0.9110994739692753) 56%)';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
        musicContainer.classList.add("tom");
    }
    else if(title.innerText == 'Hey') {
        body.style.background = 'linear-gradient(135deg, #ebd3d3 10%, #d90909 100%)';
        musicContainer.classList.add("hey");
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("tom");
    }
    else if(title.innerText == 'Astronomia') {
        body.style.background = 'url(images/coffindance.gif)';
        title.style.textShadow = 'white 1px 2px 1px';
        mainTitle.style.textShadow = 'white 1px 2px 1px';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
        musicContainer.classList.remove("tom");
    }
    else {
        body.style.background = 'linear-gradient(0deg,rgba(247, 247, 247, 1) 23.8%, rgba(252, 221, 221, 1) 92%)';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
        musicContainer.classList.remove("tom");
    }
}

function setColorInProgress() {
    if(title.innerText == 'Summer') {
        progress.style.backgroundColor = 'rgba(30, 250, 202, 0.6)';
    }
    else if(title.innerText == 'Rock') {
        progress.style.backgroundColor = 'darkblue';
    }
    else if(title.innerText == 'Tom') {
        progress.style.backgroundColor = 'yellow';
    }
    else if(title.innerText == 'Hey' || title.innerText == 'Phoenix' || title.innerText == 'Hyper') {
        progress.style.backgroundColor = 'red';
    }
    else if(title.innerText == 'Astronomia') {
        progress.style.backgroundColor = '#fe8daa';
    }
    else {
        progress.style.backgroundColor = '#fe8daa';
    }
}
