
"use strict";

let body = document.body;
let unicorn = document.getElementById("kaedwen"); // Kaedwen kingdom
let sun = document.getElementById("nilfgaard"); // Nilfgaard empire
let eagle = document.getElementById("redania"); // Redania kingdom
let drakkar = document.getElementById("drakkar"); // Skellige
let helmet = document.getElementById("helmet"); // Toussaint principality
let axes = document.getElementById("axes"); // Mahakam
let fish = document.getElementById("fish"); // Kerack
let lion = document.getElementById("lion") // Cintra
let dragon = document.getElementById("dragon") // Zerrikania
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let title5 = document.getElementById("title5");
let title6 = document.getElementById("title6");
let title7 = document.getElementById("title7");
let title8 = document.getElementById("title8");
let title9 = document.getElementById("title9");

unicorn.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
    title1.innerHTML = "kaedwen";
    title1.style.color = "black";
})

unicorn.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title1.style.visibility = "hidden";
})

eagle.addEventListener("mousemove",function() {
    body.style.background = "red";
    title2.style.visibility = "visible";
    title2.style.color = "white";
    title2.innerHTML = "redania";
})

eagle.addEventListener('mouseout',function() {
    body.style.background = "#06181f";
    title2.style.visibility = "hidden";
})

sun.addEventListener('mousemove', function() {
    body.style.background = "black"
    title3.style.visibility = "visible";
    title3.style.color = "yellow";
    title3.innerHTML = "nilfgaard";
})

sun.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title3.style.visibility = "hidden";
})

drakkar.addEventListener('mousemove', function() {
    body.style.background = "purple";
    title4.style.visibility = "visible";
    title4.innerHTML = "skellige";
    title4.style.color = "white";
})

drakkar.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title4.style.visibility = "hidden";
})

helmet.addEventListener('mousemove', function() {
    body.style.background = "black";
    title5.style.visibility = "visible";
    title5.innerHTML = "Toussaint";
    title5.style.color = "yellow";
})

helmet.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title5.style.visibility = "hidden";
})

axes.addEventListener('mousemove', function() {
    body.style.background = "black";
    title6.style.visibility = 'visible';
    title6.innerText = "Mahakam";
    title5.style.color = "white";
})

axes.addEventListener('mouseleave', function() {
    body.style.background = "#06181f";
    title6.style.visibility = 'hidden';
})

fish.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title7.style.visibility = 'visible';
    title7.innerText = "Kerack";
    title7.style.color = "black";
})

fish.addEventListener("mouseleave", function() {
    body.style.background = "#06181f";
    title7.style.visibility = 'hidden';
})

lion.addEventListener('mousemove', () => {
    body.style.background = "blue";
    title8.style.visibility = 'visible';
    title8.innerText = "Cintra";
    title8.style.color = "white";
})

lion.addEventListener('mouseleave', () => {
    body.style.background = "#06181f";
    title8.style.visibility = 'hidden';
})

dragon.addEventListener('mousemove', () => {
    body.style.background = "rgb(199, 36, 36)";
    title9.style.visibility = 'visible';
    title9.innerText = "Zerrikania";
    title9.style.color = "white";
})

dragon.addEventListener('mouseleave', () => {
    body.style.background = "#06181f";
    title9.style.visibility = 'hidden';
})