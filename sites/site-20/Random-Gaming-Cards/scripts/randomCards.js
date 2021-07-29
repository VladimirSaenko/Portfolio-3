
"use strict";

let m1card = document.getElementById("m1");
let m2card = document.getElementById("m2");
let m3card = document.getElementById("m3");
let m4card = document.getElementById("m4");
let m5card = document.getElementById("m5");
let m6card = document.getElementById("m6");
let m7card = document.getElementById("m7");
let m8card = document.getElementById("m8");
let m9card = document.getElementById("m9");
let m10card = document.getElementById("m10");
let m11card = document.getElementById("m11");
let m12card = document.getElementById("m12");
let l1card = document.getElementById("l1");
let l2card = document.getElementById("l2");
let l3card = document.getElementById("l3");
let l4card = document.getElementById("l4");
let l5card = document.getElementById("l5");
let l6card = document.getElementById("l6");
let l7card = document.getElementById("l7");
let l8card = document.getElementById("l8");
let l9card = document.getElementById("l9");
let l10card = document.getElementById("l10");
let l11card = document.getElementById("l11");
let l12card = document.getElementById("l12");
let r1card = document.getElementById("r1");
let r2card = document.getElementById("r2");
let r3card = document.getElementById("r3");
let r4card = document.getElementById("r4");
let r5card = document.getElementById("r5");
let r6card = document.getElementById("r6");
let r7card = document.getElementById("r7");
let r8card = document.getElementById("r8");
let r9card = document.getElementById("r9");
let r10card = document.getElementById("r10");
let r11card = document.getElementById("r11");
let r12card = document.getElementById("r12");
let c1 = getRandomInt(1,5);
let c2 = getRandomInt(1,5);
let c3 = getRandomInt(1,5);
let c4 = getRandomInt(1,5);
let c5 = getRandomInt(1,5);
let c6 = getRandomInt(1,5);
let c7 = getRandomInt(1,5);
let c8 = getRandomInt(1,5);
let c9 = getRandomInt(1,5);
let c10 = getRandomInt(1,5);
let c11 = getRandomInt(1,5);
let c12 = getRandomInt(1,5);

