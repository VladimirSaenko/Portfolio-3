
"use strict";

const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

const listItems = [];
let dragStartIndex;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createList() {
    let randomPeople = [...richestPeople]; //shuffleArray(richestPeople);
    shuffleArray(randomPeople);

    randomPeople.forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;
        listItems.push(listItem);
        draggableList.appendChild(listItem);
    });

    addEventListeners();
}

createList();

function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');
    draggables.forEach(item => {
        item.addEventListener('dragstart', dragStart)
    })
    dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}

function dragStart() {
    // console.log("Event: dragStart");
    // console.log('event', e);
    // console.log('this', this);
    dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragOver(e) {
    // console.log("Event: dragOver");
    e.preventDefault();
}

function dragDrop() {
    // console.log("Event: dragDrop");
    const dragEndIndex = +this.getAttribute('data-index');
	swapItems(dragStartIndex, dragEndIndex);
	this.classList.remove('over');
}

function dragEnter() {
    // console.log("Event: dragEnter");
    this.classList.add('over');
}

function dragLeave() {
    // console.log("Event: dragLeave");
    this.classList.remove('over');
}

function checkOrder() {
    listItems.forEach((item, index) => {
        const personName = item.querySelector('.draggable').innerText.trim();
        if(personName !== richestPeople[index]) {
            item.classList.add('wrong');
        } else {
            item.classList.add('right');
            item.classList.remove('wrong');
        }
    })
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

check.addEventListener('click', checkOrder);