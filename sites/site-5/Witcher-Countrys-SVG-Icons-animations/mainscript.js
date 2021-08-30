
"use strict";

let body = document.body;
let unicorn = document.getElementById("kaedwen");
let sun = document.getElementById("nilfgaard");
let eagle = document.getElementById("redania");
let drakkar = document.getElementById("drakkar");
let helmet = document.getElementById("helmet");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let title5 = document.getElementById("title5");

unicorn.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
    title1.innerHTML = "kaedwen";
    title1.style.color = "black";
    // sun.style.visibility = "hidden";
    // eagle.style.visibility = "hidden";
    // drakkar.style.visibility = "hidden";
    // helmet.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
})

unicorn.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title1.style.visibility = "hidden";
    // sun.style.visibility = "visible";
    // eagle.style.visibility = "visible";
    // drakkar.style.visibility = "visible";
    // helmet.style.visibility = "visible";
})

eagle.addEventListener("mousemove",function() {
    body.style.background = "red";
    title2.style.visibility = "visible";
    title2.style.color = "white";
    title2.innerHTML = "redania";
    // sun.style.visibility = "hidden";
    // unicorn.style.visibility = "hidden";
    // drakkar.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
})

eagle.addEventListener('mouseout',function() {
    body.style.background = "#06181f";
    sun.style.visibility = "visible";
    title2.style.visibility = "hidden";
    // unicorn.style.visibility = "visible";
    // drakkar.style.visibility = "visible";
    // helmet.style.visibility = "visible";
})

sun.addEventListener('mousemove', function() {
    body.style.background = "black"
    title3.style.visibility = "visible";
    title3.style.color = "yellow";
    title3.innerHTML = "nilfgaard";
    // eagle.style.visibility = "hidden";
    // unicorn.style.visibility = "hidden";
    // drakkar.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title4.style.visibility = "hidden";
    title5.style.visibility = "hidden";
})

sun.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title3.style.visibility = "hidden";
    // eagle.style.visibility = "visible";
    // unicorn.style.visibility = "visible";
    // drakkar.style.visibility = "visible";
    // helmet.style.visibility = "visible";
})

drakkar.addEventListener('mousemove', function() {
    body.style.background = "purple";
    title4.style.visibility = "visible";
    title4.innerHTML = "skellige";
    title4.style.color = "white";
    // sun.style.visibility = "hidden";
    // eagle.style.visibility = "hidden";
    // unicorn.style.visibility = "hidden";
    // helmet.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title5.style.visibility = "hidden";
})

drakkar.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title4.style.visibility = "hidden";
    // eagle.style.visibility = "visible";
    // unicorn.style.visibility = "visible";
    // sun.style.visibility = "visible";
    // helmet.style.visibility = "visible";
})

helmet.addEventListener('mousemove', function() {
    body.style.background = "black";
    title5.style.visibility = "visible";
    title5.innerHTML = "Toussaint";
    title5.style.color = "yellow";
    // sun.style.visibility = "hidden";
    // eagle.style.visibility = "hidden";
    // unicorn.style.visibility = "hidden";
    // drakkar.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
    title4.style.visibility = "hidden";
})

helmet.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title5.style.visibility = "hidden";
    // eagle.style.visibility = "visible";
    // unicorn.style.visibility = "visible";
    // sun.style.visibility = "visible";
    // drakkar.style.visibility = "visible";
})
