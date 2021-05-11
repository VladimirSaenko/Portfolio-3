
"use strict"

let mando = document.getElementById("mando");
let container = document.getElementById("container");
let toggle = document.getElementById("slider");
let gitSupp = document.getElementById("gitSupp");
let waySpan = document.getElementById("way");
let isActive = false;

function activateMando() {
    if(!isActive){
        mando.style.visibility = 'visible';
        gitSupp.style.visibility = 'visible';
        container.style.background = '#121011';
        toggle.style.backgroundImage = "linear-gradient(#000000,#5a5252,#585552, #6d6565, #000000)";
        waySpan.style.opacity = 1;
        waySpan.style.visibility = "visible";
    }
    else if(isActive){
        mando.style.visibility = 'hidden';
        gitSupp.style.visibility = 'hidden';
        container.style.background = '#5ec4e0';
        toggle.style.backgroundImage = "linear-gradient( #aefaa7, #00ff22, #1eff00, #33ff00, #aefda7 )";
        waySpan.style.opacity = 0;
        waySpan.style.visibility = "hidden";
    }
    isActive = !isActive;  
}