function getRandomCard() {
  if(c1 == 1) {
    m1card.classList.add('peaks');
    r1card.classList.add('peaks');
    l1card.classList.add('peaks');
  }
  if(c1 == 2) {
    m1card.classList.add('clubs');
    r1card.classList.add('clubs');
    l1card.classList.add('clubs');
  }
  if(c1 == 3) {
    m1card.classList.add('heart');
    r1card.classList.add('heart');
    l1card.classList.add('heart');
  }
  if(c1 == 4) {
    m1card.classList.add('diam');
    r1card.classList.add('diam');
    l1card.classList.add('diam');
  }
  if(c2 == 1) {
    m2card.classList.add('peaks');
    r2card.classList.add('peaks');
    l2card.classList.add('peaks');
  }
  if(c2 == 2) {
    m2card.classList.add('clubs');
    r2card.classList.add('clubs');
    l2card.classList.add('clubs');
  }
  if(c2 == 3) {
    m2card.classList.add('heart');
    r2card.classList.add('heart');
    l2card.classList.add('heart');
  }
  if(c2 == 4) {
    m2card.classList.add('diam');
    r2card.classList.add('diam');
    l2card.classList.add('diam');
  }
  if(c3 == 1) {
    m3card.classList.add('peaks');
    r3card.classList.add('peaks');
    l3card.classList.add('peaks');
  }
  if(c3 == 2) {
    m3card.classList.add('clubs');
    r3card.classList.add('clubs');
    l3card.classList.add('clubs');
  }
  if(c3 == 3) {
    m3card.classList.add('heart');
    r3card.classList.add('heart');
    l3card.classList.add('heart');
  }
  if(c3 == 4) {
    m3card.classList.add('diam');
    r3card.classList.add('diam');
    l3card.classList.add('diam');
  }
  if(c4 == 1) {
    m4card.classList.add('peaks');
    r4card.classList.add('peaks');
    l4card.classList.add('peaks');
  }
  if(c4 == 2) {
    m4card.classList.add('clubs');
    r4card.classList.add('clubs');
    l4card.classList.add('clubs');
  }
  if(c4 == 3) {
    m4card.classList.add('heart');
    r4card.classList.add('heart');
    l4card.classList.add('heart');
  }
  if(c4 == 4) {
    m4card.classList.add('diam');
    r4card.classList.add('diam');
    l4card.classList.add('diam');
  }
  if(c5 == 1) {
    m5card.classList.add('peaks');
    r5card.classList.add('peaks');
    l5card.classList.add('peaks');
  }
  if(c5 == 2) {
    m5card.classList.add('clubs');
    r5card.classList.add('clubs');
    l5card.classList.add('clubs');
  }
  if(c5 == 3) {
    m5card.classList.add('heart');
    r5card.classList.add('heart');
    l5card.classList.add('heart');
  }
  if(c5 == 4) {
    m5card.classList.add('diam');
    r5card.classList.add('diam');
    l5card.classList.add('diam');
  }
  if(c6 == 1) {
    m6card.classList.add('peaks');
    r6card.classList.add('peaks');
    l6card.classList.add('peaks');
  }
  if(c6 == 2) {
    m6card.classList.add('clubs');
    r6card.classList.add('clubs');
    l6card.classList.add('clubs');
  }
  if(c6 == 3) {
    m6card.classList.add('heart');
    r6card.classList.add('heart');
    l6card.classList.add('heart');
  }
  if(c6 == 4) {
    m6card.classList.add('diam');
    r6card.classList.add('diam');
    l6card.classList.add('diam');
  }
  if(c7 == 1) {
    m7card.classList.add('peaks');
    r7card.classList.add('peaks');
    l7card.classList.add('peaks');
  }
  if(c7 == 2) {
    m7card.classList.add('clubs');
    r7card.classList.add('clubs');
    l7card.classList.add('clubs');
  }
  if(c7 == 3) {
    m7card.classList.add('heart');
    r7card.classList.add('heart');
    l7card.classList.add('heart');
  }
  if(c7 == 4) {
    m7card.classList.add('diam');
    r7card.classList.add('diam');
    l7card.classList.add('diam');
  }
  if(c8 == 1) {
    m8card.classList.add('peaks');
    r8card.classList.add('peaks');
    l8card.classList.add('peaks');
  }
  if(c8 == 2) {
    m8card.classList.add('clubs');
    r8card.classList.add('clubs');
    l8card.classList.add('clubs');
  }
  if(c8 == 3) {
    m8card.classList.add('heart');
    r8card.classList.add('heart');
    l8card.classList.add('heart');
  }
  if(c8 == 4) {
    m8card.classList.add('diam');
    r8card.classList.add('diam');
    l8card.classList.add('diam');
  }
  if(c9 == 1) {
    m9card.classList.add('peaks');
    r9card.classList.add('peaks');
    l9card.classList.add('peaks');
  }
  if(c9 == 2) {
    m9card.classList.add('clubs');
    r9card.classList.add('clubs');
    l9card.classList.add('clubs');
  }
  if(c9 == 3) {
    m9card.classList.add('heart');
    r9card.classList.add('heart');
    l9card.classList.add('heart');
  }
  if(c9 == 4) {
    m9card.classList.add('diam');
    r9card.classList.add('diam');
    l9card.classList.add('diam');
  }
  if(c10 == 1) {
    m10card.classList.add('peaks');
    r10card.classList.add('peaks');
    l10card.classList.add('peaks');
  }
  if(c10 == 2) {
    m10card.classList.add('clubs');
    r10card.classList.add('clubs');
    l10card.classList.add('clubs');
  }
  if(c10 == 3) {
    m10card.classList.add('heart');
    r10card.classList.add('heart');
    l10card.classList.add('heart');
  }
  if(c10 == 4) {
    m10card.classList.add('diam');
    r10card.classList.add('diam');
    l10card.classList.add('diam');
  }
  if(c11 == 1) {
    m11card.classList.add('peaks');
    r11card.classList.add('peaks');
    l11card.classList.add('peaks');
  }
  if(c11 == 2) {
    m11card.classList.add('clubs');
    r11card.classList.add('clubs');
    l11card.classList.add('clubs');
  }
  if(c11 == 3) {
    m11card.classList.add('heart');
    r11card.classList.add('heart');
    l11card.classList.add('heart');
  }
  if(c11 == 4) {
    m11card.classList.add('diam');
    r11card.classList.add('diam');
    l11card.classList.add('diam');
  }
  if(c12 == 1) {
    m12card.classList.add('peaks');
    r12card.classList.add('peaks');
    l12card.classList.add('peaks');
  }
  if(c12 == 2) {
    m12card.classList.add('clubs');
    r12card.classList.add('clubs');
    l12card.classList.add('clubs');
  }
  if(c12 == 3) {
    m12card.classList.add('heart');
    r12card.classList.add('heart');
    l12card.classList.add('heart');
  }
  if(c12 == 4) {
    m12card.classList.add('diam');
    r12card.classList.add('diam');
    l12card.classList.add('diam');
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomCard(); //This is Sparta!
