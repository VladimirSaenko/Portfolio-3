
"use strict";

let tagsElement = document.getElementById('tags'); 
const textarea = document.getElementById('textarea');
const colorInp = document.getElementById('colorInp');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if(e.key === 'Enter') {
        setTimeout(function() {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '');
    // const tags = input.split('!').filter(tag => tag.trim() !== '');
    tagsElement.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerHTML = tag;
        tagsElement.appendChild(tagElement);

        tagElement.style.background = colorInp.value;

        colorInp.addEventListener('change', function() {
            tagElement.style.background = colorInp.value;
        });
    });
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(function() {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(function(){
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
    // const kek = Math.random() * tags.length;
    // const lol = Math.floor(kek);
    // const azaza = tags[lol];
    // return azaza;
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
