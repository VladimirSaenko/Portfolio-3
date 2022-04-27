
"use strict";

let body = document.body;
let unicorn = document.getElementById("kaedwen"); // Kaedwen kingdom
let sun = document.getElementById("nilfgaard"); // Nilfgaard empire
let eagle = document.getElementById("redania"); // Redania kingdom
let drakkar = document.getElementById("drakkar"); // Skellige
let helmet = document.getElementById("helmet"); // Toussaint principality
let axes = document.getElementById("axes"); // Mahakam
let fish = document.getElementById("fish"); // Kerack principality
let lion = document.getElementById("lion") // Cintra kingdom
let dragon = document.getElementById("dragon") // Zerrikania kingdom
let temerianLily = document.getElementById("temeria"); // Temeria kingdom
let nazairRose = document.getElementById("nazairRose"); // Nazair

let path8386 = document.getElementById("path8386") // lily Temerian
let path8404 = document.getElementById("path8404"); // lily Temerian
let path8406 = document.getElementById("path8406"); // lily Temerian
let path8417 = document.getElementById("path8417"); // lily Temerian
let path10182 = document.getElementById("path10182"); // lily Temerian
let path11949 = document.getElementById("path11949"); // lily Temerian
let path11074 = document.getElementById("path11074"); // lily Temerian

let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let title5 = document.getElementById("title5");
let title6 = document.getElementById("title6");
let title7 = document.getElementById("title7");
let title8 = document.getElementById("title8");
let title9 = document.getElementById("title9");
let title10 = document.getElementById("title10");
let title11 = document.getElementById("title11");

path8386.style.fill = 'rgb(6, 24, 31)'; // lily Temerian
path8404.style.fill = 'rgb(6, 24, 31)'; // lily Temerian
path8406.style.fill = 'rgb(6, 24, 31)'; // lily Temerian
path8417.style.fill = 'rgb(6, 24, 31)'; // lily Temerian
path8386.style.stroke = '#31e8ff'; // lily Temerian
path8404.style.stroke = '#31e8ff'; // lily Temerian
path8406.style.stroke = '#31e8ff'; // lily Temerian
path8417.style.stroke = '#31e8ff'; // lily Temerian
path10182.style.fill = '#31e8ff'; // lily Temerian
path11949.style.fill = '#31e8ff'; // lily Temerian
path11074.style.fill = '#31e8ff'; // lily Temerian

function returnColorsTemerianLily() {
    path8386.style.fill = 'rgb(6, 24, 31)';
    path8404.style.fill = 'rgb(6, 24, 31)';
    path8406.style.fill = 'rgb(6, 24, 31)';
    path8417.style.fill = 'rgb(6, 24, 31)';
    path8386.style.stroke = '#31e8ff';
    path8404.style.stroke = '#31e8ff';
    path8406.style.stroke = '#31e8ff';
    path8417.style.stroke = '#31e8ff';
    path10182.style.fill = '#31e8ff';
    path11949.style.fill = '#31e8ff';
    path11074.style.fill = '#31e8ff';
}

function returnBg() {
    body.style.background = "#06181f";
}

unicorn.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
    title1.innerHTML = "kaedwen";
    title1.style.color = "black";
    path8386.style.fill = 'yellow';
    path8404.style.fill = 'yellow';
    path8406.style.fill = 'yellow';
    path8417.style.fill = 'yellow';
})

unicorn.addEventListener('mouseout', function() {
    returnBg();
    title1.style.visibility = "hidden";
    returnColorsTemerianLily();
})

eagle.addEventListener("mousemove",function() {
    body.style.background = "red";
    title2.style.visibility = "visible";
    title2.style.color = "white";
    title2.innerHTML = "redania";
    path8386.style.fill = 'red';
    path8404.style.fill = 'red';
    path8406.style.fill = 'red';
    path8417.style.fill = 'red';
})

eagle.addEventListener('mouseout',function() {
    returnBg();
    title2.style.visibility = "hidden";
    returnColorsTemerianLily();
})

sun.addEventListener('mousemove', function() {
    body.style.background = "black"
    title3.style.visibility = "visible";
    title3.style.color = "yellow";
    title3.innerHTML = "nilfgaard";
})

sun.addEventListener('mouseout', function() {
    returnBg();
    title3.style.visibility = "hidden";
})

drakkar.addEventListener('mousemove', function() {
    body.style.background = "purple";
    title4.style.visibility = "visible";
    title4.innerHTML = "skellige";
    title4.style.color = "white";
    path8386.style.fill = 'purple';
    path8404.style.fill = 'purple';
    path8406.style.fill = 'purple';
    path8417.style.fill = 'purple';
})

drakkar.addEventListener('mouseout', function() {
    returnBg();
    title4.style.visibility = "hidden";
    returnColorsTemerianLily();
})

helmet.addEventListener('mousemove', function() {
    body.style.background = "black";
    title5.style.visibility = "visible";
    title5.innerHTML = "Toussaint";
    title5.style.color = "yellow";
})

helmet.addEventListener('mouseout', function() {
    returnBg();
    title5.style.visibility = "hidden";
})

axes.addEventListener('mousemove', function() {
    body.style.background = "black";
    title6.style.visibility = 'visible';
    title6.innerText = "Mahakam";
    title5.style.color = "white";
})

axes.addEventListener('mouseleave', function() {
    returnBg();
    title6.style.visibility = 'hidden';
})

fish.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title7.style.visibility = 'visible';
    title7.innerText = "Kerack";
    title7.style.color = "black";
    path8386.style.fill = 'yellow';
    path8404.style.fill = 'yellow';
    path8406.style.fill = 'yellow';
    path8417.style.fill = 'yellow';
})

fish.addEventListener("mouseleave", function() {
    returnBg();
    title7.style.visibility = 'hidden';
    returnColorsTemerianLily();
})

lion.addEventListener('mousemove', () => {
    body.style.background = "blue";
    title8.style.visibility = 'visible';
    title8.innerText = "Cintra";
    title8.style.color = "white";
    path8386.style.fill = 'blue';
    path8404.style.fill = 'blue';
    path8406.style.fill = 'blue';
    path8417.style.fill = 'blue';
})

lion.addEventListener('mouseleave', () => {
    returnBg();
    title8.style.visibility = 'hidden';
    returnColorsTemerianLily();
})

dragon.addEventListener('mousemove', () => {
    body.style.background = "rgb(199, 36, 36)";
    title9.style.visibility = 'visible';
    title9.innerText = "Zerrikania";
    title9.style.color = "white";
    path8386.style.fill = 'red';
    path8404.style.fill = 'red';
    path8406.style.fill = 'red';
    path8417.style.fill = 'red';
})

dragon.addEventListener('mouseleave', () => {
    title9.style.visibility = 'hidden';
    returnBg();
    returnColorsTemerianLily();
})

temerianLily.addEventListener('mousemove', () => {
    body.style.background = 'black';
    title10.style.visibility = 'visible';
    title10.innerText = 'Temeria';
    title10.style.color = 'white';
})

temerianLily.addEventListener('mouseleave', () => {
    title10.style.visibility = 'hidden';
    returnBg();
})

nazairRose.addEventListener('mousemove', () => {
    body.style.background = '#000';
    title11.style.visibility = 'visible';
    title11.innerText = 'Nazair';
    title11.style.color = 'white';
})

nazairRose.addEventListener('mouseleave', () => {
    title11.style.visibility = 'hidden';
    returnBg();
})
