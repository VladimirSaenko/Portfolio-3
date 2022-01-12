
"use strict";

let body = document.body;
let unicorn = document.getElementById("kaedwen");
let sun = document.getElementById("nilfgaard");
let eagle = document.getElementById("redania");
let drakkar = document.getElementById("drakkar");
let helmet = document.getElementById("helmet");
let axes = document.getElementById("axes");
let fish = document.getElementById("fish");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let title5 = document.getElementById("title5");
let title6 = document.getElementById("title6");
let title7 = document.getElementById("title7");

unicorn.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
    title1.innerHTML = "kaedwen";
    title1.style.color = "black";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
    title6.style.visibility = "hidden";
    title7.style.visibility = "hidden";
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
    title1.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
    title6.style.visibility = "hidden";
    title7.style.visibility = "hidden";
})

eagle.addEventListener('mouseout',function() {
    body.style.background = "#06181f";
    sun.style.visibility = "visible";
    title2.style.visibility = "hidden";
})

sun.addEventListener('mousemove', function() {
    body.style.background = "black"
    title3.style.visibility = "visible";
    title3.style.color = "yellow";
    title3.innerHTML = "nilfgaard";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
    title6.style.visibility = "hidden";
    title7.style.visibility = "hidden";
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
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title5.style.visibility = "hidden";
    title6.style.visibility = "hidden";
    title7.style.visibility = "hidden";
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
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title6.style.visibility = "hidden";
    title7.style.visibility = "hidden";
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
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
    title7.style.visibility = "hidden";
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
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
    title6.style.visibility = "hidden";
})

fish.addEventListener("mouseleave", function() {
    body.style.background = "#06181f";
    title7.style.visibility = 'hidden';
})
