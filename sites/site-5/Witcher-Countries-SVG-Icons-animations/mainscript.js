
"use strict";

let body = document.body;
const unicorn = document.getElementById("kaedwen"); // Kaedwen kingdom
const sun = document.getElementById("nilfgaard"); // Nilfgaard empire
const eagle = document.getElementById("redania"); // Redania kingdom
const drakkar = document.getElementById("drakkar"); // Skellige
const helmet = document.getElementById("helmet"); // Toussaint principality
const axes = document.getElementById("axes"); // Mahakam
const fish = document.getElementById("fish"); // Kerack principality
const lion = document.getElementById("lion") // Cintra kingdom
const dragon = document.getElementById("dragon") // Zerrikania
const temerianLily = document.getElementById("temeria"); // Temeria kingdom
const nazairRose = document.getElementById("nazairRose"); // Nazair
const elvesArrows = document.getElementById("arrows"); // Elves/Dol Blathanna

let path8386 = document.getElementById("path8386") // lily Temerian
let path8404 = document.getElementById("path8404"); // lily Temerian
let path8406 = document.getElementById("path8406"); // lily Temerian
let path8417 = document.getElementById("path8417"); // lily Temerian
let path10182 = document.getElementById("path10182"); // lily Temerian
let path11949 = document.getElementById("path11949"); // lily Temerian
let path11074 = document.getElementById("path11074"); // lily Temerian
let path10190 = document.getElementById("path10190"); // lily Temerian

let title1 = document.getElementById("title1"); // Kaedwen
let title2 = document.getElementById("title2"); // Nilfgaard
let title3 = document.getElementById("title3"); // Redania
let title4 = document.getElementById("title4"); // Skellige
let title5 = document.getElementById("title5"); // Toussaint
let title6 = document.getElementById("title6"); // Mahakam
let title7 = document.getElementById("title7"); // Kerack
let title8 = document.getElementById("title8"); // Cintra
let title9 = document.getElementById("title9"); // Zerrikania
let title10 = document.getElementById("title10"); // Temeria
let title11 = document.getElementById("title11"); // Nazair
let title12 = document.getElementById("title12"); // Elves/Dol Blathanna

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
path10190.style.fill = 'rgb(49, 232, 255)'; // lily Temerian

function returnColorsTemerianLily() {
    path8386.style.fill = 'rgb(6, 24, 31)';
    path8404.style.fill = 'rgb(6, 24, 31)';
    path8406.style.fill = 'rgb(6, 24, 31)';
    path8417.style.fill = 'rgb(6, 24, 31)';
    path8386.style.stroke = '#31e8ff';
    path8404.style.stroke = '#31e8ff';
    path8406.style.stroke = '#31e8ff';
    path8417.style.stroke = '#31e8ff';
}

function returnBg() {
    body.style.background = "#06181f";
}

unicorn.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
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
    path8386.style.fill = 'black';
    path8404.style.fill = 'black';
    path8406.style.fill = 'black';
    path8417.style.fill = 'black';
})

sun.addEventListener('mouseout', function() {
    returnBg();
    returnColorsTemerianLily();
    title3.style.visibility = "hidden";
})

drakkar.addEventListener('mousemove', function() {
    body.style.background = "purple";
    title4.style.visibility = "visible";
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
    title5.style.color = "yellow";
    path8417.style.fill = 'black';
    path8386.style.fill = 'black';
    path8404.style.fill = 'black';
    path8406.style.fill = 'black';
})

helmet.addEventListener('mouseout', function() {
    returnBg();
    title5.style.visibility = "hidden";
    returnColorsTemerianLily();
})

axes.addEventListener('mousemove', function() {
    body.style.background = "black";
    title6.style.visibility = 'visible';
    title5.style.color = "white";
    path8417.style.fill = 'black';
    path8386.style.fill = 'black';
    path8404.style.fill = 'black';
    path8406.style.fill = 'black';
})

axes.addEventListener('mouseleave', function() {
    returnBg();
    returnColorsTemerianLily();
    title6.style.visibility = 'hidden';
})

fish.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title7.style.visibility = 'visible';
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
    title10.style.color = 'white';
})

temerianLily.addEventListener('mouseleave', () => {
    title10.style.visibility = 'hidden';
    returnBg();
})

nazairRose.addEventListener('mousemove', () => {
    body.style.background = '#000';
    title11.style.visibility = 'visible';
    title11.style.color = 'white';
    path8417.style.fill = 'black';
    path8386.style.fill = 'black';
    path8404.style.fill = 'black';
    path8406.style.fill = 'black';
})

nazairRose.addEventListener('mouseleave', () => {
    title11.style.visibility = 'hidden';
    returnBg();
    returnColorsTemerianLily();
})

elvesArrows.addEventListener('mousemove', () => {
    body.style.background = 'green';
    title12.style.visibility = 'visible';
    title12.style.color = 'white';
    // title12.style.color = 'black';
    path8386.style.fill = 'green';
    path8404.style.fill = 'green';
    path8406.style.fill = 'green';
    path8417.style.fill = 'green';
})

elvesArrows.addEventListener('mouseleave', () => {
    title12.style.visibility = 'hidden';
    returnBg();
    returnColorsTemerianLily();
})