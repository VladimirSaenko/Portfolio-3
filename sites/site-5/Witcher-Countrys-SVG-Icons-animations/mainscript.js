
"use strict"

let body = document.body;
let unicorn = document.getElementById("kaedwen");
let sun = document.getElementById("nilfgaard");
let eagle = document.getElementById("redania");
let drakkar = document.getElementById("drakkar");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");

function otherWise() {
    if(window.matchMedia("(max-width: 600px)")) {
        unicorn.addEventListener('click',function() {
            body.style.background = "yellow";
            body.style.display = "flex";
            body.style.justifyContent = "center";
            body.style.alignItems = "center";
            title1.style.visibility = "visible";
            title1.innerHTML = "kaedwen";
            title1.style.color = "black";
            sun.style.display = "none";
            eagle.style.display = "none";
            title2.style.visibility = "hidden";
            title3.style.visibility = "hidden";
        })
        eagle.addEventListener('click', function() {
            body.style.display = "flex";
            body.style.justifyContent = "center";
            body.style.alignItems = "center";
            body.style.background = "red";
            title2.style.visibility = "visible";
            title2.style.color = "white";
            title2.innerHTML = "redania";
            sun.style.display = "none";
            unicorn.style.display = "none";
            title1.style.visibility = "hidden";
            title3.style.visibility = "hidden";
        })
        sun.addEventListener('click', function() {
            body.style.display = "flex"; 
            body.style.justifyContent = "center";
            body.style.alignItems = "center";
            body.style.background = "black"
            title3.style.visibility = "visible";
            title3.style.color = "yellow";
            title3.innerHTML = "nilfgaard";
            eagle.style.display = "none";
            unicorn.style.display = "none";
            title1.style.visibility = "hidden";
            title2.style.visibility = "hidden";
        })
        drakkar.addEventListener('click', function() {
            body.style.display = "flex"; 
            body.style.justifyContent = "center";
            body.style.alignItems = "center";
            body.style.background = "purple"
            title4.style.visibility = "visible";
            title4.style.color = "white";
            title4.innerHTML = "skellige";
            eagle.style.display = "none";
            unicorn.style.display = "none";
            sun.style.display = "none";
            title1.style.visibility = "hidden";
            title2.style.visibility = "hidden";
            title3.style.visibility = "hidden";
        })
    }
}

unicorn.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
    title1.innerHTML = "kaedwen";
    title1.style.color = "black";
    sun.style.visibility = "hidden";
    eagle.style.visibility = "hidden";
    drakkar.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

unicorn.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title1.style.visibility = "hidden";
    sun.style.visibility = "visible";
    eagle.style.visibility = "visible";
    drakkar.style.visibility = "visible";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

eagle.addEventListener("mousemove",function() {
    body.style.background = "red";
    title2.style.visibility = "visible";
    title2.style.color = "white";
    title2.innerHTML = "redania";
    sun.style.visibility = "hidden";
    unicorn.style.visibility = "hidden";
    drakkar.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

eagle.addEventListener('mouseout',function() {
    body.style.background = "#06181f";
    sun.style.visibility = "visible";
    unicorn.style.visibility = "visible";
    drakkar.style.visibility = "visible";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
})

sun.addEventListener('mousemove', function() {
    body.style.background = "black"
    title3.style.visibility = "visible";
    title3.style.color = "yellow";
    title3.innerHTML = "nilfgaard";
    eagle.style.visibility = "hidden";
    unicorn.style.visibility = "hidden";
    drakkar.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title4.style.visibility = "hidden";
})

sun.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title3.style.visibility = "hidden";
    eagle.style.visibility = "visible";
    unicorn.style.visibility = "visible";
    drakkar.style.visibility = "visible";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

drakkar.addEventListener('mousemove', function() {
    body.style.background = "purple";
    title4.style.visibility = "visible";
    title4.innerHTML = "skellige";
    title4.style.color = "white";
    sun.style.visibility = "hidden";
    eagle.style.visibility = "hidden";
    unicorn.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

drakkar.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title4.style.visibility = "hidden";
    eagle.style.visibility = "visible";
    unicorn.style.visibility = "visible";
    sun.style.visibility = "visible";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

otherWise();