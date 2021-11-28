
"use strict";

const form = document.getElementById("form");
const todoInput = document.getElementById('input');
const todosList = document.getElementById("todos");
const button = document.getElementById('btn');

function addToDo(todo) {
    let todoText = todoInput.value;
    if(todo) {
        todoText = todo.text;
    }
    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }
        todoEl.innerText = todoText;
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
            updateLocalStorage();
        });
        todoEl.addEventListener('contextmenu', (eve) => {
            eve.preventDefault();
            todoEl.remove();
            updateLocalStorage();
        });
        todosList.appendChild(todoEl);
        todoInput.value = '';
        updateLocalStorage();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo();
});

function updateLocalStorage() {
    const todosEl = document.querySelectorAll('li');
    const todos = [];
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

const todosSaves = JSON.parse(localStorage.getItem('todos'));

if(todosSaves) {
    todosSaves.forEach(todo => addToDo(todo));
}

button.addEventListener('click', () => {
    localStorage.removeItem('todos');
    location.reload();
});