
"use strict";

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove',(e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

function changeCursor() {
    cursor.style.width = 60 + 'px';
    cursor.style.height = 60 + 'px';
    cursor.style.border = '3.5px solid #2196f3';
}

function defaultCursor() {
    cursor.style.width = 0 + 'px';
    cursor.style.height = 0 + 'px';
}

const items = document.querySelectorAll('.changeCursor');

items.forEach(i => {
    i.onmousemove = changeCursor;
    i.onmouseout = defaultCursor;
});
