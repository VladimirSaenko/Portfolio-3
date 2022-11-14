
"use strict";

const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

textarea.focus();

function countLetters() {
    const textWithoutSpace = textarea.value.replace(/\s/g, '');
    const textLength = textWithoutSpace.length;
    count.innerHTML = textLength;
}
