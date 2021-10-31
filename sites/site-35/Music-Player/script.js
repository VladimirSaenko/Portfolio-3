/* TODO
*		Add play/pause song
*		Add song titles and pictures
*		Add switch songs
*		Add progress bar
*		Add current song time and duration for that song
*		Add setting the current time with the mouse
*/

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

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    // songIndex = songIndex < 0 ? songs.length - 1: songIndex;

    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevSong);

function getSongBg() {
    if(title.innerText == 'Summer') {
        body.style.backgroundImage = 'linear-gradient(135deg, #92FFC0 10%, #002661 100%)';
        title.style.color = "black";
        mainTitle.style.color = "black";
        musicContainer.classList.add("summer");
    }
    else if(title.innerText == 'Phoenix') {
        body.style.background = 'linear-gradient(50deg, #cfcb0c 47%, #d90909 100%)';
        title.style.color = "black";
        mainTitle.style.color = "black";
        musicContainer.classList.add("phoenix");
    }
    else if(title.innerText == 'Rock') {
        body.style.background = 'linear-gradient(135deg, #000000 25%, #0d138f 100%)';
        title.style.color = "white";
        mainTitle.style.color = "white";
        musicContainer.classList.add("rock");
    }
    else if(title.innerText == 'Hyper') {
        body.style.background = 'linear-gradient(135deg, #FEC163 10%, #DE4313 100%)';
        title.style.color = "black";
        mainTitle.style.color = "black";
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
    }
    else if(title.innerText == 'Tom') {
        body.style.background = 'linear-gradient(135deg, #fcab1e 50%, #1a1b21 100%)';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
    }
    else if(title.innerText == 'Hey') {
        body.style.background = 'linear-gradient(135deg, #ebd3d3 10%, #d90909 100%)';
        musicContainer.classList.add("hey");
    }
    else if(title.innerText == 'Astronomia') {
        body.style.background = 'url(images/coffindance.gif)';
        title.style.textShadow = 'white 1px 2px 1px';
        mainTitle.style.textShadow = 'white 1px 2px 1px';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
    }
    else {
        body.style.background = 'linear-gradient(0deg,rgba(247, 247, 247, 1) 23.8%, rgba(252, 221, 221, 1) 92%)';
        musicContainer.classList.remove("summer");
        musicContainer.classList.remove("phoenix");
        musicContainer.classList.remove("rock");
        musicContainer.classList.remove("hey");
    }
}